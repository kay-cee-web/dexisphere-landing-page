import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SmartLink } from "@/components/ui/SmartLink";
import { FOOTER_COLUMNS } from "@/data/navigation";
import { SocialLinks } from "./SocialIcons";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container width="wide" className="grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr]">
        <div className="grid content-start gap-5">
          <Link href="/" aria-label="Dexisphere home" className="w-fit">
            <Logo />
          </Link>
          <p className="max-w-[36ch] text-[14px] leading-relaxed text-muted">
            AI agents that find your prospects, run your outreach and keep your CRM current, and show you a receipt
            for every change.
          </p>
          <SocialLinks className="-ml-2 flex gap-1" />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="grid content-start gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">{column.title}</p>
              <ul className="grid gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <SmartLink href={link.href} className="text-[14px] text-muted transition-colors hover:text-ink">
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <Container width="wide" className="border-t border-line py-6">
        <p className="text-center text-[13px] text-faint sm:text-left">
          © {new Date().getFullYear()} Dexisphere. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
