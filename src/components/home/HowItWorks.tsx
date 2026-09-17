import { StepsList } from "@/components/sections/StepsList";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS } from "@/data/home/steps";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container width="wide" className="grid gap-16">
        <SectionHeading
          eyebrow="How it works"
          title="From a sentence to a finished job"
          lede="No workflow builder to learn. Say what you want done and check the receipt."
        />
        <StepsList steps={HOW_IT_WORKS} />
      </Container>
    </Section>
  );
}
