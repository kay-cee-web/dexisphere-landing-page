"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS_NAV, docHref } from "@/data/docs/nav";
import { cn } from "@/lib/cn";

/** The three docs groups with their pages; the current page is highlighted. */
export function DocsNavList({ onNavigate, className }: { onNavigate?: () => void; className?: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation" className={cn("grid gap-6", className)}>
      {DOCS_NAV.map((section) => (
        <div key={section.group} className="grid gap-1.5">
          <p className="px-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-faint">{section.group}</p>
          <ul className="grid gap-0.5">
            {section.items.map((item) => {
              const href = docHref(item.slug);
              const active = pathname === href;
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-2.5 rounded-[9px] px-2.5 py-1.5 text-[14px] transition-colors",
                      active
                        ? "bg-accent-soft font-medium text-ink [&_svg]:text-accent"
                        : "text-muted hover:bg-raised hover:text-ink",
                    )}
                  >
                    <item.Icon aria-hidden className="size-4 shrink-0" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
