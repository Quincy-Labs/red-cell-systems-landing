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
  title: "Red Cell Systems — The missing context layer for sickle cell care",
  description:
    "Red Cell Systems helps sickle cell patients preserve and carry critical health context across providers, organizations, crises, and time.",
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
      "The longitudinal context layer for sickle cell care. Preserving patient context across providers, organizations, and crises.",
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
