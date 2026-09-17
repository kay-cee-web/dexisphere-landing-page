import { CountUp } from "@/components/motion/CountUp";
import { Container } from "@/components/ui/Container";
import type { Stat } from "@/types/marketing";

/** A row of large animated figures between hairlines. */
export function StatsBand({ stats, caption }: { stats: Stat[]; caption?: string }) {
  return (
    <section className="border-y border-line bg-surface">
      <Container width="wide">
        <dl className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="grid gap-2 px-2 py-10 text-center sm:px-6">
              <dt className="text-[13.5px] text-muted">{stat.label}</dt>
              <dd className="order-first font-display text-[36px] font-semibold leading-none tracking-[-0.03em] text-ink tabular-nums sm:text-[48px]">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </dd>
            </div>
          ))}
        </dl>
        {caption && <p className="border-t border-line py-3 text-center font-mono text-[11px] text-faint">{caption}</p>}
      </Container>
    </section>
  );
}
