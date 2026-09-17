import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { IconTile } from "@/components/ui/IconTile";
import type { Feature } from "@/types/marketing";

/** Numbered value cards, two across on larger screens. */
export function ValuesList({ values }: { values: Feature[] }) {
  return (
    <Stagger as="ol" className="grid gap-4 sm:grid-cols-2">
      {values.map((value, index) => (
        <StaggerItem
          as="li"
          key={value.title}
          className="relative grid content-start gap-4 overflow-hidden rounded-[18px] border border-line bg-surface p-6 sm:p-8"
        >
          <span aria-hidden className="absolute right-6 top-5 font-mono text-[13px] text-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          <IconTile Icon={value.Icon} tone="iris" />
          <h3 className="text-[21px] font-semibold leading-snug text-ink">{value.title}</h3>
          <p className="text-[15px] leading-relaxed text-muted">{value.description}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
