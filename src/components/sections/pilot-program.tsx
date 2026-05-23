"use client";

import { motion } from "framer-motion";
import { LiquidButton } from "@/components/ui/liquid-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FloatingCell } from "@/components/ui/floating-cell";

export function PilotProgram() {
  return (
    <section
      id="pilot"
      className="relative overflow-hidden px-6 py-28 md:px-10 md:py-36 lg:px-12"
      aria-labelledby="pilot-heading"
    >
      <FloatingCell
        variant="crescent"
        size={160}
        className="absolute -left-12 top-1/2 hidden -translate-y-1/2 opacity-25 lg:block"
        delay={0.5}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass mx-auto max-w-4xl rounded-3xl border border-glass-border p-10 md:p-16"
        >
          <SectionHeading
            eyebrow="Design Partner Program"
            title="Become a Design Partner"
            description="Work directly with Red Cell Systems to shape the future of biomedical intelligence."
            align="center"
            className="mx-auto"
          />

          <p
            id="pilot-heading"
            className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-charcoal/60 md:text-lg"
          >
            We are opening a limited number of pilot partnerships with clinical,
            research, and patient-centered organizations. Partners receive early
            access, dedicated engineering support, and a voice in how the
            platform evolves.
          </p>

          <div className="mt-10 flex justify-center">
            <LiquidButton href="#contact" variant="primary" size="lg">
              Schedule a Discovery Call
            </LiquidButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
