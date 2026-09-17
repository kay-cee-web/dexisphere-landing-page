import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Card";
import { DEPARTMENTS, jobsIn, type JobMeta } from "@/data/careers/jobs";
import { ROUTES } from "@/data/navigation";
import { DepartmentPill } from "./DepartmentPill";

function RoleRow({ job }: { job: JobMeta }) {
  return (
    <li>
      <Link
        href={ROUTES.job(job.slug)}
        className="group grid gap-3 px-5 py-5 transition-colors hover:bg-raised sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:px-6"
      >
        <div className="grid gap-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-[17px] font-semibold text-ink">{job.title}</h4>
            <DepartmentPill department={job.department} />
          </div>
          <p className="text-[14px] leading-relaxed text-muted">{job.summary}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden className="size-3.5 text-faint" />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock aria-hidden className="size-3.5 text-faint" />
            {job.type}
          </span>
          <ArrowUpRight
            aria-hidden
            className="ml-auto size-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:ml-2"
          />
        </div>
      </Link>
    </li>
  );
}

/** Open roles grouped by department; each row links to its job page. */
export function OpenRoles() {
  return (
    <div className="grid gap-10">
      {DEPARTMENTS.map((department) => {
        const jobs = jobsIn(department);
        if (jobs.length === 0) return null;
        return (
          <Reveal key={department} as="section" className="grid gap-3">
            <div className="flex items-baseline justify-between gap-4 px-1">
              <h3 className="text-[15px] font-semibold text-ink">{department}</h3>
              <Eyebrow className="text-faint">
                {jobs.length} open {jobs.length === 1 ? "role" : "roles"}
              </Eyebrow>
            </div>
            <ul className="divide-y divide-line overflow-hidden rounded-[16px] border border-line bg-surface">
              {jobs.map((job) => (
                <RoleRow key={job.slug} job={job} />
              ))}
            </ul>
          </Reveal>
        );
      })}
    </div>
  );
}
