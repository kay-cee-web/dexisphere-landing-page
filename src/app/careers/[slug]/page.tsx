import { ArrowLeft, Clock, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplySection } from "@/components/careers/ApplySection";
import { CareersCta } from "@/components/careers/CareersCta";
import { DepartmentPill } from "@/components/careers/DepartmentPill";
import { RoleGlance } from "@/components/careers/RoleGlance";
import { RoleSections } from "@/components/careers/RoleSections";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { PERKS } from "@/data/careers/company";
import { JOBS, jobBySlug } from "@/data/careers/jobs";
import { jobDetail } from "@/data/careers/roles";
import { ROUTES } from "@/data/navigation";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata(props: PageProps<"/careers/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const job = jobBySlug(slug);
  if (!job) return {};
  return pageMeta(ROUTES.job(job.slug), {
    title: `${job.title} · Careers`,
    description: `${job.summary} ${job.type}, ${job.location}.`,
  });
}

/** Six benefits recapped on every job page. */
const BENEFITS = PERKS.slice(0, 6);

export default async function JobPage(props: PageProps<"/careers/[slug]">) {
  const { slug } = await props.params;
  const job = jobBySlug(slug);
  const detail = jobDetail(slug);
  if (!job || !detail) notFound();

  return (
    <>
      <section className="relative isolate pb-8 pt-12 sm:pb-12 sm:pt-16">
        <div aria-hidden className="bg-glow absolute inset-x-0 top-0 -z-10 h-[460px] opacity-80" />
        <div aria-hidden className="bg-grid absolute inset-x-0 top-0 -z-10 h-[460px] opacity-40" />
        <Container width="default" className="grid gap-12">
          <Reveal className="grid max-w-3xl gap-5">
            <Link
              href={`${ROUTES.careers}#roles`}
              className="inline-flex w-fit items-center gap-1.5 text-[13.5px] font-medium text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft aria-hidden className="size-4" />
              Back to all roles
            </Link>
            <DepartmentPill department={job.department} className="w-fit" />
            <h1 className="text-[38px] font-semibold leading-[1.05] text-ink sm:text-[56px]">{job.title}</h1>
            <p className="text-[17px] leading-relaxed text-muted sm:text-[19px]">{job.summary}</p>
            <p className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden className="size-4 text-faint" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock aria-hidden className="size-4 text-faint" />
                {job.type}
              </span>
            </p>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
            <aside className="lg:col-start-2 lg:row-start-1">
              <div className="lg:sticky lg:top-24">
                <RoleGlance job={job} />
              </div>
            </aside>
            <div className="grid min-w-0 gap-14 lg:col-start-1 lg:row-start-1">
              <RoleSections detail={detail} benefits={BENEFITS} />
              <ApplySection role={job.title} />
            </div>
          </div>
        </Container>
      </section>
      <CareersCta
        title="Not quite the right fit?"
        lede="We have other open roles, and we always read thoughtful notes from people who'd make Dexisphere better."
      />
    </>
  );
}
