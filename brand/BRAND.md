# Your AI Side — Brand Specification (v1.0)

Single source of truth for the Your AI Side brand. Any agent or human producing
design work (websites, posters, slides, UI, social) MUST follow this document.

- Brand name: **Your AI Side**
- Domain / handle: **youraiside.com** · wordmark written as `youraiside`
- Tagline: **Put AI on your side.** (always with the terminal period; the period
  takes the accent color)
- Nature: umbrella brand for a family of AI-first products (tools, agents,
  automation/orchestration, enterprise, productivity, content/image/video)

## 1. Core idea

The brand's equity is in the word **"Side"**, not "AI". Everything communicates
*alignment*: AI standing beside you, on your side. The visual grammar is
**"two halves, one seam"** — two half-discs standing side by side, separated by
a narrow vertical gap (the seam). The seam is the signature of the brand: it is
where you and AI meet.

Personality: modern, intelligent, trustworthy, calm, precise, warm — never
hype, never sci-fi.

## 2. Logo system

### 2.1 The mark ("Two Halves", compact ascending)

Geometry (viewBox `0 0 100 100`, do not alter):

- Left half-disc (= "you", sits LOW): `M46 36 A22 22 0 0 0 46 80 Z`
  - Primary version: outlined, `stroke-width: 5`, no fill
  - Small/solid version: filled
- Right half-disc (= "AI", sits HIGH, always ACCENT color, always filled):
  `M54 20 A22 22 0 0 1 54 64 Z`
- Seam: the 8-unit vertical gap between x=46 and x=54. Sacred. Never narrow,
  fill, or bridge it.
- Reading: ascending left→right = "AI lifts you". Never mirror, rotate, or
  restore the descending variant.

Files in `logo/`:

| file | use |
|---|---|
| `mark-light.svg` / `mark-dark.svg` | primary mark ≥ 30 px |
| `mark-solid-light.svg` / `mark-solid-dark.svg` | below 30 px (favicons, nav) |
| `mark-mono-black.svg` / `mark-mono-white.svg` | single-color contexts (engraving, print, watermarks) |

### 2.2 Wordmark

`youraiside` — one word, all lowercase, Inter Tight Bold (700), letter-spacing
−0.035em. The letters `ai` are set in the accent color; everything else in the
foreground color. Shipped as outlined SVG (`wordmark-*.svg`) — use these files,
do not retype unless the exact type settings above are reproduced.

### 2.3 Lockups

- `lockup-vertical-*.svg` — primary lockup (mark above wordmark). Use for
  heroes, covers, posters, splash screens.
- `lockup-horizontal-*.svg` — small lockup (solid mark left of wordmark). Use
  for navbars, footers, email headers, anywhere height-constrained.

### 2.4 Clear space & minimum sizes

- Clear space around any logo asset: ≥ 50% of the mark's width on all sides.
- Minimum sizes: outlined mark 30 px; solid mark 14 px; horizontal lockup
  height 22 px; wordmark alone 11 px.

### 2.5 Sub-brands

Pattern: `youraiside / <product>` — solid mark + `youraiside` + slash in muted
color + product name in accent. Product names lowercase (agents, flow, studio,
vision). Never create separate logos for sub-products.

## 3. Color

Light-first brand: default surfaces are warm bone, not white and not black.

### Light theme
| token | hex | role |
|---|---|---|
| `bg` | `#F4F2EC` | page background (Bone) |
| `surface` | `#FBFAF7` | cards, raised surfaces |
| `fg` | `#16171A` | text, outlined mark (Carbon) |
| `accent` | `#F04E23` | Signal — AI half, `ai` letters, primary CTA, tagline period |
| `muted` | `#6E7076` | secondary text |
| `line` | `#DBD9D2` | borders, dividers |
| `stone` | `#C9C3B6` | tertiary fills, quiet chips |

