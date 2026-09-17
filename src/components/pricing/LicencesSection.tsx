import { ArrowRight, ArrowUpRight, Handshake } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StepsList } from "@/components/sections/StepsList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ROUTES } from "@/data/navigation";
import { LICENCE_STEPS } from "@/data/pricing";
import { REDEEM_URL } from "@/lib/config";

/** "How licences work" (checkout → code → redeem) plus the agencies callout. */
export function LicencesSection() {
  return (
    <Section tone="raised" id="licences">
      <Container width="wide" className="grid gap-14">
        <SectionHeading
          eyebrow="How licences work"
          title="Buy once, redeem in a minute"
          lede="There's no subscription to manage. A paid plan is a licence code you redeem in the app."
          actions={
            <a
              href={REDEEM_URL}
              className="inline-flex items-center gap-1 text-[14px] font-medium text-accent hover:underline"
            >
              Redeem a licence code <ArrowUpRight aria-hidden className="size-3.5" />
            </a>
          }
        />
        <StepsList steps={LICENCE_STEPS} />
        <Reveal className="grid gap-6 rounded-[20px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
          <IconTile Icon={Handshake} size="lg" tone="iris" />
          <div className="grid gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-[20px] font-semibold text-ink">Agencies</h3>
              <Pill tone="iris">Business · Agency</Pill>
            </div>
            <p className="max-w-[62ch] text-[14.5px] leading-relaxed text-muted">
              Business and Agency licences include reseller access, so you can set up and run Dexisphere agents for your
              clients. Tell us how many clients you manage and we&apos;ll help you pick the right tier.
            </p>
          </div>
          <ButtonLink href={ROUTES.contact} variant="secondary" className="justify-self-start">
            Talk to sales <ArrowRight />
          </ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}
