"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { LiquidButton } from "@/components/ui/liquid-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Thesis", href: "#thesis" },
  { label: "Platform", href: "#platform" },
  { label: "Vision", href: "#vision" },
  { label: "Principles", href: "#trust" },
  { label: "Pilot", href: "#pilot" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onDark = overHero;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8",
        )}
      >
        <nav
          aria-label="Main navigation"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6",
            onDark
              ? cn(
                  "glass-dark-strong text-bone",
                  scrolled ? "shadow-lg" : "shadow-md",
                )
              : cn("glass text-charcoal", scrolled ? "shadow-lg" : "shadow-md"),
          )}
        >
          <Logo
            size="sm"
            variant="red"
            invert={onDark}
            className={
              onDark
                ? "text-bone [&_span]:text-bone"
                : "text-charcoal [&_span]:text-charcoal"
            }
          />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors",
                    onDark
                      ? "text-bone/85 hover:bg-white/10 hover:text-bone"
                      : "text-charcoal/70 hover:bg-charcoal/5 hover:text-charcoal",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <LiquidButton
              href="#pilot"
              variant={onDark ? "ghost" : "outline"}
              size="sm"
            >
              Join the Pilot
            </LiquidButton>
          </div>

          <button
            type="button"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              onDark
                ? "border-white/15 text-bone"
                : "border-charcoal/15 text-charcoal",
            )}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-charcoal/90 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              className="flex h-full flex-col items-center justify-center gap-8 px-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-3xl text-bone"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <LiquidButton
                href="#pilot"
                variant="primary"
                onClick={() => setMobileOpen(false)}
              >
                Join the Pilot
              </LiquidButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
