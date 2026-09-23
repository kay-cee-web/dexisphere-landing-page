"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { SERVICES, type Service } from "@/data/home/services";

/** A snap-scrolling row of service cards with previous/next buttons. */
export function ServicesCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const step = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: direction * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <div className="grid gap-8">
      <ul
        ref={track}
        onScroll={measure}
        className="relative -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:-mx-8 lg:scroll-px-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {SERVICES.map((service) => (
          <li key={service.title} className="w-[82%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)]">
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
      <div className="flex justify-end gap-2">
        {([
          [-1, "Previous services", ArrowLeft, edges.start],
          [1, "Next services", ArrowRight, edges.end],
        ] as const).map(([direction, label, Icon, disabled]) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            disabled={disabled}
            onClick={() => step(direction)}
            className="grid size-11 place-items-center rounded-full bg-surface text-ink ring-1 ring-inset ring-line transition hover:ring-accent/50 disabled:opacity-40 disabled:hover:ring-line"
          >
            <Icon aria-hidden className="size-4" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { Icon } = service;
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col gap-6 rounded-[22px] border border-line bg-surface p-4 transition-[box-shadow,border-color] hover:border-accent/30 hover:shadow-lift"
    >
      <div
        className={cn(
          "relative grid aspect-square place-items-center overflow-hidden rounded-[16px] transition-colors duration-300",
          "bg-[linear-gradient(180deg,color-mix(in_srgb,var(--violet)_24%,var(--surface)),var(--surface))]",
          "group-hover:bg-night group-focus-visible:bg-night",
        )}
      >
        <Icon
          aria-hidden
          strokeWidth={1.25}
          className="size-20 text-ink transition-[color,transform] duration-300 group-hover:scale-105 group-hover:text-violet group-focus-visible:text-violet"
        />
      </div>
      <div className="grid gap-2 px-2">
        <h3 className="text-[19px] font-semibold text-ink">{service.title}</h3>
        <p className="text-[14px] leading-relaxed text-muted">{service.description}</p>
      </div>
      <span className="mt-auto inline-flex w-fit items-center rounded-tr-[18px] px-2 pt-2 text-ink">
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
        <span className="sr-only">Learn more about {service.title}</span>
      </span>
    </Link>
  );
}
