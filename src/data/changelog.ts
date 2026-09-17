/**
 * PLACEHOLDER — version numbers and dates are invented for layout (the features
 * are real). Replace with the actual release history before launch.
 */

export type ChangeTag = "New" | "Improved" | "Fixed";

export type Release = {
  version: string;
  /** ISO date, newest first. */
  date: string;
  title: string;
  summary: string;
  items: { tag: ChangeTag; text: string }[];
};

export const RELEASES: Release[] = [
  {
    version: "v1.6.0",
    date: "2026-09-15",
    title: "Work receipts for every turn",
    summary: "See exactly what an agent changed, without digging through Records.",
    items: [
      { tag: "New", text: "After each turn, a receipt lists the leads, deals, tasks, appointments, campaigns and funnels that changed." },
      { tag: "New", text: "Every receipt line links straight to the record it describes." },
      { tag: "Improved", text: "Receipts note changes made elsewhere in the workspace while the turn was running." },
      { tag: "Fixed", text: "A records read that fails no longer shows up as a deleted item." },
    ],
  },
  {
    version: "v1.5.0",
    date: "2026-08-26",
    title: "Ask before sending",
    summary: "Agents draft freely; you decide what goes out.",
    items: [
      { tag: "New", text: "Turn on Ask before sending and the agent shows the draft, recipients and checks, then waits for “send”." },
      { tag: "New", text: "An approval bar under the reply offers Send, Don't send and Ask for changes." },
      { tag: "Improved", text: "The sending switch now shows sent and blocked counts for the last 24 hours." },
      { tag: "Fixed", text: "The approval setting stays in sync when a chat turn rewrites the agent's instructions." },
    ],
  },
  {
    version: "v1.4.0",
    date: "2026-08-04",
    title: "Records & analytics",
    summary: "A read-only view of everything your agents create.",
    items: [
      { tag: "New", text: "Browse lists, leads, companies, deals, tasks, appointments and email, SMS and WhatsApp campaigns." },
      { tag: "New", text: "Analytics over 7, 30 or 90 days, plus per-funnel views, clicks, unique visitors and CTR." },
      { tag: "New", text: "Open any SMS campaign to see its delivery log." },
      { tag: "Improved", text: "Replies that mention a list by ID now link to that list." },
    ],
  },
  {
    version: "v1.3.0",
    date: "2026-07-13",
    title: "Connectors panel",
    summary: "Workspace connections in one place, shared by every agent.",
    items: [
      { tag: "New", text: "A Connectors tab for Gmail, Outlook, SMTP, Twilio, Google Places and email platforms." },
      { tag: "New", text: "Ready, Shared and Connect statuses, including the shared SMS sender and shared Places key." },
      { tag: "Improved", text: "The composer warns when a task names a platform that isn't connected yet." },
      { tag: "Fixed", text: "Saving a Places key no longer clears your AI keys." },
    ],
  },
  {
    version: "v1.2.0",
    date: "2026-06-16",
    title: "Channels: WhatsApp, Telegram and the extension",
    summary: "Talk to your agent from wherever you are.",
    items: [
      { tag: "New", text: "Pair an agent with a 6-character code: send LINK and the code, or scan the QR code." },
      { tag: "New", text: "Disconnect any channel from the agent's settings at any time." },
      { tag: "Fixed", text: "The 15-minute countdown now resets for every new pairing code." },
    ],
  },
  {
    version: "v1.1.0",
    date: "2026-05-19",
    title: "New conversations, token usage and images",
    summary: "Small changes that make daily chat work smoother.",
    items: [
      { tag: "New", text: "New conversation copies the agent, so earlier conversations stay intact." },
      { tag: "New", text: "Each reply shows the tokens it used and the balance left." },
      { tag: "New", text: "Attach up to 4 images (5 MB each) to a message." },
      { tag: "Improved", text: "Out-of-tokens replies link straight to upgrading your plan." },
    ],
  },
];

export const formatReleaseDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
