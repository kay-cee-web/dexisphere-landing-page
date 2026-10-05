import { CalendarClock, MessageSquare, Plug, Table2 } from "lucide-react";

/** The hero's scripted agent run. Step names are customer-facing labels, not exact tool names. Figures are illustrative. */
export const HERO_DEMO = {
  url: "app.dexisphere.com/agents",
  /** The app's own sections, for the window's sidebar. The first is the open one. */
  nav: [
    { label: "Agents", Icon: MessageSquare },
    { label: "Records", Icon: Table2 },
    { label: "Automations", Icon: CalendarClock },
    { label: "Connectors", Icon: Plug },
  ],
  model: "Claude Sonnet 5",
  task: "Draft this week's posts, tell me how the ads did, sit in my 11:00 with Brightsmile and keep an eye on payments. Only WhatsApp me if something needs me.",
  /** The "Agent run" card: one row per job, ticked off in order. */
  steps: ["Posts", "Ads", "Call notes", "Promises", "Payments", "WhatsApp"],
  reply:
    "Morning's done. Six posts are drafted and waiting for your OK, two of the three ads are bringing in sales, and the Brightsmile call is written up. One thing needs you: their **renewal payment failed**, so I've messaged you on WhatsApp.",
  tokens: 2180,
  usage: "−2,180 tokens · 47,820 left",
};
