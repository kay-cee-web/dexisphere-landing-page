/** PLACEHOLDER — demo run figures (amounts, token usage) are sample values; replace before launch. */
import { BadgeCheck, Bell, CalendarClock, CircleAlert, CreditCard, Lock, MessageSquare, Receipt, RotateCcw, Search, TrendingUp, Wallet } from "lucide-react";
import type { ProductContent } from "./types";

export const MONEY_CONTENT: ProductContent = {
  meta: {
    title: "Money",
    description: "Dexisphere connects to Stripe, PayPal, Paystack, Flutterwave, Paddle and Lemon Squeezy read-only. A payment lands, you know. A payment fails, you know. It can see your sales; it can't move money.",
  },
  hero: {
    headline: "It watches what comes in.",
    lede: "Connected to your payment processors, read-only. It can see your sales. It can't move money. A payment lands, you know. A payment fails, you know. And once a week, the summary you'd never sit down and write yourself.",
    bullets: [
      "Stripe, PayPal, Paystack, Flutterwave, Paddle and Lemon Squeezy",
      "Alerts the moment a payment lands, fails or is disputed",
      "Every currency, after fees, in one Monday summary",
      "Read-only: it can't send, refund or charge",
    ],
  },
  demo: {
    agent: "Money",
    model: "claude-sonnet-5",
    task: "What came in this week, and how does it compare with last week?",
    tools: [
      { name: "Read Stripe", detail: "Payments · last 7 days", result: "14 payments" },
      { name: "Read Paystack", detail: "Payments · last 7 days", result: "38 payments" },
      { name: "Read Flutterwave", detail: "Payments · last 7 days", result: "3 payments" },
    ],
    reply: "55 payments came in this week, against 35 last week. Paystack did most of the work. No failed payments, and one refund on Tuesday.",
    visual: {
      kind: "chart",
      title: "This week by processor (payments)",
      bars: [
        { label: "Stripe", value: 14 },
        { label: "Paystack", value: 38 },
        { label: "Flutterwave", value: 3 },
      ],
    },
    receipt: {
      area: "Money · this week",
      badge: { label: "+57%", tone: "good" },
      stats: [
        { label: "Payments", value: 55 },
        { label: "Last week", value: 35 },
        { label: "Refunds", value: 1 },
      ],
    },
    usage: "1,420 tokens · 98,580 left",
  },
  capabilities: {
    title: "It can see money. It can't move it.",
    lede: "Everything you'd want to know from your payment dashboards, without opening them.",
    items: [
      { title: "Every processor, one feed", description: "Stripe, PayPal, Paystack, Flutterwave, Paddle and Lemon Squeezy, in every currency they take.", Icon: CreditCard },
      { title: "A payment lands, you know", description: "Alerts arrive the moment money comes in, above whatever amount you set.", Icon: Bell },
      { title: "A payment fails, you know", description: "Failed payments, refunds, disputes and failed renewals, flagged as they happen.", Icon: CircleAlert },
      { title: "The weekly summary", description: "Every Monday, what came in, in each currency, after fees, and where the month lands at this pace.", Icon: TrendingUp },
      { title: "Did they pay?", description: "Name a client or an amount and it checks your payment accounts and tells you whether, and when.", Icon: Search },
      { title: "Read-only, always", description: "It cannot send, refund, charge or change anything. The keys it holds only read.", Icon: Lock },
    ],
  },
  steps: {
    title: "Connected before your next payment lands",
    lede: "A read-only key from each processor. That's the setup.",
    items: [
      { title: "Add a read-only key", description: "From Stripe, Paystack or whichever you use. Each one is tested, then stored encrypted.", Icon: Wallet },
      { title: "Say what you want to hear about", description: "“Tell me about any big payment.” “Every Monday, how was the week?”", Icon: MessageSquare },
      { title: "Hear about it", description: "Alerts when money moves, a summary once a week, and silence when there's nothing to say.", Icon: BadgeCheck },
    ],
  },
  useCases: {
    title: "What people hand over first",
    lede: "Real tasks from the app's idea library.",
    items: [
      { title: "Revenue this month", task: "Every Monday, total what came in this month in each currency, after fees, and say where the month lands at this pace.", outcome: "The number you'd never sit down and add up.", Icon: CalendarClock },
      { title: "New payment alert", task: "Every hour, check my payment accounts and tell me about any payment above the amount I set: who paid and what for.", outcome: "Big payments, the moment they land.", Icon: Bell },
      { title: "Refunds and disputes", task: "Every Monday, list last week's refunds and disputes, what each one cost and who they were for.", outcome: "The money going back out, before it becomes a pattern.", Icon: RotateCcw },
      { title: "Did they pay?", task: "When I name a client or an amount, check my payment accounts and tell me whether and when it was paid.", outcome: "An answer without opening three dashboards.", Icon: Receipt },
    ],
  },
  faqs: [
    { question: "Can it move my money?", answer: "No. Payment connections are read-only. It can see your sales, refunds and payouts. It cannot send, refund, charge or change anything." },
    { question: "Which payment processors does it work with?", answer: "Stripe, PayPal, Paystack, Flutterwave, Paddle and Lemon Squeezy." },
    { question: "How are my keys kept?", answer: "Each key is tested when you add it, stored encrypted, and never shown back in the app. For Stripe, a restricted read-only key is all it needs." },
    { question: "Does it connect to my bank?", answer: "Not today. It reads your payment processors, which is where your sales are. Bank balances aren't connected." },
  ],
  cta: {
    title: "Know when money moves.",
    lede: "Add a read-only key and hear about payments the moment they land.",
  },
};
