"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ─── Tag data ────────────────────────────────────────────────────────────────

const YNOTCARD_TAGS  = ["Tableau", "React", "Next.js", "JavaScript"];
const AIRBNB_TAGS    = ["Tableau", "Python", "Data Visualization", "Public Dataset"];

const FILTERS = ["All", "Tableau", "React", "Python"] as const;
type Filter = typeof FILTERS[number];

function matches(tags: string[], filter: Filter) {
  return filter === "All" || tags.includes(filter);
}

// ─── Analytics type data ─────────────────────────────────────────────────────

const ANALYTICS_TYPES = [
  {
    label: "Descriptive",
    color: "#378ADD",
    description:
      "Visualizes order volume by week, revenue by month, top selling cards, and geographic demand by state.",
  },
  {
    label: "Diagnostic",
    color: "#EF9F27",
    description:
      "Breaks down profit and loss by product after platform fees, shipping costs, and supply expenses to identify which items are worth selling.",
  },
  {
    label: "Predictive",
    color: "#534AB7",
    description:
      "Flags slow-moving inventory based on days since last sale and demand trends by card set.",
  },
  {
    label: "Prescriptive",
    color: "#1D9E75",
    description:
      "Recommends which cards to restock and which shipping supply sizes to buy based on order volume and package weight patterns.",
  },
];

// ─── SVG placeholders ────────────────────────────────────────────────────────

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
      <rect width="800" height="450" fill="#F8FAFC" />
      <rect width="800" height="48" fill="#FFFFFF" />
      <rect x="20" y="16" width="84" height="14" rx="3" fill="#18181B" />
      <rect x="660" y="15" width="56" height="16" rx="8" fill="#2563EB" />
      <line x1="0" y1="48" x2="800" y2="48" stroke="#E4E4E7" />
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
      <rect x="184" y="148" width="290" height="188" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="200" y="164" width="96" height="9" rx="3" fill="#3F3F46" />
      <line x1="200" y1="298" x2="458" y2="298" stroke="#E4E4E7" />
      <line x1="200" y1="270" x2="458" y2="270" stroke="#E4E4E7" strokeDasharray="3 3" />
      <line x1="200" y1="242" x2="458" y2="242" stroke="#E4E4E7" strokeDasharray="3 3" />
      <rect x="210" y="268" width="24" height="30" rx="3" fill="#2563EB" fillOpacity="0.25" />
      <rect x="245" y="248" width="24" height="50" rx="3" fill="#2563EB" fillOpacity="0.45" />
      <rect x="280" y="232" width="24" height="66" rx="3" fill="#2563EB" fillOpacity="0.65" />
      <rect x="315" y="214" width="24" height="84" rx="3" fill="#2563EB" fillOpacity="0.85" />
      <rect x="350" y="224" width="24" height="74" rx="3" fill="#2563EB" fillOpacity="0.75" />
      <rect x="385" y="198" width="24" height="100" rx="3" fill="#2563EB" />
      <rect x="420" y="218" width="24" height="80" rx="3" fill="#2563EB" fillOpacity="0.65" />
      <rect x="486" y="148" width="294" height="188" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="502" y="164" width="104" height="9" rx="3" fill="#3F3F46" />
      <line x1="502" y1="298" x2="764" y2="298" stroke="#E4E4E7" />
      <line x1="502" y1="270" x2="764" y2="270" stroke="#E4E4E7" strokeDasharray="3 3" />
      <line x1="502" y1="242" x2="764" y2="242" stroke="#E4E4E7" strokeDasharray="3 3" />
      <path d="M510 290 L548 268 L586 278 L624 244 L662 256 L700 226 L738 240 L738 298 L510 298 Z" fill="#2563EB" fillOpacity="0.08" />
      <polyline points="510,290 548,268 586,278 624,244 662,256 700,226 738,240" stroke="#2563EB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="624" cy="244" r="3.5" fill="#2563EB" />
      <circle cx="700" cy="226" r="3.5" fill="#2563EB" />
      <rect x="184" y="350" width="596" height="82" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="200" y="364" width="48" height="7" rx="2" fill="#94A3B8" />
      <rect x="330" y="364" width="48" height="7" rx="2" fill="#94A3B8" />
      <rect x="460" y="364" width="48" height="7" rx="2" fill="#94A3B8" />
      <rect x="590" y="364" width="48" height="7" rx="2" fill="#94A3B8" />
      <line x1="200" y1="378" x2="764" y2="378" stroke="#E4E4E7" />
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

