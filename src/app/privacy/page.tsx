import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { PRIVACY } from "@/data/legal/privacy";

export const metadata: Metadata = {
  title: PRIVACY.title,
  description: PRIVACY.description,
};

export default function PrivacyPage() {
  return <LegalPage document={PRIVACY} />;
}
