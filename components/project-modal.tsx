"use client";

import { useEffect, useRef } from "react";
import type { ProjectCase } from "@/lib/content";

type ModalLabels = {
  close: string;
  role: string;
  personally: string;
  collaborators: string;
  tools: string;
  result: string;
  gallery: string;
};

export default function ProjectModal({
  project,
  labels,
  onClose,
}: {
  project: ProjectCase;
  labels: ModalLabels;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <article
        className="case-modal"
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
              <div className="case-role">
                <span>{labels.role}</span>
                <p>{project.role}</p>
              </div>
            </div>
          </section>

          <section className="case-intro">
            {project.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="case-gallery case-gallery-featured">
            {project.assets.slice(0, 2).map((asset) => (
              <figure key={asset.src}>
                <div className="case-image-shell">
                  <img src={asset.src} alt={asset.alt} loading="lazy" />
                </div>
                {asset.label ? <figcaption>{asset.label}</figcaption> : null}
              </figure>
            ))}
          </section>

          <div className="case-content-grid">
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

          <section className="case-result">
            <div className="eyebrow">{labels.result}</div>
            {project.result.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          {project.assets.length > 2 ? (
            <section className="case-gallery-full">
              <div className="eyebrow">{labels.gallery}</div>
              <div className="case-gallery">
                {project.assets.slice(2).map((asset) => (
                  <figure key={asset.src}>
                    <div className="case-image-shell">
                      <img src={asset.src} alt={asset.alt} loading="lazy" />
                    </div>
                    {asset.label ? <figcaption>{asset.label}</figcaption> : null}
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          <blockquote className="case-closing">{project.closing}</blockquote>
        </div>
      </article>
    </div>
  );
}
