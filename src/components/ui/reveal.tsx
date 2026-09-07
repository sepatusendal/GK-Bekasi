"use client";
// Bang Wira - github.com/sepatusendal

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { getScrollDirection, initScrollDirectionTracker } from "@/lib/scroll-direction";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    initScrollDirectionTracker();
  }, []);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dir = getScrollDirection();

    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: reduceMotion
          ? { duration: 0.01 }
          : { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
      });
    } else {
      controls.set({ opacity: 0, y: reduceMotion ? 0 : dir === "down" ? y : -y });
    }
  }, [inView, controls, delay, y]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
