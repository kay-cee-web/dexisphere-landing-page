import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { IconTile } from "@/components/ui/IconTile";
import { ROUTES } from "@/data/navigation";
import { PRODUCTS } from "@/data/products/catalog";

/** The five jobs as compact links under the /features hero. */
export function AreaLinks() {
  return (
    <Stagger as="ul" className="mx-auto grid w-full max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((product) => (
        <StaggerItem as="li" key={product.slug}>
          <Link
            href={ROUTES.product(product.slug)}
            className="group flex h-full items-center gap-3 rounded-[14px] border border-line bg-surface px-4 py-3 shadow-surface transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-surface-lg"
          >
            <IconTile Icon={product.Icon} size="sm" />
            <span className="grid min-w-0 flex-1 gap-0.5">
              <span className="text-[14px] font-medium text-ink">{product.name}</span>
              <span className="truncate text-[12.5px] text-faint">{product.tagline}</span>
            </span>
            <ArrowUpRight aria-hidden className="size-4 text-faint transition-colors group-hover:text-accent" />
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
