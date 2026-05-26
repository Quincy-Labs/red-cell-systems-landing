"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { GlassCard } from "@/components/ui/glass-card";
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
      className="relative min-h-[100svh] overflow-hidden bg-charcoal"
      aria-labelledby="hero-heading"
    >
      <HeroVideoBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-24 pt-32 md:px-10 md:pt-40 lg:px-12"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-bone/50">
              Continuity of care, preserved
            </p>
            <h1
              id="hero-heading"
              className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-bone sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              The missing context layer for chronic care.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/65 md:text-xl">
              Critical health information is often scattered across providers,
              visits, and organizations. Patients become responsible for carrying
              the context healthcare systems fail to preserve. Red Cell Systems
              helps them keep a trusted history wherever care happens.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <LiquidButton href="#pilot" variant="primary" size="lg">
                Join the Pilot
                <ArrowRight className="h-4 w-4" aria-hidden />
              </LiquidButton>
              <LiquidButton href="#product" variant="ghost" size="lg">
                See the Emergency Passport
              </LiquidButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <GlassCard
              variant="dark"
              className="relative overflow-hidden border-white/15 p-8"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blood/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-bone/45">
                Living intelligence
              </p>
              <p className="relative mt-4 font-serif text-2xl font-light leading-snug text-bone">
                From fragmented records to connected understanding.
              </p>
              <ul className="relative mt-8 space-y-4 border-t border-white/10 pt-8">
                {[
                  "Knowledge graphs unify clinical, research, and patient data",
                  "AI agents reason across domains with scientific rigor",
                  "Insights surface where care and discovery meet",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="flex gap-3 text-sm leading-relaxed text-bone/70"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blood"
                      aria-hidden
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-bone via-bone/80 to-transparent" />
    </section>
  );
}
