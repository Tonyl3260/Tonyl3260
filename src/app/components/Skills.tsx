"use client";

import { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface SkillCard {
  name: string;
  subtitle: string;
  pct: number;
  detail: string;
  color: string;
}

interface DeckConfig {
  id: string;
  label: string;
  hint: string;
  suit: string;
  accent: string;
  cards: SkillCard[];
}

const DECKS: DeckConfig[] = [
  {
    id: "analytics",
    label: "Analytics",
    hint: "data · reporting · insights",
    suit: "♠",
    accent: "#378ADD",
    cards: [
      {
        name: "Python",
        subtitle: "pandas · ETL",
        pct: 88,
        color: "#378ADD",
        detail:
          "Built the YnotCard ETL pipeline parsing TCGPlayer exports, calculating net margins after fees, and flagging repricing opportunities.",
      },
      {
        name: "SQL",
        subtitle: "joins · views",
        pct: 82,
        color: "#34D399",
        detail:
          "Queried BQE traffic datasets at NYC DOT using joins, window functions, and year-over-year aggregation to identify congestion trends.",
      },
      {
        name: "Tableau",
        subtitle: "dashboards",
        pct: 85,
        color: "#FB923C",
        detail:
          "Built two Tableau Public dashboards: YnotCard sales analytics (394 Q1 orders) and a Toronto Airbnb exploratory analysis.",
      },
      {
        name: "Excel",
        subtitle: "pivots · KPIs",
        pct: 90,
        color: "#A78BFA",
        detail:
          "Pivot tables, VLOOKUP, and conditional formatting for repricing signals across 130+ active YnotCard listings.",
      },
      {
        name: "Analysis",
        subtitle: "BQE · traffic",
        pct: 80,
        color: "#F472B6",
        detail:
          "Delivered traffic impact analyses for major NYC events including the Marathon and Yankees/Mets games for congestion planning.",
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    hint: "apps · pipelines · infra",
    suit: "♦",
    accent: "#534AB7",
    cards: [
      {
        name: "Next.js",
        subtitle: "React · Recharts",
        pct: 75,
        color: "#534AB7",
        detail:
          "Built the YnotCard full-stack dashboard with Next.js and Recharts for weekly sales trends, geographic demand, and platform margin comparisons.",
      },
      {
        name: "JavaScript",
        subtitle: "TypeScript · ES6",
        pct: 78,
        color: "#FBBF24",
        detail:
          "Used across the YnotCard frontend and data scripts. Async/await, array methods, and TypeScript type annotations.",
      },
      {
        name: "PostgreSQL",
        subtitle: "AWS RDS",
        pct: 70,
        color: "#38BDF8",
        detail:
          "PostgreSQL and AWS RDS for structured data storage at YnotCard. Firebase for real-time data in the DOT geospatial traffic map.",
      },
      {
        name: "Python",
        subtitle: "scripts · ETL",
        pct: 80,
        color: "#4ADE80",
        detail:
          "Data cleaning scripts, inventory parsing, and the automated pipeline that feeds the YnotCard Tableau dashboards.",
      },
      {
        name: "Git",
        subtitle: "Docker · GitHub",
        pct: 82,
        color: "#F87171",
        detail:
          "Daily use for version control, containerization, and dev environment management across all personal and professional projects.",
      },
    ],
  },
];

// Fan positions: left offset and rotation per card index
const FAN = [
  { left: 41,  rot: -22 },
  { left: 81,  rot: -11 },
  { left: 121, rot:   0 },
  { left: 161, rot:  11 },
  { left: 201, rot:  22 },
];

const CARD_W = 138;
const CARD_H = 195;
const STACK_W = 165;
const STACK_H = 225;

// ─── Deck ─────────────────────────────────────────────────────────────────────

function Deck({
  deck,
  onCardClick,
}: {
  deck: DeckConfig;
  onCardClick: (card: SkillCard) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  return (
    <div ref={containerRef} className="flex flex-col items-center" onClick={() => setIsOpen((o) => !o)} style={{ cursor: "pointer" }}>
      {/* Label */}
      <p
        className="font-body font-medium uppercase tracking-[0.07em]"
        style={{ fontSize: "11px", color: "#888", marginBottom: "12px" }}
      >
        {deck.label}
      </p>

      {/* Deck area */}
      <div
        style={{
          position: "relative",
          width: isOpen ? 380 : STACK_W,
          height: isOpen ? 250 : STACK_H,
          transition: "width 300ms ease, height 300ms ease",
        }}
      >
        {/* Stack cover — visible when closed */}
        <div
          style={{
            position: "absolute",
            width: STACK_W,
            height: STACK_H,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: isOpen ? 0 : 10,
            opacity: isOpen ? 0 : 1,
            transition: "opacity 200ms",
            pointerEvents: "none",
          }}
        >
          {[
            { rot: -6, ty: 8, op: 0.5 },
            { rot: -3, ty: 4, op: 0.7 },
            { rot:  0, ty: 0, op: 1.0 },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: CARD_W,
                height: CARD_H,
                left: (STACK_W - CARD_W) / 2,
                top: (STACK_H - CARD_H) / 2,
                background: "#111113",
                border: `1px solid ${i === 2 ? deck.accent + "66" : "#1e1e22"}`,
                borderRadius: "10px",
                opacity: s.op,
                transform: `rotate(${s.rot}deg) translateY(${s.ty}px)`,
                zIndex: i + 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              {i === 2 && (
                <>
                  <span style={{ fontSize: "38px", color: deck.accent, lineHeight: 1 }}>
                    {deck.suit}
                  </span>
                  <span className="font-body" style={{ fontSize: "16px", fontWeight: 600, color: "#e8e8ea" }}>
                    {deck.label}
                  </span>
                  <span className="font-body" style={{ fontSize: "13px", color: "#555" }}>
                    click to reveal
                  </span>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Fan cards — visible when open */}
        {deck.cards.map((card, i) => {
          const f = FAN[i];
          const isHov = isOpen && hoveredIdx === i;

          return (
            <div
              key={card.name}
              onClick={(e) => { e.stopPropagation(); onCardClick(card); }}
              onMouseEnter={() => isOpen && setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                position: "absolute",
                width: CARD_W,
                height: CARD_H,
                bottom: 16,
                left: f.left,
                background: "#111113",
                border: `1px solid ${isHov ? card.color : "#1e1e22"}`,
                borderRadius: "10px",
                padding: "13px 12px 12px",
                opacity: isOpen ? 1 : 0,
                transform: isHov
                  ? `translateY(-24px) rotate(${f.rot}deg)`
                  : `rotate(${f.rot}deg)`,
                transformOrigin: "bottom center",
                zIndex: isHov ? 20 : i + 1,
                transition: `opacity 200ms ${i * 50}ms ease-out, transform 220ms ease-out, border-color 150ms`,
                pointerEvents: isOpen ? "auto" : "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                userSelect: "none",
              }}
            >
              <p className="font-body" style={{ fontSize: "16px", fontWeight: 600, color: "#e8e8ea", lineHeight: 1.2, marginBottom: "4px" }}>
                {card.name}
              </p>
              <p className="font-body" style={{ fontSize: "13px", color: "#888", lineHeight: 1.4, flex: 1 }}>
                {card.subtitle}
              </p>
              {/* Progress bar */}
              <div>
                <div style={{ height: "3px", background: "#1e1e22", borderRadius: "2px", overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: isOpen ? `${card.pct}%` : "0%",
                      background: card.color,
                      borderRadius: "1px",
                      transition: `width 600ms ${300 + i * 100}ms ease-out`,
                    }}
                  />
                </div>
                <p className="font-body" style={{ fontSize: "12px", color: "#444", marginTop: "3px", textAlign: "right" }}>
                  {card.pct}%
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hint */}
      <p className="font-body" style={{ fontSize: "11px", color: "#444", marginTop: "12px" }}>
        {isOpen ? "click anywhere to close" : deck.hint}
      </p>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Skills() {
  const [activeCard, setActiveCard] = useState<SkillCard | null>(null);

  return (
    <section id="skills" className="border-t border-border px-6 py-12 max-w-4xl mx-auto">
      <div>

        <ScrollReveal>
          <p className="font-body text-[11px] font-medium uppercase text-secondary tracking-[0.07em] mb-8">
            Skills
          </p>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          {/* Decks row */}
          <div
            className="flex flex-wrap justify-center items-start"
            style={{ gap: "56px", marginBottom: "32px" }}
          >
            {DECKS.map((deck) => (
              <Deck key={deck.id} deck={deck} onCardClick={setActiveCard} />
            ))}
          </div>

          {/* Detail box */}
          <div
            style={{
              background: "#111113",
              border: "1px solid #1e1e22",
              borderRadius: "12px",
              padding: "14px",
              minHeight: "60px",
            }}
          >
            <p
              key={activeCard?.detail ?? "default"}
              className="font-body detail-fade"
              style={{
                fontSize: "13px",
                color: activeCard ? "#888" : "#444",
                lineHeight: "1.6",
              }}
            >
              {activeCard?.detail ?? "Click a card after fanning to see how it was used."}
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
