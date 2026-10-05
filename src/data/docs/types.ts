import type { ContentBlock } from "@/types/content";

export type DocGroup = "Getting started" | "Using agents" | "Platform";

export type DocSlug =
  | "introduction"
  | "quickstart"
  | "account"
  | "agents"
  | "work-receipts"
  | "channels"
  | "approvals"
  | "connectors"
  | "tokens-and-limits"
  | "troubleshooting";

/** One docs article. `blocks` render through ContentBlocks; h2/h3 feed "On this page". */
export type DocPage = {
  slug: DocSlug;
  title: string;
  description: string;
  group: DocGroup;
  blocks: ContentBlock[];
  /** Cards shown under the article, before previous/next. */
  nextSteps?: DocSlug[];
};

/** What the client-side search needs, built on the server. The site-wide search uses its own groups. */
export type SearchEntry = {
  href: string;
  title: string;
  description: string;
  group: string;
  headings: { id: string; text: string }[];
};

export type DocSearchEntry = SearchEntry & { group: DocGroup };
