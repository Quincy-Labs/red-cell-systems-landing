"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function FounderSection() {
  return (
    <section
      id="founder"
      className="relative px-6 py-28 md:px-10 md:py-36 lg:px-12"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Founder-market fit"
          title="Built by someone who lives this"
          className="mb-12 md:mb-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <div className="glass rounded-2xl border border-glass-border p-8 md:p-12">
            <p
              id="founder-heading"
              className="font-serif text-2xl font-light leading-snug text-charcoal md:text-3xl"
            >
              Red Cell Systems is built by a founder who lives with sickle cell
              disease and has worked inside serious healthcare technology
              environments.
            </p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/65 md:text-lg">
              <p>
                The company starts from a simple truth: patients already carry
                the burden of remembering what fragmented systems forget. Red
                Cell turns that burden into infrastructure.
              </p>
              <p>
                This is not a problem discovered through market research. It is
                a problem lived daily — in emergency rooms, in clinic waiting
                rooms, in phone calls with navigators who have no context. That
                lived experience shapes every product decision.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
