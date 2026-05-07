import Link from "next/link";

const ynotcardTags = ["Tableau", "React", "Next.js", "JavaScript"];

function DashboardPlaceholder() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="YnotCard dashboard — inventory tracker with Tableau sales charts"
    >
      {/* Page background */}
      <rect width="800" height="450" fill="#F8FAFC" />

      {/* Top nav bar */}
      <rect width="800" height="48" fill="#FFFFFF" />
      <rect x="20" y="16" width="84" height="14" rx="3" fill="#18181B" />
      <rect x="660" y="15" width="56" height="16" rx="8" fill="#2563EB" />
      <line x1="0" y1="48" x2="800" y2="48" stroke="#E4E4E7" />

      {/* Left sidebar */}
      <rect x="0" y="48" width="164" height="402" fill="#FFFFFF" />
      <line x1="164" y1="48" x2="164" y2="450" stroke="#E4E4E7" />
      <rect x="16" y="72" width="100" height="9" rx="3" fill="#94A3B8" />
      <rect x="16" y="94" width="132" height="10" rx="3" fill="#2563EB" fillOpacity="0.15" />
      <rect x="24" y="94" width="4" height="10" rx="1" fill="#2563EB" />
      <rect x="16" y="116" width="120" height="10" rx="3" fill="#E4E4E7" />
      <rect x="16" y="138" width="110" height="10" rx="3" fill="#E4E4E7" />
      <rect x="16" y="160" width="126" height="10" rx="3" fill="#E4E4E7" />
      <rect x="16" y="198" width="100" height="9" rx="3" fill="#94A3B8" />
      <rect x="16" y="218" width="114" height="10" rx="3" fill="#E4E4E7" />
      <rect x="16" y="240" width="96" height="10" rx="3" fill="#E4E4E7" />

      {/* KPI row */}
      <rect x="184" y="64" width="148" height="70" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="200" y="80" width="56" height="7" rx="2" fill="#94A3B8" />
      <rect x="200" y="96" width="72" height="18" rx="3" fill="#18181B" />
      <rect x="200" y="118" width="44" height="6" rx="2" fill="#22C55E" fillOpacity="0.7" />

      <rect x="344" y="64" width="148" height="70" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="360" y="80" width="56" height="7" rx="2" fill="#94A3B8" />
      <rect x="360" y="96" width="64" height="18" rx="3" fill="#2563EB" />
      <rect x="360" y="118" width="52" height="6" rx="2" fill="#94A3B8" />

      <rect x="504" y="64" width="148" height="70" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="520" y="80" width="56" height="7" rx="2" fill="#94A3B8" />
      <rect x="520" y="96" width="80" height="18" rx="3" fill="#18181B" />
      <rect x="520" y="118" width="40" height="6" rx="2" fill="#EF4444" fillOpacity="0.6" />

      {/* Bar chart card */}
      <rect x="184" y="148" width="290" height="188" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="200" y="164" width="96" height="9" rx="3" fill="#3F3F46" />
      {/* gridlines */}
      <line x1="200" y1="298" x2="458" y2="298" stroke="#E4E4E7" />
      <line x1="200" y1="270" x2="458" y2="270" stroke="#E4E4E7" strokeDasharray="3 3" />
      <line x1="200" y1="242" x2="458" y2="242" stroke="#E4E4E7" strokeDasharray="3 3" />
      {/* bars */}
      <rect x="210" y="268" width="24" height="30" rx="3" fill="#2563EB" fillOpacity="0.25" />
      <rect x="245" y="248" width="24" height="50" rx="3" fill="#2563EB" fillOpacity="0.45" />
      <rect x="280" y="232" width="24" height="66" rx="3" fill="#2563EB" fillOpacity="0.65" />
      <rect x="315" y="214" width="24" height="84" rx="3" fill="#2563EB" fillOpacity="0.85" />
      <rect x="350" y="224" width="24" height="74" rx="3" fill="#2563EB" fillOpacity="0.75" />
      <rect x="385" y="198" width="24" height="100" rx="3" fill="#2563EB" />
      <rect x="420" y="218" width="24" height="80" rx="3" fill="#2563EB" fillOpacity="0.65" />

      {/* Line chart card */}
      <rect x="486" y="148" width="294" height="188" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="502" y="164" width="104" height="9" rx="3" fill="#3F3F46" />
      {/* gridlines */}
      <line x1="502" y1="298" x2="764" y2="298" stroke="#E4E4E7" />
      <line x1="502" y1="270" x2="764" y2="270" stroke="#E4E4E7" strokeDasharray="3 3" />
      <line x1="502" y1="242" x2="764" y2="242" stroke="#E4E4E7" strokeDasharray="3 3" />
      {/* area fill */}
      <path
        d="M510 290 L548 268 L586 278 L624 244 L662 256 L700 226 L738 240 L738 298 L510 298 Z"
        fill="#2563EB"
        fillOpacity="0.08"
      />
      {/* line */}
      <polyline
        points="510,290 548,268 586,278 624,244 662,256 700,226 738,240"
        stroke="#2563EB"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* dots */}
      <circle cx="624" cy="244" r="3.5" fill="#2563EB" />
      <circle cx="700" cy="226" r="3.5" fill="#2563EB" />

      {/* Table card */}
      <rect x="184" y="350" width="596" height="82" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      {/* header row */}
      <rect x="200" y="364" width="48" height="7" rx="2" fill="#94A3B8" />
      <rect x="330" y="364" width="48" height="7" rx="2" fill="#94A3B8" />
      <rect x="460" y="364" width="48" height="7" rx="2" fill="#94A3B8" />
      <rect x="590" y="364" width="48" height="7" rx="2" fill="#94A3B8" />
      <line x1="200" y1="378" x2="764" y2="378" stroke="#E4E4E7" />
      {/* data row */}
      <rect x="200" y="388" width="68" height="8" rx="2" fill="#3F3F46" />
      <rect x="330" y="388" width="52" height="8" rx="2" fill="#3F3F46" />
      <rect x="460" y="388" width="44" height="8" rx="2" fill="#2563EB" fillOpacity="0.75" />
      <rect x="590" y="388" width="60" height="8" rx="2" fill="#22C55E" fillOpacity="0.7" />
      <rect x="200" y="404" width="56" height="8" rx="2" fill="#E4E4E7" />
      <rect x="330" y="404" width="60" height="8" rx="2" fill="#E4E4E7" />
      <rect x="460" y="404" width="36" height="8" rx="2" fill="#E4E4E7" />
      <rect x="590" y="404" width="50" height="8" rx="2" fill="#E4E4E7" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-4xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-primary">
          Projects
        </h2>
        <span className="font-body text-xs font-medium text-secondary border border-border px-2 py-0.5 rounded-full">
          1 live
        </span>
      </div>

      {/* YnotCard — featured card */}
      <div className="rounded-xl border border-border overflow-hidden bg-white">
        {/* Screenshot placeholder */}
        <div className="relative border-b border-border bg-muted overflow-hidden">
          <DashboardPlaceholder />
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white border border-border text-xs font-body font-medium text-secondary px-2.5 py-1 rounded-full shadow-sm">
            <span className="size-1.5 rounded-full bg-green-500 shrink-0" aria-hidden="true" />
            Live
          </span>
        </div>

        {/* Content */}
        <div className="p-7 sm:p-8">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-secondary mb-1.5">
            Featured Project
          </p>
          <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
            YnotCard
          </h3>
          <p className="font-body text-base text-secondary leading-relaxed max-w-2xl mb-6">
            A TCG card inventory tracker with Tableau sales dashboards. Track card
            values across sets, analyze market trends, and visualize portfolio
            performance — built to put data analysis at the center of a collecting
            hobby.
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-7">
            {ynotcardTags.map((tag) => (
              <span
                key={tag}
                className="font-body text-xs font-medium text-secondary border border-border bg-muted px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://ynotcard.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-medium text-sm bg-primary text-white px-5 py-2.5 rounded-md hover:bg-secondary transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Live
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="https://github.com/Tonyl3260"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-medium text-sm text-primary border border-border px-5 py-2.5 rounded-md hover:border-primary hover:bg-muted transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Future projects hint */}
      <p className="font-body text-sm text-secondary mt-8 text-center">
        More projects in progress — check back soon.
      </p>
    </section>
  );
}
