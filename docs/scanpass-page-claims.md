# ScanPass page claims and evidence

Page: `/products/scanpass`. Copy: `src/app/products/scanpass/content.ts`.
Source brief: CC_SCANPASS_PRODUCT_PAGE (Nuwan, 2026-10-05). Evidence checked on 2026-10-05 against the read-only ScanPass repo at `E:\AiGNITE\projects\ScanPass` and live scanpasslk.com.

Rule: change a claim here first, then in the content module.

## Claims backed by code

| Claim on the page | Evidence |
|---|---|
| Each organizer gets a separate database | `docs/architecture/02-multi-tenancy-and-data-model.md` (DB-per-tenant), `CREATE DATABASE` in provisioning |
| Every QR carries a signature | `services/api/app/services/verify_service.py` step 1: decode token, verify signature with `tenant.qr_credential_secret` |
| Each scan logs the time, the device and the location | `apps/verify/src/pages/ScanPage.tsx` (`navigator.geolocation`), `models/tenant.py` `device_name` |
| Badge PDFs on approval | `services/api/app/credentials/service.py` calls `generate_badge_pdf` on issue |
| Gate results: approved, denied, flagged | `apps/verify/src/components/ScanResult.tsx` (`approved_screen_color`, `denied_screen_color`, `flagged_screen_color`). On screen the green state reads "Valid" |
| Weak signal? Keep scanning (offline card) | `apps/verify/src/lib/db.ts` (IndexedDB pack), `offlineVerifier.ts`, `syncService.ts`, wired in `ScanPage.tsx` and `SessionInfoPage.tsx` |
| Time-bound access | `services/api/app/schemas/event_config.py` `time_bound` |
| Registration in Sinhala, Tamil and English | `packages/i18n/src/index.tsx` `LANGUAGE_NAMES` en, si, ta, used by `apps/register` |
| Works in a phone browser | register and verify are web apps (Vite), no native app |

## Claims changed from the brief (code wins)

| Brief copy | Page copy | Reason |
|---|---|---|
| Forms, badges and admin screens in all three languages. | Registration forms in all three languages. | Only `apps/register` uses `@scanpass/i18n`. `credentials/badge.py` uses Helvetica only, with no Sinhala or Tamil glyphs. The admin app has no i18n. |
| Idle phones log out on their own. You see scan counts per session and scan history per phone. | Gate logins expire on their own. Each phone shows its scan count and last scan time. | `verify_auth_service.py` says inactivity logout is a frontend concern, and `apps/verify/src` has no idle timer. Sessions expire by `expires_at`. `SessionInfoResponse` returns `total_scans` and `last_scan_at` per session. No per-phone history screen exists. |
| VIP guests: Invite-only registration for the guests you name. (chip: Invite only) | Give VIP guests their own pass type and approve each one yourself. (chip: Manual approval) | No `invite` field in `services/api/app` or `packages/config-schema`, and scanpasslk.com does not claim it. Only `00-product-overview.md` line 45 lists it |
| Zones and sessions: Limit a pass to one zone or one time window, such as the press area on day two. | Sessions and time windows: Limit a pass to one time window, such as day two of the event. | `event_config.py` has `time_bound`. No zone model, and scanpasslk.com does not claim zones |
| FAQ: Which languages? Sinhala, Tamil and English. | Registration forms come in Sinhala, Tamil and English. Admin screens and badge PDFs are in English. | Same evidence as the features card. The FAQ also feeds FAQPage JSON-LD |
| The phone shows green or red (step 3 and FAQ) | green, amber or red | The verify app has a flagged state shown in amber |
| Caption: Gate scan | Gate scan sign-in | The screen shown is the verify sign-in screen |

## Claims backed by documents or the live site only (not found in code)

| Claim | Source | Code search result |
|---|---|---|
| Staff: upload your approved list | Live scanpasslk.com pricing "Bulk CSV import" (Standard tier) | No CSV import in `services/api/app` |
| WhatsApp support | Brief | Operational promise, not code |
| We reply within one business day | Brief | Operational promise, not code |

## Video captions

`public/media/scanpass/demo-captions-en.vtt`, 19 cues. Text from the narration in ScanPass `product_video/video-config.yaml` (em dashes turned into commas). Each scene starts at the offsets from `product_video/src/Root.tsx` (scene lengths plus 20-frame transitions at 30 fps). Speech length comes from `public/audio/timings.json`. Lines inside a scene are timed by character share. The live MP4 is 120.38 s long, which matches the composition's 3,610 frames. Served as `text/vtt` through a `.vtt` location in `nginx.conf`.

## Pricing

Matches live scanpasslk.com `#pricing`, fetched 2026-10-05: Starter LKR 50,000 (up to 200), Standard LKR 150,000 to 300,000 (201 to 1,000), Large LKR 400,000 to 800,000 (1,001 to 5,000), Enterprise custom (5,000+), free for registered non-profits and religious events under 500 attendees.

Difference from the brief: the live site puts the "Most popular" badge on Starter, the brief put it on Standard. The page follows the live site.

## Screens and images

| Asset | Source | Personal data |
|---|---|---|
| `screens/register-*.webp` | demo.scanpasslk.com/register (ScanPass Media Accreditation Demo), empty form, 390x844 at 3x | None |
| `screens/verify-signin-*.webp` | demo.scanpasslk.com/verify/ sign-in screen, 390x844 at 3x | None |
| `screens/badge-*.webp` | ScanPass `credentials/qr.py` + `credentials/badge.py`, demo name "Demo Media Pass", rasterised with PyMuPDF | Demo only |
| `screens/demo-poster-896.webp` | scanpasslk.com/video/thumbnail.png | None |
| Hero phone and OG phone | Coded mock of the verify approved state, labelled "Illustration, demo data" | Demo only |
| Admin review queue | Missing. Placeholder "Sample coming soon" | n/a |

Not used: `product_video/public/screenshots/verify_approved.png` is an injected HTML overlay ("Access Granted"), not the app screen, and shows a real newspaper name. `register_form_filled.png` shows an ID number and a real outlet email.
