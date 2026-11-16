import { Link } from "@tanstack/react-router";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

const NAV = [
  { label: "Leistungen", hash: "leistungen" },
  { label: "Über uns", hash: "ueber-uns" },
  { label: "Einsatzgebiet", hash: "einsatzgebiet" },
  { label: "Kontakt", hash: "kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Kontaktleiste – auf Desktop immer sichtbar */}
      <div className="hidden bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-sm">
          <p className="truncate text-navy-foreground/80">
            Reinigung & Dienstleistungen in {SITE.area}
          </p>
          <div className="flex shrink-0 items-center gap-6 font-semibold">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Phone className="size-4 text-gold" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.emailHref}
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Mail className="size-4 text-gold" aria-hidden="true" />
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
          <Link to="/" aria-label="Kurti Service – Startseite" className="min-w-0">
            <Logo />
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                className="relative font-medium text-foreground/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:text-navy hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="brand" className="hidden h-11 px-5 sm:inline-flex">
              <Link to="/" hash="kontakt">
                Angebot anfordern
              </Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              className="grid size-11 place-items-center rounded-full bg-sky text-navy lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            className="border-t border-border bg-background px-4 pb-5 pt-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.hash}>
                  <Link
                    to="/"
                    hash={item.hash}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-display text-lg font-semibold text-navy hover:bg-sky"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
