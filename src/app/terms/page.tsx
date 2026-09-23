import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { TERMS } from "@/data/legal/terms";
import { ROUTES } from "@/data/navigation";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(ROUTES.terms, {
  title: TERMS.title,
  description: TERMS.description,
});

export default function TermsPage() {
  return <LegalPage document={TERMS} />;
}
