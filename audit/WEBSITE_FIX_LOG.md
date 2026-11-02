# W2b PRO site — fix log

No changes were applied to the live repo this pass. Every finding below involves a judgment call (delete a client's assets? take a pitch page out of search?) rather than a safe default, so each is logged as a proposed, ready-to-apply fix awaiting Guillaume's go-ahead — consistent with "don't apply blind fixes" / "document what needs a business decision."

---

### Finding 1 — `previews/ny-excelsior/` exposed to search engines

- **File:** `previews/ny-excelsior/index.html`
- **Root cause:** page was built as a one-off client pitch and never given a `noindex` tag the way the other client-specific docs (`documents/proposition-eventario.html`, `release.html`) were.
- **Consequence:** if a crawler or a shared link ever surfaces it, a stale/unconfirmed concept pitch becomes publicly searchable, and its 2.6 MB payload is a poor first impression if opened.
- **Proposed fix:** add `<meta name="robots" content="noindex, nofollow">` to its `<head>` (same pattern as `documents/release.html`). Separately: ask Guillaume whether the Excelsior pitch is still live/relevant — if not, the page should come down rather than just be noindexed.
- **Tests to run after:** confirm the tag renders in view-source on the deployed page; re-check it's still reachable by direct URL for whoever needs it (noindex doesn't block direct access, only search discovery).
- **Status:** proposed, not applied.

### Finding 2 — orphaned `images/restaurants/` (12 files, 8.7 MB)

- **Files:** `images/restaurants/*.jpg` (12 files) — zero references in any `.html`/`.js` in the repo (verified by full-repo grep for every distinctive filename fragment).
- **Root cause:** most likely leftover from the `restaurants.html`/`eventos.html` redesign commit (`0e1721d`), superseded by the `images/hospitality/` folder which the current `restaurants.html` actually renders from.
- **Proposed fix:** confirm with Guillaume these are superseded, then `git rm images/restaurants/*.jpg` in a dedicated commit (not bundled with unrelated work, per the repo's own CRLF-noise convention of staging explicit paths).
- **Tests to run after:** full-repo grep for the folder name turns up nothing; `restaurants.html` still renders correctly (it doesn't touch this folder today, so no behavior change expected).
- **Status:** proposed, not applied — deletion is exactly the kind of destructive action this audit doesn't take unprompted.

### Finding 3 — images missing `width`/`height` (CLS risk)

- **Files:** all static `<img>` tags across the 9 HTML pages (17 total); dynamic gallery `<img>` output in `js/site.js` (`imgTag()`, hero slideshow renderer) and `js/main.js`.
- **Root cause:** `gallery-data.js` already stores an `ar` (aspect-ratio) float per image (e.g. `"ar":0.667`), but nothing downstream turns it into a `width`/`height` pair or a CSS `aspect-ratio` declaration on the actual `<img>`/`<picture>` element.
- **Proposed fix:** in `imgTag()` (site.js) and the hero-slide renderer, emit `style="aspect-ratio:${ar}"` (or explicit `width`/`height`) whenever `ar` is available; for the 17 static `<img>`s, add explicit `width`/`height` matching each file's real pixel dimensions.
- **Tests to run after:** Lighthouse/CDP layout-shift trace before/after on `work.html` and `index.html` (image-heavy pages); visual check that aspect-ratio boxes match the actual photos (no letterboxing).
- **Status:** proposed, not applied — touches the shared render engine (`site.js`), worth a scoped PR Guillaume reviews rather than a silent edit.

### Finding 4 — dormant AVIF/WebP pipeline

- **File:** `js/site.js`, `imgTag()` (lines ~226–254).
- **Root cause:** the code's own comment says it plainly — the `<picture>`/AVIF/WebP path only activates once a `gallery-data.js` entry carries a `widths` array, and none currently does.
- **Proposed fix:** not a code fix — this is an image-pipeline/content task (resize originals through `.build/responsive.js`, add `widths` to the relevant `GALLERY_DATA`/`GALLERY` entries). Flagging as a backlog item, not touching it this pass per "never run the compress/image pipeline without an explicit order."
- **Status:** logged, not actioned.

### Finding 5 — silent Formspree failure on `devis.html` / `booking.html`

- **Files:** `devis.html` (`sendLead()`), `booking.html` (inline `#bform` submit handler).
- **Root cause:** `fetch(FORMSPREE,...).catch(function(){/* non-blocking */})` — the success UI (`sent.hidden=false`) is shown unconditionally, not gated on the fetch actually resolving with `ok`.
- **Consequence:** low — WhatsApp and mailto are the actual primary channels and both still work independently; Formspree is just the durable-record backup, so a silent Formspree failure doesn't block the lead from reaching Guillaume, it only means that one record-keeping copy is missing with no alert to anyone.
- **Proposed fix (optional, low priority):** log failures to `console.warn` at minimum so they're visible in a future analytics/error-monitoring pass; not worth a user-facing error given the redundant channels.
- **Status:** logged, not actioned — low priority by design (redundancy already covers the real risk).

### Finding 6 — no HTTP security headers

- **Root cause:** GitHub Pages does not support custom response headers without an edge proxy (Cloudflare, etc.) in front of it.
- **Proposed fix:** none applicable without a hosting change. If/when this becomes a priority, the cheapest path is a Cloudflare proxy in front of the existing GitHub Pages origin (keeps hosting, adds header control) — a hosting-level decision, not a code fix.
- **Status:** informational only, no action proposed.

### Finding 7 — a few 700 KB–1.27 MB images

- **Files:** largely in `images/restaurants/` (which is the orphaned folder in Finding 2 — moot if that folder is deleted) and a few `images/events/*deglorian*` files.
- **Proposed fix:** if Finding 2's deletion goes ahead, this finding mostly resolves itself; remaining large files in `images/events/` are candidates for the next normal compression pass (not urgent — none are multi-MB "uncompressed originals").
- **Status:** logged, not actioned.
