import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/v3/case-study-page";
import { projectsByLocale, type Locale } from "@/lib/content";
import { projectExtras } from "@/lib/v3-content";
import { SITE_URL } from "@/lib/site";

const LOCALES: Locale[] = ["el", "en"];

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    projectsByLocale[locale].map((project) => ({ locale, slug: project.id })),
  );
}

function resolve(locale: string, slug: string) {
  if (locale !== "el" && locale !== "en") return null;
  const projects = projectsByLocale[locale];
  const index = projects.findIndex((project) => project.id === slug);
  if (index === -1) return null;
  return {
    locale: locale as Locale,
    project: projects[index],
    prevProject: projects[(index - 1 + projects.length) % projects.length],
    nextProject: projects[(index + 1) % projects.length],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = resolve(locale, slug);
  if (!data) notFound();

  const { project } = data;
  const extra = projectExtras[data.locale][project.id];
  const author = data.locale === "el" ? "Διονύσης Ηλιόπουλος" : "Dionisios Iliopoulos";
  const title = `${project.title} — ${project.tagline.replace(/\.$/, "")} | ${author}`;
  const description = extra ? `${project.tagline} ${extra.metricValue}: ${extra.metricLabel}.` : project.tagline;
  const path = `/${data.locale}/projects/${project.id}`;
  const image = extra?.screenshot ?? project.logo;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        el: `/el/projects/${project.id}`,
        en: `/en/projects/${project.id}`,
        "x-default": `/el/projects/${project.id}`,
      },
    },
    openGraph: {
      type: "article",
      url: path,
      siteName: "Dionisios Iliopoulos",
      title,
      description,
      locale: data.locale === "el" ? "el_GR" : "en_US",
      images: image.startsWith("http") ? [image] : [`${SITE_URL}${image}`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const data = resolve(locale, slug);
  if (!data) notFound();

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.project.title,
    description: data.project.tagline,
    url: `${SITE_URL}/${data.locale}/projects/${data.project.id}`,
    inLanguage: data.locale,
    author: { "@id": `${SITE_URL}/#person` },
    sameAs: data.project.liveUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork).replace(/</g, "\\u003c") }}
      />
      <CaseStudyPage
        locale={data.locale}
        project={data.project}
        prevProject={data.prevProject}
        nextProject={data.nextProject}
      />
    </>
  );
}
