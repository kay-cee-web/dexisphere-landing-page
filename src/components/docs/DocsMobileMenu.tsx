"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { EASE_OUT } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { DocsNavList } from "./DocsNavList";

/** Below lg: a "Menu" disclosure for the page list, with search beside it. */
export function DocsMobileMenu({ search }: { search: ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 shrink-0 items-center gap-2 rounded-[10px] border border-line bg-surface px-3 text-[13.5px] font-medium text-ink transition-colors hover:bg-raised"
        >
          <Menu aria-hidden className="size-4 text-muted" />
          Menu
          <ChevronDown aria-hidden className={cn("size-4 text-faint transition-transform", open && "rotate-180")} />
        </button>
        <div className="min-w-0 flex-1">{search}</div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="docs-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-[14px] border border-line bg-surface p-3">
              <DocsNavList onNavigate={() => setOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
