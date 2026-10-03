/** PLACEHOLDER — demo run figures (call length, task counts, token usage, names) are sample values; replace before launch. */
import { CalendarCheck, ClipboardList, Clock, Eye, FileText, Link2, ListChecks, MessageSquare, NotebookPen, Timer, UserCheck, Video } from "lucide-react";
import type { ProductContent } from "./types";

export const MEETINGS_CONTENT: ProductContent = {
  meta: {
    title: "Meetings",
    description: "Dexisphere joins your Zoom, Teams and Google Meet calls, writes up what was decided, and turns the things you promised into tasks, so nothing said on a call gets lost.",
  },
  hero: {
    headline: "It remembers what you promised.",
    lede: "You're on a call. Dexisphere is in it, listening. Halfway through, you say you'll send the revised quote by Friday. You'll forget. It won't.",
    bullets: [
      "Joins Zoom, Microsoft Teams and Google Meet",
      "What was decided, written up the moment the call ends",
      "Your own commitments become tasks, not everyone else's",
      "Announces itself on every call. Never a silent guest.",
    ],
  },
  demo: {
    agent: "Notetaker",
    model: "claude-sonnet-5",
    task: "Join my 11:00 with Shoe Lab and make sure I don't forget anything I promise.",
    tools: [
      { name: "Join the call", detail: "Google Meet · Shoe Lab", result: "34 min" },
      { name: "Write it up", detail: "Decisions and action items", result: "2 decided" },
      { name: "create_task", detail: "Send revised quote · Friday", result: "1 task" },
    ],
    reply: "Decided: they move to the agency plan from November and keep their own domains. Three action items. Only one is yours — send the revised quote by Friday — so that's the one I've made a task. The other two are theirs.",
    receipt: {
      area: "Meetings · Shoe Lab",
      badge: { label: "Notes saved", tone: "good" },
      stats: [
        { label: "Minutes", value: 34 },
        { label: "Decisions", value: 2 },
        { label: "Your tasks", value: 1 },
      ],
    },
    usage: "2,460 tokens · 97,540 left",
  },
  capabilities: {
    title: "Everything said on the call, nothing you have to write",
    lede: "It listens so you can talk.",
    items: [
      { title: "It joins the call", description: "Paste the link and it joins now, or at the time you set. Zoom, Teams and Google Meet.", Icon: Video },
      { title: "It writes it up", description: "A short summary of what was decided, saved to your notes the moment the call ends.", Icon: FileText },
      { title: "Your promises become tasks", description: "The things you said you'd do are added to your task list with their dates. Everyone else's stay theirs.", Icon: ListChecks },
      { title: "It covers your calendar", description: "One click sends it to the meetings already on your Google or Outlook calendar. Never automatically: you choose.", Icon: CalendarCheck },
      { title: "It preps you first", description: "Half an hour before a meeting, a summary of everything you've sent that contact and everything they've done since.", Icon: Clock },
      { title: "Out in the open", description: "It joins as Dexisphere Notetaker, announces itself and shows in the participant list. There's no silent mode.", Icon: Eye },
    ],
  },
  steps: {
    title: "Talk. It takes the notes.",
    lede: "Nothing to install on the call. Nothing to write up after.",
    items: [
      { title: "Send it to the call", description: "Paste a meeting link, or cover the meetings already on your calendar.", Icon: Link2 },
      { title: "Have the conversation", description: "It listens, and announces itself so everyone knows it's there.", Icon: MessageSquare },
      { title: "Read the notes", description: "Decisions in your notes, your action items in your tasks. Ask it to draft the follow-up.", Icon: NotebookPen },
    ],
  },
  useCases: {
    title: "What people hand over first",
    lede: "Real tasks from the app's idea library.",
    items: [
      { title: "Meeting prep", task: "Half an hour before a meeting, summarise everything we've sent that contact and everything they've done since.", outcome: "Walk in knowing where things stand.", Icon: Timer },
      { title: "Meeting minutes with owners", task: "After a meeting, turn my notes into minutes with decisions, owners and dates, and create the tasks.", outcome: "Minutes nobody had to take.", Icon: ClipboardList },
      { title: "Weekly team update", task: "Every Friday, draft the update from my deals and tasks: what closed, what's stuck and what's next.", outcome: "The update written from what actually happened.", Icon: UserCheck },
      { title: "Handover before time off", task: "Before I'm away, write the handover: open deals, promised follow-ups and who to call about each.", outcome: "Nothing promised gets dropped while you're out.", Icon: ListChecks },
    ],
  },
  faqs: [
    { question: "Which meeting apps does it work with?", answer: "Zoom, Microsoft Teams and Google Meet. Paste a link, or send it to the meetings on your Google or Outlook calendar." },
    { question: "Will people on the call know it's there?", answer: "Yes. It joins as Dexisphere Notetaker, announces itself and appears in the participant list. There is no silent mode, and there won't be." },
    { question: "Does it join every meeting automatically?", answer: "No. You send it to a call, or press Cover my upcoming meetings. It never joins a meeting you didn't send it to." },
    { question: "Whose action items become tasks?", answer: "Yours. The things you said you'd do become tasks with their dates. Other people's commitments stay in the notes." },
    { question: "How much does it cost?", answer: "Every workspace gets 300 free meeting minutes a month. After that, recorded time uses tokens from your plan, based on how long the call actually ran." },
  ],
  cta: {
    title: "Never lose a promise to a call again.",
    lede: "Send it to your next meeting and read the notes when you hang up.",
  },
};
