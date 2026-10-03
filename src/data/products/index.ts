import type { ProductSlug } from "./catalog";
import { ADVERTISING_CONTENT } from "./advertising";
import { MEETINGS_CONTENT } from "./meetings";
import { MONEY_CONTENT } from "./money";
import { NEW_BUSINESS_CONTENT } from "./new-business";
import { SOCIAL_MEDIA_CONTENT } from "./social-media";
import type { ProductContent } from "./types";

/** Page content for each product route, keyed by slug. Names, icons and tools live in `catalog`. */
export const PRODUCT_CONTENT: Record<ProductSlug, ProductContent> = {
  "new-business": NEW_BUSINESS_CONTENT,
  "social-media": SOCIAL_MEDIA_CONTENT,
  advertising: ADVERTISING_CONTENT,
  meetings: MEETINGS_CONTENT,
  money: MONEY_CONTENT,
};
