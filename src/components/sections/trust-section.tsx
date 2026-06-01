"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Ban,
  FileCheck,
  Lock,
  Pill,
  Stethoscope,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const principles = [
  {
    icon: Lock,
    title: "Patients decide",
    description: "Patients choose what is shared, with whom, and when.",
  },
  {
    icon: Shield,
    title: "Consented access",
    description: "Partners and care teams see only what a patient has approved.",
  },
  {
    icon: FileCheck,
    title: "We preserve context",
    description: "Our role is to keep the story intact.",
  },
  {
    icon: Ban,
    title: "We do not diagnose",
    description: "Red Cell Systems does not make clinical assessments.",
  },
  {
    icon: Pill,
    title: "We do not prescribe",
    description: "Treatment decisions remain with clinicians.",
  },
  {
    icon: Stethoscope,
    title: "We do not replace clinical judgment",
    description: "We support care. We do not stand in for it.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function TrustSection() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-charcoal px-6 py-36 text-bone md:px-10 md:py-48 lg:px-12"
      aria-labelledby="trust-heading"
    >
      <div className="pointer-events-none absolute inset-0 engraving-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our principles"
          title="Trust must be earned."
          description="Trust is not a feature. It is the foundation. Patients decide what is shared. Partners only see what is consented. The limits of what we do are explicit."
          dark
          className="mb-20 max-w-4xl md:mb-24"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map((principle) => (
            <motion.div key={principle.title} variants={item}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/3 p-7">
                <div
                  className={cn(
                    "mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg",
                    "bg-white/5 text-bone/80",
                  )}
                >
                  <principle.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                </div>
                <h3
                  id={principle.title === "Patients decide" ? "trust-heading" : undefined}
                  className="text-base font-medium text-bone"
                >
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/50">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
