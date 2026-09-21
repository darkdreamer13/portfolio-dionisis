"use client";

import { useEffect, useRef } from "react";
import {
  profileModalCopy,
  type Locale,
  type ProfileModalMode,
} from "@/lib/content";

const CV_HREF = "/cv/Dionisios_Iliopoulos_CV.pdf";
const LINKEDIN_HREF = "https://www.linkedin.com/in/diliopoulos/";
const UPWORK_HREF = "https://www.upwork.com/freelancers/~0191fc300963a39cd2?mp_source=share";

export default function ProfileModal({
  mode,
  locale,
  onClose,
}: {
  mode: ProfileModalMode;
  locale: Locale;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const copy = profileModalCopy[locale][mode];
  const isThinking = mode === "thinking";

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
    <div className={"modal-backdrop profile-backdrop " + (isThinking ? "is-thinking" : "is-about")} onMouseDown={onClose}>
      <article
        className={"profile-modal " + (isThinking ? "profile-modal-thinking" : "profile-modal-about")}
        role="dialog"
        aria-modal="true"
        aria-labelledby={"profile-modal-title-" + mode}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="profile-modal-header">
          <div className={"eyebrow " + (isThinking ? "inverse-eyebrow" : "")}>{copy.eyebrow}</div>
          <button
            ref={closeRef}
            type="button"
            className={"modal-close " + (isThinking ? "profile-close-dark" : "")}
            onClick={onClose}
            aria-label={locale === "el" ? "Κλείσιμο" : "Close"}
          >
            <span aria-hidden="true">×</span>
            <span>{locale === "el" ? "Κλείσιμο" : "Close"}</span>
          </button>
        </header>

        <div className="profile-modal-body">
          <h2 id={"profile-modal-title-" + mode}>{copy.title}</h2>

          <div className="profile-intro">
            {copy.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {copy.timeline ? (
            <section className="profile-timeline">
              {copy.timeline.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </section>
          ) : null}

          {copy.today ? (
            <section className="profile-today">
              <div className="eyebrow">{copy.today.title}</div>
              <p>{copy.today.body}</p>
            </section>
          ) : null}

          {copy.facts ? (
            <section className="profile-facts">
              {copy.facts.map((fact) => (
                <article key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </section>
          ) : null}

          {copy.principles ? (
            <section className="thinking-principles">
              {copy.principles.map((principle) => (
                <article key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              ))}
            </section>
          ) : null}

          {copy.process ? (
            <section className="thinking-process">
              <div className="thinking-process-line" aria-hidden="true" />
              {copy.process.map((step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </section>
          ) : null}

          {copy.statement ? (
            <blockquote className="thinking-statement">{copy.statement}</blockquote>
          ) : null}

          <div className="profile-closing">{copy.closing}</div>

          {!isThinking ? (
            <div className="profile-links">
              <a className="button button-primary" href={CV_HREF} download="Dionisios_Iliopoulos_CV.pdf">
                {locale === "el" ? "Λήψη βιογραφικού ↓" : "Download CV ↓"}
              </a>
              <a href={LINKEDIN_HREF} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={UPWORK_HREF} target="_blank" rel="noreferrer">Upwork ↗</a>
            </div>
          ) : null}
        </div>
      </article>
    </div>
  );
}
