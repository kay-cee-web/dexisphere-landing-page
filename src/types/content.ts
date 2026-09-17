/**
 * Long-form content (docs, blog posts, legal pages, job posts) is written as
 * blocks so one renderer styles it everywhere: `components/content/ContentBlocks`.
 * Inline text supports `code` spans and [label](href) links.
 */
export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; code: string; language?: string; title?: string }
  | { type: "callout"; tone?: "info" | "warn" | "good"; title?: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "table"; head: string[]; rows: string[][] };
