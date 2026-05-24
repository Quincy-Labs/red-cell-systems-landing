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
  title: "Red Cell Systems — Intelligence for the next generation of healthcare",
  description:
    "AI-native biomedical intelligence. Transform fragmented healthcare information into living intelligence through knowledge graphs, AI agents, and patient-centered systems.",
  keywords: [
    "biomedical intelligence",
    "healthcare AI",
    "clinical intelligence",
    "knowledge graphs",
    "patient intelligence",
  ],
  openGraph: {
    title: "Red Cell Systems",
    description:
      "AI agents, biomedical infrastructure, and patient-centered systems designed to accelerate discovery and transform health data into living intelligence.",
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
