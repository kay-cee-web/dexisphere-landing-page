import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { NewsletterForm } from "./NewsletterForm";

/** "Get new posts by email" band under the post grid. */
export function NewsletterSection() {
  return (
    <Section tone="raised" bordered>
      <Container width="narrow">
        <Reveal className="grid justify-items-center gap-4 text-center">
          <Eyebrow className="text-accent">Newsletter</Eyebrow>
          <h2 className="text-[30px] font-semibold leading-tight text-ink sm:text-[40px]">New playbooks, in your inbox</h2>
          <p className="max-w-[52ch] text-[16px] leading-relaxed text-muted">
            One email when we publish: prompt sequences that work, product updates and what we learn running agents on real
            pipelines. No spam, unsubscribe anytime.
          </p>
          <div className="mt-2 w-full max-w-md">
            <NewsletterForm />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
