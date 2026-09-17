import { ArrowUpRight, Clock } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialIcons";
import { Reveal } from "@/components/motion/Reveal";
import { Card, Eyebrow } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { SmartLink } from "@/components/ui/SmartLink";
import { QUICK_ANSWERS, SUPPORT_HOURS } from "@/data/contact";

/** Beside the form: where we are and when, socials, and quick answers. */
export function ContactAside() {
  return (
    <div className="grid content-start gap-5">
      <Reveal delay={0.05}>
        <Card className="grid gap-4">
          <Eyebrow>Offices &amp; hours</Eyebrow>
          <ul className="grid divide-y divide-line">
            {SUPPORT_HOURS.map((office) => (
              <li key={office.city} className="grid gap-1 py-3 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="text-[15px] font-medium text-ink">{office.city}</span>
                  <span className="font-mono text-[12px] text-faint">{office.timeZone}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
                  <Clock aria-hidden className="size-3.5" />
                  {office.hours}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between gap-3 border-t border-dashed border-line pt-4">
            <span className="text-[13.5px] text-muted">Follow along</span>
            <SocialLinks />
          </div>
        </Card>
      </Reveal>
      <Reveal delay={0.1}>
        <Card className="grid gap-4">
          <div className="grid gap-1">
            <h2 className="text-[18px] font-semibold text-ink">Looking for a quick answer?</h2>
            <p className="text-[13.5px] text-muted">Most questions are already answered here.</p>
          </div>
          <ul className="grid gap-1">
            {QUICK_ANSWERS.map((item) => (
              <li key={item.label}>
                <SmartLink
                  href={item.href}
                  className="group -mx-2 flex items-center gap-3 rounded-[12px] p-2 transition-colors hover:bg-raised"
                >
                  <IconTile Icon={item.Icon} size="sm" tone="neutral" />
                  <span className="grid flex-1">
                    <span className="text-[14px] font-medium text-ink">{item.label}</span>
                    <span className="text-[12.5px] text-muted">{item.description}</span>
                  </span>
                  <ArrowUpRight aria-hidden className="size-4 text-faint transition-colors group-hover:text-accent" />
                </SmartLink>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </div>
  );
}
