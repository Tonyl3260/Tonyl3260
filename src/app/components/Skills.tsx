"use client";

import { useState, useEffect, useRef } from "react"; // useState used by Deck
import ScrollReveal from "./ScrollReveal";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface SkillCard {
  name: string;
  subtitle: string;
  color: string;
}

interface DeckConfig {
  id: string;
  label: string;
  suit: string;
  accent: string;
  cards: SkillCard[];
}

const DECKS: DeckConfig[] = [
  {
    id: "analytics",
    label: "Analytics",
    suit: "♠",
    accent: "#378ADD",
    cards: [
      { name: "Python",   subtitle: "pandas · NumPy · ETL",        color: "#378ADD" },
      { name: "SQL",      subtitle: "joins · aggregation · views", color: "#34D399" },
      { name: "Tableau",  subtitle: "dashboards · charts",         color: "#FB923C" },
      { name: "Excel",    subtitle: "pivots · VLOOKUP · KPIs",     color: "#A78BFA" },
      { name: "Analysis", subtitle: "traffic · geospatial · DOT",  color: "#F472B6" },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    suit: "♥",
    accent: "#E0394A",
    cards: [
      { name: "Next.js",    subtitle: "React · Recharts",     color: "#534AB7" },
      { name: "JavaScript", subtitle: "TypeScript · ES6",     color: "#FBBF24" },
      { name: "Databases",  subtitle: "PostgreSQL · AWS RDS", color: "#38BDF8" },
      { name: "Python",     subtitle: "scripts · pipelines",  color: "#4ADE80" },
      { name: "Git",        subtitle: "Docker · GitHub",      color: "#F87171" },
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

function Deck({ deck }: { deck: DeckConfig }) {
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
              onClick={(e) => e.stopPropagation()}
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
            </div>
          );
        })}
      </div>

      {/* Hint */}
      <p className="font-body" style={{ fontSize: "11px", color: "#444", marginTop: "12px" }}>
        {isOpen ? "click anywhere to close" : ""}
      </p>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-12 max-w-4xl mx-auto">
      <div>

        <ScrollReveal>
          <p className="font-body text-[11px] font-medium uppercase text-secondary tracking-[0.07em] mb-8">
            Skills
          </p>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div
            className="flex flex-wrap justify-center items-start"
            style={{ gap: "56px" }}
          >
            {DECKS.map((deck) => (
              <Deck key={deck.id} deck={deck} />
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
