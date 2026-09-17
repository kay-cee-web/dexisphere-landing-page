/** PLACEHOLDER — demo run figures (rates, deal values, campaign names, token usage) are sample values; replace before launch. */
import { CalendarClock, ChartColumn, ChartNoAxesCombined, Layers, MessageSquare, MousePointerClick, Receipt, Scale, Search, Trophy, TrendingUp, Users } from "lucide-react";
import type { ProductContent } from "./types";

export const ANALYTICS_CONTENT: ProductContent = {
  meta: {
    title: "Analytics",
    description: "Ask an AI agent how your campaigns, funnels and pipeline are doing and get a short, plain-language answer with the next step.",
  },
  hero: {
    headline: "Ask how it's going. Get a straight answer.",
    lede: "Agents read your email, SMS and WhatsApp campaigns and your pipeline, then tell you what worked, what didn't and where to put the next campaign.",
    bullets: [
      "Opens, clicks and delivery across every channel",
      "Deal counts and value by pipeline stage",
      "Short weekly briefs on a schedule",
      "Read-only by default: the receipt shows nothing changed",
    ],
  },
  demo: {
    agent: "Weekly reporter",
    model: "claude-haiku-4-5",
    task: "How did last month's campaigns do, and where does the pipeline stand? Keep it short.",
    tools: [
      { name: "list_campaigns", detail: "Email, SMS and WhatsApp · last 30 days" },
      { name: "campaign_performance", detail: "Opens, clicks and delivery per campaign" },
      { name: "pipeline_summary", detail: "Deals and value by stage" },
    ],
    reply: "Email carried the month: the Spring offer opened best at 48%. SMS delivered 97%. You have 18 open deals worth $62,400, and 5 of them are in Proposal.",
    visual: {
      kind: "chart",
      title: "Open rate by campaign · 30 days",
      bars: [
        { label: "Spring", value: 48 },
        { label: "Recall", value: 39 },
        { label: "Promo", value: 31 },
        { label: "Win-back", value: 44 },
      ],
    },
    receipt: {
      area: "Analytics",
      badge: { label: "Read only", tone: "neutral" },
      stats: [
        { label: "Campaigns", value: 7 },
        { label: "Open deals", value: 18 },
        { label: "Changed", value: 0 },
      ],
    },
    usage: "1,120 tokens · 64,180 left",
  },
  capabilities: {
    title: "Reports you'd otherwise build in a spreadsheet",
    lede: "The agent reads the same numbers you'd export, and does the reading for you.",
    items: [
      { title: "Campaign performance", description: "Open rate, click rate and unsubscribes for email campaigns, and delivery for SMS, campaign by campaign.", Icon: ChartColumn, meta: "campaign_performance" },
      { title: "Pipeline summaries", description: "Deal counts and value per stage, with the deals worth a look called out.", Icon: ChartNoAxesCombined, meta: "pipeline_summary" },
      { title: "Every channel together", description: "Email, SMS and WhatsApp campaigns read side by side, so comparisons don't need three tabs.", Icon: Layers, meta: "list_campaigns" },
      { title: "Who got what", description: "See the recipients of any campaign when a number needs explaining.", Icon: Users, meta: "campaign_recipients" },
      { title: "Funnel stats in Records", description: "Views, clicks, unique visitors and CTR for each funnel, with events by country and device.", Icon: MousePointerClick },
      { title: "Reports on a schedule", description: "Ask for a Monday brief and the agent schedules it, so the summary is waiting when the week starts.", Icon: CalendarClock, meta: "schedule_automation" },
    ],
  },
  steps: {
    title: "A question in, an answer out",
    lede: "No dashboards to configure and no filters to remember.",
    items: [
      { title: "Ask a question", description: "“Which channel got the most replies?” or “What's stuck in Proposal?” Ask it the way you'd ask a colleague.", Icon: MessageSquare },
      { title: "The agent reads the numbers", description: "It pulls campaign and pipeline data with its reporting tools. Nothing is changed.", Icon: Search },
      { title: "Get the answer and a next step", description: "A short summary with what to do next, and a receipt confirming it only read.", Icon: Receipt },
    ],
  },
  useCases: {
    title: "Reporting tasks that work end to end today",
    lede: "Every one of these is marked ready in the app's idea library.",
    items: [
      { title: "Monday performance brief", task: "Every Monday, sum up last week's sends, replies and closed deals in one short report I can read in a minute.", outcome: "One short read to start the week, instead of an hour in dashboards.", Icon: CalendarClock },
      { title: "Channel comparison", task: "Each month, compare replies and closed deals per channel and tell me where to put the next campaign.", outcome: "A clear call on where the next campaign should go.", Icon: Scale },
      { title: "Underperformance breakdown", task: "When a campaign underperforms, break down what likely caused it and what I should change first.", outcome: "The likely cause and the first fix, while the campaign is still fresh.", Icon: TrendingUp },
      { title: "Top-performing copy", task: "Each quarter, find the subject lines and headlines that earned the most replies and show me the pattern behind them.", outcome: "The patterns behind your best copy, ready to reuse.", Icon: Trophy },
    ],
  },
  faqs: [
    { question: "What can the agent report on?", answer: "Email, SMS and WhatsApp campaigns, SMS delivery, your deal pipeline and your funnels. It reads them with tools like campaign_performance, pipeline_summary and list_campaigns." },
    { question: "Will asking for a report change anything?", answer: "No. Reporting tools only read, and the work receipt under the reply confirms that nothing in your records changed." },
    { question: "Can I get a report every week?", answer: "Yes. Ask the agent to send you a brief on a schedule and it creates an automation. Ask it to list or cancel automations whenever you like." },
    { question: "Is there a dashboard as well?", answer: "Yes. Analytics in Records shows campaign performance over the last 7, 30 or 90 days or all time, and each funnel has its own stats page." },
  ],
  cta: {
    title: "Get the Monday report without writing it.",
    lede: "Ask your agent how things are going. It reads the numbers and tells you what to do next.",
  },
};
