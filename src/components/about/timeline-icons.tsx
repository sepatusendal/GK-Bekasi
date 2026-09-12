// Bang Wira - github.com/sepatusendal
import type { SVGProps } from "react";

/**
 * Hand-drawn, thick-stroke icon set for the About timeline milestones.
 * Matches the doodle language in home/hero-decor.tsx — currentColor
 * strokes so each card can tint via a text-* utility on the wrapper.
 */

export function FlagPlantIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <line
        x1="15" y1="43" x2="15" y2="6"
        stroke="currentColor" strokeWidth="4" strokeLinecap="round"
      />
      <path d="M15 8 L39 14.5 L15 23 Z" fill="currentColor" />
      <ellipse cx="15" cy="43" rx="11" ry="2.5" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function NetworkNodesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <line x1="24" y1="15" x2="12" y2="33" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="24" y1="15" x2="36" y2="33" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="16" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="10" r="6" fill="currentColor" />
      <circle cx="10" cy="38" r="6" stroke="currentColor" strokeWidth="4" />
      <circle cx="38" cy="38" r="6" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

export function BroadcastSignalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <rect x="6" y="13" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="4" />
      <circle cx="19" cy="22" r="3" fill="currentColor" />
      <line x1="6" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M37 24 Q42 19 37 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M41 29 Q49 19 41 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function MapSpreadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <path
        d="M24 6c-6.6 0-12 5.2-12 11.6C12 26.4 24 42 24 42s12-15.6 12-24.4C36 11.2 30.6 6 24 6Z"
        stroke="currentColor" strokeWidth="4"
      />
      <circle cx="24" cy="17.5" r="4.5" fill="currentColor" />
      <circle cx="6" cy="41" r="3" fill="currentColor" />
      <circle cx="42" cy="41" r="3" fill="currentColor" />
      <circle cx="10" cy="9" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function TargetGoalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="4" />
      <circle cx="24" cy="24" r="10.5" stroke="currentColor" strokeWidth="4" />
      <circle cx="24" cy="24" r="3.5" fill="currentColor" />
    </svg>
  );
}
