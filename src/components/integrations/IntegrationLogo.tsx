import Image from "next/image";
import type { Integration } from "@/data/integrations";
import { cn } from "@/lib/cn";

const logoImage = (src: string, className?: string) => (
  <Image src={src} alt="" width={40} height={40} unoptimized className={cn("object-contain", className)} />
);

/** The brand's own logo, or a generic icon for connectors that have no brand (IMAP, SMTP, the extension). */
export function IntegrationLogo({ integration, className }: { integration: Integration; className?: string }) {
  const { logo, Icon } = integration;
  if (logo?.darkSrc) {
    return (
      <>
        {logoImage(logo.src, cn("dark:hidden", className))}
        {logoImage(logo.darkSrc, cn("hidden dark:block", className))}
      </>
    );
  }
  if (logo) return logoImage(logo.src, cn(logo.invertOnDark && "dark:invert", className));
  return Icon ? <Icon aria-hidden className={cn("text-accent", className)} strokeWidth={1.75} /> : null;
}
