import type { Metadata } from "next";
import { ContactAside } from "@/components/contact/ContactAside";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a human at Dexisphere. Email sales, support or press, or send us a message about plans, licences, agencies or your agents.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a human"
        lede="Agents do the busywork. Questions about plans, licences or a stubborn connector still go to people, and we answer every one."
      >
        <ContactChannels />
      </PageHero>
      <Section tone="raised" bordered id="message">
        <Container width="wide" className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
          <div className="grid content-start gap-8">
            <SectionHeading
              eyebrow="Send us a message"
              title="Tell us what you need"
              lede="Pick a topic and we'll route it to the right inbox."
              align="left"
            />
            <Reveal delay={0.05}>
              <ContactForm />
            </Reveal>
          </div>
          <ContactAside />
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
