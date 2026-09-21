"use client";

import { useEffect, useRef } from "react";
import { productionModalCopy, type Locale } from "@/lib/content";

const UGC_EXAMPLES = [
  "https://www.instagram.com/reel/DbWUCapEzFJ/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/C9w02BENC7s/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/C8TyZhyIWul/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/C4K_vOaNEWc/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
];

export default function ProductionModal({
  locale,
  onClose,
}: {
  locale: Locale;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const copy = productionModalCopy[locale];

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
    <div className="modal-backdrop production-modal-backdrop" onMouseDown={onClose}>
      <article
        className="production-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="production-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="production-modal-header">
          <div className="eyebrow">{copy.eyebrow}</div>
          <button
            ref={closeRef}
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label={locale === "el" ? "Κλείσιμο" : "Close"}
          >
            <span aria-hidden="true">×</span>
            <span>{locale === "el" ? "Κλείσιμο" : "Close"}</span>
          </button>
        </header>

        <div className="production-modal-body">
          <h2 id="production-modal-title">{copy.title}</h2>
          <p className="production-modal-intro">{copy.intro}</p>

          <section className="production-modes">
            {copy.modes.map((mode) => (
              <article key={mode.title}>
                <div className="eyebrow">{mode.title}</div>
                <p>{mode.description}</p>
                <ul>
                  {mode.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="production-responsibility">
            <div className="eyebrow">{copy.responsibilityTitle}</div>
            <p>{copy.responsibilityBody}</p>
            <div className="production-responsibility-flow">
              {copy.responsibilityFlow.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
          </section>

          <section className="production-scale">
            <div className="eyebrow">{copy.collaborationTitle}</div>
            <p>{copy.collaborationBody}</p>
          </section>

          <section className="production-examples">
            <div className="eyebrow">{copy.examplesTitle}</div>
            <p>{copy.examplesBody}</p>
            <div className="ugc-example-grid">
              {UGC_EXAMPLES.map((url, index) => (
                <a
                  key={url}
                  className="ugc-example-card"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="ugc-example-number">
                    UGC {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{copy.exampleRole}</strong>
                  <span className="ugc-example-link">{copy.watchLabel}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="production-modal-workflow">
            {copy.workflow.map((step, index) => (
              <span key={step}>
                {step}
                {index < copy.workflow.length - 1 ? <b>→</b> : null}
              </span>
            ))}
          </section>

          <blockquote className="production-modal-closing">{copy.closing}</blockquote>
        </div>
      </article>
    </div>
  );
}
