import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { OfficesSection } from "@/components/about/OfficesSection";
import { StoryTimeline } from "@/components/about/StoryTimeline";
import { TeamGrid } from "@/components/about/TeamGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VALUES } from "@/data/about/values";
import { ROUTES } from "@/data/navigation";
import { STATS, STATS_CAPTION } from "@/data/stats";
import { APP_LINKS } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we're building Dexisphere: AI agents that take the busywork off small marketing and sales teams, and show a receipt for everything they do.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Dexisphere"
        title={
          <>
            Give every small team an operator that <span className="text-gradient">never tires of the busywork</span>
          </>
        }
        lede="Finding leads, filing them, following up, moving deals, booking the call. It's the work that keeps a business alive, and it shouldn't eat the day of the people running it."
        actions={
          <>
            <ButtonLink href={APP_LINKS.register} size="lg">
              Start free <ArrowRight />
            </ButtonLink>
            <ButtonLink href={ROUTES.careers} size="lg" variant="secondary">
              Join the team
            </ButtonLink>
          </>
        }
      />
      <StoryTimeline />
      <Section id="values">
        <Container width="wide" className="grid gap-14">
          <SectionHeading
            eyebrow="What we value"
            title="Principles you can see in the product"
            lede="Four rules we hold ourselves to. Each one shows up somewhere you can click."
          />
          <FeatureGrid features={VALUES} columns={2} />
        </Container>
      </Section>
      <TeamGrid />
      <StatsBand stats={STATS} caption={STATS_CAPTION} />
      <OfficesSection />
      <CtaSection />
    </>
  );
}
