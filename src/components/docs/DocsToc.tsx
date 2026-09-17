"use client";

import { useEffect, useState } from "react";
import { Eyebrow } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type TocHeading = { id: string; text: string; level: number };

/** "On this page", highlighting the section currently being read. */
export function DocsToc({ headings, className }: { headings: TocHeading[]; className?: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const targets = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (!targets.length) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (observed) => {
        for (const entry of observed) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // The first heading still in the reading band wins; keep the last one while between headings.
        const first = targets.find((target) => visible.has(target.id));
        if (first) setActiveId(first.id);
      },
      { rootMargin: "-88px 0px -65% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav aria-label="On this page" className={cn("grid gap-3", className)}>
      <Eyebrow>On this page</Eyebrow>
      <ul className="grid gap-0.5 border-l border-line">
        {headings.map((heading) => {
          const active = heading.id === activeId;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={active ? "location" : undefined}
                onClick={() => setActiveId(heading.id)}
                className={cn(
                  "-ml-px block border-l py-1 text-[13px] leading-snug transition-colors",
                  heading.level === 3 ? "pl-6" : "pl-3",
                  active ? "border-accent font-medium text-ink" : "border-transparent text-muted hover:text-ink",
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
