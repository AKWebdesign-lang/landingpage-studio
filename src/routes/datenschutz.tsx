/*
 * Platzhaltertexte, vor Veröffentlichung rechtlich prüfen oder per Generator (z. B. eRecht24) ersetzen.
 */
import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout, Ph } from "@/components/site/LegalLayout";
import { SITE } from "@/lib/site";

const TITLE = "Datenschutzerklärung – Kurti Service Schönebeck (Elbe)";
const DESCRIPTION = "Informationen zum Datenschutz bei Kurti Service – Dienstleistungen gemäß DSGVO.";

export const Route = createFileRoute("/datenschutz")({
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
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          {SITE.name}
          <br />
          <Ph>Vor- und Nachname</Ph>
          <br />
          <Ph>Straße und Hausnummer</Ph>
          <br />
          {SITE.city}, {SITE.state}
          <br />
          Tel. {SITE.phoneDisplay}
          <br />
          E-Mail: <span className="break-all">{SITE.email}</span>
        </p>
      </section>
      <section>
        <h2>2. Hosting und Server-Logfiles</h2>
        <p>
          <Ph>Angaben zum Hoster, Serverstandort und zu Server-Logfiles einfügen</Ph>
        </p>
      </section>
      <section>
        <h2>3. Kontaktaufnahme per Formular, E-Mail, Telefon und WhatsApp</h2>
        <p>
          Wenn Sie uns über das Kontaktformular, per E-Mail, Telefon oder WhatsApp kontaktieren,
          verarbeiten wir Ihre Angaben (z. B. Name, Telefonnummer, E-Mail-Adresse, gewünschte
          Leistung, Nachricht) zur Bearbeitung Ihrer Anfrage. <Ph>Rechtsgrundlage, Speicherdauer und
          Hinweise zu WhatsApp (Meta) ergänzen</Ph>
        </p>
      </section>
      <section>
        <h2>4. Eingebundene Dienste</h2>
        <p>
          Google Fonts, TikTok-Link, WhatsApp-Link <Ph>ggf. Karte</Ph>.{" "}
          <Ph>Beschreibung der Datenverarbeitung je Dienst einfügen</Ph>
        </p>
      </section>
      <section>
        <h2>5. Cookies und Tracking</h2>
        <p>
          <Ph>Angaben zu Cookies und Tracking einfügen</Ph>
        </p>
      </section>
      <section>
        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Widerspruch gegen die Verarbeitung sowie auf Datenübertragbarkeit.{" "}
          <Ph>Ausführlichen Text ergänzen</Ph>
        </p>
      </section>
      <section>
        <h2>7. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Landesbeauftragter für den Datenschutz Sachsen-Anhalt
          <br />
          <Ph>Anschrift der Aufsichtsbehörde</Ph>
        </p>
      </section>
      <section>
        <h2>8. Stand</h2>
        <p>
          <Ph>Datum</Ph>
        </p>
      </section>
    </LegalLayout>
  );
}
