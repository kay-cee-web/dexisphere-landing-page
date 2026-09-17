import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { TERMS } from "@/data/legal/terms";

export const metadata: Metadata = {
  title: TERMS.title,
  description: TERMS.description,
};

export default function TermsPage() {
  return <LegalPage document={TERMS} />;
}
