#!/usr/bin/env node
/* ============================================================
   W2b PRO — responsive image pipeline
   ------------------------------------------------------------
   Generates AVIF + WebP + JPEG at a set of responsive widths for
   each source image, for use with <picture>/srcset in the room
   system (see js/site.js's pictureTag() helper, which activates
   automatically once a gallery-data.js entry carries the fields
   this script writes — see "gallery-data.js wiring" below).

   This mirrors the art site's .build/compress.js conventions
   (resize to fit, strip EXIF via .rotate() + no withMetadata(),
   edit/write only the files you pass in) but adds multi-format +
   multi-width output instead of a single re-encoded JPEG. The
   "-WIDTHw" filename suffix (2026-10-31) matches the art site's
   own responsive pipeline (js/responsive-img.js + js/responsive-
   manifest.js there) rather than a second, incompatible convention.

   Usage (run from the pro/ repo root):
     node .build/responsive.js <file-or-folder> [...more]

   For each input "foo.jpg" this writes, alongside the original:
     foo-480w.avif  foo-480w.webp  foo-480w.jpg
     foo-768w.avif  foo-768w.webp  foo-768w.jpg
     foo-1200w.avif foo-1200w.webp foo-1200w.jpg
     foo-1800w.avif foo-1800w.webp foo-1800w.jpg
     foo-2400w.avif foo-2400w.webp foo-2400w.jpg   (only if the source is >= 2400px)
   Widths wider than the source are skipped (no upscaling).
   The original "foo.jpg" is left untouched — it still works as a
   plain <img src> fallback with zero markup changes, which is why
   this is safe to run without touching any HTML.

   gallery-data.js wiring (once real widths exist for a photo):
     add "widths:[480,768,1200,1800]" (whatever set this script
     actually produced) to that image's object. js/site.js's
     pictureTag() checks for that field — present: emits <picture>
     with avif/webp/jpg srcset; absent (today, for every current
     photo): emits the plain <img> exactly as now. Nothing to
     change in the room system itself when new photos land.
   ============================================================ */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const WIDTHS = [480, 768, 1200, 1800, 2400];
const AVIF_QUALITY = 55; // avif needs a much lower number than jpeg for a similar look
const WEBP_QUALITY = 72;
const JPEG_QUALITY = 78;

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node .build/responsive.js <file-or-folder> [...]");
  process.exit(1);
}

function collect(target) {
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    return fs
      .readdirSync(target)
      .filter((f) => /\.jpe?g$/i.test(f) && !/-\d+w\.(avif|webp|jpe?g)$/i.test(f))
      .map((f) => path.join(target, f));
  }
  return [target];
}

async function processImage(file) {
  const dir = path.dirname(file);
  const base = path.basename(file).replace(/\.jpe?g$/i, "");
  const input = fs.readFileSync(file);
  const meta = await sharp(input).rotate().metadata();
  const srcWidth = meta.width;

  const widths = WIDTHS.filter((w) => w <= srcWidth);
  if (widths[widths.length - 1] !== srcWidth && srcWidth < WIDTHS[0]) {
    widths.push(srcWidth); // tiny source: still emit one size at its own width
  }

  console.log(`${path.basename(file)} (${srcWidth}px wide) -> ${widths.length} widths x 3 formats`);
  for (const w of widths) {
    const pipeline = () => sharp(input).rotate().resize({ width: w, withoutEnlargement: true });

    const avifPath = path.join(dir, `${base}-${w}w.avif`);
    const webpPath = path.join(dir, `${base}-${w}w.webp`);
    const jpgPath = path.join(dir, `${base}-${w}w.jpg`);

    const before = Date.now();
    await pipeline().avif({ quality: AVIF_QUALITY }).toFile(avifPath);
    await pipeline().webp({ quality: WEBP_QUALITY }).toFile(webpPath);
    await pipeline().jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(jpgPath);
    const ms = Date.now() - before;

    const kb = (p) => (fs.statSync(p).size / 1024).toFixed(0) + "KB";
    console.log(`  ${w}px  avif ${kb(avifPath)}  webp ${kb(webpPath)}  jpg ${kb(jpgPath)}  (${ms}ms)`);
  }
}

(async () => {
  const files = args.flatMap(collect);
  console.log(`Responsive pipeline: ${files.length} source image(s), widths [${WIDTHS.join(",")}], AVIF q${AVIF_QUALITY} / WebP q${WEBP_QUALITY} / JPEG q${JPEG_QUALITY}.`);
  console.log("Originals are left untouched; only new -<width>w.<ext> files are written.\n");
  for (const f of files) {
    try {
      await processImage(f);
    } catch (e) {
      console.error(`  FAILED ${f}: ${e.message}`);
      process.exitCode = 1;
    }
  }
  console.log("\nDone.");
})();
