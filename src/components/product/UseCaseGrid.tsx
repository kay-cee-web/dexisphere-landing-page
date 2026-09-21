import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { IconTile } from "@/components/ui/IconTile";
import type { UseCase } from "@/data/products/types";

/** Four real tasks from the idea library: what you type, and what you get back. */
export function UseCaseGrid({ items }: { items: UseCase[] }) {
  return (
    <Stagger className="grid gap-5 md:grid-cols-2">
      {items.map((useCase) => (
        <StaggerItem
          as="article"
          key={useCase.title}
          className="grid h-full content-start gap-5 rounded-[18px] border border-line bg-surface p-6 sm:p-7"
        >
          <div className="flex items-center gap-3">
            <IconTile Icon={useCase.Icon} tone="violet" />
            <h3 className="text-[18px] font-semibold text-ink">{useCase.title}</h3>
          </div>
          <figure className="grid gap-2 rounded-[12px] border border-line bg-raised px-4 py-3">
            <figcaption className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-faint">
              Tell your agent
            </figcaption>
            <blockquote className="text-[14.5px] leading-relaxed text-ink">&ldquo;{useCase.task}&rdquo;</blockquote>
          </figure>
          <p className="text-[14.5px] leading-relaxed text-muted">{useCase.outcome}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
