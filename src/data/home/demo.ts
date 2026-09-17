import type { DemoToolCall } from "@/types/demo";

/** The hero's scripted agent run. Tool names are the agent's real tools; the numbers are illustrative. */
export const HERO_DEMO = {
  agent: "Austin dentists outreach",
  model: "Claude Sonnet 5",
  task: "Find dental clinics in Austin with a website, verify their emails and draft an intro. Ask me before sending.",
  tools: [
    { name: "find_prospects", detail: "Google Places · dentists · Austin, TX", result: "42 found" },
    { name: "find_duplicates", detail: "Checked against your 3 lists", result: "4 merged" },
    { name: "create_list", detail: "Austin dentists · September", result: "38 leads" },
    { name: "verify_emails", detail: "38 addresses", result: "35 valid" },
    { name: "send_email", detail: "Intro draft for 35 recipients", result: "Needs your OK", tone: "warn" },
  ] satisfies DemoToolCall[],
  reply:
    "Your list is ready: 38 clinics, 35 with verified emails. I drafted a short intro that mentions each clinic by name. Say **send** when you're happy with it.",
  receipt: {
    area: "Prospecting · Outreach",
    stats: [
      { label: "Leads added", value: "38" },
      { label: "Verified", value: "35" },
      { label: "Sent", value: "0" },
    ],
    lines: ["List “Austin dentists · September” created", "38 leads added to the list", "Email draft waiting for approval"],
  },
  usage: "−1,240 tokens · 48,760 left",
};
