import Link from "next/link";
import { Mark } from "./Mark";
import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b border-line px-6 py-5 sm:px-10">
      <Link
        href="/"
        className="flex items-center gap-2.5 text-fg no-underline"
        aria-label="Your AI Side home"
      >
        <Mark variant="solid" className="size-6" />
        <Wordmark className="text-[19px] leading-none" />
      </Link>
      <ThemeToggle />
    </header>
  );
}
