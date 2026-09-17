import Link from "next/link";
import { IconTile } from "@/components/ui/IconTile";
import type { NavGroup } from "@/data/navigation";
import { cn } from "@/lib/cn";

/** The card inside a desktop dropdown: described links, plus optional footer links. */
export function NavMenuPanel({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  const wide = group.links.length > 3;
  return (
    <div className={cn("overflow-hidden rounded-[16px] border border-line bg-surface shadow-lift", wide ? "w-[640px]" : "w-[340px]")}>
      <ul className={cn("grid gap-1 p-2", wide && "grid-cols-2")}>
        {group.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className="flex gap-3 rounded-[12px] p-3 transition-colors hover:bg-raised"
            >
              {link.Icon && <IconTile Icon={link.Icon} size="sm" />}
              <span className="grid gap-0.5">
                <span className="text-[14px] font-medium text-ink">{link.label}</span>
                {link.description && <span className="text-[12.5px] leading-snug text-muted">{link.description}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {group.footer && (
        <div className="flex gap-1 border-t border-line bg-raised px-2 py-2">
          {group.footer.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="inline-flex items-center gap-2 rounded-[9px] px-3 py-2 text-[13px] font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              {link.Icon && <link.Icon aria-hidden className="size-4" />}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
