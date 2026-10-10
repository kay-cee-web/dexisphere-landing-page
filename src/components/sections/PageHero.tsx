import type { ReactNode } from "react";
import { AuroraBackdrop } from "@/components/ui/AuroraBackdrop";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  align?: "center" | "left";
  /** A demo or visual under the heading. */
  children?: ReactNode;
  className?: string;
};

/** The top of every inner page: grid + glow backdrop and an h1. */
export function PageHero({ eyebrow, title, lede, actions, align = "center", children, className }: PageHeroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24", className)}>
      <AuroraBackdrop soft />
      <Container width="wide" className="grid gap-14">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} lede={lede} actions={actions} align={align} />
        {children}
      </Container>
    </section>
  );
}
