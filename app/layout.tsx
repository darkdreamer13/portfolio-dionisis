import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dionisios Iliopoulos — Digital Strategy · Content · Web · AI",
  description:
    "Digital strategy, content, websites, AI, automation and project leadership by Dionisios Iliopoulos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el" className={GeistSans.variable + " " + GeistMono.variable}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
