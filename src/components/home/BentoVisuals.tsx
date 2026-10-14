import { ArrowUpRight, Check, KeyRound } from "lucide-react";
import { ReceiptCard } from "@/components/demo/ReceiptCard";
import { Pill } from "@/components/ui/Pill";
import { MARKS, MODEL_ROWS } from "@/data/home/platform";
import { cn } from "@/lib/cn";
import { BentoStage, MarkImage, MarkTile } from "./BentoStage";

export { ToolsVisual } from "./BentoOrbit";
export { ApprovalsVisual, ChannelsVisual } from "./BentoMessages";

/** Two receipts stacked like paper, the front one linked back to the sheet it changed. */
export function ReceiptsVisual() {
  return (
    // Shares row one with the orbit, so it matches its height on desktop.
    <BentoStage className="lg:h-72">
      <div className="absolute inset-x-6 top-7 rotate-[-4deg] opacity-70 transition-transform duration-500 group-hover:rotate-[-6deg]">
        <ReceiptCard
          area="Outreach"
          badge={<Pill tone="good" dot>Done</Pill>}
          stats={[
            { label: "Emails sent", value: "35" },
            { label: "Verified", value: "35" },
          ]}
        />
      </div>
      <div className="absolute inset-x-6 top-16 rotate-[2deg] transition-transform duration-500 group-hover:rotate-0">
        <ReceiptCard
          area="CRM"
          badge={<Pill tone="good" dot>Done</Pill>}
          stats={[
            { label: "Leads", value: "31" },
            { label: "Deals moved", value: "4" },
          ]}
          className="shadow-float"
        />
      </div>
      <span className="glass-strong absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full py-1.5 pl-1.5 pr-3 text-[12px] text-ink shadow-surface">
        <MarkTile mark={MARKS.sheets} className="size-6 rounded-full" imageClassName="size-3.5" />
        Linked to the record
        <ArrowUpRight aria-hidden className="size-3.5 text-faint" />
      </span>
    </BentoStage>
  );
}

/** The three providers as big app icons; the chosen one lit. */
export function ModelsVisual() {
  return (
    <BentoStage className="grid content-center gap-5 px-5">
      <ul className="grid grid-cols-3 gap-3">
        {MODEL_ROWS.map((row, index) => {
          const chosen = index === 0;
          return (
            <li key={row.model} className="grid justify-items-center gap-2 text-center">
              <span
                className={cn(
                  "relative grid size-16 place-items-center rounded-[18px] border bg-surface transition-transform duration-300 group-hover:-translate-y-1",
                  chosen ? "border-accent/50 shadow-glow" : "border-line shadow-surface",
                )}
              >
                <MarkImage mark={row.logo} className="size-8" />
                {chosen && (
                  <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-accent text-accent-ink">
                    <Check aria-hidden className="size-3" strokeWidth={3} />
                  </span>
                )}
              </span>
              <span className="grid">
                <span className="text-[12.5px] font-medium leading-tight text-ink">{row.model}</span>
                <span className="text-[11px] text-faint">{row.note}</span>
              </span>
            </li>
          );
        })}
      </ul>
      <span className="glass-strong mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] text-muted shadow-surface">
        <KeyRound aria-hidden className="size-3.5 text-accent" /> Your own key: no plan tokens used
      </span>
    </BentoStage>
  );
}
