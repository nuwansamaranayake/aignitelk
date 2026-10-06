# ScanPass page: build report (CC_SCANPASS_PRODUCT_PAGE)

Date: 2026-10-05. Branch: `feat/scanpass-page` (3 commits on top of main `cc14f27`, not pushed). Nothing deployed.

## 1. Audit note

- Read: `src/app/products/drapestudio/{page,content}.ts(x)`, `src/components/{SiteNav,MobileNav,SiteFooter}.tsx`, `src/components/drapestudio/RevealObserver.tsx`, `src/app/globals.css`, `tailwind.config.ts`, `src/app/page.tsx`, `public/sitemap.xml`, `next.config.mjs`, `nginx.conf`, `Dockerfile`, `docker-compose.yml`.
- Created: `src/app/products/scanpass/{content.ts,page.tsx}`, `public/img/scanpass/{brand,screens}/*`, `public/img/scanpass/og-scanpass-1200x630.jpg`, `docs/scanpass-page-claims.md`, `scripts/check-copy-scanpass.ps1`, `scripts/smoke-scanpass.ps1`, `docs/screenshots/scanpass/*`.
- Modified: `tailwind.config.ts` (sp group), `src/app/globals.css` (sp-mesh, sp-scan, sp-pop), `src/components/SiteNav.tsx`, `src/app/page.tsx` (ScanPass card), `public/sitemap.xml`.
- Backup: `E:\AiGNITE\_backup\aignitelk\20261005-1809\`.
- No `sitemap.ts` or `robots.ts` (static `public/sitemap.xml`). No CSP or security headers in `next.config.mjs` or `nginx.conf`.

## 2. Assets

| Asset | Source |
|---|---|
| `brand/scanpass-lockup-640.webp` | Logo kit PNG `scanpass-lockup-h-light@2x.png`, resized. The kit SVG lockup draws the word with a live Space Grotesk `<text>` element, which an `<img>` can not load, so the PNG export is used |
| `brand/scanpass-icon.svg` | Logo kit `scanpass-icon-light.svg`, copied byte for byte |
| `brand/scanpass-icon-on-dark.svg` | Logo kit `scanpass-icon-on-dark.svg`. **`scanpass-icon-white.svg` not shipped**: the kit and design system `mono-white` variant fills all three squares white, so it renders as a plain white square. Needs a proper white variant from the design system |
| `screens/register-480/896.webp` | Real screen: demo.scanpasslk.com/register (ScanPass Media Accreditation Demo), empty form. English only: the demo tenant has no language switch, so no Sinhala capture |
| `screens/verify-signin-480/896.webp` | Real screen: demo.scanpasslk.com/verify/ sign-in. Used for the "Gate scan" slot |
| `screens/badge-480/896.webp` | Rendered with ScanPass `credentials/qr.py` and `credentials/badge.py`, demo name "Demo Media Pass", rasterised with PyMuPDF. Temp script deleted |
| `screens/demo-poster-896.webp` | scanpasslk.com/video/thumbnail.png. Note: the poster is a dark, faded title frame |
| Hero phone, OG phone | Coded mock of the verify approved screen, captioned "Illustration, demo data" |
| Admin review queue | **Placeholder** ("Sample coming soon"). Needs an admin login on a demo tenant |
| Gate approved and gate denied screenshots | **Not captured.** A real result screen needs a gate login and a scan |

The local ScanPass Docker stack was not started: its local override publishes no host ports by design (Docker Desktop winnat note in `docker-compose.prod.local.yml`), so Playwright on the host can not reach it. The live demo tenant gave real screens with no personal data instead. Captures used the ScanPass repo's Playwright (`tests/e2e/node_modules/playwright-core`) with a script in `%TEMP%`, deleted after the run.

Rejected: `product_video/public/screenshots/verify_approved.png` is an injected HTML overlay, not the app, and shows a real newspaper name. `register_form_filled.png` shows an ID number and a real outlet email.

No CC_29 scene images in the ScanPass repo, so the proof band has no background image.

## 3. Conditional items

- Verify result states: `approved`, `denied`, `flagged` (`apps/verify/src/components/ScanResult.tsx`, display colours #16A34A, #DC2626, #F59E0B). All three tiles kept. On the phone the green state reads "Valid", not "Approved".
- Offline pack: present and wired (`lib/db.ts` IndexedDB pack, `offlineVerifier.ts`, `syncService.ts`, used in `ScanPage.tsx`, `SessionInfoPage.tsx`, `LoginPage.tsx`). The seventh card ships.
- Two feature lines changed because the shipped code contradicts them. See `docs/scanpass-page-claims.md`:
  - "Forms, badges and admin screens in all three languages." became "Registration forms in all three languages."
  - "Idle phones log out on their own. You see scan counts per session and scan history per phone." became "Gate logins expire on their own. Each phone shows its scan count and last scan time."
- Kept but not found in code: invite-only VIP registration, approved-list upload (CSV), zones. These are backed only by the product overview doc and live pricing.

## 4. Pricing

Matches live scanpasslk.com, fetched twice on 2026-10-05. The only difference from the brief: the live site shows "Most popular" on **Starter**, not Standard. The page follows the live site.

## 5. CSP and headers

No CSP exists, so the cross-origin video streams from scanpasslk.com as is. `nginx.conf` gained one `.vtt` location that serves the caption file as `text/vtt`.

## 5a. Code review fixes (before deploy)

A reviewer subagent assessed the branch as "with fixes", with no critical issues. Applied:
- Captions for the narrated demo video (WCAG 1.2.2): `public/media/scanpass/demo-captions-en.vtt`.
- Media pass card body contrast. Dropped `opacity-90`, so the text is solid white on terra (5.02:1).
- 12px eyebrows switched to `sp-teal-deep` on light sections and `sp-teal-soft` on dark ones. The mesh tint peaks pushed `sp-teal` and `sp-aqua` below 4.5:1.
- `scroll-padding-bottom: 88px` below md, so the sticky bar never covers a focused element. The rule is site-wide CSS.
- Noto Sans Tamil is no longer preloaded.
- Copy corrections, with code winning:
  - The FAQ language answer is scoped to registration forms.
  - The VIP card no longer claims invite-only.
  - The zones card is now time windows only.
  - "green or red" is now "green, amber or red".
  - The gate caption is now "Gate scan sign-in".

  See `docs/scanpass-page-claims.md`.
- Not changed: the hero phone mock keeps the real app colours (small text on #16A34A is 2.6 to 3.7:1). It is an illustration of a UI screen, captioned as one, and `aria-hidden`.

## 5b. Design system conflicts

The ScanPass Design System (Claude Design 179b2891) wins over the brief tokens:

- `sp-teal-deep`: the brief and live site use #155E75. The design system hover is teal-800 #0C6077. Shipped as **#0C6077**.
- `sp-night` #083344 is not in the design system. Its darkest teal is #042F3F. Kept #083344 because the design system has no dark-section role.
- Hero chips use `text-sp-teal-deep`, not `text-sp-teal`. Teal on teal-soft measures 4.49:1, below AA.
- The design system README says its SVGs embed the font. They do not.

## 6. Checks

- `npm run lint`: no warnings or errors. `npm run build`: passed, `/products/scanpass` is 1.38 kB.
- `scripts/check-copy-scanpass.ps1`: "Copy checks passed (200 strings)".
- `scripts/smoke-scanpass.ps1` against local Docker (http://localhost:8088): 8 of 8 must-have strings, 8 assets served as images, video reachable, home and nav links present, DrapeStudio unchanged. One expected warning: "Sample coming soon" (admin placeholder).
- Regression: `smoke-product-page.ps1` (DrapeStudio) and `smoke-govihub.ps1` both "ALL CHECKS PASSED".
- Browser checks at 360, 390 and 1280: no horizontal overflow, 12 sections in brief order, every image loaded with alt text, no console errors, 31 of 31 tab stops show a focus ring. Under reduced motion the hero shows the final state: no animation, chip visible, scan line hidden.

## 7. Screenshots

`docs/screenshots/scanpass/scanpass-390-full.jpg`, `scanpass-1280-full.jpg`, `scanpass-1280-reduced-motion-hero.jpg`.

## 8. Items for Nuwan

- Sinhala hero line for Aruni's review (`content.ts`, marked `REVIEW: Aruni`): "මාර්ගගතව ලියාපදිංචි වන්න. ගේට්ටුවෙන් QR ස්කෑන් කරන්න. කඩදාසි ලැයිස්තු අවශ්‍ය නැත."
- Confirm the scanpasslk.com product video is the final cut. Consider a brighter poster frame.
- Real Walk for Peace figures for the proof stat strip, if wanted (`proofStats`).
- Enable `privacyLine` after production retention leaves dry-run mode.
- Approve the two corrected feature lines, or ship the missing features first.
- Confirm the three claims with no code yet: invite-only VIP, CSV list upload, zones.
- Provide a proper white ScanPass icon, plus admin and gate result captures from a demo login.
- The home ScanPass card body (unchanged, per brief) still says "Sinhala/Tamil/English support" and "device tracking".

## 9. Post-deploy smoke

The same script with `-Base https://aignitelk.com`. Claude Code runs it as part of the deploy, then the DrapeStudio and GoviHub smoke scripts, per the standing rule that Claude Code does all terminal work:

```powershell
powershell -File scripts\smoke-scanpass.ps1 -Base https://aignitelk.com
```
