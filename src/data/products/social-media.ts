/** PLACEHOLDER — demo run figures (post counts, token usage) are sample values; replace before launch. */
import { CalendarDays, CalendarRange, Check, Hand, Layers, MessageSquare, PenLine, Recycle, Ruler, Send, Sparkles, Users } from "lucide-react";
import type { ProductContent } from "./types";

export const SOCIAL_MEDIA_CONTENT: ProductContent = {
  meta: {
    title: "Social media",
    description: "Dexisphere drafts the week's posts in your voice, shaped for each platform, and waits for your approval. Nothing goes out in your name that you haven't seen.",
  },
  hero: {
    headline: "Your social accounts, kept going.",
    lede: "Most business owners know they should post consistently. Almost nobody does, because it's three jobs: thinking of something to say, making it fit each platform, and remembering to put it out. Dexisphere takes the first two off you.",
    bullets: [
      "Captions in your voice, shaped for each platform",
      "Monday morning, the week is drafted and waiting",
      "Read them, change what you want, approve",
      "Facebook, Instagram, LinkedIn, X, YouTube and TikTok",
    ],
  },
  demo: {
    agent: "Content",
    model: "claude-sonnet-5",
    task: "Plan this week's posts around the new booking page. LinkedIn, Instagram and X. Hold them for me.",
    tools: [
      { name: "Plan the week", detail: "3 themes · Mon, Wed, Fri", result: "planned" },
      { name: "Write for LinkedIn", detail: "Longer, first person", result: "3 drafts" },
      { name: "Write for Instagram", detail: "Caption and hashtags", result: "3 drafts" },
      { name: "Write for X", detail: "Fits the limit, one thread", result: "3 drafts" },
    ],
    reply: "The week is drafted: nine posts across three platforms, one theme a day. A LinkedIn post doesn't read like an Instagram caption, so I haven't written them the same way. They're waiting for you.",
    receipt: {
      area: "Social · this week",
      badge: { label: "Waiting for you", tone: "warn" },
      stats: [
        { label: "Drafted", value: 9 },
        { label: "Platforms", value: 3 },
        { label: "Posted", value: 0 },
      ],
    },
    approval: true,
    usage: "3,040 tokens · 96,960 left",
  },
  capabilities: {
    title: "Three jobs. It does the first two.",
    lede: "Something to say and something that fits. You keep the last word.",
    items: [
      { title: "It writes the posts", description: "Captions in your voice, sized and shaped for each platform. A LinkedIn post doesn't read like an Instagram caption, and it won't write them the same way.", Icon: PenLine },
      { title: "It plans the month", description: "Ask for a month of content and it plans the month: themes, dates, hooks and formats per network.", Icon: CalendarRange },
      { title: "Or just the one post", description: "Ask for one post about the thing that just happened, and it writes that instead.", Icon: Sparkles },
      { title: "You approve", description: "Monday morning the week is drafted and waiting. Nothing goes out in your name that you haven't seen.", Icon: Hand },
      { title: "One piece, many posts", description: "Share an article or a recording and it turns it into posts, a newsletter and a short script, each in your voice.", Icon: Recycle },
      { title: "It learns your voice", description: "From your best emails and pages it writes the voice guide every new post follows.", Icon: Ruler },
    ],
  },
  steps: {
    title: "A week of posts before your first coffee",
    lede: "No content calendar to maintain. No blank page on a Thursday.",
    items: [
      { title: "Connect your accounts", description: "Facebook, Instagram, LinkedIn, X, YouTube and TikTok. One at a time, with your permission.", Icon: Users },
      { title: "Say what you're about", description: "“Plan the month.” “One post about today's launch.” Plain language, no builder.", Icon: MessageSquare },
      { title: "Read and approve", description: "The drafts wait for you. Change what you want and approve the rest.", Icon: Check },
    ],
  },
  useCases: {
    title: "What people hand over first",
    lede: "Real tasks from the app's idea library.",
    items: [
      { title: "Post drafts in my voice", task: "When I share an idea, write it as a LinkedIn post, an X thread and an Instagram caption, ready to paste.", outcome: "One idea, three platforms, none of them sounding the same.", Icon: Layers },
      { title: "Monthly content calendar", task: "At the start of each month, plan the month's posts per network: themes, dates, hooks and formats.", outcome: "The month planned before it starts.", Icon: CalendarDays },
      { title: "Repurpose one piece", task: "When I share an article or a recording, turn it into posts, a newsletter and a short script, each in my voice.", outcome: "Every good thing you make, used more than once.", Icon: Recycle },
      { title: "Updates to your channel", task: "When a post is approved, share it to my Telegram channel and the team's Slack.", outcome: "Your own channels kept up to date, without copy and paste.", Icon: Send },
    ],
  },
  faqs: [
    { question: "Will it post things I haven't seen?", answer: "No. Posts are drafted and held for your approval. Nothing goes out in your name that you haven't said yes to." },
    { question: "Which platforms does it work with?", answer: "Facebook, Instagram, LinkedIn, X, YouTube and TikTok. Each one connects separately, with your permission, and can be disconnected in a click." },
    { question: "Does it publish straight to each network?", answer: "Not yet. Today it drafts and plans the posts for you to approve and publish, and it can post updates to a Telegram channel or Slack you run. Publishing to each network directly needs each platform's review, which is under way." },
    { question: "Will every post sound the same?", answer: "No. It shapes each post for the platform it's going to, and works from a voice guide built from your own writing." },
    { question: "Does it make the images too?", answer: "Not yet. It writes the posts and can describe the image each one needs, so whoever makes them knows what to make." },
  ],
  cta: {
    title: "Have next week drafted by Monday.",
    lede: "Connect your accounts, say what you're about, and approve what it writes.",
  },
};
