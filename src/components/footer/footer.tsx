import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const footerLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Pilot Program", href: "#pilot" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-gray bg-bone px-6 py-16 md:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo size="md" className="text-charcoal [&_span]:text-charcoal" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/50">
            AI-native biomedical intelligence for the next generation of
            healthcare.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-charcoal/55 transition-colors hover:text-blood"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-warm-gray pt-8">
        <p className="text-xs text-charcoal/40">
          © {year} Red Cell Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
