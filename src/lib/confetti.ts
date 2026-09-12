"use client";
// Bang Wira - github.com/sepatusendal

import confetti from "canvas-confetti";

const GK_COLORS = ["#ed1c24", "#111111", "#f2b705", "#2d6cdf", "#ffffff"];

export function celebrate() {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const shared = { colors: GK_COLORS, disableForReducedMotion: true };

  confetti({
    ...shared,
    particleCount: 80,
    spread: 75,
    startVelocity: 38,
    origin: { y: 0.65 },
  });
  confetti({
    ...shared,
    particleCount: 40,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.7 },
  });
  confetti({
    ...shared,
    particleCount: 40,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.7 },
  });
}
