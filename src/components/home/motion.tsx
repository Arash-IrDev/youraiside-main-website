"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
  type RefObject,
} from "react";

type MotionState = {
  /** True when the visitor allows motion and has not switched it off. */
  enabled: boolean;
  /** True when the operating system asks for reduced motion. */
  reduced: boolean;
  toggle: () => void;
};

const MotionContext = createContext<MotionState>({
  enabled: true,
  reduced: false,
  toggle: () => {},
});

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduced(onChange: () => void) {
  const query = window.matchMedia(REDUCED_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * Owns the page's motion switch. Everything animated on the page reads
 * `useMotion()`, and CSS animations are stopped under `[data-motion="off"]`.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const [on, setOn] = useState(true);
  const reduced = useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
  const enabled = on && !reduced;

  return (
    <MotionContext value={{ enabled, reduced, toggle: () => setOn((v) => !v) }}>
      <div data-motion={enabled ? "on" : "off"}>{children}</div>
    </MotionContext>
  );
}

export function useMotion() {
  return useContext(MotionContext);
}

export function MotionToggle() {
  const { enabled, reduced, toggle } = useMotion();

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={reduced}
      aria-pressed={enabled}
      title={reduced ? "Your system asks for reduced motion" : undefined}
      className="eyebrow rounded-full border border-line px-3.5 py-1.5 whitespace-nowrap transition-colors hover:border-muted hover:text-fg disabled:opacity-60"
    >
      Motion {enabled ? "on" : "off"}
    </button>
  );
}

/** True while the element is on screen. Loops use it to rest when unseen. */
export function useInView(ref: RefObject<Element | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}
