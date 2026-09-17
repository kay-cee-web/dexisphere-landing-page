import { Globe, MapPin } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container, Section } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OFFICES, REMOTE_NOTE } from "@/data/about/story";

/** Where the team works: three offices plus the remote-first card. */
export function OfficesSection() {
  return (
    <Section id="offices">
      <Container width="wide" className="grid gap-14">
        <SectionHeading
          eyebrow="Where we work"
          title="Close to the teams we build for"
          lede="Three small hubs and a lot of home offices, so someone is around whenever you need a hand."
        />
        <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OFFICES.map((office) => (
            <StaggerItem
              as="li"
              key={office.city}
              className="grid content-start gap-4 rounded-[18px] border border-line bg-surface p-6"
            >
              <IconTile Icon={MapPin} size="sm" tone="neutral" />
              <div className="grid gap-1">
                <h3 className="text-[18px] font-semibold text-ink">{office.city}</h3>
                <p className="text-[14px] text-muted">{office.country}</p>
              </div>
              <p className="text-[13.5px] text-muted">{office.note}</p>
              <p className="border-t border-dashed border-line pt-3 font-mono text-[12px] text-faint">{office.timeZone}</p>
            </StaggerItem>
          ))}
          <StaggerItem
            as="li"
            className="relative isolate grid content-start gap-4 overflow-hidden rounded-[18px] border border-accent/30 bg-surface p-6"
          >
            <div aria-hidden className="bg-glow absolute inset-0 -z-10 opacity-70" />
            <IconTile Icon={Globe} size="sm" />
            <h3 className="text-[18px] font-semibold text-ink">{REMOTE_NOTE.title}</h3>
            <p className="text-[14px] leading-relaxed text-muted">{REMOTE_NOTE.description}</p>
          </StaggerItem>
        </Stagger>
      </Container>
    </Section>
  );
}
