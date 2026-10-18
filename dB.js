// الاتصال بـ Firebase Realtime Database عبر REST (بدون مكتبات)
const DB = "https://tech-f654e-default-rtdb.firebaseio.com";
const TS = { ".sv": "timestamp" };
const api = {
  async get(path, q = "") { const r = await fetch(`${DB}/${path}.json${q}`); if (!r.ok) throw new Error(r.status); return r.json(); },
  async push(path, data) { const r = await fetch(`${DB}/${path}.json`, { method: "POST", body: JSON.stringify(data) }); if (!r.ok) throw new Error(r.status); return r.json(); },
  async count(path) { const o = await api.get(path, "?shallow=true"); return o ? Object.keys(o).length : 0; }
};
