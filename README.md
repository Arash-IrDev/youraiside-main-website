# Your AI Side

Official website for **Your AI Side**.

## Production

- https://www.youraiside.com (primary)
- https://youraiside.com (redirects to `www`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Structure

- `src/app/page.tsx` — the homepage (the only page): hero, seam section,
  product register, footer
- `src/components/home/` — homepage pieces: the self-drawing mark
  (`SeamFigure`), the scroll-driven seam (`ScrollSeam`), product demos
  (`demos`), the motion switch (`motion`) and their CSS (`home.module.css`)
- `src/components/brand/` — `Mark`, `Wordmark`, `ThemeToggle`
- `src/data/projects.ts` — product list; add a product here
- `src/app/opengraph-image.tsx` — link-preview image, built at deploy time
- `src/app/robots.ts`, `src/app/sitemap.ts` — add new public routes to the sitemap

Motion follows `brand/BRAND.md` §8: every animation has a finished resting
state, honors `prefers-reduced-motion`, and stops with the page's Motion switch.

## Deploying

Vercel deploys `main` to production and every pull request to a preview URL.
Merge to `main` to publish.

## Brand

Design source of truth lives in [`brand/`](./brand/) (spec, tokens, logos).
Agent rules for branded UI: [`brand/FOR-AGENTS.md`](./brand/FOR-AGENTS.md).
Root [`AGENTS.md`](./AGENTS.md) is Next.js-only and must stay separate from the brand kit.

Runtime copies used by the site:

- `public/brand/` — static logo & icon files
- `src/app/icon.svg`, `src/app/apple-icon.png` — favicon / Apple touch icon
- `src/app/globals.css` — imports `brand/tokens/brand.css`

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint
