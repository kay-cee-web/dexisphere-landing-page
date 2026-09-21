import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ROUTES } from "@/data/navigation";
import { APP_LINKS } from "@/lib/config";

const DEFAULT_ASSURANCES = ["Free forever plan", "No credit card required", "Lifetime deals, no renewals"];

type CtaSectionProps = {
  title?: ReactNode;
  lede?: string;
  /** Replaces the default Start free / Talk to sales buttons. */
  actions?: ReactNode;
  /** Check-marked lines under the buttons; pass [] to hide them. */
  assurances?: string[];
};

const DEFAULT_TITLE = (
  <>
    Hand the busywork to
    <br />
    <span className="text-brand">an agent.</span>
  </>
);

/** The closing call to action every marketing page ends on. */
export function CtaSection({
  title = DEFAULT_TITLE,
  lede = "Describe what you'd do by hand today. Your agent finds the leads, drafts the messages, updates the pipeline and leaves you a receipt.",
  actions,
  assurances = DEFAULT_ASSURANCES,
}: CtaSectionProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container width="wide">
        <Reveal className="relative isolate overflow-hidden rounded-[28px] border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="bg-aurora absolute inset-0 -z-10 opacity-80" />
          <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-40" />
          <h2 className="mx-auto max-w-3xl text-[34px] font-semibold leading-[1.05] sm:text-[52px]">{title}</h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-[16px] leading-relaxed text-muted sm:text-[18px]">{lede}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {actions ?? (
              <>
                <ButtonLink href={APP_LINKS.register} size="lg">
                  Start free <ArrowRight />
                </ButtonLink>
                <ButtonLink href={ROUTES.contact} size="lg" variant="secondary">
                  Talk to sales
                </ButtonLink>
              </>
            )}
          </div>
          {assurances.length > 0 && (
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {assurances.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5 text-[13px] text-muted">
                  <Check aria-hidden className="size-3.5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
