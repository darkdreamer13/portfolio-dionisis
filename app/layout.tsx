import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "greek"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dionisios Iliopoulos — Digital Strategy · Content · Web · AI",
  description:
    "Digital strategy, content, websites, AI, automation and project leadership by Dionisios Iliopoulos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el" className={inter.variable + " " + GeistMono.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
