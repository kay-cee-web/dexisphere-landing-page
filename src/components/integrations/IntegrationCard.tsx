import { IconTile } from "@/components/ui/IconTile";
import { Pill } from "@/components/ui/Pill";
import type { Integration } from "@/data/integrations";
import { AUTH_TONES } from "@/data/integrations-page";

/** One connector: icon, name, category, what it's for and how it connects. */
export function IntegrationCard({ integration }: { integration: Integration }) {
  return (
    <article className="grid h-full content-start gap-4 rounded-[18px] border border-line bg-surface p-5 transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-float">
      <div className="flex items-start justify-between gap-3">
        <IconTile Icon={integration.Icon} tone="neutral" />
        <Pill tone={AUTH_TONES[integration.auth]}>{integration.auth}</Pill>
      </div>
      <div className="grid gap-1">
        <h3 className="text-[16.5px] font-semibold text-ink">{integration.name}</h3>
        <p className="font-mono text-[11.5px] text-faint">{integration.category}</p>
      </div>
      <p className="text-[14px] leading-relaxed text-muted">{integration.description}</p>
    </article>
  );
}
