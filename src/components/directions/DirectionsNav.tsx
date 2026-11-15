"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/directions", label: "Overview" },
  { href: "/directions/editorial", label: "A · Editorial" },
  { href: "/directions/blueprint", label: "B · Blueprint" },
  { href: "/directions/bento", label: "C · Bento" },
  { href: "/directions/hybrid", label: "D · Hybrid + motion" },
  { href: "/", label: "Current site" },
];

/** Review-only strip for switching between homepage design directions. */
export function DirectionsNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Design directions"
      className="flex items-center gap-1 overflow-x-auto border-b border-line bg-surface px-4 py-2 sm:px-8"
    >
      <span className="eyebrow mr-3 shrink-0">Preview</span>
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`shrink-0 rounded-full px-3 py-1 font-mono text-[11px] tracking-[0.08em] uppercase no-underline transition-colors ${
              active
                ? "bg-fg text-bg"
                : "text-muted hover:text-fg"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
