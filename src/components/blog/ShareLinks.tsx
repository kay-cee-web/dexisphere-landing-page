import { Mail } from "lucide-react";
import { LinkedInIcon, XIcon } from "@/components/layout/SocialIcons";
import { cn } from "@/lib/cn";
import { CopyLinkButton } from "./CopyLinkButton";

const linkStyles =
  "grid size-9 place-items-center rounded-[9px] border border-line bg-surface text-muted transition-colors hover:bg-raised hover:text-ink";

/** Real share URLs for X, LinkedIn and email, plus a copy-link button. */
export function ShareLinks({ url, title, className }: { url: string; title: string; className?: string }) {
  const encodedUrl = encodeURIComponent(url);
  const targets = [
    {
      label: "Share on X",
      href: `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodedUrl}`,
      Icon: XIcon,
      external: true,
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: LinkedInIcon,
      external: true,
    },
    {
      label: "Share by email",
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${title}\n\n${url}`)}`,
      Icon: Mail,
      external: false,
    },
  ];

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="mr-1 font-mono text-[11.5px] uppercase tracking-[0.1em] text-faint">Share</span>
      {targets.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          className={linkStyles}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <Icon aria-hidden className="size-4" />
        </a>
      ))}
      <CopyLinkButton url={url} />
    </div>
  );
}
