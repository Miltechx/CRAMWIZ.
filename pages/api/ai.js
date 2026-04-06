// pages/api/ai.js
// Uses Groq API with retry logic for high concurrency (300+ users)
// Get your free key at: https://console.groq.com

export const config = { maxDuration: 30 }; // Extend Vercel timeout to 30s

const GROQ_KEY = process.env.GROQ_API_KEY;

const MODELS = [
  'llama-3.3-70b-versatile',
  'llama3-70b-8192',
  'mixtral-8x7b-32768',
  'gemma2-9b-it',
];

async function callGroq(model, prompt, maxTokens, attempt = 0) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_KEY}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: String(prompt) }],
      max_tokens: Math.min(Number(maxTokens) || 2000, 8000),
      temperature: 0.35,
    }),
  });

  const data = await res.json();
  const errMsg = data?.error?.message || '';

  // Rate limited — wait and retry up to 3 times
  if ((res.status === 429 || errMsg.includes('rate')) && attempt < 3) {
    const waitMs = (attempt + 1) * 2000; // 2s, 4s, 6s backoff
    await new Promise(r => setTimeout(r, waitMs));
    return callGroq(model, prompt, maxTokens, attempt + 1);
  }

  return { res, data, errMsg };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!GROQ_KEY) return res.status(500).json({ error: 'GROQ_API_KEY not set in Vercel environment variables.' });

  const { prompt, maxTokens = 2000, returnRaw = false } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' });

  // Upstash rate limiting (28 req/min per key)
  const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
  const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const bucket = `cw_ai_${Math.floor(Date.now() / 60000)}`;
      const r = await fetch(`${UPSTASH_URL}/incr/${bucket}`, {
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      });
      const d = await r.json();
      if (d.result === 1) {
        await fetch(`${UPSTASH_URL}/expire/${bucket}/120`, {
          headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
        });
      }
      if (d.result > 28) {
        // Queue is full — tell client to retry in 10 seconds
        res.setHeader('Retry-After', '10');
        return res.status(429).json({ error: 'Server is busy — please try again in a few seconds.', retry: true });
      }
    } catch { /* Redis error — let request through */ }
  }

  let lastError = 'All AI models are currently unavailable. Please try again in a moment.';

  for (const model of MODELS) {
    try {
      const { res: apiRes, data, errMsg } = await callGroq(model, prompt, maxTokens);

      if (!apiRes.ok || errMsg) {
        console.warn(`Model ${model} unavailable:`, errMsg);
        lastError = errMsg || lastError;
        continue;
      }

      const text = data?.choices?.[0]?.message?.content || '';
      if (!text) { lastError = 'Empty response from AI.'; continue; }

      if (returnRaw) return res.status(200).json({ result: text.trim() });

      const clean = text
        .replace(/^```json\s*/m, '')
        .replace(/^```\s*/m, '')
        .replace(/```\s*$/m, '')
        .trim();

      return res.status(200).json({ result: clean });
    } catch (err) {
      console.warn(`Model ${model} error:`, err.message);
      lastError = err.message;
    }
  }

  return res.status(500).json({ error: lastError });
}
