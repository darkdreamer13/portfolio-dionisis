"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ProjectAsset, ProjectCase } from "@/lib/content";
import ProjectShowcase from "@/components/project-showcase";
import CaseImage from "@/components/v3/case-image";
import { caseLabels, type ProjectExtra } from "@/lib/v3-content";

type ModalLabels = {
  close: string;
  role: string;
  personally: string;
  collaborators: string;
  tools: string;
  result: string;
  gallery: string;
  visitWebsite: string;
  visitProject: string;
};

const FEATURED_COUNTS: Record<string, number> = {
  promoters: 2,
  tma: 3,
  "dora-nikolaidou": 1,
  "leclat-beaute": 1,
  pinkberry: 1,
  notias: 2,
};

function MediaGallery({
  assets,
  projectId,
  variant,
  onOpen,
}: {
  assets: ProjectAsset[];
  projectId: string;
  variant: "featured" | "secondary";
  onOpen: (asset: ProjectAsset) => void;
}) {
  if (assets.length === 0) return null;

  return (
    <div
      className={
        "case-gallery case-gallery-" +
        variant +
        " case-gallery-" +
        variant +
        "--" +
        projectId
      }
    >
      {assets.map((asset) => (
        <figure
          key={asset.src}
          className="case-media-item"
          data-kind={asset.kind}
        >
          <button
            type="button"
            className="case-media-button"
            onClick={() => onOpen(asset)}
            aria-label={"Open image: " + asset.alt}
          >
            <span className="case-image-shell">
              <CaseImage src={asset.src} alt={asset.alt} sizes="(max-width: 760px) 100vw, 900px" />
              <span className="case-media-zoom" aria-hidden="true">↗</span>
            </span>
          </button>
          {asset.label ? <figcaption>{asset.label}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}

export default function ProjectModal({
  project,
  labels,
  onClose,
  locale,
  extra,
  prevProject,
  nextProject,
  onNavigate,
  caseHref,
  contactHref,
}: {
  locale: "el" | "en";
  project: ProjectCase;
  labels: ModalLabels;
  onClose: () => void;
  extra?: ProjectExtra;
  prevProject?: ProjectCase | null;
  nextProject?: ProjectCase | null;
  onNavigate?: (id: string) => void;
  caseHref?: string;
  contactHref?: string;
}) {
  const v3 = caseLabels[locale];
  const scrollRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [lightboxAsset, setLightboxAsset] = useState<ProjectAsset | null>(null);

  const featuredCount = FEATURED_COUNTS[project.id] ?? Math.min(2, project.assets.length);
  const featuredAssets = useMemo(
    () => project.assets.slice(0, featuredCount),
    [featuredCount, project.assets],
  );
  const secondaryAssets = useMemo(
    () => project.assets.slice(featuredCount),
    [featuredCount, project.assets],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!lightboxAsset && onNavigate) {
        if (event.key === "ArrowRight" && nextProject) { onNavigate(nextProject.id); return; }
        if (event.key === "ArrowLeft" && prevProject) { onNavigate(prevProject.id); return; }
      }
      if (event.key !== "Escape") return;
      if (lightboxAsset) {
        setLightboxAsset(null);
        return;
      }
      onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxAsset, onClose, onNavigate, nextProject, prevProject]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [project.id]);

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <article
        ref={scrollRef}
        className="case-modal"
        data-project={project.id}
        role="dialog"
        aria-modal="true"
        aria-labelledby={"case-title-" + project.id}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="case-modal-header">
          <div className="case-modal-topline">
            <span>{project.period}</span>
            <span className="dot">·</span>
            <span>{project.status}</span>
          </div>
          <div className="v3-modal-actions">
            {onNavigate && prevProject ? (
              <button type="button" className="v3-modal-nav" onClick={() => onNavigate(prevProject.id)} aria-label={v3.previous + ": " + prevProject.title}>←</button>
            ) : null}
            {onNavigate && nextProject ? (
              <button type="button" className="v3-modal-nav" onClick={() => onNavigate(nextProject.id)} aria-label={v3.next + ": " + nextProject.title}>→</button>
            ) : null}
            {caseHref ? (
              <a className="v3-modal-open-page" href={caseHref}>{v3.openPage}</a>
            ) : null}
          <button
            ref={closeRef}
            className="modal-close"
            type="button"
            onClick={onClose}
            aria-label={labels.close}
          >
            <span aria-hidden="true">×</span>
            <span>{labels.close}</span>
          </button>
          </div>
        </header>

        <div className="case-modal-body">
          <section className="case-hero">
            <div className="case-logo-wrap" style={{ background: project.cardBackground }}>
              <img src={project.logo} alt={project.title + " logo"} />
            </div>
            <div>
              <div className="case-kicker">{project.categories.join(" · ")}</div>
              <h2 id={"case-title-" + project.id}>{project.title}</h2>
              <p className="case-tagline">{project.tagline}</p>
              {extra ? (
                <div className="v3-result-box">
                  <strong>{extra.metricValue}</strong>
                  <span>{extra.metricLabel}</span>
                </div>
              ) : null}
              <div className="case-role">
                <span>{labels.role}</span>
                <p>{project.role}</p>
              </div>
              <a
                className="case-live-link case-live-link-hero"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                {labels.visitWebsite}
              </a>
            </div>
          </section>

          <section className="case-intro">
            {project.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <MediaGallery
            assets={featuredAssets}
            projectId={project.id}
            variant="featured"
            onOpen={setLightboxAsset}
          />

          <ProjectShowcase projectId={project.id} locale={locale} />
          <div className="case-content-grid">
            <div className="case-story-column">
              <div className="case-story">
                {project.sections.map((section) => (
                  <section className="case-section" key={section.title}>
                    <h3>{section.title}</h3>
                    {section.flow ? <div className="case-flow">{section.flow}</div> : null}
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
                  </section>
                ))}
              </div>

              <section className="case-result">
                <div className="eyebrow">{labels.result}</div>
                {project.result.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            </div>

            <aside className="case-sidebar">
              <section className="case-side-block">
                <div className="eyebrow">{labels.personally}</div>
                <ul className="role-list">
                  {project.personalWork.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              {project.collaborators.length > 0 ? (
                <section className="case-side-block">
                  <div className="eyebrow">{labels.collaborators}</div>
                  <div className="collaborator-list">
                    {project.collaborators.map((person) => (
                      <div key={person.role}>
                        <strong>{person.role}</strong>
                        <p>{person.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="case-side-block">
                <div className="eyebrow">{labels.tools}</div>
                <div className="tool-cloud">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </section>
            </aside>
          </div>

          {secondaryAssets.length > 0 ? (
            <section className="case-gallery-full">
              <div className="eyebrow">{labels.gallery}</div>
              <MediaGallery
                assets={secondaryAssets}
                projectId={project.id}
                variant="secondary"
                onOpen={setLightboxAsset}
              />
            </section>
          ) : null}

          <blockquote className="case-closing">{project.closing}</blockquote>
          <div className="case-live-footer">
            <a
              className="case-live-link case-live-link-footer"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {labels.visitProject}
            </a>
          </div>

          <div className="v3-case-end">
            {nextProject && onNavigate ? (
              <button type="button" className="v3-next-card" onClick={() => onNavigate(nextProject.id)}>
                <span className="eyebrow">{v3.next} →</span>
                <strong>{nextProject.title}</strong>
                <span>{nextProject.tagline}</span>
              </button>
            ) : null}
            {contactHref ? (
              <div className="v3-cta-card">
                <strong>{v3.similarTitle}</strong>
                <a className="button button-primary" href={contactHref}>{v3.talkSimilar} →</a>
              </div>
            ) : null}
          </div>
        </div>
      </article>

      {lightboxAsset ? (
        <div
          className="case-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxAsset.label ?? lightboxAsset.alt}
          onMouseDown={(event) => {
            event.stopPropagation();
            setLightboxAsset(null);
          }}
        >
          <button
            type="button"
            className="case-lightbox-close"
            aria-label={labels.close}
            onClick={() => setLightboxAsset(null)}
          >
            ×
          </button>
          <figure onMouseDown={(event) => event.stopPropagation()}>
            <img src={lightboxAsset.src} alt={lightboxAsset.alt} />
            {lightboxAsset.label ? <figcaption>{lightboxAsset.label}</figcaption> : null}
          </figure>
        </div>
      ) : null}
    </div>
  );
}
