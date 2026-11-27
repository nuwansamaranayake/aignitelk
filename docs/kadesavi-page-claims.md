# Kadesavi page claims and evidence

Page: `/products/kadesavi`. Copy: `src/app/products/kadesavi/content.ts`.
Evidence checked on 2026-11-19 against the read-only repo `E:\AiGNITE\projects\kadesavi` (HEAD `395ed15`, `docs/KADESAVI_HANDOFF.md`) and the live site https://kadesavi.com (English view).

Rule: change a claim here first, then in the content module. No customer counts, testimonials or tax claims. No customer data. Unbuilt features are labelled "Coming soon". One price is on the page: the free page offer, Rs. 1,000 a month after 2 free months. The order book still shows no price.

## The free page offer (added 2026-11-27)

The page now opens with the free page offer. The order book follows, under "When your orders grow". The same offer is a band on the homepage (`#free-page`, right under the hero) and leads the Kadesavi card.

Evidence: the approved offer terms in the kadesavi repo, `docs/campaign/free_page_campaign_v2.md`, shown word for word on kadesavi.com/offer (kadesavi pull request 10).

| Claim on the page | Evidence |
|---|---|
| Free for 2 months from the day the page goes live | Terms: "The page is free for two months from the day it goes live. You pay nothing now." |
| Then Rs. 1,000 a month by bank transfer, only if you keep it | Terms: "If you do, it is Rs. 1,000 a month by bank transfer." |
| If you do not keep it, we turn the page off and charge nothing | Terms: "If you do not, we turn the page off and charge nothing." |
| We build it from your Facebook or Instagram page and the details you send | Terms: "We build it from your Facebook or Instagram page and the details you send us" |
| Business name, logo, location, short description, up to 10 products or services with one photo each, a WhatsApp button | Terms, first paragraph |
| Your own link kadesavi.com/s/your-business | Terms, first paragraph |
| Listed in the Kadesavi store directory | Terms: "Your page is also listed in the Kadesavi store directory at kadesavi.com/stores." |
| One free update a month, up to 5 changes | Terms: "Each month you get one free update of up to 5 changes" |
| No custom domain, online payments, cart or ads | Terms: "It does not include a custom domain such as yourbusiness.lk, online payments, a cart, or ads for your business." |
| No domain or hosting to buy | The page lives on kadesavi.com. Same wording as kadesavi.com |

Not said, on purpose: that the directory brings customers or orders, how many businesses are listed, any review or rating, and any delivery time. The terms say "we aim to have it live within 48 hours". This site leaves the time out.

Links: "Get your free page" and "Read the full terms" go to https://kadesavi.com/offer. That page exists only after kadesavi pull request 10 is live. Deploy this change after it, or the buttons lead to a missing page.

Unchanged: the page title, meta description, canonical, JSON-LD and the single h1 on both pages. The title and description still describe the order book. Changing them is the owner's call.

The claim "Each seller can turn on a shop page" moved into the offer section. The store directory and sample shop links stay.

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
| The order book is a managed service with a monthly fee, no amount | Handoff "What it is". The page says to talk to us about it |

## Coming soon (labelled on the page)

Product search, Business of the week, Tax-ready records, Marketing dashboard, Deeper analytics. All five are labelled "Coming soon" on kadesavi.com.

## Disclaimer

"Kadesavi does not give tax advice." Same line as kadesavi.com.

## Brand assets

`public/img/kadesavi/brand/` holds `kadesavi-logo.svg`, `kadesavi-mark.svg` and `icon-192.png`, copied unchanged from the kadesavi repo `public/brand/`. The share image `public/img/kadesavi/og-kadesavi-1200x630.jpg` is kadesavi.com's own `og-hero.jpg`. Colours come from the kadesavi repo `docs/brand/tokens.json`.

## Sinhala

The only Sinhala on the page is the product name කඩේ සවි, as shown on kadesavi.com. No new Sinhala sentences, so no new native review is needed for this page.
