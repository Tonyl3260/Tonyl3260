import Link from "next/link";

const skills = ["Python", "SQL", "Tableau", "Excel"];

const stats = [
  { value: "4+", label: "Core Tools" },
  { value: "CS '24", label: "CUNY Hunter" },
  { value: "2+", label: "Live Projects" },
];

export default function Hero() {
  return (
    <section className="min-h-dvh flex flex-col justify-center px-6 py-24 max-w-4xl mx-auto">
      {/* Credential badge */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-widest uppercase text-secondary border border-border px-3 py-1.5 rounded-full">
          <span className="size-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
          CUNY Hunter College · Computer Science · 2024
        </span>
      </div>

      {/* Name */}
      <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-primary leading-none mb-3">
        Tony Lin
      </h1>

      {/* Role */}
      <p className="font-heading text-2xl sm:text-3xl font-medium text-accent mb-6">
        Data Analyst
      </p>

      {/* Description */}
      <p className="font-body text-lg text-secondary leading-relaxed max-w-xl mb-8">
        From raw queries to polished dashboards — I help teams understand their
        data through Python, SQL, and Tableau.
      </p>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Core skills">
        {skills.map((skill) => (
          <span
            key={skill}
            role="listitem"
            className="font-body text-sm font-medium text-foreground border border-border bg-white px-3 py-1.5 rounded-md hover:border-accent hover:text-accent transition-colors duration-150"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 font-body font-medium text-sm bg-primary text-white px-5 py-3 rounded-md hover:bg-secondary transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          View Projects
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 7h12M7 1l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center font-body font-medium text-sm text-primary border border-border px-5 py-3 rounded-md hover:border-primary hover:bg-muted transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Get in Touch
        </Link>
      </div>

      {/* Stat cards */}
      <div className="flex flex-wrap gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-0.5 border border-border bg-white px-4 py-3 rounded-lg min-w-[90px]"
          >
            <span className="font-heading text-lg font-semibold text-primary leading-none">
              {stat.value}
            </span>
            <span className="font-body text-xs text-secondary">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
