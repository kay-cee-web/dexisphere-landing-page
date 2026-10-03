import { BellOff, Hand, KeyRound, MessageCircle, Power, Radar, Receipt, Users } from "lucide-react";
import type { Feature } from "@/types/marketing";

/** "The core eight" on /features: what every agent gets. */
export const CORE_FEATURES: Feature[] = [
  {
    title: "It only speaks when needed",
    description: "A short morning briefing of what needs you, not thirty notifications. On a day when nothing needs a decision, it sends nothing at all.",
    Icon: BellOff,
    meta: "WhatsApp · Telegram · Slack",
  },
  {
    title: "It drafts, you approve",
    description: "Emails, posts and replies are written for you to check. It shows the draft, the recipients and the checks, then waits.",
    Icon: Hand,
    meta: "Send · Don't send · Ask for changes",
  },
  {
    title: "A receipt for every job",
    description: "After every turn, a receipt lists what changed, each line linked to the record itself.",
    Icon: Receipt,
    meta: "before → after",
  },
  {
    title: "A switch for sending",
    description: "Stop an agent from sending in one click. It keeps researching and drafting while it's off.",
    Icon: Power,
    meta: "sent / blocked · 24h",
  },
  {
    title: "Talk to it anywhere",
    description: "Message your agent from WhatsApp, Telegram or the browser extension, the way you'd message someone who works for you.",
    Icon: MessageCircle,
    meta: "WhatsApp · Telegram · extension",
  },
  {
    title: "Run one. Or run a team.",
    description: "One agent for new business, one for content, one watching operations. Each with its own name, instructions and chat.",
    Icon: Users,
    meta: "work at the same time",
  },
  {
    title: "It watches your work tools",
    description: "Jira, GitHub and Shopify, read-only. When something changes, it tells you where you already read: Slack, Telegram or WhatsApp.",
    Icon: Radar,
    meta: "Jira · GitHub · Shopify",
  },
  {
    title: "Your choice of model",
    description: "Pick Claude, GPT or Gemini for each agent, or bring your own OpenAI, Anthropic or Google key and run on your own credits.",
    Icon: KeyRound,
    meta: "Claude · GPT · Gemini",
  },
];
