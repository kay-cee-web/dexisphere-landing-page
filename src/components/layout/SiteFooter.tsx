import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SmartLink } from "@/components/ui/SmartLink";
import { FOOTER_COLUMNS } from "@/data/navigation";
import { FooterNewsletter } from "./FooterNewsletter";
import { SocialLinks } from "./SocialIcons";

export function SiteFooter() {
  return (
    <footer className="relative bg-surface">
      {/* Gradient divider */}
      <div
        aria-hidden
        className="h-px bg-linear-to-r from-transparent via-line to-transparent"
      />

      <Container
        width="wide"
        className="grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr] lg:gap-20 lg:py-20"
      >
        {/* Brand column */}
        <div className="grid content-start gap-6">
          <Link href="/" aria-label="Dexisphere home" className="w-fit">
            <Logo />
          </Link>
          <p className="max-w-[38ch] text-[14px] leading-relaxed text-muted">
            AI agents that find your prospects, run your outreach and keep your
            CRM current, and show you a receipt for every change.
          </p>
          <FooterNewsletter />
          <SocialLinks className="-ml-2 flex gap-1" />
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="grid content-start gap-3">
              <p className="text-[14px] font-semibold text-ink">
                {column.title}
              </p>
              <ul className="grid gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <SmartLink
                      href={link.href}
                      className="text-[14px] text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Watermark */}
      <Container width="wide" className="overflow-hidden">
        <p
          aria-hidden
          className="select-none text-center font-display text-[clamp(48px,10vw,140px)] font-extrabold uppercase leading-none tracking-tight text-ink/4"
        >
          Dexisphere
        </p>
      </Container>

      {/* Copyright bar */}
      <Container width="wide" className="border-t border-line py-6">
        <div className="flex flex-col items-center gap-2 text-[13px] text-faint sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Dexisphere. All rights reserved.</p>
          <p>Crafted by the Dexisphere team.</p>
        </div>
      </Container>
    </footer>
  );
}
