import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & { width?: keyof typeof widths };

/** Page gutter and max width. 16px gutter on phones. */
export function Container({ width = "default", className, ...rest }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widths[width], className)} {...rest} />;
}

type SectionProps = HTMLAttributes<HTMLElement> & { tone?: "ground" | "raised"; bordered?: boolean };

/** Vertical rhythm for a page section; `raised` alternates the band colour. */
export function Section({ tone = "ground", bordered, className, ...rest }: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 sm:py-28",
        tone === "raised" && "bg-raised",
        bordered && "border-y border-line",
        className,
      )}
      {...rest}
    />
  );
}
