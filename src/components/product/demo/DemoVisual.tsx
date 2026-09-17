import type { DemoVisual as DemoVisualData } from "@/data/products/types";

/** The extra a run can end on: a landing page preview or a small bar chart. */
export function DemoVisual({ visual }: { visual: DemoVisualData }) {
  return visual.kind === "funnel" ? <FunnelPreview {...visual} /> : <BarChart {...visual} />;
}

function FunnelPreview({ title, url }: { title: string; url: string }) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line bg-raised px-3 py-1.5">
        <span aria-hidden className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="size-1.5 rounded-full bg-line" />
          ))}
        </span>
        <span className="truncate rounded-full bg-surface px-2 py-0.5 font-mono text-[10.5px] text-faint">{url}</span>
      </div>
      <div className="grid gap-2.5 px-4 py-4">
        <p className="font-display text-[15px] font-semibold leading-tight text-ink">{title}</p>
        <span aria-hidden className="h-1.5 w-4/5 rounded-full bg-line" />
        <span aria-hidden className="h-1.5 w-3/5 rounded-full bg-line" />
        <span aria-hidden className="mt-1 h-6 w-24 rounded-[7px] bg-accent" />
        <div aria-hidden className="mt-1 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((cell) => (
            <span key={cell} className="h-8 rounded-[7px] border border-line bg-raised" />
          ))}
        </div>
      </div>
    </div>
  );
}

function BarChart({ title, bars }: { title: string; bars: { label: string; value: number }[] }) {
  const max = Math.max(...bars.map((bar) => bar.value), 1);
  return (
    <figure className="rounded-[12px] border border-line bg-surface px-3 pb-2.5 pt-3">
      <figcaption className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-muted">{title}</figcaption>
      <div className="mt-3 flex h-20 items-end gap-2">
        {bars.map((bar) => (
          <div key={bar.label} className="flex h-full flex-1 flex-col justify-end gap-1">
            <span className="text-center font-mono text-[10px] text-faint tabular-nums">{bar.value}%</span>
            <span
              className="w-full rounded-t-[5px] bg-accent/80"
              style={{ height: `${Math.max((bar.value / max) * 70, 6)}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex gap-2 border-t border-line pt-1.5">
        {bars.map((bar) => (
          <span key={bar.label} className="flex-1 truncate text-center font-mono text-[10px] text-muted">
            {bar.label}
          </span>
        ))}
      </div>
    </figure>
  );
}
