"use client";

import { motion } from "framer-motion";
import { FileHeart, Clock, FileText, Share2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

const products = [
  {
    icon: FileHeart,
    name: "Emergency Passport",
    tagline: "Trusted context for crisis moments",
    description:
      "A patient-controlled summary containing medications, allergies, care plans, providers, and crisis instructions — ready to share the moment care begins.",
  },
  {
    icon: Clock,
    name: "Crisis Timeline",
    tagline: "Longitudinal history at a glance",
    description:
      "Pain episodes, ER visits, treatments, and outcomes — tracked over time so providers see patterns instead of isolated events.",
  },
  {
    icon: FileText,
    name: "Visit Prep Summary",
    tagline: "Context before every appointment",
    description:
      "A structured summary patients share before clinic visits or advocacy calls — reducing repetition and giving care teams the history they need to act.",
  },
  {
    icon: Share2,
    name: "Partner View",
    tagline: "Consented access for care partners",
    description:
      "Navigators, CBOs, and clinics receive only the context patients choose to share — with clear consent and no back-channel access.",
  },
];

export function ProductsSection() {
  return (
    <section
      id="product"
      className="relative px-6 py-28 md:px-10 md:py-36 lg:px-12"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The first wedge"
          title="The tools that preserve patient context"
          description="Everything a patient needs to carry their story — and everything a care team needs to understand it."
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
