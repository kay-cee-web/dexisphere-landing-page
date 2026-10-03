import { CORE_INTEGRATIONS } from "./core";
import { EMAIL_PLATFORM_INTEGRATIONS, PAYMENT_INTEGRATIONS } from "./platforms";
import { CHANNEL_INTEGRATIONS, SOCIAL_INTEGRATIONS, WORK_TOOL_INTEGRATIONS } from "./social";
import type { Integration, IntegrationCategory } from "./types";

export type { Integration, IntegrationCategory } from "./types";

export const INTEGRATION_CATEGORIES: IntegrationCategory[] = [
  "Google",
  "Email & calendar",
  "Messaging",
  "Prospect sources",
  "Email platforms",
  "Payments",
  "Social & ads",
  "Work tools",
  "Agent channels",
];

/**
 * The app's real connector catalogue (macrid-clone src/data/connectors + channels).
 * Adding one here also adds it to the Privacy Policy's integrations table.
 * Names must stay unique: they key the cards and the policy rows.
 */
export const INTEGRATIONS: Integration[] = [
  ...CORE_INTEGRATIONS,
  ...EMAIL_PLATFORM_INTEGRATIONS,
  ...PAYMENT_INTEGRATIONS,
  ...SOCIAL_INTEGRATIONS,
  ...WORK_TOOL_INTEGRATIONS,
  ...CHANNEL_INTEGRATIONS,
];
