import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { REFUND_POLICY } from "@/data/legal/refund";
import { ROUTES } from "@/data/navigation";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(ROUTES.refunds, {
  title: REFUND_POLICY.title,
  description: REFUND_POLICY.description,
});

export default function RefundPolicyPage() {
  return <LegalPage document={REFUND_POLICY} />;
}
