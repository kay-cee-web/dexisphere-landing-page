import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cn } from "@/lib/cn";
import type { Step } from "@/types/marketing";

/** Numbered steps joined by a line. 3 or 4 across on desktop, stacked on phones. */
export function StepsList({ steps }: { steps: Step[] }) {
  return (
    <Stagger
      as="ol"
      className={cn("relative grid gap-6 sm:grid-cols-2", steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}
    >
      <span aria-hidden className="absolute left-6 right-6 top-6 hidden h-px bg-line lg:block" />
      {steps.map((step, index) => (
        <StaggerItem as="li" key={step.title} className="relative grid content-start gap-4">
          <span className="relative grid size-12 place-items-center rounded-full border border-line bg-surface font-mono text-[13px] text-accent shadow-float">
            {step.Icon ? <step.Icon aria-hidden className="size-5" strokeWidth={1.75} /> : String(index + 1).padStart(2, "0")}
          </span>
          <div className="grid gap-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">Step {index + 1}</p>
            <h3 className="text-[19px] font-semibold text-ink">{step.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-muted">{step.description}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
