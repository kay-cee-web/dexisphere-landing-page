"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { EASE_OUT } from "@/components/motion/Reveal";
import type { PostCategory, PostMeta } from "@/data/blog/posts";
import { cn } from "@/lib/cn";
import { PostCard } from "./PostCard";

type Filter = "All" | PostCategory;

type PostFilterProps = {
  posts: PostMeta[];
  categories: PostCategory[];
  /** Hidden under "All" because it is already shown above the grid. */
  featuredSlug?: string;
};

/** Category tabs over an animated grid of post cards. */
export function PostFilter({ posts, categories, featuredSlug }: PostFilterProps) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = posts.filter((post) =>
    filter === "All" ? post.slug !== featuredSlug : post.category === filter,
  );
  const options: Filter[] = ["All", ...categories];

  return (
    <div className="grid gap-8">
      <div role="group" aria-label="Filter posts by category" className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option === filter;
          const count = option === "All" ? posts.length : posts.filter((post) => post.category === option).length;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option)}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-[13.5px] font-medium transition-colors",
                active ? "border-accent/40 bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:text-ink",
              )}
            >
              {option}
              <span className="font-mono text-[11px] text-faint">{count}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((post) => (
            <motion.li
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
            >
              <PostCard post={post} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <p className="rounded-[16px] border border-dashed border-line p-10 text-center text-[14.5px] text-muted">
          No posts in {filter} yet. Check back soon.
        </p>
      )}
    </div>
  );
}
