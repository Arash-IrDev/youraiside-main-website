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
