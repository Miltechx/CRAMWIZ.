// pages/api/db.js — Upstash Redis via REST API

const URL   = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

// Simple in-memory fallback for dev
const mem = {};

async function rGet(key) {
  if (!URL) return mem[key] ?? null;
  try {
    const r = await fetch(`${URL}/get/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const d = await r.json();
    if (d.result == null) return null;
    return JSON.parse(d.result); // result is the stored JSON string
  } catch(e) {
    console.error('rGet error', key, e.message);
    return mem[key] ?? null;
  }
}

async function rSet(key, value) {
  // Store value as plain JSON string in Redis body
  const serialized = JSON.stringify(value);
  mem[key] = value;
  if (!URL) return;
  try {
    // Use Upstash pipeline format — most reliable for large values
    const r = await fetch(`${URL}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify([['SET', key, serialized]]),
    });
    const d = await r.json();
    if (d[0]?.error) console.error('rSet Redis error:', d[0].error);
  } catch(e) {
    console.error('rSet error', key, e.message);
  }
}

async function rDel(key) {
  delete mem[key];
  if (!URL) return;
  try {
    await fetch(`${URL}/del/${encodeURIComponent(key)}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
  } catch {}
}

const ALLOWED = ['users','codes','subs','ambassadors','feedback','seeded','announcement'];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { action, key, value, receiptId } = req.body || {};

  // Reset all CramWiz data
  if (action === 'flush_all') {
    const keys = ALLOWED.map(k => `cw_${k}`);
    await Promise.all(keys.map(k => rDel(k)));
    return res.status(200).json({ ok: true });
  }

  // Get receipt image
  if (action === 'get_receipt') {
    if (!receiptId) return res.status(400).json({ error: 'Missing receiptId' });
    const img = await rGet(`cw_receipt_${receiptId}`);
    return res.status(200).json({ value: img });
  }

  // Save receipt image separately
  if (action === 'set_receipt') {
    if (!receiptId || !value) return res.status(400).json({ error: 'Missing receiptId or value' });
    await rSet(`cw_receipt_${receiptId}`, value);
    return res.status(200).json({ ok: true });
  }

  // Normal get / set
  if (!key || !ALLOWED.includes(key))
    return res.status(400).json({ error: 'Invalid key: ' + key });

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
  } catch(e) {
    console.error('DB handler error:', e.message);
    return res.status(500).json({ error: e.message });
  }
}
