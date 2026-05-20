import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YnotCard Dashboard | Tony Lin",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const TAGS = ["Next.js", "React", "TypeScript", "Tableau", "SQL", "Python"];

const LINKS = [
  { label: "Live app ↗", href: "https://ynotcard.vercel.app/",                                                                                                                         github: false },
  { label: "GitHub",     href: "https://github.com/Tonyl3260/ynotcard",                                                                                                               github: true  },
  { label: "Tableau ↗",  href: "https://public.tableau.com/app/profile/tonylin3260/viz/YnotCardTCGPlayerSalesAnalyticsJan-Apr2026/Dashboard",                                         github: false },
];

const ANALYTICS = [
  {
    label: "Descriptive",
    color: "#378ADD",
    description: "Visualizes order volume by week, revenue by month, top selling cards, and geographic demand by state.",
  },
  {
    label: "Diagnostic",
    color: "#EF9F27",
    description: "Breaks down profit and loss by product after platform fees, shipping costs, and supply expenses to identify which items are worth selling.",
  },
  {
    label: "Predictive",
    color: "#534AB7",
    description: "Flags slow-moving inventory based on days since last sale and demand trends by card set.",
  },
  {
    label: "Prescriptive",
    color: "#1D9E75",
    description: "Recommends which cards to restock and which shipping supply sizes to buy based on order volume and package weight patterns.",
  },
];

// ─── Shared link button ───────────────────────────────────────────────────────

function LinkButton({ label, href, github }: { label: string; href: string; github: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-[5px] bg-[#1a1a1d] border border-[#2a2a2f] text-[#aaa] px-3 py-[5px] rounded-full text-[12px] font-body font-medium hover:border-[#378ADD] hover:text-[#378ADD] transition-colors duration-150"
    >
      {github && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      )}
      {label}
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function YnotCardPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0d0d0f", color: "#e8e8ea" }}>

      {/* Content */}
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "24px 24px 48px" }}>

        {/* Back */}
        <a
          href="/#projects"
          className="font-body text-[13px] text-[#555] hover:text-[#888] transition-colors duration-150"
          style={{ display: "inline-flex", alignItems: "center", gap: "4px", textDecoration: "none", marginBottom: "16px" }}
        >
          ← Back to portfolio
        </a>

        {/* Title + badge + links */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h1 className="font-heading" style={{ fontSize: "32px", fontWeight: 500, color: "#e8e8ea", margin: 0, lineHeight: 1.2 }}>
              YnotCard Dashboard
            </h1>
            <span
              className="font-body"
              style={{ background: "#0a2a18", color: "#4ade80", border: "1px solid #0f3d22", fontSize: "11px", fontWeight: 500, borderRadius: "8px", padding: "3px 8px", flexShrink: 0 }}
            >
              Live
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {LINKS.map((l) => <LinkButton key={l.label} {...l} />)}
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid #1e1e22", marginBottom: "36px" }} />

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginBottom: "48px", textAlign: "center" }}>
          {[
            { value: "458",     label: "Q1 2026 Orders"  },
            { value: "$12,657", label: "Q1 2026 Revenue" },
            { value: "50",      label: "States reached"  },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-heading" style={{ fontSize: "30px", fontWeight: 600, color: "#378ADD", margin: "0 0 4px" }}>
                {value}
              </p>
              <p className="font-body" style={{ fontSize: "12px", color: "#444", margin: 0 }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Body sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px", marginBottom: "48px" }}>

          <section>
            <h2 className="font-body" style={{ fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
              The Problem
            </h2>
            <p className="font-body" style={{ fontSize: "15px", color: "#888", lineHeight: "1.75", margin: 0 }}>
              Running a TCG reselling business means hundreds of orders across multiple months
              with no easy way to see how long inventory sits, what shipping supplies to reorder,
              or whether a product is actually profitable after fees and shipping costs. TCGPlayer
              does not export a clean month-to-month order sheet, so tracking anything required
              piecing together data manually.
            </p>
          </section>

          <section>
            <h2 className="font-body" style={{ fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
              The Approach
            </h2>
            <p className="font-body" style={{ fontSize: "15px", color: "#888", lineHeight: "1.75", margin: 0 }}>
              Built Python scripts to clean and combine raw TCGPlayer exports. The main challenges
              were merging packing slip data across months, removing empty rows that TCGPlayer
              includes by default, and cleaning the inventory sheet by stripping out columns like
              Add Quantity and rows that contained images instead of data. The cleaned data feeds
              into Tableau dashboards and a Next.js frontend for live tracking.
            </p>
          </section>

          <section>
            <h2 className="font-body" style={{ fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
              Analytics Type
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {ANALYTICS.map(({ label, color, description }) => (
                <div
                  key={label}
                  style={{ background: `${color}1a`, borderTop: `2px solid ${color}`, borderRadius: "10px", padding: "12px 14px" }}
                >
                  <p className="font-body" style={{ fontSize: "13px", fontWeight: 500, color, margin: "0 0 6px" }}>
                    {label}
                  </p>
                  <p className="font-body" style={{ fontSize: "12px", color: "#666", lineHeight: "1.55", margin: 0 }}>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-body" style={{ fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
              Results
            </h2>
            <p className="font-body" style={{ fontSize: "15px", color: "#888", lineHeight: "1.75", margin: 0 }}>
              458 orders tracked across Q1 2026. $12,657 in revenue across 50 states. Clear
              visibility into which products to restock, which to markdown, and which shipping
              supplies to buy in bulk.
            </p>
          </section>

        </div>


      </main>
    </div>
  );
}
