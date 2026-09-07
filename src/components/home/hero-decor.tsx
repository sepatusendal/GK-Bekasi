// Bang Wira - github.com/sepatusendal
import type { SVGProps } from "react";

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

export function MonasSkyline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      preserveAspectRatio="xMinYMax slice"
      aria-hidden
      {...props}
    >
      <rect x="0" y="150" width="60" height="70" fill="var(--gk-black)" />
      <rect x="55" y="120" width="45" height="100" fill="var(--gk-red)" />
      <rect x="95" y="160" width="40" height="60" fill="var(--gk-black)" />
      <rect x="290" y="140" width="50" height="80" fill="var(--gk-black)" />
      <rect x="335" y="165" width="40" height="55" fill="var(--gk-red)" />
      <rect x="370" y="130" width="50" height="90" fill="var(--gk-black)" />
      <rect x="185" y="70" width="14" height="130" fill="var(--gk-black)" />
      <rect x="150" y="195" width="120" height="25" fill="var(--gk-black)" />
      <path d="M178 70 L192 20 L206 70 Z" fill="var(--gk-red)" />
      <circle cx="192" cy="16" r="6" fill="var(--gk-mustard)" />
    </svg>
  );
}
