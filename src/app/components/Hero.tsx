"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ─── Typewriter ───────────────────────────────────────────────────────────────

const phrases = [
  "Data Analyst",
  "SQL Analyst",
  "Tableau Developer",
  "Python Analyst",
  "CUNY Hunter '24",
];

function useTypewriter(list: string[]) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = list[idx];
    if (!deleting) {
      if (text.length < phrase.length) {
        const id = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 80);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(id);
    }
    if (text.length > 0) {
      const id = setTimeout(() => setText(text.slice(0, -1)), 45);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setIdx((i) => (i + 1) % list.length);
      setDeleting(false);
    }, 300);
    return () => clearTimeout(id);
  }, [text, deleting, idx, list]);

  return text;
}

// ─── Count-up ─────────────────────────────────────────────────────────────────

function useCountUp(value: string, duration = 800) {
  // Parses "$70K" → prefix="$", num=70, suffix="K"
  const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2], 10) : null;
  const suffix = match?.[3] ?? "";
  const [display, setDisplay] = useState(
    target !== null ? `${prefix}0${suffix}` : value
  );

  useEffect(() => {
    if (target === null) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const v = Math.round((1 - Math.pow(1 - t, 3)) * target);
      setDisplay(`${prefix}${v}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // value and duration are stable on mount — intentional once-only run
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return display;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const pills = [
  {
    label: "Python",
    icon: (
      // Tabler: brand-python
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
        <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
        <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 1 2 -2v-4" />
        <path d="M11 5l0 .01" />
        <path d="M13 19l0 .01" />
      </svg>
    ),
  },
  {
    label: "SQL",
    icon: (
      // Tabler: database
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    label: "Tableau",
    icon: (
      // Tabler: chart-bar
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    label: "Excel",
    icon: (
      // Tabler: table
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
      </svg>
    ),
  },
  {
    label: "NYC",
    icon: (
      // Tabler: map-pin
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "4",     label: "Years of experience" },
  { value: "$70K",  label: "YnotCard revenue" },
  { value: "5659",  label: "Orders completed" },
];

// ─── Contact modal icons ──────────────────────────────────────────────────────

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M4 10v10" />
      <path d="M9 10v10" />
      <path d="M9 14a4 4 0 0 1 8 0v6" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
}

function IconTableau() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

const contactLinks = [
  { icon: <IconMail />,     label: "tonylin3260@gmail.com",      href: "mailto:tonylin3260@gmail.com" },
  { icon: <IconLinkedIn />, label: "linkedin.com/in/tonylin3260", href: "https://www.linkedin.com/in/tonylin3260/" },
  { icon: <IconGitHub />,   label: "github.com/Tonyl3260",       href: "https://github.com/Tonyl3260" },
  { icon: <IconTableau />,  label: "Tableau Public",             href: "https://public.tableau.com/app/profile/tonylin3260/vizzes" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  const display = useCountUp(value);
  return (
    <div className="flex flex-col items-center gap-1.5 bg-muted rounded-xl px-3 py-4">
      <span className="font-heading text-xl font-semibold text-primary leading-none tabular-nums">
        {display}
      </span>
      <span className="font-body text-xs text-secondary text-center leading-snug">
        {label}
      </span>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const typed = useTypewriter(phrases);
  const [contactOpen, setContactOpen] = useState(false);
  const [chevronVisible, setChevronVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setChevronVisible(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="min-h-dvh flex flex-col items-center justify-center px-6 py-24 max-w-4xl mx-auto">

      {/* Avatar */}
      <div
        className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5"
        aria-hidden="true"
      >
        <span className="font-heading text-lg font-semibold text-accent select-none">
          TL
        </span>
      </div>

      {/* Name */}
      <h1 className="font-heading text-4xl font-medium text-primary mb-2">
        Tony Lin
      </h1>

      {/* Typing animation */}
      <p className="font-body text-base text-secondary mb-7 flex items-center h-6">
        <span>{typed}</span>
        <span
          className="inline-block w-[2px] h-[1em] bg-secondary/60 ml-[3px] animate-[cursor-blink_1s_step-end_infinite]"
          aria-hidden="true"
        />
      </p>

      {/* Pill tags */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-8"
        role="list"
        aria-label="Core skills and background"
      >
        {pills.map((p) => (
          <span
            key={p.label}
            role="listitem"
            className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-secondary bg-muted border border-border px-3 py-1.5 rounded-full"
          >
            <span className="w-3.5 h-3.5 shrink-0">{p.icon}</span>
            {p.label}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex gap-3 mb-10">
        <button
          data-scroll="experience"
          onClick={() =>
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="font-body font-medium text-sm bg-accent text-white px-[18px] py-2 rounded-lg hover:opacity-90 transition-opacity duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          See my work
        </button>
        <button
          onClick={() => setContactOpen(true)}
          className="font-body font-medium text-sm text-primary border border-border px-[18px] py-2 rounded-lg hover:border-primary hover:bg-muted transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Get in touch
        </button>
      </div>

      {/* Stat cards — 4-col desktop, 2-col mobile */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-2xl mb-4">
        {stats.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          marginTop: "24px",
          color: "#444",
          opacity: chevronVisible ? 1 : 0,
          transition: "opacity 300ms",
          animation: "chevron-bounce 1.5s ease infinite",
        }}
      >
        <svg
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ width: "20px", height: "20px" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Contact modal */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.45)", minHeight: "100vh" }}
          onClick={() => setContactOpen(false)}
        >
          <div
            className="bg-[#111113] rounded-xl w-full max-w-[320px] relative"
            style={{ padding: "24px", animation: "modal-fade-in 150ms ease-out forwards" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setContactOpen(false)}
              aria-label="Close contact modal"
              className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-secondary hover:text-primary transition-colors duration-150"
            >
              <IconX />
            </button>

            {/* Name */}
            <p className="font-body font-medium text-primary mb-5" style={{ fontSize: "15px" }}>
              Tony Lin
            </p>

            {/* Contact rows */}
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2.5 font-body text-sm text-secondary hover:text-primary transition-colors duration-150"
                >
                  <span className="w-4 h-4 shrink-0">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
