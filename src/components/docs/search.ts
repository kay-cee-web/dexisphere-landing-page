import type { DocSearchEntry } from "@/data/docs/types";

export type DocSearchResult = {
  key: string;
  href: string;
  title: string;
  /** Group for a page, the page title for a heading. */
  context: string;
  kind: "page" | "heading";
};

const MAX_RESULTS = 20;

const pageResult = (entry: DocSearchEntry): DocSearchResult => ({
  key: entry.href,
  href: entry.href,
  title: entry.title,
  context: entry.group,
  kind: "page",
});

/**
 * Every word of the query must appear. Pages match on title, description and
 * group; headings match on their own text. Title hits rank first.
 */
export function searchDocs(entries: DocSearchEntry[], query: string): DocSearchResult[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return entries.map(pageResult);

  const matches = (text: string) => {
    const haystack = text.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  };

  const titleHits: DocSearchResult[] = [];
  const pageHits: DocSearchResult[] = [];
  const headingHits: DocSearchResult[] = [];

  for (const entry of entries) {
    if (matches(entry.title)) titleHits.push(pageResult(entry));
    else if (matches(`${entry.description} ${entry.group}`)) pageHits.push(pageResult(entry));

    for (const heading of entry.headings) {
      if (!matches(heading.text)) continue;
      const href = `${entry.href}#${heading.id}`;
      headingHits.push({ key: href, href, title: heading.text, context: entry.title, kind: "heading" });
    }
  }

  return [...titleHits, ...headingHits, ...pageHits].slice(0, MAX_RESULTS);
}
