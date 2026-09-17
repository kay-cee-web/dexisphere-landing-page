"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { APP_LINKS } from "@/lib/config";
import { cn } from "@/lib/cn";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

/** Sticky header: transparent over the hero, a blurred bar once the page scrolls, solid while the mobile menu is open. */
export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so navigating closes it without an effect.
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const menuOpen = menuOpenOn === pathname;
  const setMenuOpen = useCallback((open: boolean) => setMenuOpenOn(open ? pathname : null), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        menuOpen
          ? "border-line bg-ground"
          : scrolled
            ? "border-line bg-ground/80 backdrop-blur-xl"
            : "border-transparent bg-transparent",
      )}
    >
      <Container width="wide" className="flex h-16 items-center gap-3 sm:gap-6">
        <Link href="/" aria-label="Dexisphere home" className="min-w-0 shrink-0 rounded-[8px]">
          <Logo />
        </Link>
        <DesktopNav />
        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle compact className="sm:hidden" />
          <ThemeToggle className="hidden sm:inline-flex" />
          <div className="hidden items-center gap-2 lg:flex">
            <ButtonLink href={APP_LINKS.login} variant="ghost" size="sm">
              Log in
            </ButtonLink>
            <ButtonLink href={APP_LINKS.register} size="sm">
              Get started
            </ButtonLink>
          </div>
          <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
        </div>
      </Container>
    </header>
  );
}
