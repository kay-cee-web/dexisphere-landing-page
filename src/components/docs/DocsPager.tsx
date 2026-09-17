import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Card";
import { neighboursOf } from "@/data/docs";
import { docHref } from "@/data/docs/nav";
import type { DocPage, DocSlug } from "@/data/docs/types";
import { cn } from "@/lib/cn";

function PagerCard({ page, direction }: { page: DocPage; direction: "previous" | "next" }) {
  const next = direction === "next";
  const Arrow = next ? ArrowRight : ArrowLeft;
  return (
    <Link
      href={docHref(page.slug)}
      rel={next ? "next" : "prev"}
      className={cn(
        "group grid gap-1.5 rounded-[14px] border border-line bg-surface p-4 transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-float",
        next ? "text-right sm:col-start-2" : "text-left",
      )}
    >
      <Eyebrow className={cn("flex items-center gap-1.5", next && "justify-end")}>
        {!next && <Arrow aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-0.5" />}
        {next ? "Next" : "Previous"}
        {next && <Arrow aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />}
      </Eyebrow>
      <span className="text-[15px] font-medium text-ink">{page.title}</span>
      <span className="font-mono text-[11.5px] text-faint">{page.group}</span>
    </Link>
  );
}

/** Previous / next cards, in sidebar order. */
export function DocsPager({ slug }: { slug: DocSlug }) {
  const { previous, next } = neighboursOf(slug);
  if (!previous && !next) return null;
  return (
    <nav aria-label="Previous and next pages" className="grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
      {previous && <PagerCard page={previous} direction="previous" />}
      {next && <PagerCard page={next} direction="next" />}
    </nav>
  );
}
