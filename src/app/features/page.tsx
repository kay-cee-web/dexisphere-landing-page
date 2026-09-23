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
    "Everything Dexisphere agents can do: real tools, work receipts, ask before sending, a sending switch, WhatsApp and Telegram channels, scheduled work and your choice of AI model.",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Every capability, one platform"
        lede="Agents that prospect, send, update your CRM, build funnels and report back, with receipts, approvals and a sending switch keeping you in charge."
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
            eyebrow="The core eight"
            title="What every agent comes with"
            lede="The same foundations sit under every task, whether it's a prospect run or a Monday report."
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
            lede="Doing it by hand gets it done, slowly. A chatbot tells you how. An agent does it and shows you what changed."
          />
          <ComparisonTable />
        </Container>
      </Section>

      <StatsBand stats={STATS} caption={STATS_CAPTION} />
      <CtaSection />
    </>
  );
}
