# Truth-Layer Audit — aignitelk.com product changes

**Date:** 2026-06-10
**Scope:** Add ScanPass, remove Walk For Peace Credential Manager, update PrimePath HR URL on the AiGNITE Software (Pvt) Ltd landing page (`src/app/page.tsx`).
**Sources of truth:** `E:\AiGNITE\projects\ScanPass\docs\architecture\00-product-overview.md`, `10-brand.md`.

## 1. Diagnosis

The landing page presents four product cards under an "AI-Powered Software Solutions" hero. The change swaps out a single-event tool (Walk For Peace Credential Manager) for its productized successor (ScanPass) and corrects a product link. The main legibility risk is **AI-washing by adjacency**: ScanPass is a QR credentialing/ticketing platform with **no AI claims in its own docs**, sitting under an "AI-Powered" banner next to two genuinely-AI products (DrapeStudio, GoviHub).

## 2. Truth Layer (ScanPass canonical facts)

- **What it is:** Multi-tenant SaaS for event credentialing and light ticketing. Organizers register an event, configure credential types + verification rules, issue QR-coded credentials; gate staff verify on mobile with GPS and device tracking.
- **Provenance (proof):** Built from the production-proven Walk for Peace Sri Lanka 2026 codebase. This is the strongest available proof point and the honest bridge from the removed card.
- **Locality:** LKR per-event pricing, Sinhala/Tamil/English support, local support — the defensible wedge vs. international SaaS (Eventbrite et al.).
- **Bounds ("not for"):** No payment gateway, seat maps, or resale controls in v1. Not a generic form builder. Not an attendance tracker.
- **Tagline (brand doc):** "From registration to gate, built for Sri Lanka."

## 3. Claims / Evidence Map

| Claim on card | Evidence | Verdict |
|---|---|---|
| "Event credentialing and gate access platform" | Product overview §"What it is" | Supported |
| "QR-coded credentials for media, staff, VIP, and attendees" | Use cases v1 covers | Supported |
| "verifies at the gate on mobile devices with GPS and device tracking" | Product overview §"What it is" | Supported |
| "Built from the production-proven Walk for Peace Sri Lanka 2026 system" | Overview line 12; migration doc 07 | Supported |
| "LKR pricing and Sinhala/Tamil/English support" | Pricing model + brand doc localization | Supported |
| (Avoided) "AI-powered" | No AI capability described in any ScanPass doc | Correctly omitted |

## 4. AI-Washing Risk Register

- **Resolved:** ScanPass card carries **no AI language**. Described as credentialing infrastructure, which is what it is.
- **Pre-existing, not introduced here:** The hero ("AI-Powered Software Solutions") and OG description imply all products are AI. ScanPass (and previously Walk For Peace, and PrimePath HR) are not AI products. Left unchanged per surgical-change discipline. **Recommendation for a future pass:** soften the hero to "AI-powered and domain-built software" or segment the product grid so non-AI products don't inherit an unearned AI claim.

## 5. Human Memory Layer

Wedge that sticks: "From registration to gate, built for Sri Lanka" + the real story that this ran a national peace walk before it was sold as a product. Provenance is more memorable and more trust-building than any feature list.

## 6. Agent Surface Plan (this change)

- `src/app/page.tsx` — ScanPass product card (no AI claims; provenance + locality foregrounded).
- `src/app/layout.tsx` — added `ScanPass` and `event credentialing` to keyword metadata for retrievability.
- **"Visit →" link:** Points to `https://www.scanpasslk.com`. Added pre-launch on owner's explicit instruction (2026-06-10) — the product site is not yet deployed but ships within days. Accepted risk: the link is live on the marketing page before its destination resolves. Smoke-test the destination once both are deployed.

## 7. Technical Deliverables Backlog (ranked)

1. **(High / Low)** Smoke-test `https://www.scanpasslk.com` once the product site deploys (link is already live on the card, ahead of the destination).
2. **(Med / Low)** Hero/OG copy pass so non-AI products aren't AI-washed by adjacency.
3. **(Med / Med)** Dedicated ScanPass landing page (claims/evidence, pricing tiers, "not for" boundaries) once the product site exists.
