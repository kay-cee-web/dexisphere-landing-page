"use client";

import { Check, Link2, TriangleAlert } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type CopyState = "idle" | "copied" | "failed";

const LABELS: Record<CopyState, string> = { idle: "Copy link", copied: "Copied", failed: "Copy failed" };

/** Copies a URL. Only shows "Copied" once the clipboard write has actually succeeded. */
export function CopyLinkButton({ url, className }: { url: string; className?: string }) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(url);
      setState("copied");
    } catch {
      setState("failed");
    }
    timer.current = setTimeout(() => setState("idle"), 2000);
  }

  const Icon = state === "copied" ? Check : state === "failed" ? TriangleAlert : Link2;

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={state === "idle" ? "Copy link to this post" : LABELS[state]}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-[9px] border border-line bg-surface px-3 text-[13px] font-medium transition-colors hover:bg-raised",
        state === "copied" ? "text-good" : state === "failed" ? "text-bad" : "text-muted hover:text-ink",
        className,
      )}
    >
      <Icon aria-hidden className="size-4" />
      <span aria-live="polite">{LABELS[state]}</span>
    </button>
  );
}
