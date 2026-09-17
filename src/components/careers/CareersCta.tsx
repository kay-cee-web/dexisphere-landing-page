import { ArrowRight, Mail } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ROUTES } from "@/data/navigation";
import { CONTACT_EMAILS } from "@/lib/config";

type CareersCtaProps = { title?: string; lede?: string };

/** The shared closing CTA with careers actions: open roles and a direct email instead of sign-up. */
export function CareersCta({
  title = "Don't see your role? Write to us anyway.",
  lede = "We hire for judgement and craft more than job titles. If you'd make Dexisphere better, tell us how.",
}: CareersCtaProps) {
  return (
    <CtaSection
      title={title}
      lede={lede}
      assurances={[]}
      actions={
        <>
          <ButtonLink href={`${ROUTES.careers}#roles`} size="lg">
            See open roles <ArrowRight />
          </ButtonLink>
          <ButtonLink href={`mailto:${CONTACT_EMAILS.careers}`} size="lg" variant="secondary">
            <Mail /> {CONTACT_EMAILS.careers}
          </ButtonLink>
        </>
      }
    />
  );
}
