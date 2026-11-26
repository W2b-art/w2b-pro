/* js/gallery-data.js is NOT hand-formatted prose like the art site's
   gallery-data.js — it's a single minified line, `window.GALLERY={...};`,
   followed by a handful of other `window.X=` assignments and comments
   (HERO_NIGHT, HCAP_NIGHT, HERO_DAY, HCAP_DAY, WORKCOV, PORTRAIT). So
   unlike every other editor in this tool, this one is plain
   JSON.parse/JSON.stringify, not string surgery — verified to round-trip
   byte-identical (JSON.stringify's compact default output matches this
   file's own hand-typed style exactly: no spaces after `:`/`,`). Every
   other line in the file (the HERO_NIGHT/HERO_DAY/WORKCOV/PORTRAIT
   assignments and the comments around them) is preserved untouched as
   plain prefix/suffix text around the one assignment this module
   rewrites. */
'use strict';

const RE = /window\.GALLERY\s*=\s*(\{[\s\S]*?\});/m;

function parseGalleryFile(src) {
  const m = RE.exec(src);
  if (!m) throw new Error('parseGalleryFile: window.GALLERY=…; assignment not found');
  let data;
  try { data = JSON.parse(m[1]); } catch (e) { throw new Error('parseGalleryFile: window.GALLERY is not valid JSON: ' + e.message); }
  return { data, prefix: src.slice(0, m.index), suffix: src.slice(m.index + m[0].length) };
}

function serializeGalleryFile(prefix, data, suffix) {
  return prefix + 'window.GALLERY=' + JSON.stringify(data) + ';' + suffix;
}

module.exports = { parseGalleryFile, serializeGalleryFile };
