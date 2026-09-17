import type { ContentBlock } from "@/types/content";

/** The SMTP, Twilio and WhatsApp Business sections of the Connectors page. */
export const CONNECTOR_SENDER_BLOCKS: ContentBlock[] = [
  { type: "h3", text: "Email (SMTP)" },
  {
    type: "p",
    text: "Use SMTP to send from any mailbox you own, such as a Google Workspace, Microsoft 365 or hosting-provider address. Press **Add sender** and fill in every field:",
  },
  {
    type: "table",
    head: ["Field", "What to enter"],
    rows: [
      ["SMTP host", "Your provider's outgoing server, e.g. `smtp.gmail.com`."],
      ["Port", "A number, usually `587` for TLS or `465` for SSL."],
      ["Username", "Usually the full mailbox address."],
      ["Password", "The mailbox password, or an app password if your provider uses them."],
      ["Encryption", "`TLS`, `SSL` or `None`. Match it to the port."],
      ["From address", "The sender email recipients see."],
      ["From name", "The sender name recipients see."],
    ],
  },
  {
    type: "callout",
    tone: "info",
    title: "No test send",
    text: "Dexisphere saves SMTP details without testing them. Ask an agent to send a test email to yourself before a campaign; if it fails, recheck the host, port and encryption.",
  },
  {
    type: "p",
    text: "Email campaigns support merge tags in single braces: `{username}` `{fullname}` `{email}` `{company}` `{date}` `{unsubscribe}`.",
  },
  { type: "h3", text: "SMS (Twilio)" },
  {
    type: "p",
    text: "Twilio is optional. Without it, agents can still send SMS on a shared system sender. Connect your own account to text from your number or brand:",
  },
  {
    type: "table",
    head: ["Field", "What to enter"],
    rows: [
      ["Account SID", "From the Twilio console. It starts with `AC`."],
      ["Auth token", "From the Twilio console, next to the SID."],
      ["Sender", "A Twilio number in +E.164 format, like `+15551234567`, or an alphanumeric sender ID of up to 11 characters."],
    ],
  },
  { type: "h3", text: "WhatsApp Business and Facebook" },
  {
    type: "p",
    text: "WhatsApp Business and Facebook connect through Meta, inside the Macrid app. Press **Set up in Macrid**, finish Meta's signup there, then come back. Dexisphere can't read back whether WhatsApp Business is connected, so its card keeps showing **Set up in Macrid** even when it is, and it never blocks a task.",
  },
];
