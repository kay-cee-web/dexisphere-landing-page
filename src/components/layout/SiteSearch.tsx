"use client";

import { AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { DocsSearchDialog } from "@/components/docs/DocsSearchDialog";
import type { SearchEntry } from "@/data/docs/types";
import { ROUTES } from "@/data/navigation";

const noopSubscribe = () => () => {};

/**
 * The header's search button: opens the site-wide command palette. It owns
 * ⌘K / Ctrl+K everywhere except the docs, whose sidebar search keeps it.
 */
export function SiteSearch({ entries }: { entries: SearchEntry[] }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const pathname = usePathname();
  const hotkey = !pathname.startsWith(ROUTES.docs);

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
        aria-label="Search the site"
        onClick={() => setOpen(true)}
        className="grid size-9 place-items-center rounded-[10px] text-muted transition-colors hover:bg-raised hover:text-ink"
      >
        <Search aria-hidden className="size-[18px]" />
      </button>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <DocsSearchDialog
                key="site-search"
                entries={entries}
                onClose={close}
                label="Search Dexisphere"
                placeholder="Search pages, products, docs and posts…"
                emptyHint="Try “pricing”, “WhatsApp” or “approvals”."
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
