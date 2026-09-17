import { headingsOf } from "@/components/content/ContentBlocks";
import { DOC_ORDER, docHref } from "./nav";
import { ACCOUNT } from "./pages/account";
import { AGENTS } from "./pages/agents";
import { APPROVALS } from "./pages/approvals";
import { CHANNELS } from "./pages/channels";
import { CONNECTORS } from "./pages/connectors";
import { INTRODUCTION } from "./pages/introduction";
import { QUICKSTART } from "./pages/quickstart";
import { TOKENS_AND_LIMITS } from "./pages/tokens-and-limits";
import { TROUBLESHOOTING } from "./pages/troubleshooting";
import { WORK_RECEIPTS } from "./pages/work-receipts";
import type { DocPage, DocSearchEntry, DocSlug } from "./types";

export const DOC_PAGES: Record<DocSlug, DocPage> = {
  introduction: INTRODUCTION,
  quickstart: QUICKSTART,
  account: ACCOUNT,
  agents: AGENTS,
  "work-receipts": WORK_RECEIPTS,
  channels: CHANNELS,
  approvals: APPROVALS,
  connectors: CONNECTORS,
  "tokens-and-limits": TOKENS_AND_LIMITS,
  troubleshooting: TROUBLESHOOTING,
};

const isDocSlug = (value: string): value is DocSlug => value in DOC_PAGES;

export const docBySlug = (slug: string): DocPage | null => (isDocSlug(slug) ? DOC_PAGES[slug] : null);

/** Every page except the introduction, which renders at /docs. */
export const ARTICLE_SLUGS = DOC_ORDER.filter((slug) => slug !== "introduction");

/** Previous and next pages in sidebar order. */
export function neighboursOf(slug: DocSlug) {
  const index = DOC_ORDER.indexOf(slug);
  const at = (i: number) => (i >= 0 && i < DOC_ORDER.length ? DOC_PAGES[DOC_ORDER[i]] : null);
  return { previous: at(index - 1), next: at(index + 1) };
}

/** The search index handed to the client dialog: titles, descriptions and headings only. */
export const DOC_SEARCH_INDEX: DocSearchEntry[] = DOC_ORDER.map((slug) => {
  const page = DOC_PAGES[slug];
  return {
    href: docHref(slug),
    title: page.title,
    description: page.description,
    group: page.group,
    headings: headingsOf(page.blocks).map(({ id, text }) => ({ id, text })),
  };
});
