import { ArrowRight, Check, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { SmartLink } from "@/components/ui/SmartLink";
import { ROUTES } from "@/data/navigation";
import { APP_LINKS } from "@/lib/config";
import { HeroDemo } from "./HeroDemo";
import { Typewriter } from "./Typewriter";

const ASSURANCES = ["Free forever plan", "No credit card required", "Lifetime deals from $59"];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden className="bg-glow absolute inset-0 -z-10" />
      <Container width="wide" className="grid gap-14 sm:gap-16">
        <div className="mx-auto grid max-w-4xl justify-items-center gap-6 text-center">
          <Reveal>
            <SmartLink
              href={ROUTES.changelog}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 py-1 pl-1 pr-3 text-[13px] text-muted backdrop-blur transition-colors hover:text-ink"
            >
              <Pill tone="accent">New</Pill>
              Work receipts for every agent turn
              <ArrowRight aria-hidden className="size-3.5" />
            </SmartLink>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[64px] lg:text-[76px]">
              Tell an agent the job.
              <br />
              <Typewriter />
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[62ch] text-[16px] leading-relaxed text-muted sm:text-[19px]">
              Dexisphere agents find your prospects, run email, SMS and WhatsApp outreach, keep your CRM current and
              build funnels, then show you a receipt for every change.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={APP_LINKS.register} size="lg">
              Start free <ArrowRight />
            </ButtonLink>
            <ButtonLink href="#how-it-works" size="lg" variant="secondary">
              <PlayCircle /> See how it works
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {ASSURANCES.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5 text-[13px] text-muted">
                  <Check aria-hidden className="size-3.5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.25} y={32}>
          <HeroDemo />
        </Reveal>
      </Container>
    </section>
  );
}
