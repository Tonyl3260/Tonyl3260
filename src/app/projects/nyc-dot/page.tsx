import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NYC DOT Traffic Map | Tony Lin",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const ACCENT = "#1D9E75";

const LINKS = [
  { label: "View Live Map ↗", href: "https://flowmap.nyctmc.org/polyline_editor/", github: false },
];

const ANALYTICS = [
  {
    label: "Descriptive",
    color: "#378ADD",
    description: "Real-time traffic counts, incident logs, and speed enforcement data across all 5 boroughs and 850+ cameras.",
  },
  {
    label: "Diagnostic",
    color: "#EF9F27",
    description: "Identified congestion patterns by location, time of day, and event type to understand root causes of traffic buildup.",
  },
  {
    label: "Predictive",
    color: "#534AB7",
    description: "Year-over-year BQE trend analysis to forecast congestion windows during active construction operations.",
  },
  {
    label: "Prescriptive",
    color: "#1D9E75",
    description: "Recommended contractor scheduling adjustments and supported traffic planning for major NYC events based on historical congestion data.",
  },
];

// ─── Link button ──────────────────────────────────────────────────────────────

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

export default function NYCDOTPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0d0d0f", color: "#e8e8ea" }}>
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
              NYC DOT Traffic Map
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
            { value: "850+", label: "Cameras monitored" },
            { value: "5",    label: "NYC boroughs"       },
            { value: "95%+", label: "Data accuracy"      },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-heading" style={{ fontSize: "30px", fontWeight: 600, color: ACCENT, margin: "0 0 4px" }}>
                {value}
              </p>
              <p className="font-body" style={{ fontSize: "12px", color: "#444", margin: 0 }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Body sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>

          {/* The Problem */}
          <section>
            <h2 className="font-body" style={{ fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "12px" }}>
              The Problem
            </h2>
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: 0 }}>
              The NYC Department of Transportation monitors vehicle flow and congestion across all
              5 boroughs in real time. With 850+ traffic cameras generating continuous data on
              counts, incidents, and speed enforcement, manually tracking operational performance
              across that scale was not feasible. Field operations teams needed reliable, accurate
              reporting to respond to congestion and coordinate contractor scheduling during active
              construction.
            </p>
          </section>

          {/* The Approach */}
          <section>
            <h2 className="font-body" style={{ fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "12px" }}>
              The Approach
            </h2>
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: "0 0 14px" }}>
              Co-built a real-time geospatial traffic flow map at flowmap.nyctmc.org to visualize
              live vehicle movement across all 5 boroughs. Built and maintained the operational
              reporting pipeline for traffic counts, incidents, and speed enforcement data across
              850+ cameras, achieving 95%+ data accuracy across all reports.
            </p>
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: "0 0 14px" }}>
              Used SQL and Excel pivot tables to query and analyze year-over-year BQE traffic
              data, identifying congestion trends and patterns that directly supported contractor
              scheduling decisions during construction operations.
            </p>
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: 0 }}>
              Delivered traffic impact analyses for major NYC events including the NYC Marathon
              and Yankees/Mets games, giving operations teams advance visibility into expected
              congestion hotspots.
            </p>
          </section>

          {/* Analytics Type */}
          <section>
            <h2 className="font-body" style={{ fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "12px" }}>
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

          {/* Results */}
          <section>
            <h2 className="font-body" style={{ fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "12px" }}>
              Results
            </h2>
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: "0 0 12px" }}>
              850+ cameras monitored across all 5 NYC boroughs. 95%+ data accuracy maintained
              across all operational reporting tools. Traffic impact analyses delivered for the
              NYC Marathon, Yankees games, and Mets games. Geospatial traffic flow map built and
              deployed to production at NYC DOT, used daily by field operations teams.
            </p>
            <p className="font-body" style={{ fontSize: "12px", color: "#555", lineHeight: "1.7", margin: 0, fontStyle: "italic" }}>
              This project was built during a 4-year internship at the NYC Department of
              Transportation (Nov 2021 – Jan 2026).
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
