import { ChevronDown } from "lucide-react";
import { Eyebrow } from "@/components/ui/Card";

export type LegalTocItem = { id: string; number: number; title: string };

function TocList({ items }: { items: LegalTocItem[] }) {
  return (
    <ol className="grid gap-0.5">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="flex gap-3 rounded-[9px] px-2.5 py-1.5 text-[14px] leading-snug text-muted transition-colors hover:bg-raised hover:text-ink"
          >
            <span className="w-5 shrink-0 font-mono text-[12px] leading-[1.6] text-faint">
              {String(item.number).padStart(2, "0")}
            </span>
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Numbered contents: a collapsible box on small screens, a sticky list on lg. */
export function LegalToc({ items }: { items: LegalTocItem[] }) {
  return (
    <>
      <details className="group rounded-[14px] border border-line bg-surface lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-[14px] font-medium text-ink [&::-webkit-details-marker]:hidden">
          Contents
          <ChevronDown aria-hidden className="size-4 text-faint transition-transform group-open:rotate-180" />
        </summary>
        <nav aria-label="Contents" className="border-t border-line p-2">
          <TocList items={items} />
        </nav>
      </details>
      <aside className="hidden lg:block">
        <nav aria-label="Contents" className="sticky top-24 grid gap-3">
          <Eyebrow className="px-2.5">Contents</Eyebrow>
          <TocList items={items} />
        </nav>
      </aside>
    </>
  );
}
