import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM } from "@/data/about/team";
import { initialsOf } from "@/lib/text";

/** Leadership profiles with initials avatars (no photos). */
export function TeamGrid() {
  return (
    <Section tone="raised" id="team">
      <Container width="wide" className="grid gap-14">
        <SectionHeading
          eyebrow="Leadership"
          title="A small team that uses its own agents"
          lede="We sell to small teams because we are one. Everyone here hands their own busywork to Dexisphere."
        />
        <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <StaggerItem
              as="li"
              key={member.name}
              className="grid content-start gap-5 rounded-[18px] border border-line bg-surface p-6"
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="grid size-14 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-[15px] font-medium text-accent ring-4 ring-accent/10"
                >
                  {initialsOf(member.name)}
                </span>
                <div className="grid gap-0.5">
                  <h3 className="text-[17px] font-semibold text-ink">{member.name}</h3>
                  <p className="text-[13.5px] text-muted">{member.role}</p>
                </div>
              </div>
              <p className="text-[14.5px] leading-relaxed text-muted">{member.bio}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
