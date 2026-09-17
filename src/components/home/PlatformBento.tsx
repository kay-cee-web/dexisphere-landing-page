import type { ReactNode } from "react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Eyebrow } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PLATFORM_CARDS, type BentoId } from "@/data/home/platform";
import { cn } from "@/lib/cn";
import { ApprovalsVisual, ChannelsVisual, ModelsVisual, ReceiptsVisual, ToolsVisual } from "./BentoVisuals";

const VISUALS: Record<BentoId, ReactNode> = {
  tools: <ToolsVisual />,
  receipts: <ReceiptsVisual />,
  approvals: <ApprovalsVisual />,
  channels: <ChannelsVisual />,
  models: <ModelsVisual />,
};

/** Row one: tools (wide) + receipts. Row two: approvals, channels, models. */
const SPANS: Record<BentoId, string> = {
  tools: "lg:col-span-4 lg:grid-cols-[1fr_1.1fr] lg:items-center",
  receipts: "lg:col-span-2",
  approvals: "lg:col-span-2",
  channels: "lg:col-span-2",
  models: "lg:col-span-2",
};

export function PlatformBento() {
  return (
    <Section id="platform">
      <Container width="wide" className="grid gap-14">
        <SectionHeading
          eyebrow="Platform"
          title="Everything an agent needs to do the job"
          lede="Real tools to act with, receipts to prove it, and controls that keep you in charge of every message that leaves."
        />
        <Stagger className="grid gap-5 lg:grid-cols-6">
          {PLATFORM_CARDS.map((card) => (
            <StaggerItem
              key={card.id}
              as="article"
              className={cn(
                "group relative grid content-start gap-6 overflow-hidden rounded-[20px] border border-line bg-raised p-6 transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-float sm:p-7",
                SPANS[card.id],
              )}
            >
              <div className="grid content-start gap-3">
                <Eyebrow className="text-accent">{card.eyebrow}</Eyebrow>
                <h3 className="text-[21px] font-semibold leading-tight text-ink">{card.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-muted">{card.description}</p>
              </div>
              <div>{VISUALS[card.id]}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