function AirbnbPlaceholder() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="Toronto Airbnb dashboard — listing map and price distribution charts"
    >
      <rect width="800" height="450" fill="#F8FAFC" />
      <rect width="800" height="48" fill="#FFFFFF" />
      <rect x="20" y="16" width="100" height="14" rx="3" fill="#18181B" />
      <rect x="640" y="15" width="72" height="16" rx="8" fill="#FF385C" fillOpacity="0.15" />
      <rect x="656" y="21" width="40" height="6" rx="2" fill="#FF385C" />
      <line x1="0" y1="48" x2="800" y2="48" stroke="#E4E4E7" />
      <rect x="184" y="60" width="596" height="32" rx="6" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="200" y="70" width="52" height="8" rx="2" fill="#94A3B8" />
      <line x1="268" y1="60" x2="268" y2="92" stroke="#E4E4E7" />
      <rect x="280" y="70" width="60" height="8" rx="2" fill="#94A3B8" />
      <line x1="356" y1="60" x2="356" y2="92" stroke="#E4E4E7" />
      <rect x="368" y="70" width="48" height="8" rx="2" fill="#94A3B8" />
      <rect x="0" y="48" width="164" height="402" fill="#FFFFFF" />
      <line x1="164" y1="48" x2="164" y2="450" stroke="#E4E4E7" />
      <rect x="16" y="72" width="100" height="9" rx="3" fill="#94A3B8" />
      <rect x="16" y="94" width="132" height="10" rx="3" fill="#FF385C" fillOpacity="0.12" />
      <rect x="24" y="94" width="4" height="10" rx="1" fill="#FF385C" />
      <rect x="16" y="116" width="120" height="10" rx="3" fill="#E4E4E7" />
      <rect x="16" y="138" width="110" height="10" rx="3" fill="#E4E4E7" />
      <rect x="16" y="198" width="100" height="9" rx="3" fill="#94A3B8" />
      <rect x="16" y="218" width="114" height="10" rx="3" fill="#E4E4E7" />
      <rect x="16" y="240" width="96" height="10" rx="3" fill="#E4E4E7" />
      <rect x="184" y="104" width="140" height="62" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="200" y="118" width="56" height="7" rx="2" fill="#94A3B8" />
      <rect x="200" y="132" width="68" height="16" rx="3" fill="#18181B" />
      <rect x="200" y="152" width="44" height="6" rx="2" fill="#22C55E" fillOpacity="0.7" />
      <rect x="336" y="104" width="140" height="62" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="352" y="118" width="56" height="7" rx="2" fill="#94A3B8" />
      <rect x="352" y="132" width="60" height="16" rx="3" fill="#FF385C" fillOpacity="0.8" />
      <rect x="352" y="152" width="52" height="6" rx="2" fill="#94A3B8" />
      <rect x="488" y="104" width="140" height="62" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="504" y="118" width="56" height="7" rx="2" fill="#94A3B8" />
      <rect x="504" y="132" width="76" height="16" rx="3" fill="#18181B" />
      <rect x="504" y="152" width="40" height="6" rx="2" fill="#94A3B8" />
      <rect x="184" y="178" width="290" height="200" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="200" y="194" width="80" height="9" rx="3" fill="#3F3F46" />
      <rect x="196" y="210" width="262" height="158" rx="4" fill="#EFF6FF" />
      <line x1="230" y1="210" x2="230" y2="368" stroke="#DBEAFE" strokeWidth="2" />
      <line x1="280" y1="210" x2="280" y2="368" stroke="#DBEAFE" strokeWidth="2" />
      <line x1="330" y1="210" x2="330" y2="368" stroke="#DBEAFE" strokeWidth="2" />
      <line x1="380" y1="210" x2="380" y2="368" stroke="#DBEAFE" strokeWidth="2" />
      <line x1="196" y1="250" x2="458" y2="250" stroke="#DBEAFE" strokeWidth="2" />
      <line x1="196" y1="300" x2="458" y2="300" stroke="#DBEAFE" strokeWidth="2" />
      <line x1="196" y1="340" x2="458" y2="340" stroke="#DBEAFE" strokeWidth="2" />
      <circle cx="245" cy="232" r="4" fill="#FF385C" fillOpacity="0.8" />
      <circle cx="310" cy="268" r="5" fill="#FF385C" />
      <circle cx="260" cy="315" r="3.5" fill="#FF385C" fillOpacity="0.6" />
      <circle cx="355" cy="228" r="4" fill="#FF385C" fillOpacity="0.9" />
      <circle cx="395" cy="285" r="5.5" fill="#FF385C" fillOpacity="0.7" />
      <circle cx="340" cy="348" r="3.5" fill="#FF385C" fillOpacity="0.5" />
      <circle cx="220" cy="355" r="4" fill="#FF385C" fillOpacity="0.65" />
      <circle cx="415" cy="240" r="3" fill="#FF385C" fillOpacity="0.55" />
      <circle cx="290" cy="330" r="4.5" fill="#FF385C" fillOpacity="0.75" />
      <rect x="486" y="178" width="294" height="200" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="502" y="194" width="120" height="9" rx="3" fill="#3F3F46" />
      <line x1="502" y1="340" x2="764" y2="340" stroke="#E4E4E7" />
      <line x1="502" y1="310" x2="764" y2="310" stroke="#E4E4E7" strokeDasharray="3 3" />
      <line x1="502" y1="280" x2="764" y2="280" stroke="#E4E4E7" strokeDasharray="3 3" />
      <line x1="502" y1="250" x2="764" y2="250" stroke="#E4E4E7" strokeDasharray="3 3" />
      <rect x="512" y="316" width="28" height="24" rx="2" fill="#FF385C" fillOpacity="0.25" />
      <rect x="550" y="292" width="28" height="48" rx="2" fill="#FF385C" fillOpacity="0.45" />
      <rect x="588" y="256" width="28" height="84" rx="2" fill="#FF385C" fillOpacity="0.7" />
      <rect x="626" y="268" width="28" height="72" rx="2" fill="#FF385C" fillOpacity="0.85" />
      <rect x="664" y="284" width="28" height="56" rx="2" fill="#FF385C" fillOpacity="0.65" />
      <rect x="702" y="304" width="28" height="36" rx="2" fill="#FF385C" fillOpacity="0.4" />
      <rect x="740" y="322" width="18" height="18" rx="2" fill="#FF385C" fillOpacity="0.25" />
      <rect x="184" y="390" width="596" height="52" rx="7" fill="#FFFFFF" stroke="#E4E4E7" />
      <rect x="200" y="402" width="64" height="7" rx="2" fill="#94A3B8" />
      <rect x="370" y="402" width="56" height="7" rx="2" fill="#94A3B8" />
      <rect x="560" y="402" width="64" height="7" rx="2" fill="#94A3B8" />
      <line x1="200" y1="416" x2="764" y2="416" stroke="#E4E4E7" />
      <rect x="200" y="424" width="80" height="8" rx="2" fill="#3F3F46" />
      <rect x="370" y="424" width="52" height="8" rx="2" fill="#FF385C" fillOpacity="0.7" />
      <rect x="560" y="424" width="68" height="8" rx="2" fill="#22C55E" fillOpacity="0.7" />
    </svg>
  );
}

