"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconExternalLink() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5" />
      <path d="M10 14L20 4" />
      <path d="M15 4h5v5" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2v3.5" />
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface Stat {
  value: string;
  label: string;
}

interface AnalyticsPill {
  label: string;
  sub: string;
  color: string;
}

interface ModalData {
  problem: string;
  approach: string;
  pills: AnalyticsPill[];
  results: string;
}

interface ProjectData {
  title: string;
  badge: { text: string; variant: "live" | "soon" };
  description: string;
  tags: string[];
  links: ProjectLink[];
  accentColor: string;
  stats?: Stat[];
  statLabel?: string;
  ctaLabel?: string;
  modal?: ModalData;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: ProjectData[] = [
  {
    title: "YnotCard Dashboard",
    badge: { text: "Live", variant: "live" },
    description:
      "Tableau dashboard tracking $70K+ in revenue, 5,659 orders, and real-time card pricing across the YnotCard inventory pipeline.",
    tags: ["Next.js", "React", "TypeScript", "Tableau", "SQL", "Python"],
    links: [
      { icon: <IconExternalLink />, label: "Live app", href: "https://ynotcard.vercel.app/" },
      { icon: <IconGitHub />,       label: "GitHub",   href: "https://github.com/Tonyl3260/ynotcard" },
      { icon: <IconExternalLink />, label: "Tableau",  href: "https://public.tableau.com/app/profile/tonylin3260/viz/YnotCardTCGPlayerSalesAnalyticsJan-Apr2026/Dashboard" },
    ],
    accentColor: "#378ADD",
    stats: [
      { value: "458",     label: "Orders" },
      { value: "$12,657", label: "Revenue" },
      { value: "50",      label: "States reached" },
    ],
    statLabel: "Q1 2026 · TCGPlayer",
    ctaLabel: "Explore the dashboard ↗",
    modal: {
      problem:
        "Running a TCG reselling business across 3 platforms meant tracking hundreds of orders in spreadsheets with no clear view of margins, demand, or pricing.",
      approach:
        "Built a full ETL pipeline using Python to clean raw TCGPlayer export CSVs, calculate net margins after platform fees and shipping, and flag slow-moving inventory for repricing. Loaded into Tableau for visualization and a Next.js frontend for the live dashboard.",
      pills: [
        { label: "Descriptive",  sub: "what happened — sales trends",        color: "#378ADD" },
        { label: "Diagnostic",   sub: "why — fee and margin breakdown",       color: "#EF9F27" },
        { label: "Predictive",   sub: "what next — repricing signals",        color: "#1D9E75" },
        { label: "Prescriptive", sub: "what to do — restock decisions",       color: "#534AB7" },
      ],
      results:
        "458 orders tracked · $12,657 Q1 revenue · 50 states reached · 3 platforms compared",
    },
  },
  {
    title: "Toronto Airbnb Analysis",
    badge: { text: "Live", variant: "live" },
    description:
      "Exploratory analysis of 18K+ listings across 140+ Toronto neighbourhoods using the public Inside Airbnb dataset, visualised in Tableau Public.",
    tags: ["Tableau", "Python", "Excel"],
    links: [
      { icon: <IconExternalLink />, label: "Tableau", href: "https://public.tableau.com/app/profile/tonylin3260/viz/TorontoAirbnbOverview/TorontoAirbnbOverview" },
    ],
    accentColor: "#EF9F27",
    stats: [
      { value: "18K+", label: "Listings" },
      { value: "140+", label: "Neighbourhoods" },
      { value: "2",    label: "Viz types" },
    ],
    statLabel: "Inside Airbnb Dataset",
    ctaLabel: "View on Tableau Public ↗",
    modal: {
      problem:
        "Understanding how Airbnb pricing, occupancy, and host behaviour varies across Toronto neighbourhoods using publicly available Inside Airbnb data.",
      approach:
        "Cleaned and explored the dataset using Python and Excel. Built Tableau dashboards to visualize price distribution by neighbourhood, occupancy trends, and host performance metrics.",
      pills: [
        { label: "Descriptive", sub: "price and occupancy summaries", color: "#EF9F27" },
        { label: "Diagnostic",  sub: "why certain areas cost more",   color: "#EF9F27" },
      ],
      results:
        "18K+ listings analyzed · 140+ neighbourhoods · Published to Tableau Public",
    },
  },
  {
    title: "NYC DOT Traffic Map",
    badge: { text: "Live", variant: "live" },
    description:
      "Interactive map of 850+ NYC DOT traffic cameras across all 5 boroughs, built during the DOT internship to support field operations teams.",
    tags: ["SQL", "Python", "Tableau"],
    links: [
      { icon: <IconExternalLink />, label: "Live app", href: "https://flowmap.nyctmc.org/polyline_editor/" },
    ],
    accentColor: "#1D9E75",
    stats: [
      { value: "850+", label: "Cameras" },
      { value: "5",    label: "Boroughs" },
      { value: "95%+", label: "Data accuracy" },
    ],
    statLabel: "NYC DOT Internship",
    ctaLabel: "View live map ↗",
    modal: {
      problem:
        "NYC DOT needed a real-time way to monitor vehicle flow and congestion across all 5 boroughs to support field operations and citywide congestion response.",
      approach:
        "Co-built a geospatial traffic flow map at flowmap.nyctmc.org during the DOT internship. Built and maintained operational reporting tools for traffic counts, incidents, and speed enforcement across 850+ cameras using SQL and Python pipelines.",
      pills: [
        { label: "Descriptive",  sub: "live traffic counts and incident logs", color: "#1D9E75" },
        { label: "Diagnostic",   sub: "congestion pattern identification",      color: "#1D9E75" },
        { label: "Prescriptive", sub: "contractor scheduling support",          color: "#1D9E75" },
      ],
      results:
        "850+ cameras monitored · 5 boroughs · 95%+ data accuracy · Used in production at NYC DOT",
    },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function cardBorders(hovered: boolean, accentColor: string) {
  const side = hovered ? "#2a2a3a" : "#1e1e22";
  return {
    borderTop:    `2px solid ${accentColor}`,
    borderLeft:   `0.5px solid ${side}`,
    borderRight:  `0.5px solid ${side}`,
    borderBottom: `0.5px solid ${side}`,
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Badge({ text, variant }: { text: string; variant: "live" | "soon" }) {
  const style =
    variant === "live"
      ? { background: "#0a2a18", color: "#4ade80", border: "1px solid #0f3d22" }
      : { background: "#2a1a08", color: "#f59e0b", border: "1px solid #3d2a0a" };
  return (
    <span
      className="font-body text-[11px] font-medium rounded-[8px] shrink-0"
      style={{ padding: "3px 6px", ...style }}
    >
      {text}
    </span>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      className="font-body text-[11px] font-medium"
      style={{ background: "#1a1a1d", color: "#555", border: "1px solid #222", borderRadius: "6px", padding: "2px 8px" }}
    >
      {label}
    </span>
  );
}

function ProjectLinkItem({ link }: { link: ProjectLink }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center font-body text-[13px]"
      style={{ gap: "5px", color: hov ? "#888" : "#444", transition: "color 150ms" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span className="w-[14px] h-[14px] shrink-0">{link.icon}</span>
      {link.label}
    </Link>
  );
}

// ─── Project modal ────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: ProjectData; onClose: () => void }) {
  const modal = project.modal!;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#111113",
          border: `1px solid ${project.accentColor}40`,
          borderRadius: "16px",
          width: "100%",
          maxWidth: "600px",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "28px",
          animation: "modal-fade-in 150ms ease-out forwards",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "none", border: "none", color: "#444",
            cursor: "pointer", padding: "4px", lineHeight: 1,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", paddingRight: "28px" }}>
          <h2 className="font-heading" style={{ fontSize: "18px", fontWeight: 700, color: "#e8e8ea" }}>
            {project.title}
          </h2>
          <Badge text={project.badge.text} variant={project.badge.variant} />
        </div>

        {/* The Problem */}
        <div style={{ marginBottom: "20px" }}>
          <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
            The Problem
          </p>
          <p className="font-body" style={{ fontSize: "13px", color: "#888", lineHeight: "1.7" }}>
            {modal.problem}
          </p>
        </div>

        {/* The Approach */}
        <div style={{ marginBottom: "20px" }}>
          <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
            The Approach
          </p>
          <p className="font-body" style={{ fontSize: "13px", color: "#888", lineHeight: "1.7" }}>
            {modal.approach}
          </p>
        </div>

        {/* Analytics Type */}
        <div style={{ marginBottom: "20px" }}>
          <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
            Analytics Type
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {modal.pills.map((p) => (
              <div
                key={p.label}
                style={{ background: `${p.color}14`, border: `1px solid ${p.color}33`, borderRadius: "8px", padding: "5px 11px" }}
              >
                <span className="font-body" style={{ fontSize: "12px", fontWeight: 600, color: p.color, display: "block", lineHeight: 1.3 }}>
                  {p.label}
                </span>
                <span className="font-body" style={{ fontSize: "10px", color: "#555" }}>
                  {p.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div style={{ marginBottom: "24px" }}>
          <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
            Results
          </p>
          <p className="font-body" style={{ fontSize: "13px", color: "#888", lineHeight: "1.7" }}>
            {modal.results}
          </p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", borderTop: "1px solid #1e1e22", paddingTop: "20px" }}>
          {project.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[5px] bg-[#1a1a1d] border border-[#2a2a2f] text-[#aaa] px-3 py-[5px] rounded-[8px] text-[12px] font-body font-medium hover:border-[#378ADD] hover:text-[#378ADD] transition-colors duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <span style={{ width: "13px", height: "13px", display: "flex" }}>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Full project card ────────────────────────────────────────────────────────

function FullProjectCard({ project }: { project: ProjectData }) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  return (
    <>
      <div
        onClick={() => project.modal && setModalOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#111113",
          borderRadius: "14px",
          padding: "18px",
          cursor: project.modal ? "pointer" : "default",
          transform: hovered ? "translateY(-3px)" : "none",
          transition: "transform 200ms ease-out, border-color 200ms ease-out",
          ...cardBorders(hovered, project.accentColor),
        }}
      >
        <div className="flex flex-col sm:flex-row gap-5 items-start">

          {/* Left column */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "10px" }}>
              <h3 className="font-heading" style={{ fontSize: "15px", fontWeight: 600, color: "#e8e8ea", lineHeight: 1.3 }}>
                {project.title}
              </h3>
              <Badge text={project.badge.text} variant={project.badge.variant} />
            </div>
            <p className="font-body" style={{ fontSize: "13px", color: "#888", lineHeight: "1.6", marginBottom: "14px" }}>
              {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </div>

        </div>

        {/* CTA pills */}
        {project.modal && (
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {project.ctaLabel && (
              <Link
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-body text-[12px] px-3 py-[5px] rounded-[8px] border border-[#2a2a2f] text-[#555] bg-transparent hover:border-[#378ADD] hover:text-[#378ADD] transition-colors duration-150"
              >
                {project.ctaLabel}
              </Link>
            )}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center font-body text-[12px] px-3 py-[5px] rounded-[8px] border border-[#2a2a2f] text-[#555] bg-transparent hover:border-[#378ADD] hover:text-[#378ADD] transition-colors duration-150 cursor-pointer"
            >
              Read the breakdown →
            </button>
          </div>
        )}
      </div>

      {modalOpen && project.modal && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProjectGrid() {
  return (
    <section className="border-t border-border px-6 py-12 max-w-4xl mx-auto">
      <ScrollReveal>
        <p className="font-body text-[11px] font-medium uppercase text-secondary tracking-[0.07em] mb-5">
          Projects
        </p>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {projects.map((project) => (
            <FullProjectCard key={project.title} project={project} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
