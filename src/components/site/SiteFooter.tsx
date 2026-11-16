import { Link } from "@tanstack/react-router";

import { SITE } from "@/lib/site";
import { EmailText } from "./LegalLayout";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep pb-28 text-navy-foreground md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <Logo inverted />
          <p className="max-w-xs text-sm text-navy-foreground/70">{SITE.slogan}</p>
        </div>
        <div className="space-y-2 text-sm">
          <h2 className="mb-3 font-display text-base font-bold text-gold">Kontakt</h2>
          <p>{SITE.name}</p>
          <p>
            {SITE.legalCityLine}
          </p>
          <p>
            <a href={SITE.phoneHref} className="hover:text-gold">
              Tel./WhatsApp: {SITE.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={SITE.emailHref} className="hover:text-gold">
              <EmailText email={SITE.email} />
            </a>
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <h2 className="mb-3 font-display text-base font-bold text-gold">Rechtliches</h2>
          <p>
            <Link to="/impressum" className="hover:text-gold">
              Impressum
            </Link>
          </p>
          <p>
            <Link to="/datenschutz" className="hover:text-gold">
              Datenschutz
            </Link>
          </p>
        </div>
      </div>
      <div className="gold-rule opacity-60" />
      <p className="px-6 py-5 text-center text-xs text-navy-foreground/60">
        © 2027 Kurti Service – Dienstleistungen. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}
