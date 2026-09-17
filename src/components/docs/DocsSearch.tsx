"use client";

import { AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { DocSearchEntry } from "@/data/docs/types";
import { cn } from "@/lib/cn";
import { DocsSearchDialog } from "./DocsSearchDialog";

const noopSubscribe = () => () => {};

type DocsSearchProps = {
  entries: DocSearchEntry[];
  /** Only one instance on the page should own ⌘K / Ctrl+K. */
  hotkey?: boolean;
  className?: string;
};

/** "Search docs" button that opens the command-palette dialog. */
export function DocsSearch({ entries, hotkey = false, className }: DocsSearchProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const modifier = useSyncExternalStore(
    noopSubscribe,
    () => (/Mac|iPhone|iPad/i.test(navigator.userAgent) ? "⌘" : "Ctrl "),
    () => "⌘",
  );

  useEffect(() => {
    if (!hotkey) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hotkey]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className={cn(
          "flex h-9 w-full items-center gap-2 rounded-[10px] border border-line bg-surface px-3 text-left text-[13.5px] text-muted",
          "transition-colors hover:border-accent/40 hover:text-ink",
          className,
        )}
      >
        <Search aria-hidden className="size-4 shrink-0" />
        <span className="flex-1 truncate">Search docs</span>
        <kbd className="rounded-[6px] border border-line bg-raised px-1.5 py-0.5 font-mono text-[11px] text-faint">
          {modifier}K
        </kbd>
      </button>
      {mounted &&
        createPortal(
          <AnimatePresence>{open && <DocsSearchDialog key="docs-search" entries={entries} onClose={close} />}</AnimatePresence>,
          document.body,
        )}
    </>
  );
}
