"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "light" | "dark";
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({
  variant = "light",
  hover = true,
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6 md:p-8",
        variant === "light" ? "glass" : "glass-dark",
        hover &&
          "transition-shadow duration-500 hover:shadow-[var(--shadow-elevated)]",
        className,
      )}
      whileHover={
        hover
          ? { y: -2, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
