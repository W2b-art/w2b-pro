# W2b PRO site — test matrix

Statuses: PASS / FAIL / PARTIAL / NOT TESTED / BLOCKED

## Pages × core checks (console errors, network 200s, broken images, SEO meta, single H1, alt text)

| Page | Console | Network | SEO meta | Alt text | H1 |
|---|---|---|---|---|---|
| index.html | PASS | PASS | PASS | PASS | PASS |
| work.html | PASS | PASS | PASS | PASS | PASS |
| restaurants.html | PASS | PASS | PASS | PASS | PASS |
| eventos.html | PASS | PASS | PASS | PASS | PASS |
| studio.html | PASS | PASS | PASS | PASS | PASS |
| services.html | PASS | PASS | PASS | PASS | PASS |
| booking.html | PASS | PASS | PASS | PASS | PASS |
| contact.html | PASS | PASS | PASS | PASS | PASS |
| devis.html | PASS | PASS | PASS (correctly noindex) | PASS | PASS |
| previews/ny-excelsior/ | NOT TESTED (not crawled: 2.6 MB file, out of representative scope) | NOT TESTED | FAIL (no robots meta) | NOT TESTED | NOT TESTED |

## Responsive / viewport

| Viewport | index.html | work.html | booking.html | devis.html | Other 6 pages |
|---|---|---|---|---|---|
| 375px (mobile) | PASS (no h-overflow, mobile nav drawer verified open/close) | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| 390 / 430 | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| 768 (tablet) | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |
| ~800 (pane default, ≈ breakpoint boundary) | PASS | PASS | NOT TESTED | NOT TESTED | NOT TESTED |
| 1024 / 1280 / 1440 / 1920 | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED |

Scoped to stakes: full 9-breakpoint sweep on every page was not run. What was verified: no horizontal overflow at 375px on the home page (`scrollWidth === clientWidth`), the mobile nav drawer (`#rail`/`nav` clip-path reveal) opens and closes correctly with all 8 links + language/currency switches reachable, and the site's single CSS breakpoint (`860px`, confirmed in `site.css`) is the only layout fork in the codebase — i.e. there is no untested intermediate breakpoint that could behave differently from what was checked.

## Interactive components

| Component | Status | Note |
|---|---|---|
| Mobile nav drawer (open/close) | PASS | Verified via DOM state + visual; initial screenshot looked broken but was a 0.5s CSS transition in flight, not a bug (re-verified after wait) |
| Desktop nav rail | PASS | |
| Language switch ES/EN/FR | PASS | `<html lang>` updates, `localStorage` persists |
| Currency switch EUR/COP | PASS | |
| Hero slideshow (home) | PASS | day/night image sets, dots, auto-advance observed |
| Work gallery → lightbox | PASS | opens, shows correct image, nav arrows wired, Esc closes |
| Booking showcase → lightbox | PASS (code-reviewed; interaction pattern identical to work.html's, already verified live) | |
| Quote calculator (devis.html) — audience/service/option selection | PASS | renders, recalculates estimate |
| Quote calculator — "Send" buttons | PARTIAL | Build correct WhatsApp/mailto URLs and fire a Formspree POST (code-verified); live end-to-end delivery NOT TESTED (needs explicit sign-off to submit real data to a live third-party endpoint) |
| Booking form (`#bform`) | PARTIAL | Same as above — required-field validation present (`required` on name/email/consent), client-side wiring correct; live submission NOT TESTED |
| Cookie consent banner | BLOCKED/N/A | `consent.js` is deliberately dormant, not included on any page — nothing to test |
| Footer links (terms/privacy/cookies/Instagram/mailto) | PASS | all resolve, all correctly `rel="noopener"` where `target="_blank"` |

## Cross-browser

| Browser | Status |
|---|---|
| Chromium (built-in browser pane) | PASS — used for all live testing above |
| Firefox | NOT TESTED — not available in this session |
| Safari | NOT TESTED — not available in this session |
| Microsoft Edge | NOT TESTED — not available in this session (Chromium-based, high overlap with tested browser, but not independently verified) |

## Security / dependency scan

| Check | Status |
|---|---|
| Secrets/API keys in client JS | PASS — none found |
| XSS in user-input forms (booking/devis) | PASS — all interpolations go through `encodeURIComponent` or `textContent`, never raw `innerHTML` of user input |
| HTTP security headers | FAIL (informational) — no CSP/X-Frame-Options/Referrer-Policy/HSTS; GitHub Pages platform limitation |
| `npm audit` / dependency CVEs | BLOCKED — no `package.json` in this repo, not applicable |
| HTTPS | PASS — served over HTTPS, no mixed content observed |

## Performance (lab only)

| Check | Status | Note |
|---|---|---|
| Console/network clean page loads | PASS | all 9 pages, 0 errors, 0 4xx/5xx |
| Font loading strategy | PASS | `font-display: swap`, latin/latin-ext unicode-range subsetting |
| Image width/height set (CLS) | FAIL | see Finding #3 in audit report |
| Modern image formats (AVIF/WebP) | FAIL | see Finding #4 — pipeline built, unused |
| Core Web Vitals (lab trace) | NOT TESTED | no Lighthouse/CDP trace run this session; page-weight and resource-count signals assessed as proxies instead |
| Core Web Vitals (field/CrUX) | NOT TESTED | no Search Console access |
