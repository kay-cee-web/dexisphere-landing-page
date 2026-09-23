import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { REFUND_POLICY } from "@/data/legal/refund";

export const metadata: Metadata = {
  title: REFUND_POLICY.title,
  description: REFUND_POLICY.description,
};

export default function RefundPolicyPage() {
  return <LegalPage document={REFUND_POLICY} />;
}
