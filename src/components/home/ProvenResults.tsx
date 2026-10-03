import { ArrowUp } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { CASE_STUDIES, type CaseStudy } from "@/data/home/results";
import { STACK_CARD, STACK_REVEAL_Y, STACK_ROW_LAYOUT, STACK_TONES } from "./stackedCards";

/** AIFusionX's stacked case studies; see stackedCards.ts for how the stack works. */
export function ProvenResults() {
  return (
    <Section id="results">
      <Container width="wide" className="grid gap-14">
        <SectionHeading
          eyebrow="Proven results"
          title="Your business keeps moving while you're not looking"
          lede="Five businesses, five jobs they never got to, and what changed once the agent took them over."
        />
        <div className="flex flex-col gap-6 md:gap-[16vh]">
          {CASE_STUDIES.map((study, i) => (
            <div key={study.title} className={cn("flex md:sticky", STACK_ROW_LAYOUT[i % STACK_ROW_LAYOUT.length])}>
              <CaseCard study={study} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const tone = STACK_TONES[study.tone];
  return (
    <Reveal as="article" y={STACK_REVEAL_Y} className={cn("grid gap-8", STACK_CARD, tone.card)}>
      <header className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
        <span className="font-mono text-[15px] text-ink">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="text-center text-[18px] font-semibold text-ink sm:text-[21px]">{study.title}</h3>
        <span className="hidden text-[14px] font-semibold text-ink sm:block">{study.client}</span>
      </header>

      <ul className="-mt-4 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
            {tag}
          </li>
        ))}
      </ul>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-10">
        <div className={cn("flex flex-col justify-between gap-8 rounded-[20px] p-6 ring-1 ring-inset ring-line", tone.panel)}>
          <ArrowUp aria-hidden strokeWidth={2.25} className="size-12 text-ink" />
          <div className="grid gap-2">
            <p className="flex items-end gap-2 text-ink">
              <span className="font-display text-[44px] leading-none tracking-tight">{study.metric.value}</span>
              <span className="pb-1 text-[17px] leading-tight">{study.metric.label}</span>
            </p>
            <p className="text-[13.5px] leading-snug text-muted">{study.metric.detail}</p>
          </div>
        </div>

        <dl className="grid content-start gap-6">
          {[
            ["Problem", study.problem],
            ["Approach", study.approach],
            ["Outcome", study.outcome],
          ].map(([term, text]) => (
            <div key={term} className="grid gap-1.5 border-l-2 border-ink/20 pl-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{term}</dt>
              <dd className="max-w-[46ch] text-[15px] leading-relaxed text-ink">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}
