"use client";

import { motion } from "framer-motion";
import { FileText, Hash, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { EASE_OUT } from "@/components/motion/Reveal";
import type { DocSearchEntry } from "@/data/docs/types";
import { cn } from "@/lib/cn";
import { searchDocs } from "./search";

type DocsSearchDialogProps = { entries: DocSearchEntry[]; onClose: () => void };

/** Command palette: type to filter, ↑/↓ to move, Enter to open, Esc to close. */
export function DocsSearchDialog({ entries, onClose }: DocsSearchDialogProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const results = useMemo(() => searchDocs(entries, query), [entries, query]);
  const baseId = useId();
  const optionId = (index: number) => `${baseId}-option-${index}`;

  useEffect(() => {
    inputRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  useEffect(() => {
    document.getElementById(optionId(active))?.scrollIntoView({ block: "nearest" });
  });

  const open = (href: string) => {
    onClose();
    router.push(href);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const count = results.length;
    if (event.key === "Escape") onClose();
    else if (event.key === "Tab") inputRef.current?.focus();
    else if (event.key === "ArrowDown" && count) setActive((index) => (index + 1) % count);
    else if (event.key === "ArrowUp" && count) setActive((index) => (index - 1 + count) % count);
    else if (event.key === "Enter" && results[active]) open(results[active].href);
    else return;
    event.preventDefault();
  };

  return (
    <div className="fixed inset-0 z-[70] grid items-start px-4 pt-[12vh]" onKeyDown={onKeyDown}>
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Search documentation"
        initial={{ opacity: 0, y: -8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ duration: 0.2, ease: EASE_OUT }}
        className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[16px] border border-line bg-surface shadow-lift"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search aria-hidden className="size-4 shrink-0 text-muted" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={`${baseId}-list`}
            aria-activedescendant={results[active] ? optionId(active) : undefined}
            aria-autocomplete="list"
            aria-label="Search documentation"
            placeholder="Search guides, settings, errors…"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            className="h-14 min-w-0 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-faint"
          />
          <kbd className="rounded-[6px] border border-line bg-raised px-1.5 py-0.5 font-mono text-[11px] text-faint">Esc</kbd>
        </div>
        <ul id={`${baseId}-list`} role="listbox" aria-label="Results" className="max-h-[min(60vh,420px)] overflow-y-auto p-2">
          {results.map((result, index) => {
            const Icon = result.kind === "page" ? FileText : Hash;
            return (
              <li
                key={result.key}
                id={optionId(index)}
                role="option"
                aria-selected={index === active}
                onMouseMove={() => setActive(index)}
                onClick={() => open(result.href)}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-[10px] px-3 py-2.5",
                  index === active ? "bg-accent-soft text-ink [&_svg]:text-accent" : "text-muted",
                )}
              >
                <Icon aria-hidden className="size-4 shrink-0 text-faint" />
                <span className="min-w-0 flex-1 truncate text-[14px] font-medium text-ink">{result.title}</span>
                <span className="shrink-0 truncate font-mono text-[11px] uppercase tracking-[0.06em] text-faint">{result.context}</span>
              </li>
            );
          })}
        </ul>
        {!results.length && (
          <p role="status" className="px-4 pb-8 pt-4 text-center text-[14px] text-muted">
            No results for “{query.trim()}”. Try a feature name like “pairing code” or “SMTP”.
          </p>
        )}
        <div className="hidden items-center gap-4 border-t border-line bg-raised px-4 py-2 font-mono text-[11px] text-faint sm:flex">
          <span>↑ ↓ to move</span>
          <span>Enter to open</span>
          <span>Esc to close</span>
        </div>
      </motion.div>
    </div>
  );
}
