import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesCarousel } from "./ServicesCarousel";

/** AIFusionX's "What we do" row: the kinds of busywork Dexisphere agents take on. */
export function WhatWeDo() {
  return (
    <Section id="services">
      <Container width="wide" className="grid gap-12">
        <SectionHeading
          align="left"
          eyebrow="What we do"
          title="End-to-end automation, run by agents"
          lede="From workflow automation to data and support, Dexisphere agents take the busywork off your team and show you everything they did."
        />
        <Reveal y={28}>
          <ServicesCarousel />
        </Reveal>
      </Container>
    </Section>
  );
}
