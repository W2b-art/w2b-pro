# W2b PRO site — audit report

Date: 2026-11-02 · Target: live production site at https://w2bphotography.com/w2b-pro/ (= `main` branch of `W2b-art/w2b-pro`, working tree clean, local == deployed)
Scope: static site, GitHub Pages, no backend/database/CMS. Sibling ART site (apex domain) referenced only where it affects the PRO site (robots.txt, sitemap.xml live there).

## 1. Architecture

- **Stack:** plain HTML + vanilla JS + hand-written CSS. No framework, no bundler, no `package.json` for this repo (the only build tooling, `sharp`-based image compression, lives in the sibling ART repo's `.build/`).
- **Hosting:** GitHub Pages (`w2b-art/w2b-pro`, `main`), served under `w2bphotography.com/w2b-pro/` via the ART repo's custom-domain CNAME. `robots.txt` / `sitemap.xml` live at the apex (ART repo) and correctly cover PRO's URLs.
- **i18n/currency:** `js/lang.js` + per-page inline `T` objects — ES/EN/FR, `localStorage`-persisted, `<html lang>` updated on switch. COP/EUR currency toggle, also `localStorage`-persisted.
- **Content model:** `js/gallery-data.js` (`window.GALLERY`, `window.WORKCOV`, hero arrays), `js/booking-data.js` (booking-page showcase), `js/site.js` (render engine: nav rail, hero slideshow, galleries, lightbox, i18n apply). `js/main.js` also present but appears to be legacy/unused on this site's current pages (see Fix Log).
- **Lead capture:** no backend. Two channels per form: a `mailto:` handoff (pre-filled subject/body) and a `wa.me` WhatsApp deep link, both built client-side; a non-blocking `fetch()` POST to a shared Formspree endpoint (`formspree.io/f/mjgjdvlz`) runs alongside as a durable record.
- **Analytics:** `js/consent.js` exists but is explicitly dormant (not wired into any page) — no tracking script runs today, no cookie banner shows.

## 2. Page inventory (9 pages + 8 secondary docs)

| Page | Purpose | Sitemap | Robots | Canonical |
|---|---|---|---|---|
| `index.html` | Home | ✓ (as `/w2b-pro/`) | indexable | correct |
| `work.html` | Portfolio overview (4 series) | ✓ | indexable | correct |
| `restaurants.html` | Gastronomy case study | ✓ | indexable | correct |
| `eventos.html` | Events case study | ✓ | indexable | correct |
| `studio.html` | About/studio | ✓ | indexable | correct |
| `services.html` | Services/rates | ✓ | indexable | correct |
| `booking.html` | Booking flow + lead form | ✓ | indexable | correct |
| `contact.html` | Contact links | ✓ | indexable | correct |
| `devis.html` | Pre-quote calculator | intentionally excluded | `noindex` (correct) | correct |
| `documents/{terms,privacy,cookies,index,services}.html` | Legal/info | services.html in sitemap; rest not, acceptable for boilerplate legal pages | indexable | — |
| `documents/{proposition,propuesta}-eventario.html` | Client-specific proposal docs | not in sitemap | `noindex,nofollow` (correct) | — |
| `documents/release.html` | Model release | not in sitemap | `noindex,nofollow,noimageindex` (correct) | — |
| `previews/ny-excelsior/index.html` | One-off client concept preview | **not in sitemap, no robots meta** | **indexable by default (likely unintended)** | **missing** |

## 3. Findings (evidence-based, see Fix Log for detail)

| # | Severity | Area | Finding |
|---|---|---|---|
| 1 | MEDIUM | SEO / content hygiene | `previews/ny-excelsior/index.html` (2.6 MB single-file client pitch) has no `noindex`, no canonical, and is a true orphan page (zero internal links, not in sitemap) — only reachable by direct URL |
| 2 | LOW–MEDIUM | Asset integrity | `images/restaurants/` (12 files, 8.7 MB) is 100% unreferenced anywhere in the codebase — dead weight from the recent restaurants.html redesign, superseded by `images/hospitality/` |
| 3 | LOW | Performance / CLS | Static `<img>` tags (17 in markup) and JS-rendered gallery `<img>`s ship with no `width`/`height`/`aspect-ratio` even though `gallery-data.js` already carries an `ar` (aspect ratio) value per image — a wired-but-unused CLS fix |
| 4 | LOW | Performance | The AVIF/WebP responsive `<picture>` pipeline in `imgTag()` (site.js) is fully built but dormant — no gallery entry currently supplies the `widths` array it needs, so every image ships as plain JPEG only |
| 5 | LOW | Functional robustness | `devis.html`/`booking.html` show a "sent" confirmation regardless of whether the background Formspree POST actually succeeded (fire-and-forget `fetch().catch()`, errors silently swallowed) — mitigated by the redundant WhatsApp/mailto channels |
| 6 | INFORMATIONAL | Security headers | No CSP / X-Frame-Options / Referrer-Policy / HSTS — inherent GitHub Pages limitation (no custom response headers without an edge proxy), low risk for an accountless static site |
| 7 | INFORMATIONAL | Image weight | A handful of restaurant/event photos run 700 KB–1.27 MB; not egregious, but candidates for the next compression pass |
| 8 | PASS | Everything else in scope | See Test Matrix — console/network clean on all 9 pages, SEO metadata complete and unique, alt text complete, single-H1 structure, no secrets in client JS, no XSS vector in the two user-input forms, mobile nav / i18n / currency / lightbox verified working |

No CRITICAL or HIGH severity issues found.

## 4. Corrections performed this pass

None applied automatically. All findings above are LOW/MEDIUM/INFORMATIONAL, several touch content-lifecycle decisions (delete a client's orphaned images? take down a stale pitch page?) that are Guillaume's call, not a safe-to-auto-fix default. See `WEBSITE_FIX_LOG.md` for exact proposed diffs per finding, ready to apply on his go-ahead.

## 5. Explicitly not tested / blocked

- Real Firefox / Safari / Edge rendering — only a Chromium-based browser was available this session.
- Field Core Web Vitals (CrUX) — no Search Console access in this session; only lab-level signals assessed (page weight, image sizes, console/network).
- Live end-to-end Formspree delivery (does the email actually land) — submitting real data to a live third-party form needs explicit sign-off first; code-level wiring was verified instead.
- `npm audit` — not applicable, this repo has no Node dependencies.
- Full 9-named-breakpoint × 9-page screenshot matrix — tested representative breakpoints (375 mobile / desktop default) across all 9 pages for console, network and overflow; not every page was shot at all 9 named widths. See `WEBSITE_TEST_MATRIX.md` for exact coverage.
