import type { DocPage } from "../types";

export const WORK_RECEIPTS: DocPage = {
  slug: "work-receipts",
  title: "Work receipts",
  description: "How Dexisphere shows what each chat turn changed in your workspace, what it covers, and where its limits are.",
  group: "Using agents",
  nextSteps: ["approvals", "troubleshooting"],
  blocks: [
    {
      type: "p",
      text: "A work receipt sits under an agent's reply and lists what that turn changed in your workspace: lists created, leads added, deals moved, meetings booked, campaigns and funnels. It's how you check an agent's work without taking its word for it.",
    },
    {
      type: "code",
      title: "Changed in your workspace",
      code: [
        "LEADS 20   LISTS 1   DEALS 1",
        "",
        "Leads   Added 20 leads to \"Austin dental clinics\"",
        "Lists   Created list \"Austin dental clinics\"",
        "Deals   Moved \"Bright Smile\" from Proposal to Negotiation",
      ].join("\n"),
    },
    { type: "h2", text: "How changes are detected" },
    {
      type: "p",
      text: "The app reads your Records just before you send a message and again after the reply arrives, then compares the two readings. Anything with a new ID was created, anything missing was deleted, and anything whose key fields differ was updated. The receipt shows a count per area at the top and one line per change below it, five at a time with **Show N more** for the rest.",
    },
    {
      type: "p",
      text: "Failed turns get a receipt too. An agent can do part of a job before something breaks, and the receipt shows what did happen.",
    },
    { type: "h2", text: "What a snapshot covers" },
    {
      type: "table",
      head: ["Area", "Lines you'll see", "Links to"],
      rows: [
        ["Lists", "Created, renamed or deleted a list", "The list"],
        ["Leads", "Added or removed N leads in a list", "The list"],
        ["Deals", "Created in a stage, moved between stages, amount or close date updated, deleted", "Deals"],
        ["Tasks", "Created (with due date), marked done or another status, deleted", "Tasks"],
        ["Meetings", "Booked, moved to a new time, status changed, removed", "Appointments"],
        ["Campaigns", "Email, SMS and WhatsApp campaigns created, status changed, deleted", "Campaigns for that channel"],
        ["Funnels", "Built, published or unpublished, renamed, deleted", "The funnel's stats"],
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Leads are counted per list",
      text: "To keep receipts fast, leads are tracked by how many each list holds, not by reading every lead. Adding leads to a list shows up; editing one lead's status or details doesn't. Companies aren't part of the snapshot either. Open **Records** to see those.",
    },
    { type: "h2", text: "Links to Records" },
    {
      type: "p",
      text: "Every line is a link. **Records** is a read-only view of your workspace: lists, leads, companies, deals, tasks, appointments, campaigns, funnels and analytics. Follow a line to confirm the change, then come back to the chat. When a reply mentions a list by ID, such as \"list ID 168\", that text links to the list too.",
    },
    { type: "h2", text: "Changes made elsewhere" },
    {
      type: "p",
      text: "A receipt compares your whole workspace, not only this agent's actions. If a teammate, another agent or a scheduled automation changes something while the turn runs, that change appears on the receipt as well. The info icon beside the receipt title says so.",
    },
    {
      type: "p",
      text: "If a line doesn't match what you asked for, check whether something else was running at the same time before assuming the agent did it.",
    },
    { type: "h2", text: "Limits" },
    {
      type: "ul",
      items: [
        "**Only this session's turns.** Receipts are built in your browser for messages you send there. Messages sent from WhatsApp, Telegram or the extension don't get one in the app.",
        "**Gone after a reload.** Receipts aren't saved. Reload the page or open the chat on another device and earlier replies show without them; the changes themselves are still in Records.",
        "**A slow read skips the receipt.** If the \"before\" reading takes longer than 4 seconds, your message goes out without waiting and that turn gets no receipt.",
        "**Failed reads are left out.** If one area can't be read, it's skipped for that turn, so it never shows up as deleted.",
        "**No changes, no receipt.** Questions, drafts and reports usually change nothing, so they have no receipt.",
      ],
    },
    {
      type: "callout",
      tone: "good",
      title: "Tip",
      text: "Ask the agent to name what it created, such as \"reply with the list ID\". A list ID in the reply becomes a link, which helps when a receipt was skipped.",
    },
  ],
};
