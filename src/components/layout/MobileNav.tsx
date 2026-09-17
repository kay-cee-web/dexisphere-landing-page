"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import { MobileNavLinks } from "./MobileNavLinks";

const noopSubscribe = () => () => {};

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/** Menu button plus a full-width sheet under the header, on phones and tablets. */
export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  // False during SSR and hydration, true after: the portal needs document.body.
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onOpenChange(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => onOpenChange(!open)}
        className="grid size-10 place-items-center rounded-[10px] text-ink transition-colors hover:bg-raised"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {/*
        Portalled to <body>: the header's backdrop-blur makes it the containing block
        for fixed children, which would squash the sheet to the header's height.
        It stays mounted and fades with a CSS transition; `invisible` removes it from
        the tab order and the accessibility tree while closed.
      */}
      {isClient &&
        createPortal(
          <div
            id="mobile-nav"
            aria-hidden={!open}
            className={cn(
              "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-ground px-4 pb-10 pt-4 lg:hidden",
              "transition-[opacity,transform,visibility] duration-200 ease-out",
              open ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0",
            )}
          >
            <MobileNavLinks onNavigate={() => onOpenChange(false)} />
          </div>,
          document.body,
        )}
    </div>
  );
}
