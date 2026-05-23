"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CellVariant = "full" | "crescent";

interface FloatingCellProps {
  variant?: CellVariant;
  className?: string;
  size?: number;
  delay?: number;
  duration?: number;
  opacity?: number;
}

function FullCellSvg({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="fullCellGlow" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="100%" stopColor="rgba(155,17,30,0.15)" />
        </radialGradient>
        <linearGradient id="fullCellEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(155,17,30,0.5)" />
          <stop offset="100%" stopColor="rgba(155,17,30,0.15)" />
        </linearGradient>
      </defs>
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="url(#fullCellGlow)"
        stroke="url(#fullCellEdge)"
        strokeWidth="0.75"
      />
      <ellipse
        cx="60"
        cy="60"
        rx="18"
        ry="14"
        fill="rgba(17,17,17,0.06)"
        stroke="rgba(155,17,30,0.2)"
        strokeWidth="0.5"
      />
      {[0, 45, 90, 135].map((angle) => (
        <line
          key={angle}
          x1="60"
          y1="60"
          x2={60 + 38 * Math.cos((angle * Math.PI) / 180)}
          y2={60 + 38 * Math.sin((angle * Math.PI) / 180)}
          stroke="rgba(155,17,30,0.08)"
          strokeWidth="0.4"
        />
      ))}
    </svg>
  );
}

function CrescentCellSvg({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="crescentFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
          <stop offset="100%" stopColor="rgba(232,227,220,0.25)" />
        </linearGradient>
      </defs>
      <path
        d="M 85 25 C 55 15, 25 35, 20 60 C 15 85, 35 105, 65 100 C 90 96, 105 70, 85 25 Z"
        fill="url(#crescentFill)"
        stroke="rgba(155,17,30,0.35)"
        strokeWidth="0.75"
      />
      <path
        d="M 70 35 C 50 30, 35 45, 32 62"
        stroke="rgba(155,17,30,0.12)"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
}

export function FloatingCell({
  variant = "full",
  className,
  size = 120,
  delay = 0,
  duration = 8,
  opacity = 0.85,
}: FloatingCellProps) {
  return (
    <motion.div
      className={cn("pointer-events-none select-none", className)}
      style={{ opacity }}
      initial={{ y: 0 }}
      animate={{
        y: [-12, 12, -12],
        rotate: variant === "crescent" ? [-2, 2, -2] : [0, 3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden
    >
      <div className="rounded-full shadow-[0_20px_60px_rgba(155,17,30,0.12)] backdrop-blur-sm">
        {variant === "full" ? (
          <FullCellSvg size={size} />
        ) : (
          <CrescentCellSvg size={size} />
        )}
      </div>
    </motion.div>
  );
}
