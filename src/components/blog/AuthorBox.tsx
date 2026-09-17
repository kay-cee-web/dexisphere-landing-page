import { Eyebrow } from "@/components/ui/Card";
import { authorBio } from "@/data/blog/authors";
import type { PostMeta } from "@/data/blog/posts";
import { AuthorAvatar } from "./AuthorAvatar";

/** "Written by" card at the end of an article. */
export function AuthorBox({ author }: { author: PostMeta["author"] }) {
  return (
    <aside className="flex flex-col gap-4 rounded-[16px] border border-line bg-surface p-6 sm:flex-row sm:items-start">
      <AuthorAvatar name={author.name} size="lg" />
      <div className="grid gap-1.5">
        <Eyebrow>Written by</Eyebrow>
        <p className="text-[17px] font-semibold text-ink">
          {author.name} <span className="font-normal text-faint">· {author.role}</span>
        </p>
        <p className="text-[14.5px] leading-relaxed text-muted">{authorBio(author.name)}</p>
      </div>
    </aside>
  );
}
