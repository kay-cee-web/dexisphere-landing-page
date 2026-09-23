import type { Metadata } from "next";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ChannelsSpotlight } from "@/components/home/ChannelsSpotlight";
import { HomeHero } from "@/components/home/HomeHero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustedBy } from "@/components/home/TrustedBy";
import { VideoSection } from "@/components/home/VideoSection";
import { IntegrationsMarquee } from "@/components/home/IntegrationsMarquee";
import { PlatformBento } from "@/components/home/PlatformBento";
import { ProductCards } from "@/components/home/ProductCards";
import { ProvenResults } from "@/components/home/ProvenResults";
import { RecordsPreview } from "@/components/home/RecordsPreview";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WorkflowShowcase } from "@/components/home/WorkflowShowcase";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Testimonials } from "@/components/sections/Testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { GENERAL_FAQS } from "@/data/faqs";
import { HOME_STRUCTURED_DATA } from "@/data/structured-data";
import { ROUTES } from "@/data/navigation";
import { pageMeta, SITE_TITLE } from "@/lib/seo";

export const metadata: Metadata = pageMeta(ROUTES.home, { title: { absolute: SITE_TITLE } });

/** Section order follows the Tapotik template's home page. */
export default function HomePage() {
  return (
    <>
      <JsonLd data={HOME_STRUCTURED_DATA} />
      <HomeHero />
      <TrustedBy />
      <WhatWeDo />
      <VideoSection />
      <PlatformBento />
      <ProductCards />
      <HowItWorks />
      <WorkflowShowcase />
      <IntegrationsMarquee />
      <RecordsPreview />
      <ChannelsSpotlight />
      <ProvenResults />
      <PricingPlans tone="raised" />
      <Testimonials />
      <FaqSection faqs={GENERAL_FAQS} tone="raised" />
      <BlogPreview />
      <CtaSection />
    </>
  );
}
