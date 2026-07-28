import { Mark } from "@/components/brand/Mark";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { ProjectsGallery } from "@/components/ProjectsGallery";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-[1080px] px-6 pb-[90px] pt-[88px] text-center sm:px-10 sm:pt-[110px]">
          <Mark className="reveal-mark mx-auto mb-9 size-[120px]" />
          <div className="reveal-copy">
            <p className="eyebrow mb-4">The AI product family</p>
            <h1 className="font-display text-[clamp(38px,6vw,64px)] font-bold leading-[1.08] tracking-[var(--track-display)]">
              Put AI on your side
              <span className="tagline-period">.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-relaxed text-muted">
              Tools, agents and automation that work for you — quietly,
              precisely, on your side of the screen.
            </p>
          </div>
          <div className="reveal-cta mt-9 inline-flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-[var(--radius-md)] border border-accent bg-accent px-[22px] py-3 text-[15px] font-medium text-white no-underline transition-opacity hover:opacity-90"
            >
              Explore products
            </a>
            <a
              href="#teams"
              className="rounded-[var(--radius-md)] border border-line bg-surface px-[22px] py-3 text-[15px] font-medium text-fg no-underline transition-colors hover:border-muted"
            >
              For teams
            </a>
          </div>
        </section>

        <section
          id="products"
          className="reveal-seam mx-auto mb-16 flex max-w-[1080px] flex-col gap-[var(--seam-gap)] px-6 sm:mb-20 sm:flex-row sm:px-10"
        >
          <div className="min-h-[230px] flex-1 rounded-[var(--radius-lg)] border border-line bg-surface p-[34px]">
            <h2 className="mb-2.5 font-display text-[22px] font-semibold tracking-[-0.02em]">
              Your work
            </h2>
            <p className="text-[15px] leading-[1.7] text-muted">
              Everything stays yours: your context, your files, your decisions.
              The interface is calm because the work is serious.
            </p>
          </div>
          <div
            id="teams"
            className="min-h-[230px] flex-1 rounded-[var(--radius-lg)] border border-fg bg-fg p-[34px] text-bg sm:translate-y-[calc(-1*var(--seam-offset)/2)]"
          >
            <h2 className="mb-2.5 font-display text-[22px] font-semibold tracking-[-0.02em]">
              Your AI side
            </h2>
            <p className="text-[15px] leading-[1.7] opacity-80">
              Agents and automation standing next to it — raised, ready, one
              seam away. Built as a family of products that stay on your side.
            </p>
          </div>
        </section>

        <ProjectsGallery />
      </main>

      <footer className="border-t border-line px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-[1080px] flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} Your AI Side
          </p>
          <p className="text-[13px] text-muted">
            Put AI on your side
            <span className="tagline-period">.</span>
          </p>
        </div>
      </footer>
    </>
  );
}
