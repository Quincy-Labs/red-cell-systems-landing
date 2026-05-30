"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const problems = [
  {
    title: "Fragmented History",
    description:
      "Critical information lives across hospitals, specialists, clinics, community organizations, and memory.",
  },
  {
    title: "Repeated Storytelling",
    description:
      "Patients often explain the same medical history repeatedly across every care encounter.",
  },
  {
    title: "Delayed Care",
    description:
      "Missing context can slow treatment decisions during moments when speed matters most.",
  },
  {
    title: "Broken Continuity",
    description:
      "No trusted continuity layer follows patients across organizations, providers, and crises.",
  },
];

export function PlatformArchitecture() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-charcoal px-6 py-28 text-bone md:px-10 md:py-36 lg:px-12"
      aria-labelledby="problem-heading"
    >
      <div className="pointer-events-none absolute inset-0 engraving-pattern opacity-30" />
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blood/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The problem"
          title="Context disappears when sickle cell patients need it most."
          description="During a pain crisis, providers may lack access to medications, care plans, prior interventions, and longitudinal history. Patients are forced to reconstruct information that healthcare systems fail to retain."
          dark
          className="mb-16 md:mb-24"
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3
                id={index === 0 ? "problem-heading" : undefined}
                className="font-serif text-2xl font-light text-bone md:text-3xl"
              >
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-bone/60 md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
