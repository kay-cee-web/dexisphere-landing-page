import { ArrowDown, Briefcase, Clock, MapPin, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card, Eyebrow } from "@/components/ui/Card";
import type { JobMeta } from "@/data/careers/jobs";
import { CONTACT_EMAILS } from "@/lib/config";

/** The sticky "Role at a glance" card with the Apply button. */
export function RoleGlance({ job }: { job: JobMeta }) {
  const rows = [
    { label: "Department", value: job.department, Icon: Users },
    { label: "Location", value: job.location, Icon: MapPin },
    { label: "Type", value: job.type, Icon: Clock },
  ];

  return (
    <Card floating className="grid gap-5">
      <div className="flex items-center gap-2">
        <Briefcase aria-hidden className="size-4 text-accent" />
        <Eyebrow>Role at a glance</Eyebrow>
      </div>
      <dl className="grid gap-3">
        {rows.map(({ label, value, Icon }) => (
          <div key={label} className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-b-0 last:pb-0">
            <dt className="inline-flex items-center gap-2 text-[13px] text-faint">
              <Icon aria-hidden className="size-3.5" />
              {label}
            </dt>
            <dd className="text-right text-[14px] font-medium text-ink">{value}</dd>
          </div>
        ))}
      </dl>
      <ButtonLink href="#apply" block size="lg">
        Apply for this role <ArrowDown />
      </ButtonLink>
      <p className="text-center text-[12.5px] leading-relaxed text-faint">
        Or email <a href={`mailto:${CONTACT_EMAILS.careers}`} className="font-mono text-muted hover:text-ink">{CONTACT_EMAILS.careers}</a>
      </p>
    </Card>
  );
}
