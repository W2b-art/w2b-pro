/* Targeted text-surgery helpers for the pro site's hand-authored
   trilingual string tables (js/site.js's T, and the lang-first copy
   blocks in booking.html, devis.html, eventos.html, moda.html,
   restaurants.html, retrato.html). Ported from the art site's
   .admin/lib/textedit.js "Generic site/page text editing" section —
   these primitives carry no gallery/trunk-specific assumptions, so
   they apply unchanged to this repo's own text tables.

   Deliberately NOT a full JS parser: every mutation finds an exact,
   unambiguous anchor in the real file text and edits only that span,
   throwing instead of guessing when its anchor isn't found verbatim.
   Covered by .admin/test_textedit.js, including byte-identical
   round-trip checks.

   The pro site's own photo data (js/gallery-data.js's window.GALLERY)
   is NOT handled here — unlike art's gallery-data.js, it is already
   plain single-line JSON after the `window.GALLERY=` prefix, so
   server.js edits it with a plain JSON.parse/JSON.stringify round
   trip instead of string surgery (see server.js's parseGalleryFile). */

'use strict';

// ---------------------------------------------------------------------
// Low-level, string-aware scanning primitives
// ---------------------------------------------------------------------

/* String-aware forward brace/bracket scan from `openIdx` (which must be
   the opening char itself). Returns the index just past the matching
   close char, or -1. Treats `"` and `'` quoted strings as opaque. */
function scanMatch(src, openIdx, openCh, closeCh, hardEnd) {
  let depth = 0;
  const end = hardEnd == null ? src.length : hardEnd;
  for (let i = openIdx; i < end; i++) {
    const ch = src[i];
    if (ch === '/' && src[i + 1] === '/') {
      const nl = src.indexOf('\n', i);
      i = nl === -1 || nl >= end ? end : nl;
      continue;
    }
    if (ch === '/' && src[i + 1] === '*') {
      const close = src.indexOf('*/', i + 2);
      i = close === -1 || close + 1 >= end ? end : close + 1;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const q = ch;
      let j = i + 1;
      while (j < end && !(src[j] === q && src[j - 1] !== '\\')) j++;
      i = j;
      continue;
    }
    if (ch === openCh) depth++;
    else if (ch === closeCh) {
      depth--;
      if (depth === 0) return i + 1;
    }
  }
  return -1;
}

/* Split the comma-separated top-level content of a `{...}` or `[...]`
   span into raw {start,end} chunks (string/brace/bracket-aware).
   `openIdx` is the opening `{`/`[`; `closeIdx` is the index of the
   matching closing `}`/`]` ITSELF (scanMatch's return value minus 1). */
function splitTopLevelElements(src, openIdx, closeIdx) {
  const elems = [];
  let i = openIdx + 1;
  let depth = 0;
  let start = i;
  while (i < closeIdx) {
    const ch = src[i];
    if (ch === '"' || ch === "'") {
      const q = ch;
      let j = i + 1;
      while (j < closeIdx && !(src[j] === q && src[j - 1] !== '\\')) j++;
      i = j + 1;
      continue;
    }
    if (ch === '{' || ch === '[') { depth++; i++; continue; }
    if (ch === '}' || ch === ']') { depth--; i++; continue; }
    if (ch === ',' && depth === 0) {
      elems.push({ start, end: i });
      start = i + 1;
      i++;
      continue;
    }
    i++;
  }
  if (start < closeIdx && src.slice(start, closeIdx).trim().length) {
    elems.push({ start, end: closeIdx });
  }
  return elems;
}

/* Top-level `key: value` fields of an object span [objStart, objEnd)
   (objEnd is JUST PAST the closing `}`, i.e. scanMatch's return value). */
function splitTopLevelFields(src, objStart, objEnd) {
  return splitTopLevelElements(src, objStart, objEnd - 1)
    .map((f) => {
      const text = src.slice(f.start, f.end);
      const m = text.match(/^\s*([A-Za-z_$][\w$]*)\s*:/);
      return m ? { key: m[1], start: f.start, end: f.end } : null;
    })
    .filter(Boolean);
}

