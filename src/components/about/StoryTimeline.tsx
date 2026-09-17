import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MILESTONES } from "@/data/about/story";

/** "Our story": a vertical rail on phones, a single row with a shared line on desktop. */
export function StoryTimeline() {
  return (
    <Section tone="raised" id="story">
      <Container width="wide" className="grid gap-14">
        <SectionHeading
          eyebrow="Our story"
          title="From clicking to delegating"
          lede="Dexisphere grew out of a simple observation: the work that fills a salesperson's day is mostly the same few clicks, over and over."
        />
        <Stagger as="ol" className="relative grid gap-8 border-l border-line pl-6 lg:grid-cols-5 lg:gap-6 lg:border-l-0 lg:pl-0">
          <span aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-line lg:block" />
          {MILESTONES.map((milestone) => (
            <StaggerItem as="li" key={milestone.year} className="relative grid content-start gap-3">
              <span
                aria-hidden
                className="absolute -left-[29px] top-[3px] size-[9px] rounded-full border-2 border-accent bg-surface lg:static lg:size-[15px] lg:border-[3px]"
              />
              <p className="font-mono text-[13px] font-medium text-accent">{milestone.year}</p>
              <h3 className="text-[18px] font-semibold text-ink">{milestone.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-muted">{milestone.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
