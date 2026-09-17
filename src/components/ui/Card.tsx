import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Floating surfaces (demos, popovers) get the shadow; panels don't. */
  floating?: boolean;
  padded?: boolean;
  /** Lift the border toward the accent on hover (for linked cards). */
  interactive?: boolean;
};

export function Card({ floating, padded = true, interactive, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-line bg-surface",
        floating && "shadow-float",
        padded && "p-6",
        interactive && "transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-float",
        className,
      )}
      {...rest}
    />
  );
}

/** Small uppercase mono label used above sections and inside cards. */
export function Eyebrow({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-muted", className)}
      {...rest}
    />
  );
}
