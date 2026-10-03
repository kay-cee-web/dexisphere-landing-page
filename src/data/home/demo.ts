import type { DemoToolCall } from "@/types/demo";

/** The hero's scripted agent run. Tool names and numbers are illustrative. */
export const HERO_DEMO = {
  agent: "Weekly growth run",
  model: "Claude Sonnet 5",
  task: "Find new dental clinics in Austin and start outreach, post this week's content, check the ads, recap today's sales call and keep an eye on cash. WhatsApp me only if something needs me.",
  tools: [
    { name: "find_prospects", detail: "Google Places · dentists · Austin, TX", result: "32 found" },
    { name: "send_outreach", detail: "Email + SMS sequence · 32 clinics", result: "32 started" },
    { name: "publish_posts", detail: "LinkedIn + Instagram · 3 posts", result: "3 posted" },
    { name: "review_ads", detail: "Meta Ads · 4 campaigns", result: "1 paused" },
    { name: "join_meeting", detail: "Sales call with Brightsmile · 38 min", result: "5 action items" },
    { name: "check_cashflow", detail: "Stripe + bank · last 24h", result: "1 flagged", tone: "warn" },
  ] satisfies DemoToolCall[],
  reply:
    "All done. Outreach is live to 32 clinics, 3 posts are up, and I paused an ad spending $40/day with no clicks. One thing needs you: invoice **#1042** is 9 days overdue — I've messaged you on WhatsApp.",
  receipt: {
    area: "Growth · Content · Ads · Money",
    stats: [
      { label: "Leads", value: "32" },
      { label: "Posts", value: "3" },
      { label: "Flagged", value: "1" },
    ],
    lines: [
      "32 clinics added to outreach",
      "3 posts published",
      "Ad “Spring promo” paused",
      "Meeting notes + 5 tasks saved",
    ],
  },
  approval: {
    channel: "Sent to your WhatsApp",
    question: "Invoice #1042 ($2,400) is 9 days overdue. Send a reminder?",
    confirm: "Send reminder",
    decline: "Not now",
  },
  usage: "−2,180 tokens · 47,820 left",
};
