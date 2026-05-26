"use client";

import { motion } from "framer-motion";
import {
  Shield,
  HardDrive,
  Ban,
  FileCheck,
  Lock,
  MessageSquareText,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const principles = [
  {
    icon: Lock,
    title: "Patient-controlled sharing",
    description: "Patients decide what is shared, with whom, and when.",
  },
  {
    icon: HardDrive,
    title: "Local-first direction",
    description: "Data lives with the patient first. Cloud sync is opt-in.",
  },
  {
    icon: Ban,
    title: "No diagnosis or prescribing",
    description: "We preserve context. We do not make clinical decisions.",
  },
  {
    icon: FileCheck,
    title: "Human-readable summaries",
    description: "Every output is understandable by patients and providers alike.",
  },
  {
    icon: Shield,
    title: "Consent-based access",
    description: "Partner views are constructed only from patient-approved data.",
  },
  {
    icon: MessageSquareText,
    title: "Workflow validation",
    description: "We validate in real care workflows before making clinical claims.",
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
      className="relative overflow-hidden bg-charcoal px-6 py-28 text-bone md:px-10 md:py-36 lg:px-12"
      aria-labelledby="trust-heading"
    >
      <div className="pointer-events-none absolute inset-0 engraving-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Built for trust"
          title="Built for trust from day one."
          description="Patient control, transparency, explicit consent, and clear boundaries — designed into the product, not added after."
          dark
          className="mb-16 md:mb-20"
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
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <div
                  className={cn(
                    "mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg",
                    "bg-white/5 text-bone/80",
                  )}
                >
                  <principle.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                </div>
                <h3
                  id={principle.title === "Patient-controlled sharing" ? "trust-heading" : undefined}
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
