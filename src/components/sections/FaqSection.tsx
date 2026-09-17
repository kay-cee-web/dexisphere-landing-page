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
        <div className="grid content-start gap-6">
          <SectionHeading eyebrow={eyebrow} title={title} align="left" />
          <Reveal delay={0.1} className="text-[15px] text-muted">
            Can&apos;t find what you need?{" "}
            <Link href={ROUTES.contact} className="inline-flex items-center gap-0.5 font-medium text-accent hover:underline">
              Talk to us <ArrowUpRight aria-hidden className="size-3.5" />
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
