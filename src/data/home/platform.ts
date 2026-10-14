import { Cpu, Hand, MessageCircle, ReceiptText, Wrench, type LucideIcon } from "lucide-react";

export type BentoId = "tools" | "receipts" | "approvals" | "channels" | "models";

export const PLATFORM_CARDS: { id: BentoId; Icon: LucideIcon; eyebrow: string; title: string; description: string }[] = [
  {
    id: "tools",
    Icon: Wrench,
    eyebrow: "40+ real tools",
    title: "It does the work, not just the talking",
    description:
      "It runs on our servers with the tools you'd click through by hand: finding customers, lists, deals, tasks, appointments, email, SMS, WhatsApp and scheduled jobs.",
  },
  {
    id: "receipts",
    Icon: ReceiptText,
    eyebrow: "Work receipts",
    title: "A receipt for every turn",
    description: "See exactly which leads were added, deals moved and campaigns sent, each linked to the record.",
  },
  {
    id: "approvals",
    Icon: Hand,
    eyebrow: "Ask before sending",
    title: "Nothing goes out without your OK",
    description: "Review the draft, recipients and checks, then say send. Or flip the sending switch off entirely.",
  },
  {
    id: "channels",
    Icon: MessageCircle,
    eyebrow: "Channels",
    title: "Message your agent anywhere",
    description: "Pair WhatsApp, Telegram or the browser extension with a six-character code.",
  },
  {
    id: "models",
    Icon: Cpu,
    eyebrow: "Your choice of model",
    title: "Claude, GPT or Gemini",
    description: "Pick the model per agent, or bring your own AI key so turns run on your account.",
  },
];

/** A brand mark in /public/integrations; `invert` for black marks that vanish on the dark theme. */
export type BrandMark = { name: string; src: string; invert?: boolean };

const mark = (name: string, file: string, invert?: boolean): BrandMark => ({ name, src: `/integrations/${file}`, invert });

/** The tools card's orbit: connectors the agent works through, inner ring first. */
export const ORBIT_INNER = [
  mark("Gmail", "gmail.svg"),
  mark("WhatsApp", "whatsapp.svg"),
  mark("Google Calendar", "google-calendar.svg"),
  mark("Google Sheets", "google-sheets.svg"),
];

export const ORBIT_OUTER = [
  mark("Stripe", "stripe.svg"),
  mark("Slack", "slack.svg"),
  mark("Shopify", "shopify.svg"),
  mark("LinkedIn", "linkedin.svg"),
  mark("Instagram", "instagram.svg"),
  mark("Telegram", "telegram.svg"),
  mark("PayPal", "paypal.svg"),
  mark("Google Maps", "google-maps.svg"),
];

/** Real tool names, floating beside the orbit. */
export const TOOL_CHIPS = ["find_prospects", "create_deal", "send_whatsapp", "schedule_automation"];

export const MODEL_ROWS = [
  { family: "Anthropic", model: "Claude Sonnet 5", note: "Best balance", logo: mark("Claude", "claude.svg") },
  { family: "OpenAI", model: "GPT-5.6 Terra", note: "Balanced", logo: mark("OpenAI", "openai.svg", true) },
  { family: "Google", model: "Gemini 3 Flash", note: "Fast & efficient", logo: mark("Gemini", "gemini.svg") },
];

/** Marks the receipts, approvals and channels mocks show. */
export const MARKS = {
  whatsapp: mark("WhatsApp", "whatsapp.svg"),
  telegram: mark("Telegram", "telegram.svg"),
  gmail: mark("Gmail", "gmail.svg"),
  sheets: mark("Google Sheets", "google-sheets.svg"),
};
