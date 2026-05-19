import ScrollReveal from "./ScrollReveal";

function IconCertificate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
      <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-1" />
      <path d="M6 9l12 0" />
      <path d="M6 12l3 0" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 8l-4 4l4 4" />
      <path d="M17 8l4 4l-4 4" />
      <path d="M14 4l-4 16" />
    </svg>
  );
}

interface Cert {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  issuer: string;
  date: string;
}

const certs: Cert[] = [
  {
    icon: <IconCertificate />,
    iconColor: "#378ADD",
    title: "Google Data Analytics Professional",
    issuer: "Coursera / Google",
    date: "March 2025",
  },
  {
    icon: <IconCode />,
    iconColor: "#534AB7",
    title: "CodePath Technical Interview Prep",
    issuer: "CodePath",
    date: "April 2025",
  },
];

function CertCard({ cert }: { cert: Cert }) {
  return (
    <div
      style={{
        background: "#111113",
        borderRadius: "12px",
        border: "1px solid #1e1e22",
        padding: "16px 18px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          background: `${cert.iconColor}1a`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: cert.iconColor,
        }}
      >
        <span style={{ width: "18px", height: "18px", display: "flex" }}>{cert.icon}</span>
      </div>

      <div>
        <p className="font-heading" style={{ fontSize: "13px", fontWeight: 600, color: "#e8e8ea", lineHeight: 1.3, marginBottom: "3px" }}>
          {cert.title}
        </p>
        <p className="font-body" style={{ fontSize: "11px", color: "#555" }}>
          {cert.issuer} · {cert.date}
        </p>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="border-t border-border px-6 py-12 max-w-4xl mx-auto">
      <ScrollReveal>
        <p className="font-body text-[11px] font-medium uppercase text-secondary tracking-[0.07em] mb-5">
          Certifications
        </p>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certs.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
