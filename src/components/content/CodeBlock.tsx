import { cn } from "@/lib/cn";

type CodeBlockProps = {
  code: string;
  language?: string;
  title?: string;
  className?: string;
};

/** A terminal-style panel for snippets: chat prompts, pairing messages, merge tags. */
export function CodeBlock({ code, language, title, className }: CodeBlockProps) {
  return (
    <figure className={cn("overflow-hidden rounded-[14px] border border-line bg-surface", className)}>
      <figcaption className="flex items-center gap-2 border-b border-line bg-raised px-4 py-2">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="ml-2 font-mono text-[12px] text-muted">{title ?? language ?? "text"}</span>
      </figcaption>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-ink">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
