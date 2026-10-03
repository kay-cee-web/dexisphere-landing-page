import type { DemoToolCall } from "@/types/demo";

/** The hero's scripted agent run. Step names are customer-facing labels, not exact tool names. Figures are illustrative. */
export const HERO_DEMO = {
  agent: "Weekly growth run",
  model: "Claude Sonnet 5",
  task: "Find new dental clinics in Lagos and start outreach, draft this week's posts, check what the ads spent, recap today's sales call and keep an eye on payments. WhatsApp me only if something needs me.",
  tools: [
    { name: "find_customers", detail: "Google Places · dentists · Lagos", result: "32 found" },
    { name: "send_email", detail: "Intro email · 32 clinics", result: "32 sent" },
    { name: "Draft the week's posts", detail: "LinkedIn + Instagram · 3 posts", result: "3 drafted" },
    { name: "Check ad spend", detail: "Meta Ads · this week", result: "Within budget" },
    { name: "Write up the call", detail: "Sales call with Brightsmile · 38 min", result: "2 tasks" },
    { name: "Check payments", detail: "Paystack + Stripe · last 24h", result: "1 failed", tone: "warn" },
  ] satisfies DemoToolCall[],
  reply:
    "All done. Outreach is out to 32 clinics, 3 posts are waiting for your approval, and the ads stayed within budget this week. One thing needs you: Brightsmile's **renewal payment** failed this morning — I've messaged you on WhatsApp.",
  receipt: {
    area: "New business · Social · Ads · Money",
    stats: [
      { label: "Leads", value: "32" },
      { label: "Drafts", value: "3" },
      { label: "Flagged", value: "1" },
    ],
    lines: [
      "32 clinics emailed",
      "3 posts drafted for approval",
      "Ad spend checked: within budget",
      "Call notes + 2 tasks saved",
    ],
  },
  approval: {
    channel: "Sent to your WhatsApp",
    question: "Brightsmile's renewal payment failed this morning. Email them a polite heads-up?",
    confirm: "Send email",
    decline: "Not now",
  },
  usage: "−2,180 tokens · 47,820 left",
};
