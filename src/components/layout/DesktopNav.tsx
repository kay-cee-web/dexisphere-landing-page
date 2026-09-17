"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isNavGroup, PRIMARY_NAV, type NavGroup } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { NavMenuPanel } from "./NavMenuPanel";

const triggerStyles =
  "inline-flex h-9 items-center gap-1 rounded-[9px] px-3 text-[14px] font-medium text-muted transition-colors hover:text-ink";

/** Hover/focus dropdowns for groups, plain links for the rest. Hidden below lg. */
export function DesktopNav() {
  const pathname = usePathname();
  // Remember which page a menu was opened on, so navigating closes it without an effect.
  const [menu, setMenu] = useState<{ label: string; path: string } | null>(null);
  const open = menu?.path === pathname ? menu.label : null;
  const setOpen = (label: string | null) => setMenu(label ? { label, path: pathname } : null);

  return (
    <nav aria-label="Main" className="hidden lg:block" onMouseLeave={() => setOpen(null)}>
      <ul className="flex items-center gap-0.5">
        {PRIMARY_NAV.map((item) =>
          isNavGroup(item) ? (
            <li key={item.label} className="relative" onMouseEnter={() => setOpen(item.label)}>
              <button
                type="button"
                aria-expanded={open === item.label}
                onClick={() => setOpen(open === item.label ? null : item.label)}
                onKeyDown={(event) => event.key === "Escape" && setOpen(null)}
                className={cn(triggerStyles, open === item.label && "text-ink")}
              >
                {item.label}
                <ChevronDown
                  aria-hidden
                  className={cn("size-3.5 transition-transform duration-200", open === item.label && "rotate-180")}
                />
              </button>
              <AnimatePresence>
                {open === item.label && <GroupPanel group={item} onNavigate={() => setOpen(null)} />}
              </AnimatePresence>
            </li>
          ) : (
            <li key={item.label} onMouseEnter={() => setOpen(null)}>
              <Link href={item.href} className={cn(triggerStyles, pathname === item.href && "text-ink")}>
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

function GroupPanel({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 4, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 top-full origin-top-left pt-2"
    >
      <NavMenuPanel group={group} onNavigate={onNavigate} />
    </motion.div>
  );
}
