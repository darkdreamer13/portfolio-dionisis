import type { Locale } from "@/lib/content";

type OperationsCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  systemsLabel: string;
  systems: readonly {
    title: string;
    subtitle: string;
    body: string;
  }[];
  flow: readonly string[];
  closing: string;
};

export default function ProjectOperationsSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: OperationsCopy;
}) {
  return (
    <section
      className="section project-operations"
      aria-labelledby="project-operations-title"
    >
      <div className="operations-heading">
        <div>
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2 id="project-operations-title">{copy.title}</h2>
        </div>
        <p>{copy.intro}</p>
      </div>

      <div className="operations-label">{copy.systemsLabel}</div>

      <div className="operations-system-grid">
        {copy.systems.map((system) => (
          <article className="operations-system-card" key={system.title}>
            <span>{system.title}</span>
            <h3>{system.subtitle}</h3>
            <p>{system.body}</p>
          </article>
        ))}
      </div>

      <div
        className="operations-flow"
        aria-label={
          locale === "el"
            ? "Ροή project operations"
            : "Project operations flow"
        }
      >
        {copy.flow.map((step, index) => (
          <span key={step}>
            {step}
            {index < copy.flow.length - 1 ? <b aria-hidden="true">→</b> : null}
          </span>
        ))}
      </div>

      <blockquote className="operations-closing">{copy.closing}</blockquote>
    </section>
  );
}
