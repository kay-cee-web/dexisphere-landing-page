import { Check } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ORBIT_INNER, ORBIT_OUTER, TOOL_CHIPS, type BrandMark } from "@/data/home/platform";
import { cn } from "@/lib/cn";
import { BentoStage, MarkTile } from "./BentoStage";

/** Places marks evenly round a circle of `radius` px, starting at `offset` degrees. */
function Ring({ marks, radius, offset, seconds }: { marks: BrandMark[]; radius: number; offset: number; seconds: number }) {
  const duration: CSSProperties = { animationDuration: `${seconds}s` };
  return (
    <div className="absolute left-1/2 top-1/2 animate-orbit" style={duration}>
      <span
        aria-hidden
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/25"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      {marks.map((mark, i) => {
        const angle = ((offset + (i * 360) / marks.length) * Math.PI) / 180;
        return (
          <span
            key={mark.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: Math.cos(angle) * radius, top: Math.sin(angle) * radius }}
          >
            {/* Spins back the other way so the logo stays upright. */}
            <span className="block animate-orbit [animation-direction:reverse]" style={duration}>
              <MarkTile mark={mark} />
            </span>
          </span>
        );
      })}
    </div>
  );
}

const CHIP_SPOTS = [
  "left-[6%] top-[18%]",
  "left-[10%] bottom-[16%] animate-float-slow",
  "right-[6%] top-[22%] animate-float-slow",
  "right-[9%] bottom-[14%]",
];

/** The tools card: Dexisphere at the centre, its connectors circling, real tool calls ticking off at the sides. */
export function ToolsVisual() {
  return (
    <BentoStage className="h-72 sm:h-72">
      <div className="absolute inset-0 scale-[0.8] sm:scale-100">
        <Ring marks={ORBIT_OUTER} radius={150} offset={-20} seconds={90} />
        <Ring marks={ORBIT_INNER} radius={88} offset={45} seconds={60} />
        <div className="absolute left-1/2 top-1/2 grid size-18 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[20px] border border-accent/30 bg-surface shadow-glow">
          <span aria-hidden className="absolute inset-0 animate-pulse-glow rounded-[20px]" />
          <Image src="/image/dexisphere-icon100.png" alt="Dexisphere" width={40} height={40} />
        </div>
      </div>
      {TOOL_CHIPS.map((tool, i) => (
        <span
          key={tool}
          className={cn(
            "glass-strong absolute hidden items-center gap-1.5 rounded-full px-2.5 py-1.5 font-mono text-[11.5px] text-ink shadow-surface sm:inline-flex",
            i % 2 === 0 && "animate-float",
            CHIP_SPOTS[i],
          )}
        >
          <span className="grid size-4 place-items-center rounded-full bg-good-soft text-good">
            <Check aria-hidden className="size-2.5" strokeWidth={3} />
          </span>
          {tool}
        </span>
      ))}
    </BentoStage>
  );
}
