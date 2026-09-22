import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const headingFont = Manrope({
  subsets: ["latin", "greek"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin", "greek"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dionisios Iliopoulos — Digital Strategy · Content · Web · AI",
    template: "%s",
  },
  description:
    "Digital strategy, content, websites, AI, automation and project leadership by Dionisios Iliopoulos.",
  applicationName: "Dionisios Iliopoulos Portfolio",
  authors: [{ name: "Dionisios Iliopoulos", url: SITE_URL }],
  creator: "Dionisios Iliopoulos",
  publisher: "Dionisios Iliopoulos",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="el"
      className={headingFont.variable + " " + bodyFont.variable + " " + GeistMono.variable}
    >
      <body className={bodyFont.className}>{children}</body>
    </html>
  );
}
