import Link from "next/link";
import { SiteHeader } from "@/components/brand/SiteHeader";

const directions = [
  {
    href: "/directions/editorial",
    letter: "A",
    name: "Editorial",
    idea: "A magazine on a 12-column grid. Left-set headline, a row of facts, numbered sections and a product index you read like a table of contents.",
    refs: "Swiss Editorial · Vercel · Stripe Press",
    suits: "Telling the story of the family, long product descriptions",
  },
  {
    href: "/directions/blueprint",
    letter: "B",
    name: "Blueprint",
    idea: "A technical drawing. Every block sits in a 1px frame, the mark is shown with its construction lines, and products are a register you can open row by row.",
    refs: "Structured Lines · Blueprint · Linear",
    suits: "Precision and trust, a growing list of products",
  },
  {
    href: "/directions/bento",
    letter: "C",
    name: "Bento",
    idea: "A tile grid where the 8px seam is the gap between every tile. Each product gets its own small visual drawn from what it actually does.",
    refs: "Bento Layout · Apple · Raycast",
    suits: "Showing many products at a glance, quick scanning on mobile",
  },
  {
    href: "/directions/hybrid",
    letter: "D",
    name: "Hybrid + motion",
    idea: "The Blueprint frame with Bento product tiles, plus motion that explains: the mark draws itself, the seam closes as you scroll, and each product shows what it does.",
    refs: "B + C · scroll-driven and interactive sites",
    suits: "The strongest first impression, while staying calm and on brand",
  },
];

export default function DirectionsIndex() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1080px] px-6 py-16 sm:px-10 sm:py-20">
        <p className="eyebrow mb-4">Homepage redesign</p>
        <h1 className="font-display text-[clamp(32px,5vw,44px)] font-bold leading-[1.1] tracking-[var(--track-display)]">
          Four directions, one brand<span className="tagline-period">.</span>
        </h1>
        <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-muted">
          Each one uses the same tokens, fonts, mark, copy and product data.
          Only structure and composition change. Try each in light, dark and
          on a phone.
        </p>

        <ul className="m-0 mt-12 grid list-none gap-[var(--seam-gap)] p-0 md:grid-cols-2">
          {directions.map((d) => (
            <li key={d.href}>
              <Link
                href={d.href}
                className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-line bg-surface p-7 text-fg no-underline transition-colors hover:border-muted"
              >
                <span className="font-mono text-[12px] text-muted">{d.letter}</span>
                <span className="mt-6 font-display text-[22px] font-semibold tracking-[-0.02em]">
                  {d.name}
                </span>
                <span className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">{d.idea}</span>
                <span className="mt-6 border-t border-line pt-4 text-[13px] leading-snug text-muted">
                  <span className="eyebrow mb-1 block !text-[10px]">Good for</span>
                  {d.suits}
                </span>
                <span className="mt-4 text-[13px] leading-snug text-muted">
                  <span className="eyebrow mb-1 block !text-[10px]">Draws on</span>
                  {d.refs}
                </span>
                <span className="mt-6 text-[14px] font-medium">
                  Open <span aria-hidden className="inline-block text-accent transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
