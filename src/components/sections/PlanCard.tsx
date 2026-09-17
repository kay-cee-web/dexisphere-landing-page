import { Check, Plus } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";
import { CARD_FEATURES, formatAllowance, type Plan } from "@/data/plans";
import { cn } from "@/lib/cn";

/**
 * One plan. "Everything in X" is only truthful because PLANS is a strict ladder:
 * every tier includes the one below it.
 */
export function PlanCard({ plan, previous }: { plan: Plan; previous?: Plan }) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[20px] border bg-surface",
        plan.popular ? "border-accent shadow-lift ring-1 ring-accent" : "border-line",
      )}
    >
      <div className="grid gap-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[18px] font-semibold text-ink">{plan.name}</h3>
          {plan.popular && <Pill tone="accent">Most popular</Pill>}
        </div>
        <p className="min-h-[2lh] text-[13.5px] leading-snug text-muted">{plan.tagline}</p>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-[44px] font-semibold leading-none tracking-[-0.03em] text-ink">
            {plan.price === 0 ? "Free" : `$${plan.price}`}
          </span>
          {plan.price > 0 && <span className="text-[14px] text-muted">once</span>}
        </div>
        <p className="text-[12.5px] text-faint">{plan.price > 0 ? "One-time payment · lifetime access" : "No credit card required"}</p>
        <ButtonLink href={plan.href} variant={plan.popular ? "primary" : "secondary"} block>
          {plan.cta}
        </ButtonLink>
      </div>
      <ul className="grid flex-1 content-start gap-3 border-t border-line bg-raised p-6">
        {CARD_FEATURES.map(({ key, phrase }) => (
          <li key={key} className="flex items-start gap-2.5 text-[14px] text-ink">
            <Check aria-hidden className="mt-[3px] size-3.5 shrink-0 text-accent" />
            <span>
              <span className="font-mono text-[13px]">{formatAllowance(plan[key])}</span> {phrase}
            </span>
          </li>
        ))}
        {plan.remove_branding && (
          <li className="flex items-start gap-2.5 text-[14px] text-ink">
            <Check aria-hidden className="mt-[3px] size-3.5 shrink-0 text-accent" />
            Remove branding
          </li>
        )}
        {previous && (
          <li className="flex items-center gap-2.5 text-[14px] text-muted">
            <Plus aria-hidden className="size-3.5 shrink-0" />
            Everything in {previous.name}
          </li>
        )}
      </ul>
    </article>
  );
}
