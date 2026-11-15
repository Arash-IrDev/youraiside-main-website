import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Mark } from "@/components/brand/Mark";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { projects, type Project } from "@/data/projects";

export const metadata: Metadata = { title: "C · Bento" };

const byId = (id: string) => {
  const project = projects.find((p) => p.id === id);
  if (!project) throw new Error(`Unknown project: ${id}`);
  return project;
};

function Tile({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className={`flex flex-col rounded-[var(--radius-lg)] border border-line bg-surface p-6 sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

function ProductTile({
  id,
  project,
  className,
  children,
}: {
  id?: string;
  project: Project;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tile id={id} className={`scroll-mt-6 ${className ?? ""}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="font-display text-[20px] font-semibold tracking-[-0.02em]">{project.name}</h3>
        <span className="eyebrow !text-[10px]">{project.tags?.[0]}</span>
      </div>
      <p className="max-w-[48ch] text-[14px] leading-relaxed text-muted">{project.summary}</p>
      <div className="my-7 flex flex-1 items-center">{children}</div>
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[12px] text-accent no-underline hover:opacity-80"
        >
          {project.domain} ↗
        </a>
      ) : (
        <span className="font-mono text-[12px] text-muted">{project.domain} · soon</span>
      )}
    </Tile>
  );
}

function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="m-0 flex w-full list-none flex-wrap items-center gap-2 p-0">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded-[var(--radius-sm)] border border-line bg-bg px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-fg uppercase">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden className="font-mono text-[12px] text-muted">→</span>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function BentoDirection() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-8 sm:py-10">
        {/* The 8px gap between every tile is the brand seam */}
        <div className="grid grid-cols-1 gap-[var(--seam-gap)] md:grid-cols-6">
          {/* Hero */}
          <Tile className="reveal-copy justify-between gap-12 md:col-span-4 md:row-span-2 md:min-h-[440px] md:p-10">
            <p className="eyebrow">The AI product family</p>
            <div>
              <h1 className="font-display text-[clamp(40px,5.6vw,64px)] font-bold leading-[1.04] tracking-[var(--track-display)]">
                Put AI on your side<span className="tagline-period">.</span>
              </h1>
              <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-muted">
                Tools, agents and automation that work for you — quietly,
                precisely, on your side of the screen.
              </p>
              <div className="reveal-cta mt-8 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="rounded-[var(--radius-md)] border border-accent bg-accent px-5 py-3 text-[15px] font-medium text-white no-underline hover:opacity-90"
                >
                  Explore products
                </a>
                <a
                  href="#side"
                  className="rounded-[var(--radius-md)] border border-line bg-bg px-5 py-3 text-[15px] font-medium text-fg no-underline hover:border-muted"
                >
                  How it works
                </a>
              </div>
            </div>
          </Tile>

          {/* Mark tile */}
          <Tile className="reveal-mark items-center justify-center md:col-span-2">
            <Mark className="size-[132px]" />
          </Tile>

          {/* Dark "AI side" tile — the raised half */}
          <div
            id="side"
            className="reveal-seam flex flex-col justify-between gap-8 rounded-[var(--radius-lg)] bg-fg p-6 text-bg sm:p-7 md:col-span-2"
          >
            <p className="eyebrow !text-accent">Your AI side</p>
            <p className="text-[15px] leading-[1.65] opacity-85">
              Agents and automation standing next to your work — raised,
              ready, one seam away.
            </p>
          </div>

            <ProductTile id="products" project={byId("random-army")} className="md:col-span-3">
              <Steps steps={["Analyze odds", "Commit", "Watch it unfold"]} />
            </ProductTile>

            <ProductTile project={byId("autiva")} className="md:col-span-3">
              <p className="font-display text-[clamp(24px,2.6vw,30px)] font-semibold leading-[1.15] tracking-[-0.02em]">
                Processed in RAM.
                <br />
                <span className="text-muted">Never kept on record.</span>
              </p>
            </ProductTile>

            <ProductTile project={byId("reelflow")} className="md:col-span-4">
              <Steps steps={["Idea", "Story", "Audio", "Edit", "Publish"]} />
            </ProductTile>

            <ProductTile project={byId("twintask-pro")} className="md:col-span-2">
              <ul className="m-0 grid w-full list-none grid-cols-3 gap-[var(--seam-gap)] p-0">
                {["EN", "DE", "TR", "HI", "AR", "FA"].map((lang) => (
                  <li
                    key={lang}
                    className="rounded-[var(--radius-sm)] border border-line bg-bg py-2.5 text-center font-mono text-[12px] text-fg"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </ProductTile>

            <ProductTile project={byId("bidi-markdown")} className="md:col-span-4">
              <div className="w-full overflow-hidden rounded-[var(--radius-md)] border border-line bg-bg">
                <p className="border-b border-line px-4 py-2 font-mono text-[11px] text-muted">notes.md</p>
                <div className="space-y-2 px-4 py-4 text-[15px] leading-relaxed">
                  <p dir="ltr"># Release notes</p>
                  <p dir="rtl" lang="fa">
                    این پاراگراف فارسی است و از راست به چپ نمایش داده می‌شود.
                  </p>
                  <p dir="ltr" className="text-muted">This line stays left-to-right.</p>
                </div>
              </div>
            </ProductTile>

          {/* Your work tile */}
          <Tile className="justify-between gap-8 md:col-span-2">
            <p className="eyebrow">Your work</p>
            <p className="text-[15px] leading-[1.65] text-muted">
              Everything stays yours: your context, your files, your
              decisions. The interface is calm because the work is serious.
            </p>
          </Tile>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-[1200px] px-4 pb-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-3 rounded-[var(--radius-lg)] border border-line px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-[13px] text-muted">© {new Date().getFullYear()} Your AI Side</p>
          <p className="text-[13px] text-muted">
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/arash-banijamali/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg underline decoration-line underline-offset-2 hover:decoration-fg"
            >
              Arash Banijamali
            </a>
          </p>
          <p className="text-[13px] text-muted">
            Put AI on your side<span className="tagline-period">.</span>
          </p>
        </div>
      </footer>
    </>
  );
}
