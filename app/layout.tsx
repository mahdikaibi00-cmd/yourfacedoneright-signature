import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AZ Studio of Electrolysis & Permanent Makeup | Scottsdale, AZ | Your Face Done Right",
  description: "Over 20+ years of cosmetic tattooing & permanent hair removal mastery in Scottsdale, Arizona by Karyn Smith. Specializing in Microblading, Nano Brows, Velvet Lip Blush, Permanent Eyeliner, and Medical Electrolysis.",
  keywords: [
    "Permanent Makeup Scottsdale",
    "Microblading Scottsdale AZ",
    "Electrolysis Scottsdale",
    "Karyn Smith",
    "Your Face Done Right",
    "Cosmetic Tattoo Scottsdale",
    "Permanent Hair Removal Scottsdale"
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sans.variable} ${serif.variable} font-sans antialiased bg-[#FAFAFA] text-[#2A2A2A]`}
      >
        {children}
      </body>
    </html>
  );
}
