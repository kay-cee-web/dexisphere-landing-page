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
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(ROUTES.about, {
  title: "About",
  description:
    "Why we're building Dexisphere: an AI agent that runs the parts of your business you never get to, and only messages you when something needs you.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Dexisphere"
        title={
          <>
            Nothing in your business should wait for <span className="text-gradient">you to open a tab</span>
          </>
        }
        lede="The lead who replied while you were in a meeting. The quote that sat in drafts until it went cold. The post you meant to publish on Monday. It's the work that keeps a business alive, and it shouldn't wait for the people running it."
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
