// Bang Wira - github.com/sepatusendal
import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Subtle Kawung-inspired batik motif, tiled as a low-opacity overlay.
 * Uses currentColor so it can be tinted via a text-* utility on the wrapper.
 */
export function BatikOverlay({ className }: { className?: string }) {
  const id = useId();
  const patternId = `batik-kawung-${id}`;

  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <pattern
          id={patternId}
          width="34"
          height="34"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(12)"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.1">
            <ellipse cx="8.5" cy="8.5" rx="6" ry="8.5" />
            <ellipse cx="25.5" cy="8.5" rx="6" ry="8.5" />
            <ellipse cx="8.5" cy="25.5" rx="6" ry="8.5" />
            <ellipse cx="25.5" cy="25.5" rx="6" ry="8.5" />
          </g>
          <circle cx="17" cy="17" r="2.2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
