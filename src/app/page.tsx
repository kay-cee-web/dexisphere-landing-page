import type { Metadata } from "next";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ChannelsSpotlight } from "@/components/home/ChannelsSpotlight";
import { HomeHero } from "@/components/home/HomeHero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IntegrationsMarquee } from "@/components/home/IntegrationsMarquee";
import { PlatformBento } from "@/components/home/PlatformBento";
import { ProductCards } from "@/components/home/ProductCards";
import { RecordsPreview } from "@/components/home/RecordsPreview";
import { WorkflowShowcase } from "@/components/home/WorkflowShowcase";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Testimonials } from "@/components/sections/Testimonials";
import { GENERAL_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: { absolute: "Dexisphere · AI agents that do your marketing and sales busywork" },
};

/** Section order follows the Tapotik template's home page. */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PlatformBento />
      <ProductCards />
      <HowItWorks />
      <WorkflowShowcase />
      <IntegrationsMarquee />
      <RecordsPreview />
      <ChannelsSpotlight />
      <PricingPlans tone="raised" />
      <Testimonials />
      <FaqSection faqs={GENERAL_FAQS} tone="raised" />
      <BlogPreview />
      <CtaSection />
    </>
  );
}
