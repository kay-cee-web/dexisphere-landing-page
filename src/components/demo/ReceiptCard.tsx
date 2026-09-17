import { ArrowUpRight, Receipt } from "lucide-react";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { ReceiptStat } from "@/types/demo";

type ReceiptCardProps = {
  area: string;
  stats: ReceiptStat[];
  badge?: ReactNode;
  /** One line per change, shown as record links. */
  lines?: string[];
  className?: string;
};

/** The app's signature element: what an agent did, where, and how much. */
export function ReceiptCard({ area, stats, badge, lines, className }: ReceiptCardProps) {
  return (
    <div className={cn("overflow-hidden rounded-[14px] border border-line bg-surface", className)}>
      <header className="flex items-center gap-2 border-b border-dashed border-line px-3.5 py-2.5">
        <Receipt aria-hidden className="size-3.5 shrink-0 text-faint" />
        <Eyebrow className="truncate">{area}</Eyebrow>
        {badge && <span className="ml-auto shrink-0">{badge}</span>}
      </header>
      <dl className="grid divide-x divide-line" style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}>
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-0 px-3.5 py-3">
            <dt className="truncate font-mono text-[10.5px] uppercase tracking-[0.06em] text-muted">{stat.label}</dt>
            <dd className="mt-1.5 font-display text-[22px] font-semibold leading-none tabular-nums text-ink">{stat.value}</dd>
          </div>
        ))}
      </dl>
      {lines && (
        <ul className="grid gap-0.5 border-t border-dashed border-line p-2">
          {lines.map((line) => (
            <li key={line} className="flex items-center gap-2 rounded-[8px] px-1.5 py-1.5 text-[12.5px] text-muted">
              <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />
              <span className="flex-1 truncate">{line}</span>
              <ArrowUpRight aria-hidden className="size-3.5 shrink-0 text-faint" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
