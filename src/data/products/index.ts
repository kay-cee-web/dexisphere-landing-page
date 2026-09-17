import type { ProductSlug } from "./catalog";
import { AGENTS_CONTENT } from "./agents";
import { ANALYTICS_CONTENT } from "./analytics";
import { CRM_CONTENT } from "./crm";
import { FUNNELS_CONTENT } from "./funnels";
import { OUTREACH_CONTENT } from "./outreach";
import { PROSPECTING_CONTENT } from "./prospecting";
import type { ProductContent } from "./types";

/** Page content for each product route, keyed by slug. Names, icons and tools live in `catalog`. */
export const PRODUCT_CONTENT: Record<ProductSlug, ProductContent> = {
  agents: AGENTS_CONTENT,
  prospecting: PROSPECTING_CONTENT,
  outreach: OUTREACH_CONTENT,
  crm: CRM_CONTENT,
  funnels: FUNNELS_CONTENT,
  analytics: ANALYTICS_CONTENT,
};
