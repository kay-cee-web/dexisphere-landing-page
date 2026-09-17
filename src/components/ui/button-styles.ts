import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-medium " +
  "transition-[background-color,color,box-shadow,transform] active:scale-[0.98] " +
  "disabled:pointer-events-none disabled:opacity-50 select-none [&_svg]:size-4 [&_svg]:shrink-0";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-ink shadow-float hover:bg-accent-hover",
  secondary: "border border-line bg-surface text-ink hover:bg-raised",
  ghost: "text-muted hover:bg-raised hover:text-ink",
  inverse: "bg-ink text-ground hover:opacity-90",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-[14px]",
  lg: "h-12 px-5 text-[15px]",
};

/** Shared so links can look exactly like buttons. */
export function buttonStyles(options?: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  className?: string;
}) {
  const { variant = "primary", size = "md", block, className } = options ?? {};
  return cn(base, variants[variant], sizes[size], block && "w-full", className);
}
