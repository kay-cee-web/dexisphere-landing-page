import { IntegrationLogo } from "@/components/integrations/IntegrationLogo";
import { Pill } from "@/components/ui/Pill";
import type { Integration } from "@/data/integrations";
import { AUTH_TONES } from "@/data/integrations-page";
import { Spotlight } from "@/components/ui/Spotlight";

/** One connector: icon, name, category, what it's for and how it connects. */
export function IntegrationCard({ integration }: { integration: Integration }) {
  return (
    <article className="group/spot relative grid h-full overflow-hidden content-start gap-4 rounded-[18px] border border-line bg-surface p-5 shadow-surface transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-surface-lg">
      <Spotlight />
      <div className="flex items-start justify-between gap-3">
        <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-raised ring-1 ring-inset ring-line">
          <IntegrationLogo integration={integration} className="size-5.5" />
        </span>
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
