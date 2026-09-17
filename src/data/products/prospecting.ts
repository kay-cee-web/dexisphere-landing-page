/** PLACEHOLDER — demo run figures (counts, token usage, business names) are sample values; replace before launch. */
import { Building, CalendarClock, CopyCheck, ListPlus, MapPin, MessageSquare, Phone, Radar, Receipt, Target } from "lucide-react";
import type { ProductContent } from "./types";

export const PROSPECTING_CONTENT: ProductContent = {
  meta: {
    title: "Prospecting",
    description: "An AI agent that searches businesses by niche and area, drops the ones you can't reach, skips duplicates and files the rest into clean lists.",
  },
  hero: {
    headline: "Prospect lists that build themselves.",
    lede: "Tell an agent who you sell to and where. It searches, drops the businesses you can't contact, skips anyone already on file and files the rest into a clean list.",
    bullets: [
      "Search businesses by niche and location through Google Places",
      "Every result checked against the leads you already have",
      "Filed into a named list, scored and ready for outreach",
      "Weekly runs on a schedule, with a receipt every time",
    ],
  },
  demo: {
    agent: "Prospect finder",
    model: "claude-sonnet-5",
    task: "Find dental clinics in Austin that have a phone number, skip anyone already on file, and put them in a new list.",
    tools: [
      { name: "find_prospects", detail: "dental clinics · Austin, TX" },
      { name: "find_duplicates", detail: "Checking 42 results against your lists" },
      { name: "create_list", detail: "Austin dental clinics" },
      { name: "add_to_list", detail: "Adding 31 new leads" },
    ],
    reply: "Found 42 clinics. 31 have a phone number and aren't on file yet, so they're in a new list: Austin dental clinics. I left out 6 duplicates and 5 with no phone.",
    receipt: {
      area: "Prospect Finder",
      badge: { label: "+31 leads", tone: "good" },
      stats: [
        { label: "Found", value: 42 },
        { label: "Duplicates", value: 6 },
        { label: "Added", value: 31 },
      ],
    },
    usage: "2,140 tokens · 97,860 left",
  },
  capabilities: {
    title: "Everything between a search and a list you can work",
    lede: "The agent does the clicking you'd do in a prospect finder, then tidies up after itself.",
    items: [
      { title: "Search by niche and area", description: "Name the kind of business and where. The agent searches Google Places and brings back phone, website and address.", Icon: MapPin, meta: "find_prospects" },
      { title: "No duplicates", description: "Results are checked against the leads you already have, and duplicates are merged instead of filed twice.", Icon: CopyCheck, meta: "find_duplicates · merge_duplicates" },
      { title: "Lists built for you", description: "New prospects go straight into a named list, or one you already have, ready for a campaign.", Icon: ListPlus, meta: "create_list · add_to_list" },
      { title: "Lead scoring", description: "Leads are scored on the details on file, so the best-fit businesses rise to the top of the list.", Icon: Target, meta: "score_leads" },
      { title: "Company lookups", description: "Ask what's already on file about a company or a lead before anyone reaches out.", Icon: Building, meta: "search_companies · read_lead" },
      { title: "Runs on a schedule", description: "Ask for a weekly run and the agent schedules it, so a fresh list is waiting when your week starts.", Icon: CalendarClock, meta: "schedule_automation" },
    ],
  },
  steps: {
    title: "From a sentence to a clean list",
    lede: "No filters to set up and no spreadsheets to dedupe.",
    items: [
      { title: "Describe who you're after", description: "Type the niche, the area and what makes a good lead, the way you'd brief a colleague.", Icon: MessageSquare },
      { title: "The agent searches and cleans", description: "It runs the search, drops businesses you can't contact and checks every result against your existing leads.", Icon: Radar },
      { title: "Check the receipt", description: "The receipt shows what was found, filtered and added, and links straight to the new list in Records.", Icon: Receipt },
    ],
  },
  useCases: {
    title: "Prospecting tasks people hand over first",
    lede: "Straight from the idea library in the app. Pick one, adjust the niche, send.",
    items: [
      { title: "Weekly prospect run", task: "Every Monday, search my niche and area, score the businesses I could sell to, and file the best of them into a fresh list.", outcome: "A scheduled run that leaves a scored list ready to work at the start of each week.", Icon: CalendarClock },
      { title: "Contactable prospects only", task: "When a search finishes, drop the businesses with no phone, no email and no website so my list is only people I can actually contact.", outcome: "Lists without dead ends, so campaigns don't waste sends.", Icon: Phone },
      { title: "Duplicate merge on import", task: "Before anything is imported, check it against my existing lists and merge it into the record I already have.", outcome: "One record per business, even when searches overlap.", Icon: CopyCheck },
      { title: "Company background check", task: "When I open a company, report its size, industry, revenue band and everyone else already on file there.", outcome: "A short brief on the company and your existing contacts there, before the first message.", Icon: Building },
    ],
  },
  faqs: [
    { question: "Where do the prospects come from?", answer: "The agent's find_prospects tool searches Google Places for businesses by type and location. You can use the shared Places key, which has a daily limit, or connect your own Google Places key for more searches." },
    { question: "Will it add businesses I already have?", answer: "No. The agent checks results against your existing leads with find_duplicates and can merge any it finds, so each business stays one record." },
    { question: "Does it find email addresses?", answer: "Results include what the listing has, usually a phone number, website and address. Filling in missing emails isn't fully automatic yet, so the agent tells you which leads are missing contact details." },
    { question: "Where do the new leads go?", answer: "Into a list in your workspace, new or existing. Open Records to see every list and lead, and use the receipt under the reply to jump straight to them." },
    { question: "Can it run every week without me?", answer: "Yes. Ask the agent to schedule the search and it creates an automation. You can ask it to list or cancel automations in the same chat." },
  ],
  cta: {
    title: "Start the week with a fresh prospect list.",
    lede: "Describe who you sell to. Your agent searches, cleans and files the leads, then leaves a receipt.",
  },
};
