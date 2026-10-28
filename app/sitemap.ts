import type { MetadataRoute } from "next";
import { projectsByLocale } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = (["el", "en"] as const).map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "el" ? 1 : 0.9,
    alternates: {
      languages: {
        el: `${SITE_URL}/el`,
        en: `${SITE_URL}/en`,
      },
    },
  }));

  const projects: MetadataRoute.Sitemap = (["el", "en"] as const).flatMap((locale) =>
    projectsByLocale[locale].map((project) => ({
      url: `${SITE_URL}/${locale}/projects/${project.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          el: `${SITE_URL}/el/projects/${project.id}`,
          en: `${SITE_URL}/en/projects/${project.id}`,
        },
      },
    })),
  );

  const aiInfrastructure: MetadataRoute.Sitemap = (["el", "en"] as const).map((locale) => ({
    url: `${SITE_URL}/${locale}/projects/promoters-ai-infrastructure`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...home, ...projects, ...aiInfrastructure];
}
