import type { ContentBlock } from "@/types/content";

export type LegalSection = { title: string; blocks: ContentBlock[] };

/** A legal page: numbered sections with a plain-language summary on top. */
export type LegalDocument = {
  title: string;
  description: string;
  /** Display date, e.g. "September 1, 2026". */
  lastUpdated: string;
  /** ISO date for the <time> element. */
  lastUpdatedIso: string;
  summary: string[];
  sections: LegalSection[];
};
