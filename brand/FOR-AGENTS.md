# FOR-AGENTS.md — How to build with the Your AI Side brand kit

You are building a deliverable (website, landing page, poster, slides, UI,
social asset) for the brand **Your AI Side**. This folder (`brand/`) is the
complete brand context for this website repo. Follow it exactly.

Root `AGENTS.md` / `CLAUDE.md` are Next.js project rules only — do not confuse
them with this file.

## Read order
1. `BRAND.md` — the spec. Binding.
2. `tokens/brand.css` and `tokens/brand.tokens.json` — use tokens, never
   hard-code brand values.
3. `examples/hero.html` — reference implementation of the hero pattern.

## Hard rules
- **Never redraw or approximate the logo.** Use the SVG files in `logo/`
  (inline their contents or reference them). Exact geometry is in BRAND.md §2
  if you must inline paths.
- **Never retype the wordmark** with a plain font tag unless you replicate:
  Inter Tight 700, letter-spacing −0.035em, lowercase `youraiside`, with `ai`
  in `var(--accent)`.
- Mark selection: outlined mark ≥ 30 px, solid mark < 30 px. Horizontal lockup
  in navbars/footers; vertical lockup in heroes/covers.
- One accent color (`--accent`). Cap accent usage at ~10% of visible area.
  Cobalt `#2447E0` only for functional info states in product UI.
- Backgrounds are `--bg` (Bone `#F4F2EC` light / Carbon `#141414` dark). Never
  pure white or pure black pages.
- Both themes must be supported when building web UI; implement via the
  `[data-theme="dark"]` attribute already defined in `tokens/brand.css`.
- Typography: Inter Tight (display) + Inter (body) + JetBrains Mono (labels).
  Persian: Estedad (display/UI) + Vazirmatn (body). Load via Google Fonts or
  self-host; see `fonts/README.md`.
- Tagline is exactly `Put AI on your side.` — the final period wrapped in an
  accent-colored span.
- Respect the forbidden list in BRAND.md §7. If a request conflicts with it,
  flag the conflict instead of silently complying.

## Signature layout move ("the seam")
When designing heroes or split sections, echo the mark: two content blocks
side by side separated by a small fixed gap (8px), with one block vertically
offset (~16% of block height), the emphasized block raised. Use sparingly —
once per page is enough.

## Quality bar
Aim for the register of stripe.com, linear.app, vercel.com: disciplined
spacing, restrained motion (opacity/translate reveals ≤ 400ms, respect
`prefers-reduced-motion`), 1px borders, no drop-shadow soup, mono eyebrows,
sentence case. When in doubt, remove decoration.

## Asset map
```
logo/       mark-*, wordmark-*, lockup-*          (SVG, light/dark/mono/solid)
icons/      app-icon-master.svg, app-icon-*.png (1024→64), favicon.svg, favicon-*.png
tokens/     brand.css (CSS custom props, both themes), brand.tokens.json
fonts/      README.md (sources & weights)
examples/   hero.html (reference hero, both themes)
README.md   EN overview for this repo
README.fa.md Persian overview
```

In the website repo, runtime mirrors live under `public/brand/` and
`src/app/icon.svg`. Prefer editing files in `brand/` first.
