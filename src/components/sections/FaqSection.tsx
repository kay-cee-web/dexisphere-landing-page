import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
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

/** Heading on the left, accordion on the right; stacks on phones. */
export function FaqSection({ faqs, title = "Questions, answered", eyebrow = "FAQ", tone }: FaqSectionProps) {
  return (
    <Section tone={tone} id="faq">
      <Container width="wide" className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="grid content-start gap-6 lg:sticky lg:top-28">
          <SectionHeading eyebrow={eyebrow} title={title} align="left" />
          <Reveal delay={0.1} className="max-w-[38ch] text-[15px] leading-relaxed text-muted">
            Everything you need to know about Dexisphere agents, pricing, privacy and integrations.
            Can&apos;t find what you need?
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center gap-1 rounded-[10px] border border-line bg-surface px-4 py-2.5 text-[14px] font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
            >
              Talk to us <ArrowUpRight aria-hidden className="size-3.5" />
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href={ROUTES.docs}
              className="inline-flex items-center gap-1 text-[14px] font-medium text-accent hover:underline"
            >
              Browse the docs <ArrowUpRight aria-hidden className="size-3.5" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <Accordion items={faqs.map((faq) => ({ title: faq.question, body: faq.answer }))} />
        </Reveal>
      </Container>
    </Section>
  );
}
