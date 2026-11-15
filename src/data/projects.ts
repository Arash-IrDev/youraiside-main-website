export type ProjectStatus = "live" | "coming-soon";

export type Project = {
  /** Stable id — use when adding routes or analytics later */
  id: string;
  name: string;
  /** Short scan line under the title */
  summary: string;
  /** Full gallery description */
  description: string;
  /** Display hostname, e.g. autiva.org */
  domain: string;
  status: ProjectStatus;
  /**
   * External URL when the product is reachable.
   * Omit or set null for coming-soon entries (domain is shown, not linked).
   */
  href: string | null;
  /** Optional labels for filtering as the gallery grows */
  tags?: string[];
};

/**
 * Product register source of truth.
 * Append new entries here — the homepage renders this array in order, one
 * tile per product, with `description` behind the tile's "About" disclosure.
 * A tile's width and optional demo are set by `id` in `tiles` in
 * `src/app/page.tsx`; products without an entry get a half-width tile.
 */
export const projects: Project[] = [
  {
    id: "random-army",
    name: "Random Army",
    summary:
      "Deterministic 3D web strategy — analyze odds, commit, then watch the battle unfold.",
    description:
      "Random Army is a deterministic, simulation-driven 3D strategy game for the web. Before combat begins, you study army compositions and win probabilities, commit to an outcome, and shape the run through smart picks among proposed armies, costly rearrangements, and score management. An independent seed-based engine reconstructs battles exactly and computes trustworthy win odds, while Three.js renders large-scale fights directly in the browser. It sits at the intersection of game design, simulation, probability analysis, and modern software architecture — where victory is not just raw force, but better prediction and sharper decisions.",
    domain: "army.youraiside.com",
    status: "live",
    href: "https://army.youraiside.com",
    tags: ["games", "simulation", "webgl"],
  },
  {
    id: "autiva",
    name: "Autiva",
    summary:
      "AI clinical decision support for earlier autism screening — without burning the golden window.",
    description:
      "Autiva is an AI-powered clinical decision-support and intelligent screening system built for earlier autism detection — so families do not lose the golden window of child development to long queues and healthcare bureaucracy. The platform analyzes video intelligently, from simple family phone recordings to systematic standardized assessments in controlled settings, and sharply shortens the path to initial screening and diagnosis. In its current phase, Autiva serves as a decision-making assistant and advisor for clinicians, therapists, and families — supporting recognition, empowerment, and reinforcement plans. Future phases will add AI-driven cognitive games that target foundational skills often weaker in autistic children. Privacy is architectural: data is processed in RAM only, never persisted as a standing record.",
    domain: "autiva.org",
    status: "live",
    href: "https://autiva.org",
    tags: ["health", "ai", "privacy"],
  },
  {
    id: "reelflow",
    name: "ReelFlow",
    summary:
      "End-to-end autonomous media factory — long-form video without cloud-render bills.",
    description:
      "ReelFlow is an autonomous media factory and end-to-end automation engine built for the hard problems of long-form video: scale and crushing render costs. By leaning on edge compute instead of heavy cloud processing, it drives the cost of producing each video toward zero. Unlike single-purpose AI tools that only emit short clips, ReelFlow runs the full content cycle — ideation and storytelling through audio and picture edit to final publish — while preserving character visual continuity, fully automated. For agencies and creators, that is a strategic edge: scalable, profitable media businesses at a fraction of the usual cost.",
    domain: "thereelflow.com",
    status: "live",
    href: "https://thereelflow.com",
    tags: ["media", "automation", "edge"],
  },
  {
    id: "twintask-pro",
    name: "TwinTask Pro",
    summary:
      "Shared workspaces where everyone writes in their language — and the team still shares one.",
    description:
      "TwinTask Pro is cloud SaaS for teams that work across languages. Write, invite, and move projects forward in a shared workspace — each person in their own language, while everyone else sees the same content in the team's common language. With six languages supported (English, German, Turkish, Hindi, Arabic, and Persian) and intelligent bidirectional translation, there is no more copy-paste between tools or meaning lost in transit. And because it connects to your AI assistants via MCP, the task layer stays where your team actually works.",
    domain: "tasks.youraiside.com",
    status: "live",
    href: "https://tasks.youraiside.com",
    tags: ["productivity", "i18n", "mcp"],
  },
  {
    id: "bidi-markdown",
    name: "Bidi Markdown",
    summary:
      "Browser Markdown that gets bidirectional text right — private, local, precise.",
    description:
      "Bidi Markdown is a browser-based Markdown editor and reader that understands bidirectional text: every paragraph, heading, or table cell with Persian or Arabic script renders RTL; everything else stays LTR — so mixed documents remain readable without a forced one-direction layout. Everything runs on the client — no mandatory account, no document sent to a server — with multi-tabs, live preview from a URL or local file, GFM and Mermaid diagrams, and fast handoff between devices. Built for teams shipping bilingual technical content who need something light, private, and exact.",
    domain: "markdown.youraiside.com",
    status: "live",
    href: "https://markdown.youraiside.com",
    tags: ["tools", "markdown", "i18n"],
  },
];
