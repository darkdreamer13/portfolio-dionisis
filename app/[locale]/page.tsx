import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioPage from "@/components/portfolio-page";
import { projectsByLocale, type Locale } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

const metadataByLocale = {
  el: {
    title: "Διονύσης Ηλιόπουλος | Digital Strategy, Web, Content & AI",
    description:
      "Portfolio του Διονύση Ηλιόπουλου: digital strategy, Next.js websites, content, AI automations και project leadership για επιχειρήσεις και brands.",
  },
  en: {
    title: "Dionisios Iliopoulos | Digital Strategy, Web, Content & AI",
    description:
      "Portfolio of Dionisios Iliopoulos: digital strategy, Next.js websites, content, AI automation and project leadership for businesses and brands.",
  },
} as const;

export function generateStaticParams() {
  return [{ locale: "el" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "el" && locale !== "en") notFound();

  const copy = metadataByLocale[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        el: "/el",
        en: "/en",
        "x-default": "/el",
      },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: "Dionisios Iliopoulos",
      title: copy.title,
      description: copy.description,
      locale: locale === "el" ? "el_GR" : "en_US",
      alternateLocale: locale === "el" ? ["en_US"] : ["el_GR"],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "el" && locale !== "en") notFound();

  const typedLocale = locale as Locale;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Dionisios Iliopoulos",
    alternateName: "Διονύσης Ηλιόπουλος",
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/assets/hero.png`,
    jobTitle: "Digital Strategist & Project Lead",
    telephone: "+306973635835",
    email: "geo178@hotmail.com",
    sameAs: [
      "https://www.linkedin.com/in/diliopoulos/",
      "https://www.upwork.com/freelancers/~0191fc300963a39cd2",
      "https://promoters.gr",
    ],
    knowsAbout: [
      "Digital Strategy",
      "Content Strategy",
      "Web Development",
      "Next.js",
      "Artificial Intelligence",
      "Automation",
      "Analytics",
      "Project Leadership",
    ],
    knowsLanguage: ["Greek", "English", "German"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Dionisios Iliopoulos",
    inLanguage: locale,
    author: { "@id": `${SITE_URL}/#person` },
  };

  const featuredWork = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "el" ? "Επιλεγμένα έργα" : "Selected work",
    itemListElement: projectsByLocale[typedLocale].map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: project.tagline,
      url: project.liveUrl,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([person, website, featuredWork]).replace(/</g, "\\u003c"),
        }}
      />
      <PortfolioPage locale={typedLocale} />
    </>
  );
}
