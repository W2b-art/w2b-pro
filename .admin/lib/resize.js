/* Image pipeline for a new pro-site upload — produces the two sizes
   every existing photo in images/<category>/ already has:
     <name>.jpg     full   — longest side <= 2000px, mozjpeg q82
     <name>-m.jpg   medium — width = 1100px (height proportional), q82
   (convention measured directly off real pairs already on disk, e.g.
   images/fashion/18.jpg + 18-m.jpg, images/events/15.jpg + 15-m.jpg —
   this repo has no build tooling of its own, so there was nothing
   written down to go on except the files themselves.)

   This repo has no node_modules of its own (no .build/ directory at
   all). It borrows sharp from the art site's .build/node_modules,
   exactly the way Guillaume already runs its compress script by hand
   ("node ../art/.build/compress.js ...", per the art repo's own
   gallery-data.js header) — same cross-repo dependency, now used
   programmatically instead of from the command line. If that sibling
   checkout isn't there, this throws a clear error instead of a module-
   not-found stack trace. */
'use strict';

const path = require('path');
const fs = require('fs');

const ART_SHARP_PATH = path.join(__dirname, '..', '..', '..', 'art', '.build', 'node_modules', 'sharp');

function loadSharp() {
  if (!fs.existsSync(ART_SHARP_PATH)) {
    throw new Error('resize: sharp not found at ' + ART_SHARP_PATH + ' — this tool borrows it from the art site repo (W2b-Websites/art/.build/node_modules), which must be checked out as a sibling folder');
  }
  return require(ART_SHARP_PATH);
}

const FULL_MAX = 2000;
const MEDIUM_WIDTH = 1100;
const QUALITY = 82;

/* Writes `<base>.jpg` and `<base>-m.jpg` into targetDir from one
   uploaded buffer. Returns the two absolute paths written. */
async function processUpload(buffer, targetDir, base) {
  const sharp = loadSharp();
  const fullPath = path.join(targetDir, base + '.jpg');
  const mediumPath = path.join(targetDir, base + '-m.jpg');
  await sharp(buffer).rotate()
    .resize({ width: FULL_MAX, height: FULL_MAX, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(fullPath);
  await sharp(buffer).rotate()
    .resize({ width: MEDIUM_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(mediumPath);
  return { fullPath, mediumPath };
}

module.exports = { processUpload, FULL_MAX, MEDIUM_WIDTH, QUALITY };
