import { ArrowRight, Plug } from "lucide-react";
import { IntegrationLogo } from "@/components/integrations/IntegrationLogo";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INTEGRATIONS, type Integration } from "@/data/integrations";
import { ROUTES } from "@/data/navigation";
import { ConnectionsFlow } from "./ConnectionsFlow";

const half = Math.ceil(INTEGRATIONS.length / 2);
const ROWS = [INTEGRATIONS.slice(0, half), INTEGRATIONS.slice(half)];

function Chip({ item }: { item: Integration }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 glass rounded-[12px] px-4 py-3">
      <IntegrationLogo integration={item} className="size-5" />
      <span className="whitespace-nowrap text-[14px] font-medium text-ink">{item.name}</span>
    </li>
  );
}

/**
 * Tapotik's workflow-builder layout: heading left, lede right, the flow
 * diagram under both, then two rows of connectors drifting in opposite
 * directions (pauses on hover).
 */
export function IntegrationsMarquee() {
  return (
    <Section>
      <Container width="wide" className="grid gap-14">
        <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Connections"
            icon={Plug}
            title={
              <>
                One agent. One memory. <span className="text-gradient">Everything you already use.</span>
              </>
            }
          />
          <Reveal delay={0.1} className="grid gap-3 text-[16px] leading-relaxed text-muted sm:text-[17px]">
            <p>It could draft that quote because it had been in the meeting, it knew the deal, and it had your email address.</p>
            <p>
              It can tell you what the ads spent <em>and</em> what came in, because it watches your ad accounts and your payment processors.
            </p>
            <p>In most businesses those are four separate pieces of software, and the only thing joining them together is you.</p>
            <ButtonLink href={ROUTES.integrations} variant="secondary" className="mt-2 w-fit">
              See all connections <ArrowRight />
            </ButtonLink>
          </Reveal>
        </div>
        <Reveal delay={0.1} y={24} className="relative isolate mx-auto w-full max-w-5xl">
          <div aria-hidden className="bg-dots mask-fade-center absolute -inset-x-16 -inset-y-12 -z-10" />
          <ConnectionsFlow />
        </Reveal>
      </Container>
      <p className="sr-only">Connections:{INTEGRATIONS.map((item) => item.name).join(", ")}.</p>
      <div
        aria-hidden
        className="group mt-12 grid gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      >
        {ROWS.map((row, rowIndex) => (
          <ul
            key={rowIndex}
            className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]"
            style={rowIndex === 1 ? { animationDirection: "reverse" } : undefined}
          >
            {[...row, ...row].map((item, index) => (
              <Chip key={`${item.name}-${index}`} item={item} />
            ))}
          </ul>
        ))}
      </div>
      <p className="mt-8 text-center text-[14.5px] text-faint">More added regularly. Ask for one.</p>
    </Section>
  );
}
