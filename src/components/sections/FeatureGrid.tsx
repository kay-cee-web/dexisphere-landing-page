import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HairlineGrid } from "@/components/ui/HairlineGrid";
import { IconTile } from "@/components/ui/IconTile";
import { cn } from "@/lib/cn";
import type { Feature } from "@/types/marketing";

/** Icon + title + description cells separated by hairlines. Capabilities, values, perks. */
export function FeatureGrid({ features, columns = 3 }: { features: Feature[]; columns?: 2 | 3 | 4 }) {
  const compact = columns === 4;
  return (
    <Stagger>
      <HairlineGrid itemCount={features.length} columns={columns}>
        {features.map((feature) => (
          <StaggerItem key={feature.title} className={cn("grid content-start gap-4 bg-surface p-6", !compact && "sm:p-8")}>
            <IconTile Icon={feature.Icon} />
            <div className="grid gap-2">
              <h3 className={cn("font-semibold text-ink", compact ? "text-[17px]" : "text-[18px]")}>{feature.title}</h3>
              <p className={cn("leading-relaxed text-muted", compact ? "text-[14px]" : "text-[14.5px]")}>{feature.description}</p>
            </div>
            {feature.meta && <p className="font-mono text-[12px] text-faint">{feature.meta}</p>}
          </StaggerItem>
        ))}
      </HairlineGrid>
    </Stagger>
  );
}
