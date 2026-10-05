import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "./Card";

type SectionHeadingProps = {
  eyebrow?: string;
  /** Icon before the eyebrow text, Tapotik-style. */
  icon?: LucideIcon;
  title: ReactNode;
  /** Part of a string title to paint with the brand gradient. Ignored if the title doesn't contain it. */
  highlight?: string;
  lede?: ReactNode;
  align?: "center" | "left";
  /** Buttons or links under the lede. */
  actions?: ReactNode;
  /** Render the title as h1 (page heroes) instead of h2. */
  as?: "h1" | "h2";
  className?: string;
};

/** A hairline that fades in toward the eyebrow text. */
const Rule = ({ flip }: { flip?: boolean }) => (
  <span aria-hidden className={cn("h-px w-8 from-transparent to-accent/50 sm:w-12", flip ? "bg-linear-to-l" : "bg-linear-to-r")} />
);

function withHighlight(title: ReactNode, highlight?: string) {
  if (typeof title !== "string" || !highlight) return title;
  const at = title.indexOf(highlight);
  if (at < 0) return title;
  return (
    <>
      {title.slice(0, at)}
      <span className="text-gradient">{highlight}</span>
      {title.slice(at + highlight.length)}
    </>
  );
}

export function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  highlight,
  lede,
  align = "center",
  actions,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn("grid gap-4", centered ? "mx-auto max-w-3xl justify-items-center text-center" : "max-w-2xl", className)}>
      {eyebrow && (
        <span className="flex items-center gap-3">
          {centered && <Rule />}
          <Eyebrow className="inline-flex items-center gap-2 font-semibold tracking-[0.14em] text-accent">
            {Icon && <Icon aria-hidden className="size-3.5" />}
            {eyebrow}
          </Eyebrow>
          <Rule flip />
        </span>
      )}
      <Heading
        className={cn(
          "font-semibold leading-[1.05] text-ink",
          Heading === "h1" ? "text-[40px] sm:text-[56px] lg:text-[64px]" : "text-[32px] sm:text-[44px]",
        )}
      >
        {withHighlight(title, highlight)}
      </Heading>
      {lede && (
        <p className={cn("text-[16px] leading-relaxed text-muted sm:text-[18px]", centered && "max-w-[60ch]")}>{lede}</p>
      )}
      {actions && <div className={cn("mt-3 flex flex-wrap gap-3", centered && "justify-center")}>{actions}</div>}
    </Reveal>
  );
}
