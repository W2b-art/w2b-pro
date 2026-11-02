# W2b PRO site — security report

Non-destructive review only. No penetration testing, no attacks against third-party services (Formspree, WhatsApp, GitHub Pages), no credential rotation.

## Findings

| Severity | Area | Finding | Evidence |
|---|---|---|---|
| INFORMATIONAL | Transport | Served over HTTPS via GitHub Pages; no mixed content observed on any of the 9 pages tested | network log, all requests `https://` |
| INFORMATIONAL | Secrets | No API keys, tokens, or credentials found in any client-side JS (`js/*.js`, 7 files) | `grep -niE "api[_-]?key|secret|token|password"` across `js/` — zero matches |
| INFORMATIONAL | Headers | No `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, or `Strict-Transport-Security` response headers | live `fetch()` header dump on `/w2b-pro/` |
| PASS | Input handling | The two user-input forms (`devis.html` pre-quote, `booking.html` request) never inject raw user text via `innerHTML`; every interpolation into a URL (`mailto:`, Formspree body) goes through `encodeURIComponent`, and on-page confirmation text uses `textContent` | source read of both submit handlers |
| PASS | Third-party form endpoint | Formspree endpoint (`formspree.io/f/mjgjdvlz`) is called over HTTPS with `Accept: application/json`; no sensitive data (payment, government ID) is ever collected by these forms — only name/email/project description | source read |
| N/A | Dependencies | No `package.json`/lockfile in this repo — pure static HTML/CSS/JS, nothing for `npm audit` to scan | `find . -iname package*.json` → none |
| N/A | Auth/sessions | No login, no accounts, no cookies set by first-party code (`consent.js` is present but not wired into any page — no tracking, no cookies set) | grep for cookie-setting code, page-by-page script tag audit |
| N/A | CORS | `access-control-allow-origin: *` observed on the GitHub Pages response — standard/expected for a public static site serving no sensitive data, not a misconfiguration here | response header dump |

## Risk assessment

This is a static marketing/portfolio site with no accounts, no payment flow, no server-side code, and no sensitive data collection beyond optional name/email/project text in two lead forms (delivered to Formspree + the photographer's own inbox via `mailto:`). The attack surface is small. The one real gap — no CSP/security headers — is a platform constraint of GitHub Pages rather than a code defect, and the practical risk it mitigates (clickjacking, header-dependent XSS hardening) is low for a site with no forms that write back into the page and no embedded third-party iframes.

## Recommendations (no action taken)

1. If/when moving past GitHub Pages or fronting it with a CDN that supports custom headers, add a baseline CSP, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: strict-origin-when-cross-origin`. Not urgent for the current risk profile.
2. See `WEBSITE_AUDIT_REPORT.md` Finding 1 — the unindexed `previews/ny-excelsior/` page isn't a security hole, but it is an unintentional disclosure surface (a client pitch reachable by anyone with the URL, no access control). Worth a `noindex` tag regardless of whether it's kept live.
