"use client";

import { useRef, useState, type PointerEvent } from "react";
import styles from "./hybrid.module.css";
import { useMotion } from "./motion";

const gridPaper = {
  backgroundImage:
    "linear-gradient(color-mix(in srgb, var(--line) 55%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--line) 55%, transparent) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
  backgroundPosition: "-1px -1px",
};

/** Construction guides, in the mark's own 100-unit viewBox. */
function Guides() {
  const guide = { stroke: "var(--muted)", strokeWidth: 0.3, fill: "none" };
  const dashed = { ...guide, strokeDasharray: "1 1.4" };
  const label = {
    fill: "var(--muted)",
    fontFamily: "var(--font-mono)",
    fontSize: 3,
    letterSpacing: 0.4,
  };
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={`absolute inset-0 size-full ${styles.guides}`}
    >
      <circle cx={46} cy={58} r={22} {...dashed} />
      <circle cx={54} cy={42} r={22} {...dashed} />
      <line x1={46} y1={8} x2={46} y2={92} {...dashed} />
      <line x1={54} y1={8} x2={54} y2={92} {...dashed} />
      <line x1={12} y1={58} x2={90} y2={58} {...dashed} />
      <line x1={10} y1={42} x2={90} y2={42} {...dashed} />
      <line x1={46} y1={88} x2={54} y2={88} {...guide} />
      <line x1={46} y1={86.5} x2={46} y2={89.5} {...guide} />
      <line x1={54} y1={86.5} x2={54} y2={89.5} {...guide} />
      <text x={50} y={94} textAnchor="middle" {...label}>8</text>
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

/**
 * The outlined mark with the exact geometry from brand/BRAND.md §2.1.
 * Paths are inlined (not <Mark />) so each half can be animated; the
 * resting state is identical to the brand mark.
 */
function DrawnMark() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className="relative size-full">
      <path
        d="M46 36 A22 22 0 0 0 46 80 Z"
        pathLength={1}
        fill="none"
        stroke="var(--fg)"
        strokeWidth={5}
        className={styles.you}
      />
      <path
        d="M54 20 A22 22 0 0 1 54 64 Z"
        fill="var(--accent)"
        className={styles.ai}
      />
    </svg>
  );
}

type Probe = { left: number; top: number; x: number; y: number };

/** Hero figure: the mark draws itself; a mouse reads positions in mark units. */
export function SeamFigure() {
  const { enabled } = useMotion();
  const figureRef = useRef<HTMLElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);
  const [probe, setProbe] = useState<Probe | null>(null);

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    const figure = figureRef.current;
    const square = squareRef.current;
    if (!enabled || event.pointerType !== "mouse" || !figure || !square) return;
    const outer = figure.getBoundingClientRect();
    const inner = square.getBoundingClientRect();
    setProbe({
      left: event.clientX - outer.left,
      top: event.clientY - outer.top,
      x: ((event.clientX - inner.left) / inner.width) * 100,
      y: ((event.clientY - inner.top) / inner.height) * 100,
    });
  }

  const shown = enabled ? probe : null;

  return (
    <figure
      ref={figureRef}
      onPointerMove={onPointerMove}
      onPointerLeave={() => setProbe(null)}
      className="relative m-0 flex aspect-square items-center justify-center overflow-hidden border-t border-line lg:aspect-auto lg:border-t-0"
      style={gridPaper}
    >
      <div ref={squareRef} className="relative size-[min(78%,420px)]">
        <Guides />
        <DrawnMark />
      </div>

      {shown && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span
            className="absolute inset-y-0 w-px bg-muted opacity-50"
            style={{ left: shown.left }}
          />
          <span
            className="absolute inset-x-0 h-px bg-muted opacity-50"
            style={{ top: shown.top }}
          />
          <span
            className="absolute rounded-[4px] border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] tracking-[0.08em] whitespace-nowrap text-fg"
            style={{ left: shown.left + 10, top: shown.top + 10 }}
          >
            X {shown.x.toFixed(1)} · Y {shown.y.toFixed(1)}
          </span>
        </div>
      )}

      <figcaption className="eyebrow absolute bottom-4 left-4 !text-[10px] !tracking-[0.1em] whitespace-nowrap sm:bottom-6 sm:left-6 sm:!text-[11px] sm:!tracking-[var(--track-label)]">
        Two halves · 8-unit seam · 16-unit lift
      </figcaption>
    </figure>
  );
}
