import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toronto Airbnb Analysis | Tony Lin",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const ACCENT = "#EF9F27";

const LINKS = [
  { label: "View Dashboard ↗", href: "https://public.tableau.com/app/profile/tonylin3260/viz/TorontoAirbnbOverview/TorontoAirbnbOverview", github: false },
];

const ANALYTICS = [
  {
    label: "Descriptive",
    color: "#378ADD",
    description: "Price distribution, listing volume, and room type breakdown across 140+ Toronto neighbourhoods.",
  },
  {
    label: "Diagnostic",
    color: "#EF9F27",
    description: "Identifies which neighbourhood and room type factors correlate with lower price and higher listing density.",
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

export default function TorontoAirbnbPage() {
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
              Toronto Airbnb Analysis
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
            { value: "18K+", label: "Listings analyzed"  },
            { value: "140+", label: "Neighbourhoods"      },
            { value: "1",    label: "Dashboard published" },
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
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: "0 0 14px" }}>
              Planning a trip to Toronto with friends meant figuring out which neighbourhood to
              stay in. We wanted somewhere cheap, safe, frequently rented (a sign people actually
              liked it), and with enough room for a group. Airbnb&apos;s own search does not make
              it easy to compare neighbourhoods on all these factors at once, so I used the Inside
              Airbnb public dataset to answer it properly.
            </p>
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: 0 }}>
              Note: Airbnb stopped sharing detailed pricing and availability data in recent
              exports, so the analysis focuses on listing volume, room type distribution, and
              neighbourhood patterns from the available data.
            </p>
          </section>

          {/* Data Source */}
          <section>
            <h2 className="font-body" style={{ fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "10px" }}>
              Data Source
            </h2>
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: "0 0 4px" }}>
              Inside Airbnb public dataset
            </p>
            <a
              href="https://insideairbnb.com/get-the-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body hover:opacity-75 transition-opacity duration-150"
              style={{ fontSize: "13px", color: ACCENT, textDecoration: "none" }}
            >
              insideairbnb.com/get-the-data ↗
            </a>
          </section>

          {/* The Approach */}
          <section>
            <h2 className="font-body" style={{ fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "12px" }}>
              The Approach
            </h2>
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: "0 0 14px" }}>
              Downloaded the Toronto dataset from Inside Airbnb and cleaned it using Python and
              Excel, removing inactive listings, handling missing values, and standardizing
              neighbourhood names across the dataset.
            </p>
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: 0 }}>
              Built a Tableau dashboard focused on four questions relevant to the trip: which
              neighbourhoods have the lowest median price, which have the most listings (a proxy
              for demand and safety), which room types are most common per area, and how listing
              volume varies across the city.
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
            <p className="font-body" style={{ fontSize: "14px", color: "#888", lineHeight: "1.8", margin: 0 }}>
              18K+ listings analyzed across 140+ neighbourhoods. Key findings: downtown
              neighbourhoods like Waterfront Communities and Kensington Market have the highest
              listing density. Entire home listings in the Entertainment District showed the most
              competitive pricing relative to room size. Dashboard published to Tableau Public.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