### Dark theme
| token | hex | role |
|---|---|---|
| `bg` | `#141414` | page background (Carbon) |
| `surface` | `#1C1D20` | cards |
| `fg` | `#F4F2EC` | text (Bone) |
| `accent` | `#FF6A42` | Signal Lift — accent on dark |
| `muted` | `#8A8B90` | secondary text |
| `line` | `#2A2B2E` | borders |

### Functional (product UI only — never brand accents)
`info #2447E0` · `success #0F8A66` · `warning #E8A13C` · `error #D92D20`

Rules: ONE brand accent (Signal). Cobalt is functional-only. No gradients on
brand elements. Accent coverage in any layout ≤ ~10% of the visible area —
Signal is a signal, not a paint bucket.

## 4. Typography

| role | primary | free equivalent (use in code) | notes |
|---|---|---|---|
| Display / headlines | Neue Haas Grotesk | **Inter Tight** 600–700 | tracking −0.02 to −0.035em |
| Body / UI | Inter | **Inter** 400–500 | tracking 0 |
| Data / labels / eyebrows | Söhne Mono | **JetBrains Mono** 400 | uppercase, tracking +0.14 to +0.2em |
| Persian display/UI | — | **Estedad** 500–800 | |
| Persian body | — | **Vazirmatn** 300–500 | |

Type scale (web): 64/44/30/20 display steps, 16–17 body, 13–14 captions,
10–11 mono labels. Sentence case everywhere except mono eyebrows (UPPERCASE).

## 5. Layout & motif language

- **The Seam** as layout device: split sections with an 8px vertical gap
  between two blocks; offset the two blocks vertically (the compact offset,
  ~16% of block height) to echo the mark. This is the brand's signature layout
  move — use it for hero splits, comparison sections, image+text pairs.
- Radii: 8 / 14 / 18 / 22 px (sm/md/lg/xl). App-icon corner ≈ 22.37%.
- Generous whitespace; borders are 1px `line`; shadows minimal or none.
- Mono eyebrows above headlines (small, uppercase, letterspaced, muted).
- Photography/illustration: geometric, calm, warm-neutral; no glow, no neon.

## 6. Voice

Calm, precise, confident. Plain verbs, short sentences, sentence case. No
hype words ("revolutionary", "magic", "supercharge"). The product does things
*for the user's benefit*: "on your side" framing. Persian copy: same register —
صریح، آرام، بدون اغراق.

## 7. Forbidden

Never use: brains, robots, neurons/circuits, sparkles/stars, eyes, purple-cyan
gradients, glow/neon effects, 3D bevels, a second brand accent, descending or
mirrored mark, filled seam, retyped wordmark with wrong tracking, black `#000`
or white `#FFF` as page backgrounds (always Carbon/Bone), accent-colored body
text.

## 8. Motion

Motion explains; it never decorates. If a movement does not show how the brand
or a product works, remove it.

Default: opacity/translate reveals of 400ms or less, once, on load.

Three longer, signature motions are allowed. Use each at most once per page:

| motion | what it shows | limits |
|---|---|---|
| **Mark draw-in** | guides appear, the "you" half is drawn, the "AI" half appears level and lifts 16 units | once on load, under 2s total, must end on the exact mark geometry (§2.1) |
| **Seam close** | two blocks start apart and level, then close to the 8px seam while the emphasized block rises by the seam offset | tied to scroll position, never autoplays |
| **Product demo** | a small loop inside a product tile that shows what that product does | runs only while on screen; one step every 1.5s or slower, or text typed at reading speed; foreground/neutral colors only (no accent) |

Rules for all motion:

- Honor `prefers-reduced-motion`: show the finished state, no movement.
- Any page with a looping motion has a visible switch that stops all motion.
- The resting (final) state must be complete without JavaScript.
- Sensitive products (health, clinical, safety) stay still.
- Pointer feedback is fine when it only answers the pointer and stays
  hairline-weight (example: the measuring crosshair on the mark figure).

Forbidden: video backgrounds, parallax, particles, 3D scenes, cursor trails,
autoplaying carousels, anything that glows, pulses or bounces.

Reference implementation: `src/components/home/` (homepage).
