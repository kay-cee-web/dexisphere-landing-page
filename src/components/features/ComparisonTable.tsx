import { Check, X } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { COMPARISON_COLUMNS, COMPARISON_ROWS, type ComparisonCell } from "@/data/features/comparison";
import { cn } from "@/lib/cn";

const COLUMN_KEYS = ["dexisphere", "manual", "chatbot"] as const;

/** Capabilities down the side, Dexisphere and the alternatives across. Scrolls sideways on phones. */
export function ComparisonTable() {
  return (
    <Reveal className="overflow-x-auto rounded-[18px] border border-line bg-surface">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="px-5 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-muted">
              Capability
            </th>
            {COLUMN_KEYS.map((key) => (
              <th
                key={key}
                scope="col"
                className={cn(
                  "w-[22%] px-5 py-4 text-center text-[14px] font-semibold",
                  key === "dexisphere" ? "bg-accent-soft/60 text-accent" : "text-ink",
                )}
              >
                {COMPARISON_COLUMNS[key]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {COMPARISON_ROWS.map((row) => (
            <tr key={row.capability}>
              <th scope="row" className="px-5 py-3.5 text-[14px] font-normal text-ink">
                {row.capability}
              </th>
              {COLUMN_KEYS.map((key) => (
                <td key={key} className={cn("px-5 py-3.5 text-center", key === "dexisphere" && "bg-accent-soft/30")}>
                  <Cell value={row[key]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

function Cell({ value }: { value: ComparisonCell }) {
  if (typeof value === "string") return <span className="text-[13px] text-muted">{value}</span>;
  return value ? (
    <span className="inline-grid size-6 place-items-center rounded-full bg-good-soft text-good">
      <Check aria-hidden className="size-3.5" strokeWidth={2.5} />
      <span className="sr-only">Yes</span>
    </span>
  ) : (
    <span className="inline-grid size-6 place-items-center rounded-full text-faint">
      <X aria-hidden className="size-3.5" />
      <span className="sr-only">No</span>
    </span>
  );
}
