type ResultsCopy = {
  eyebrow: string;
  title: string;
  items: readonly (readonly string[])[];
};

export default function ResultsStrip({ copy }: { copy: ResultsCopy }) {
  return (
    <section className="v3-results" aria-labelledby="v3-results-title">
      <div className="eyebrow">{copy.eyebrow}</div>
      <h2 id="v3-results-title">{copy.title}</h2>
      <div className="v3-results-grid">
        {copy.items.map(([value, label]) => (
          <div className="v3-result" key={value + label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
