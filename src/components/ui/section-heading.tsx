"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-xs font-medium uppercase tracking-[0.2em]",
            dark ? "text-bone/50" : "text-charcoal/45",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={titleId}
        className={cn(
          "font-serif text-4xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-[3.25rem]",
          dark ? "text-bone" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed md:text-xl",
            dark ? "text-bone/65" : "text-charcoal/60",
          )}
        >
          {description}
        </p>
      )}
    </motion.header>
  );
}
