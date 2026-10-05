import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Tapotik's hover flourish: when the nearest `group` is hovered, the icon flies
 * out to the top right while a copy slides in from the bottom left. Clip it
 * with `overflow-hidden` on the tile that holds it.
 */
export function IconSwap({ Icon, className }: { Icon: LucideIcon; className?: string }) {
  const base = cn("col-start-1 row-start-1 transition-all duration-500 ease-out motion-reduce:transition-none", className);
  return (
    <span aria-hidden className="grid">
      <Icon className={cn(base, "group-hover:translate-y-[-150%] group-hover:translate-x-[150%] group-hover:opacity-0")} />
      <Icon
        className={cn(
          base,
          "translate-x-[-150%] translate-y-[150%] opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      />
    </span>
  );
}
