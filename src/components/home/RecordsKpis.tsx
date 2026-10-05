import { TrendingUp } from "lucide-react";
import { CountUp } from "@/components/motion/CountUp";
import { RECORD_KPIS, type RecordKpi } from "@/data/home/records";

const W = 100;
const H = 28;

/** Scales the trend into the sparkline's box: a line plus the area under it. */
function sparkline(trend: number[]) {
  const min = Math.min(...trend);
  const span = Math.max(...trend) - min || 1;
  const points = trend.map((v, i) => `${(i / (trend.length - 1)) * W},${H - 2 - ((v - min) / span) * (H - 4)}`);
  return { line: `M${points.join(" L")}`, area: `M0,${H} L${points.join(" L")} L${W},${H} Z` };
}

function KpiTile({ kpi }: { kpi: RecordKpi }) {
  const { line, area } = sparkline(kpi.trend);
  return (
    <div className="grid gap-2 rounded-[14px] border border-line bg-raised p-3.5">
      <div className="flex items-center justify-between gap-2">
        <span className="grid size-7 place-items-center rounded-[8px] bg-accent-soft text-accent">
          <kpi.Icon aria-hidden className="size-3.5" />
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-good-soft px-2 py-0.5 font-mono text-[10.5px] text-good">
          <TrendingUp aria-hidden className="size-3" />
          {kpi.change}
        </span>
      </div>
      <dt className="text-[12px] text-muted">{kpi.label}</dt>
      <dd className="grid gap-2">
        <CountUp
          value={kpi.value}
          suffix={kpi.suffix}
          decimals={kpi.decimals}
          className="font-display text-[22px] font-semibold leading-none tabular-nums text-ink"
        />
        <svg aria-hidden viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="h-7 w-full text-accent">
          <path d={area} fill="currentColor" opacity={0.12} />
          <path d={line} fill="none" stroke="currentColor" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
        </svg>
      </dd>
    </div>
  );
}

/** Tapotik's "Total visibility" metric tiles, with the app's Records numbers (sample workspace). */
export function RecordsKpis() {
  return (
    <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {RECORD_KPIS.map((kpi) => (
        <KpiTile key={kpi.label} kpi={kpi} />
      ))}
    </dl>
  );
}
