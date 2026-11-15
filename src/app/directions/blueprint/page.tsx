import type { Metadata } from "next";
import { Mark } from "@/components/brand/Mark";
import { ThemeToggle } from "@/components/brand/ThemeToggle";
import { Wordmark } from "@/components/brand/Wordmark";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "B · Blueprint" };

const pad = (n: number) => String(n).padStart(2, "0");

const gridPaper = {
  backgroundImage:
    "linear-gradient(color-mix(in srgb, var(--line) 55%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--line) 55%, transparent) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
  backgroundPosition: "-1px -1px",
};

/**
 * Construction guides drawn over the mark, in the mark's own viewBox.
 * The mark itself is the untouched <Mark /> component underneath.
 */
function SeamGuides() {
  const guide = { stroke: "var(--muted)", strokeWidth: 0.3, fill: "none" };
  const dashed = { ...guide, strokeDasharray: "1 1.4" };
  const label = {
    fill: "var(--muted)",
    fontFamily: "var(--font-mono)",
    fontSize: 3,
    letterSpacing: 0.4,
  };
  return (
    <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 size-full">
      <circle cx={46} cy={58} r={22} {...dashed} />
      <circle cx={54} cy={42} r={22} {...dashed} />
      <line x1={46} y1={8} x2={46} y2={92} {...dashed} />
      <line x1={54} y1={8} x2={54} y2={92} {...dashed} />
      <line x1={12} y1={58} x2={90} y2={58} {...dashed} />
      <line x1={10} y1={42} x2={90} y2={42} {...dashed} />
      {/* seam width */}
      <line x1={46} y1={88} x2={54} y2={88} {...guide} />
      <line x1={46} y1={86.5} x2={46} y2={89.5} {...guide} />
      <line x1={54} y1={86.5} x2={54} y2={89.5} {...guide} />
      <text x={50} y={94} textAnchor="middle" {...label}>8</text>
      {/* vertical offset */}
      <line x1={86} y1={42} x2={86} y2={58} {...guide} />
      <line x1={84.5} y1={42} x2={87.5} y2={42} {...guide} />
      <line x1={84.5} y1={58} x2={87.5} y2={58} {...guide} />
      <text x={89} y={51} {...label}>16</text>
      <circle cx={46} cy={58} r={0.7} fill="var(--muted)" />
      <circle cx={54} cy={42} r={0.7} fill="var(--muted)" />
      <text x={10} y={88} {...label}>YOU</text>
      <text x={80} y={14} {...label}>AI</text>
    </svg>
  );
}

