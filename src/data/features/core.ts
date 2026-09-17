import { CalendarClock, ChartColumn, Hand, KeyRound, MessageCircle, Power, Receipt, Wrench } from "lucide-react";
import type { Feature } from "@/types/marketing";

/** "The core eight" on /features: what every agent gets. */
export const CORE_FEATURES: Feature[] = [
  {
    title: "Real tools",
    description: "Agents search leads, build lists, move deals, book appointments, send campaigns and build funnels themselves.",
    Icon: Wrench,
    meta: "45 tools · 7 areas",
  },
  {
    title: "Work receipts",
    description: "After every turn, a receipt lists what changed in your records, each line linked to the record itself.",
    Icon: Receipt,
    meta: "before → after",
  },
  {
    title: "Ask before sending",
    description: "The agent shows the draft, the recipients and the checks, then waits for your go-ahead.",
    Icon: Hand,
    meta: "Send · Don't send · Ask for changes",
  },
  {
    title: "Sending switch",
    description: "Stop an agent from sending in one click. It keeps researching and drafting while it's off.",
    Icon: Power,
    meta: "sent / blocked · 24h",
  },
  {
    title: "Channels",
    description: "Message your agent from WhatsApp, Telegram or the browser extension, paired with a short code.",
    Icon: MessageCircle,
    meta: "WhatsApp · Telegram · extension",
  },
  {
    title: "Scheduled work",
    description: "Ask for a task every Monday or every morning. The agent schedules it, lists it and cancels it on request.",
    Icon: CalendarClock,
    meta: "schedule_automation",
  },
  {
    title: "Model choice",
    description: "Pick Claude, GPT or Gemini for each agent, and bring your own AI key if you prefer.",
    Icon: KeyRound,
    meta: "Claude · GPT · Gemini",
  },
  {
    title: "Records & analytics",
    description: "See the lists, leads, deals, campaigns and funnels agents work on, with analytics over any range.",
    Icon: ChartColumn,
    meta: "7 · 30 · 90 days",
  },
];
