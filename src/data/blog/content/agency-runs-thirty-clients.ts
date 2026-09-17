/** PLACEHOLDER — invented customer story (agency, people, numbers) for the launch mock-up; replace before launch. */
import type { ContentBlock } from "@/types/content";

export const blocks: ContentBlock[] = [
  {
    type: "p",
    text: "Northlight is a four-person growth agency that runs outbound for 30 small-business clients: dental practices, trades, gyms and a handful of B2B software firms. A year ago, that roster needed a team twice the size. Here's how they restructured their week around Dexisphere agents.",
  },
  { type: "h2", text: "One agent per client" },
  {
    type: "p",
    text: "Their first decision was organisational, not technical: every client gets its own agent. The agent's instructions hold everything a new account manager would need to know, including the client's ideal customer, tone of voice, offer, and what never to say.",
  },
  {
    type: "code",
    title: "Client agent instructions (excerpt)",
    code: "You work for Brightside Dental's outreach. Only prospect private\ndental clinics in Greater Manchester. Tone: warm, brief, no jargon.\nAlways use the \"Brightside – prospects\" list. Never mention pricing.\nAsk before sending anything.",
  },
  {
    type: "p",
    text: "Because instructions travel with the agent, anyone on the team can pick up a client's agent and get consistent work out of it. When they want a fresh thread, New conversation copies the agent with the same instructions and model, so earlier conversations stay intact.",
  },
  { type: "h2", text: "Approvals on, always" },
  {
    type: "p",
    text: "Northlight's clients trust them with their reputations, so Ask before sending is switched on for every agent. The agent researches, builds the list, verifies addresses and drafts, then stops and shows the draft, recipients and checks.",
  },
  {
    type: "quote",
    text: "We went from writing 30 campaigns a week to reviewing 30 campaigns a week. That's a completely different job, and a much better one.",
    cite: "Maya Brennan, Founder, Northlight (placeholder)",
  },
  {
    type: "p",
    text: "When a client asks them to pause, they don't hunt through schedules. They flip that agent's sending switch off. The agent keeps preparing next week's drafts, but nothing goes out until the switch is back on.",
  },
  { type: "h2", text: "The Monday report" },
  {
    type: "p",
    text: "Every client gets a short Monday update. It used to take a morning of exporting and pasting. Now each account manager asks each agent the same question:",
  },
  {
    type: "code",
    title: "Monday prompt",
    code: "Summarise last week for this client: campaign performance,\nnew leads added, deals that moved stage, and calls booked.\nKeep it under 150 words, in plain English.",
  },
  {
    type: "p",
    text: "The agent pulls `campaign_performance`, `pipeline_summary` and `list_appointments`, and writes the update. The team checks the numbers against the receipts from the week's turns and the Records views before it goes to the client.",
  },
  {
    type: "callout",
    tone: "good",
    title: "What changed for Northlight",
    text: "Placeholder figures: from 14 to 30 clients with the same four people, and client reporting down from half a day to about an hour a week.",
  },
  { type: "h2", text: "Working from their phones" },
  {
    type: "p",
    text: "Two of the team pair their busiest client agents with WhatsApp. Between meetings they message an agent, \"any replies from yesterday's campaign?\", and get an answer without opening a laptop. Pairing takes a 6-character code, and they disconnect channels when an engagement ends.",
  },
  { type: "h2", text: "Their advice to other agencies" },
  {
    type: "ul",
    items: [
      "Write agent instructions like an onboarding doc for a new hire.",
      "Keep approvals on until you've reviewed at least a month of drafts.",
      "Give every client's leads their own list, so nothing crosses over.",
      "Use receipts as your audit trail when a client asks \"what did you do this week?\"",
    ],
  },
  {
    type: "p",
    text: "Running an agency? The Agency licence is built for this kind of workload. See [pricing](/pricing) or [talk to sales](/contact).",
  },
];
