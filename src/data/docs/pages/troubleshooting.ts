import { CONTACT_EMAILS, REDEEM_URL } from "@/lib/config";
import type { DocPage } from "../types";

export const TROUBLESHOOTING: DocPage = {
  slug: "troubleshooting",
  title: "Troubleshooting",
  description: "Fixes for the most common problems: emails not sending, channels not linking, missing receipts, running out of tokens and connectors that won't stay connected.",
  group: "Platform",
  blocks: [
    { type: "h2", text: "Quick fixes" },
    {
      type: "table",
      head: ["Symptom", "Likely cause", "Fix"],
      rows: [
        ["Agent drafted an email but nothing was sent", "Sending is off, or it's waiting for approval", "Check the header pill and the approval bar"],
        ["\"isn't connected, so it can draft this but not send it\"", "No sender for that platform", "Connect one in **Plugins → Connectors**"],
        ["WhatsApp or Telegram never shows Connected", "Code expired or message format wrong", "Get a new code and send `LINK <CODE>`"],
        ["No receipt under a reply", "Nothing changed, or the receipt was skipped", "Check **Records** directly"],
        ["Message fails with **Upgrade plan**", "Out of tokens", "Redeem a plan, then **Retry**"],
        ["Connector card still shows **Connect**", "Popup blocked or sign-in not finished", "Allow popups and connect again"],
        ["Verification code rejected", "Expired, or an older code", "Send a new code and use the newest email"],
      ],
    },
    { type: "h2", text: "An email isn't sending" },
    {
      type: "p",
      text: "Work through these in order. Most sends that \"didn't happen\" are one of the first three.",
    },
    {
      type: "ol",
      items: [
        "**Is an approval pending?** With **Ask before sending** on, the agent stops after showing the draft. Look for the approval bar above the composer and press **Send**, or reply \"send\".",
        "**Is sending off?** The agent header shows **Sending off**. Click it and switch **Sending** on in **Settings → General**. The `blocked in the last 24 hours` count shows sends that were stopped.",
        "**Is a sender connected?** Open **Plugins → Connectors** and check that Email (SMTP), Gmail or Outlook shows **Connected**. Ask the agent which mail accounts it can see; it checks with `list_mail_accounts`.",
        "**Are the SMTP details right?** They aren't tested when you save them. A wrong host, port or encryption setting fails at send time. Recheck them, or add the sender again with **Add another**.",
        "**Did the addresses pass verification?** Agents that run `verify_emails` may hold back invalid or risky addresses. Ask the agent for the results.",
      ],
    },
    { type: "h2", text: "A channel won't link" },
    {
      type: "ul",
      items: [
        "**The code expired.** Codes last 15 minutes. If the card says **This code has expired.**, press **Get a new code** and send the new one. Older codes never work.",
        "**Wrong message format.** Send exactly `LINK`, a space and the code, like `LINK 2CPQDL`. Use **Copy \"LINK CODE\"** or the QR code to avoid typos.",
        "**Wrong number or bot.** Send to the WhatsApp number or Telegram bot shown on the card for that code.",
        "**Wrong phone.** WhatsApp links the phone the message comes from. Scan the QR code with the phone you want linked.",
        "**Still waiting?** Leave the page open for a minute; it checks by itself. If the code expires first, start again with a new one.",
      ],
    },
    { type: "h2", text: "No receipt shown" },
    {
      type: "p",
      text: "A missing receipt doesn't mean the agent did nothing. Receipts are skipped when:",
    },
    {
      type: "ul",
      items: [
        "the turn changed nothing that receipts track (questions, drafts, reports, single-lead edits, companies);",
        "reading your Records took more than 4 seconds before the message went out;",
        "you reloaded the page, or the message came in through a channel.",
      ],
    },
    {
      type: "p",
      text: "Open **Records** to see the current state, or ask the agent to list exactly what it created with IDs. See [Work receipts](/docs/work-receipts).",
    },
    { type: "h2", text: "Out of tokens" },
    {
      type: "p",
      text: `When a message fails with a note that you've run out of tokens, you stay signed in and nothing is lost. Buy a plan, redeem the licence code on [the plans page](${REDEEM_URL}), then press **Retry**. If you use your own AI key, check it's still valid. See [Tokens and limits](/docs/tokens-and-limits).`,
    },
    { type: "h2", text: "A connector still shows Connect" },
    {
      type: "ul",
      items: [
        "**The popup was blocked.** Allow popups for the app, then press **Connect** again.",
        "**The popup was closed early.** Finish the provider's sign-in and approval screens until the popup closes, then check the card again.",
        "**The wrong account was approved.** Disconnect, then connect again and pick the right Google or Microsoft account.",
        "**It's a Macrid-app connector.** WhatsApp Business and Facebook usually show **Set up in Macrid**, because their status often can't be read here. That's expected.",
        "**The page is stale.** Reload the Connectors tab. Connections are shared by all agents, so any agent's tab shows the same state.",
      ],
    },
    { type: "h2", text: "Still stuck?" },
    {
      type: "callout",
      tone: "good",
      title: "Contact support",
      text: `Email [${CONTACT_EMAILS.support}](mailto:${CONTACT_EMAILS.support}) with the agent ID (**Settings → General → Agent ID**), what you asked, and what happened instead. A screenshot of the reply helps.`,
    },
  ],
};
