import Link from "next/link";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

function LinkedInIcon() {
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

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
}

function TableauIcon() {
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

const links = [
  { icon: <MailIcon />,     label: "tonylin3260@gmail.com",      href: "mailto:tonylin3260@gmail.com" },
  { icon: <LinkedInIcon />, label: "linkedin.com/in/tonylin3260", href: "https://www.linkedin.com/in/tonylin3260/" },
  { icon: <GitHubIcon />,   label: "github.com/Tonyl3260",       href: "https://github.com/Tonyl3260" },
  { icon: <TableauIcon />,  label: "Tableau Public",             href: "https://public.tableau.com/app/profile/tonylin3260/vizzes" },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-8 max-w-4xl mx-auto">
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3
          bg-muted border-[0.5px] border-border rounded-xl px-5"
        style={{ paddingTop: "14px", paddingBottom: "14px" }}
      >
        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-1.5 font-body text-[13px] text-secondary hover:text-primary transition-colors duration-150"
            >
              <span className="w-[14px] h-[14px] shrink-0">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Credit */}
        <p className="font-body text-[12px] text-secondary shrink-0">
          Tony Lin 2026
        </p>
      </div>
    </footer>
  );
}
