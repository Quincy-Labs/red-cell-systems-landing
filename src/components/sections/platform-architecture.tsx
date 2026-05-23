"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Bot,
  Database,
  GitBranch,
  Lightbulb,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const steps = [
  {
    label: "Data",
    description: "Clinical records, research corpora, omics, and patient-reported signals",
    icon: Database,
  },
  {
    label: "Knowledge Graph",
    description: "Unified biomedical ontology connecting entities across domains",
    icon: GitBranch,
  },
  {
    label: "AI Agents",
    description: "Reasoning systems that traverse graphs with scientific guardrails",
    icon: Bot,
  },
  {
    label: "Insights",
    description: "Synthesized understanding surfaced with provenance and confidence",
    icon: Lightbulb,
  },
  {
    label: "Action",
    description: "Decisions, workflows, and discoveries accelerated at the point of need",
    icon: Zap,
  },
];

export function PlatformArchitecture() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-charcoal px-6 py-28 text-bone md:px-10 md:py-36 lg:px-12"
      aria-labelledby="platform-heading"
    >
      <div className="pointer-events-none absolute inset-0 engraving-pattern opacity-30" />
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blood/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Platform architecture"
          title="From data to decisive intelligence"
          description="A deliberate pipeline that transforms fragmented healthcare information into understanding you can act on."
          dark
          className="mb-16 md:mb-24"
        />

        <div className="mx-auto max-w-lg lg:max-w-xl">
          {steps.map((step, index) => (
            <div key={step.label} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-dark group rounded-2xl border border-white/10 p-6 md:p-8"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                      "bg-white/5 text-bone transition-colors group-hover:bg-blood/20 group-hover:text-bone",
                    )}
                  >
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3
                      id={index === 0 ? "platform-heading" : undefined}
                      className="font-serif text-2xl font-light text-bone"
                    >
                      {step.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-bone/55 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute -left-3 top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-blood lg:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                />
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex justify-center py-4"
                  aria-hidden
                >
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <ArrowDown className="h-5 w-5 text-blood/60" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
