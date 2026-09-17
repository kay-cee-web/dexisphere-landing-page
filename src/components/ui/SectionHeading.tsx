import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "./Card";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  /** Buttons or links under the lede. */
  actions?: ReactNode;
  /** Render the title as h1 (page heroes) instead of h2. */
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  actions,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn("grid gap-4", centered ? "mx-auto max-w-3xl justify-items-center text-center" : "max-w-2xl", className)}>
      {eyebrow && <Eyebrow className="text-accent">{eyebrow}</Eyebrow>}
      <Heading
        className={cn(
          "font-semibold leading-[1.05] text-ink",
          Heading === "h1" ? "text-[40px] sm:text-[56px] lg:text-[64px]" : "text-[32px] sm:text-[44px]",
        )}
      >
        {title}
      </Heading>
      {lede && (
        <p className={cn("text-[16px] leading-relaxed text-muted sm:text-[18px]", centered && "max-w-[60ch]")}>{lede}</p>
      )}
      {actions && <div className={cn("mt-3 flex flex-wrap gap-3", centered && "justify-center")}>{actions}</div>}
    </Reveal>
  );
}
