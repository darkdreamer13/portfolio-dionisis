import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin", "greek"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Dionisios Iliopoulos — Digital Strategy · Content · Web · AI",
  description:
    "Digital strategy, content, websites, AI, automation and project leadership by Dionisios Iliopoulos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el" className={geist.variable + " " + geistMono.variable}>
      <body>{children}</body>
    </html>
  );
}
