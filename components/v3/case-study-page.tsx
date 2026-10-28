"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteCopy, type Locale, type ProjectAsset, type ProjectCase } from "@/lib/content";
import { caseLabels, projectExtras } from "@/lib/v3-content";
import ProjectShowcase from "@/components/project-showcase";
import FloatingActions from "@/components/floating-actions";
import ProjectVisual from "@/components/v3/project-visual";
import CaseImage from "@/components/v3/case-image";

const EMAIL_HREF = "mailto:geo178@hotmail.com";
const PHONE_HREF = "tel:+306973635835";
const LINKEDIN_HREF = "https://www.linkedin.com/in/diliopoulos/";
const UPWORK_HREF = "https://www.upwork.com/freelancers/~0191fc300963a39cd2?mp_source=share";
const CV_HREF = "/cv/Dionisios_Iliopoulos_CV.pdf";
const MOBILE_PERSONAL_LIMIT = 4;

export default function CaseStudyPage({
  locale,
  project,
  prevProject,
  nextProject,
}: {
  locale: Locale;
  project: ProjectCase;
  prevProject: ProjectCase;
  nextProject: ProjectCase;
}) {
  const copy = siteCopy[locale];
  const labels = copy.modal;
  const v3 = caseLabels[locale];
  const extra = projectExtras[locale][project.id];
  const nextExtra = projectExtras[locale][nextProject.id];
  const otherLocale = locale === "el" ? "en" : "el";
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [personalOpen, setPersonalOpen] = useState(false);
  const [lightbox, setLightbox] = useState<ProjectAsset | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const hiddenPersonal = Math.max(0, project.personalWork.length - MOBILE_PERSONAL_LIMIT);

  return (
    <main className="v3-case-page" data-project={project.id}>
      <header className="site-header v3-case-header">
        <Link href={"/" + locale} className="brand-name">
          {locale === "el" ? "Διονύσης Ηλιόπουλος" : "Dionisios Iliopoulos"}
        </Link>
        <div className="header-actions">
          <Link className="language-switch" href={"/" + otherLocale + "/projects/" + project.id}>
            {otherLocale.toUpperCase()}
          </Link>
          <a className="button button-primary header-cta" href={EMAIL_HREF}>
            {copy.nav.talk}
          </a>
        </div>
      </header>

      <nav className="v3-breadcrumb" aria-label={locale === "el" ? "Διαδρομή" : "Breadcrumb"}>
        <Link href={"/" + locale + "#work"}>{v3.allWork}</Link>
        <span aria-hidden="true">/</span>
        <span>{project.title}</span>
      </nav>

      <section className="v3-case-hero">
        <div className="v3-case-hero-copy">
          <div className="v3-case-meta">
            {project.period} · {project.status}
          </div>
          <div className="eyebrow">{project.categories.join(" · ")}</div>
          <h1>{project.title}</h1>
          <p className="v3-case-tagline">{project.tagline}</p>
          {extra ? (
            <div className="v3-result-box">
              <strong>{extra.metricValue}</strong>
              <span>{extra.metricLabel}</span>
            </div>
          ) : null}
          <div className="v3-case-role">
            <span>{labels.role}</span>
            <p>{project.role}</p>
          </div>
          <div className="v3-case-actions">
            <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
              {labels.visitWebsite}
            </a>
            <a className="button button-secondary" href={EMAIL_HREF}>
              {v3.talkSimilar}
            </a>
          </div>
        </div>
        <div className="v3-browser">
          <div className="v3-browser-bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>{project.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
          </div>
          <ProjectVisual
            project={project}
            extra={extra}
            sizes="(max-width: 760px) 100vw, 760px"
            className="v3-browser-visual"
            priority
          />
        </div>
      </section>

      <section className="v3-case-intro">
        {project.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      {project.assets.length > 0 ? (
        <section className="v3-case-gallery" aria-label={labels.gallery}>
          <div className="eyebrow">{labels.gallery}</div>
          <div className="v3-gallery-grid v3-swipe">
            {project.assets.map((asset, index) => (
              <figure key={asset.src} className={index === 0 ? "is-lead" : ""}>
                <button type="button" onClick={() => setLightbox(asset)} aria-label={asset.alt}>
                  <CaseImage
                    src={asset.src}
                    alt={asset.alt}
                    sizes={index === 0 ? "(max-width: 760px) 85vw, 880px" : "(max-width: 760px) 85vw, 460px"}
                  />
                </button>
                {asset.label ? <figcaption>{asset.label}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <ProjectShowcase projectId={project.id} locale={locale} />

      <section className="v3-case-body">
        <div className="v3-case-story">
          {project.sections.map((section, index) => {
            const isOpen = index === 0 || Boolean(openSections[section.title]);
            return (
              <section key={section.title} className={"v3-story-section" + (isOpen ? " is-open" : "")}>
                <h2>
                  <button
                    type="button"
                    className="v3-acc-toggle"
                    aria-expanded={isOpen}
                    disabled={index === 0}
                    onClick={() => setOpenSections((current) => ({ ...current, [section.title]: !current[section.title] }))}
                  >
                    <span>{section.title}</span>
                    {index > 0 ? <b aria-hidden="true">{isOpen ? "−" : "+"}</b> : null}
                  </button>
                </h2>
                <div className="v3-story-content">
                  {section.flow ? (
                    <div className="v3-flow">
                      {section.flow.split(" → ").map((step, stepIndex, all) => (
                        <span key={step}>
                          {step}
                          {stepIndex < all.length - 1 ? <b aria-hidden="true">→</b> : null}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            );
          })}

          <section className="v3-case-result">
            <div className="eyebrow">{labels.result}</div>
            {project.result.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <blockquote className="v3-quote v3-case-closing">{project.closing}</blockquote>
        </div>

        <aside className="v3-case-sidebar">
          <section className={"v3-side-card" + (personalOpen ? " is-expanded" : "")}>
            <div className="eyebrow">{labels.personally}</div>
            <ul className="v3-personal-list">
              {project.personalWork.map((item, index) => (
                <li key={item} className={index >= MOBILE_PERSONAL_LIMIT ? "is-extra" : ""}>
                  {item}
                </li>
              ))}
            </ul>
            {hiddenPersonal > 0 && !personalOpen ? (
              <button type="button" className="v3-read-more mobile-only" onClick={() => setPersonalOpen(true)}>
                {v3.more(hiddenPersonal)} ↓
              </button>
            ) : null}
          </section>

          {project.collaborators.length > 0 ? (
            <section className="v3-side-card">
              <div className="eyebrow">{labels.collaborators}</div>
              {project.collaborators.map((person) => (
                <div className="v3-collaborator" key={person.role}>
                  <strong>{person.role}</strong>
                  <p>{person.description}</p>
                </div>
              ))}
            </section>
          ) : null}

          <section className="v3-side-card">
            <div className="eyebrow">{labels.tools}</div>
            <div className="tool-cloud v3-tools">
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="v3-case-next">
        <div className="v3-case-next-head">
          <div className="eyebrow">{v3.next}</div>
          <Link href={"/" + locale + "/projects/" + prevProject.id}>
            ← {v3.previous}: {prevProject.title}
          </Link>
        </div>
        <Link className="v3-next-big" href={"/" + locale + "/projects/" + nextProject.id}>
          <span className="v3-next-copy">
            <strong>{nextProject.title}</strong>
            <span>{nextProject.tagline}</span>
            {nextExtra ? <em>{nextExtra.proof}</em> : null}
            <span className="button button-primary">{v3.viewCase}</span>
          </span>
          <ProjectVisual project={nextProject} extra={nextExtra} sizes="(max-width: 760px) 100vw, 560px" className="v3-next-visual" />
        </Link>
      </section>

      <section className="final-cta" id="contact">
        <div>
          <div className="eyebrow inverse-eyebrow">{copy.cta.eyebrow}</div>
          <h2>{copy.cta.title}</h2>
          <p>{copy.cta.body}</p>
        </div>
        <div className="final-cta-actions">
          <a className="button button-primary" href={EMAIL_HREF}>
            {copy.cta.button}
          </a>
          <a className="button button-call" href={PHONE_HREF}>
            {locale === "el" ? "Κλήση" : "Call"}
          </a>
        </div>
        <strong>{copy.cta.closing}</strong>
      </section>

      <footer className="site-footer">
        <div>
          <strong>{copy.footer.name}</strong>
          <span>{copy.footer.descriptor}</span>
        </div>
        <div className="footer-meta">
          <span>{copy.footer.location}</span>
          <div className="footer-links">
            <a href={LINKEDIN_HREF} target="_blank" rel="noreferrer">LinkedIn</a>
            <span aria-hidden="true">·</span>
            <a href={UPWORK_HREF} target="_blank" rel="noreferrer">Upwork</a>
            <span aria-hidden="true">·</span>
            <a href={CV_HREF} download="Dionisios_Iliopoulos_CV.pdf">CV ↓</a>
          </div>
          <a className="footer-phone" href={PHONE_HREF}>+30 697 363 5835</a>
        </div>
      </footer>

      <nav className={"v3-sticky-bar mobile-only" + (showStickyBar ? " is-visible" : "")} aria-label={v3.next}>
        <Link href={"/" + locale + "/projects/" + prevProject.id} aria-label={v3.previous + ": " + prevProject.title}>
          ←
        </Link>
        <Link className="v3-sticky-next" href={"/" + locale + "/projects/" + nextProject.id}>
          {v3.next}: {nextProject.title} →
        </Link>
      </nav>

      <div className="desktop-only">
        <FloatingActions locale={locale} />
      </div>

      {lightbox ? (
        <div className="case-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.label ?? lightbox.alt} onMouseDown={() => setLightbox(null)}>
          <button type="button" className="case-lightbox-close" aria-label={labels.close} onClick={() => setLightbox(null)}>
            ×
          </button>
          <figure onMouseDown={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            {lightbox.label ? <figcaption>{lightbox.label}</figcaption> : null}
          </figure>
        </div>
      ) : null}
    </main>
  );
}
