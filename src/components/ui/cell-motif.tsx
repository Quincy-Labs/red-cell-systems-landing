"use client";

import { cn } from "@/lib/utils";

interface CellMotifProps {
  className?: string;
}

/** Decorative engraving-style grid inspired by logo rhythm — not a logo recreation */
export function CellMotif({ className }: CellMotifProps) {
  return (
    <svg
      className={cn("text-blood/20", className)}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.5">
        <circle cx="55" cy="55" r="28" />
        <circle cx="55" cy="55" r="10" strokeOpacity="0.4" />
        <path
          d="M 145 45 Q 120 55 115 80 Q 110 105 135 115 Q 155 122 165 95 Q 172 70 145 45"
          strokeLinecap="round"
        />
        <circle cx="145" cy="145" r="28" />
        <circle cx="145" cy="145" r="10" strokeOpacity="0.4" />
        <path
          d="M 55 155 Q 80 145 85 120 Q 90 95 65 85 Q 45 78 35 105 Q 28 130 55 155"
          strokeLinecap="round"
        />
      </g>
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={100}
          y1={100}
          x2={100 + 70 * Math.cos((i * Math.PI) / 2 + Math.PI / 4)}
          y2={100 + 70 * Math.sin((i * Math.PI) / 2 + Math.PI / 4)}
          stroke="currentColor"
          strokeWidth="0.3"
          opacity="0.15"
        />
      ))}
    </svg>
  );
}
