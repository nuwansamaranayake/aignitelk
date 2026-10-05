# AiGNITE Software logo and Sri Lanka theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the parent-brand dark green theme on aignitelk.com with the "aignite-lk" theme and the option A logo lockup from the AiGNITE Design System.

**Architecture:** Swap Tailwind color/font tokens to the design's `[data-theme="aignite-lk"]` values, add one `LkLogo` component that renders the mark + live-text wordmark + flag stripe, then repoint page classes from `brand-*` to `lk-*`. Copy and layout stay as they are.

**Tech Stack:** Next.js 14.2 static export, Tailwind 3.4, next/font/google.

**Spec:** `docs/agent-legibility/brand-refresh-lk-theme.md` (source files listed there).

## Global Constraints

- Palette, verbatim: maroon `#8D153A`, maroon-deep `#5E0E27`, maroon-soft `#B8475F`, saffron `#EB7400`, gold `#FFBE29`, teal `#00534E`, teal-soft `#2E7A73`, paper `#FBF7F0`, sand `#F3EBDD`, sand-2 `#E8DCC6`, ink `#1F1517`, ink-2 `#4A3C3E`, ink-3 `#7A6A68`.
- Stripe: `linear-gradient(90deg, #8D153A 0 25%, #FFBE29 25% 50%, #EB7400 50% 75%, #00534E 75% 100%)`.
- Fonts: Sora for display, Noto Sans for body.
- Logo option A proportions (from `LkLogo` in the design kit): icon = 1.3 × size with margin −0.105 × icon, gap 0.3 × size, wordmark 0.62 × size Sora 700 tracking −0.01em, descriptor 0.17 × size Sora 500 tracking 0.38em, stripe height max(2, 0.06 × size). Light: ink wordmark, maroon descriptor. Dark: paper wordmark, gold descriptor.
- No copy, metadata, product or favicon changes.
- Gold is never used for text on paper or white (contrast 1.6:1).

## Review Focus

1. Phone width (375px): the hero lockup must fit with no horizontal scroll.
2. Text contrast on paper/sand/white must stay at or above 4.5:1 for body and small text.
3. No leftover `brand-*`, `text-gradient-*` or `font-mono` class anywhere in `src/` (Tailwind would silently drop them).
4. The wordmark must be real text in the built HTML (agents and screen readers read the name).
5. The fixed nav (now with a 3px stripe) must not cover the hero content (`pt-20`).

---

### Task 1: Tokens and fonts

**Files:** Modify `tailwind.config.ts`, `src/app/globals.css`, `src/app/layout.tsx`

- [ ] Replace `brand` colors with an `lk` palette (values above). Remap `bg` to paper/sand/white, `text` to ink/ink-2/ink-3, `border` to `rgba(31,21,23,0.08)` / `rgba(31,21,23,0.16)`. Add `backgroundImage.stripe` and `boxShadow` `lk-1` / `lk-2` / `lk-3` from the design. Fonts: `heading` → `var(--font-sora)`, `body` → `var(--font-noto-sans)`. Drop `mono` and `bg.surface-hover` (no users after Task 3).
- [ ] `globals.css`: `:root` vars → paper/ink/maroon. Scrollbar → maroon. `.glass-card` → white card with `shadow-lk-1`. `.glass-card-hover` → lift 3px + `shadow-lk-3` on hover. Delete `.text-gradient-green` and `.text-gradient-gold`.
- [ ] `layout.tsx`: load `Sora` (`--font-sora`) and `Noto_Sans` (`--font-noto-sans`) instead of Outfit, DM Sans and JetBrains Mono.

### Task 2: Logo

**Files:** Create `public/logos/AiGNITE_Final_Icon_Light.svg` (verbatim copy of design `assets/aignite/icon_light.svg`), `src/components/LkLogo.tsx`

**Interfaces:** Produces `export default function LkLogo({ size = 40, dark = false }: { size?: number; dark?: boolean })`.

- [ ] Write the SVG and the component using the proportions above.

### Task 3: Page

**Files:** Modify `src/app/page.tsx`

- [ ] Nav: 3px stripe on top, `<LkLogo size={40} />`, Contact button maroon.
- [ ] Hero: `<LkLogo size={72} />` replaces the PNG. Eyebrow uses `font-heading` in maroon. Glow blobs use saffron/maroon. Primary button maroon, secondary outline maroon.
- [ ] Headline accent spans → `text-lk-maroon`. Links → maroon. Docs link → teal. Team role → maroon, team org line → teal. Skill chips → sand bg, ink-2 text.
- [ ] Footer: maroon-deep background, 4px stripe, sand-2 text, gold hover.

### Task 4: Verify

- [ ] `npx tsc --noEmit` → no errors.
- [ ] `npm run build` → static export succeeds.
- [ ] `grep -rnE "brand-|text-gradient|font-mono" src/` → no matches.
- [ ] `out/index.html` contains `AiGNITE` and `Software` as text inside the header.
- [ ] Serve `out/` locally. Check desktop and 375px in the browser: no horizontal scroll, nav does not cover the hero.
- [ ] Commit.
