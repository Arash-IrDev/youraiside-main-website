import Link from "next/link";
import { Mark } from "./Mark";
import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b border-line px-6 py-5 sm:px-10">
      <Link
        href="/"
        className="flex items-center gap-0 text-fg no-underline"
        aria-label="Your AI Side home"
      >
        <Mark variant="outlined" className="size-10" />
        {/* Optical nudge: mark SVG has empty right padding inside the viewBox */}
        <Wordmark className="-ml-1 text-[19px] leading-none" />
      </Link>
      <ThemeToggle />
    </header>
  );
}
