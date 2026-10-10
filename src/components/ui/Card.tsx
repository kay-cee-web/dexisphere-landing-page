import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Spotlight } from "./Spotlight";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Floating surfaces (demos, popovers) get the shadow; panels don't. */
  floating?: boolean;
  padded?: boolean;
  /** Lift the border toward the accent on hover (for linked cards). */
  interactive?: boolean;
};

export function Card({ floating, padded = true, interactive, className, children, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-line bg-surface",
        floating && "shadow-surface",
        padded && "p-6",
        interactive &&
          "group/spot relative overflow-hidden transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-surface-lg",
        className,
      )}
      {...rest}
    >
      {interactive && <Spotlight />}
      {children}
    </div>
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
