# Brand refresh: AiGNITE Software logo and Sri Lanka theme

Date: 2026-10-05
Source: Claude Design project "AiGNITE Design System" (412babff-eb29-4f2c-92bf-a8ea999ccc13)
- `AiGNITE Software Logo.html`, option A (named as the chosen lockup in `ui_kits/aignite-software-lk/README.md`)
- `colors_and_type.css`, section `[data-theme="aignite-lk"]`
- `assets/aignite/icon_light.svg` (the yin-yang mark, unchanged from AiGNITE Consulting)

Scope: visual only. Logo, palette, fonts. No copy, claims, pricing, product or metadata changes.

## 1. Diagnosis

- The new lockup renders the company name as live HTML text ("AiGNITE" + "SOFTWARE"), not a raster image. Agents and screen readers read the name directly. The old header used a PNG of the parent Consulting logo, so the page never showed "AiGNITE Software" as a logo.
- The palette separates the Sri Lanka company from AiGNITE Consulting (dark red/green/gold) while keeping the shared mark. This supports the "sister company, not a copy" story the page already tells in prose.
- No claim changes. Nothing new to prove.

## 2. Truth layer (unchanged facts this refresh must not contradict)

- Legal entity: AiGNITE Software (Pvt) Ltd, Sri Lanka. Sister company of AiGNITE Consulting LLC, Houston TX.
- Products listed on the page: DrapeStudio, GoviHub, ScanPass, PrimePath HR.
- The mark is shared with AiGNITE Consulting by design.

## 3. Claims/evidence map

| Claim surface | Change in this refresh | Evidence needed |
|---|---|---|
| Logo wordmark "AiGNITE SOFTWARE" | New | None. Matches the entity name. |
| Logo alt text "AiGNITE Software" | Kept | None. |
| Page copy, product descriptions, bios | Not touched | Out of scope |

## 4. AI-washing risk register

None introduced. The design kit's placeholder copy (new hero line, guessed product one-liners for GoviHub, PrimePath HR and ScanPass) was deliberately **not** applied. Its own README says the copy was written without reading the live site.

Pre-existing items to review in the next copy pass (not changed here):
- "Silicon Valley engineering standards" (hero and About). No proof on the page. Candidate for a bounded rewrite.
- Name variant: page says "(Pvt) Ltd", the design says "Private Ltd". Pick one canonical form.
- Footer reads "© 2025".

## 5. Human memory layer

- Signature motif: the four-color stripe (maroon, gold, saffron, teal) from the Sri Lankan flag. It appears under the wordmark, at the top of the nav and on the footer.
- Light paper background reads as local and approachable, distinct from the parent's dark "intelligence product" chrome.

## 6. Agent surface plan

- Header logo is semantic text inside a link to `#top` with an accessible name.
- Metadata (title, description, OpenGraph) unchanged.
- Favicons unchanged. They already show the same yin-yang mark.

## 7. Technical deliverables backlog

1. (Next copy pass) Bounded rewrite of the "Silicon Valley engineering standards" line. Impact high, effort low.
2. (Next copy pass) Canonical legal name, fixed everywhere. Impact medium, effort low.
3. OpenGraph image using the new lockup. Impact medium, effort low.
4. Transparent-background favicon from `icon_light.svg` (design default). Impact low, effort low.
