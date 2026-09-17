import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
import { formatPostDate, type PostMeta } from "@/data/blog/posts";
import { ROUTES } from "@/data/navigation";
import { cn } from "@/lib/cn";

/** A post teaser. The cover is a generated gradient panel, so no image assets are needed. */
export function PostCard({ post, className }: { post: PostMeta; className?: string }) {
  return (
    <Link
      href={ROUTES.post(post.slug)}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-surface transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-float",
        className,
      )}
    >
      <div aria-hidden className="relative h-40 overflow-hidden border-b border-line bg-raised">
        <div className="bg-glow absolute inset-0 transition-transform duration-700 group-hover:scale-110" />
        <div className="bg-grid absolute inset-0 opacity-70" />
        <span className="absolute bottom-4 left-5 font-display text-[40px] font-semibold leading-none text-ink/10">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2">
          <Pill tone="accent">{post.category}</Pill>
          <span className="text-[12.5px] text-faint">
            {formatPostDate(post.date)} · {post.readMinutes} min read
          </span>
        </div>
        <h3 className="text-[19px] font-semibold leading-snug text-ink">{post.title}</h3>
        <p className="text-[14.5px] leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-[13px] text-muted">{post.author.name}</span>
          <ArrowUpRight aria-hidden className="size-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
      </div>
    </Link>
  );
}
