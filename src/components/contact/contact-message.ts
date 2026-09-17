import { CONTACT_TOPICS } from "@/data/contact";
import { isEmail } from "@/lib/text";

export type ContactValues = { name: string; email: string; company: string; topic: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export const EMPTY_CONTACT: ContactValues = { name: "", email: "", company: "", topic: "", message: "" };

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (values.name.trim().length < 2) errors.name = "Tell us your name.";
  if (!isEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!CONTACT_TOPICS.some((topic) => topic.value === values.topic)) errors.topic = "Choose a topic.";
  if (values.message.trim().length < 10) errors.message = "Add a few more words so we can help.";
  return errors;
}

/**
 * There is no form backend: the message becomes a mailto link addressed to
 * the topic's inbox, with the subject and body filled in.
 */
export function contactMailto(values: ContactValues) {
  const topic = CONTACT_TOPICS.find((item) => item.value === values.topic) ?? CONTACT_TOPICS[0];
  const company = values.company.trim();
  const subject = `${topic.label}: ${values.name.trim()}${company ? ` (${company})` : ""}`;
  const body = [
    values.message.trim(),
    "",
    "—",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    ...(company ? [`Company: ${company}`] : []),
  ].join("\n");
  return {
    to: topic.email,
    href: `mailto:${topic.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
