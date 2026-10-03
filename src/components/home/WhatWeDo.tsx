import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesCarousel } from "./ServicesCarousel";

/** AIFusionX's "What we do" row: the five jobs the agent runs while you're not looking. */
export function WhatWeDo() {
  return (
    <Section id="services">
      <Container width="wide" className="grid gap-12">
        <SectionHeading
          align="left"
          eyebrow="What it does"
          title="Nothing in your business moves until you move it"
          lede="Your inbox, CRM, calendar, payments, mailing list, social logins and ads manager all work. And every one of them is waiting for you to open it. Dexisphere opens them for you."
        />
        <Reveal y={28}>
          <ServicesCarousel />
        </Reveal>
      </Container>
    </Section>
  );
}
