#!/usr/bin/env node
/* W2b pro site — local admin tool.
   LOCAL ONLY. Never deployed, never public, never touches git except
   the scoped publish button below.
   Run:  node .admin/server.js
   Then open the URL it prints (default http://127.0.0.1:4849 — one
   port above the art site's admin tool, so both can run at once).

   Architecture mirrors the art site's .admin/server.js (same login/
   session/publish pattern, same /api/state + /api/action shape) but
   adapted to this repo's much simpler, flat data model: no trunk/
   branch/after-dark concept at all, 5 fixed photo categories
   (js/gallery-data.js's window.GALLERY, already-minified JSON — edited
   by JSON.parse/stringify, not string surgery, see lib/gallery.js),
   and a Texts tab covering the 7 hand-authored trilingual string
   blocks this repo actually has (see lib/textedit.js — the SAME
   generic lang-first reader/writer the art admin's Texts tab uses).
   2026-11-26: built as the pro counterpart to that art admin feature,
   per Guillaume's "clone the whole admin, different aesthetics" ask. */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const GALLERY_DATA_PATH = path.join(ROOT, 'js', 'gallery-data.js');
const CONFIG_PATH = path.join(__dirname, 'config.json');
const IMAGES_ROOT = path.join(ROOT, 'images');
const ARCHIVE_ROOT = path.join(IMAGES_ROOT, '_archive');
const UPLOAD_TMP_ROOT = path.join(__dirname, '_upload_tmp');

const te = require('./lib/textedit');
const { readPageTextBlock, setPageTextField, deletePageTextKey } = te;
const { parseGalleryFile, serializeGalleryFile } = require('./lib/gallery');
const { processUpload } = require('./lib/resize');

const PORT = process.env.PORT ? Number(process.env.PORT) : 4849;

// Every hand-authored trilingual string block in this repo — see the
// art admin's own PAGE_TEXT_FILES note for how these were found (grep
// for a top-level `var/const NAME = { <lang>: {`, confirm each lang
// sub-object is real copy and not a pricing/config table sitting in
// the same file). js/lang.js (457 lines) and js/services-i18n.js
// (341 lines) were found to be DEAD — not loaded by any page — and
// are deliberately excluded here, not forgotten.
const PAGE_TEXT_FILES = [
  { id: 'sitewide', label: 'Site-wide (js/site.js — loaded on every page)', file: path.join(ROOT, 'js', 'site.js'), rel: 'js/site.js', varName: 'T', langs: ['es', 'en', 'fr'] },
  { id: 'booking', label: 'Booking page', file: path.join(ROOT, 'booking.html'), rel: 'booking.html', varName: 'T', langs: ['es', 'en', 'fr'] },
  { id: 'devis', label: 'Quote estimator (devis.html)', file: path.join(ROOT, 'devis.html'), rel: 'devis.html', varName: 'UI', langs: ['es', 'en', 'fr'] },
  { id: 'eventos', label: 'Events gallery page', file: path.join(ROOT, 'eventos.html'), rel: 'eventos.html', varName: 'EV', langs: ['es', 'en', 'fr'] },
  { id: 'moda', label: 'Fashion gallery page', file: path.join(ROOT, 'moda.html'), rel: 'moda.html', varName: 'MD', langs: ['es', 'en', 'fr'] },
  { id: 'restaurants', label: 'Hospitality gallery page', file: path.join(ROOT, 'restaurants.html'), rel: 'restaurants.html', varName: 'RS', langs: ['es', 'en', 'fr'] },
  { id: 'retrato', label: 'Portraits gallery page', file: path.join(ROOT, 'retrato.html'), rel: 'retrato.html', varName: 'RT', langs: ['es', 'en', 'fr'] },
  { id: 'products', label: 'Products gallery page', file: path.join(ROOT, 'products.html'), rel: 'products.html', varName: 'PRD', langs: ['es', 'en', 'fr'] }
];

