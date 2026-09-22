import type { Locale } from "@/lib/content";

type LeadershipCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  items: readonly {
    number: string;
    title: string;
    body: string;
  }[];
  flow: readonly string[];
};

export default function ProjectLeadershipSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: LeadershipCopy;
}) {
  return (
    <section
      id="leadership"
      className="section project-leadership"
      aria-labelledby="project-leadership-title"
    >
      <div className="leadership-shell">
        <div className="leadership-intro">
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2 id="project-leadership-title">{copy.title}</h2>
          <p>{copy.intro}</p>
        </div>

        <div className="leadership-card-grid">
          {copy.items.map((item) => (
            <article className="leadership-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div
        className="leadership-flow"
        aria-label={
          locale === "el"
            ? "Ροή project leadership"
            : "Project leadership flow"
        }
      >
        {copy.flow.map((step, index) => (
          <span key={step}>
            {step}
            {index < copy.flow.length - 1 ? <b aria-hidden="true">→</b> : null}
          </span>
        ))}
      </div>
    </section>
  );
}
