/** PLACEHOLDER — demo run figures (deal names, amounts, dates, token usage) are sample values; replace before launch. */
import { ArrowRight, Calendar, ChartNoAxesCombined, Contact, CopyCheck, ListChecks, MessageSquare, Receipt, SquareKanban, Timer } from "lucide-react";
import type { ProductContent } from "./types";

export const CRM_CONTENT: ProductContent = {
  meta: {
    title: "CRM",
    description: "AI agents that create and move deals, add tasks, book appointments and keep leads current, with a receipt for every change.",
  },
  hero: {
    headline: "A pipeline that updates itself.",
    lede: "Tell an agent what happened on a call or in a reply. It creates the deal, moves the stage, adds the follow-up and books the meeting, then shows you exactly what changed.",
    bullets: [
      "Deals created and moved through your pipeline stages",
      "Tasks with a type, priority and due date, attached to the deal",
      "Appointments booked and rescheduled, with clashes caught",
      "A receipt linking every record it touched",
    ],
  },
  demo: {
    agent: "Pipeline assistant",
    model: "gpt-5.2",
    task: "Northside Dental wants a demo. Add a deal for them, move Harbor Physio to Proposal, and book Northside a call on Thursday at 10.",
    tools: [
      { name: "create_deal", detail: "Northside Dental · $4,800 · Qualification" },
      { name: "move_deal_stage", detail: "Harbor Physio → Proposal" },
      { name: "create_task", detail: "Send demo agenda · due Wed · High" },
      { name: "book_appointment", detail: "Thu 10:00 · 30 min · Northside Dental" },
    ],
    reply: "Done. Northside Dental is in Qualification at $4,800, Harbor Physio is in Proposal, and the demo is booked for Thursday at 10:00 with a prep task the day before.",
    receipt: {
      area: "CRM",
      badge: { label: "4 changes", tone: "accent" },
      stats: [
        { label: "Deals", value: 1 },
        { label: "Moved", value: 1 },
        { label: "Tasks", value: 1 },
        { label: "Booked", value: 1 },
      ],
    },
    usage: "1,380 tokens · 88,420 left",
  },
  capabilities: {
    title: "The CRM chores, handled in a sentence",
    lede: "Deals, tasks, appointments and leads stay current because keeping them current is no longer your job.",
    items: [
      { title: "Deals that move", description: "Create deals with an amount and close date, and move them from Prospecting through Qualification, Proposal and Negotiation to Closing.", Icon: SquareKanban, meta: "create_deal · move_deal_stage" },
      { title: "Tasks tied to deals", description: "Calls, emails, meetings and follow-ups with a priority and due date, attached to the deal they belong to.", Icon: ListChecks, meta: "create_task · complete_task" },
      { title: "Appointments booked", description: "Book, list and reschedule appointments with the lead attached, and catch clashes before they happen.", Icon: Calendar, meta: "book_appointment · reschedule_appointment" },
      { title: "Leads kept current", description: "Lead statuses and record details are updated as conversations move on, not at the end of the quarter.", Icon: Contact, meta: "update_lead_status · update_record" },
      { title: "Clean records", description: "Duplicate leads are found and merged so every contact has one history.", Icon: CopyCheck, meta: "find_duplicates · merge_duplicates" },
      { title: "Pipeline at a glance", description: "Ask where things stand and get deal counts and value per stage in plain language.", Icon: ChartNoAxesCombined, meta: "pipeline_summary · list_deals" },
    ],
  },
  steps: {
    title: "Say what happened. The records follow.",
    lede: "No forms and no dragging cards between columns.",
    items: [
      { title: "Tell it what happened", description: "Paste a reply, sum up a call or list what needs to move. Plain language is enough.", Icon: MessageSquare },
      { title: "The agent updates the records", description: "It creates and moves deals, adds tasks and books appointments using the same CRM you see in Records.", Icon: ArrowRight },
      { title: "Check the receipt", description: "Every deal, task and appointment it touched is listed under the reply and links to its Records page.", Icon: Receipt },
    ],
  },
  useCases: {
    title: "CRM work agents already do",
    lede: "From the idea library in the app: send one as it is or make it yours.",
    items: [
      { title: "Deal stage upkeep", task: "As deals move, create them, shift them between stages, and keep the next action and close date current.", outcome: "A pipeline that reflects this week, not last month.", Icon: SquareKanban },
      { title: "Stalled deal review", task: "Every Monday, flag the deals that haven't moved in two weeks and tell me what the next step on each should be.", outcome: "A short Monday list of stuck deals, each with a suggested next step.", Icon: Timer },
      { title: "Warm reply to deal", task: "When a prospect replies with interest, create the deal, set its stage, and put the follow-up task on my calendar.", outcome: "Interest turns into a deal and a task before it has time to cool off.", Icon: ArrowRight },
      { title: "Pre-call briefings", task: "An hour before a meeting, summarise everything we've sent that contact and everything they've done since.", outcome: "Walk into every call knowing what they've seen and what they said.", Icon: Calendar },
    ],
  },
  faqs: [
    { question: "Which CRM does the agent work in?", answer: "The CRM built into your workspace: lists, leads, companies, deals, tasks and appointments. Everything the agent changes shows up in Records." },
    { question: "What pipeline stages are there?", answer: "Prospecting, Qualification, Proposal, Negotiation, Closing Won and Closing Lost. The agent moves deals between them with move_deal_stage." },
    { question: "How do I know what it changed?", answer: "Every reply comes with a work receipt. The app compares your records before and after the turn and lists the deals, tasks and appointments that changed, each linked to its page." },
    { question: "Will it double-book me?", answer: "The agent can list your appointments and calendar events first. A booking that clashes is flagged, so it can pick another time or book anyway if you tell it to." },
    { question: "Can it delete records?", answer: "Only when you ask. It has a delete_records tool for cleanups, and anything removed during a turn shows up on the receipt." },
  ],
  cta: {
    title: "Stop updating the CRM by hand.",
    lede: "Tell your agent what happened. It keeps deals, tasks and appointments current and shows its work.",
  },
};
