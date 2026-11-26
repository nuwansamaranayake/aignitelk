# Story-first homepage

Date: 2026-11-26
Surface: aignitelk.com home page (`src/app/page.tsx`). Product pages, nav, footer, title tag, meta description and JSON-LD are unchanged.
Approved by: Nuwan, 2026-11-26, headline A.

## 1. Frame

| Part | On the page |
|---|---|
| Hero of the story | A small business owner in Sri Lanka. Sells on WhatsApp and Facebook. Keeps orders in a book and payroll in Excel. |
| Villain | Hand work: the paper book, the spreadsheet, the laminated pass. |
| Guide | A Sri Lankan company, recognised abroad. 6 products, 1 international award, a sister company in Houston. |
| Plan | Pick your problem. See the product work. Message us. |
| Ask | "Find your product", then "Talk to us". |

H1: "Stop running your business by hand. Get software built for Sri Lanka."

## 2. Section order

Hero, problem (the 6 products, each entered through the job done by hand), guide, award, plan, team, sister company note, ask.

The award block keeps the wording from `award-digital-innovation-impact-pioneer.md`. The award heading stays an H2. Never say the UN gave the award.

## 3. Claims and evidence

| Claim on the page | Evidence | Status |
|---|---|---|
| Each product's problem line and price (Rs. 50 per image, From Rs. 3,000, Free for farmers) | The product pages in `src/app/products/*/content.ts` and `src/app/govihub/content.ts` | Keep. Change here when a product page changes |
| "6 products" | The 6 product pages on this site | Keep |
| Award name, venue, 33 / 22 / 1 | Award record in this folder | Keep, wording unchanged |
| "The courier pays weekly. The customer pays cash at the door. Your budget is in rupees." | Describes the market the products serve (Kadesavi courier check, cash on delivery, rupee prices) | Keep |
| "Aruni replies in Sinhala and English." | Team section says bilingual. The owner confirmed on 2026-11-26 that Aruni replies in both languages | Confirmed |
| "Sister company in Houston, Texas" | Sister company note on the page | Keep |

## 4. Claims removed from the homepage

| Claim | Why |
|---|---|
| "Silicon Valley engineering standards" | Self-description. No evidence on file |
| "AI-Powered Software Solutions from Sri Lanka" as the H1 | Generic slogan. Stays in the title tag for search |

## 5. Open items

- A WhatsApp button on the homepage. Waits for the number from Nuwan. The page offers email until then.

## 6. Rollback

Restore `src/app/page.tsx` from the commit before this change. No other file changed.
