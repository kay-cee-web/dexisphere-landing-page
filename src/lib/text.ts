/** "Ada Nwosu" → "AN". Used by every initials avatar (no photos on this site). */
export const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Loose client-side check for form fields; the mail app or provider does the real validation. */
export const isEmail = (value: string) => EMAIL_PATTERN.test(value.trim());
