import { Pill } from "@/components/ui/Pill";
import { RECORD_BARS, RECORD_KPIS, RECORD_ROWS, RECORD_TABS } from "@/data/home/records";
import { cn } from "@/lib/cn";
import { GrowBars } from "./GrowBars";

const STATUS_TONE = { Sent: "good", Scheduled: "accent", Draft: "neutral" } as const;

/** A mock of the app's Records › Analytics view. */
export function RecordsWindow() {
  return (
    <div className="overflow-hidden rounded-[22px] border border-line bg-surface shadow-lift">
      <div className="flex items-center gap-1 overflow-x-auto border-b border-line px-3 py-2">
        {RECORD_TABS.map((tab) => (
          <span
            key={tab}
            className={cn(
              "shrink-0 rounded-[8px] px-2.5 py-1.5 text-[12.5px]",
              tab === "Analytics" ? "bg-raised font-medium text-ink ring-1 ring-inset ring-line" : "text-muted",
            )}
          >
            {tab}
          </span>
        ))}
        <span className="ml-auto hidden shrink-0 font-mono text-[11px] text-faint sm:inline">Example workspace · 30 days</span>
      </div>

      <div className="grid gap-4 p-4 sm:p-5">
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {RECORD_KPIS.map((kpi) => (
            <div key={kpi.label} className="rounded-[12px] border border-line bg-raised p-3">
              <dt className="text-[12px] text-muted">{kpi.label}</dt>
              <dd className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-[22px] font-semibold tabular-nums text-ink">{kpi.value}</span>
                <span className="font-mono text-[11px] text-good">{kpi.change}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="rounded-[12px] border border-line p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[13px] font-medium text-ink">Messages sent per day</p>
            <span className="font-mono text-[11px] text-faint">last 14 days</span>
          </div>
          <GrowBars values={RECORD_BARS} label="Bar chart of messages sent per day over the last 14 days" />
        </div>

        <div className="overflow-x-auto rounded-[12px] border border-line">
          <table className="w-full min-w-[420px] text-left text-[12.5px]">
            <thead className="bg-raised text-muted">
              <tr>
                <th className="px-3 py-2 font-medium">Campaign</th>
                <th className="px-3 py-2 font-medium">Channel</th>
                <th className="px-3 py-2 font-medium">Status</th>
                <th className="px-3 py-2 text-right font-medium">Recipients</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {RECORD_ROWS.map((row) => (
                <tr key={row.name}>
                  <td className="px-3 py-2.5 text-ink">{row.name}</td>
                  <td className="px-3 py-2.5 text-muted">{row.channel}</td>
                  <td className="px-3 py-2.5">
                    <Pill tone={STATUS_TONE[row.status]}>{row.status}</Pill>
                  </td>
                  <td className="px-3 py-2.5 text-right font-mono text-ink">{row.recipients}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
