import Image from "next/image";
import type { ReactNode } from "react";
import type { BrandMark } from "@/data/home/platform";
import { cn } from "@/lib/cn";

/** The picture at the top of a bento card: a lit, gridded well the visual sits in. */
export function BentoStage({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate h-60 overflow-hidden rounded-[16px] border border-line bg-ground sm:h-64",
        className,
      )}
    >
      <div aria-hidden className="bg-grid mask-fade-center absolute inset-0 -z-10 opacity-70" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
      />
      {children}
    </div>
  );
}

/** A brand logo on a white tile, the way app icons sit on a dock. */
export function MarkTile({ mark, className, imageClassName }: { mark: BrandMark; className?: string; imageClassName?: string }) {
  return (
    <span
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-[12px] border border-line bg-surface shadow-surface",
        className,
      )}
    >
      <MarkImage mark={mark} className={cn("size-5", imageClassName)} />
    </span>
  );
}

export function MarkImage({ mark, className }: { mark: BrandMark; className?: string }) {
  return (
    <Image
      src={mark.src}
      alt={mark.name}
      width={40}
      height={40}
      unoptimized
      className={cn("object-contain", mark.invert && "dark:invert", className)}
    />
  );
}
