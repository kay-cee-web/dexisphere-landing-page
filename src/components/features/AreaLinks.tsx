import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { IconTile } from "@/components/ui/IconTile";
import { ROUTES } from "@/data/navigation";
import { PRODUCTS } from "@/data/products/catalog";

/** The six product areas as compact links under the /features hero. */
export function AreaLinks() {
  return (
    <Stagger as="ul" className="mx-auto grid w-full max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((product) => (
        <StaggerItem as="li" key={product.slug}>
          <Link
            href={ROUTES.product(product.slug)}
            className="group flex h-full items-center gap-3 rounded-[14px] border border-line bg-surface px-4 py-3 transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-float"
          >
            <IconTile Icon={product.Icon} size="sm" />
            <span className="grid min-w-0 flex-1 gap-0.5">
              <span className="text-[14px] font-medium text-ink">{product.name}</span>
              <span className="truncate font-mono text-[11px] text-faint">{product.tools.slice(0, 2).join(" · ")}</span>
            </span>
            <ArrowUpRight aria-hidden className="size-4 text-faint transition-colors group-hover:text-accent" />
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
