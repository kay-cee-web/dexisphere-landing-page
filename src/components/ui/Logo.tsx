import { cn } from "@/lib/cn";

/** Ink tile holding a lagoon sphere with an orbiting dot: agents working the platform. */
export function Logo({ withWordmark = true, className }: { withWordmark?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span aria-hidden className="relative grid size-7 place-items-center rounded-[8px] bg-ink">
        <span className="size-3 rounded-full bg-accent" />
        <span className="absolute right-[5px] top-[5px] size-1 rounded-full bg-ground" />
      </span>
      {withWordmark && (
        <span className="font-display text-[17px] font-semibold tracking-[-0.02em] text-ink">Dexisphere</span>
      )}
    </span>
  );
}
