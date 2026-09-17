import { Check, Plus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import type { JobDetail } from "@/data/careers/jobs";
import { cn } from "@/lib/cn";
import type { Feature } from "@/types/marketing";

function BulletSection({ title, items, muted }: { title: string; items: string[]; muted?: boolean }) {
  const Icon = muted ? Plus : Check;
  return (
    <Reveal as="section" className="grid gap-5">
      <h2 className="text-[24px] font-semibold leading-tight text-ink">{title}</h2>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-muted">
            <span
              aria-hidden
              className={cn(
                "mt-1 grid size-5 shrink-0 place-items-center rounded-full",
                muted ? "bg-raised text-faint ring-1 ring-inset ring-line" : "bg-accent-soft text-accent",
              )}
            >
              <Icon className="size-3" strokeWidth={2.5} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Intro, responsibilities, requirements, nice-to-haves and a benefits recap for a job page. */
export function RoleSections({ detail, benefits }: { detail: JobDetail; benefits: Feature[] }) {
  return (
    <div className="grid gap-14">
      <Reveal>
        <p className="text-[17px] leading-[1.75] text-muted sm:text-[18px]">{detail.intro}</p>
      </Reveal>
      <BulletSection title="What you'll do" items={detail.responsibilities} />
      <BulletSection title="What we're looking for" items={detail.requirements} />
      <BulletSection title="Nice to have" items={detail.niceToHave} muted />
      <Reveal as="section" className="grid gap-5">
        <div className="grid gap-2">
          <Eyebrow className="text-accent">Benefits</Eyebrow>
          <h2 className="text-[24px] font-semibold leading-tight text-ink">What you get</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="flex items-start gap-3 rounded-[14px] border border-line bg-surface p-4">
              <IconTile Icon={benefit.Icon} size="sm" />
              <span className="grid gap-0.5">
                <span className="text-[14.5px] font-medium text-ink">{benefit.title}</span>
                <span className="text-[13.5px] leading-relaxed text-muted">{benefit.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
