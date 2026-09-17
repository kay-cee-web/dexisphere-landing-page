import { SmartLink } from "@/components/ui/SmartLink";

/** `code` spans, **bold** and [label](href) links; everything else is plain text. */
const TOKEN = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function InlineText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={index} className="rounded-[6px] border border-line bg-raised px-1.5 py-0.5 font-mono text-[0.86em] text-ink">
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          );
        }
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          return (
            <SmartLink key={index} href={link[2]} className="font-medium text-accent underline-offset-4 hover:underline">
              {link[1]}
            </SmartLink>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
