export type BentoId = "tools" | "receipts" | "approvals" | "channels" | "models";

export const PLATFORM_CARDS: { id: BentoId; eyebrow: string; title: string; description: string }[] = [
  {
    id: "tools",
    eyebrow: "40+ real tools",
    title: "It does the work, not just the talking",
    description:
      "Agents run on our servers with the same tools you click through by hand: prospect search, lists, leads, deals, tasks, appointments, email, SMS, WhatsApp, funnels and automations.",
  },
  {
    id: "receipts",
    eyebrow: "Work receipts",
    title: "A receipt for every turn",
    description: "See exactly which leads were added, deals moved and campaigns sent, each linked to the record.",
  },
  {
    id: "approvals",
    eyebrow: "Ask before sending",
    title: "Nothing goes out without your OK",
    description: "Review the draft, recipients and checks, then say send. Or flip the sending switch off entirely.",
  },
  {
    id: "channels",
    eyebrow: "Channels",
    title: "Message your agent anywhere",
    description: "Pair WhatsApp, Telegram or the browser extension with a six-character code.",
  },
  {
    id: "models",
    eyebrow: "Your choice of model",
    title: "Claude, GPT or Gemini",
    description: "Pick the model per agent, or bring your own AI key so turns run on your account.",
  },
];

/** A cross-section of the agent's real tool names, by area. */
export const TOOL_CHIPS: { area: string; tools: string[] }[] = [
  { area: "Prospecting", tools: ["find_prospects", "score_leads", "find_duplicates"] },
  { area: "CRM", tools: ["create_deal", "move_deal_stage", "book_appointment"] },
  { area: "Outreach", tools: ["send_email", "send_whatsapp", "verify_emails"] },
  { area: "Funnels", tools: ["create_funnel", "update_funnel"] },
  { area: "Automation", tools: ["schedule_automation", "check_connections"] },
];

export const MODEL_ROWS = [
  { family: "Anthropic", model: "Claude Sonnet 5", note: "Best balance" },
  { family: "OpenAI", model: "GPT-5.6 Terra", note: "Balanced" },
  { family: "Google", model: "Gemini 3 Flash", note: "Fast & efficient" },
];
