import { Inbox, MailCheck } from "lucide-react";
import { logo, type Integration } from "./types";

/** drive.file is shared: connecting Drive, Sheets or Docs turns on all three. */
const DRIVE_FILE_ACCESS =
  "Only the files you pick or Dexisphere creates (Google's drive.file access). It can't browse or search the rest of your Drive. Drive, Sheets and Docs share this access, so connecting one connects all three.";

/** Google (one sign-in per service), Microsoft, mailboxes, senders and prospect sources. */
export const CORE_INTEGRATIONS: Integration[] = [
  {
    name: "Gmail", category: "Google", logo: logo("gmail.svg"), auth: "OAuth",
    description: "Send email from your own address, so replies land in your inbox.",
    access: "Your email address and permission to send email as you (gmail.send). It can't read your mail; replies are read through Mailbox (IMAP) or Outlook.",
  },
  {
    name: "Google Calendar", category: "Google", logo: logo("google-calendar.svg"), auth: "OAuth",
    description: "Book, move and cancel meetings, and check what's already taken.",
    access: "Your calendar events, with titles, times and attendees, to create, change and cancel them, plus your free/busy times.",
  },
  {
    name: "Google Drive", category: "Google", logo: logo("google-drive.svg"), auth: "OAuth",
    description: "Open files you pick, and save what your agent creates.",
    access: DRIVE_FILE_ACCESS,
  },
  {
    name: "Google Sheets", category: "Google", logo: logo("google-sheets.svg"), auth: "OAuth",
    description: "Read and update the spreadsheets you share with your agent.",
    access: DRIVE_FILE_ACCESS,
  },
  {
    name: "Google Docs", category: "Google", logo: logo("google-docs.png"), auth: "OAuth",
    description: "Draft and edit documents without leaving the chat.",
    access: DRIVE_FILE_ACCESS,
  },
  {
    name: "Google Contacts", category: "Google", logo: logo("google-contacts.png"), auth: "OAuth",
    description: "Pull your contacts in, and save new ones back.",
    access: "Your Google contacts, to read them and to add or update the ones you save.",
  },
  {
    name: "Google Business Profile", category: "Google", logo: logo("google-business-profile.svg"), auth: "OAuth",
    description: "Read the listings you manage, with reviews and enquiries.",
    access: "The Business Profile listings you manage, with their reviews and customer enquiries.",
  },
  {
    name: "Outlook", category: "Email & calendar", logo: logo("outlook.svg"), auth: "OAuth",
    description: "Mail and calendar for Microsoft accounts, in one grant.",
    access: "Your email address, mail and calendar events, and permission to send email as you.",
  },
  {
    name: "Mailbox (IMAP)", category: "Email & calendar", Icon: Inbox, auth: "API key",
    description: "Read replies from Gmail, Outlook or any IMAP inbox, with an app password.",
    access: "The address and app password for each mailbox you add, used to read its messages over IMAP, such as replies to your outreach. It can't send from it.",
  },
  {
    name: "Email (SMTP)", category: "Email & calendar", Icon: MailCheck, auth: "API key",
    description: "Send campaigns from any mailbox, with its server details.",
    access: "The server, username and password for the mailbox you add, used only to send your email.",
  },
  {
    name: "SMS (Twilio)", category: "Messaging", logo: logo("twilio.svg"), auth: "API key",
    description: "Text from your own number instead of the shared one.",
    access: "Your Twilio account ID, auth token and sender number, and the delivery status of messages you send.",
  },
  {
    name: "WhatsApp Business", category: "Messaging", logo: logo("whatsapp.svg"), auth: "In the Dexisphere app",
    description: "Send WhatsApp broadcasts from your business number.",
    access: "Your WhatsApp Business account and number through Meta, the messages you send and the replies you receive.",
  },
  {
    name: "Google Places", category: "Prospect sources", logo: logo("google-maps.svg"), auth: "API key",
    description: "Find local businesses without the shared daily limit.",
    access: "Your Places API key, if you add one. Results are public business listings.",
  },
  {
    name: "Facebook", category: "Prospect sources", logo: logo("facebook.svg"), auth: "OAuth",
    description: "Find the pages and businesses active in your niche.",
    access: "The Facebook Pages you grant access to, and public Page data used for prospecting.",
  },
];
