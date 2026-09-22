"use client";

import { useState } from "react";
import { siteCopy, type Locale, type ProjectCase } from "@/lib/content";

type PortfolioCopy = (typeof siteCopy)[Locale];
const capabilityLabels = ["Strategy", "Web", "Content", "AI", "Brand", "Ads"];

export function MobileSelectedWork({
  locale,
  copy,
  projects,
  onOpen,
  onOpenThinking,
}: {
  locale: Locale;
  copy: PortfolioCopy["selected"];
  projects: ProjectCase[];
  onOpen: (id: string) => void;
  onOpenThinking: () => void;
}) {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featured = projects[featuredIndex];

  return (
    <section className="mobile-only mobile-selected-work" aria-labelledby="mobile-work-title">
      <div className="eyebrow">{copy.eyebrow}</div>
      <h2 id="mobile-work-title">{copy.title}</h2>

      <button
        type="button"
        className={"mobile-featured-project project-" + featured.id}
        onClick={() => onOpen(featured.id)}
        aria-label={featured.title + " — " + featured.tagline}
      >
        <span className="mobile-featured-visual" style={{ background: featured.cardBackground }}>
          <img src={featured.logo} alt="" />
        </span>
        <span className="mobile-featured-copy">
          <strong>{featured.title}</strong>
          <span>{featured.tagline}</span>
        </span>
      </button>

      <div className="mobile-work-rail-heading">
        <span>{locale === "el" ? "Περισσότερα έργα" : "More projects"}</span>
        <small>{featuredIndex + 1} / {projects.length}</small>
      </div>

      <div className="mobile-project-rail" role="list" aria-label={locale === "el" ? "Επιλογή έργου" : "Project selector"}>
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            role="listitem"
            className={"mobile-rail-card project-" + project.id + (index === featuredIndex ? " is-active" : "")}
            onClick={() => setFeaturedIndex(index)}
            aria-pressed={index === featuredIndex}
          >
            <span className="mobile-rail-visual" style={{ background: project.cardBackground }}>
              <img src={project.logo} alt="" />
            </span>
            <strong>{project.title}</strong>
            <small>{project.cardCategories}</small>
          </button>
        ))}
      </div>

      <div className="mobile-work-footer">
        <div className="mobile-carousel-dots" aria-hidden="true">
          {projects.map((project, index) => (
            <span key={project.id} className={index === featuredIndex ? "is-active" : ""} />
          ))}
        </div>
        <button type="button" onClick={() => onOpen(featured.id)}>
          {locale === "el" ? "Δείτε το project →" : "View project →"}
        </button>
      </div>

      <button type="button" className="mobile-thinking-cta" onClick={onOpenThinking}>
        <span>
          <small>{copy.thinkingEyebrow}</small>
          <strong>{copy.thinkingTitle}</strong>
        </span>
        <b aria-hidden="true">→</b>
      </button>
    </section>
  );
}

export function MobileCapabilities({
  locale,
  copy,
}: {
  locale: Locale;
  copy: PortfolioCopy["capabilities"];
}) {
  return (
    <section className="mobile-only mobile-capabilities" aria-labelledby="mobile-capabilities-title">
      <div className="eyebrow">{copy.eyebrow}</div>
      <h2 id="mobile-capabilities-title">{copy.title}</h2>

      <div className="mobile-capability-grid">
        {copy.items.map(([title], index) => (
          <article className="mobile-capability-card" key={title}>
            <span className="mobile-capability-icon">{String(index + 1).padStart(2, "0")}</span>
            <strong>{title}</strong>
            <span className="mobile-capability-label">{capabilityLabels[index]}</span>
          </article>
        ))}
      </div>

      <div className="mobile-capability-footer">
        <span>{locale === "el" ? "6 βασικοί άξονες" : "6 core capabilities"}</span>
        <a href="#about">{copy.link}</a>
      </div>
    </section>
  );
}

export function MobileProcess({
  locale,
  copy,
}: {
  locale: Locale;
  copy: PortfolioCopy["process"];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = copy.items[activeIndex];
  const nextIndex = (activeIndex + 1) % copy.items.length;

  return (
    <section className="mobile-only mobile-process" aria-labelledby="mobile-process-title">
      <div className="eyebrow">{copy.eyebrow}</div>
      <h2 id="mobile-process-title">{copy.title}</h2>

      <div className="mobile-process-selector" role="tablist" aria-label={locale === "el" ? "Βήματα διαδικασίας" : "Process steps"}>
        <div className="mobile-process-line" aria-hidden="true" />
        {copy.items.map(([number, title], index) => (
          <button
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={number + " " + title}
            className={index === activeIndex ? "is-active" : ""}
            key={number}
            onClick={() => setActiveIndex(index)}
          >
            {number}
          </button>
        ))}
      </div>

      <article className="mobile-process-detail" role="tabpanel" aria-live="polite">
        <span>{active[0]}</span>
        <h3>{active[1]}</h3>
        <p>{active[2]}</p>
      </article>

      <div className="mobile-process-nav">
        <span>{activeIndex + 1} / {copy.items.length}</span>
        <button type="button" onClick={() => setActiveIndex(nextIndex)}>
          {locale === "el" ? "Επόμενο" : "Next"}: {copy.items[nextIndex][1]} →
        </button>
      </div>

      <div className="mobile-process-statement">
        <span aria-hidden="true" />
        <p>{copy.statement}</p>
      </div>
    </section>
  );
}
