/*
 * Platzhaltertexte, vor Veröffentlichung rechtlich prüfen oder per Generator (z. B. eRecht24) ersetzen.
 */
import { createFileRoute } from "@tanstack/react-router";

import { EmailText, LegalLayout, Ph } from "@/components/site/LegalLayout";
import { SITE } from "@/lib/site";

const TITLE = "Impressum – Kurti Service Schönebeck (Elbe)";
const DESCRIPTION = "Impressum und Anbieterkennzeichnung von Kurti Service – Dienstleistungen, Schönebeck (Elbe).";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {SITE.name}
          <br />
          Inhaber: <Ph>Vor- und Nachname</Ph>
          <br />
          <Ph>Straße und Hausnummer</Ph>
          <br />
          {SITE.legalCityLine}
        </p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a className="text-brand underline" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
          <br />
          E-Mail: <a className="text-brand underline" href={SITE.emailHref}><EmailText email={SITE.email} /></a>
        </p>
      </section>
      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{" "}
          <Ph>Platzhalter / entfällt bei Kleinunternehmer</Ph>
          <br />
          Steuernummer: <Ph>Platzhalter, falls vorhanden</Ph>
        </p>
      </section>
      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          <Ph>Vor- und Nachname</Ph>, <Ph>Straße und Hausnummer</Ph>, {SITE.legalCityLine}
        </p>
      </section>
      <section>
        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          <Ph>Standardtext zur Verbraucherschlichtung einfügen</Ph>
        </p>
      </section>
      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          <Ph>Standardtext zur Haftung für Inhalte einfügen</Ph>
        </p>
      </section>
      <section>
        <h2>Haftung für Links</h2>
        <p>
          <Ph>Standardtext zur Haftung für Links einfügen</Ph>
        </p>
      </section>
    </LegalLayout>
  );
}
