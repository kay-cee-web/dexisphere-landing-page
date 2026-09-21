import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const sizes = {
  sm: "size-8 rounded-[9px] [&_svg]:size-4",
  md: "size-10 rounded-[11px] [&_svg]:size-[18px]",
  lg: "size-12 rounded-[13px] [&_svg]:size-5",
};

const tones = {
  accent: "bg-accent-soft text-accent",
  violet: "bg-violet/10 text-violet",
  neutral: "bg-raised text-ink ring-1 ring-inset ring-line",
};

type IconTileProps = {
  Icon: LucideIcon;
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
  className?: string;
};

/** An icon on a soft rounded square: feature cards, integrations, steps. */
export function IconTile({ Icon, size = "md", tone = "accent", className }: IconTileProps) {
  return (
    <span aria-hidden className={cn("grid shrink-0 place-items-center", sizes[size], tones[tone], className)}>
      <Icon strokeWidth={1.75} />
    </span>
  );
}
