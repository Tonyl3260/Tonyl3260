"use client";

import { useEffect, useRef } from "react";

// ─── Config ───────────────────────────────────────────────────────────────────

const SYMBOLS   = ["♠", "♥", "♦", "♣", "♟", "♞", "♝", "♛", "♜"];
const SIZES     = [36, 48, 60];
const ROTATIONS = [-15, -8, 0, 8, 15, -12, 12];
const SPEEDS    = [0.15, 0.25, 0.35, 0.2, 0.45, 0.3, 0.1];

// ─── Symbol items (7 cols × 8 rows, skip every 4th cell) ─────────────────────

const symbolItems = (() => {
  const items: {
    key: string; char: string;
    x: number; y: number;
    size: number; rot: number; speed: number;
  }[] = [];
  let placed = 0;
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 7; c++) {
      const ci = r * 7 + c;
      if (ci % 4 === 3) continue;
      items.push({
        key:   `s${ci}`,
        char:  SYMBOLS[placed % SYMBOLS.length],
        x:     (c / 7) * 100 + (ci % 3) * 3,
        y:     (r / 8) * 100 + (ci % 4) * 2,
        size:  SIZES[placed % SIZES.length],
        rot:   ROTATIONS[ci % ROTATIONS.length],
        speed: SPEEDS[ci % SPEEDS.length],
      });
      placed++;
    }
  }
  return items;
})();

// ─── Dot items (8 cols × 5 rows, all cells) ───────────────────────────────────

const dotItems = (() => {
  const items: {
    key: string;
    x: number; y: number;
    size: number; opacity: number; speed: number;
  }[] = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 8; c++) {
      const ci = r * 8 + c;
      items.push({
        key:     `d${ci}`,
        x:       (c / 8) * 100 + (ci % 3) * 3,
        y:       (r / 5) * 100 + (ci % 4) * 2,
        size:    ci % 2 === 0 ? 2 : 3,
        opacity: ci % 2 === 0 ? 0.15 : 0.35,
        speed:   0.1 + (ci % 3) * 0.05,
      });
    }
  }
  return items;
})();

// ─── Component ────────────────────────────────────────────────────────────────

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const els = Array.from(
      container.querySelectorAll<HTMLElement>("[data-speed]")
    );

    const onScroll = () => {
      const sy = window.scrollY;
      for (const el of els) {
        const sp = parseFloat(el.dataset.speed!);
        const rot = el.dataset.rot;
        el.style.transform = rot
          ? `rotate(${rot}) translateY(${sy * sp * 0.4}px)`
          : `translateY(${sy * sp * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {symbolItems.map((s) => (
        <span
          key={s.key}
          data-speed={s.speed}
          data-rot={`${s.rot}deg`}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top:  `${s.y}%`,
            fontSize: `${s.size}px`,
            opacity: 0.04,
            color: "#e8e8ea",
            transform: `rotate(${s.rot}deg)`,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {s.char}
        </span>
      ))}

      {dotItems.map((d) => (
        <div
          key={d.key}
          data-speed={d.speed}
          style={{
            position: "absolute",
            left:    `${d.x}%`,
            top:     `${d.y}%`,
            width:   `${d.size}px`,
            height:  `${d.size}px`,
            borderRadius: "50%",
            backgroundColor: "#378ADD",
            opacity: d.opacity,
          }}
        />
      ))}
    </div>
  );
}
