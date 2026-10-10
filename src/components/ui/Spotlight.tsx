"use client";

import { useEffect, useRef } from "react";

/**
 * A soft light that follows the pointer across its parent. The parent needs
 * `group/spot relative overflow-hidden`; ui/Card adds them for linked cards.
 */
export function Spotlight() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const light = ref.current;
    const host = light?.parentElement;
    if (!light || !host) return;
    const follow = (event: PointerEvent) => {
      const box = host.getBoundingClientRect();
      light.style.setProperty("--x", `${event.clientX - box.left}px`);
      light.style.setProperty("--y", `${event.clientY - box.top}px`);
    };
    host.addEventListener("pointermove", follow);
    return () => host.removeEventListener("pointermove", follow);
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 can-hover:group-hover/spot:opacity-100"
    />
  );
}
