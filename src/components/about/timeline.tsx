"use client";
// Bang Wira - github.com/sepatusendal

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkle } from "@/components/home/hero-decor";
import {
  FlagPlantIcon,
  NetworkNodesIcon,
  BroadcastSignalIcon,
  MapSpreadIcon,
  TargetGoalIcon,
} from "@/components/about/timeline-icons";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ICONS = {
  flag: FlagPlantIcon,
  network: NetworkNodesIcon,
  broadcast: BroadcastSignalIcon,
  map: MapSpreadIcon,
  target: TargetGoalIcon,
} as const;

export type TimelineIconKey = keyof typeof ICONS;

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  icon?: TimelineIconKey;
  /** Marks the "you are here" node — only one milestone should set this. */
  current?: boolean;
}

const ACCENTS = ["text-gk-red", "text-gk-blue", "text-gk-mustard"] as const;
const NODE_BG = ["bg-gk-red", "bg-gk-blue", "bg-gk-mustard"] as const;

export function Timeline({
  items,
  className,
}: {
  items: TimelineMilestone[];
  className?: string;
}) {
  const spineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={cn("relative", className)}>
      <div ref={spineRef} className="relative">
        {/* Track: the full journey, always visible */}
        <div
          aria-hidden
          className="absolute left-5 top-1 bottom-1 w-[3px] -translate-x-1/2 bg-gk-black/15 lg:left-1/2"
        />
        {/* Fill: grows as you scroll through the journey */}
        <motion.div
          aria-hidden
          style={{ scaleY: fillScale }}
          className="absolute left-5 top-1 bottom-1 w-[3px] origin-top -translate-x-1/2 bg-gk-red lg:left-1/2"
        />

        <ol className="relative flex flex-col gap-16 lg:gap-24">
          {items.map((item, index) => (
            <TimelineItem key={`${item.year}-${item.title}`} item={item} index={index} />
          ))}
        </ol>
      </div>

      {/* Trailhead: where the story keeps going */}
      <div className="relative mt-16 flex flex-col items-center gap-3 text-center lg:mt-24">
        <Sparkle className="size-8 animate-gk-wiggle text-gk-mustard" />
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gk-black/50">
          Babak selanjutnya, mungkin ada nama lo
        </p>
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: TimelineMilestone; index: number }) {
  const isRight = index % 2 === 1;
  const accent = item.current ? "text-gk-red" : ACCENTS[index % ACCENTS.length];
  const nodeBg = item.current ? "bg-gk-red" : NODE_BG[index % NODE_BG.length];

  return (
    <li className="relative">
      {/* Node, pinned to the spine on both breakpoints */}
      <div className="absolute left-5 top-0 z-10 -translate-x-1/2 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
        {item.current ? (
          <span
            aria-hidden
            className="absolute inset-0 -m-1.5 animate-gk-pulse-soft rounded-full bg-gk-red/40"
          />
        ) : null}
        <span
          className={cn(
            "relative flex size-10 items-center justify-center rounded-full brutal-border",
            nodeBg,
          )}
        >
          <span className="size-2.5 rounded-full bg-gk-white" />
        </span>
      </div>

      {/* Mobile: single column, always right of the spine */}
      <div className="pl-16 lg:hidden">
        <MilestoneCard item={item} accent={accent} index={index} />
      </div>

      {/* Desktop: alternating left / right of a centered spine */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-14">
        <div className={cn("flex", isRight ? "justify-end pr-14" : "invisible")}>
          {!isRight ? null : <MilestoneCard item={item} accent={accent} index={index} />}
        </div>
        <div className={cn("flex", !isRight ? "justify-start pl-14" : "invisible")}>
          {isRight ? null : <MilestoneCard item={item} accent={accent} index={index} />}
        </div>
      </div>
    </li>
  );
}

function MilestoneCard({
  item,
  accent,
  index,
}: {
  item: TimelineMilestone;
  accent: string;
  index: number;
}) {
  const Icon = item.icon ? ICONS[item.icon] : null;
  const isRight = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 32 : -32, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative w-full max-w-md bg-gk-white p-6 brutal-border brutal-shadow-sm brutal-hover sm:p-7",
        index % 2 === 0 ? "-rotate-1" : "rotate-1",
      )}
    >
      {item.current ? (
        <Badge variant="red" className="absolute -top-3 left-6 -rotate-2">
          Sekarang
        </Badge>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "font-display text-sm font-bold uppercase tracking-[0.2em]",
            accent,
          )}
        >
          {item.year}
        </span>
        {Icon ? (
          <span className={cn("shrink-0", accent)}>
            <Icon className="size-9" />
          </span>
        ) : null}
      </div>
      <h3 className="mt-2 font-display text-xl font-bold uppercase leading-tight tracking-tight text-gk-black sm:text-2xl">
        {item.title}
      </h3>
      <p className="mt-2 text-base text-gk-black/70">{item.description}</p>
    </motion.div>
  );
}
