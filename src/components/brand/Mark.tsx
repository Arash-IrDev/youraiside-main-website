import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement> & {
  /** Outlined mark for ≥ 30px; solid for smaller / nav. */
  variant?: "outlined" | "solid";
};

export function Mark({
  variant = "outlined",
  className,
  ...props
}: MarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {variant === "outlined" ? (
        <path
          d="M46 36 A22 22 0 0 0 46 80 Z"
          fill="none"
          stroke="var(--fg)"
          strokeWidth={5}
        />
      ) : (
        <path d="M46 36 A22 22 0 0 0 46 80 Z" fill="var(--fg)" />
      )}
      <path d="M54 20 A22 22 0 0 1 54 64 Z" fill="var(--accent)" />
    </svg>
  );
}
