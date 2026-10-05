# GoviHub page (`/govihub`) design plan

Skill: `frontend-design`. Design system: GoviHub Design System (Claude Design, local export `E:\AiGNITE\design-systems\govihub`). The AiGNITE header and footer stay. Everything between them is GoviHub.

## Direction

Daylight. Field greens, turmeric gold, ripe pepper red, open sky. Warm and alive, never dark mode.
One signature moment: the hero phone mockup that plays the real diagnosis flow (leaf photo, analysing, Sinhala result) as a three-frame crossfade. Everything else stays quiet: no fade-up on every section, no hover lift on every card.

## Palette (from design system tokens)

| Name | Hex | Token | Role |
|---|---|---|---|
| Field green | `#2D6A2E` | `--sector-primary` | Primary buttons, headings accents, closing band |
| Deep leaf | `#1B5E20` | `--sector-primary-dark` | Hover, dark bands. Not for text on gold (3.78:1) |
| Turmeric gold | `#E8A838` | `--sector-accent` | Fills only, with slate ink text on top. Never text on white |
| Ripe pepper red | `#B91C1C` | `--color-danger-text` | Small accents: the "problem" marker, pepper dot. Text safe on white |
| Open sky | `#2563EB` on `#EFF6FF` | `--color-info`, `--color-info-tint` | Weather feature, buyers band, sky gradient |
| Slate ink | `#0F172A` / `#475569` | `--text-primary`, `--text-secondary` | Body text. Cool slate, no brown |

Page background `#F8FAFC` (`--surface-page`), cards `#FFFFFF`, borders `#E2E8F0`.

Contrast (WCAG AA, computed): white on `#2D6A2E` 6.54:1, white on `#1B5E20` 7.87:1, `#0F172A` on `#E8A838` 8.58:1, `#B91C1C` on white 6.47:1, `#2563EB` on white 5.17:1, `#475569` on `#F8FAFC` 7.24:1, `#2D6A2E` on `#F8FAFC` 6.25:1, `#2D6A2E` on `#EFF6FF` 6.01:1. Gold text on white is 2.08:1 and deep leaf on gold is 3.78:1, so gold is only ever a fill with slate ink `#0F172A` on top.

## Type roles (design system)

- Display and headings: Inter 800 / 700, tight leading (1.05 to 1.15), negative tracking on the hero only.
- Body: Inter 400 / 500, leading 1.5 (`--line-height-latin`).
- Eyebrows: Inter 600, uppercase, `--letter-spacing-widest` 0.1em.
- Sinhala: Noto Sans Sinhala 400 / 600, `lang="si"`, line height 1.8 (`--line-height-sinhala`), word spacing 0.05em. Never uppercase, never italic.

Note: the `frontend-design` skill warns against Inter as a generic default. Here Inter is the GoviHub brand font, mandated by the design system, so the design system wins. Character comes from scale, colour and the photography, not the typeface.

## Layouts

Desktop 1440:
```
[ AiGNITE nav (unchanged) ]
HERO  sky-to-cream daylight gradient, no photo behind the logo
  | GoviHub lockup (white plate)          |   (sun disc)            |
  | Sri Lanka's AI farming marketplace    |   [ PHONE MOCKUP ]      |
  | subhead                               |   leaf > analysing >    |
  | [Free for farmers. Forever.] pill     |   Sinhala result        |
  | note                                  |                         |
  | [Open GoviHub Spices] [Work with us]  |                         |
PROBLEM  white. pepper-red marker, big heading left, body right, wide pepper photo strip
WHAT IT DOES  varied rhythm:
  | AI band (2 large rows): Diagnose (screenshot) / Ask in Sinhala (screenshot), "AI" tag   |
  | Sell direct (listing screenshot) | Plan around the weather (weather screenshot, sky)    |
  | Buy inputs (compact, turmeric image) | Sinhala Tamil English (compact, type sample)     |
WHO  three bands of different colour and width: Farmers (green, widest), Buyers (gold fill), Suppliers (sky)
START  four numbered steps on one line, hands photo at the side
RECOGNITION  award photo left, heading and four paragraphs right
GOVERNMENT  wide farmland photo with scrim, heading and body on a white panel
VISION AND MISSION  Sinhala first (large), English below (quiet), two columns
SECTORS  Spices (large tile, cardamom photo, "Live now") + Fruits / Produce (small muted, "Coming soon")
BUILT BY AiGNITE  quiet band, AiGNITE stripe, button
CLOSING  field green band, two buttons
[ AiGNITE footer (unchanged) ]
```

Mobile 390:
```
nav (logo + menu button)
HERO  lockup, headline, subhead, promise pill, note, [Open GoviHub Spices] above the fold, [Work with us], then phone
PROBLEM  heading, body, photo
WHAT IT DOES  AI rows stacked (screenshot under text), then the other four stacked, compact ones as a two-up row at 360+
WHO  three full-width bands
START  vertical list 1 to 4
RECOGNITION  photo, then text
GOVERNMENT  photo, then panel
VISION AND MISSION  Sinhala then English
SECTORS  Spices tile, then Fruits and Produce side by side
BUILT BY / CLOSING  stacked buttons, full width
```

## Alignment

12-column grid, max width 72rem, 24px gutter (`--gutter-marketing`). Text columns cap at 36rem. Screenshots sit in a single phone frame style (radius 2rem, slate bezel) so app images read as one family. Section rhythm alternates white and tinted (cream, sky tint, green) instead of every section looking the same.

## Principles

1. One loud moment. The hero phone moves. Nothing else animates on scroll.
2. Honest AI. Only diagnosis and the advisor carry an "AI" tag. Matching is described as matching. Weather credits international weather models.
3. Vary scale and rhythm. Two large AI rows, two medium, two compact. Audiences as bands of different weight, not three identical cards.
4. Sinhala is first-class. Correct font, `lang="si"`, 1.8 leading, Sinhala before English in the vision and mission.

## Generic defaults checked and rejected

- Grid of identical rounded feature cards: replaced by large, medium and compact rows.
- Fade-up on every section: none. Only the hero phone animates, and it stops under reduced motion.
- Hover lift on every card: none.
- Purple or dark gradient hero: daylight sky to cream instead.
- Numbered markers everywhere: only on "Start in four steps".
- Stock-photo people: none. Generated images show crops, land and hands only.

## Deviations from the brief, decided

- Real app screenshots: the brief's `TEST_ACCOUNT` was not filled in, and Claude may not sign in to production with credentials. Screens without other users' data were taken from the GoviHub repo's own test evidence. Fresh Sinhala captures of the diagnosis flow, advisor, listing and marketplace need Nuwan to sign in to the browser pane once.
- Design system readme says "no stock photography". The brief explicitly asks for five generated images, so the brief wins. They show crops, land and hands only.
