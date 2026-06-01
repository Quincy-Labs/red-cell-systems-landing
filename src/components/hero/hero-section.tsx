"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { LiquidButton } from "@/components/ui/liquid-button";
import { HeroVideoBackground } from "@/components/hero/hero-video-background";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-svh overflow-hidden bg-charcoal"
      aria-labelledby="hero-heading"
    >
      <HeroVideoBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 pb-40 pt-32 md:px-10 md:pb-44 md:pt-36 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.22em] text-bone/50">
            Continuity of care, preserved
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-bone sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Health unfolds across years.
            <br />
            Care happens in moments.
          </h1>
          <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-bone/65 md:mt-12 md:text-xl">
            <p>
              The most important information in chronic disease often exists
              between encounters.
            </p>
            <p>
              Red Cell Systems is building infrastructure that preserves patient
              context across providers, organizations, and time.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-12">
            <LiquidButton href="#pilot" variant="primary" size="lg">
              Join the Pilot
              <ArrowRight className="h-4 w-4" aria-hidden />
            </LiquidButton>
            <LiquidButton href="#platform" variant="ghost" size="lg">
              Explore Emergency Passport
            </LiquidButton>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-t from-bone via-bone/80 to-transparent" />
    </section>
  );
}
