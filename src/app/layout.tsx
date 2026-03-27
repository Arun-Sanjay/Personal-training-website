import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Personal Trainer in Bangalore | Home Training, Diet Plans & Fitness App",
  description:
    "Get fit with personalized 1-on-1 training anywhere in Bangalore. Custom workout plans, Indian-diet nutrition coaching, and a fitness tracking app. Book a free trial session.",
  keywords: [
    "personal trainer bangalore",
    "home training bangalore",
    "fitness trainer bangalore",
    "diet plan india",
    "workout plan",
    "personal training",
  ],
  openGraph: {
    title:
      "Personal Trainer in Bangalore | Home Training, Diet Plans & Fitness App",
    description:
      "Get fit with personalized 1-on-1 training anywhere in Bangalore. Custom workout plans, Indian-diet nutrition coaching, and a fitness tracking app.",
    type: "website",
    locale: "en_IN",
    siteName: "Prem Fitness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer in Bangalore | Prem Fitness",
    description:
      "Get fit with personalized 1-on-1 training anywhere in Bangalore.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0A0A0A] text-white">{children}</body>
    </html>
  );
}
