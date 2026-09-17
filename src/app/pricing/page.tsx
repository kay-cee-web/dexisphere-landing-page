import type { Metadata } from "next";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { LicencesSection } from "@/components/pricing/LicencesSection";
import { TokensExplainer } from "@/components/pricing/TokensExplainer";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { PRICING_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Lifetime licences for Dexisphere's AI agents. Start free, or pay once for Solo, Business or Agency. No subscriptions, nothing renews.",
};

export default function PricingPage() {
  return (
    <>
      <PricingPlans as="h1" />
      <ComparisonTable />
      <TokensExplainer />
      <LicencesSection />
      <FaqSection faqs={PRICING_FAQS} title="Pricing questions" />
      <CtaSection title="Pay once. Put an agent to work today." />
    </>
  );
}
