"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./home.module.css";
import { useInView, useMotion } from "./motion";

/** Runs `tick` on an interval while the demo is on screen and motion is on. */
function useLoop(active: boolean, ms: number, tick: () => void) {
  const saved = useRef(tick);
  useEffect(() => {
    saved.current = tick;
  });
  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => saved.current(), ms);
    return () => window.clearInterval(id);
  }, [active, ms]);
}

/* ── ReelFlow: the pipeline, one step lit at a time (CSS only) ── */

const PIPELINE = ["Idea", "Story", "Audio", "Edit", "Publish"];

export function PipelineSteps() {
  return (
    <ol className="m-0 flex w-full list-none flex-wrap items-center gap-2 p-0">
      {PIPELINE.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span
            className={`rounded-[var(--radius-sm)] border border-line bg-bg px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-fg uppercase ${styles.step}`}
            style={{ "--i": i } as CSSProperties}
          >
            {step}
          </span>
          {i < PIPELINE.length - 1 && (
            <span aria-hidden className="font-mono text-[12px] text-muted">→</span>
          )}
        </li>
      ))}
    </ol>
  );
}

/* ── TwinTask Pro: one sentence, six languages ── */

const LANGUAGES = [
  { code: "EN", lang: "en", dir: "ltr", text: "The report is ready." },
  { code: "DE", lang: "de", dir: "ltr", text: "Der Bericht ist fertig." },
  { code: "TR", lang: "tr", dir: "ltr", text: "Rapor hazır." },
  { code: "HI", lang: "hi", dir: "ltr", text: "रिपोर्ट तैयार है।" },
  { code: "AR", lang: "ar", dir: "rtl", text: "التقرير جاهز." },
  { code: "FA", lang: "fa", dir: "rtl", text: "گزارش آماده است." },
] as const;

export function LanguageCycle() {
  const { enabled } = useMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [index, setIndex] = useState(0);

  useLoop(enabled && inView, 2200, () =>
    setIndex((i) => (i + 1) % LANGUAGES.length),
  );

  const current = LANGUAGES[index];

  return (
    <div ref={ref} className="w-full">
      <div className="flex min-h-[64px] items-center rounded-[var(--radius-sm)] border border-line bg-bg px-4">
        <p
          key={current.code}
          lang={current.lang}
          dir={current.dir}
          className={`w-full text-[17px] leading-snug text-fg ${styles.swap}`}
        >
          {current.text}
        </p>
      </div>
      <ul className="m-0 mt-[var(--seam-gap)] grid list-none grid-cols-6 gap-1 p-0">
        {LANGUAGES.map((language, i) => (
          <li key={language.code}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              aria-label={`Show the sentence in ${language.code}`}
              className={`w-full rounded-[6px] border py-1.5 text-center font-mono text-[11px] transition-colors ${
                i === index
                  ? "border-fg bg-fg text-bg"
                  : "border-line bg-bg text-muted hover:text-fg"
              }`}
            >
              {language.code}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Bidi Markdown: each line types in its own direction ── */

const NOTE_LINES = [
  { dir: "rtl", text: "این پاراگراف فارسی است و از راست به چپ نمایش داده می‌شود." },
  { dir: "ltr", text: "This line stays left-to-right." },
] as const;

const NOTE_CHARS = NOTE_LINES.map((line) => Array.from(line.text));
const NOTE_STARTS = NOTE_CHARS.map((_, i) =>
  NOTE_CHARS.slice(0, i).reduce((sum, chars) => sum + chars.length, 0),
);
const NOTE_TOTAL = NOTE_CHARS.reduce((sum, chars) => sum + chars.length, 0);
const NOTE_HOLD_TICKS = 70;

export function BidiTyping() {
  const { enabled } = useMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [typed, setTyped] = useState(NOTE_TOTAL);

  useLoop(enabled && inView, 45, () =>
    setTyped((n) => (n >= NOTE_TOTAL + NOTE_HOLD_TICKS ? 0 : n + 1)),
  );

  const count = enabled ? Math.min(typed, NOTE_TOTAL) : NOTE_TOTAL;

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden rounded-[var(--radius-md)] border border-line bg-bg"
    >
      <p className="border-b border-line px-4 py-2 font-mono text-[11px] text-muted">
        notes.md
      </p>
      <div className="space-y-2 px-4 py-4 text-[15px] leading-relaxed">
        <p dir="ltr"># Release notes</p>
        {NOTE_LINES.map((line, i) => {
          const chars = NOTE_CHARS[i];
          const visible = Math.max(
            0,
            Math.min(chars.length, count - NOTE_STARTS[i]),
          );
          return (
            <p
              key={line.dir}
              dir={line.dir}
              lang={line.dir === "rtl" ? "fa" : "en"}
              className={line.dir === "rtl" ? undefined : "text-muted"}
            >
              {chars.slice(0, visible).join("")}
              {/* Untyped text keeps its space so the tile never jumps. */}
              <span className="opacity-0">{chars.slice(visible).join("")}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

/* ── Random Army: sample matchups, odds settling ── */

const MATCHUPS = [62, 47, 71, 55];

export function OddsBars() {
  const { enabled } = useMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [index, setIndex] = useState(0);

  useLoop(enabled && inView, 2600, () =>
    setIndex((i) => (i + 1) % MATCHUPS.length),
  );

  const a = MATCHUPS[index];
  const rows = [
    { name: "Army A", value: a, fill: "bg-fg" },
    { name: "Army B", value: 100 - a, fill: "bg-stone" },
  ];

  return (
    <div ref={ref} className="w-full">
      <p className="eyebrow mb-3 !text-[10px]">Win odds · sample matchup</p>
      <div className="space-y-2.5">
        {rows.map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-[64px_1fr_40px] items-center gap-3 font-mono text-[12px]"
          >
            <span className="text-muted">{row.name}</span>
            <span className="h-2 overflow-hidden rounded-full bg-bg">
              <span
                className={`block h-full rounded-full ${row.fill} ${styles.bar}`}
                style={{ width: `${row.value}%` }}
              />
            </span>
            <span className="text-right text-fg tabular-nums">{row.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
