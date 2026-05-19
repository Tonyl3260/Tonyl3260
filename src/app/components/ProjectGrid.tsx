"use client";

import Link from "next/link";
import { useState } from "react";
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

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ProjectLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface Stat {
  value: string;
  label: string;
}

interface ProjectData {
  title: string;
  badge: { text: string; variant: "live" | "soon" };
  description: string;
  tags: string[];
  links: ProjectLink[];
  accentColor: string;
  stats?: Stat[];
}

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
      { value: "$70K+", label: "Revenue" },
      { value: "5,659", label: "Orders" },
      { value: "3",     label: "Platforms" },
    ],
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

// Full-width YnotCard with stats block on the right
function YnotProjectCard({ project }: { project: ProjectData }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111113",
        borderRadius: "14px",
        padding: "18px",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "transform 200ms ease-out, border-color 200ms ease-out",
        ...cardBorders(hovered, project.accentColor),
      }}
    >
      <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
        {/* Left: content */}
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
            {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "auto" }}>
            {project.links.map((link) => <ProjectLinkItem key={link.label} link={link} />)}
          </div>
        </div>

        {/* Right: stats block */}
        <div
          style={{
            background: "#0d0d0f",
            borderRadius: "10px",
            padding: "20px 28px",
            display: "flex",
            gap: "28px",
            alignItems: "center",
            alignSelf: "stretch",
            flexShrink: 0,
          }}
        >
          {project.stats?.map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
              <span className="font-heading" style={{ fontSize: "20px", fontWeight: 600, color: "#378ADD", lineHeight: 1 }}>
                {stat.value}
              </span>
              <span className="font-body" style={{ fontSize: "11px", color: "#444" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Standard project card
function ProjectCard({ project }: { project: ProjectData }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111113",
        borderRadius: "14px",
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "transform 200ms ease-out, border-color 200ms ease-out",
        ...cardBorders(hovered, project.accentColor),
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "10px" }}>
        <h3 className="font-heading" style={{ fontSize: "15px", fontWeight: 600, color: "#e8e8ea", lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <Badge text={project.badge.text} variant={project.badge.variant} />
      </div>
      <p className="font-body" style={{ fontSize: "13px", color: "#888", lineHeight: "1.6", marginBottom: "14px" }}>
        {project.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
        {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "auto" }}>
        {project.links.map((link) => <ProjectLinkItem key={link.label} link={link} />)}
      </div>
    </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="col-span-1 sm:col-span-2">
            <YnotProjectCard project={projects[0]} />
          </div>
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />
        </div>
      </ScrollReveal>
    </section>
  );
}
