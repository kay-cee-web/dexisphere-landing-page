import { Eyebrow } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type Heading = { id: string; text: string; level: number };

/** "On this page" links built from the article's headings. */
export function ArticleToc({ headings, className }: { headings: Heading[]; className?: string }) {
  if (headings.length === 0) return null;
  return (
    <nav aria-label="On this page" className={cn("grid gap-3", className)}>
      <Eyebrow>On this page</Eyebrow>
      <ol className="grid gap-0.5 border-l border-line">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "-ml-px block border-l border-transparent py-1.5 text-[13.5px] leading-snug text-muted transition-colors hover:border-accent hover:text-ink",
                heading.level === 3 ? "pl-7" : "pl-4",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
