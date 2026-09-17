/** PLACEHOLDER — sample article body written for the launch mock-up; replace before launch. */
import type { ContentBlock } from "@/types/content";

export const blocks: ContentBlock[] = [
  {
    type: "p",
    text: "Every reply from a Dexisphere agent can carry a work receipt: a short list of what changed in your records during that turn, each line linking to the record. It looks simple. This post explains why we built it the way we did, and the trade-offs we accepted along the way.",
  },
  { type: "h2", text: "Why not just log the tool calls?" },
  {
    type: "p",
    text: "The obvious design is an activity log: every time the agent calls `create_lead` or `move_deal_stage`, write a row. We tried to lean on that, and ran into two problems.",
  },
  {
    type: "ul",
    items: [
      "**A log describes intent, not outcome.** A tool call can succeed, partly succeed or be retried. The log says what was attempted; your CRM says what's true.",
      "**A log can't see everything.** If a teammate moves a deal while the agent is working, a tool log has no idea. Your records do.",
    ],
  },
  {
    type: "p",
    text: "So we flipped it around. Instead of asking the agent what it did, we ask your records what changed.",
  },
  { type: "h2", text: "Snapshot, turn, snapshot, diff" },
  {
    type: "p",
    text: "When you send a message, the app takes a lightweight snapshot of your workspace, the agent runs its turn, and then the app takes a second snapshot and compares the two. The snapshot covers the things agents touch:",
  },
  {
    type: "table",
    head: ["Area", "What we compare"],
    rows: [
      ["Lists", "Names and lead counts (from `contacts_count`, not every lead)"],
      ["Deals", "New deals and stage moves"],
      ["Tasks and appointments", "Created, completed and rescheduled items"],
      ["Campaigns", "Email, SMS and WhatsApp campaigns"],
      ["Funnels", "New and updated funnels"],
    ],
  },
  {
    type: "p",
    text: "The diff turns into human lines: \"Added 32 leads to Leeds dental – Sept\", \"Moved Harbour Physio to Proposal\", \"Booked a call with Dr. Shah for Thursday 10:00\". Each one links to its page in Records.",
  },
  { type: "h2", text: "Failing safely" },
  {
    type: "p",
    text: "A receipt that lies is worse than no receipt. Most of the engineering went into making sure missing data never looks like a change.",
  },
  {
    type: "ul",
    items: [
      "**A read that fails is skipped.** If the deals endpoint times out on the second snapshot, deals are left out of the receipt. They never show up as \"deleted\".",
      "**Fresh snapshots are reused.** If the last \"after\" snapshot is under 60 seconds old, it becomes the next turn's \"before\", which keeps rapid back-and-forth fast.",
      "**The message never waits.** If the \"before\" reads take longer than 4 seconds, the turn goes ahead without a receipt rather than holding your message back.",
      "**Failed turns still get receipts.** An agent can change things before it hits an error, and you should see those changes.",
    ],
  },
  {
    type: "quote",
    text: "The rule we kept coming back to: never make the user choose between speed and honesty. If we can't be sure, we say less.",
    cite: "Luca Ferrari, Staff Engineer",
  },
  { type: "h2", text: "Changes you didn't make" },
  {
    type: "p",
    text: "Because receipts come from your records, they catch changes the agent didn't make, like a teammate's edit or an automation firing mid-turn. We don't hide those or attribute them to the agent. The receipt notes that some changes may have happened elsewhere during the turn, so you can tell the difference.",
  },
  {
    type: "callout",
    tone: "info",
    title: "Receipts live in your session",
    text: "Receipts are built in the browser for the turns you send in this session. Reload the page and older receipts are gone, but the records they point to are, of course, still there in Records.",
  },
  { type: "h2", text: "What's next" },
  {
    type: "p",
    text: "Receipts changed how we test agents internally: instead of reading transcripts, we read diffs. We're working on making them richer, with more record types and clearer grouping for big turns. If you have ideas, [tell us](/contact).",
  },
];