export default function BlueprintDirection() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-4 sm:px-8 sm:py-8">
      <div className="border border-line bg-bg">
        {/* Header — drawing frame */}
        <header className="grid grid-cols-[1fr_auto] border-b border-line sm:grid-cols-[1fr_auto_auto_auto]">
          <a href="#top" className="flex items-center px-4 py-3 text-fg no-underline sm:px-6" aria-label="Your AI Side home">
            <Mark variant="outlined" className="size-9" />
            <Wordmark className="-ml-1 text-[18px] leading-none" />
          </a>
          <p className="eyebrow hidden items-center border-l border-line px-6 sm:flex">Sheet 01 / 01</p>
          <p className="eyebrow hidden items-center border-l border-line px-6 sm:flex">Rev 2026</p>
          <div className="flex items-center border-l border-line px-4 sm:px-6">
            <ThemeToggle />
          </div>
        </header>

        <main id="top">
          {/* Hero — copy cell + figure cell */}
          <section className="grid border-b border-line lg:grid-cols-2">
            <div className="reveal-copy flex flex-col justify-between gap-12 p-6 sm:p-10 lg:border-r lg:border-line">
              <p className="eyebrow">Fig. 01 — The seam</p>
              <div>
                <h1 className="font-display text-[clamp(40px,6vw,64px)] font-bold leading-[1.04] tracking-[var(--track-display)]">
                  Put AI on your side<span className="tagline-period">.</span>
                </h1>
                <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-muted">
                  Tools, agents and automation that work for you — quietly,
                  precisely, on your side of the screen.
                </p>
                <div className="reveal-cta mt-9 flex flex-wrap gap-3">
                  <a
                    href="#products"
                    className="rounded-[var(--radius-sm)] border border-accent bg-accent px-5 py-3 text-[15px] font-medium text-white no-underline hover:opacity-90"
                  >
                    See the products
                  </a>
                  <a
                    href="#principles"
                    className="rounded-[var(--radius-sm)] border border-line px-5 py-3 text-[15px] font-medium text-fg no-underline hover:border-muted"
                  >
                    Read the spec
                  </a>
                </div>
              </div>
            </div>
            <figure className="reveal-mark relative m-0 flex aspect-square items-center justify-center border-t border-line lg:aspect-auto lg:border-t-0" style={gridPaper}>
              <div className="relative size-[min(78%,420px)]">
                <SeamGuides />
                <Mark className="relative size-full" />
              </div>
              <figcaption className="eyebrow absolute bottom-4 left-4 !text-[10px] !tracking-[0.1em] whitespace-nowrap sm:bottom-6 sm:left-6 sm:!text-[11px] sm:!tracking-[var(--track-label)]">
                Two halves · 8-unit seam · 16-unit lift
              </figcaption>
            </figure>
          </section>

          {/* Principles — spec cells */}
          <section id="principles" className="grid border-b border-line sm:grid-cols-3" aria-label="Principles">
            {[
              {
                id: "P-01",
                title: "Yours first",
                body: "Your context, your files, your decisions. Nothing leaves your side unless you send it.",
              },
              {
                id: "P-02",
                title: "Beside, not instead",
                body: "Agents and automation stand next to the work — raised, ready, one seam away.",
              },
              {
                id: "P-03",
                title: "Quiet by default",
                body: "The interface is calm because the work is serious. Precision over spectacle.",
              },
            ].map((p, i) => (
              <article key={p.id} className={`p-6 sm:p-8 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0" : ""}`}>
                <p className="eyebrow mb-10">{p.id}</p>
                <h2 className="mb-3 font-display text-[20px] font-semibold tracking-[-0.02em]">{p.title}</h2>
                <p className="text-[15px] leading-[1.7] text-muted">{p.body}</p>
              </article>
            ))}
          </section>

          {/* Products — spec table with expandable rows */}
          <section id="products" aria-labelledby="products-heading">
            <div className="flex items-end justify-between border-b border-line p-6 sm:px-8">
              <h2 id="products-heading" className="font-display text-[30px] font-semibold tracking-[-0.02em]">
                Product register
              </h2>
              <p className="eyebrow">{pad(projects.length)} entries</p>
            </div>
            <div className="eyebrow hidden grid-cols-[64px_200px_1fr_220px_88px_32px] gap-6 border-b border-line px-8 py-3 !text-[10px] md:grid">
              <span>ID</span>
              <span>Product</span>
              <span>Function</span>
              <span>Domain</span>
              <span>Status</span>
              <span />
            </div>
            {projects.map((project, i) => (
              <details key={project.id} className="group border-b border-line last:border-b-0">
                <summary className="grid cursor-pointer list-none grid-cols-[40px_1fr_24px] items-baseline gap-x-4 gap-y-1 px-6 py-5 transition-colors hover:bg-surface md:grid-cols-[64px_200px_1fr_220px_88px_32px] md:gap-6 md:px-8 [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-[12px] text-muted">{pad(i + 1)}</span>
                  <span className="font-display text-[18px] font-semibold tracking-[-0.02em]">{project.name}</span>
                  <span className="col-start-2 text-[14px] leading-snug text-muted md:col-start-auto">{project.summary}</span>
                  <span className="col-start-2 font-mono text-[12px] text-muted md:col-start-auto">{project.domain}</span>
                  <span className="col-start-2 md:col-start-auto">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[var(--track-label)] text-muted uppercase">
                      <span className={`size-1.5 rounded-full ${project.status === "live" ? "bg-fg" : "bg-stone"}`} />
                      {project.status === "live" ? "Live" : "Soon"}
                    </span>
                  </span>
                  <span aria-hidden className="col-start-3 row-start-1 text-right font-mono text-[14px] text-muted transition-transform group-open:rotate-45 md:col-start-auto md:row-start-auto">
                    +
                  </span>
                </summary>
                <div className="grid gap-6 border-t border-dashed border-line bg-surface px-6 py-7 md:grid-cols-[64px_1fr_220px_120px] md:px-8">
                  <span className="hidden md:block" />
                  <p className="max-w-[72ch] text-[15px] leading-[1.75] text-muted">{project.description}</p>
                  <div className="flex flex-wrap content-start gap-2">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="rounded-[var(--radius-sm)] border border-line px-2 py-0.5 font-mono text-[10px] tracking-[var(--track-label)] text-muted uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start font-mono text-[12px] text-accent no-underline hover:opacity-80"
                    >
                      Open ↗
                    </a>
                  )}
                </div>
              </details>
            ))}
          </section>
        </main>

        {/* Footer — title block */}
        <footer className="grid border-t border-line text-[13px] sm:grid-cols-[2fr_1fr_1fr]">
          <div className="p-6 sm:p-8">
            <p className="eyebrow mb-2">Title</p>
            <p className="font-display text-[20px] font-semibold tracking-[-0.02em]">
              Put AI on your side<span className="tagline-period">.</span>
            </p>
          </div>
          <div className="border-t border-line p-6 sm:border-l sm:border-t-0 sm:p-8">
            <p className="eyebrow mb-2">Drawn by</p>
            <a
              href="https://www.linkedin.com/in/arash-banijamali/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg underline decoration-line underline-offset-2 hover:decoration-fg"
            >
              Arash Banijamali
            </a>
          </div>
          <div className="border-t border-line p-6 sm:border-l sm:border-t-0 sm:p-8">
            <p className="eyebrow mb-2">Issued</p>
            <p>© {new Date().getFullYear()} Your AI Side</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
