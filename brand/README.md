# Your AI Side — Brand Kit (v1.0)

Design source of truth for **Your AI Side**. Lives in this website repo under
`brand/` so it stays separate from product docs (`README.md`, root `AGENTS.md`).

| Audience | Start here |
|---|---|
| Humans (EN) | `BRAND.md` |
| Humans (FA) | `README.fa.md` |
| Coding agents | `FOR-AGENTS.md` |

## In this repository

- **Source of truth:** everything under `brand/` (spec, tokens, logos, examples).
- **Web runtime:** the Next.js app imports tokens and mirrors logos into
  `public/brand/` and app icons under `src/app/`. Do not edit copies in
  `public/` as the canonical files — update `brand/` first, then re-copy if
  needed.
- **Root `AGENTS.md` / `CLAUDE.md`:** Next.js project rules only. Brand rules
  for UI work are in `brand/FOR-AGENTS.md`.

## Folder map

```
brand/
  BRAND.md          Spec (binding)
  FOR-AGENTS.md     Agent build rules
  README.md         This file (EN)
  README.fa.md      Persian overview
  logo/             Mark, wordmark, lockups (SVG)
  icons/            App icons + favicons
  tokens/           brand.css + brand.tokens.json
  fonts/            Font sources & weights
  examples/         Reference HTML (hero)
```

## Quick start for UI work

1. Read `BRAND.md` and `FOR-AGENTS.md`.
2. Import `brand/tokens/brand.css` (already wired in `src/app/globals.css`).
3. Use SVG assets from `brand/logo/` or the React mark/wordmark components —
   never redraw the logo.
4. Theme via `data-theme="dark"` on `<html>`.
