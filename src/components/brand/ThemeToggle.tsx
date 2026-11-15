"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
}

// The resolved theme is kept outside React and read with useSyncExternalStore,
// so the browser's value reaches the button without a setState in an effect.
// It is resolved once, on first read in the browser, then changed only by the toggle.
let currentTheme: Theme | null = null;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getTheme(): Theme {
  if (currentTheme === null) {
    const stored = window.localStorage.getItem("yas-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    currentTheme =
      stored === "dark" || stored === "light"
        ? stored
        : prefersDark
          ? "dark"
          : "light";
  }
  return currentTheme;
}

// The server render and the hydration pass always show the light label.
function getServerTheme(): Theme {
  return "light";
}

function setTheme(theme: Theme) {
  currentTheme = theme;
  listeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  useEffect(() => {
    applyTheme(getTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem("yas-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="eyebrow rounded-full border border-line px-3.5 py-1.5 transition-colors hover:border-muted hover:text-fg"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
