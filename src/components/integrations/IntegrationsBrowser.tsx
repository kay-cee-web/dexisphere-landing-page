"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, SearchX, X } from "lucide-react";
import { useMemo, useState } from "react";
import { EASE_OUT } from "@/components/motion/Reveal";
import { controlStyles } from "@/components/ui/Field";
import { INTEGRATION_CATEGORIES, INTEGRATIONS, type IntegrationCategory } from "@/data/integrations";
import { cn } from "@/lib/cn";
import { IntegrationCard } from "./IntegrationCard";

type Filter = "All" | IntegrationCategory;
const FILTERS: Filter[] = ["All", ...INTEGRATION_CATEGORIES];

const countFor = (filter: Filter) =>
  filter === "All" ? INTEGRATIONS.length : INTEGRATIONS.filter((item) => item.category === filter).length;

/** Category chips + search over the connector catalogue, with animated reflow. */
export function IntegrationsBrowser() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return INTEGRATIONS.filter(
      (item) =>
        (filter === "All" || item.category === filter) &&
        (!needle || `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(needle)),
    );
  }, [filter, query]);

  return (
    <div className="grid gap-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-[13.5px] transition-colors",
                filter === item
                  ? "border-ink bg-ink text-ground"
                  : "border-line bg-surface text-muted hover:border-accent/40 hover:text-ink",
              )}
            >
              {item}
              <span className="font-mono text-[11px] opacity-70">{countFor(item)}</span>
            </button>
          ))}
        </div>
        <div className="relative w-full lg:max-w-xs">
          <Search aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-faint" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search connectors"
            aria-label="Search connectors"
            className={cn(controlStyles, "h-10 pl-10 pr-10 [&::-webkit-search-cancel-button]:hidden")}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-[8px] text-muted hover:bg-raised hover:text-ink"
            >
              <X aria-hidden className="size-4" />
            </button>
          )}
        </div>
      </div>
      <p aria-live="polite" className="sr-only">
        {visible.length} connectors shown
      </p>
      <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((integration) => (
            <motion.li
              key={integration.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              <IntegrationCard integration={integration} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {visible.length === 0 && (
        <div className="grid justify-items-center gap-3 rounded-[18px] border border-dashed border-line px-6 py-14 text-center">
          <SearchX aria-hidden className="size-6 text-faint" />
          <p className="text-[15px] text-ink">No connectors match &ldquo;{query}&rdquo;</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
            className="text-[13.5px] font-medium text-accent hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
