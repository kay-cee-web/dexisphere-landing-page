import { CONTACT_EMAILS } from "@/lib/config";
import { isEmail } from "@/lib/text";

export type Application = { name: string; email: string; link: string; why: string };
export type ApplicationErrors = Partial<Record<keyof Application, string>>;

export const EMPTY_APPLICATION: Application = { name: "", email: "", link: "", why: "" };

export const MIN_WHY_LENGTH = 40;

function isHttpUrl(value: string) {
  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return url.hostname.includes(".");
  } catch {
    return false;
  }
}

export function validateApplication(values: Application): ApplicationErrors {
  const errors: ApplicationErrors = {};
  if (values.name.trim().length < 2) errors.name = "Tell us your name.";
  if (!isEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!values.link.trim()) errors.link = "Add a portfolio, LinkedIn or GitHub link.";
  else if (!isHttpUrl(values.link.trim())) errors.link = "That doesn't look like a web address.";
  if (values.why.trim().length < MIN_WHY_LENGTH) errors.why = `A few sentences, please (at least ${MIN_WHY_LENGTH} characters).`;
  return errors;
}

/** A mailto: link to the careers inbox with the application pre-filled. */
export function applicationMailto(role: string, values: Application) {
  const subject = `Application: ${role}`;
  const body = [
    `Role: ${role}`,
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Portfolio / LinkedIn: ${values.link.trim()}`,
    "",
    "Why me:",
    values.why.trim(),
    "",
    "(Attach your CV to this email before sending.)",
  ].join("\n");
  return `mailto:${CONTACT_EMAILS.careers}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
