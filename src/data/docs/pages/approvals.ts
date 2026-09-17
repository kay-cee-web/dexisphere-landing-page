import type { DocPage } from "../types";

export const APPROVALS: DocPage = {
  slug: "approvals",
  title: "Approvals",
  description:
    "Keep a human in the loop: make an agent ask before it sends, answer with one tap, and use the sending switch to stop all sends.",
  group: "Using agents",
  nextSteps: ["connectors", "troubleshooting"],
  blocks: [
    {
      type: "p",
      text: "Two settings decide whether an agent's messages leave your workspace. **Ask before sending** makes it wait for your go-ahead on each send. **Sending** is a kill switch that blocks sends entirely. Both live in the agent's **Settings → General**, and each agent has its own.",
    },
    {
      type: "table",
      head: ["Sending", "Ask before sending", "What happens"],
      rows: [
        ["On", "On", "The agent drafts, shows you everything, and sends only after you approve."],
        ["On", "Off", "The agent sends as soon as it decides to."],
        ["Off", "Either", "Nothing goes out. The agent still researches, drafts and updates Records."],
      ],
    },
    { type: "h2", text: "Ask before sending" },
    {
      type: "p",
      text: "Turn on **Ask before sending** and, before any email, SMS or WhatsApp send, and before launching or scheduling a campaign, the agent will:",
    },
    {
      type: "ol",
      items: [
        "Show you the full draft: the subject and body, or the message.",
        "Say who receives it: the list or the recipients, and how many.",
        "For email, run `verify_emails` and `check_email_copy` first and tell you the results.",
        "Stop and wait. It sends only after you reply \"send\" or clearly approve in the conversation.",
      ],
    },
    { type: "h3", text: "The approval bar" },
    {
      type: "p",
      text: "When the agent's latest reply is waiting for a go-ahead, a bar appears above the composer saying the agent **is waiting for your go-ahead**, with three buttons:",
    },
    {
      type: "table",
      head: ["Button", "What it does"],
      rows: [
        ["**Send**", "Replies `send`, so the agent goes ahead."],
        ["**Don't send**", "Replies `Don't send it. Keep the draft.` Nothing goes out and the draft stays in the chat."],
        ["**Ask for changes**", "Starts a message that begins `Change the draft:` for you to finish. The agent redrafts and asks again."],
      ],
    },
    {
      type: "p",
      text: "You don't have to use the bar. Typing \"send\" yourself, or any clear approval, works the same way. If sending is off for the agent, the bar warns you that nothing will go out even if you approve.",
    },
    { type: "h3", text: "Approval lives in the instructions" },
    {
      type: "p",
      text: "There's no separate approval queue. Switching **Ask before sending** on adds a rule block to the end of the agent's instructions, and switching it off removes it. The agent reads that rule on every turn.",
    },
    {
      type: "code",
      title: "Added to the instructions",
      code: [
        "[Approval rule]",
        "Before any send_email, send_sms or send_whatsapp call, and before launching or scheduling a campaign:",
        "1. Show me the full draft (subject and body, or the message).",
        "2. Say who receives it: the list or recipients, and how many.",
        "3. For email, run verify_emails and check_email_copy first and tell me the results.",
        "Then stop and wait. Send only after I reply \"send\" (or clearly approve) in this conversation.",
        "[/Approval rule]",
      ].join("\n"),
    },
    {
      type: "callout",
      tone: "warn",
      title: "Keep the rule block intact",
      text: "The switch reads its state from the instructions text. If you delete the block in the instructions editor, or ask the agent to rewrite its instructions without it, the switch turns off. Check **Settings → General** after big instruction changes. Because it's an instruction and not a hard block, use the sending switch when you need a guarantee.",
    },
    { type: "h2", text: "The sending switch" },
    {
      type: "p",
      text: "**Sending** decides whether the agent may send at all. Turn it off and the agent confirms it has stopped sending but can still research and draft. Use it as a kill switch: while testing a new agent, while a list is being cleaned, or the moment something looks wrong.",
    },
    {
      type: "ul",
      items: [
        "The agent header shows **Sending on** or **Sending off**. Click the pill to jump to the switch.",
        "Under the switch you'll see the last 24 hours at a glance, for example `12 sent · 3 blocked in the last 24 hours`. Blocked counts the sends that were stopped.",
        "If you ask a sending-off agent to send something, a notice above the composer says nothing will go out, with a **Turn sending on** link.",
        "**New conversation** copies and clones start with the same sending setting as the original.",
      ],
    },
    {
      type: "callout",
      tone: "good",
      title: "Recommended setup",
      text: "For any agent that talks to real contacts, keep **Ask before sending** on until you trust its drafts. Keep **Sending** off on agents that only research or report.",
    },
  ],
};
