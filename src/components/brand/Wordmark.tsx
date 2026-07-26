type WordmarkProps = {
  className?: string;
};

/** Retyped wordmark with brand tracking and accent on "ai". */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={`wordmark ${className ?? ""}`.trim()}>
      your<span className="ai">ai</span>side
    </span>
  );
}
