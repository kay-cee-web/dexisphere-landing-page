import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ROUTES } from "@/data/navigation";
import type { ProductMeta } from "@/data/products/catalog";
import type { ProductContent } from "@/data/products/types";
import { APP_LINKS } from "@/lib/config";
import { AgentRunDemo } from "./demo/AgentRunDemo";

type ProductHeroProps = { product: ProductMeta; content: ProductContent };

/** Copy, CTAs and key points on the left; the live agent run on the right. Stacks on phones. */
export function ProductHero({ product, content }: ProductHeroProps) {
  const { hero, demo } = content;
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden className="bg-glow absolute inset-0 -z-10" />
      <Container width="wide" className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="grid min-w-0 content-start gap-8">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow={product.name}
            title={hero.headline}
            lede={hero.lede}
            className="[&_h1]:text-[38px] sm:[&_h1]:text-[52px] lg:[&_h1]:text-[56px]"
            actions={
              <>
                <ButtonLink href={APP_LINKS.register} size="lg">
                  Start building <ArrowRight />
                </ButtonLink>
                <ButtonLink href={ROUTES.pricing} size="lg" variant="secondary">
                  View pricing
                </ButtonLink>
              </>
            }
          />
          <Reveal delay={0.1} className="grid gap-6">
            <ul className="grid gap-2.5">
              {hero.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">Tools</span>
              {product.tools.map((tool) => (
                <code key={tool} className="rounded-[6px] border border-line bg-surface px-1.5 py-0.5 font-mono text-[11.5px] text-muted">
                  {tool}
                </code>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="min-w-0">
          <AgentRunDemo script={demo} />
        </Reveal>
      </Container>
    </section>
  );
}
