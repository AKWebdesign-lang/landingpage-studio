/*
 * Platzhaltertexte, vor Veröffentlichung rechtlich prüfen oder per Generator (z. B. eRecht24) ersetzen.
 */
import { createFileRoute } from "@tanstack/react-router";

import { EmailText, LegalLayout, Ph } from "@/components/site/LegalLayout";
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
          {SITE.legalCityLine}
          <br />
          Tel. {SITE.phoneDisplay}
          <br />
          E-Mail: <EmailText email={SITE.email} />
        </p>
      </section>
      <section>
        <h2>2. Hosting und Server-Logfiles</h2>
        <p>
          Diese Website wird über Lovable (Lovable Labs Incorporated) bereitgestellt.{" "}
          <Ph>Angaben zu Serverstandort, Server-Logfiles und Auftragsverarbeitung einfügen</Ph>
        </p>
      </section>
      <section>
        <h2>3. Kontaktaufnahme per Formular, E-Mail, Telefon und WhatsApp</h2>
        <p>
          Wenn Sie uns über das Kontaktformular, per E-Mail, Telefon oder WhatsApp kontaktieren,
          verarbeiten wir Ihre Angaben (z. B. Name, Telefonnummer, E-Mail-Adresse, gewünschte
          Leistung, Nachricht) zur Bearbeitung Ihrer Anfrage. Anfragen über das Kontaktformular
          werden in einer Datenbank bei unserem Hosting-Anbieter gespeichert und sind nur für uns
          einsehbar. <Ph>Rechtsgrundlage, Speicherdauer und Hinweise zu WhatsApp (Meta) ergänzen</Ph>
        </p>
      </section>
      <section>
        <h2>4. Eingebundene Dienste</h2>
        <p>
          <strong>Google Fonts:</strong> Die Schriftarten dieser Website werden beim Seitenaufruf von
          Servern der Google Ireland Ltd. geladen. Dabei wird Ihre IP-Adresse an Google übertragen.{" "}
          <Ph>Rechtsgrundlage ergänzen</Ph>
        </p>
        <p>
          <strong>WhatsApp- und TikTok-Links:</strong> Es handelt sich um einfache Links. Erst wenn
          Sie darauf klicken, werden Sie zu WhatsApp (Meta) bzw. TikTok weitergeleitet, und es gelten
          deren Datenschutzbestimmungen.
        </p>
        <p>
          <Ph>ggf. Karte</Ph> – die Karte zum Einsatzgebiet ist eine einfache Grafik und lädt keine
          Inhalte von Drittanbietern.
        </p>
      </section>
      <section>
        <h2>5. Cookies und Tracking</h2>
        <p>
          Diese Website setzt keine Cookies. Für eine anonyme Besucherstatistik nutzen wir die
          Statistikfunktion von Lovable. Sie verwendet keine Cookies, speichert nichts auf Ihrem
          Gerät, speichert keine IP-Adressen und erkennt Besucher nicht wieder.
        </p>
        <p>
          Erfasst werden bei jedem Besuch: die aufgerufenen Seiten, von welcher Seite Sie zu uns
          gekommen sind, Ihr Land, Browser, Betriebssystem und Gerätetyp (Computer, Smartphone oder
          Tablet), wie lange Sie bleiben, wie schnell die Seiten laden sowie technische Fehler.
          Detaillierte Daten werden 90 Tage gespeichert, tägliche Zusammenfassungen ein Jahr.
        </p>
        <p>
          Lovable erhebt diese Daten für uns.{" "}
          <a
            href="https://lovable.dev/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline"
          >
            Die Datenschutzerklärung von Lovable
          </a>{" "}
          erklärt, wie Lovable damit umgeht. <Ph>Rechtsgrundlage ergänzen</Ph>
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
