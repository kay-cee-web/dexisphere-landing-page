import { Receipt } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Eyebrow } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { Pill } from "@/components/ui/Pill";
import { FAN_OUT } from "@/data/features/visuals";

/** A task at the top, branching into tool calls per area, ending on a receipt. */
export function ToolFanOut() {
  const callCount = FAN_OUT.branches.reduce((sum, branch) => sum + branch.tools.length, 0);

  return (
    <div className="rounded-[20px] border border-line bg-surface p-4 shadow-lift sm:p-6">
      <div className="grid gap-2 rounded-[14px] border border-line bg-raised px-4 py-3">
        <Eyebrow>Task</Eyebrow>
        <p className="text-[14px] leading-relaxed text-ink">{FAN_OUT.task}</p>
      </div>

      <p className="mt-4 pl-7 font-mono text-[11px] text-faint">
        {FAN_OUT.branches.length} areas · {callCount} tool calls
      </p>

      <Stagger as="ol" className="relative mt-2 grid gap-2.5 pl-7">
        <span aria-hidden className="absolute -top-10 bottom-7 left-3 w-px bg-line" />
        {FAN_OUT.branches.map((branch) => (
          <StaggerItem
            as="li"
            key={branch.area}
            className="relative flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[12px] border border-line bg-surface px-3 py-2.5"
          >
            <span aria-hidden className="absolute -left-4 top-1/2 h-px w-4 bg-line" />
            <IconTile Icon={branch.Icon} size="sm" />
            <div className="grid min-w-0 flex-1 gap-1.5">
              <p className="text-[13.5px] font-medium text-ink">{branch.area}</p>
              <div className="flex flex-wrap gap-1.5">
                {branch.tools.map((tool) => (
                  <code key={tool} className="rounded-[6px] bg-raised px-1.5 py-0.5 font-mono text-[11px] text-muted">
                    {tool}
                  </code>
                ))}
              </div>
            </div>
            <Pill tone={branch.status.tone} dot>
              {branch.status.label}
            </Pill>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-4 flex flex-wrap items-center gap-2 rounded-[12px] border border-dashed border-line px-3 py-2.5">
        <Receipt aria-hidden className="size-4 text-accent" />
        <Eyebrow>Receipt</Eyebrow>
        <span className="font-mono text-[11.5px] text-ink">{FAN_OUT.receipt.join(" · ")}</span>
      </div>
    </div>
  );
}
