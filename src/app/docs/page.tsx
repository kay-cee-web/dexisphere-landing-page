import type { Metadata } from "next";
import { DocArticle } from "@/components/docs/DocArticle";
import { DOC_PAGES } from "@/data/docs";
import { ROUTES } from "@/data/navigation";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(ROUTES.docs, {
  title: "Documentation",
  description:
    "Guides for Dexisphere: create AI agents for marketing and sales, read work receipts, link channels, set approvals and connect your senders.",
});

export default function DocsIntroductionPage() {
  return <DocArticle page={DOC_PAGES.introduction} />;
}
