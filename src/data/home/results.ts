/**
 * PLACEHOLDER — sample case studies. Companies match the placeholder
 * testimonials; figures are invented. Replace with real results before launch.
 */

export type CaseStudy = {
  title: string;
  client: string;
  tags: string[];
  metric: { value: string; label: string; detail: string };
  problem: string;
  approach: string;
  outcome: string;
  /** Card colour, mixed into the surface so it works in both themes. */
  tone: "violet" | "sky" | "teal" | "pink" | "accent";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Local prospecting on autopilot",
    client: "Brightlane Studio",
    tags: ["Case study", "Agency"],
    metric: { value: "40", label: "leads a day", detail: "Found, verified and filed without a spreadsheet." },
    problem: "The founder spent every Monday copying businesses from maps into a sheet, then guessing which ones had a working email.",
    approach: "A prospecting agent searches by niche and city, checks each website, verifies emails and files the leads into a list.",
    outcome: "Prospecting went from a day a week to a message a week, with every lead linked in the turn's receipt.",
    tone: "violet",
  },
  {
    title: "Pipeline updates without the admin",
    client: "Northpeak",
    tags: ["Case study", "B2B sales"],
    metric: { value: "11 hrs", label: "saved per rep", detail: "Every week, on deal updates and follow-up tasks." },
    problem: "Reps logged calls, moved deals and set reminders by hand, so the pipeline was always a few days out of date.",
    approach: "A CRM agent reads each rep's notes, moves deals, books follow-ups and posts a receipt of every change it made.",
    outcome: "The Monday pipeline review now starts from numbers the team trusts, and reps spend the time selling.",
    tone: "sky",
  },
  {
    title: "Outreach for 30 clients, safely",
    client: "Relay Agency",
    tags: ["Case study", "Outreach"],
    metric: { value: "94%", label: "fewer bounces", detail: "Emails are verified before any campaign is sent." },
    problem: "Account managers built every client campaign by hand, and a bad list could burn a client's sending domain.",
    approach: "Agents prepare each campaign overnight with verified contacts, and 'Ask before sending' holds it for approval.",
    outcome: "Campaigns are ready each morning, nothing goes out without a human OK, and bounce rates stay near zero.",
    tone: "teal",
  },
  {
    title: "Support triage on WhatsApp",
    client: "Adeyemi Roofing",
    tags: ["Case study", "Support"],
    metric: { value: "3x", label: "faster replies", detail: "Every inbound message is sorted and routed within minutes." },
    problem: "Quote requests, complaints and booking changes all landed in one WhatsApp inbox, and urgent jobs got buried.",
    approach: "An agent reads each message, tags it by intent, books callbacks and files a task or deal for the right person.",
    outcome: "Urgent jobs are handled the same day, and the owner reviews one short summary instead of a full inbox.",
    tone: "pink",
  },
  {
    title: "Clean data across every tool",
    client: "Fieldnote",
    tags: ["Case study", "Data"],
    metric: { value: "8 hrs", label: "saved per campaign", detail: "Lists stay deduped, scored and synced on a schedule." },
    problem: "Leads lived in three tools with different fields, so every campaign started with a day of CSV cleanup.",
    approach: "A scheduled agent dedupes and scores new leads, verifies emails and syncs clean lists to Mailchimp and Brevo.",
    outcome: "Campaigns launch from one trusted list, and the weekly report shows every record the agent changed.",
    tone: "accent",
  },
];
