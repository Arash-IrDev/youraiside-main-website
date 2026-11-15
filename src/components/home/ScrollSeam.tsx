"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./home.module.css";
import { useMotion } from "./motion";

/**
 * The brand seam, tied to scroll: the two blocks start apart and level,
 * then close to the 8px seam while the AI block rises by the seam offset.
 * Progress is written to `--p` (0 → 1); without JS or motion it stays 1.
 */
export function ScrollSeam({ you, ai }: { you: ReactNode; ai: ReactNode }) {
  const { enabled } = useMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!enabled) {
      element.style.setProperty("--p", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top } = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      // Starts as the block enters the lower part of the screen,
      // finishes when it reaches the middle.
      const progress = (viewport * 0.92 - top) / (viewport * 0.45);
      const eased = 1 - (1 - Math.min(1, Math.max(0, progress))) ** 2;
      element.style.setProperty("--p", eased.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled]);

  return (
    <div ref={ref} className={styles.seam}>
      <div className={`flex-1 ${styles.seamYou}`}>{you}</div>
      <div className={`flex-1 ${styles.seamAi}`}>{ai}</div>
    </div>
  );
}
