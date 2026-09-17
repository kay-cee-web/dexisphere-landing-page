import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isExternal } from "@/lib/config";

type SmartLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  /** Open in a new tab. Off by default: app and checkout links stay in the tab. */
  newTab?: boolean;
  children: ReactNode;
};

/** next/link for routes on this site, a plain anchor for the app, mail and the web. */
export function SmartLink({ href, newTab, children, ...rest }: SmartLinkProps) {
  if (isExternal(href) || href.startsWith("#")) {
    return (
      <a href={href} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
