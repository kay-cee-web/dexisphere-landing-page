import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WORKSPACE_POINTS } from "@/data/integrations-page";
import { ConnectorsPanelDemo } from "./ConnectorsPanelDemo";

/** "Connected once, used by every agent": connections belong to the workspace. */
export function WorkspaceConnections() {
  return (
    <Section tone="raised" bordered id="workspace">
      <Container width="wide" className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid gap-10">
          <SectionHeading
            eyebrow="Workspace connections"
            title="Connected once, used by every agent"
            lede="Connections belong to your workspace, not to a single agent. Set up Gmail or Twilio one time and every agent you create can use it."
            align="left"
          />
          <Stagger as="ul" className="grid gap-5">
            {WORKSPACE_POINTS.map((point) => (
              <StaggerItem as="li" key={point.title} className="flex gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Check aria-hidden className="size-3.5" />
                </span>
                <div className="grid gap-1">
                  <h3 className="text-[16px] font-semibold text-ink">{point.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-muted">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <Reveal delay={0.1}>
          <ConnectorsPanelDemo />
        </Reveal>
      </Container>
    </Section>
  );
}
