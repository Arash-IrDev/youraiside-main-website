import { projects, type Project } from "@/data/projects";

function StatusLabel({ status }: { status: Project["status"] }) {
  if (status === "coming-soon") {
    return (
      <span className="rounded-[var(--radius-sm)] border border-line px-2 py-0.5 font-mono text-[10px] tracking-[var(--track-label)] text-muted uppercase">
        Coming soon
      </span>
    );
  }

  return (
    <span className="rounded-[var(--radius-sm)] border border-line px-2 py-0.5 font-mono text-[10px] tracking-[var(--track-label)] text-muted uppercase">
      Live
    </span>
  );
}

function DomainLine({ project }: { project: Project }) {
  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[12px] tracking-wide text-accent no-underline transition-opacity hover:opacity-80"
      >
        {project.domain}
      </a>
    );
  }

  return (
    <span className="font-mono text-[12px] tracking-wide text-muted">
      {project.domain}
      <span className="mx-2 text-line" aria-hidden>
        ·
      </span>
      <span>Launching soon</span>
    </span>
  );
}

export function ProjectsGallery() {
  return (
    <section
      id="projects"
      className="reveal-projects mx-auto max-w-[1080px] px-6 pb-24 sm:px-10 sm:pb-[100px]"
      aria-labelledby="projects-heading"
    >
      <div className="mb-10 max-w-[42ch] sm:mb-12">
        <p className="eyebrow mb-3">Product gallery</p>
        <h2
          id="projects-heading"
          className="font-display text-[clamp(26px,4vw,36px)] font-semibold tracking-[-0.02em] leading-[1.15]"
        >
          Built on your side
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          A growing family of AI-first products — games, clinical tools,
          media automation, and everyday workspaces.
        </p>
      </div>

      <ul className="m-0 list-none border-t border-line p-0">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border-b border-line py-8 sm:py-9"
          >
            <article className="grid gap-4 sm:grid-cols-[minmax(0,240px)_minmax(0,1fr)] sm:gap-10">
              <header className="min-w-0">
                <div className="mb-2.5 flex flex-wrap items-center gap-2.5">
                  <h3 className="font-display text-[20px] font-semibold tracking-[-0.02em]">
                    {project.name}
                  </h3>
                  <StatusLabel status={project.status} />
                </div>
                <DomainLine project={project} />
                <p className="mt-3 text-[14px] leading-relaxed text-muted sm:mt-4">
                  {project.summary}
                </p>
              </header>
              <p className="m-0 text-[15px] leading-[1.7] text-muted">
                {project.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
