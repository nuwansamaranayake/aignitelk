# Kalika page: run state

Brief: CC PROMPT, Kalika flagship product page on aignitelk.com (2026-10-05). Standing authorization: commit, push and deploy to production. Spend cap: zero.

## Gate log

| Gate | Status | Evidence | Commit |
|---|---|---|---|
| Step 0: repo | PASS | `E:\AiGNITE\projects\AiGNITE_Software_Lk`, remote `github.com/nuwansamaranayake/aignitelk.git`. Branch `main` (production: the VPS pulls `origin/main` at `/docker/aignitelk`). No tracked changes. Untracked files pre-date this run. `src/app/products/drapestudio/page.tsx` present | `0901cbd` (start) |
| Step 1: design system | PASS | First hit: `E:\AiGNITE\projects\cosmic-nexus\apps\storefront\public\brand\Kalika_Logo_Kit_Full` (logos, `color-tokens.json`, README). Searched in order: aignitelk repo (no Kalika files), then cosmic-nexus `apps\storefront` (hit). `apps\kalika\public\brand` also holds yantra files | n/a |
| WhatsApp number | PASS | https://cosmicnexus.ai/lk has 5 `wa.me` links, all `94767006085` | n/a |
| Sinhala strings | NOTE | 5 of 6 brief strings match cosmicnexus.ai/lk byte for byte. The hero line adds `ඔබේ ` in front of the live phrase `ව්‍යාපාරික තීරණ සඳහා කාල මාර්ගෝපදේශය`. The rest matches by code point. Used verbatim as written in the brief | n/a |
| Sample PDFs | PASS | All three PDF names appear on cosmicnexus.ai/lk | n/a |
| Gate L1: local smoke | PASS | `scripts/smoke-kalika.ps1` against local Docker (`aignitelk-local:kalika`, same Dockerfile as production, port 8088): 20 of 20 checks passed.<br>- Kalika page 200 with the headline, four prices and the Sinhala hero line<br>- 8 `wa.me` links all on 94767006085 with text<br>- Home 200, nav and grid link to Kalika, first card is Kalika<br>- DrapeStudio 200 with main content identical to live<br>- 3 sample PDFs 200 `application/pdf`<br>- OG image 200 at 1200x630<br>- No new em dash<br>Build: lint clean, `next build` exit 0, no new warnings (only the existing caniuse notice). DrapeStudio, ScanPass, PrimePath and GoviHub smoke suites also pass locally | pre-commit |
| Gate L2: visual | PASS | Screens in `docs/work/kalika_page_screens/`: Kalika page at 360, 768 and 1440 (full page, hero, business) and home at 1440.<br>- No horizontal scroll at 360, 768 or 1440. The comparison tables were reworked to fit 360, attempt 1 of 3<br>- 11 sections in order, no console errors, 34 of 34 tab stops show a focus ring<br>- Reduced motion stops the spin and the twinkle<br>- Sinhala reviewed from 3x renders: conjuncts shape correctly, no dotted circles<br>- Business cards dominate<br>- The site has no dark mode, so light mode only | pre-commit |
| Deploy | DONE | Mechanism: no CI. On the Mumbai VPS (187.127.135.82, alias `govihub-mumbai`) at `/docker/aignitelk`: `git pull --ff-only origin main`, then `docker compose up -d --build aignitelk-web`. Class: image rebuild, because the Next.js static export is baked into an nginx image. Pre-deploy image backup: `aignitelk-web:backup-20261006-023333` | `fbc19e5` |
| Gate P1: live | PASS | `scripts/smoke-kalika.ps1 -Base https://aignitelk.com`: 21 of 21 passed, all L1 checks plus the og:image URL resolving to a 200 image. The DrapeStudio main content matches the pre-deploy build.<br>VPS edge checks:<br>- `/`, `/products/kalika`, primepath, scanpass, drapestudio and `/govihub` all 200<br>- Sitemap lists Kalika, the OG and brand images serve as `image/*`<br>- TLS verifies with no `-k`, cert valid to 2026-11-05<br>Live regression suites for DrapeStudio, ScanPass, PrimePath and GoviHub all pass. Live browser pass at 360, 768 and 1440: no overflow, no console errors, 34 of 34 focus rings | `fbc19e5` |

## Rollback (not needed)

On govihub-mumbai: `docker tag aignitelk-web:backup-20261006-023333 aignitelk-aignitelk-web:latest && docker compose up -d --no-build aignitelk-web`, then `git revert fbc19e5`, push, redeploy and re-run `scripts/smoke-kalika.ps1 -Base https://aignitelk.com`.

## Decisions

- Backup of edited files: `E:\AiGNITE\_backup\aignitelk\20261005-2116\`.
- Tokens come from the Kalika kit `color-tokens.json`:
  - Deep Navy `#0A0A20` (night), Cream `#F5F0E8` (ivory sections).
  - Gold Primary `#D4AF37`, Warm Gold `#E8C871`, Gold Highlight `#F5D76E`, Bronze `#B8903C`, Amber `#A67C1F`.
  - Kali Crimson `#A6364C`, Deep Crimson `#8B2C3E`, Pink Halo `#F2B8C6`.
  - Font: Cormorant Garamond.
- The brief's accent colours (saffron, marigold, pink, teal) are not Kalika kit tokens. They come from the existing site tokens `lk-saffron #EB7400`, `lk-gold #FFBE29`, `mm-primary #FF2E88` and `lk-teal #00534E`, which match the brief's fallback palette.
- Sinhala font: Abhaya Libre, per the brief's fallback. The kit specifies no Sinhala font.
