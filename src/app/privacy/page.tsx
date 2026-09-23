import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { PRIVACY } from "@/data/legal/privacy";
import { ROUTES } from "@/data/navigation";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(ROUTES.privacy, {
  title: PRIVACY.title,
  description: PRIVACY.description,
});

export default function PrivacyPage() {
  return <LegalPage document={PRIVACY} />;
}
