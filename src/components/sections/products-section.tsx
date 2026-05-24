"use client";

import { motion } from "framer-motion";
import { Activity, BookOpen, Microscope, Users } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

const products = [
  {
    icon: Activity,
    name: "Patient Intelligence",
    tagline: "Care that understands the whole person",
    description:
      "Unify longitudinal health records, social determinants, and patient voice into intelligence that clinicians and patients can trust.",
  },
  {
    icon: BookOpen,
    name: "Research Intelligence",
    tagline: "Discovery at the speed of curiosity",
    description:
      "Agents that traverse literature, trials, and datasets—surfacing hypotheses and connections that manual review cannot scale to reach.",
  },
  {
    icon: Microscope,
    name: "Clinical Intelligence",
    tagline: "Rigor where decisions are made",
    description:
      "Evidence-linked reasoning at the point of care, with provenance, confidence scoring, and workflows designed for clinical environments.",
  },
  {
    icon: Users,
    name: "Population Intelligence",
    tagline: "Patterns that protect communities",
    description:
      "Aggregate signals across populations to identify risk, equity gaps, and intervention opportunities before they become crises.",
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative px-6 py-28 md:px-10 md:py-36 lg:px-12"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Products"
          title="Intelligence across every dimension of health"
          description="Modular capabilities that share a common knowledge foundation—deployed together or integrated into your existing stack."
          className="mb-16 md:mb-20"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassCard className="group relative h-full overflow-hidden">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 flex h-32 w-32 items-center justify-center"
                  aria-hidden
                >
                  <div className="absolute inset-0 rounded-full bg-blood/5 transition-transform duration-700 group-hover:scale-150" />
                  <product.icon
                    className="relative h-6 w-6 text-blood"
                    strokeWidth={1.25}
                  />
                </div>
                <h3
                  className="pr-14 font-serif text-2xl font-medium text-charcoal"
                  id={index === 0 ? "products-heading" : undefined}
                >
                  {product.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-blood/80">
                  {product.tagline}
                </p>
                <p className="mt-4 text-base leading-relaxed text-charcoal/60">
                  {product.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
