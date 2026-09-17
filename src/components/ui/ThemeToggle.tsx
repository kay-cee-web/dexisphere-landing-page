"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  applyThemePreference,
  readThemePreference,
  saveThemePreference,
  subscribeToTheme,
  type ThemePreference,
} from "@/lib/theme";
import { SegmentedControl, type SegmentOption } from "./SegmentedControl";

const OPTIONS: SegmentOption<ThemePreference>[] = [
  { value: "system", label: "System theme", icon: <Monitor />, iconOnly: true },
  { value: "light", label: "Light theme", icon: <Sun />, iconOnly: true },
  { value: "dark", label: "Dark theme", icon: <Moon />, iconOnly: true },
];

const serverSnapshot = (): ThemePreference => "system";

type ThemeToggleProps = {
  /** One button that cycles system → light → dark, for tight spaces like a phone header. */
  compact?: boolean;
  className?: string;
};

export function ThemeToggle({ compact, className }: ThemeToggleProps) {
  const preference = useSyncExternalStore(subscribeToTheme, readThemePreference, serverSnapshot);

  // React's dev remount clears <html> attributes the boot script set; put it back.
  useLayoutEffect(() => {
    applyThemePreference(readThemePreference());
  }, []);

  if (compact) {
    const index = OPTIONS.findIndex((option) => option.value === preference);
    const current = OPTIONS[index];
    const next = OPTIONS[(index + 1) % OPTIONS.length];
    return (
      <button
        type="button"
        onClick={() => saveThemePreference(next.value)}
        aria-label={`${current.label}. Switch to ${next.label.toLowerCase()}`}
        title={`${current.label} (switch to ${next.label.toLowerCase()})`}
        className={cn(
          "grid size-10 place-items-center rounded-[10px] text-muted transition-colors hover:bg-raised hover:text-ink [&_svg]:size-[18px]",
          className,
        )}
      >
        {current.icon}
      </button>
    );
  }

  return (
    <SegmentedControl label="Theme" value={preference} options={OPTIONS} onChange={saveThemePreference} className={className} />
  );
}
