"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-charcoal/10 bg-white/60 px-4 py-3.5 text-charcoal placeholder:text-charcoal/35 backdrop-blur-sm transition-colors focus:border-blood/30 focus:outline-none focus:ring-2 focus:ring-blood/15";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative px-6 py-28 md:px-10 md:py-36 lg:px-12"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        <SectionHeading
          eyebrow="Contact"
          title="Begin the conversation"
          description="Tell us about your organization and the intelligence challenges you're ready to solve together."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {submitted ? (
            <div
              className="glass rounded-2xl p-10 text-center"
              role="status"
              aria-live="polite"
            >
              <p className="font-serif text-2xl text-charcoal">
                Thank you for reaching out.
              </p>
              <p className="mt-4 text-charcoal/60">
                Our team will respond within two business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass space-y-5 rounded-2xl p-8 md:p-10"
              noValidate
            >
              <h3 id="contact-heading" className="sr-only">
                Contact form
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-charcoal/50"
                  >
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className={inputClass}
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-charcoal/50"
                  >
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className={inputClass}
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-charcoal/50"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="jane@organization.org"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-charcoal/50"
                >
                  Organization
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  required
                  autoComplete="organization"
                  className={inputClass}
                  placeholder="Your institution or company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-charcoal/50"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={cn(inputClass, "resize-none")}
                  placeholder="Describe your goals and how we might collaborate..."
                />
              </div>

              <LiquidButton type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                Send message
                <Send className="h-4 w-4" aria-hidden />
              </LiquidButton>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
