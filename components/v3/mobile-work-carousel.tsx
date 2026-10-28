"use client";

import { useRef, useState } from "react";
import type { Locale, ProjectCase } from "@/lib/content";
import { caseLabels, projectExtras } from "@/lib/v3-content";
import ProjectVisual from "@/components/v3/project-visual";

type SelectedCopy = {
  eyebrow: string;
  title: string;
  thinkingEyebrow: string;
  thinkingTitle: string;
};

/** Mobile Selected Work: swipe cards, one visible plus a peek of the next. */
export default function MobileWorkCarousel({
  locale,
  copy,
  projects,
  onOpen,
  onOpenThinking,
}: {
  locale: Locale;
  copy: SelectedCopy;
  projects: ProjectCase[];
  onOpen: (id: string) => void;
  onOpenThinking: () => void;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const extras = projectExtras[locale];

  const onScroll = () => {
    const rail = railRef.current;
    const card = rail?.firstElementChild as HTMLElement | null;
    if (!rail || !card) return;
    setActive(Math.min(projects.length - 1, Math.round(rail.scrollLeft / (card.offsetWidth + 12))));
  };

  return (
    <section className="mobile-only v3-mobile-work" aria-labelledby="v3-mobile-work-title">
      <div className="eyebrow">{copy.eyebrow}</div>
      <h2 id="v3-mobile-work-title">{copy.title}</h2>

      <div className="v3-mobile-rail" ref={railRef} onScroll={onScroll}>
        {projects.map((project) => {
          const extra = extras[project.id];
          return (
            <button
              key={project.id}
              type="button"
              className="v3-mobile-card"
              onClick={() => onOpen(project.id)}
              aria-label={project.title + " — " + project.tagline}
            >
              <ProjectVisual project={project} extra={extra} sizes="300px" className="v3-mobile-card-visual" />
              <span className="v3-card-copy">
                <strong>{project.title}</strong>
                {extra ? <em>{extra.proof}</em> : null}
                <span>{project.tagline}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="v3-rail-indicator" aria-hidden="true">
        {projects.map((project, index) => (
          <span key={project.id} className={index === active ? "is-active" : ""} />
        ))}
        <small>
          {active + 1} / {projects.length} · {caseLabels[locale].swipe}
        </small>
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
