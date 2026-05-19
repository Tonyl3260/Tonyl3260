"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

// ─── Icons ────────────────────────────────────────────────────────────────────

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l18 0" />
      <path d="M9 8l1 0" />
      <path d="M9 12l1 0" />
      <path d="M9 16l1 0" />
      <path d="M14 8l1 0" />
      <path d="M14 12l1 0" />
      <path d="M14 16l1 0" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2 -1.61l1.38 -7.39h-15.1" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Entry {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  company: string;
  date: string;
  bullets: string[];
  badges: string[];
}

const entries: Entry[] = [
  {
    id: "ynotcard",
    icon: <CartIcon />,
    iconBg: "bg-[#0d2218]",
    iconColor: "text-emerald-400",
    title: "Founder & Data Analyst",
    company: "YnotCard",
    date: "Mar 2025 – Present",
    bullets: [
      "Managed analytics for an e-commerce business with $70K+ revenue and 5,000+ sales across TCGPlayer, eBay, and Whatnot using Excel models and pivot reporting.",
      "Analyzed platform fees, shipping costs, and inventory data to determine which items to prioritize per platform based on fee structure and buyer behavior.",
      "Tracked sales and inventory KPIs across 3 platforms to guide restocking and markdown decisions based on product demand.",
    ],
    badges: ["Excel", "KPI Tracking", "Inventory Analysis", "E-commerce"],
  },
  {
    id: "dot",
    icon: <BuildingIcon />,
    iconBg: "bg-[#0d1a2e]",
    iconColor: "text-blue-400",
    title: "Data Analyst Intern",
    company: "NYC Department of Transportation",
    date: "Nov 2021 – Jan 2026",
    bullets: [
      "Co-built a real-time geospatial traffic flow map monitoring live vehicle flow across all 5 NYC boroughs to support citywide congestion response.",
      "Built and maintained operational reporting tools for traffic counts, incidents, and speed enforcement across 850+ cameras, achieving 95%+ data accuracy.",
      "Queried and analyzed year-over-year BQE traffic data using SQL and Excel pivot tables to identify congestion trends and support contractor scheduling.",
      "Delivered traffic impact analyses for major NYC events including the Marathon and Yankees/Mets games to support traffic planning.",
    ],
    badges: ["SQL", "Excel", "Python", "Geospatial", "KPI Reporting"],
  },
];

// ─── Accordion card ───────────────────────────────────────────────────────────

function AccordionCard({
  entry,
  isOpen,
  onToggle,
}: {
  entry: Entry;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      className={`rounded-xl bg-[#111113] cursor-pointer select-none
        border-[0.5px] transition-colors duration-200
        ${isOpen
          ? "border-accent"
          : "border-border hover:border-[#2a2a2f]"
        }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4">
        {/* Icon */}
        <div className={`w-9 h-9 rounded-lg ${entry.iconBg} ${entry.iconColor} flex items-center justify-center shrink-0`}>
          <div className="w-[18px] h-[18px]">{entry.icon}</div>
        </div>

        {/* Title + company */}
        <div className="flex-1 min-w-0">
          <p className="font-body text-[14px] font-medium text-primary leading-tight">
            {entry.title}
          </p>
          <p className="font-body text-[12px] text-secondary mt-0.5">
            {entry.company}
          </p>
          {/* Date — mobile only, sits under company */}
          <p className="font-body text-[11px] text-secondary mt-0.5 sm:hidden">
            {entry.date}
          </p>
        </div>

        {/* Date — desktop */}
        <p className="font-body text-[11px] text-secondary shrink-0 hidden sm:block">
          {entry.date}
        </p>

        {/* Chevron */}
        <div className={`w-4 h-4 text-secondary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown />
        </div>
      </div>

      {/* Expandable body — CSS grid trick for smooth height animation */}
      <div
        className="grid"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms ease-in-out",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5">
            <div className="border-t border-border mb-4" />

            {/* Bullets */}
            <ul className="space-y-2.5 mb-4">
              {entry.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 font-body text-[13px] text-secondary"
                  style={{ lineHeight: "1.6" }}
                >
                  <span
                    className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                    aria-hidden="true"
                  />
                  {b}
                </li>
              ))}
            </ul>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-1.5">
              {entry.badges.map((badge) => (
                <span
                  key={badge}
                  className="font-body text-[11px] font-medium text-secondary border border-border bg-muted px-2 py-0.5 rounded-md"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Experience() {
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setOpenCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-12 max-w-4xl mx-auto"
    >
      <ScrollReveal>
        <p className="font-body text-[11px] font-medium uppercase text-secondary tracking-[0.07em] mb-5">
          Experience
        </p>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <div className="flex flex-col gap-[10px]">
          {entries.map((entry) => (
            <AccordionCard
              key={entry.id}
              entry={entry}
              isOpen={openCards.has(entry.id)}
              onToggle={() => toggle(entry.id)}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
