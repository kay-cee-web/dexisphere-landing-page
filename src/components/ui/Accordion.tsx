"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = { title: string; body: string };

/** One-open-at-a-time disclosure list, used for every FAQ. */
export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-line overflow-hidden rounded-[18px] border border-line bg-surface", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.title}>
            <h3 className="font-sans text-[15.5px] font-medium tracking-normal">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center gap-4 px-5 py-5 text-left text-ink transition-colors hover:bg-raised sm:px-6"
              >
                <span className="flex-1">{item.title}</span>
                <Plus
                  aria-hidden
                  className={cn("size-4 shrink-0 text-muted transition-transform duration-300", isOpen && "rotate-45 text-accent")}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[70ch] px-5 pb-5 text-[14.5px] leading-relaxed text-muted sm:px-6">{item.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
