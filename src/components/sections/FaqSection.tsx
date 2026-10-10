import { ArrowUpRight, CircleHelp, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ROUTES } from "@/data/navigation";
import type { Faq } from "@/types/marketing";

type FaqSectionProps = {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
  tone?: "ground" | "raised";
};

/** Heading and a support card on the left, accordion on the right; stacks on phones. */
export function FaqSection({ faqs, title = "Questions people ask first", eyebrow = "FAQ", tone }: FaqSectionProps) {
  return (
    <Section tone={tone} id="faq">
      <Container width="wide" className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="grid content-start gap-6 lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={eyebrow}
            icon={CircleHelp}
            title={title}
            highlight="ask first"
            lede="What it can see, what it can do, and what it costs."
            align="left"
          />
          <Reveal delay={0.1} className="grid max-w-sm gap-4 rounded-[20px] glass p-6 shadow-surface">
            <span className="grid size-10 place-items-center rounded-[12px] bg-brand text-white">
              <LifeBuoy aria-hidden className="size-5" />
            </span>
            <div className="grid gap-1">
              <h3 className="text-[17px] font-semibold text-ink">Still have questions?</h3>
              <p className="text-[14px] leading-relaxed text-muted">Ask the people who build Dexisphere, or look it up in the docs.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <ButtonLink href={ROUTES.contact} size="sm">
                Talk to us <ArrowUpRight />
              </ButtonLink>
              <Link href={ROUTES.docs} className="inline-flex items-center gap-1 text-[14px] font-medium text-accent hover:underline">
                Browse the docs <ArrowUpRight aria-hidden className="size-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <Accordion items={faqs.map((faq) => ({ title: faq.question, body: faq.answer }))} />
        </Reveal>
      </Container>
    </Section>
  );
}
