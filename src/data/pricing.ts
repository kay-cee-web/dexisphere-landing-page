import { BadgeCheck, Coins, CreditCard, KeyRound, TriangleAlert } from "lucide-react";
import type { PlanFeatureKey } from "@/data/plans";
import type { Feature, Step } from "@/types/marketing";

/** Comparison-table groups. Every PLAN_FEATURES key appears exactly once. */
export const COMPARISON_GROUPS: { title: string; keys: PlanFeatureKey[] }[] = [
  { title: "Outreach", keys: ["num_emails", "num_whatsapp", "num_sms", "num_email_verifications"] },
  { title: "Growth", keys: ["num_funnel_campaigns", "num_lead_search", "num_custom_domains"] },
  { title: "AI", keys: ["num_tokens"] },
  { title: "Team & brand", keys: ["num_teams", "remove_branding", "reseller"] },
];

/** "How tokens work": what a chat turn costs and what happens at zero. */
export const TOKEN_POINTS: Feature[] = [
  {
    Icon: Coins,
    title: "Each chat turn uses tokens",
    description:
      "Tokens pay for the AI work in each turn you send. Every reply shows what the turn charged and what's left, so you always know where you stand.",
  },
  {
    Icon: KeyRound,
    title: "Bring your own AI key",
    description:
      "Add an OpenAI, Anthropic or Gemini key to your workspace and turns run on your key instead, at your provider's rates.",
  },
  {
    Icon: TriangleAlert,
    title: "Running out loses nothing",
    description:
      "When the balance hits zero the agent tells you and links to upgrade. Your agents, conversations, lists and records stay exactly where they were.",
  },
];

/** "How licences work": checkout → code → redeem. */
export const LICENCE_STEPS: Step[] = [
  {
    Icon: CreditCard,
    title: "Buy at checkout",
    description: "Pick a plan and pay once. No subscription is created and nothing renews.",
  },
  {
    Icon: KeyRound,
    title: "Get your licence code",
    description: "Checkout gives you a licence code straight away. Keep it somewhere safe.",
  },
  {
    Icon: BadgeCheck,
    title: "Redeem it in the app",
    description: "Open the plans page, choose Redeem code and paste it in. New allowances apply immediately.",
  },
];
