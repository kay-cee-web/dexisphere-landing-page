/**
 * Shared by the stacked-card sections (Proven results, the five jobs): each card
 * sits in a sticky row with its own top offset and alignment (left, centre,
 * right), so on scroll the next card slides up over the last one and they fan
 * out. Pure CSS; stacks flat on phones.
 */
export const STACK_ROW_LAYOUT = [
  "md:top-[128px] md:justify-start",
  "md:top-[104px] md:justify-center",
  "md:top-[152px] md:justify-end",
];

export type StackTone = "violet" | "sky" | "teal" | "pink" | "accent";

export const STACK_TONES: Record<StackTone, { card: string; panel: string }> = {
  violet: {
    card: "bg-[color-mix(in_srgb,var(--violet)_26%,var(--surface))]",
    panel: "bg-[color-mix(in_srgb,var(--violet)_12%,var(--surface))]",
  },
  sky: {
    card: "bg-[color-mix(in_srgb,var(--sky)_24%,var(--surface))]",
    panel: "bg-[color-mix(in_srgb,var(--sky)_10%,var(--surface))]",
  },
  teal: {
    card: "bg-[color-mix(in_srgb,var(--teal)_24%,var(--surface))]",
    panel: "bg-[color-mix(in_srgb,var(--teal)_10%,var(--surface))]",
  },
  pink: {
    card: "bg-[color-mix(in_srgb,var(--pink)_20%,var(--surface))]",
    panel: "bg-[color-mix(in_srgb,var(--pink)_8%,var(--surface))]",
  },
  accent: {
    card: "bg-[color-mix(in_srgb,var(--accent)_22%,var(--surface))]",
    panel: "bg-[color-mix(in_srgb,var(--accent)_9%,var(--surface))]",
  },
};

/** Card shell: the same reveal (y=40), radius, shadow and width in every stacked section. */
export const STACK_CARD = "w-full rounded-[28px] p-5 shadow-lift ring-1 ring-inset ring-line sm:p-8 md:w-[75%] md:min-h-115";
export const STACK_REVEAL_Y = 40;
