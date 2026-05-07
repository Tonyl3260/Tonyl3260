import ScrollReveal from "./ScrollReveal";

const primary = [
  {
    name: "Python",
    category: "Data Analysis",
    keywords: ["pandas", "NumPy", "data wrangling"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: "SQL",
    category: "Database Querying",
    keywords: ["joins", "aggregation", "subqueries"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: "Tableau",
    category: "Data Visualization",
    keywords: ["dashboards", "charts", "reports"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    name: "Excel",
    category: "Analysis & Modeling",
    keywords: ["pivot tables", "VLOOKUP", "modeling"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
      </svg>
    ),
  },
];

const secondary = ["React", "Next.js", "JavaScript", "Git"];

export default function Skills() {
  return (
    <section id="skills" className="bg-white border-t border-border py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-primary">
              Skills
            </h2>
          </div>
        </ScrollReveal>

        {/* Primary — Data & Analytics */}
        <ScrollReveal delay={60}>
          <p className="font-body text-xs font-medium tracking-widest uppercase text-secondary mb-5">
            Data &amp; Analytics
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {primary.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={120 + i * 70} className="flex">
              <div className="flex flex-col gap-4 w-full bg-background border border-border rounded-xl p-5 hover:border-accent/50 hover:shadow-sm transition-all duration-200">
                {/* Icon */}
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <div className="w-5 h-5">{skill.icon}</div>
                </div>
                {/* Name + category */}
                <div>
                  <p className="font-heading text-base font-semibold text-primary leading-tight mb-0.5">
                    {skill.name}
                  </p>
                  <p className="font-body text-xs text-secondary">
                    {skill.category}
                  </p>
                </div>
                {/* Keywords */}
                <p className="font-body text-xs text-secondary/60 mt-auto leading-relaxed">
                  {skill.keywords.join(" · ")}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Secondary — Engineering Background */}
        <ScrollReveal delay={450}>
          <div className="pt-8 border-t border-border">
            <p className="font-body text-xs font-medium tracking-widest uppercase text-secondary mb-5">
              Engineering Background
            </p>
            <div className="flex flex-wrap gap-2">
              {secondary.map((name) => (
                <span
                  key={name}
                  className="font-body text-sm font-medium text-secondary border border-border bg-background px-3 py-1.5 rounded-md"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
