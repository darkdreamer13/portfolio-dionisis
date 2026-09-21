"use client";

import { useEffect, useRef } from "react";
import type { Locale, MoreWorkCase } from "@/lib/content";

export default function MoreWorkModal({
  project,
  locale,
  onClose,
}: {
  project: MoreWorkCase;
  locale: Locale;
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

  const labels =
    locale === "el"
      ? {
          close: "Κλείσιμο",
          role: "Ο ρόλος μου",
          result: "Αποτελέσματα",
          visit: "Δείτε το live website ↗",
        }
      : {
          close: "Close",
          role: "My role",
          result: "Results",
          visit: "Visit live website ↗",
        };

  return (
    <div className="modal-backdrop more-work-backdrop" onMouseDown={onClose}>
      <article
        className="more-work-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={"more-work-title-" + project.id}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="more-work-modal-header">
          <div className="more-work-modal-logo">
            <img src={project.logo} alt="" />
          </div>
          <button
            ref={closeRef}
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label={labels.close}
          >
            <span aria-hidden="true">×</span>
            <span>{labels.close}</span>
          </button>
        </header>

        <div className="more-work-modal-body">
          {project.period ? <div className="more-work-period">{project.period}</div> : null}
          <h2 id={"more-work-title-" + project.id}>{project.title}</h2>

          <div className="more-work-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="more-work-text">
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="more-work-role">
            <span>{labels.role}</span>
            <p>{project.role}</p>
          </section>

          {project.metrics?.length ? (
            <section className="more-work-metrics">
              <div className="eyebrow">{labels.result}</div>
              <div className="more-work-metric-grid">
                {project.metrics.map((metric) => (
                  <article key={metric.value + metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <blockquote>{project.closing}</blockquote>

          {project.liveUrl ? (
            <a
              className="button button-primary more-work-live-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {labels.visit}
            </a>
          ) : null}
        </div>
      </article>
    </div>
  );
}