function esc(s) { return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"'); }

function unquote(text) {
  const t = text.trim();
  const m = t.match(/^"([\s\S]*)"$/) || t.match(/^'([\s\S]*)'$/);
  if (!m) return t;
  const q = t[0];
  return m[1].replace(new RegExp('\\\\' + q, 'g'), q).replace(/\\\\/g, '\\');
}

// ---------------------------------------------------------------------
// Generic site/page text editing — var/const NAME = { lang: { key:
// "value", ... }, ... } blocks (site.js's T, booking.html's T,
// devis.html's UI, eventos.html's EV, moda.html's MD,
// restaurants.html's RS, retrato.html's RT). Every one of these files
// follows this exact shape, just with different lang sets and key
// names, so one generic reader/writer covers all of them.
// ---------------------------------------------------------------------

function findVarObjectSpan(src, varName) {
  const re = new RegExp('(?:var|const|window\\.)\\s*' + varName + '\\s*=\\s*\\{');
  const m = re.exec(src);
  if (!m) throw new Error('findVarObjectSpan: ' + varName + ' not found');
  const braceStart = m.index + m[0].length - 1;
  const end = scanMatch(src, braceStart, '{', '}');
  if (end === -1) throw new Error('findVarObjectSpan: unbalanced {} for ' + varName);
  return { start: braceStart, end };
}

/* Read every lang -> key -> string out of a LANG-FIRST block. */
function readPageTextBlock(src, varName) {
  const span = findVarObjectSpan(src, varName);
  const langFields = splitTopLevelFields(src, span.start, span.end);
  const out = {};
  for (const lf of langFields) {
    const braceRel = src.indexOf('{', lf.start);
    if (braceRel === -1 || braceRel >= lf.end) continue;
    const objEnd = scanMatch(src, braceRel, '{', '}', lf.end);
    if (objEnd === -1) continue;
    const kv = {};
    for (const f of splitTopLevelFields(src, braceRel, objEnd)) {
      const t = src.slice(f.start, f.end);
      kv[f.key] = unquote(t.slice(t.indexOf(':') + 1));
    }
    out[lf.key] = kv;
  }
  return out;
}

/* Upsert one lang+key's string value in a LANG-FIRST block (also how
   "add a new key" works — call once per lang that should carry it). */
function setPageTextField(src, varName, lang, key, value) {
  const span = findVarObjectSpan(src, varName);
  const lf = splitTopLevelFields(src, span.start, span.end).find((f) => f.key === lang);
  if (!lf) throw new Error('setPageTextField: lang "' + lang + '" not found in ' + varName);
  const braceRel = src.indexOf('{', lf.start);
  const objEnd = scanMatch(src, braceRel, '{', '}', lf.end);
  if (objEnd === -1) throw new Error('setPageTextField: malformed ' + varName + '.' + lang);
  const kvFields = splitTopLevelFields(src, braceRel, objEnd);
  const existing = kvFields.find((f) => f.key === key);
  const newFieldText = key + ':"' + esc(value) + '"';

  if (existing) {
    let start = existing.start;
    while (/\s/.test(src[start])) start++;
    return src.slice(0, start) + newFieldText + src.slice(existing.end);
  }
  const lastField = kvFields[kvFields.length - 1];
  let insAt = lastField ? lastField.end : braceRel + 1;
  if (src[insAt] === ',') insAt++;
  while (src[insAt] === ' ') insAt++;
  const sep = lastField ? ',' : '';
  return src.slice(0, insAt) + sep + newFieldText + src.slice(insAt);
}

/* Remove `key` from every lang sub-object of a LANG-FIRST block that has
   it. Re-finds spans fresh after each removal — these blocks are small
   enough that this is cheap, and it sidesteps stale-offset bugs. */
function deletePageTextKey(src, varName, key) {
  for (;;) {
    const span = findVarObjectSpan(src, varName);
    const langFields = splitTopLevelFields(src, span.start, span.end);
    let removed = false;
    for (const lf of langFields) {
      const braceRel = src.indexOf('{', lf.start);
      if (braceRel === -1 || braceRel >= lf.end) continue;
      const objEnd = scanMatch(src, braceRel, '{', '}', lf.end);
      if (objEnd === -1) continue;
      const existing = splitTopLevelFields(src, braceRel, objEnd).find((f) => f.key === key);
      if (!existing) continue;
      let start = existing.start;
      while (/\s/.test(src[start])) start++;
      let end = existing.end;
      if (src[end] === ',') {
        end++;
        while (src[end] === ' ') end++;
      } else {
        let s2 = start;
        while (s2 > braceRel && /\s/.test(src[s2 - 1])) s2--;
        if (src[s2 - 1] === ',') s2--;
        start = s2;
      }
      src = src.slice(0, start) + src.slice(end);
      removed = true;
      break;
    }
    if (!removed) return src;
  }
}

module.exports = {
  scanMatch, splitTopLevelElements, splitTopLevelFields, esc, unquote,
  findVarObjectSpan, readPageTextBlock, setPageTextField, deletePageTextKey
};
