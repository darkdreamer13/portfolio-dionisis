import { notFound } from "next/navigation";
import PortfolioPage from "@/components/portfolio-page";
import type { Locale } from "@/lib/content";

export function generateStaticParams() {
  return [{ locale: "el" }, { locale: "en" }];
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "el" && locale !== "en") notFound();

  return <PortfolioPage locale={locale as Locale} />;
}
