import { CountUp } from "@/components/motion/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { INTEGRATIONS } from "@/data/integrations";
import type { Stat } from "@/types/marketing";

/** Product facts, not usage claims: each one is true of the app today. */
const FACTS: Stat[] = [
  { value: INTEGRATIONS.length, label: "Connections" },
  { value: 5, label: "Jobs, one agent" },
  { value: 3, label: "Meeting platforms" },
  { value: 0, prefix: "$", label: "To start" },
];

/** Tapotik's counter row under the hero window: four figures between hairlines. */
export function HeroStats() {
  return (
    <Stagger as="dl" className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-y-10 border-y border-line/70 py-10 lg:grid-cols-4 lg:gap-y-0">
      {FACTS.map((fact) => (
        <StaggerItem
          key={fact.label}
          className="flex flex-col items-center gap-2 px-4 text-center even:border-l even:border-line/70 lg:border-l lg:border-line/70 lg:first:border-l-0"
        >
          <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">{fact.label}</dt>
          <dd className="order-first font-display text-[30px] font-semibold tabular-nums text-ink sm:text-[36px]">
            <CountUp value={fact.value} prefix={fact.prefix} />
          </dd>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
