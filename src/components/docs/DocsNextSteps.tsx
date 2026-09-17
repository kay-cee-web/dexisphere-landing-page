import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IconTile } from "@/components/ui/IconTile";
import { DOC_PAGES } from "@/data/docs";
import { DOCS_NAV, docHref } from "@/data/docs/nav";
import type { DocSlug } from "@/data/docs/types";

const NAV_ITEMS = DOCS_NAV.flatMap((section) => section.items);

/** "Next steps" cards under an article. */
export function DocsNextSteps({ slugs }: { slugs: DocSlug[] }) {
  return (
    <section aria-labelledby="next-steps" className="grid gap-4">
      <h2 id="next-steps" className="text-[22px] font-semibold text-ink">
        Next steps
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {slugs.map((slug) => {
          const page = DOC_PAGES[slug];
          const item = NAV_ITEMS.find((navItem) => navItem.slug === slug);
          return (
            <li key={slug}>
              <Link
                href={docHref(slug)}
                className="group flex h-full gap-4 rounded-[14px] border border-line bg-surface p-4 transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-float"
              >
                {item && <IconTile Icon={item.Icon} size="sm" />}
                <span className="grid min-w-0 flex-1 content-start gap-1">
                  <span className="flex items-center gap-1.5 text-[15px] font-medium text-ink">
                    {page.title}
                    <ArrowRight aria-hidden className="size-3.5 text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                  <span className="line-clamp-2 text-[13.5px] leading-relaxed text-muted">{page.description}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
