import { cn } from "@/lib/cn";

/** A display-only switch for product visuals. Not interactive. */
export function SwitchVisual({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors",
        on ? "bg-accent" : "bg-line",
      )}
    >
      <span
        className={cn(
          "absolute size-4 rounded-full bg-surface shadow-float transition-transform",
          on ? "translate-x-[18px]" : "translate-x-0.5",
        )}
      />
    </span>
  );
}
