import { Fragment } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PLAN_FEATURES, PLANS, type Plan } from "@/data/plans";
import { COMPARISON_GROUPS } from "@/data/pricing";
import { cn } from "@/lib/cn";
import { AllowanceCell } from "./AllowanceCell";

const labelOf = (key: string) => PLAN_FEATURES.find((feature) => feature.key === key)?.label ?? key;

/** Highlight for the popular plan's column, applied to every cell in it. */
const columnTone = (plan: Plan) => (plan.popular ? "bg-accent/[0.06]" : "");

/** First column stays put while the plan columns scroll sideways on phones. */
const stickyCell = "sticky left-0 z-10 bg-surface";

export function ComparisonTable() {
  return (
    <Section tone="raised" id="compare">
      <Container width="wide" className="grid gap-12">
        <SectionHeading
          eyebrow="Compare plans"
          title="Every allowance, side by side"
          lede="Each tier includes everything in the one below it. Every plan is a one-time licence, so there's nothing to renew."
        />
        <Reveal className="overflow-x-auto rounded-[18px] border border-line bg-surface">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <caption className="sr-only">Plan comparison</caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className={cn(stickyCell, "w-[28%] px-5 py-5 align-bottom")}>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-muted">Plan</span>
                </th>
                {PLANS.map((plan) => (
                  <th key={plan.id} scope="col" className={cn("px-4 py-5 text-center align-bottom", columnTone(plan))}>
                    {plan.popular && (
                      <span className="mb-2 block font-mono text-[10.5px] uppercase tracking-[0.1em] text-accent">
                        Most popular
                      </span>
                    )}
                    <span className="block font-display text-[16px] font-semibold text-ink">{plan.name}</span>
                    <span className="mt-1 block font-mono text-[12.5px] text-muted">
                      {plan.price === 0 ? "$0" : `$${plan.price} once`}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_GROUPS.map((group) => (
                <Fragment key={group.title}>
                  <tr className="border-b border-line bg-raised">
                    <th
                      scope="colgroup"
                      colSpan={PLANS.length + 1}
                      className="px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-muted"
                    >
                      <span className="sticky left-5">{group.title}</span>
                    </th>
                  </tr>
                  {group.keys.map((key) => (
                    <tr key={key} className="border-b border-line last:border-b-0">
                      <th scope="row" className={cn(stickyCell, "px-5 py-3.5 text-[14px] font-normal text-ink")}>
                        {labelOf(key)}
                      </th>
                      {PLANS.map((plan) => (
                        <td key={plan.id} className={cn("px-4 py-3.5 text-center", columnTone(plan))}>
                          <AllowanceCell value={plan[key]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-line">
                <td className={cn(stickyCell, "px-5 py-5")} />
                {PLANS.map((plan) => (
                  <td key={plan.id} className={cn("px-3 py-5", columnTone(plan))}>
                    <ButtonLink href={plan.href} variant={plan.popular ? "primary" : "secondary"} size="sm" block>
                      {plan.cta}
                    </ButtonLink>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </Reveal>
      </Container>
    </Section>
  );
}
