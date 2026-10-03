import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container, Section } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ROUTES } from "@/data/navigation";
import { PRODUCTS } from "@/data/products/catalog";

/** The five jobs, one page each. */
export function ProductCards() {
  return (
    <Section tone="raised" bordered id="products">
      <Container width="wide" className="grid gap-14">
        <SectionHeading
          eyebrow="Five jobs, one agent"
          title="The parts of your business you never get to"
          lede="You have a CRM, an inbox, a calendar, a payment dashboard, a mailing list, three social logins and an ads manager. They all work. And every one of them is waiting for you to open it."
          actions={
            <Link href={ROUTES.features} className="inline-flex items-center gap-1 text-[14.5px] font-medium text-accent hover:underline">
              Explore every feature <ArrowRight aria-hidden className="size-4" />
            </Link>
          }
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <StaggerItem key={product.slug} className="h-full">
              <Link
                href={ROUTES.product(product.slug)}
                className="group flex h-full flex-col gap-5 rounded-[20px] border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <IconTile Icon={product.Icon} size="lg" />
                  <ArrowRight
                    aria-hidden
                    className="size-4 -translate-x-1 text-faint opacity-0 transition-all group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100"
                  />
                </div>
                <div className="grid gap-2">
                  <h3 className="text-[20px] font-semibold text-ink">{product.name}</h3>
                  <p className="text-[14.5px] leading-relaxed text-muted">{product.tagline}</p>
                </div>
                {product.tools.length > 0 && (
                  <ul className="mt-auto flex flex-wrap gap-1.5">
                    {product.tools.map((tool) => (
                      <li key={tool} className="rounded-[7px] bg-raised px-2 py-1 font-mono text-[11px] text-muted ring-1 ring-inset ring-line">
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
