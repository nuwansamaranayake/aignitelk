# AIGNITELK-01 DrapeStudio family page: plan and decision log

> Brief: CC Prompt AIGNITELK-01 (Nuwan, 2026-10-05). The brief is the spec, so this file records the task order that ran and the judgment calls made on the way.

**Goal:** One product page on aignitelk.com for DrapeStudio (sellers) and MirrorMe (shoppers). Catchy, colorful, mobile first. Every claim matches what ships today.

**Architecture:** Static Next.js 14 route `/products/drapestudio`. Copy lives in `content.ts`, which `page.tsx` renders. Shared `SiteNav` and `SiteFooter` became the site shell for both pages. Three small client components handle the slider, scroll reveal and count-up. Product accents are registered as `ds-*` and `mm-*` tokens in `tailwind.config.ts`.

## Tasks (in order run)

1. Skills loaded: frontend-design, seo-geo, agent-legibility-truth-layer, banner-creator, gemini-translate (account skill), sinhala-tamil-fonts (account skill).
2. Discovery: site repo, stack, AiGNITE tokens, DrapeStudio design system (Claude Design), MirrorMe tokens, logo kit, real outputs. Live sites checked.
3. Claims: `docs/drapestudio-page-claims.md`, built from code with file:line evidence.
4. Branch `feature/drapestudio-family-page`, `_backup/20261005-1526/` before edits.
5. Shell: `SiteNav`, `SiteFooter`. Home page uses them. The DrapeStudio card links to the new page.
6. Tokens, assets (WebP, padded inputs, logos), page, components, sitemap, share image.
7. Gates: `tsc`, `next build`, local Docker nginx, `scripts/smoke-product-page.ps1` (30 checks), Edge browser checks (18 checks), home page regression checks.
8. Code review, fixes, commit. No deploy.

## Decisions

- DECISION: Prices come from code, not the brief. Flat Rs. 50 per image (`modules.py:3`) and Rs. 50 per fit-on (`fiton_service.py:22`). The 1K/2K/4K table and Rs. 80 fit-on are unused config. "Pick quality" was dropped from the How it works step because no quality choice exists.
- DECISION: "Failed images refunded" became "A failed generation costs nothing." No auto refund exists. Failed jobs are never charged.
- DECISION: "Watermarked" dropped from the trial line. No watermark code exists.
- DECISION: MirrorMe 30-day pass (Rs. 1,000 for 30 looks) removed. It appears nowhere in code. The page shows Rs. 50 per look.
- DECISION: Gold accent `#C29A34` is the DrapeStudio design system brand gold. The logo SVGs are raster wrappers with no fills to sample, and the design system took its gold from the same logo kit.
- DECISION: Share image built from the real lockup PNG and a real output, rendered from HTML. The banner-creator AI flow was not used, because the brief forbids redrawing the logo and asks for no paste-backs.
- DECISION: Sinhala tagline translated with gemini-translate (Gemini 2.5 Flash). The word chosen for "model" is the female form. Flagged for native review. The DrapeStudio design system's Sinhala deck was not used because it names the brand "Drap Studio".
- DECISION: Sinhala font is Noto Sans Sinhala (sinhala-tamil-fonts skill pick for web, already in the AiGNITE design system font stack), loaded only on this page.
- DECISION: Copy gate scope. New files are checked in full. Edited files are checked on changed lines, so earlier approved copy (the award text) stays verbatim. The one em dash in Nuwan's bio on the home page was changed to a comma, because the brief bans em dashes in edited files.
- DECISION: Comparison row "Who it is for" became "Made for". "it" is on the banned word list.
- DECISION: Only two real before and after pairs qualify (saree, shalwar kameez). Two outputs (dress, children) appear alone on module cards because their inputs were a drawing and a third-party flat lay. The bag output was archived because a drawn T-shirt fixture produced a T-shirt-shaped bag. Fit-on samples were skipped because they show a family member without recorded consent.
- DECISION: Playwright is not in the repo and was not installed. Screenshots were taken with headless Edge over the DevTools protocol.
- DECISION: Retired files go to `_archive/` and pre-edit copies to `_backup/`. Both are git-ignored.