const GIT_SCOPE = ['images', 'js/gallery-data.js', 'js/site.js', 'booking.html', 'devis.html', 'eventos.html', 'moda.html', 'restaurants.html', 'retrato.html', 'products.html', 'work.html'];

function git(args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' });
}
function gitStatusScoped() {
  let out;
  try {
    out = git(['status', '--porcelain', '--'].concat(GIT_SCOPE));
  } catch (e) {
    throw new Error('git status failed: ' + (e.stderr || e.message));
  }
  return out.split(/\r?\n/).filter(Boolean).map((line) => {
    const status = line.slice(0, 2).trim();
    let file = line.slice(3);
    const arrow = file.indexOf(' -> ');
    if (arrow !== -1) file = file.slice(arrow + 4);
    return { status, file };
  });
}
function gitPublish(message) {
  const pending = gitStatusScoped();
  if (!pending.length) throw new Error('nothing to publish — no pending changes in images/, gallery-data.js, site.js, or the page files');
  git(['add', '--'].concat(GIT_SCOPE));
  const staged = git(['diff', '--cached', '--name-only']).split(/\r?\n/).filter(Boolean);
  const unexpected = staged.filter((f) => !GIT_SCOPE.some((p) => f === p || f.startsWith(p + '/')));
  if (unexpected.length) {
    try { git(['reset', '--']); } catch (e) { /* best effort unstage */ }
    throw new Error('refusing to publish: file(s) outside this tool\'s scope got staged (not committed) — ' + unexpected.join(', '));
  }
  const commitMessage = (message && message.trim()) || ('Admin: ' + staged.length + ' file(s) updated via local pro admin tool');
  try {
    git(['commit', '-m', commitMessage]);
  } catch (e) {
    throw new Error('git commit failed: ' + (e.stderr || e.message));
  }
  try {
    git(['push']);
  } catch (e) {
    throw new Error('committed locally but push failed: ' + (e.stderr || e.message) + ' — run `git push` by hand');
  }
  return { committed: staged.length };
}

// ---------------------------------------------------------------------
// Config / auth — identical pattern to the art admin tool
// ---------------------------------------------------------------------
function ensureConfig() {
  if (fs.existsSync(CONFIG_PATH)) return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  const password = crypto.randomBytes(9).toString('base64url');
  const cfg = { password };
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(cfg, null, 2));
  console.log('\nGenerated a new local admin password (saved to .admin/config.json, gitignored):');
  console.log('  ' + password);
  console.log('Change it any time by editing .admin/config.json.\n');
  return cfg;
}
let config = ensureConfig();
const sessions = new Set();
function isAuthed(req) {
  const cookie = req.headers.cookie || '';
  const m = cookie.match(/w2bprosession=([a-f0-9]+)/);
  return !!(m && sessions.has(m[1]));
}

// ---------------------------------------------------------------------
// State
// ---------------------------------------------------------------------
// Which categories a live page actually shows: site.js's renderGalleries
// only puts a category on the page when some body has
// data-only="<category>" (a dedicated page) — scanned fresh so this
// stays correct as pages are added. Found 2026-11-26: "products" has 6
// photos in window.GALLERY and no page at all (no products.html, and
// work.html explicitly data-skips every category) — editing it here
// currently has no visible effect on the site.
function liveCategoryIds() {
  const ids = new Set();
  for (const f of fs.readdirSync(ROOT)) {
    if (!f.endsWith('.html')) continue;
    let html;
    try { html = fs.readFileSync(path.join(ROOT, f), 'utf8'); } catch (e) { continue; }
    const m = /data-only="([^"]+)"/.exec(html);
    if (m) ids.add(m[1]);
  }
  return ids;
}

