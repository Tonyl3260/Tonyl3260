import ScrollReveal from "./ScrollReveal";

// ─── Pushpin ──────────────────────────────────────────────────────────────────

function Pushpin({ color }: { color: string }) {
  return (
    <div
      className="w-3 h-3 rounded-full mx-auto mb-2 shrink-0"
      style={{
        backgroundColor: color,
        boxShadow: "0 2px 4px rgba(0,0,0,0.28), inset 0 1px 2px rgba(255,255,255,0.35)",
      }}
    />
  );
}

// ─── Tag ──────────────────────────────────────────────────────────────────────

function Tag({ text }: { text: string }) {
  return (
    <span className="font-body text-[10px] font-medium bg-black/[0.08] text-black/55 px-1.5 py-0.5 rounded">
      {text}
    </span>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface NoteConfig {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  tags: string[];
  noteColor: string;
  pinColor: string;
  rotation: number;
  left: string;
  top: number;
}

const PIN = {
  red:    "#E24B4A",
  blue:   "#378ADD",
  green:  "#1D9E75",
  amber:  "#EF9F27",
  purple: "#534AB7",
} as const;

const experienceNotes: NoteConfig[] = [
  {
    id: "dot",
    category: "Experience",
    title: "NYC DOT",
    subtitle: "Data Analyst Intern · Nov 2021–Jan 2026",
    tags: ["SQL", "Python", "Excel"],
    noteColor: "#fffde7",
    pinColor: PIN.red,
    rotation: -1.5,
    left: "0%",
    top: 15,
  },
  {
    id: "ynotcard-exp",
    category: "Experience",
    title: "YnotCard",
    subtitle: "Founder & Data Analyst · Mar 2025–Present",
    tags: ["Excel", "KPIs"],
    noteColor: "#fffde7",
    pinColor: PIN.amber,
    rotation: 1.0,
    left: "38%",
    top: 10,
  },
  {
    id: "cuny",
    category: "Education",
    title: "CUNY Hunter",
    subtitle: "B.A. Computer Science · Class of 2024",
    tags: [],
    noteColor: "#fffde7",
    pinColor: PIN.green,
    rotation: -0.5,
    left: "76%",
    top: 18,
  },
];

const skillNotes: NoteConfig[] = [
  {
    id: "python",
    category: "Analytics",
    title: "Python",
    subtitle: "pandas · ETL · scripting",
    tags: [],
    noteColor: "#fce4ec",
    pinColor: PIN.red,
    rotation: 1.5,
    left: "0%",
    top: 12,
  },
  {
    id: "sql",
    category: "Analytics",
    title: "SQL",
    subtitle: "joins · window functions",
    tags: [],
    noteColor: "#ede7f6",
    pinColor: PIN.purple,
    rotation: -2.0,
    left: "20%",
    top: 8,
  },
  {
    id: "tableau",
    category: "Viz",
    title: "Tableau",
    subtitle: "dashboards · public",
    tags: [],
    noteColor: "#e8f5e9",
    pinColor: PIN.green,
    rotation: 0.8,
    left: "40%",
    top: 15,
  },
  {
    id: "excel",
    category: "Analytics",
    title: "Excel",
    subtitle: "pivots · KPIs · models",
    tags: [],
    noteColor: "#fff8e1",
    pinColor: PIN.amber,
    rotation: -1.0,
    left: "60%",
    top: 10,
  },
  {
    id: "nextjs",
    category: "Engineering",
    title: "Next.js",
    subtitle: "React · Recharts",
    tags: [],
    noteColor: "#fce4ec",
    pinColor: PIN.blue,
    rotation: 1.8,
    left: "77%",
    top: 14,
  },
];

const projectNotes: NoteConfig[] = [
  {
    id: "yc-dashboard",
    category: "Project",
    title: "YnotCard Dashboard",
    subtitle: "5,659 orders · $70K+ revenue",
    tags: ["Live", "Next.js"],
    noteColor: "#e3f2fd",
    pinColor: PIN.blue,
    rotation: -1.0,
    left: "0%",
    top: 12,
  },
  {
    id: "airbnb",
    category: "Project",
    title: "Toronto Airbnb",
    subtitle: "Tableau Public analysis",
    tags: ["Soon", "Python"],
    noteColor: "#fce4ec",
    pinColor: PIN.red,
    rotation: 1.5,
    left: "38%",
    top: 15,
  },
  {
    id: "dot-traffic",
    category: "Project",
    title: "NYC DOT Traffic Map",
    subtitle: "5 boroughs · real-time",
    tags: ["Live", "SQL"],
    noteColor: "#fff8e1",
    pinColor: PIN.amber,
    rotation: -0.8,
    left: "76%",
    top: 10,
  },
];

const rows = [
  { id: "experience", notes: experienceNotes },
  { id: "skills",     notes: skillNotes     },
  { id: "projects",   notes: projectNotes   },
];

// ─── Note ─────────────────────────────────────────────────────────────────────

function StickyNote({ note }: { note: NoteConfig }) {
  return (
    <div
      className="sticky-note absolute w-[155px] rounded-lg px-3.5 pt-3.5 pb-4"
      style={{
        backgroundColor: note.noteColor,
        transform: `rotate(${note.rotation}deg)`,
        left: note.left,
        top: note.top,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <Pushpin color={note.pinColor} />
      <p className="font-body text-[10px] uppercase tracking-wider text-black/40 mb-1 leading-none">
        {note.category}
      </p>
      <p className="font-body text-[13px] font-medium text-black/80 leading-snug mb-1">
        {note.title}
      </p>
      <p className="font-body text-[11px] text-black/50 leading-relaxed">
        {note.subtitle}
      </p>
      {note.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {note.tags.map((tag) => <Tag key={tag} text={tag} />)}
        </div>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Board() {
  return (
    <section className="border-t border-border px-6 py-16 max-w-4xl mx-auto">

      <ScrollReveal>
        <p className="font-body text-[11px] font-medium uppercase text-secondary tracking-[0.07em] mb-5">
          Board
        </p>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: "#f5f0e8", minHeight: "520px" }}
        >

          {/* Desktop: rows of absolutely-positioned notes */}
          <div className="hidden md:block">
            {rows.map(({ id, notes }, i) => (
              <div
                key={id}
                className="relative"
                style={{ height: "210px", marginBottom: i < rows.length - 1 ? "4px" : 0 }}
              >
                {notes.map((note) => (
                  <StickyNote key={note.id} note={note} />
                ))}
              </div>
            ))}
          </div>

          {/* Mobile: stacked list */}
          <div className="md:hidden space-y-6">
            {rows.map(({ id, notes }) => (
              <div key={id}>
                <p className="font-body text-[10px] uppercase tracking-wider text-black/40 mb-2.5 capitalize">
                  {id}
                </p>
                <div className="flex flex-col gap-2">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      className="w-full rounded-lg px-4 py-3.5"
                      style={{
                        backgroundColor: note.noteColor,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                      }}
                    >
                      <p className="font-body text-[10px] uppercase tracking-wider text-black/40 mb-1 leading-none">
                        {note.category}
                      </p>
                      <p className="font-body text-[13px] font-medium text-black/80 leading-snug mb-1">
                        {note.title}
                      </p>
                      <p className="font-body text-[11px] text-black/50 leading-relaxed">
                        {note.subtitle}
                      </p>
                      {note.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {note.tags.map((tag) => <Tag key={tag} text={tag} />)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollReveal>

    </section>
  );
}
