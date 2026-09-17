import { CalendarClock, Hand } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { DemoApproval } from "@/components/product/demo/DemoApproval";
import { Eyebrow } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { APPROVAL_GATE, AUTOMATIONS } from "@/data/features/visuals";

/** The agent's automations as a list, and a scheduled send waiting at the approval gate. */
export function ScheduledWorkVisual() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-line bg-surface shadow-lift">
      <header className="flex items-center gap-2 border-b border-line px-4 py-3">
        <CalendarClock aria-hidden className="size-4 text-accent" />
        <p className="text-[14px] font-medium text-ink">Scheduled work</p>
        <Pill tone="good" dot className="ml-auto">
          {AUTOMATIONS.length} active
        </Pill>
      </header>

      <Stagger as="ul" className="divide-y divide-line">
        {AUTOMATIONS.map((automation) => (
          <StaggerItem as="li" key={automation.title} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3">
            <div className="grid min-w-0 flex-1 gap-0.5">
              <p className="font-mono text-[11.5px] text-accent">{automation.schedule}</p>
              <p className="truncate text-[14px] text-ink">{automation.title}</p>
            </div>
            <p className="font-mono text-[11px] text-faint">next · {automation.next}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="grid gap-3 border-t border-dashed border-line bg-raised/60 p-4">
        <div className="flex items-center gap-2">
          <Hand aria-hidden className="size-4 text-warn" />
          <Eyebrow>Approval gate</Eyebrow>
          <span className="ml-auto truncate font-mono text-[11px] text-faint">{APPROVAL_GATE.run}</span>
        </div>
        <div className="grid gap-2 rounded-[12px] border border-line bg-surface px-3 py-2.5">
          <p className="text-[13.5px] text-ink">{APPROVAL_GATE.draft}</p>
          <div className="flex flex-wrap gap-1.5">
            <Pill tone="neutral">{APPROVAL_GATE.recipients} recipients</Pill>
            <Pill tone="warn">{APPROVAL_GATE.held} held back</Pill>
            <Pill tone="good">domain checks pass</Pill>
          </div>
        </div>
        <DemoApproval agent="Your agent" />
      </div>
    </div>
  );
}
