import type { Metadata } from "next";
import { Instrument_Serif, Inter, Allura } from "next/font/google";
import AppShell from "@/components/AppShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const signature = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumanth Reddy",
  description: "Product architect and full stack developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrument.variable} ${signature.variable} antialiased`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
