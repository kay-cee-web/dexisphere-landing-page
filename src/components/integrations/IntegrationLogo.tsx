import Image from "next/image";
import type { Integration } from "@/data/integrations";
import { cn } from "@/lib/cn";

/** The brand's own logo, or a generic icon for connectors that have no brand (SMTP, the extension). */
export function IntegrationLogo({ integration, className }: { integration: Integration; className?: string }) {
  const { logo, Icon } = integration;
  if (logo) {
    return (
      <Image
        src={logo.src}
        alt=""
        width={40}
        height={40}
        unoptimized
        className={cn("object-contain", logo.invertOnDark && "dark:invert", className)}
      />
    );
  }
  return Icon ? <Icon aria-hidden className={cn("text-accent", className)} strokeWidth={1.75} /> : null;
}
