import { Route } from "lucide-react";
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
          icon={Route}
          title="Three steps, about ten minutes"
          highlight="about ten minutes"
        />
        <StepsList steps={HOW_IT_WORKS} />
      </Container>
    </Section>
  );
}
