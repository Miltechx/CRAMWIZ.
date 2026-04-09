// pages/api/db.js — Shared database via Upstash Redis
// No client secret needed — Upstash credentials are server-only

const UPSTASH_URL   = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const mem = {};

async function rGet(key) {
  if (!UPSTASH_URL) return mem[key] ?? null;
  try {
    const r = await fetch(`${UPSTASH_URL}/get/${key}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    });
    const d = await r.json();
    if (d.result == null) return null;
    return JSON.parse(d.result);
  } catch { return mem[key] ?? null; }
}

async function rSet(key, value) {
  mem[key] = value;
  if (!UPSTASH_URL) return;
  try {
    await fetch(`${UPSTASH_URL}/set/${key}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: JSON.stringify(value) }),
    });
  } catch (e) { console.error('Redis set error:', e.message); }
}

async function rDel(key) {
  delete mem[key];
  if (!UPSTASH_URL) return;
  try {
    await fetch(`${UPSTASH_URL}/del/${key}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    });
  } catch {}
}

const ALLOWED_KEYS = ['users','codes','subs','ambassadors','feedback','seeded','announcement'];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { action, key, value, receiptId } = req.body || {};

  // Flush all CramWiz keys (admin reset)
  if (action === 'flush_all') {
    const keys = ['cw_users','cw_codes','cw_subs','cw_ambassadors','cw_feedback','cw_seeded','cw_announcement'];
    await Promise.all(keys.map(k => rDel(k)));
    return res.status(200).json({ ok: true });
  }

  // Get receipt image by submission ID
  if (action === 'get_receipt') {
    if (!receiptId) return res.status(400).json({ error: 'Missing receiptId' });
    const img = await rGet(`cw_receipt_${receiptId}`);
    return res.status(200).json({ value: img });
  }

  // Save receipt image separately (keeps subs array small)
  if (action === 'set_receipt') {
    if (!receiptId || !value) return res.status(400).json({ error: 'Missing receiptId or value' });
    await rSet(`cw_receipt_${receiptId}`, value);
    return res.status(200).json({ ok: true });
  }

  // Normal get/set
  if (!key || !ALLOWED_KEYS.includes(key))
    return res.status(400).json({ error: 'Invalid key' });

  try {
    if (action === 'get') {
      const data = await rGet(`cw_${key}`);
      return res.status(200).json({ value: data });
    }
    if (action === 'set') {
      if (value === undefined) return res.status(400).json({ error: 'Missing value' });
      await rSet(`cw_${key}`, value);
      return res.status(200).json({ ok: true });
    }
    return res.status(400).json({ error: 'Invalid action' });
  } catch (e) {
    return res.status(500).json({ error: 'DB error: ' + e.message });
  }
}
