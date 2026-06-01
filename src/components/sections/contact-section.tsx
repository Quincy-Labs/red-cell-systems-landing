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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          organization: formData.get("organization"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative px-6 py-36 md:px-10 md:py-48 lg:px-12"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        <SectionHeading
          eyebrow="Contact"
          title="Start the conversation."
          description="Tell us where continuity breaks down today."
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
                We will respond within two business days.
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

              {error && (
                <p
                  className="rounded-xl border border-blood/20 bg-blood/5 px-4 py-3 text-sm text-blood"
                  role="alert"
                >
                  {error}
                </p>
              )}

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
                    disabled={loading}
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
                    disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                  autoComplete="organization"
                  className={inputClass}
                  placeholder="Your clinic, CBO, or program"
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
                  disabled={loading}
                  rows={4}
                  className={cn(inputClass, "resize-none")}
                  placeholder="Where does patient context get lost in your workflow?"
                />
              </div>

              <LiquidButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                disabled={loading}
              >
                {loading ? "Sending…" : "Send Message"}
                <Send className="h-4 w-4" aria-hidden />
              </LiquidButton>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
