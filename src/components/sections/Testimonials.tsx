import { Star } from "lucide-react";
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

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex w-[340px] shrink-0 flex-col gap-4 rounded-[18px] border border-line bg-surface p-6">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} aria-hidden className="size-4 fill-warn text-warn" />
        ))}
      </div>
      <p className="flex-1 text-[15px] leading-relaxed text-ink">{item.quote}</p>
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
    </article>
  );
}

/** Scrolling marquee of testimonial cards (matches the Tapotik template). */
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
      </Container>
      <p className="sr-only">{items.map((t) => `${t.name}: "${t.quote}"`).join(". ")}</p>
      <div
        aria-hidden
        className="group mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
      >
        <ul className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, index) => (
            <li key={`${item.name}-${index}`}>
              <TestimonialCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