function buildState() {
  const { data } = parseGalleryFile(fs.readFileSync(GALLERY_DATA_PATH, 'utf8'));
  const live = liveCategoryIds();
  const galleries = Object.keys(data).map((cat) => ({
    id: cat,
    live: live.has(cat),
    images: data[cat].map((im, idx) => ({ idx, src: im.src, full: im.full, alt: im.alt || '', ar: im.ar || null }))
  }));

  const pages = PAGE_TEXT_FILES.map((p) => {
    const src = fs.readFileSync(p.file, 'utf8');
    let textData = null, error = null;
    try { textData = readPageTextBlock(src, p.varName); } catch (e) { error = e.message; }
    return { id: p.id, label: p.label, rel: p.rel, langs: p.langs, data: textData, error };
  });

  return { galleries, texts: { pages } };
}

// ---------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------
function folderFor(category) {
  return path.join(IMAGES_ROOT, category);
}

function nextFileBase(categoryData, targetDir) {
  // Scans both the live JSON entries AND the actual folder — these
  // categories hold more raw photos than are currently selected onto
  // the site (normal: shoot, cull, only the best go into window.GALLERY),
  // so a number that's merely unreferenced in the data can still be
  // sitting on disk as an unused library file. Folder wins either way.
  let max = 0;
  for (const im of categoryData) {
    const m = /^(\d+)\.jpg$/i.exec(im.full.split('/').pop());
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  if (fs.existsSync(targetDir)) {
    for (const f of fs.readdirSync(targetDir)) {
      const m = /^(\d+)(-m)?\.jpg$/i.exec(f);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    }
  }
  return String(max + 1).padStart(2, '0');
}

async function applyAction(action) {
  const raw = fs.readFileSync(GALLERY_DATA_PATH, 'utf8');

  if (action.type === 'set-photo-alt') {
    const { category, idx, alt } = action;
    const { data, prefix, suffix } = parseGalleryFile(raw);
    if (!data[category] || !data[category][idx]) throw new Error('set-photo-alt: no photo at ' + category + '[' + idx + ']');
    data[category][idx].alt = String(alt || '');
    fs.writeFileSync(GALLERY_DATA_PATH, serializeGalleryFile(prefix, data, suffix));
    return { ok: true };
  }

  if (action.type === 'reorder-photo') {
    const { category, idx, newIdx } = action;
    const { data, prefix, suffix } = parseGalleryFile(raw);
    const arr = data[category];
    if (!arr || !arr[idx]) throw new Error('reorder-photo: no photo at ' + category + '[' + idx + ']');
    const [item] = arr.splice(idx, 1);
    arr.splice(Math.max(0, Math.min(newIdx, arr.length)), 0, item);
    fs.writeFileSync(GALLERY_DATA_PATH, serializeGalleryFile(prefix, data, suffix));
    return { ok: true };
  }

  if (action.type === 'delete-photo') {
    // Never hard-deletes: moves both image files into
    // images/_archive/<category>/ (created if needed) and removes the
    // JSON entry, same "move, don't erase" rule the art site's admin
    // follows — this repo's flat list has no archived:true field for
    // anything to read, so staying OUT of the live array (by being
    // physically moved out of images/<category>/) is what "archived"
    // means here.
    const { category, idx } = action;
    const { data, prefix, suffix } = parseGalleryFile(raw);
    const arr = data[category];
    if (!arr || !arr[idx]) throw new Error('delete-photo: no photo at ' + category + '[' + idx + ']');
    const [item] = arr.splice(idx, 1);
    const srcDir = folderFor(category);
    const archDir = path.join(ARCHIVE_ROOT, category);
    fs.mkdirSync(archDir, { recursive: true });
    for (const p of [item.full, item.src]) {
      const name = p.split('/').pop();
      const from = path.join(srcDir, name);
      if (fs.existsSync(from)) fs.renameSync(from, path.join(archDir, name));
    }
    fs.writeFileSync(GALLERY_DATA_PATH, serializeGalleryFile(prefix, data, suffix));
    return { ok: true };
  }

  if (action.type === 'upload') {
    const { category, dataBase64, alt } = action;
    const { data, prefix, suffix } = parseGalleryFile(raw);
    if (!data[category]) throw new Error('upload: unknown category ' + category);
    const buf = Buffer.from(dataBase64, 'base64');
    if (buf.length === 0) throw new Error('upload: empty file');
    if (buf.length > 40 * 1024 * 1024) throw new Error('upload: file too large (>40MB) — pick the original, not an export');
    const targetDir = folderFor(category);
    fs.mkdirSync(targetDir, { recursive: true });
    const base = nextFileBase(data[category], targetDir);
    if (fs.existsSync(path.join(targetDir, base + '.jpg'))) throw new Error('upload: ' + base + '.jpg already exists in ' + category + ' — try again');
    const { fullPath } = await processUpload(buf, targetDir, base);
    const sharp = require(require('path').join(__dirname, 'lib', '..', '..', '..', 'art', '.build', 'node_modules', 'sharp'));
    const meta = await sharp(fullPath).metadata();
    const ar = Math.round((meta.width / meta.height) * 1000) / 1000;
    data[category].push({ src: 'images/' + category + '/' + base + '-m.jpg', full: 'images/' + category + '/' + base + '.jpg', alt: alt || '', ar });
    fs.writeFileSync(GALLERY_DATA_PATH, serializeGalleryFile(prefix, data, suffix));
    return { ok: true, message: 'Uploaded ' + base + '.jpg into ' + category };
  }

  if (action.type === 'set-page-text') {
    const { pageId, key, value } = action;
    const page = PAGE_TEXT_FILES.find((p) => p.id === pageId);
    if (!page) throw new Error('set-page-text: unknown pageId ' + pageId);
    if (!/^[A-Za-z_$][\w$]*$/.test(key)) throw new Error('set-page-text: key must be a valid identifier, got "' + key + '"');
    let src = fs.readFileSync(page.file, 'utf8');
    if (value === null) {
      src = deletePageTextKey(src, page.varName, key);
    } else {
      if (!value || typeof value !== 'object') throw new Error('set-page-text: value must be an object of {lang: text}');
      for (const lang of page.langs) {
        if (value[lang] == null) throw new Error('set-page-text: missing value for lang "' + lang + '" (this page has ' + page.langs.join('/') + ')');
      }
      for (const lang of page.langs) src = setPageTextField(src, page.varName, lang, key, value[lang]);
    }
    fs.writeFileSync(page.file, src);
    return { ok: true };
  }

  throw new Error('unknown action type: ' + action.type);
}

// ---------------------------------------------------------------------
// HTTP plumbing — same shape as the art admin tool
// ---------------------------------------------------------------------
function send(res, status, body, headers) {
  res.writeHead(status, Object.assign({ 'Cache-Control': 'no-store' }, headers || {}));
  res.end(body);
}
function sendJson(res, status, obj) {
  send(res, status, JSON.stringify(obj), { 'Content-Type': 'application/json' });
}
function readBody(req, limit) {
  return new Promise((resolve, reject) => {
    let chunks = [];
    let len = 0;
    req.on('data', (c) => {
      len += c.length;
      if (len > (limit || 2e6)) { req.destroy(); reject(new Error('body too large')); return; }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

const LOGIN_PAGE = `<!doctype html><html><head><meta charset="utf-8">
<title>W2b pro admin — sign in</title>
<style>body{font:15px system-ui;background:#0c1016;color:#eee;display:flex;align-items:center;
justify-content:center;height:100vh;margin:0} form{background:#161c26;padding:32px;border-radius:10px;border:1px solid #232b38}
input{display:block;margin:12px 0;padding:8px;width:220px;font-size:15px;background:#0c1016;border:1px solid #2a3344;color:#eee;border-radius:5px}
button{padding:8px 16px;font-size:15px;cursor:pointer;background:#c8933f;border:1px solid #c8933f;color:#171206;border-radius:5px;font-weight:600}</style></head>
<body><form method="post" action="/login">
<h2>W2b pro — local admin</h2>
<input type="password" name="password" placeholder="password (see .admin/config.json)" autofocus>
<button>Enter</button>
</form></body></html>`;

const server = http.createServer(async (req, res) => {
  try {
    const u = new URL(req.url, 'http://localhost');

    if (req.method === 'POST' && u.pathname === '/login') {
      const body = (await readBody(req, 1e4)).toString('utf8');
      const params = new URLSearchParams(body);
      if (params.get('password') === config.password) {
        const token = crypto.randomBytes(16).toString('hex');
        sessions.add(token);
        send(res, 302, '', { Location: '/', 'Set-Cookie': 'w2bprosession=' + token + '; HttpOnly; SameSite=Strict' });
      } else {
        send(res, 401, LOGIN_PAGE.replace('<h2>', '<p style="color:#f66">Wrong password.</p><h2>'), { 'Content-Type': 'text/html' });
      }
      return;
    }

    if (!isAuthed(req)) {
      if (u.pathname.startsWith('/api/')) {
        sendJson(res, 401, { ok: false, error: 'Session expired (the admin server was restarted) — reload the page and log in again.' });
      } else {
        send(res, 200, LOGIN_PAGE, { 'Content-Type': 'text/html' });
      }
      return;
    }

    if (req.method === 'GET' && u.pathname === '/') {
      send(res, 200, fs.readFileSync(path.join(__dirname, 'admin.html')), { 'Content-Type': 'text/html' });
      return;
    }

    if (req.method === 'GET' && u.pathname === '/api/state') {
      sendJson(res, 200, buildState());
      return;
    }

    if (req.method === 'POST' && u.pathname === '/api/action') {
      const body = (await readBody(req, 60e6)).toString('utf8');
      let action;
      try { action = JSON.parse(body); } catch (e) { sendJson(res, 400, { ok: false, error: 'bad JSON' }); return; }
      try {
        const result = await applyAction(action);
        sendJson(res, 200, Object.assign(result, { state: buildState() }));
      } catch (e) {
        sendJson(res, 400, { ok: false, error: e.message });
      }
      return;
    }

    // live image (images/ or images/_archive/)
    if (req.method === 'GET' && u.pathname.startsWith('/img/')) {
      const rel = decodeURIComponent(u.pathname.slice('/img/'.length));
      const abs = path.join(IMAGES_ROOT, rel);
      if (!abs.startsWith(IMAGES_ROOT) || !fs.existsSync(abs)) { send(res, 404, 'not found'); return; }
      const ext = path.extname(abs).toLowerCase();
      const type = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' }[ext] || 'application/octet-stream';
      send(res, 200, fs.readFileSync(abs), { 'Content-Type': type, 'Cache-Control': 'no-store' });
      return;
    }

    if (req.method === 'GET' && u.pathname === '/api/git/status') {
      try { sendJson(res, 200, { ok: true, files: gitStatusScoped() }); }
      catch (e) { sendJson(res, 500, { ok: false, error: e.message }); }
      return;
    }

    if (req.method === 'POST' && u.pathname === '/api/git/publish') {
      const body = (await readBody(req, 1e4)).toString('utf8');
      let payload = {};
      try { payload = body ? JSON.parse(body) : {}; } catch (e) { sendJson(res, 400, { ok: false, error: 'bad JSON' }); return; }
      try { sendJson(res, 200, Object.assign({ ok: true }, gitPublish(payload.message))); }
      catch (e) { sendJson(res, 400, { ok: false, error: e.message }); }
      return;
    }

    send(res, 404, 'not found');
  } catch (e) {
    sendJson(res, 500, { ok: false, error: e.message });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('W2b pro local admin tool running at http://127.0.0.1:' + PORT);
  console.log('(local only — bound to 127.0.0.1, never deployed)');
});
