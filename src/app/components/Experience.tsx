import ScrollReveal from "./ScrollReveal";

const bullets = [
  "Queried large transportation datasets using SQL to produce operational reports and support traffic analysis across NYC borough divisions.",
  "Built and maintained Tableau dashboards tracking incident metrics, enabling non-technical stakeholders to monitor trends week-over-week.",
  "Assisted planning teams with ad hoc data pulls and summary reports, reducing turnaround time on recurring requests.",
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-24 max-w-4xl mx-auto">
      {/* Section header */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-12">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-primary">
            Experience
          </h2>
        </div>
      </ScrollReveal>

      {/* Entry card */}
      <ScrollReveal delay={80}>
        <div className="rounded-xl border border-border bg-white p-7 sm:p-8">
          {/* Role + org */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-5">
            <div>
              <h3 className="font-heading text-lg font-semibold text-primary leading-snug">
                Data Analyst Intern
              </h3>
              <p className="font-body text-sm text-secondary mt-0.5">
                NYC Department of Transportation
              </p>
            </div>
            <span className="font-body text-xs font-medium text-secondary border border-border bg-muted px-2.5 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
              2022 – 2024
            </span>
          </div>

          {/* Bullet points */}
          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 font-body text-sm text-secondary leading-relaxed">
                <span className="mt-2 size-1.5 rounded-full bg-accent/50 shrink-0" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}
