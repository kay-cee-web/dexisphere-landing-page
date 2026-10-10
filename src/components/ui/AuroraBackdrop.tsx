import { cn } from "@/lib/cn";

type AuroraBackdropProps = {
  /** Where the grid is strongest: under a hero heading, or in the middle of a panel. */
  focus?: "top" | "center";
  /** Inner pages run it quieter than the home hero. */
  soft?: boolean;
};

/**
 * Hero and CTA backdrop: a blurred colour glow that drifts on desktop, over a
 * grid that fades out toward the edges. The parent needs `relative isolate overflow-hidden`.
 */
export function AuroraBackdrop({ focus = "top", soft }: AuroraBackdropProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className={cn(
          "bg-aurora absolute -top-1/4 left-1/2 h-[80vh] w-[90vw] -translate-x-1/2 rounded-full blur-3xl lg:animate-aurora",
          soft ? "opacity-50" : "opacity-90 dark:opacity-80",
        )}
      />
      <div className={cn("bg-grid absolute inset-0", focus === "top" ? "mask-fade" : "mask-fade-center")} />
    </div>
  );
}
