import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { isNavGroup, PRIMARY_NAV } from "@/data/navigation";
import { APP_LINKS } from "@/lib/config";

/** The mobile sheet's contents: every nav group as a list, then the app CTAs. */
export function MobileNavLinks({ onNavigate }: { onNavigate: () => void }) {
  return (
    <nav aria-label="Mobile" className="grid gap-6">
      {PRIMARY_NAV.map((item) =>
        isNavGroup(item) ? (
          <div key={item.label} className="grid gap-1">
            <p className="px-3 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">{item.label}</p>
            {[...item.links, ...(item.footer ?? [])].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[15px] text-ink hover:bg-raised"
              >
                {link.Icon && <link.Icon aria-hidden className="size-4 text-accent" />}
                {link.label}
              </Link>
            ))}
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className="rounded-[10px] px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-raised"
          >
            {item.label}
          </Link>
        ),
      )}
      <div className="grid gap-2 border-t border-line pt-6">
        <ButtonLink href={APP_LINKS.register} size="lg" block>
          Get started free
        </ButtonLink>
        <ButtonLink href={APP_LINKS.login} variant="secondary" size="lg" block>
          Log in
        </ButtonLink>
      </div>
    </nav>
  );
}
