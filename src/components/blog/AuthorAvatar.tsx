import { initialsOf } from "@/lib/text";
import { cn } from "@/lib/cn";

const sizes = {
  sm: "size-9 text-[12px]",
  lg: "size-14 text-[16px]",
};

/** An initials avatar, so authors need no photo assets. */
export function AuthorAvatar({ name, size = "sm", className }: { name: string; size?: keyof typeof sizes; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid shrink-0 place-items-center rounded-full bg-accent-soft font-mono font-medium text-accent ring-1 ring-inset ring-accent/20",
        sizes[size],
        className,
      )}
    >
      {initialsOf(name)}
    </span>
  );
}
