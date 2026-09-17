import { Check, Minus } from "lucide-react";
import { formatAllowance } from "@/data/plans";

/**
 * One comparison value. Booleans read as check / dash, `0` means the feature is
 * off on that tier (also a dash), `null` is unlimited.
 */
export function AllowanceCell({ value }: { value: number | boolean | null }) {
  if (value === true) {
    return (
      <>
        <Check aria-hidden className="mx-auto size-4 text-accent" />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false || value === 0) {
    return (
      <>
        <Minus aria-hidden className="mx-auto size-4 text-faint" />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="font-mono text-[13px] tabular-nums text-ink">{formatAllowance(value)}</span>;
}
