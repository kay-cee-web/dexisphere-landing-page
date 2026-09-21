/** PLACEHOLDER — demo run figures (offer, URL, token usage) are sample values; replace before launch. */
import { Globe, Languages, LayoutTemplate, MessageSquare, MousePointerClick, Palette, PanelsTopLeft, PenLine, Rocket, Send } from "lucide-react";
import type { ProductContent } from "./types";

export const FUNNELS_CONTENT: ProductContent = {
  meta: {
    title: "Funnels",
    description: "AI agents that build landing pages, pop-ups and sticky bars from a short brief, and edit them when you ask in plain language.",
  },
  hero: {
    headline: "Landing pages from a two-line brief.",
    lede: "Describe the offer and who it's for. The agent builds the funnel, writes the copy and edits it in chat until it's right. Views and clicks show up in Records.",
    bullets: [
      "Landing pages, pop-ups and sticky bars built from a brief",
      "Headlines, sections and calls to action edited in plain language",
      "Publish on your own domain or a temporary link",
      "Views, clicks, unique visitors and CTR tracked per funnel",
    ],
  },
  demo: {
    agent: "Funnel builder",
    model: "gemini-3-pro",
    task: "Build a landing page for our free teeth-whitening consult with a booking button, then make the headline punchier.",
    tools: [
      { name: "list_funnels", detail: "Checking your existing funnels" },
      { name: "create_funnel", detail: "Landing page · Free whitening consult" },
      { name: "update_funnel", detail: "Headline and call to action" },
    ],
    reply: "Your landing page is ready to review. I cut the headline to seven words and pointed the button at your booking link.",
    visual: { kind: "funnel", title: "Whiter teeth, booked in two minutes.", url: "yourstudio.com/whitening" },
    receipt: {
      area: "Funnels",
      badge: { label: "Ready to review", tone: "violet" },
      stats: [
        { label: "Created", value: 1 },
        { label: "Updated", value: 1 },
        { label: "Published", value: 0 },
      ],
    },
    usage: "2,610 tokens · 71,300 left",
  },
  capabilities: {
    title: "From offer to live page without the page builder",
    lede: "The agent handles the building and the rewrites. You keep the final say.",
    items: [
      { title: "Built from a brief", description: "Describe the offer and the audience, and the agent builds a landing page, pop-up or sticky bar to match.", Icon: LayoutTemplate, meta: "create_funnel" },
      { title: "Edits in plain language", description: "Ask for a sharper headline, a new call to action or a different section, and the funnel is updated.", Icon: PenLine, meta: "update_funnel" },
      { title: "Every funnel in view", description: "Ask what's live and the agent lists your funnels, so edits land on the right one.", Icon: PanelsTopLeft, meta: "list_funnels" },
      { title: "Your domain or a temporary link", description: "Landing pages publish on your custom domain, or on a temporary URL while you set one up.", Icon: Globe },
      { title: "Views and clicks tracked", description: "Records shows views, clicks, unique visitors and CTR per funnel, with recent events by country and device.", Icon: MousePointerClick },
      { title: "Launch it in the same chat", description: "Once the page is ready, ask the agent to send it to a list by email or WhatsApp, with Ask before sending on.", Icon: Send, meta: "send_email · send_whatsapp" },
    ],
  },
  steps: {
    title: "Brief, build, publish",
    lede: "A new page for every offer, without starting from a blank template.",
    items: [
      { title: "Describe the offer", description: "Say what you're offering, who it's for and what visitors should do next.", Icon: MessageSquare },
      { title: "The agent builds it", description: "It creates the funnel with copy for your audience, then edits anything you point at.", Icon: LayoutTemplate },
      { title: "Review and publish", description: "Open the page, ask for changes in chat and publish when it's right. Its stats appear in Records.", Icon: Rocket },
    ],
  },
  useCases: {
    title: "Funnel work to hand to an agent",
    lede: "Tasks from the app's idea library, plus one that pairs a page with its launch.",
    items: [
      { title: "Funnel per new offer", task: "When I describe an offer, build its landing page, thank-you page and follow-up emails, then hand the set to me for review.", outcome: "A first version of the whole set to review instead of a blank page.", Icon: LayoutTemplate },
      { title: "Page plus launch email", task: "Build a landing page for my spring offer, then draft an email to my past clients list pointing to it and ask me before sending.", outcome: "The page and its announcement in one conversation, held for your go-ahead.", Icon: Send },
      { title: "Brand check before publish", task: "Before a funnel publishes, check its colors, fonts and logo against my brand and fix anything that drifts.", outcome: "Pages that look like your brand, not the template they started from.", Icon: Palette },
      { title: "Top funnel per market", task: "Rebuild my top funnel for each market I sell in, with the copy and imagery adapted rather than translated.", outcome: "A version of your best page for each market, written for the people in it.", Icon: Languages },
    ],
  },
  faqs: [
    { question: "What can the agent build?", answer: "Landing pages, pop-ups and sticky bars. Describe the offer and the audience and it creates the funnel with copy to match." },
    { question: "Where are the pages hosted?", answer: "Landing pages publish on your own custom domain once it's set up, or on a temporary URL until then." },
    { question: "How do I make changes?", answer: "Ask in the chat. The agent uses update_funnel to change headlines, sections and calls to action, and the receipt shows which funnel it updated." },
    { question: "How do I see how a funnel performs?", answer: "Open Funnels in Records. Each funnel shows views, clicks, unique visitors and CTR, plus its latest events with country, device and referrer." },
  ],
  cta: {
    title: "Your next landing page is one brief away.",
    lede: "Describe the offer. Your agent builds the page, edits it on request and leaves a receipt.",
  },
};
