# Kadesavi page claims and evidence

Page: `/products/kadesavi`. Copy: `src/app/products/kadesavi/content.ts`.
Evidence checked on 2026-11-19 against the read-only repo `E:\AiGNITE\projects\kadesavi` (HEAD `395ed15`, `docs/KADESAVI_HANDOFF.md`) and the live site https://kadesavi.com (English view).

Rule: change a claim here first, then in the content module. No prices, customer counts, testimonials or tax claims. No customer data. Unbuilt features are labelled "Coming soon".

## Built and live

| Claim on the page | Evidence |
|---|---|
| Order book for one-owner sellers on WhatsApp and Facebook, courier, cash on delivery, weekly pay | Handoff "What it is". kadesavi.com hero |
| Paste a WhatsApp message, type the order or photograph a book page | Handoff: order entry by form, pasted text, book page photo. Voice is left out (not tested live) |
| Courier Excel in the courier's own format, one tap | Handoff: courier Excel export in the pilot's real format. kadesavi.com "One tap courier sheet" |
| Weekly payment check: short payments, missing parcels, returns | Handoff: courier invoice import flags short paid, missing after 14 days, returns. kadesavi.com "Monday payment check" |
| Profit per product and sales by district, estimates until invoiced | Handoff: profit per product and sales by district, estimated until invoiced |
| Shop page with logo, photos, product lines, Order on WhatsApp | Handoff: shop pages at kadesavi.com/s/slug. kadesavi.com "Promote your business" |
| Store directory | Live at https://kadesavi.com/stores (200 on 2026-11-19) |
| Sample shop, not a real business | https://kadesavi.com/s/demo, synthetic data. Wording copied from kadesavi.com |
| Runs on phone, installable | Handoff: seller app is an installable PWA |
| Sinhala and English on every screen | kadesavi.com "In your language" |
| We set it up, load products and courier format | kadesavi.com "We set it up for you" |
| Only you see your customers' details | kadesavi.com wording. Handoff: tenant isolation tests |
| Managed service with a monthly fee, no amount | Handoff "What it is". kadesavi.com says "Message us about pricing and setup" |

## Coming soon (labelled on the page)

Product search, Business of the week, Tax-ready records, Marketing dashboard, Deeper analytics. All five are labelled "Coming soon" on kadesavi.com.

## Disclaimer

"Kadesavi does not give tax advice." Same line as kadesavi.com.

## Brand assets

`public/img/kadesavi/brand/` holds `kadesavi-logo.svg`, `kadesavi-mark.svg` and `icon-192.png`, copied unchanged from the kadesavi repo `public/brand/`. The share image `public/img/kadesavi/og-kadesavi-1200x630.jpg` is kadesavi.com's own `og-hero.jpg`. Colours come from the kadesavi repo `docs/brand/tokens.json`.

## Sinhala

The only Sinhala on the page is the product name කඩේ සවි, as shown on kadesavi.com. No new Sinhala sentences, so no new native review is needed for this page.
