import type { LucideIcon } from "lucide-react";

export type IntegrationCategory =
  | "Google"
  | "Email & calendar"
  | "Messaging"
  | "Prospect sources"
  | "Email platforms"
  | "Payments"
  | "Social & ads"
  | "Work tools"
  | "Agent channels";

export type Integration = {
  name: string;
  category: IntegrationCategory;
  /**
   * The brand's logo in /public/integrations. `invertOnDark` for black marks that vanish on the dark theme;
   * `darkSrc` when the brand ships its own dark-theme version (inverting would swap its colours).
   */
  logo?: { src: string; invertOnDark?: boolean; darkSrc?: string };
  /** Fallback for connectors without a brand of their own. */
  Icon?: LucideIcon;
  description: string;
  /** How it connects, in the app's words. */
  auth: "OAuth" | "API key" | "Pairing code" | "In the Dexisphere app";
  /** What Dexisphere can read or do once connected. Listed in the Privacy Policy, so keep it accurate. */
  access: string;
};

/** A logo file in /public/integrations. */
export const logo = (file: string, options: { invertOnDark?: boolean; darkFile?: string } = {}): Integration["logo"] => ({
  src: `/integrations/${file}`,
  invertOnDark: options.invertOnDark,
  darkSrc: options.darkFile && `/integrations/${options.darkFile}`,
});
