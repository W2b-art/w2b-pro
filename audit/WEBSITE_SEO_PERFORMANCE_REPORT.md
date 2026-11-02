# W2b PRO site — SEO & performance report

## SEO

**Strong baseline, well above typical static-site hygiene:**

- Every indexable page has a unique `<title>`, unique `<meta name="description">`, correct self-referencing `<link rel="canonical">`, and matching Open Graph tags.
- `index.html` carries a correct, non-fabricated `ProfessionalService` JSON-LD block (service types, area served, language, linked `@id` back to the ART site's `#guillaume` entity) — accurately reflects the real business, nothing invented.
- Single `<h1>` on every one of the 9 pages tested; no heading-for-styling misuse observed in the markup read.
- `robots.txt` and `sitemap.xml` live correctly at the apex domain (shared with the ART site) and explicitly include the PRO site's URLs, with sensible AI-crawler allow/disallow rules already thought through (After Dark content blocked, AI search bots explicitly allowed to cite the site).
- `devis.html` is correctly `noindex`'d and correctly left out of the sitemap — a deliberate, consistent choice (it's a conversion tool, not a content page), not an oversight.
- `documents/{proposition,propuesta}-eventario.html` and `documents/release.html` are correctly `noindex, nofollow` — client-specific/legal docs kept out of search as intended.

**Gap found:**

- `previews/ny-excelsior/index.html` has **no** `robots` meta and **no** canonical — the one page in the whole site that should clearly be excluded (a one-off client pitch) but isn't. See `WEBSITE_AUDIT_REPORT.md` Finding 1.

**Not evaluated:** actual search rankings, backlink profile, or Search Console coverage/indexing status — no Search Console access in this session.

## Performance (lab signals only — no Lighthouse/CDP trace run)

| Signal | Observation |
|---|---|
| Page weight (HTML) | Home page: 3.3 KB gzipped HTML response. Lean. |
| Images | Grid/list views load the `-m` (medium, ~1100px) variant, full-res only in the lightbox — a working two-tier strategy. A few individual photos (mostly in the now-orphaned `images/restaurants/`, see Finding 2) run 700 KB–1.27 MB; nothing found in the 10+ MB "uncompressed original" territory the wiki's hot-cache flagged for the sibling ART site's redesign — that specific risk does not appear to be present here. |
| Modern formats | 0 WebP/AVIF files anywhere in `images/` — pipeline exists in code but is unused (Finding 4). All delivery is JPEG. |
| CLS risk | No `width`/`height`/`aspect-ratio` on any `<img>` despite aspect ratio being available in the data layer (Finding 3). |
| Fonts | `font-display: swap` on every `@font-face`; unicode-range subsetting (latin vs. latin-ext) so only the needed glyph set downloads. Good practice already in place. |
| Render-blocking | `css/fonts.css` and `css/site.css` are blocking `<link>`s in `<head>` (standard, not flagged — no sign of excessive unused CSS from a skim of `site.css`'s organization) |
| Lazy loading | `loading="lazy"` applied consistently to below-the-fold images; first hero slide correctly uses `fetchpriority="high"` instead, which is the right LCP-conscious choice |
| Console/network | 0 errors, 0 4xx/5xx across every page tested |

## Core Web Vitals

Not measured — no Lighthouse/Chrome DevTools Protocol trace was run this session, and no Search Console/CrUX field data is accessible. The signals above (image weight, font strategy, render-blocking resources, console cleanliness) are proxies, not LCP/INP/CLS numbers. If real numbers are wanted, running Lighthouse (or PageSpeed Insights against the live URL) directly is the next step — nothing in this session's tooling produces an actual trace.

## Recommendations, ranked

1. Add `noindex` to `previews/ny-excelsior/` (5-minute fix, see Fix Log).
2. Wire `ar` → `aspect-ratio` CSS on images (addresses the one concrete CLS risk found).
3. If/when there's appetite for another image-pipeline pass: activate the already-built AVIF/WebP path for the heaviest galleries (events, restaurants/hospitality) first — biggest bytes-saved-per-effort ratio.
