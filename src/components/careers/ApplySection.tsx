import { Lock } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Card";
import { ROUTES } from "@/data/navigation";
import { ApplicationForm } from "./ApplicationForm";

/** The #apply anchor: application form plus the privacy note. */
export function ApplySection({ role }: { role: string }) {
  return (
    <Reveal as="section">
      <div id="apply" className="grid scroll-mt-24 gap-6 rounded-[20px] border border-line bg-surface p-6 sm:p-8">
        <div className="grid gap-2">
          <Eyebrow className="text-accent">Apply</Eyebrow>
          <h2 className="text-[26px] font-semibold leading-tight text-ink">Apply for {role}</h2>
          <p className="text-[15px] leading-relaxed text-muted">
            Fill this in and we&apos;ll open your email app with everything ready to send. A person on the team reads every
            application.
          </p>
        </div>
        <ApplicationForm role={role} />
        <p className="flex items-start gap-2 border-t border-line pt-5 text-[13px] leading-relaxed text-faint">
          <Lock aria-hidden className="mt-0.5 size-3.5 shrink-0" />
          <span>
            We only use the details you send to assess your application. Read our{" "}
            <Link href={ROUTES.privacy} className="font-medium text-muted underline underline-offset-4 hover:text-ink">
              privacy policy
            </Link>
            .
          </span>
        </p>
      </div>
    </Reveal>
  );
}
