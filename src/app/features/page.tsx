import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { AreaLinks } from "@/components/features/AreaLinks";
import { ComparisonTable } from "@/components/features/ComparisonTable";
import { ControlVisual } from "@/components/features/ControlVisual";
import { DeepDive } from "@/components/features/DeepDive";
import { ScheduledWorkVisual } from "@/components/features/ScheduledWorkVisual";
import { ToolFanOut } from "@/components/features/ToolFanOut";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CORE_FEATURES } from "@/data/features/core";
import { DEEP_DIVES } from "@/data/features/deep-dives";
import { ROUTES } from "@/data/navigation";
import { STATS, STATS_CAPTION } from "@/data/stats";
import { APP_LINKS } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(ROUTES.features, {
  title: "Features",
  description:
    "An AI agent that finds your customers, drafts your content, watches your ads, sits in your meetings and watches your money, then messages you when something actually needs you.",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="What it does"
        title="Your business keeps moving while you're not looking"
        lede="Dexisphere finds your customers, runs your outreach, drafts your content, watches your ads, sits in your meetings and watches your money. Then it messages you when something actually needs you."
        actions={
          <>
            <ButtonLink href={APP_LINKS.register} size="lg">
              Start free <ArrowRight />
            </ButtonLink>
            <ButtonLink href={ROUTES.pricing} size="lg" variant="secondary">
              View pricing
            </ButtonLink>
          </>
        }
      >
        <AreaLinks />
      </PageHero>

      <Section id="core" className="pt-4 sm:pt-8">
        <Container width="wide" className="grid gap-12">
          <SectionHeading
            eyebrow="Under every job"
            title="What every agent comes with"
            lede="Whether it's a prospect run or Monday's revenue summary, the same ground rules apply."
          />
          <FeatureGrid features={CORE_FEATURES} columns={4} />
        </Container>
      </Section>

      <DeepDive dive={DEEP_DIVES.tools} visual={<ToolFanOut />} tone="raised" />
      <DeepDive dive={DEEP_DIVES.schedule} visual={<ScheduledWorkVisual />} reverse />
      <DeepDive dive={DEEP_DIVES.control} visual={<ControlVisual />} tone="raised" />

      <Section id="compare">
        <Container width="wide" className="grid gap-12">
          <SectionHeading
            eyebrow="Compare"
            title="Dexisphere vs. the alternatives"
            lede="ChatGPT doesn't know your pipeline, can't see your inbox, and stops the moment you close the tab. Dexisphere is connected to your business and keeps working while you're away."
          />
          <ComparisonTable />
        </Container>
      </Section>

      <StatsBand stats={STATS} caption={STATS_CAPTION} />
      <CtaSection />
    </>
  );
}
