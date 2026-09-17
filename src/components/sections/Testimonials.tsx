import { Quote } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/data/testimonials";
import { initialsOf } from "@/lib/text";
import type { Testimonial } from "@/types/marketing";

type TestimonialsProps = {
  items?: Testimonial[];
  title?: string;
  lede?: string;
  tone?: "ground" | "raised";
};

/** Masonry-style quote wall (CSS columns, so cards keep their natural height). */
export function Testimonials({
  items = TESTIMONIALS,
  title = "Loved by teams who hate busywork",
  lede = "Founders, agencies and sales teams hand their agents the work they used to click through by hand.",
  tone,
}: TestimonialsProps) {
  return (
    <Section tone={tone}>
      <Container width="wide" className="grid gap-14">
        <SectionHeading eyebrow="Testimonials" title={title} lede={lede} />
        <Stagger className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item) => (
            <StaggerItem
              as="article"
              key={item.name}
              className="mb-5 grid break-inside-avoid gap-5 rounded-[18px] border border-line bg-surface p-6"
            >
              <Quote aria-hidden className="size-5 text-accent" />
              <p className="text-[15px] leading-relaxed text-ink">{item.quote}</p>
              <footer className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-10 place-items-center rounded-full bg-accent-soft font-mono text-[12px] font-medium text-accent"
                >
                  {initialsOf(item.name)}
                </span>
                <span className="grid">
                  <span className="text-[14px] font-medium text-ink">{item.name}</span>
                  <span className="text-[12.5px] text-muted">
                    {item.role}, {item.company}
                  </span>
                </span>
              </footer>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
