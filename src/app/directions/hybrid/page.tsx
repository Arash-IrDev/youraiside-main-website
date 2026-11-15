import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Mark } from "@/components/brand/Mark";
import { ThemeToggle } from "@/components/brand/ThemeToggle";
import { Wordmark } from "@/components/brand/Wordmark";
import {
  BidiTyping,
  LanguageCycle,
  OddsBars,
  PipelineSteps,
} from "@/components/directions/hybrid/demos";
import {
  MotionProvider,
  MotionToggle,
} from "@/components/directions/hybrid/motion";
import { ScrollSeam } from "@/components/directions/hybrid/ScrollSeam";
import { SeamFigure } from "@/components/directions/hybrid/SeamFigure";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "D · Hybrid + motion" };

const pad = (n: number) => String(n).padStart(2, "0");

/** What each product tile shows, and how wide it sits on the 6-column grid. */
const tiles: Record<string, { span: string; demo: ReactNode }> = {
  "random-army": { span: "md:col-span-3", demo: <OddsBars /> },
  autiva: {
    span: "md:col-span-3",
    // Deliberately still: a clinical product does not need a moving demo.
    demo: (
      <p className="font-display text-[clamp(24px,2.6vw,30px)] font-semibold leading-[1.15] tracking-[-0.02em]">
        Processed in RAM.
        <br />
        <span className="text-muted">Never kept on record.</span>
      </p>
    ),
  },
  reelflow: { span: "md:col-span-3", demo: <PipelineSteps /> },
  "twintask-pro": { span: "md:col-span-3", demo: <LanguageCycle /> },
  "bidi-markdown": { span: "md:col-span-6", demo: <BidiTyping /> },
};

export default function HybridDirection() {
  return (
    <MotionProvider>
      <div className="mx-auto w-full max-w-[1200px] px-4 py-4 sm:px-8 sm:py-8">
        <div className="border border-line bg-bg">
          {/* Header — drawing frame */}
          <header className="grid grid-cols-[1fr_auto] border-b border-line sm:grid-cols-[1fr_auto_auto]">
            <a
              href="#top"
              className="flex items-center px-4 py-3 text-fg no-underline sm:px-6"
              aria-label="Your AI Side home"
            >
              <Mark variant="outlined" className="size-9" />
              <Wordmark className="-ml-1 text-[18px] leading-none" />
            </a>
            <p className="eyebrow hidden items-center border-l border-line px-6 sm:flex">
              Sheet 01 / 01
            </p>
            <div className="flex items-center gap-2 border-l border-line px-3 sm:px-6">
              <span className="hidden sm:block">
                <MotionToggle />
              </span>
              <ThemeToggle />
            </div>
          </header>

          <main id="top">
            {/* Hero — copy cell + the mark drawing itself */}
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
                  <div className="reveal-cta mt-9 flex flex-wrap items-center gap-3">
                    <a
                      href="#products"
                      className="rounded-[var(--radius-sm)] border border-accent bg-accent px-5 py-3 text-[15px] font-medium text-white no-underline hover:opacity-90"
                    >
                      See the products
                    </a>
                    <a
                      href="#seam"
                      className="rounded-[var(--radius-sm)] border border-line px-5 py-3 text-[15px] font-medium text-fg no-underline hover:border-muted"
                    >
                      How it works
                    </a>
                    <span className="sm:hidden">
                      <MotionToggle />
                    </span>
                  </div>
                </div>
              </div>
              <SeamFigure />
            </section>

            {/* The seam — closes as you scroll */}
            <section
              id="seam"
              className="grid scroll-mt-4 border-b border-line lg:grid-cols-[1fr_2fr]"
            >
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-10 lg:border-r lg:border-line">
                <p className="eyebrow">Fig. 02 — Side by side</p>
                <h2 className="font-display text-[30px] font-semibold leading-[1.12] tracking-[-0.02em]">
                  Two halves,
                  <br />
                  one seam.
                </h2>
              </div>
              <div className="overflow-hidden p-6 sm:p-10">
                <ScrollSeam
                  you={
                    <article className="h-full min-h-[220px] rounded-[var(--radius-md)] border border-line bg-surface p-7">
                      <p className="eyebrow mb-8">You</p>
                      <h3 className="mb-2.5 font-display text-[20px] font-semibold tracking-[-0.02em]">
                        Your work
                      </h3>
                      <p className="text-[15px] leading-[1.7] text-muted">
                        Everything stays yours: your context, your files, your
                        decisions. The interface is calm because the work is
                        serious.
                      </p>
                    </article>
                  }
                  ai={
                    <article className="h-full min-h-[220px] rounded-[var(--radius-md)] bg-fg p-7 text-bg">
                      <p className="eyebrow mb-8 !text-accent">AI</p>
                      <h3 className="mb-2.5 font-display text-[20px] font-semibold tracking-[-0.02em]">
                        Your AI side
                      </h3>
                      <p className="text-[15px] leading-[1.7] opacity-80">
                        Agents and automation standing next to it — raised,
                        ready, one seam away.
                      </p>
                    </article>
                  }
                />
              </div>
            </section>

            {/* Products — a register made of tiles */}
            <section id="products" className="scroll-mt-4" aria-labelledby="products-heading">
              <div className="flex items-end justify-between border-b border-line p-6 sm:px-10">
                <h2
                  id="products-heading"
                  className="font-display text-[30px] font-semibold tracking-[-0.02em]"
                >
                  Product register
                </h2>
                <p className="eyebrow">{pad(projects.length)} entries</p>
              </div>
              <ul className="m-0 grid list-none grid-cols-1 gap-[var(--seam-gap)] p-[var(--seam-gap)] md:grid-cols-6">
                {projects.map((project, i) => {
                  const tile = tiles[project.id];
                  return (
                    <li key={project.id} className={tile?.span ?? "md:col-span-3"}>
                      <article className="flex h-full flex-col rounded-[var(--radius-md)] border border-line bg-surface p-6 sm:p-7">
                        <div className="mb-2 flex items-baseline gap-3">
                          <span className="font-mono text-[12px] text-muted">{pad(i + 1)}</span>
                          <h3 className="font-display text-[20px] font-semibold tracking-[-0.02em]">
                            {project.name}
                          </h3>
                          <span className="eyebrow ml-auto !text-[10px]">
                            {project.tags?.[0]}
                          </span>
                        </div>
                        <p className="max-w-[60ch] text-[14px] leading-relaxed text-muted">
                          {project.summary}
                        </p>
                        {tile && (
                          <div className="my-7 flex flex-1 items-center">{tile.demo}</div>
                        )}
                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto font-mono text-[12px] text-accent no-underline hover:opacity-80"
                          >
                            {project.domain} ↗
                          </a>
                        ) : (
                          <span className="mt-auto font-mono text-[12px] text-muted">
                            {project.domain} · soon
                          </span>
                        )}
                      </article>
                    </li>
                  );
                })}
              </ul>
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
    </MotionProvider>
  );
}
