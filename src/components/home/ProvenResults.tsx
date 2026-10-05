import { Trophy } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollStack } from "@/components/motion/ScrollStack";
import { Container, Section } from "@/components/ui/Container";
import { IconSwap } from "@/components/ui/IconSwap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { CASE_STUDIES, type CaseStudy } from "@/data/home/results";

/** The gradient on each card's icon tiles and corner glow, in the brand's colours. */
const GRADIENTS: Record<CaseStudy["tone"], string> = {
  violet: "from-accent to-violet",
  sky: "from-violet to-sky",
  teal: "from-sky to-teal",
  pink: "from-pink to-violet",
  accent: "from-accent to-teal",
};

/** Tapotik's "four steps" stack, told as case studies; see ScrollStack for the scroll effect. */
export function ProvenResults() {
  return (
    <Section id="results">
      <Container width="wide" className="grid gap-14">
        <SectionHeading
          eyebrow="Proven results"
          icon={Trophy}
          title={
            <>
              Your business keeps moving <span className="text-gradient">while you&apos;re not looking</span>
            </>
          }
          lede="Five businesses, five jobs they never got to, and what changed once the agent took them over."
        />
        <ScrollStack items={CASE_STUDIES.map((study, i) => <CaseCard key={study.title} study={study} index={i} />)} />
      </Container>
    </Section>
  );
}

function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const gradient = GRADIENTS[study.tone];
  return (
    <Reveal
      as="article"
      y={28}
      className="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-[28px] border border-line bg-surface p-6 shadow-lift sm:p-8 lg:min-h-96 lg:flex-row lg:items-center lg:gap-12 lg:p-14"
    >
      <div aria-hidden className={cn("pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-linear-to-br opacity-15 blur-3xl", gradient)} />

      <div className="relative grid max-w-3xl gap-5">
        <div className="flex items-center gap-4">
          <span className={cn("grid size-14 place-items-center rounded-2xl bg-linear-to-br shadow-lg lg:size-16", gradient)}>
            <study.Icon aria-hidden className="size-6 text-white lg:size-7" />
          </span>
          <span className="font-display text-5xl font-semibold text-faint/70 lg:text-7xl">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {study.client} · {study.tags[study.tags.length - 1]}
        </p>
        <h3 className="-mt-2 text-[24px] font-semibold text-ink lg:text-[36px]">{study.title}</h3>
        <p className="text-[16px] leading-relaxed text-muted lg:text-[19px]">{study.problem}</p>
        <dl className="grid gap-5 sm:grid-cols-2">
          {[
            ["Approach", study.approach],
            ["Outcome", study.outcome],
          ].map(([term, text]) => (
            <div key={term} className="grid content-start gap-1.5 border-l-2 border-line pl-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{term}</dt>
              <dd className="text-[14.5px] leading-relaxed text-ink">{text}</dd>
            </div>
          ))}
        </dl>
      </div>

      <MetricTile study={study} gradient={gradient} />
    </Reveal>
  );
}

/** The headline number on the card's gradient tile; hovering the card swaps the icon, Tapotik-style. */
function MetricTile({ study, gradient }: { study: CaseStudy; gradient: string }) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 flex-col justify-between gap-6 overflow-hidden rounded-[24px] bg-linear-to-br p-6 text-white opacity-95 shadow-xl lg:size-60 xl:size-64",
        gradient,
      )}
    >
      <span className="self-end">
        <IconSwap Icon={study.Icon} className="size-14 text-white/90 xl:size-16" />
      </span>
      <div className="grid gap-1.5">
        <p className="flex flex-wrap items-end gap-x-2">
          <span className="font-display text-[44px] leading-none tracking-tight">{study.metric.value}</span>
          <span className="pb-1 text-[15px] leading-tight">{study.metric.label}</span>
        </p>
        <p className="text-[12.5px] leading-snug text-white/80">{study.metric.detail}</p>
      </div>
    </div>
  );
}
