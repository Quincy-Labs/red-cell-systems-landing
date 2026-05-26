"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

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
          title="Context disappears when sickle cell patients need it most"
          description="During a pain crisis, providers may lack access to medications, care plans, prior interventions, and longitudinal history. Patients are forced to reconstruct information that healthcare systems fail to retain."
          dark
          className="mb-16 md:mb-24"
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {[
            {
              stat: "90%",
              label: "of ER providers lack access to a sickle cell patient's existing care plan during crisis",
            },
            {
              stat: "4.2x",
              label: "average number of times patients re-explain their history per hospital encounter",
            },
            {
              stat: "72%",
              label: "of community navigators report missing context between patient touchpoints",
            },
            {
              stat: "0",
              label: "single sources of truth that follow a patient across care settings, organizations, and crises",
            },
          ].map((item, index) => (
            <motion.div
              key={item.stat}
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
              <p
                id={index === 0 ? "problem-heading" : undefined}
                className="font-serif text-4xl font-light text-blood md:text-5xl"
              >
                {item.stat}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-bone/60 md:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
