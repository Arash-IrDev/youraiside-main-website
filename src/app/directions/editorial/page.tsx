import type { Metadata } from "next";
import { Mark } from "@/components/brand/Mark";
import { ThemeToggle } from "@/components/brand/ThemeToggle";
import { Wordmark } from "@/components/brand/Wordmark";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "A · Editorial" };

const pad = (n: number) => String(n).padStart(2, "0");

function SectionHead({ index, label }: { index: number; label: string }) {
  return (
    <div className="mb-10 grid grid-cols-12 gap-x-6 border-t border-fg pt-4 sm:mb-14">
      <p className="eyebrow col-span-3 text-fg sm:col-span-2">{pad(index)}</p>
      <p className="eyebrow col-span-9 sm:col-span-10">{label}</p>
    </div>
  );
}

export default function EditorialDirection() {
  const live = projects.filter((p) => p.status === "live").length;

  return (
    <>
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-6 sm:px-10">
        <a href="#top" className="flex items-center text-fg no-underline" aria-label="Your AI Side home">
          <Mark variant="outlined" className="size-9" />
          <Wordmark className="-ml-1 text-[18px] leading-none" />
        </a>
        <nav className="hidden items-center gap-8 sm:flex" aria-label="Sections">
          <a href="#principles" className="eyebrow no-underline hover:text-fg">Principles</a>
          <a href="#products" className="eyebrow no-underline hover:text-fg">Products</a>
          <a href="#colophon" className="eyebrow no-underline hover:text-fg">About</a>
        </nav>
        <ThemeToggle />
      </header>

      <main id="top" className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
        {/* Hero — left-set headline on a 12-column grid */}
        <section className="grid grid-cols-12 gap-x-6 gap-y-10 pb-16 pt-14 sm:pb-24 sm:pt-24">
          <div className="reveal-copy col-span-12 lg:col-span-8">
            <p className="eyebrow mb-6">Issue {pad(1)} — The AI product family</p>
            <h1 className="font-display text-[clamp(44px,7vw,64px)] font-bold leading-[1.02] tracking-[var(--track-display)]">
              Put AI
              <br />
              on your side<span className="tagline-period">.</span>
            </h1>
          </div>
          <div className="reveal-cta col-span-12 self-end lg:col-span-4">
            <p className="text-[17px] leading-[1.65] text-muted">
              Tools, agents and automation that work for you — quietly,
              precisely, on your side of the screen.
            </p>
            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-5">
              <a href="#products" className="group flex items-center justify-between text-[15px] font-medium text-fg no-underline">
                Read the product index
                <span aria-hidden className="text-accent transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#principles" className="group flex items-center justify-between text-[15px] font-medium text-fg no-underline">
                How we build
                <span aria-hidden className="text-muted transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Facts row — figures taken from the product data */}
        <section className="reveal-seam mb-24 grid grid-cols-2 border-y border-line sm:mb-32 sm:grid-cols-4">
          {[
            { figure: pad(live), label: "Products live" },
            { figure: "6", label: "Languages in TwinTask Pro" },
            { figure: "0", label: "Documents Bidi Markdown sends to a server" },
            { figure: "RAM", label: "Where Autiva processes video" },
          ].map((fact, i) => (
            <div
              key={fact.label}
              className={`py-7 pr-4 ${i > 0 ? "sm:border-l sm:border-line sm:pl-6" : ""} ${i % 2 === 1 ? "border-l border-line pl-6 sm:pl-6" : ""} ${i > 1 ? "border-t border-line sm:border-t-0" : ""}`}
            >
              <p className="font-display text-[44px] font-semibold leading-none tracking-[-0.03em]">
                {fact.figure}
              </p>
              <p className="mt-3 max-w-[22ch] text-[13px] leading-snug text-muted">{fact.label}</p>
            </div>
          ))}
        </section>

        {/* Principles — the seam, once */}
        <section id="principles" className="mb-28 sm:mb-36">
          <SectionHead index={1} label="Principles" />
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <h2 className="col-span-12 font-display text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] lg:col-span-4">
              Two halves, one seam.
            </h2>
            <div className="col-span-12 flex flex-col gap-[var(--seam-gap)] sm:flex-row lg:col-span-8">
              <article className="flex-1 border border-line bg-surface p-8 sm:mt-14">
                <p className="eyebrow mb-6">You</p>
                <h3 className="mb-3 font-display text-[20px] font-semibold tracking-[-0.02em]">Your work</h3>
                <p className="text-[15px] leading-[1.7] text-muted">
                  Everything stays yours: your context, your files, your
                  decisions. The interface is calm because the work is serious.
                </p>
              </article>
              <article className="flex-1 bg-fg p-8 text-bg">
                <p className="eyebrow mb-6 !text-accent">AI</p>
                <h3 className="mb-3 font-display text-[20px] font-semibold tracking-[-0.02em]">Your AI side</h3>
                <p className="text-[15px] leading-[1.7] opacity-80">
                  Agents and automation standing next to it — raised, ready,
                  one seam away. Built as a family of products that stay on
                  your side.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Product index — magazine table of contents */}
        <section id="products" className="mb-28 sm:mb-36" aria-labelledby="products-heading">
          <SectionHead index={2} label="Product index" />
          <h2 id="products-heading" className="sr-only">Products</h2>
          <ol className="m-0 list-none p-0">
            {projects.map((project, i) => (
              <li key={project.id} className="border-b border-line py-10 first:pt-0 sm:py-14">
                <article className="grid grid-cols-12 gap-x-6 gap-y-5">
                  <p className="col-span-2 font-mono text-[13px] text-muted sm:col-span-1">{pad(i + 1)}</p>
                  <div className="col-span-10 sm:col-span-11 lg:col-span-4">
                    <h3 className="font-display text-[clamp(30px,4vw,44px)] font-semibold leading-[1.05] tracking-[-0.03em]">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-fg">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
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
                        <span className="font-mono text-[12px] text-muted">{project.domain}</span>
                      )}
                      {project.tags?.map((tag) => (
                        <span key={tag} className="eyebrow !text-[10px]">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="col-span-12 text-[15px] leading-[1.75] text-muted sm:col-span-11 sm:col-start-2 lg:col-span-7 lg:col-start-6 lg:columns-2 lg:gap-8">
                    {project.description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        {/* Pull quote */}
        <section className="mb-28 grid grid-cols-12 gap-x-6 sm:mb-36">
          <blockquote className="col-span-12 m-0 border-l-2 border-accent pl-6 lg:col-span-9 lg:col-start-2 lg:pl-10">
            <p className="font-display text-[clamp(26px,3.6vw,44px)] font-semibold leading-[1.15] tracking-[-0.025em]">
              The interface is calm because the work is serious.
            </p>
            <footer className="eyebrow mt-6">Our design rule</footer>
          </blockquote>
        </section>
      </main>

      <footer id="colophon" className="border-t border-fg">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-12 gap-x-6 gap-y-8 px-6 py-14 sm:px-10">
          <p className="col-span-12 font-display text-[clamp(36px,5.5vw,64px)] font-bold leading-[1.02] tracking-[var(--track-display)] lg:col-span-8">
            Put AI on your side<span className="tagline-period">.</span>
          </p>
          <div className="col-span-12 flex flex-col justify-end gap-2 text-[13px] text-muted lg:col-span-4 lg:items-end">
            <p>© {new Date().getFullYear()} Your AI Side</p>
            <p>
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
          </div>
        </div>
      </footer>
    </>
  );
}
