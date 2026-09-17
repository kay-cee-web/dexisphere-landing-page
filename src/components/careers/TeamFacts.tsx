import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TEAM_FACTS } from "@/data/careers/company";

/** A row of small team facts under the careers hero. */
export function TeamFacts() {
  return (
    <Stagger
      as="ul"
      className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-4"
    >
      {TEAM_FACTS.map((fact) => (
        <StaggerItem as="li" key={fact.label} className="grid gap-1 bg-surface px-5 py-6 text-center">
          <span className="font-mono text-[28px] font-medium leading-none text-ink">{fact.value}</span>
          <span className="text-[13px] text-muted">{fact.label}</span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
