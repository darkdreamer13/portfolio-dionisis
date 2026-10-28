"use client";

import { useState } from "react";
import { siteCopy, type Locale } from "@/lib/content";
import { leadershipCopy } from "@/lib/v3-content";

type Copy = (typeof siteCopy)[Locale];

/**
 * One section instead of three (Project Leadership, Process, Project Operations):
 * the six-step process as a timeline (stepper on mobile), what I take on,
 * the systems I set up, and one closing line.
 */
export default function LeadershipMerged({ locale, copy }: { locale: Locale; copy: Copy }) {
  const extra = leadershipCopy[locale];
  const steps = copy.process.items;
  const [active, setActive] = useState(0);
  const next = (active + 1) % steps.length;

  return (
    <section id="leadership" className="v3-leadership" aria-labelledby="v3-leadership-title">
      <div className="v3-leadership-head">
        <div>
          <div className="eyebrow">{copy.projectLeadership.eyebrow}</div>
          <h2 id="v3-leadership-title">{copy.projectLeadership.title}</h2>
        </div>
        <p>{extra.intro}</p>
      </div>

      <ol className="v3-timeline desktop-only">
        {steps.map(([number, title, body]) => (
          <li key={number}>
            <span className="v3-step-dot">{number}</span>
            <strong>{title}</strong>
            <p>{body}</p>
          </li>
        ))}
      </ol>

      <div className="v3-stepper mobile-only">
        <div className="v3-stepper-dots" role="tablist" aria-label={locale === "el" ? "Στάδια" : "Steps"}>
          {steps.map(([number, title], index) => (
            <button
              type="button"
              role="tab"
              key={number}
              aria-selected={index === active}
              aria-label={number + " " + title}
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
            >
              {number}
            </button>
          ))}
        </div>
        <article className="v3-stepper-card" role="tabpanel" aria-live="polite">
          <span>{steps[active][0]}</span>
          <h3>{steps[active][1]}</h3>
          <p>{steps[active][2]}</p>
        </article>
        <div className="v3-stepper-nav">
          <small>
            {active + 1} / {steps.length}
          </small>
          <button type="button" onClick={() => setActive(next)}>
            {locale === "el" ? "Επόμενο" : "Next"}: {steps[next][1]} →
          </button>
        </div>
      </div>

      <div className="v3-leadership-lists">
        <div className="v3-list-card">
          <div className="eyebrow">{extra.responsibilitiesLabel}</div>
          <ul>
            {copy.projectLeadership.items.map((item) => (
              <li key={item.number}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="v3-list-card">
          <div className="eyebrow">{extra.systemsLabel}</div>
          <ul>
            {copy.projectOperations.systems.map((system) => (
              <li key={system.title}>
                <strong>
                  <span className="v3-system-name">{system.title}</span> — {system.subtitle}
                </strong>
                <p>{system.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <blockquote className="v3-quote">{copy.projectOperations.closing}</blockquote>
    </section>
  );
}
