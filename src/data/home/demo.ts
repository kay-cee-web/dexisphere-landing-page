import type { DemoToolCall } from "@/types/demo";

/** The hero's scripted agent run. Step names are customer-facing labels, not exact tool names. Figures are illustrative. */
export const HERO_DEMO = {
  agent: "Monday morning",
  model: "Claude Sonnet 5",
  task: "Draft this week's posts, tell me how the ads did, sit in my 11:00 with Brightsmile and keep an eye on payments. Only WhatsApp me if something needs me.",
  tools: [
    { name: "Draft the week's posts", detail: "Instagram, LinkedIn, TikTok · in your voice", result: "6 drafts" },
    { name: "Read the ad accounts", detail: "Meta + TikTok Ads · last 7 days", result: "2 of 3 selling" },
    { name: "Sit in the call", detail: "Zoom · Brightsmile · 38 min", result: "Notes saved" },
    { name: "Keep your promises", detail: "Send the revised quote · Friday", result: "1 task" },
    { name: "Watch payments", detail: "Stripe + PayPal · last 24h", result: "1 failed", tone: "warn" },
    { name: "Message you", detail: "WhatsApp · only what needs you", result: "Sent" },
  ] satisfies DemoToolCall[],
  reply:
    "Morning's done. Six posts are drafted and waiting for your OK, two of the three ads are bringing in sales, and the Brightsmile call is written up. Your one promise, the revised quote, is a task for Friday. One thing needs you: their **renewal payment failed**, so I've messaged you on WhatsApp.",
  receipt: {
    area: "Social · Ads · Meetings · Money",
    stats: [
      { label: "Drafts", value: "6" },
      { label: "Tasks", value: "1" },
      { label: "Flagged", value: "1" },
    ],
    lines: [
      "6 posts waiting for your approval",
      "Ad report: 2 of 3 campaigns selling",
      "Brightsmile call notes saved",
      "Task: send the revised quote · Friday",
    ],
  },
  approval: {
    channel: "Sent to your WhatsApp",
    question: "Brightsmile's renewal payment failed this morning. Want me to draft them a polite heads-up?",
    confirm: "Draft it",
    decline: "I'll handle it",
  },
  usage: "−2,180 tokens · 47,820 left",
};
