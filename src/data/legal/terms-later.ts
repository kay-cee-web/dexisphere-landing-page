/** PLACEHOLDER — draft legal text for layout only; have counsel review and replace before launch. */
import { CONTACT_EMAILS } from "@/lib/config";
import type { LegalSection } from "./types";

/** Terms of Service sections 6–10. */
export const TERMS_SECTIONS_LATER: LegalSection[] = [
  {
    title: "AI output and agent actions",
    blocks: [
      {
        type: "p",
        text: "Agents use AI models that can be wrong, incomplete or out of date. They can misread a request, pick the wrong list, or draft something you wouldn't send. Treat their output as a draft and check it, especially before it reaches other people.",
      },
      {
        type: "ul",
        items: [
          "**You're responsible for approving sends.** Turn on **Ask before sending** so an agent shows you each draft, its recipients and its checks, and waits for your go-ahead.",
          "Use the **Sending** switch to stop an agent from sending at all while you test it or when something looks wrong.",
          "Check your work receipts and Records to confirm what an agent changed.",
          "Don't rely on agent output for legal, financial, medical or other professional advice.",
        ],
      },
      {
        type: "p",
        text: "Actions an agent takes on your instructions, including scheduled automations, are treated as actions taken by you.",
      },
    ],
  },
  {
    title: "Third-party services",
    blocks: [
      {
        type: "p",
        text: "Dexisphere works with services we don't control, including AI model providers, Twilio, Meta and WhatsApp, Telegram, Google, Microsoft, email platforms and your SMTP provider. Your use of them is governed by their own terms. We aren't responsible for their availability, their decisions (such as suspending a number or sending domain), or changes they make that affect Dexisphere.",
      },
    ],
  },
  {
    title: "Disclaimers",
    blocks: [
      {
        type: "p",
        text: "The service is provided \"as is\" and \"as available\". To the extent the law allows, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose and non-infringement. We don't promise the service will be uninterrupted or error-free, or that any campaign will reach inboxes or produce results.",
      },
    ],
  },
  {
    title: "Limitation of liability",
    blocks: [
      {
        type: "p",
        text: "To the extent the law allows, Dexisphere won't be liable for indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue, data or goodwill. Our total liability for any claim related to the service is limited to the amount you paid us for your licence in the 12 months before the claim, or US$100 if you paid nothing.",
      },
      {
        type: "p",
        text: "Some places don't allow these limits, so they may not all apply to you. Nothing in these terms limits liability that can't be limited by law.",
      },
    ],
  },
  {
    title: "Changes and contact",
    blocks: [
      {
        type: "p",
        text: "We may update these terms as the service changes. We'll change the \"Last updated\" date above and, for significant changes, tell you by email or in the app before they take effect. If you keep using Dexisphere after that, the new terms apply.",
      },
      {
        type: "p",
        text: `Questions about these terms: [${CONTACT_EMAILS.support}](mailto:${CONTACT_EMAILS.support}). Privacy questions: [${CONTACT_EMAILS.privacy}](mailto:${CONTACT_EMAILS.privacy}).`,
      },
    ],
  },
];
