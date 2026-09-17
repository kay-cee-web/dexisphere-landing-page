import type { DocPage } from "../types";

export const CHANNELS: DocPage = {
  slug: "channels",
  title: "Channels",
  description: "Link an agent to WhatsApp, Telegram or the browser extension with a pairing code, check its status and disconnect.",
  group: "Using agents",
  nextSteps: ["approvals", "troubleshooting"],
  blocks: [
    {
      type: "p",
      text: "Channels let you talk to an agent outside the app. Each agent links separately, with a short pairing code, and you can link it on WhatsApp, Telegram and the browser extension at the same time.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Channels aren't senders",
      text: "A channel is a private line between you and your agent. To send outreach to your leads on WhatsApp or SMS, connect a sender instead: see [Connectors](/docs/connectors).",
    },
    { type: "h2", text: "Open the channel settings" },
    {
      type: "p",
      text: "Open the agent, go to **Settings → Channels** and pick a channel. Each row shows **Not connected**, **Connected** or **Linked** with a label for the linked account.",
    },
    { type: "h2", text: "How pairing codes work" },
    {
      type: "ul",
      items: [
        "Press **Get a pairing code**. A **six-character code** appears with a countdown.",
        "The code works for **15 minutes**. When it runs out, the card says **This code has expired.** Press **Get a new code**; each new code gets a fresh 15 minutes.",
        "While the code is live, the card shows **Waiting for your message…** and checks for the link by itself. You don't need to refresh.",
        "The message you send is always the word `LINK`, a space, then the code.",
      ],
    },
    {
      type: "code",
      title: "Pairing message",
      code: "LINK 2CPQDL",
    },
    { type: "h2", text: "WhatsApp" },
    {
      type: "ol",
      items: [
        "In **Settings → Channels → WhatsApp**, press **Get a pairing code**.",
        "On the phone you want linked, send the pairing message to the number shown on the card. The easiest way is to **scan the QR code** with that phone, or press **Open WhatsApp**: both open a chat with the message already typed.",
        "Prefer typing? Press **Copy \"LINK CODE\"** and paste the message into WhatsApp yourself.",
        "Wait a moment. The status changes to **Connected** and the linked number appears under **Linked**.",
      ],
    },
    { type: "h2", text: "Telegram" },
    {
      type: "ol",
      items: [
        "In **Settings → Channels → Telegram**, press **Get a pairing code**.",
        "Press **Open Telegram** or scan the QR code. The bot opens with your code already attached, so you only need to start the chat.",
        "Or open the bot named on the card and send `LINK` with your code.",
        "The status changes to **Connected** once the bot has matched the code.",
      ],
    },
    { type: "h2", text: "Browser extension" },
    {
      type: "ol",
      items: [
        "Install the browser extension, then open it from the toolbar on any page.",
        "In **Settings → Channels → Browser extension**, press **Get a pairing code**, then **Copy code**.",
        "Enter the code in the extension. Once linked, you can keep the agent in a side panel and ask about the page you're on.",
      ],
    },
    { type: "h2", text: "Status and linked accounts" },
    {
      type: "p",
      text: "Under **Linked**, each connection shows its label and when it last sent a message (or **No messages yet**). One agent can have several links on the same channel, for example two phones, and each has its own **Disconnect** button.",
    },
    {
      type: "callout",
      tone: "info",
      title: "The number shown is masked",
      text: "Linked WhatsApp numbers appear masked, like `••••••••••2736`. It's there so you can tell your links apart. It is not a number you can dial or send to.",
    },
    {
      type: "p",
      text: "Asking for a code doesn't link anything by itself. A channel only counts as connected once your message or code has been received.",
    },
    { type: "h2", text: "Disconnect" },
    {
      type: "p",
      text: "Press **Disconnect** next to a linked account at any time. The agent stops answering there straight away. To link again, press **Re-pair this channel** for a new code. Deleting an agent also removes its channel links.",
    },
    {
      type: "ul",
      items: [
        "**New conversation** copies don't inherit channels. Links stay on the original agent, so your phone keeps talking to that one.",
        "We only see the messages you send your agent through a channel, and you can disconnect anytime.",
      ],
    },
  ],
};
