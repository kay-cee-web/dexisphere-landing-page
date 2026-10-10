import { ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Eyebrow } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { IconSwap } from "@/components/ui/IconSwap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
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
          eyebrow="You stay in control"
          icon={ShieldCheck}
          title="It does the work. You keep the keys."
          highlight="You keep the keys."
          lede="Every connection authorised by you, every send waiting for your yes if you want it, and a receipt for everything it did."
        />
        <Stagger className="grid gap-5 lg:grid-cols-6">
          {PLATFORM_CARDS.map((card) => (
            <StaggerItem
              key={card.id}
              as="article"
              className={cn(
                "group group/spot relative grid content-start gap-6 overflow-hidden rounded-[20px] border border-line bg-raised p-6 shadow-surface transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-surface-lg sm:p-7",
                SPANS[card.id],
              )}
            >
              <Spotlight />
              <div className="grid content-start gap-3">
                <div className="flex items-center justify-between gap-3">
                  <Eyebrow className="text-accent">{card.eyebrow}</Eyebrow>
                  <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-[12px] bg-brand text-white shadow-glow">
                    <IconSwap Icon={card.Icon} className="size-[18px]" />
                  </span>
                </div>
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
