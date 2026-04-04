import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBotButton from "@/components/FloatingBotButton";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
});

export const metadata: Metadata = {
  title: "CareerForge — Personalized Career Roadmaps for Engineers",
  description:
    "Discover your ideal engineering career path with personality-driven recommendations, visual roadmaps, and AI-powered guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col dot-grid antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingBotButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
