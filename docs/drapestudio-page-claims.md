# DrapeStudio family page: claims and evidence

Page: `/products/drapestudio` (source `src/app/products/drapestudio/`)
Built: 2026-10-05, branch `feature/drapestudio-family-page`
Rule: every price and feature on the page has a row here with proof. Code wins over docs.

Repos read (paths relative to `E:\AiGNITE\projects\`):
- `DrapeStudio-v2` at commit `6e751cc`
- `MirrorMe` at commit `a4666bb`
- Brief facts: "payments product truth facts, verified 2026-08-05" in prompt AIGNITELK-01, section 3.1. Used only where code agrees or is silent.

## Prices

| # | Claim on page | Evidence | Status |
|---|---|---|---|
| P1 | Rs. 50 per image, any module | `DrapeStudio-v2/services/generation/generation/config/modules.py:3` `PRICE_PER_IMAGE_LKR = 50` (all modules). Charged at `services/generation/generation/domain/generation_service.py:248`. | Verified |
| P2 | Rs. 50 per fit-on, one or two garments | `DrapeStudio-v2/services/fiton/fiton/domain/fiton_service.py:22` `COST_LKR = 50`. Second garment: `services/fiton/fiton/schemas/fiton.py:9`. Same price for two: `frontend/src/pages/fiton/FitonUpload.tsx:33,63`. | Verified |
| P3 | Starter Pack Rs. 500 (no bonus) | `DrapeStudio-v2/services/billing/billing/config/packages.py:24-26` | Verified |
| P4 | Popular Pack Rs. 1,000 + Rs. 100 bonus = Rs. 1,100, badge "Best Value" | `packages.py:30-34` | Verified |
| P5 | Value Pack Rs. 2,500 + Rs. 350 bonus = Rs. 2,850 | `packages.py:37-40` | Verified |
| P6 | Bulk Pack Rs. 5,000 + Rs. 1,000 bonus = Rs. 6,000 | `packages.py:43-46` | Verified |
| P7 | Images per pack: 10, 22, 57, 120 | Derived: pack total / Rs. 50 (P1, P3 to P6) | Derived |
| P8 | Wallet balance shown: Rs. 1,100 after a Popular Pack reload | Derived from P4 | Derived |
| P9 | Wallet is in LKR, "Pay in rupees", "LKR pricing" | `DrapeStudio-v2/frontend/src/config/company.json:13` `"currency": "LKR"` | Verified |
| P10 | MirrorMe: Rs. 50 per look, paid from the MirrorMe wallet | `MirrorMe/src/config/pricing.ts:4-5` (single and two-piece both 50). Charge path is the same ds-fiton service (P2). | Verified |

## Trial, billing behaviour

| # | Claim on page | Evidence | Status |
|---|---|---|---|
| B1 | 5 free images in your first 7 days | `packages.py:14-16` `duration_days: 7`, `max_images: 5`. Applied at `services/billing/billing/domain/wallet_service.py:183`. Note: the counter moves once per generation request (up to 3 views), so 5 is a floor. | Verified |
| B2 | Your balance never expires | Wallet model has no expiry on the balance: `services/billing/billing/models/billing.py:12` (balance) vs `:18,:20` (only trial and premium expiry). Brief truth facts list "Wallet balance never expires". | Verified (code silent, no expiry mechanism) |
| B3 | A failed generation costs nothing. You pay after the generation finishes. | `generation_service.py:248` "Billing deduction (after confirmed success)". Failed path sets `ALL_VIEWS_FAILED` at `:290` with no deduction. | Verified (see gap G2) |
| B4 | Reload your wallet (no payment method names) | PayHere is off by default: `frontend/src/config/payments.ts:7`, `docker-compose.yml:195` `VITE_PAYHERE_ENABLED:-false`. Method names left off the page per brief rule 3.3. | Policy |

## Features

| # | Claim on page | Evidence | Status |
|---|---|---|---|
| F1 | Phone photo of a garment in, model photo out | Brief truth facts (3.1). Upload step `frontend/src/pages/generation/Upload.tsx`. Spot-test outputs `DrapeStudio-v2/output/2026-06-14/generation/*/output.png`. | Verified |
| F2 | Modules: Adult Clothing, Children's Clothing, Accessories | `modules.py:7,20,33` labels, served by `GET /api/v1/generation/modules` (`services/generation/generation/api/routes.py:43-54`) | Verified |
| F3 | Adult: sarees, shalwar kameez, dresses, T-shirts, shirts, blouses, trousers, skirts, jackets. Male or female, five skin tones, four poses. Up to 3 views. | `modules.py:8,12-16` | Verified |
| F4 | Children: baby, toddler, kid, teen. Girl, boy or unisex. Pose and background. Up to 3 views. | `modules.py:21,25-29` | Verified |
| F5 | Accessories: necklaces, earrings, bracelets, rings, handbags, hats, scarves, crochet, hair accessories. On a model, flat lay or lifestyle. 1 view. | `modules.py:33-41` | Verified |
| F6 | Virtual Fit-On: one garment, or a top and a bottom, on a customer photo. Body measurements give a size suggestion. | `fiton.py:9,11` (second garment, garment types incl. top and bottom). `frontend/src/i18n/en.json:257-258,270` (customer details, body measurements, recommended size). | Verified |
| F7 | Choose model, skin tone, pose and background | `modules.py:13-16` | Verified |
| F8 | Download and WhatsApp share | `frontend/src/pages/generation/Results.tsx:153-158` (download), `:50,187-192` (WhatsApp) | Verified |
| F9 | Sign in with Google, "Google sign-in" | `services/gateway/gateway/api/auth.py:51,65`. No OTP, SMS or phone login found. | Verified |
| F10 | Sinhala, Tamil, English | `frontend/src/i18n/config.ts:3-5,23-25` | Verified |
| F11 | Works in your phone browser | drapestudiolk.com is a web app (`DrapeStudio-v2/frontend`, Vite SPA). Live URL returned HTTP 200 on 2026-10-05. | Verified |
| F12 | AIgnite Software (Private) Limited, company number PV 00362580, Colombo, Sri Lanka | `frontend/src/config/company.json:2-3,11` | Verified |
| F13 | Every gallery result comes from the DrapeStudio app | `DrapeStudio-v2/docs/ai-spot-tests/2026-06-14/REVIEW.md:44-48` (generation matrix, real pipeline, gemini-3.1-flash-image) | Verified (see gap G3) |

## MirrorMe

| # | Claim on page | Evidence | Status |
|---|---|---|---|
| M1 | Save up to five selfies on your phone | `MirrorMe/README.md:3` | Verified |
| M2 | Add one piece or two | `MirrorMe/src/i18n/locales/en.json:58` "Add a second piece (optional)", `src/routes/Garment.tsx:32` | Verified |
| M3 | Style scenes from the style catalog | `MirrorMe/src/api/types.ts:40` "Styled scenes (live since 2026-07-12)". Catalog endpoint `DrapeStudio-v2/services/fiton/fiton/api/routes.py:105`. Commit `da0719c` "wire styled scenes, live catalog step". | Verified |
| M4 | Share to WhatsApp, Facebook, Instagram, Download | `MirrorMe/src/i18n/locales/en.json:103-108`. Commit `147e70b` share sheet. | Verified |
| M5 | For adults 18 and over | `MirrorMe/src/i18n/locales/en.json:14` | Verified |
| M6 | Sinhala, English and Tamil | `MirrorMe/README.md:5` | Verified |
| M7 | Separate account and separate wallet from DrapeStudio, even with the same Google login | `DrapeStudio-v2/services/gateway/alembic/versions/005_identity_segregation.py:1,5` users keyed (email, product). `services/gateway/gateway/api/auth.py:115`. `MirrorMe/docs/ROLLOUT_NOTE_IDENTITY.md:3,8`. | Verified |
| M8 | "Try the look before you buy the look" | Live meta description at https://mirrorme.cc (fetched 2026-10-05) | Verified |
| M9 | Live at https://mirrorme.cc | HTTP 200 on 2026-10-05 | Verified |

## Claims removed for lack of proof (or proven false)

| Brief item | What the code says | Action |
|---|---|---|
| Per-image price by quality: 1K Rs. 40, 2K Rs. 60, 4K Rs. 100 | `IMAGE_PRICES` at `packages.py:4-8` is read only by a test. Live charge is flat Rs. 50 (`modules.py:3`) and every job is `quality_tier="2K"` (`generation/api/routes.py:192`). | Removed. Page shows Rs. 50 flat. No quality choice in the "How it works" steps. |
| Fit-on price Rs. 80 | `FITON_PRICE = 80` at `packages.py:11` is never read by the charge path. Live charge `COST_LKR = 50` (`fiton_service.py:22`). | Page shows Rs. 50. |
| Free trial images are watermarked | `"watermark": True` at `packages.py:18` is never read. No watermark code exists. | "Watermarked" removed. |
| A failed generation returns the amount to the wallet automatically | No automatic refund. Failed jobs are never charged (`generation_service.py:248,290`). | Reworded to "A failed generation costs nothing." |
| MirrorMe 30-day pass: Rs. 1,000 for 30 looks | Not found in MirrorMe or DrapeStudio-v2. The only plan in code is `SUBSCRIPTION_PRICE_LKR = 900`, 20 looks a month (`MirrorMe/src/config/pricing.ts:15-16`), and the file says the backend for it does not exist. | Removed. Page shows Rs. 50 per look. |
| Output resolution (1K, 2K, 4K) | Code labels every job 2K, but spot-test outputs are 896x1200. | No resolution claim on the page. |

## Images on the page

Real DrapeStudio outputs used (source `DrapeStudio-v2/output/2026-06-14/generation/`, resized to WebP, inputs padded to 3:4, never cropped):
- Saree pair: `1-saree-adult/input.png` + `output.png` (hero, slider, gallery)
- Shalwar kameez pair: `2-shalwar-adult/input.png` + `output.png` (gallery)
- Dress output: `3-dress-adult/output.png` (Adult Clothing card). Its input was a drawn test fixture, so only the output is shown.
- Children output: `4-children/output.png` (Children's Clothing card). Its input looks like a third-party web image, so only the output is shown.

Not used: `5-accessory-bag/output.png`. A drawn T-shirt fixture produced a T-shirt-shaped bag. Archived in `_archive/`.

Placeholders ("Sample coming soon") and the images needed to fill them:

| Slot | File to supply | Size | Subject |
|---|---|---|---|
| Accessories card | `accessories-after.png` | 896x1200 output | A real DrapeStudio Accessories output from a real product photo (necklace, earrings or handbag) |
| Virtual Fit-On card + gallery tile | `fiton-before.jpg` (customer photo), `fiton-garment.jpg`, `fiton-after.png` | output 896x1200 | A DrapeStudio fit-on of a consenting adult, with written consent to publish |
| Children's wear gallery tile | `children-before.jpg`, `children-after.png` | output 896x1200 | A seller's own phone photo of a children's garment and its DrapeStudio output |
| MirrorMe share preview | `mirrorme-look.png` | 896x1200 or 1080x1350 | A real MirrorMe look of a consenting adult (18+), current app version |

## Gaps found (product bugs to fix in DrapeStudio-v2, not on this page)

- G1. The DrapeStudio landing page (`frontend/src/pages/Landing.tsx:23-28`) shows a "credits" price table (500/50, 1000/120, 2500/325, 5000/700) that does not match the real packages. `en.json:66,74,368` still say "credits".
- G2. Partial failure overcharge: a generation with some failed views still charges for every requested view (`generation_service.py:244-246` counts `gen_request.views`). The in-app refund text (`en.json:642`) promises the charge for a failed generation comes back automatically. The page avoids promising per-image refunds for this reason.
- G3. The spot-test review (`REVIEW.md`) has empty "Visual sign-off" boxes. The saree and shalwar kameez inputs are mannequin photos with no recorded source. Nuwan should confirm the inputs are ours to publish before this page ships.
- G4. `frontend/src/i18n/en.json:269` (and `si.json`, `ta.json`) still say "Rs. 80 per fit-on" in an unused key.
- G5. `frontend/src/pages/Landing.tsx:11` links to `?module=adult-fashion`, which is not a valid module id.
- G6. The DrapeStudio design system's Sinhala copy deck (`logo-kit/sinhala-copy.md`) spells the brand "Drap Studio". The correct name is DrapeStudio.
