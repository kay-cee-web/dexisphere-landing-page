/** PLACEHOLDER — demo run figures (angle counts, token usage) are sample values; replace before launch. */
import { BadgeDollarSign, ChartColumn, Eye, Lightbulb, Link2, Lock, MessageSquare, PenLine, Target, Users, Wallet } from "lucide-react";
import type { ProductContent } from "./types";

export const ADVERTISING_CONTENT: ProductContent = {
  meta: {
    title: "Advertising",
    description: "Connect your Meta, TikTok and LinkedIn ad accounts and Dexisphere watches the spend without you opening a single ads manager. Read-only: it reports, it doesn't spend.",
  },
  hero: {
    headline: "Know what your ads are spending, without opening an ads manager.",
    lede: "Connect your Meta, TikTok and LinkedIn ad accounts and it watches them, so the ad that's been running all week doesn't go another week unchecked. It reports. It doesn't spend. Changing budgets stays with you.",
    bullets: [
      "Meta, TikTok and LinkedIn ad accounts, plus Google Ads",
      "Read-only: it can't change a budget or launch a campaign",
      "Your payment processors beside it, so you see what came in",
      "Ad copy written from five angles when you need new ones",
    ],
  },
  demo: {
    agent: "Ads",
    model: "claude-sonnet-5",
    task: "Write five ads for the shoe repair offer, each from a different angle, and say who each one is for.",
    tools: [
      { name: "Read the offer", detail: "Same-week repairs · Brooklyn", result: "done" },
      { name: "Find the angles", detail: "Price, speed, care, trust, story", result: "5 angles" },
      { name: "Write the ads", detail: "Headline, body and call to action", result: "5 ads" },
    ],
    reply: "Five ads, five angles. The speed one is for people with an event this week; the care one is for anyone with boots they love. None of them are live. Pick the ones you want to run.",
    receipt: {
      area: "Advertising · copy",
      badge: { label: "Drafts", tone: "warn" },
      stats: [
        { label: "Angles", value: 5 },
        { label: "Ads", value: 5 },
        { label: "Launched", value: 0 },
      ],
    },
    usage: "1,780 tokens · 98,220 left",
  },
  capabilities: {
    title: "It watches. You decide.",
    lede: "Spend in one place, and nothing it can touch.",
    items: [
      { title: "Every ad account, one place", description: "Meta, TikTok and LinkedIn ad accounts ride along with the social accounts you connect. Google Ads comes through Google.", Icon: ChartColumn },
      { title: "Read-only, always", description: "It sees spend. It cannot change a budget, pause a campaign or launch one. Spending decisions stay with you.", Icon: Lock },
      { title: "Money beside the spend", description: "Your payment processors are connected too, so what the ads cost and what actually came in are a click apart.", Icon: Wallet },
      { title: "New angles on demand", description: "For one offer, it writes five ads that each sell it from a different angle, and says who each one is for.", Icon: Lightbulb },
      { title: "Copy in your voice", description: "Headlines and body copy that sound like the rest of your business, not like an ad.", Icon: PenLine },
      { title: "One permission", description: "Meta's single sign-in covers your Page, your Instagram and your ad account. Disconnect any time.", Icon: Link2 },
    ],
  },
  steps: {
    title: "Connected in a few minutes",
    lede: "No ads manager to learn. No dashboard to check.",
    items: [
      { title: "Connect your accounts", description: "Sign in to Meta, TikTok or LinkedIn once. The ad account comes with it, read-only.", Icon: Users },
      { title: "Ask what you want to know", description: "“What did the ads spend this week?” “Write me five new angles for the spring offer.”", Icon: MessageSquare },
      { title: "You make the call", description: "It reports and drafts. Budgets, pauses and launches stay in your hands.", Icon: Target },
    ],
  },
  useCases: {
    title: "What people use it for",
    lede: "Small jobs that never get done in an ads manager.",
    items: [
      { title: "Ad angles", task: "For one offer, write five ads that each sell it from a different angle, and say who each one is for.", outcome: "Fresh copy to test, without a blank page.", Icon: Lightbulb },
      { title: "Spend check", task: "Tell me what each ad account spent this week.", outcome: "The number you'd otherwise have to log in to find.", Icon: Eye },
      { title: "Revenue beside it", task: "Every Monday, total what came in this month in each currency, after fees.", outcome: "What the ads cost and what came in, side by side.", Icon: BadgeDollarSign },
      { title: "Top-performing copy", task: "Each quarter, find the subject lines and headlines that earned the most replies and show me the pattern behind them.", outcome: "What's worked before, feeding the next ad.", Icon: PenLine },
    ],
  },
  faqs: [
    { question: "Can it change my ad budgets?", answer: "No. Ad connections are read-only. It reports what's happening; budgets, pauses and launches stay with you." },
    { question: "Which ad platforms does it work with?", answer: "Meta (Facebook and Instagram), TikTok and LinkedIn ad accounts, which come with the matching social connection, and Google Ads through your Google account." },
    { question: "Do I need to connect each ad account separately?", answer: "Usually not. Meta's single sign-in covers your Page, the Instagram account linked to it and your Meta ad account. LinkedIn and TikTok work the same way." },
    { question: "Can it tell me which ads made money?", answer: "It reads your ad spend and, separately, your payment processors, so both numbers are in one place. It doesn't yet match an individual sale to the ad that brought it." },
  ],
  cta: {
    title: "Stop logging in to find out.",
    lede: "Connect your ad accounts read-only and see what they're spending, beside what's coming in.",
  },
};
