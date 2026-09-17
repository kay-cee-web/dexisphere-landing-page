import { ArrowUpRight, Infinity as InfinityIcon, RefreshCcw, ShieldCheck } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PLANS } from "@/data/plans";
import { REDEEM_URL } from "@/lib/config";
import { PlanCard } from "./PlanCard";

const ASSURANCES = [
  { Icon: InfinityIcon, text: "One-time payment, no renewals" },
  { Icon: RefreshCcw, text: "Future updates included" },
  { Icon: ShieldCheck, text: "Your own sending accounts and keys" },
];

type PricingPlansProps = {
  title?: string;
  lede?: string;
  /** Page heroes pass "h1". */
  as?: "h1" | "h2";
  tone?: "ground" | "raised";
};

/**
 * The four lifetime plans. There is deliberately no monthly/yearly toggle:
 * every plan is a one-time licence, so the pill states that instead.
 */
export function PricingPlans({
  title = "Pay once. Keep your agents working.",
  lede = "Lifetime licences instead of subscriptions. Start free, upgrade when your agents need more room.",
  as = "h2",
  tone,
}: PricingPlansProps) {
  return (
    <Section tone={tone} id="pricing">
      <Container width="wide" className="grid gap-12">
        <SectionHeading eyebrow="Pricing" title={title} lede={lede} as={as} />
        <div className="mx-auto inline-flex rounded-full border border-line bg-surface p-1 text-[13.5px]">
          <span className="rounded-full bg-ink px-4 py-1.5 font-medium text-ground">Lifetime</span>
          <span className="px-4 py-1.5 text-muted">One-time payment</span>
        </div>
        <Stagger className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan, index) => (
            <StaggerItem key={plan.id} className="h-full">
              <PlanCard plan={plan} previous={PLANS[index - 1]} />
            </StaggerItem>
          ))}
        </Stagger>
        <div className="grid justify-items-center gap-4">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {ASSURANCES.map(({ Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-2 text-[13.5px] text-muted">
                <Icon aria-hidden className="size-4 text-accent" />
                {text}
              </li>
            ))}
          </ul>
          <a href={REDEEM_URL} className="inline-flex items-center gap-1 text-[13.5px] font-medium text-accent hover:underline">
            Already bought a licence? Redeem your code <ArrowUpRight aria-hidden className="size-3.5" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
