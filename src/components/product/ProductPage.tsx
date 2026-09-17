import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { StepsList } from "@/components/sections/StepsList";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productBySlug, type ProductSlug } from "@/data/products/catalog";
import { PRODUCT_CONTENT } from "@/data/products";
import { ProductHero } from "./ProductHero";
import { UseCaseGrid } from "./UseCaseGrid";

/**
 * The shared template behind every product page: hero with a live agent run,
 * capabilities, how it works, use cases, pricing, FAQ and the closing CTA.
 */
export function ProductPage({ slug }: { slug: ProductSlug }) {
  const product = productBySlug(slug);
  const content = PRODUCT_CONTENT[slug];
  const { capabilities, steps, useCases } = content;

  return (
    <>
      <ProductHero product={product} content={content} />

      <Section id="capabilities">
        <Container width="wide" className="grid gap-12">
          <SectionHeading eyebrow="Capabilities" title={capabilities.title} lede={capabilities.lede} />
          <FeatureGrid features={capabilities.items} />
        </Container>
      </Section>

      <Section tone="raised" id="how-it-works" bordered>
        <Container width="wide" className="grid gap-14">
          <SectionHeading eyebrow="How it works" title={steps.title} lede={steps.lede} />
          <StepsList steps={steps.items} />
        </Container>
      </Section>

      <Section id="use-cases">
        <Container width="wide" className="grid gap-12">
          <SectionHeading eyebrow="Use cases" title={useCases.title} lede={useCases.lede} />
          <UseCaseGrid items={useCases.items} />
        </Container>
      </Section>

      <PricingPlans tone="raised" />
      <FaqSection faqs={content.faqs} title={`${product.name}, answered`} />
      <CtaSection title={content.cta?.title} lede={content.cta?.lede} />
    </>
  );
}
