import { ArrowDown } from "lucide-react";
import type { Metadata } from "next";
import { CareersCta } from "@/components/careers/CareersCta";
import { OpenRoles } from "@/components/careers/OpenRoles";
import { TeamFacts } from "@/components/careers/TeamFacts";
import { ValuesList } from "@/components/careers/ValuesList";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { StepsList } from "@/components/sections/StepsList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HIRING_STEPS, PERKS, VALUES } from "@/data/careers/company";
import { JOBS } from "@/data/careers/jobs";
import { ROUTES } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the small, remote team building Dexisphere: AI agents that do real marketing and sales work and show a receipt for every change.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Join us. Build the agents that <span className="text-gradient">do the work</span>
          </>
        }
        lede="We're a small, remote team building software that finds the leads, sends the follow-ups and keeps the pipeline honest, so people can spend their day on the parts that need a human."
        actions={
          <>
            <ButtonLink href="#roles" size="lg">
              See {JOBS.length} open roles <ArrowDown />
            </ButtonLink>
            <ButtonLink href={ROUTES.about} size="lg" variant="secondary">
              About Dexisphere
            </ButtonLink>
          </>
        }
      >
        <TeamFacts />
      </PageHero>

      <Section>
        <Container width="wide" className="grid gap-12">
          <SectionHeading
            eyebrow="Perks"
            title="Looked after, wherever you work"
            lede="The basics done properly, so you can focus on doing the best work of your career."
          />
          <FeatureGrid features={PERKS} />
        </Container>
      </Section>

      <Section tone="raised" bordered>
        <Container width="default" className="grid gap-12">
          <SectionHeading
            eyebrow="Values"
            title="How we work"
            lede="The same principles we build into the product, applied to the team building it."
          />
          <ValuesList values={VALUES} />
        </Container>
      </Section>

      <Section id="roles" className="scroll-mt-16">
        <Container width="default" className="grid gap-12">
          <SectionHeading
            align="left"
            eyebrow="Open roles"
            title={`${JOBS.length} positions, all remote`}
            lede="Every role works directly with customers and ships to production. Pick one to see the details and apply."
          />
          <OpenRoles />
        </Container>
      </Section>

      <Section tone="raised" bordered>
        <Container width="wide" className="grid gap-12">
          <SectionHeading
            eyebrow="Hiring process"
            title="Four steps, about two weeks"
            lede="A clear, respectful process. You'll always know where you stand and what comes next."
          />
          <StepsList steps={HIRING_STEPS} />
        </Container>
      </Section>

      <CareersCta />
    </>
  );
}
