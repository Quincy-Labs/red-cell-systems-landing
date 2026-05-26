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
            eyebrow="Pilot program"
            title="Help shape the future of continuity of care."
            description="We are co-designing workflows with organizations that serve sickle cell patients — learning from real care environments to build tools that work."
            align="center"
            className="mx-auto"
          />

          <p
            id="pilot-heading"
            className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-charcoal/60 md:text-lg"
          >
            Community-based organizations, sickle cell centers, clinics,
            navigation programs, and advocacy groups — if your team supports
            sickle cell patients and continuity is a challenge, we want to build
            with you.
          </p>

          <ul className="mx-auto mt-8 max-w-xl space-y-3 text-sm text-charcoal/55 md:text-base">
            {[
              "Early access to Emergency Passport and Crisis Timeline",
              "Dedicated support during pilot",
              "Direct founder feedback channel",
              "No cost during pilot phase",
            ].map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blood" aria-hidden />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <LiquidButton href="#contact" variant="primary" size="lg">
              Join the Pilot
            </LiquidButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
