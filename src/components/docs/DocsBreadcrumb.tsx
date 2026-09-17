import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/data/navigation";
import type { DocPage } from "@/data/docs/types";

/** Docs / Group / Page. */
export function DocsBreadcrumb({ page }: { page: DocPage }) {
  const separator = <ChevronRight aria-hidden className="size-3.5 shrink-0 text-faint" />;
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
        <li>
          <Link href={ROUTES.docs} className="transition-colors hover:text-ink">
            Docs
          </Link>
        </li>
        <li className="flex items-center gap-1.5">
          {separator}
          <span>{page.group}</span>
        </li>
        <li className="flex min-w-0 items-center gap-1.5">
          {separator}
          <span aria-current="page" className="truncate font-medium text-ink">
            {page.title}
          </span>
        </li>
      </ol>
    </nav>
  );
}
