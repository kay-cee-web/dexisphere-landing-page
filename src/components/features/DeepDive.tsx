import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { DeepDiveCopy } from "@/data/features/deep-dives";
import { cn } from "@/lib/cn";

type DeepDiveProps = {
  dive: DeepDiveCopy;
  visual: ReactNode;
  /** Put the visual on the left at desktop widths. */
  reverse?: boolean;
  tone?: "ground" | "raised";
};

/** Copy and key points beside a product visual. Stacks (copy first) on phones. */
export function DeepDive({ dive, visual, reverse, tone }: DeepDiveProps) {
  return (
    <Section tone={tone} id={dive.id} bordered={tone === "raised"}>
      <Container width="wide" className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={cn("grid min-w-0 content-start gap-8", reverse && "lg:order-2")}>
          <SectionHeading align="left" eyebrow={dive.eyebrow} title={dive.title} lede={dive.lede} />
          <Reveal delay={0.1}>
            <ul className="grid gap-5">
              {dive.points.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span aria-hidden className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                    <Check className="size-3" strokeWidth={2.5} />
                  </span>
                  <div className="grid gap-1">
                    <p className="text-[15px] font-medium text-ink">{point.title}</p>
                    <p className="text-[14.5px] leading-relaxed text-muted">{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="min-w-0">
          {visual}
        </Reveal>
      </Container>
    </Section>
  );
}
