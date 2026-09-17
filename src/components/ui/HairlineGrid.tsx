import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Columns = 2 | 3 | 4;

type HairlineGridProps = {
  /** How many children are rendered, so the last row can be filled. */
  itemCount: number;
  /** Columns at the widest breakpoint (always 1 on phones, 2 on tablets). */
  columns?: Columns;
  className?: string;
  children: ReactNode;
};

const COLUMN_CLASSES: Record<Columns, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * Items separated by 1px lines instead of individual card borders. Filler
 * cells complete the last row so the line colour never shows as a hole.
 */
export function HairlineGrid({ itemCount, columns = 3, className, children }: HairlineGridProps) {
  const fillWide = columns > 2 ? (columns - (itemCount % columns)) % columns : 0;
  const fillTwo = itemCount % 2 === 1;

  return (
    <div className={cn("grid gap-px overflow-hidden rounded-[18px] border border-line bg-line", COLUMN_CLASSES[columns], className)}>
      {children}
      {Array.from({ length: fillWide }, (_, i) => (
        <div key={`fill-wide-${i}`} aria-hidden className="hidden bg-surface lg:block" />
      ))}
      {fillTwo && <div aria-hidden className={cn("hidden bg-surface sm:block", columns > 2 && "lg:hidden")} />}
    </div>
  );
}
