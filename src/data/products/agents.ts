/** PLACEHOLDER — demo run figures (city, list name, counts, token usage) are sample values; replace before launch. */
import { Bot, CalendarClock, ChartColumn, Hand, KeyRound, Lightbulb, MessageCircle, Radar, Receipt, Send, SquareKanban, Wrench } from "lucide-react";
import type { ProductContent } from "./types";

export const AGENTS_CONTENT: ProductContent = {
  meta: {
    title: "AI Agents",
    description: "Describe a marketing or sales task in a sentence. A Dexisphere agent does it with real tools, asks before sending and leaves a receipt.",
  },
  hero: {
    headline: "Describe the job. An agent does it.",
    lede: "Agents run on real tools across prospecting, outreach, CRM, funnels and analytics. They do the work instead of explaining it, and show you exactly what changed.",
    bullets: [
      "Created from a plain-language task, or one from the idea library",
      "A work receipt after every turn, linked to the records it touched",
      "Ask before sending, plus a sending switch you control",
      "Chat in the app, on WhatsApp or Telegram, or from the browser extension",
    ],
  },
  demo: {
    agent: "Leeds growth agent",
    model: "gpt-5.2",
    task: "Every Monday at 9, find new gyms in Leeds, add them to a list, and draft an intro email for me to approve.",
    tools: [
      { name: "check_connections", detail: "Gmail connected · Places on the shared key" },
      { name: "find_prospects", detail: "gyms · Leeds, UK" },
      { name: "create_list", detail: "Leeds gyms · week 38" },
      { name: "add_to_list", detail: "Adding 24 leads" },
      { name: "schedule_automation", detail: "Every Monday 09:00" },
    ],
    reply: "First run done: 24 gyms are in Leeds gyms · week 38 and the intro email is drafted. From next Monday this runs at 9:00 and waits for your go-ahead before sending.",
    receipt: {
      area: "This turn",
      badge: { label: "+24 leads", tone: "good" },
      stats: [
        { label: "Leads", value: 24 },
        { label: "Lists", value: 1 },
        { label: "Scheduled", value: 1 },
        { label: "Sent", value: 0 },
      ],
    },
    usage: "3,420 tokens · paid by your own key",
  },
  capabilities: {
    title: "Agents that act, not just answer",
    lede: "The parts that make an agent safe to hand real work to.",
    items: [
      { title: "Real tools", description: "Agents search leads, build lists, move deals, book appointments, send campaigns and build funnels, all on the server.", Icon: Wrench, meta: "find_prospects · create_deal · send_email" },
      { title: "Work receipts", description: "After each turn the app compares your records before and after, and lists every lead, deal, task and campaign that changed.", Icon: Receipt },
      { title: "Ask before sending", description: "The agent shows the draft, the recipients and the checks, then waits for Send, Don't send or your changes.", Icon: Hand },
      { title: "Your channels", description: "Talk to an agent on WhatsApp, Telegram or the browser extension. Pair with a six-character code and disconnect anytime.", Icon: MessageCircle },
      { title: "Your choice of model", description: "Pick Claude, GPT or Gemini per agent, and bring your own AI key if you'd rather pay the provider directly.", Icon: KeyRound },
      { title: "Scheduled work", description: "Ask for something every Monday or every morning and the agent schedules it. List or cancel automations in chat.", Icon: CalendarClock, meta: "schedule_automation · list_automations" },
    ],
  },
  steps: {
    title: "From a sentence to finished work",
    lede: "No workflow builder. The task is the setup.",
    items: [
      { title: "Describe the task", description: "Type what you'd do by hand today, or start from a ready-made task in the idea library.", Icon: Lightbulb },
      { title: "The agent runs it", description: "It picks the tools, does the work across your workspace and asks before anything is sent.", Icon: Bot },
      { title: "Read the receipt, then repeat", description: "Check what changed, follow the links to the records, and ask for it on a schedule if it should happen again.", Icon: Receipt },
    ],
  },
  useCases: {
    title: "One agent, every part of the funnel",
    lede: "Ready-made tasks from the idea library, across the areas agents work in.",
    items: [
      { title: "Weekly prospect run", task: "Every Monday, search my niche and area, score the businesses I could sell to, and file the best of them into a fresh list.", outcome: "Prospecting: a fresh, scored list at the start of every week.", Icon: Radar },
      { title: "Campaign launch", task: "When I pick a list, build the campaign from it and queue it through my connected mailbox with tracking on.", outcome: "Outreach: a campaign queued from your own mailbox, with checks first.", Icon: Send },
      { title: "Stalled deal review", task: "Every Monday, flag the deals that haven't moved in two weeks and tell me what the next step on each should be.", outcome: "CRM: stuck deals surfaced with a next step for each.", Icon: SquareKanban },
      { title: "Monday performance brief", task: "Every Monday, sum up last week's sends, replies and closed deals in one short report I can read in a minute.", outcome: "Analytics: last week in a one-minute read.", Icon: ChartColumn },
    ],
  },
  faqs: [
    { question: "What is a Dexisphere agent?", answer: "An assistant you create from a plain-language task. It runs on the server with real tools for your records, lists, pipeline, calendar, outreach, funnels and automations, so it does the work instead of describing it." },
    { question: "Which AI models can I use?", answer: "Each agent can run on a Claude, GPT or Gemini model. You can also add your own AI key, in which case your provider pays for the model usage." },
    { question: "Can I talk to an agent outside the app?", answer: "Yes. Connect WhatsApp, Telegram or the browser extension from the agent's settings. You get a six-character code that's valid for 15 minutes: send LINK and the code, or scan the QR code, and the channel is paired." },
    { question: "How do tokens work?", answer: "Each chat turn costs tokens. Every reply shows how many it used and how many you have left, and if you run out you'll see a link to upgrade your plan." },
    { question: "Can I keep separate conversations?", answer: "Starting a new conversation makes a copy of the agent with the same instructions and model, so earlier conversations stay exactly as they were." },
    { question: "How do I know what an agent did?", answer: "Every turn ends with a work receipt listing what changed in your records, with links. If something changed elsewhere during the turn, the receipt says so." },
  ],
};
