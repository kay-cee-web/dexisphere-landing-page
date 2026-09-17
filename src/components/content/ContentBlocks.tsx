import { CircleAlert, CircleCheck, Info } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ContentBlock } from "@/types/content";
import { CodeBlock } from "./CodeBlock";
import { InlineText } from "./InlineText";

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Headings that get an anchor, for "On this page" menus. */
export const headingsOf = (blocks: ContentBlock[]) =>
  blocks.flatMap((block) =>
    block.type === "h2" || block.type === "h3"
      ? [{ id: block.id ?? slugify(block.text), text: block.text, level: block.type === "h2" ? 2 : 3 }]
      : [],
  );

const calloutTones = {
  info: { Icon: Info, className: "border-accent/30 bg-accent-soft/60 [&_svg]:text-accent" },
  warn: { Icon: CircleAlert, className: "border-warn/30 bg-warn-soft [&_svg]:text-warn" },
  good: { Icon: CircleCheck, className: "border-good/30 bg-good-soft [&_svg]:text-good" },
};

/** Renders long-form content (docs, posts, legal, jobs) with one consistent type scale. */
export function ContentBlocks({ blocks, className }: { blocks: ContentBlock[]; className?: string }) {
  return (
    <div className={cn("grid gap-5 text-[16px] leading-[1.75] text-muted", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return <p key={index}><InlineText text={block.text} /></p>;
          case "h2":
            return (
              <h2 key={index} id={block.id ?? slugify(block.text)} className="mt-6 text-[26px] font-semibold leading-tight text-ink">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} id={block.id ?? slugify(block.text)} className="mt-3 text-[19px] font-semibold leading-snug text-ink">
                {block.text}
              </h3>
            );
          case "ul":
          case "ol": {
            const List = block.type;
            return (
              <List key={index} className={cn("grid gap-2 pl-5 marker:text-faint", List === "ul" ? "list-disc" : "list-decimal")}>
                {block.items.map((item) => (
                  <li key={item} className="pl-1"><InlineText text={item} /></li>
                ))}
              </List>
            );
          }
          case "code":
            return <CodeBlock key={index} code={block.code} language={block.language} title={block.title} />;
          case "callout": {
            const tone = calloutTones[block.tone ?? "info"];
            return (
              <aside key={index} className={cn("flex gap-3 rounded-[14px] border p-4 text-[14.5px] leading-relaxed", tone.className)}>
                <tone.Icon aria-hidden className="mt-1 size-4 shrink-0" />
                <div className="grid gap-1">
                  {block.title && <p className="font-medium text-ink">{block.title}</p>}
                  <p className="text-ink/80"><InlineText text={block.text} /></p>
                </div>
              </aside>
            );
          }
          case "quote":
            return (
              <blockquote key={index} className="border-l-2 border-accent pl-5 font-display text-[21px] leading-snug text-ink">
                <p>“{block.text}”</p>
                {block.cite && <cite className="mt-2 block font-sans text-[14px] not-italic text-muted">— {block.cite}</cite>}
              </blockquote>
            );
          case "table":
            return (
              <div key={index} className="overflow-x-auto rounded-[14px] border border-line">
                <table className="w-full min-w-[480px] text-left text-[14px]">
                  <thead className="bg-raised text-ink">
                    <tr>{block.head.map((cell) => <th key={cell} className="px-4 py-3 font-medium">{cell}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {block.rows.map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 align-top"><InlineText text={cell} /></td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
