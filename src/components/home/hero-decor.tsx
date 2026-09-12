// Bang Wira - github.com/sepatusendal
import type { HTMLAttributes, SVGProps } from "react";

export function DotGrid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden {...props}>
      <pattern
        id="hero-dots"
        width="12"
        height="12"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="2" fill="currentColor" />
      </pattern>
      <rect width="72" height="72" fill="url(#hero-dots)" />
    </svg>
  );
}

export function BurstLines(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="70" height="60" viewBox="0 0 70 60" fill="none" aria-hidden {...props}>
      <line x1="8" y1="55" x2="24" y2="6" stroke="var(--gk-black)" strokeWidth="6" strokeLinecap="round" />
      <line x1="32" y1="58" x2="40" y2="4" stroke="var(--gk-black)" strokeWidth="6" strokeLinecap="round" />
      <line x1="56" y1="55" x2="62" y2="10" stroke="var(--gk-black)" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function RingOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden {...props}>
      <path
        d="M20 2 L23.5 16.5 L38 20 L23.5 23.5 L20 38 L16.5 23.5 L2 20 L16.5 16.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PlusMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden {...props}>
      <line x1="14" y1="2" x2="14" y2="26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="2" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function ColorSwatch({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const colors = ["var(--gk-red)", "var(--gk-black)", "var(--gk-mustard)", "var(--gk-bg)"];
  return (
    <div className={className} {...props}>
      <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-[3px] brutal-border bg-gk-black p-[3px]">
        {colors.map((c, i) => (
          <div key={i} style={{ backgroundColor: c }} />
        ))}
      </div>
    </div>
  );
}
