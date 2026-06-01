import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Red Cell Systems — The longitudinal context layer for sickle cell care",
  description:
    "Healthcare forgets. Patients remember. Red Cell Systems is infrastructure for preserving the context of chronic disease across providers, organizations, and time.",
  keywords: [
    "sickle cell disease",
    "continuity of care",
    "care coordination",
    "longitudinal patient history",
    "emergency preparedness",
  ],
  openGraph: {
    title: "Red Cell Systems",
    description:
      "Infrastructure for continuity in chronic disease. Beginning with sickle cell disease.",
    type: "website",
    images: [{ url: "/rcs-logo.png", width: 1024, height: 1024, alt: "Red Cell Systems" }],
  },
  icons: {
    icon: "/rcs-logo-red.svg",
    apple: "/rcs-logo-red.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
