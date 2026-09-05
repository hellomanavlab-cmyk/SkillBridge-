import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { CONTACT, FOUNDER_PORTFOLIO_URL, MANAVLAB_URL } from "../constants";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Home", to: "/" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Leads", to: "/leads" },
      { label: "For Freelancers", to: "/for-freelancers" },
      { label: "Pricing", to: "/pricing" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "ManavLab", href: MANAVLAB_URL },
      { label: "Founder", href: FOUNDER_PORTFOLIO_URL },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Lead Policy", to: "/policies#lead-policy" },
      { label: "Outreach Policy", to: "/policies#outreach-policy" },
      { label: "International Lead Policy", to: "/policies#international-lead-policy" },
      { label: "Code of Conduct", to: "/policies#code-of-conduct" },
      { label: "Refund Policy", to: "/refund" },
      { label: "Disclaimer", to: "/disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-page grid grid-cols-2 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary">
            Connecting freelancers to real opportunities.
          </p>
          <p className="mt-4 text-xs font-medium text-secondary">Powered by ManavLab.</p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-navy">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  {"to" in link ? (
                    <Link
                      to={link.to}
                      className="text-sm text-secondary transition-colors hover:text-teal"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary transition-colors hover:text-teal"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-navy">Stay Connected</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-secondary transition-colors hover:text-teal"
              >
                <Mail size={15} aria-hidden="true" /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-secondary transition-colors hover:text-teal"
              >
                <Phone size={15} aria-hidden="true" /> {CONTACT.phone}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={MANAVLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ManavLab website"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-secondary hover:border-teal hover:text-teal"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={MANAVLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ManavLab Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-secondary hover:border-teal hover:text-teal"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-secondary sm:flex-row">
          <p>© 2026 SkillBridge. Powered by ManavLab. All rights reserved.</p>
          <p>Buldhana, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
