import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INTEGRATIONS, type Integration } from "@/data/integrations";
import { ROUTES } from "@/data/navigation";

const half = Math.ceil(INTEGRATIONS.length / 2);
const ROWS = [INTEGRATIONS.slice(0, half), INTEGRATIONS.slice(half)];

function Chip({ item }: { item: Integration }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 rounded-[12px] border border-line bg-surface px-4 py-3">
      <item.Icon aria-hidden className="size-[18px] text-accent" strokeWidth={1.75} />
      <span className="whitespace-nowrap text-[14px] font-medium text-ink">{item.name}</span>
    </li>
  );
}

/** Two rows of connectors drifting in opposite directions; pauses on hover. */
export function IntegrationsMarquee() {
  return (
    <Section>
      <Container width="wide" className="grid gap-12">
        <SectionHeading
          eyebrow="Integrations"
          title="Works with the accounts you already use"
          lede="Send from your own mailbox and number, find prospects on Google, sync lists to your email platform, and talk to agents on WhatsApp or Telegram."
          actions={
            <ButtonLink href={ROUTES.integrations} variant="secondary">
              See all integrations <ArrowRight />
            </ButtonLink>
          }
        />
      </Container>
      <p className="sr-only">Integrations: {INTEGRATIONS.map((item) => item.name).join(", ")}.</p>
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
    </Section>
  );
}
