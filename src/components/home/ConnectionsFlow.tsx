"use client";

import { FileText } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Pill } from "@/components/ui/Pill";
import { FLOW_CHIPS, FLOW_EDGES, FLOW_NODES, type FlowNode, type FlowTone } from "@/data/home/connections-flow";
import { cn } from "@/lib/cn";

const TONES: Record<FlowTone, string> = {
  warn: "border-warn/25 bg-warn/12 text-warn",
  teal: "border-teal/25 bg-teal/12 text-teal",
  accent: "border-accent/25 bg-accent/12 text-accent",
  violet: "border-violet/25 bg-violet/12 text-violet",
  good: "border-good/25 bg-good/12 text-good",
  pink: "border-pink/25 bg-pink/12 text-pink",
};

type Edge = { d: string; x1: number; y1: number; x2: number; y2: number; column: number };

/** Measures the laid-out nodes and returns one curve per edge, right edge of source to left edge of target. */
function useEdges() {
  const boardRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLElement>());
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const measure = () => {
      const nodes = nodeRefs.current;
      // The observer can fire while the section unmounts, after React has detached the node refs.
      if (!board.isConnected || FLOW_NODES.some((node) => !nodes.get(node.id))) return;
      const origin = board.getBoundingClientRect();
      const box = (id: string) => nodes.get(id)!.getBoundingClientRect();
      setEdges(
        FLOW_EDGES.map(([from, to]) => {
          const a = box(from);
          const b = box(to);
          const x1 = a.right - origin.left;
          const y1 = a.top + a.height / 2 - origin.top;
          const x2 = b.left - origin.left;
          const y2 = b.top + b.height / 2 - origin.top;
          const bend = (x2 - x1) / 2;
          const column = FLOW_NODES.findIndex((node) => node.id === from);
          return { d: `M${x1},${y1} C${x1 + bend},${y1} ${x2 - bend},${y2} ${x2},${y2}`, x1, y1, x2, y2, column };
        }),
      );
    };
    const observer = new ResizeObserver(measure);
    observer.observe(board);
    return () => observer.disconnect();
  }, []);

  // One stable callback per node, so React doesn't detach and re-attach every ref on each render.
  const [register] = useState(() => {
    const callbacks = new Map<string, (el: HTMLElement | null) => void>();
    return (id: string) => {
      if (!callbacks.has(id)) {
        callbacks.set(id, (el) => {
          if (el) nodeRefs.current.set(id, el);
          else nodeRefs.current.delete(id);
        });
      }
      return callbacks.get(id)!;
    };
  });
  return { boardRef, register, edges };
}

/** Tapotik's workflow builder: a live flow card whose connections pulse from left to right. */
export function ConnectionsFlow() {
  const { boardRef, register, edges } = useEdges();
  const gradientId = useId();

  return (
    <div className="rounded-[28px] border border-line bg-surface p-5 shadow-lift sm:p-8">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <FileText aria-hidden className="size-4 text-muted" />
        <span className="text-[14px] font-medium text-ink">after-every-client-call</span>
        <Pill tone="good" dot>
          Live
        </Pill>
        <span className="ml-auto flex items-center gap-2 font-mono text-[12px] text-muted">
          Runs after every call <span className="text-line">|</span>
          <span className="text-good">nothing sends without you</span>
        </span>
      </div>

      <div ref={boardRef} className="relative">
        <svg aria-hidden className="pointer-events-none absolute inset-0 z-20 hidden size-full overflow-visible lg:block">
          <defs>
            <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" style={{ stopColor: "var(--brand-from)" }} />
              <stop offset="100%" style={{ stopColor: "var(--brand-to)" }} />
            </linearGradient>
          </defs>
          {edges.map((edge, i) => (
            <g key={i}>
              <path d={edge.d} fill="none" stroke={`url(#${gradientId})`} strokeOpacity={0.55} strokeWidth={1.5} />
              <path
                d={edge.d}
                pathLength={1}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeDasharray="0.14 0.86"
                className="animate-flow motion-reduce:hidden"
                style={{ animationDelay: `${edge.column * 0.45}s` }}
              />
              <circle cx={edge.x1} cy={edge.y1} r={3} fill="var(--brand-from)" />
              <circle cx={edge.x2} cy={edge.y2} r={3} fill="var(--brand-to)" />
            </g>
          ))}
        </svg>

        <ol className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 lg:gap-x-14 lg:gap-y-4">
          {FLOW_NODES.map((node) => (
            <FlowCard key={node.id} node={node} ref={register(node.id)} />
          ))}
        </ol>
      </div>

      <ul className="mt-8 flex flex-wrap justify-center gap-2">
        {FLOW_CHIPS.map((chip) => (
          <li key={chip} className="rounded-full border border-line bg-raised px-3 py-1 font-mono text-[11.5px] text-muted">
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowCard({ node, ref }: { node: FlowNode; ref: (el: HTMLLIElement | null) => void }) {
  return (
    <li
      ref={ref}
      className={cn("relative z-10 flex w-full items-center gap-3.5 rounded-[14px] border border-line bg-surface p-4 shadow-float", node.place)}
    >
      <span className={cn("grid size-10 shrink-0 place-items-center rounded-[10px] border", TONES[node.tone])}>
        <node.Icon aria-hidden className="size-4.5" />
      </span>
      <span className="grid min-w-0">
        <span className="truncate text-[14px] font-semibold text-ink">{node.label}</span>
        <span className="truncate font-mono text-[12px] text-muted">{node.detail}</span>
      </span>
    </li>
  );
}
