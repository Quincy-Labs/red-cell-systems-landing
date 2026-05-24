"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-blood text-bone shadow-[0_4px_24px_rgba(155,17,30,0.28)] hover:bg-[#7d0e18]",
        secondary:
          "glass border border-glass-border text-charcoal hover:bg-white/70",
        ghost:
          "border border-white/20 bg-white/5 text-bone backdrop-blur-md hover:bg-white/10",
        outline:
          "border border-charcoal/15 bg-transparent text-charcoal hover:border-blood/40 hover:text-blood",
      },
      size: {
        sm: "h-9 px-5 text-xs",
        md: "h-11 px-7 text-sm",
        lg: "h-12 px-9 text-sm md:text-base min-h-[3.25rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface LiquidButtonProps
  extends VariantProps<typeof buttonVariants> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function LiquidButton({
  variant,
  size,
  href,
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
}: LiquidButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
