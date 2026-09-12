"use client";
// Bang Wira - github.com/sepatusendal

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const COLORS = ["#ed1c24", "#f2b705", "#2d6cdf", "#ffffff"];

interface Node {
  x: number;
  y: number;
  baseR: number;
  color: string;
}

interface Pulse {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

/**
 * Ambient "heartbeat" of the movement: a quiet field of dots that
 * occasionally sends out a ring, briefly lighting up whatever it passes.
 * Purely decorative — never a source of real data.
 */
export function DenyutBekasi({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let lastPulseAt = 0;
    let rafId = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(30, Math.min(80, Math.floor((width * height) / 8500)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        baseR: 1 + Math.random() * 1.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    function spawnPulse(time: number) {
      const origin = nodes[Math.floor(Math.random() * nodes.length)];
      if (!origin) return;
      pulses.push({ x: origin.x, y: origin.y, radius: 0, alpha: 0.55 });
      lastPulseAt = time;
    }

    function drawStatic() {
      ctx!.clearRect(0, 0, width, height);
      for (const n of nodes) {
        ctx!.globalAlpha = 0.35;
        ctx!.fillStyle = n.color;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.baseR, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        ctx!.globalAlpha = 0.32;
        ctx!.fillStyle = n.color;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.baseR, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (time - lastPulseAt > 2600) spawnPulse(time);

      pulses = pulses.filter((p) => p.alpha > 0.01);
      for (const p of pulses) {
        p.radius += 1.5;
        p.alpha *= 0.965;

        ctx!.globalAlpha = p.alpha;
        ctx!.strokeStyle = "#ffffff";
        ctx!.lineWidth = 1.2;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.stroke();

        for (const n of nodes) {
          const d = Math.hypot(n.x - p.x, n.y - p.y);
          if (Math.abs(d - p.radius) < 16) {
            ctx!.globalAlpha = Math.min(1, p.alpha * 1.8);
            ctx!.fillStyle = n.color;
            ctx!.beginPath();
            ctx!.arc(n.x, n.y, n.baseR * 2.2, 0, Math.PI * 2);
            ctx!.fill();
          }
        }
      }
      ctx!.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reduceMotion) {
      drawStatic();
    } else {
      rafId = requestAnimationFrame(draw);
    }

    return () => {
      ro.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}