// ─── YnotCard Modal ───────────────────────────────────────────────────────────

function YnotCardModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0f0f13] border border-[#2a2a2f] rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-md text-[#666] hover:text-[#ccc] hover:bg-[#1a1a1d] transition-colors text-lg leading-none"
        >
          ✕
        </button>

        <div className="p-8">
          {/* Header */}
          <p className="font-body text-xs font-medium tracking-widest uppercase text-[#555] mb-2">
            Featured Project
          </p>
          <h2 className="font-heading text-2xl font-semibold text-white mb-3">
            YnotCard Dashboard
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {YNOTCARD_TAGS.map((tag) => (
              <span
                key={tag}
                className="font-body text-xs font-medium text-[#888] border border-[#2a2a2f] bg-[#1a1a1d] px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-8">
            {/* THE PROBLEM */}
            <section>
              <h3 className="font-body text-[11px] font-semibold tracking-widest uppercase text-[#555] mb-3">
                THE PROBLEM
              </h3>
              <p className="font-body text-sm text-[#aaa] leading-relaxed">
                Running a TCG reselling business means hundreds of orders across multiple months
                with no easy way to see how long inventory sits, what shipping supplies to reorder,
                or whether a product is actually profitable after fees and shipping costs. TCGPlayer
                does not export a clean month-to-month order sheet, so tracking anything required
                piecing together data manually.
              </p>
            </section>

            {/* THE APPROACH */}
            <section>
              <h3 className="font-body text-[11px] font-semibold tracking-widest uppercase text-[#555] mb-3">
                THE APPROACH
              </h3>
              <p className="font-body text-sm text-[#aaa] leading-relaxed">
                Built Python scripts to clean and combine raw TCGPlayer exports. The main challenges
                were merging packing slip data across months, removing empty rows that TCGPlayer
                includes by default, and cleaning the inventory sheet by stripping out columns like
                Add Quantity and rows that contained images instead of data. The cleaned data feeds
                into Tableau dashboards and a Next.js frontend for live tracking.
              </p>
            </section>

            {/* ANALYTICS TYPE */}
            <section>
              <h3 className="font-body text-[11px] font-semibold tracking-widest uppercase text-[#555] mb-3">
                ANALYTICS TYPE
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {ANALYTICS_TYPES.map(({ label, color, description }) => (
                  <div
                    key={label}
                    style={{
                      background: `${color}1a`,
                      borderTop: `2px solid ${color}`,
                    }}
                    className="rounded-lg p-3"
                  >
                    <p
                      style={{ color }}
                      className="text-[13px] font-medium mb-1.5"
                    >
                      {label}
                    </p>
                    <p className="text-[12px] text-[#888] leading-relaxed">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* RESULTS */}
            <section>
              <h3 className="font-body text-[11px] font-semibold tracking-widest uppercase text-[#555] mb-3">
                RESULTS
              </h3>
              <p className="font-body text-sm text-[#aaa] leading-relaxed">
                458 orders tracked across Q1 2026. $12,657 in revenue across 50 states. Clear
                visibility into which products to restock, which to markdown, and which shipping
                supplies to buy in bulk.
              </p>
            </section>

            {/* LINKS */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://ynotcard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1a1a1d] border border-[#2a2a2f] text-[#aaa] px-3 py-[5px] rounded-full text-[12px] font-body font-medium hover:border-[#378ADD] hover:text-[#378ADD] transition-colors duration-150"
              >
                Live app ↗
              </a>
              <a
                href="https://github.com/Tonyl3260/ynotcard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1a1a1d] border border-[#2a2a2f] text-[#aaa] px-3 py-[5px] rounded-full text-[12px] font-body font-medium hover:border-[#378ADD] hover:text-[#378ADD] transition-colors duration-150"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://public.tableau.com/app/profile/tonylin3260/viz/YnotCardTCGPlayerSalesAnalyticsJan-Apr2026/Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1a1a1d] border border-[#2a2a2f] text-[#aaa] px-3 py-[5px] rounded-full text-[12px] font-body font-medium hover:border-[#378ADD] hover:text-[#378ADD] transition-colors duration-150"
              >
                Tableau ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card wrapper ─────────────────────────────────────────────────────────────

function CardShell({
  visible,
  href,
  onOpen,
  children,
}: {
  visible: boolean;
  href?: string;
  onOpen?: () => void;
  children: React.ReactNode;
}) {
  const handleClick = onOpen ?? (href ? () => window.open(href, "_blank", "noopener,noreferrer") : undefined);
  return (
    <div
      onClick={handleClick}
      className={`rounded-xl border border-border overflow-hidden bg-white mt-6 first:mt-0
        hover:-translate-y-0.5 hover:shadow-md
        transition-all duration-200
        ${handleClick ? "cursor-pointer" : ""}
        ${visible ? "" : "hidden"}`}
    >
      {children}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [modalOpen, setModalOpen] = useState(false);

  const ynotVisible  = matches(YNOTCARD_TAGS, activeFilter);
  const airbnbVisible = matches(AIRBNB_TAGS,  activeFilter);

  return (
    <section id="projects" className="px-6 py-24 max-w-4xl mx-auto">

      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-primary">
          Projects
        </h2>
        <span className="font-body text-xs font-medium text-secondary border border-border px-2 py-0.5 rounded-full">
          2 projects
        </span>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects by technology">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            aria-pressed={activeFilter === f}
            className={`font-body text-sm font-medium px-3 py-1.5 rounded-md border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              activeFilter === f
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-secondary hover:border-primary hover:text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* YnotCard */}
      <CardShell visible={ynotVisible} onOpen={() => setModalOpen(true)}>
        <div className="relative border-b border-border bg-muted overflow-hidden">
          <DashboardPlaceholder />
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white border border-border text-xs font-body font-medium text-secondary px-2.5 py-1 rounded-full shadow-sm">
            <span className="size-1.5 rounded-full bg-green-500 shrink-0" aria-hidden="true" />
            Live
          </span>
        </div>
        <div className="p-7 sm:p-8">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-secondary mb-1.5">
            Featured Project
          </p>
          <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
            YnotCard
          </h3>
          <p className="font-body text-base text-secondary leading-relaxed max-w-2xl mb-6">
            Full-stack analytics dashboard tracking TCGPlayer orders, inventory performance, and
            shipping costs for a live TCG reselling business. 458 orders, $12,657 revenue, 50
            states reached in 2026.
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {YNOTCARD_TAGS.map((tag) => (
              <span key={tag} className="font-body text-xs font-medium text-secondary border border-border bg-muted px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
            <Link
              href="https://ynotcard.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[5px] bg-[#1a1a1d] border border-[#2a2a2f] text-[#aaa] px-3 py-[5px] rounded-[8px] text-[12px] font-body font-medium hover:border-[#378ADD] hover:text-[#378ADD] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Live app ↗
            </Link>
            <Link
              href="https://github.com/Tonyl3260/ynotcard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[5px] bg-[#1a1a1d] border border-[#2a2a2f] text-[#aaa] px-3 py-[5px] rounded-[8px] text-[12px] font-body font-medium hover:border-[#378ADD] hover:text-[#378ADD] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Link>
          </div>
        </div>
      </CardShell>

      {/* Toronto Airbnb Dashboard */}
      <CardShell visible={airbnbVisible} href="https://public.tableau.com/app/profile/tonylin3260/viz/TorontoAirbnbOverview/TorontoAirbnbOverview">
        <div className="relative border-b border-border bg-muted overflow-hidden">
          <AirbnbPlaceholder />
        </div>
        <div className="p-7 sm:p-8">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-secondary mb-1.5">
            Data Visualization
          </p>
          <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
            Toronto Airbnb Dashboard
          </h3>
          <p className="font-body text-base text-secondary leading-relaxed max-w-2xl mb-6">
            An interactive Tableau dashboard exploring Toronto&apos;s Airbnb market using
            the public Inside Airbnb dataset. Python was used to clean and reshape the
            raw CSV before loading into Tableau. Visualizes listing density by
            neighbourhood, price distributions, room-type breakdowns, and availability
            trends to surface patterns across the city.
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {AIRBNB_TAGS.map((tag) => (
              <span key={tag} className="font-body text-xs font-medium text-secondary border border-border bg-muted px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
            <Link
              href="https://public.tableau.com/app/profile/tonylin3260/viz/TorontoAirbnbOverview/TorontoAirbnbOverview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[5px] bg-[#1a1a1d] border border-[#2a2a2f] text-[#aaa] px-3 py-[5px] rounded-[8px] text-[12px] font-body font-medium hover:border-[#378ADD] hover:text-[#378ADD] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Tableau ↗
            </Link>
          </div>
        </div>
      </CardShell>

      {/* Empty state */}
      {!ynotVisible && !airbnbVisible && (
        <p className="font-body text-sm text-secondary text-center py-12">
          No projects match this filter yet.
        </p>
      )}

      {/* Future projects hint */}
      <p className="font-body text-sm text-secondary mt-8 text-center">
        More projects in progress — check back soon.
      </p>

      {/* YnotCard detail modal */}
      {modalOpen && <YnotCardModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
