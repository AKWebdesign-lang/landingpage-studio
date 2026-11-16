import { createFileRoute } from "@tanstack/react-router";
import {
  AppWindow,
  BadgeCheck,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  FileSignature,
  Home,
  KeyRound,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  SprayCan,
  Trash2,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import heroImage from "@/assets/hero-gebaeude-team.jpg";
import aboutImage from "@/assets/ueber-uns-reinigung.jpg";
import whatsappQr from "@/assets/whatsapp-qr.svg";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const TITLE = "Kurti Service – Reinigung & Dienstleistungen in Schönebeck & Magdeburg";
const DESCRIPTION =
  "Gebäudereinigung, Treppenhaus, Glasreinigung, Hausmeisterservice, Entrümpelung, Umzug & Winterdienst in Magdeburg, Schönebeck & Umgebung. Jetzt unverbindliches Angebot anfordern.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

type Service = { icon: LucideIcon; title: string; text: string };

const BUILDING_SERVICES: Service[] = [
  { icon: SprayCan, title: "Unterhaltsreinigung", text: "Regelmäßige Reinigung von Büros, Praxen und Geschäften." },
  { icon: Building2, title: "Treppenhausreinigung", text: "Gepflegte Treppenhäuser – wöchentlich oder monatlich." },
  { icon: Sparkles, title: "Bauendreinigung", text: "Gründliche Endreinigung nach Sanierung oder Neubau." },
  { icon: AppWindow, title: "Glas- & Rahmenreinigung", text: "Streifenfreie Fenster, Wintergärten und Fassaden." },
  { icon: Wrench, title: "Hausmeisterservice", text: "Kleine Reparaturen und zuverlässige Objektkontrolle." },
];

const SPECIAL_SERVICES: Service[] = [
  { icon: Home, title: "Haushaltsauflösungen", text: "Diskret, respektvoll und zuverlässig organisiert." },
  { icon: Trash2, title: "Entrümpelung & Beräumung", text: "Keller, Dachböden und Wohnungen – besenrein übergeben." },
  { icon: ShieldCheck, title: "Messie-Wohnungen", text: "Professionelle, diskrete Reinigung mit Feingefühl." },
  { icon: Truck, title: "Umzugsservice", text: "Kleinumzüge und Transporte – schnell und sicher." },
  { icon: Snowflake, title: "Winterdienst", text: "Räumen und Streuen, damit Ihre Wege sicher bleiben." },
];

const TRUST = [
  { icon: CalendarCheck, label: `Start: ${SITE.start}` },
  { icon: Users, label: "Privat & Gewerbe" },
  { icon: BadgeCheck, label: "Unverbindliches Angebot" },
  { icon: FileSignature, label: "Vorverträge jetzt möglich" },
];

const STEPS = [
  { icon: Phone, title: "Kontakt aufnehmen", text: "Per Anruf, WhatsApp oder E-Mail – ganz wie es Ihnen passt." },
  { icon: ClipboardCheck, title: "Unverbindliches Angebot erhalten", text: "Wir besprechen Ihren Bedarf und erstellen ein transparentes Angebot." },
  { icon: KeyRound, title: "Termin vereinbaren & Vertrag abschließen", text: "Wir legen los – auf Wunsch schon jetzt per Vorvertrag." },
];

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Area />
      <Process />
      <Social />
      <Contact />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  inverted?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-extrabold sm:text-4xl ${inverted ? "text-navy-foreground" : "text-navy"}`}
      >
        {title}
      </h2>
      <div className="gold-rule mx-auto mt-5 w-24" />
      {text && (
        <p className={`mt-5 text-lg ${inverted ? "text-navy-foreground/80" : "text-muted-foreground"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function ContactPills({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <Button asChild variant="contact" size="xl" className="contact-glow">
        <a href={SITE.phoneHref} aria-label={`Anrufen: ${SITE.phoneDisplay}`}>
          <Phone aria-hidden="true" className="text-brand" />
          {SITE.phoneDisplay}
        </a>
      </Button>
      <Button
        asChild
        variant="contact"
        size="xl"
        className="contact-glow h-auto min-h-14 whitespace-normal break-all py-3 text-sm sm:min-h-16 sm:text-lg"
      >
        <a href={SITE.emailHref} aria-label={`E-Mail schreiben an ${SITE.email}`}>
          <Mail aria-hidden="true" className="text-brand" />
          {SITE.email}
        </a>
      </Button>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-shine relative isolate bg-navy text-navy-foreground">
      <img
        src={heroImage}
        alt="Reinigungsteam putzt die Glasfassade eines modernen Bürogebäudes"
        width={1600}
        height={1008}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="bg-hero absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-14 sm:px-6 sm:pb-36 sm:pt-20 lg:pt-28">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-navy-deep/40 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <Sparkles className="size-4 text-gold" aria-hidden="true" />
            Ab {SITE.start} für Sie da
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Kurti Service – Ihr Partner für{" "}
            <span className="text-gold-soft">Sauberkeit, Ordnung und Werterhalt</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/85 sm:text-xl">
            Reinigung & Dienstleistungen in {SITE.area} – für Privat & Gewerbe
          </p>

          <ContactPills className="mt-9" />

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="whatsapp" size="xl">
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                Jetzt per WhatsApp schreiben
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#kontakt">Unverbindliches Angebot anfordern</a>
            </Button>
          </div>

          <p className="mt-8 max-w-xl border-l-2 border-gold pl-4 text-sm text-navy-foreground/80 sm:text-base">
            Wir erstellen Ihnen ein unverbindliches Angebot & schließen auf Wunsch jetzt schon
            Vorverträge!
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-4 sm:px-6">
      <ul className="grid grid-cols-2 gap-3 rounded-3xl bg-card p-4 shadow-card sm:p-6 lg:grid-cols-4">
        {TRUST.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3 rounded-2xl bg-sky/60 p-3 sm:p-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-navy text-gold">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 text-sm font-semibold text-navy sm:text-base">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceColumn({ title, items, delay }: { title: string; items: Service[]; delay: number }) {
  return (
    <Reveal delay={delay} className="rounded-3xl bg-sky-gradient p-5 ring-1 ring-border sm:p-8">
      <h3 className="flex items-center gap-3 text-xl font-bold text-navy sm:text-2xl">
        <span className="h-6 w-1.5 rounded-full bg-gold" aria-hidden="true" />
        {title}
      </h3>
      <ul className="mt-6 grid gap-4">
        {items.map(({ icon: Icon, title: t, text }) => (
          <li
            key={t}
            className="group flex items-start gap-4 rounded-2xl bg-card p-4 shadow-soft ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:ring-gold/50 sm:p-5"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sky text-brand transition-colors group-hover:bg-navy group-hover:text-gold">
              <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h4 className="font-display text-lg font-bold text-navy">{t}</h4>
              <p className="mt-1 text-muted-foreground">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Alles aus einer Hand"
          text="Von der regelmäßigen Reinigung bis zur kompletten Beräumung – wir kümmern uns zuverlässig um Ihr Objekt."
        />
      </Reveal>
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <ServiceColumn title="Gebäudereinigung & Wartung" items={BUILDING_SERVICES} delay={0} />
        <ServiceColumn title="Spezialdienste & Unterstützung" items={SPECIAL_SERVICES} delay={120} />
      </div>
    </section>
  );
}

function About() {
  const values = [
    { title: "Zuverlässigkeit", text: "Feste Absprachen, pünktliche Termine und klare Kommunikation." },
    { title: "Sauberkeit", text: "Gründliche Arbeit mit Blick fürs Detail – sichtbar und spürbar." },
    { title: "Diskretion", text: "Wir gehen respektvoll mit Ihrem Zuhause und Ihren Räumen um." },
  ];
  return (
    <section id="ueber-uns" className="bg-sky/50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <img
            src={aboutImage}
            alt="Mitarbeiterin von Kurti Service reinigt einen Schreibtisch im Büro"
            width={1200}
            height={1408}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card sm:aspect-[5/5] lg:aspect-[4/5]"
          />
          <div className="absolute -bottom-6 right-4 rounded-2xl bg-navy px-5 py-4 text-navy-foreground shadow-card sm:right-8">
            <p className="text-xs uppercase tracking-widest text-gold">Firmenstart</p>
            <p className="font-display text-2xl font-extrabold">{SITE.start}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">Über uns</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Sauberkeit, auf die Sie sich verlassen können
          </h2>
          <div className="gold-rule mt-5 w-24" />
          <p className="mt-6 text-lg text-muted-foreground">
            Kurti Service ist Ihr neuer Ansprechpartner für Reinigung und Dienstleistungen rund um
            Haus, Wohnung und Gewerbeobjekt in {SITE.area}. Wir arbeiten persönlich, gewissenhaft und
            mit dem Anspruch, dass Sie sich um nichts mehr kümmern müssen.
          </p>
          <ul className="mt-8 grid gap-4">
            {values.map((v) => (
              <li key={v.title} className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft">
                <BadgeCheck className="mt-0.5 size-6 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-bold text-navy">{v.title}</h3>
                  <p className="text-muted-foreground">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Area() {
  return (
    <section id="einsatzgebiet" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">Einsatzgebiet</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Magdeburg, Schönebeck & Umgebung
          </h2>
          <div className="gold-rule mt-5 w-24" />
          <p className="mt-6 text-lg text-muted-foreground">
            Wir sind in der Region zu Hause und schnell bei Ihnen – für Privathaushalte,
            Hausverwaltungen, Büros, Praxen und Geschäfte. Ihr Ort ist nicht dabei? Fragen Sie
            einfach nach – wir finden eine Lösung.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Magdeburg", "Schönebeck (Elbe)", "Umgebung"].map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-2 font-semibold text-navy"
              >
                <MapPin className="size-4 text-brand" aria-hidden="true" />
                {c}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div
            role="img"
            aria-label="Stilisierte Karte: Einsatzgebiet rund um Magdeburg und Schönebeck an der Elbe"
            className="map-dots relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card ring-1 ring-border"
          >
            <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <circle cx="205" cy="160" r="120" className="fill-brand/10 stroke-brand/40" strokeDasharray="6 6" />
              <circle cx="205" cy="160" r="70" className="fill-brand/10" />
              <path
                d="M150 -10 C 175 40, 160 80, 190 110 S 230 170, 215 210 S 240 270, 260 320"
                className="fill-none stroke-brand/60"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <g>
                <circle cx="185" cy="95" r="9" className="fill-navy" />
                <circle cx="185" cy="95" r="16" className="fill-navy/20" />
              </g>
              <g>
                <circle cx="228" cy="200" r="9" className="fill-gold" />
                <circle cx="228" cy="200" r="16" className="fill-gold/25" />
              </g>
            </svg>
            <span className="absolute left-[50%] top-[24%] rounded-full bg-navy px-3 py-1 text-xs font-bold text-navy-foreground shadow-soft sm:text-sm">
              Magdeburg
            </span>
            <span className="absolute left-[60%] top-[63%] rounded-full bg-card px-3 py-1 text-xs font-bold text-navy shadow-soft ring-1 ring-gold sm:text-sm">
              Schönebeck (Elbe)
            </span>
            <span className="absolute bottom-4 left-4 rounded-full bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground">
              Elbe
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-navy-gradient py-20 text-navy-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="So einfach geht's" title="In 3 Schritten zum sauberen Ergebnis" inverted />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="relative h-full rounded-3xl border border-navy-foreground/15 bg-navy-foreground/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/60">
                <span className="font-display text-6xl font-extrabold text-gold/30" aria-label={`Schritt ${i + 1}`}>{i + 1}</span>
                <span className="absolute right-7 top-7 grid size-12 place-items-center rounded-2xl bg-navy-foreground text-navy">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-navy-foreground/75">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Social() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Social & Direktbuchung"
          title="Folgen Sie uns auf TikTok & buchen Sie direkt"
          text="Scannen Sie den Code mit Ihrem Smartphone – und schreiben Sie uns sofort."
        />
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
        <Reveal className="flex flex-col items-center rounded-3xl bg-card p-8 text-center shadow-card ring-1 ring-border">
          <img
            src={whatsappQr}
            alt="QR-Code: WhatsApp-Chat mit Kurti Service öffnen"
            width={200}
            height={200}
            loading="lazy"
            className="size-48 rounded-2xl ring-4 ring-sky"
          />
          <h3 className="mt-6 text-xl font-bold text-navy">Direkt per WhatsApp buchen</h3>
          <p className="mt-2 text-muted-foreground">{SITE.phoneDisplay}</p>
          <Button asChild variant="whatsapp" className="mt-6 h-12 px-6">
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              WhatsApp öffnen
            </a>
          </Button>
        </Reveal>
        <Reveal delay={120} className="flex flex-col items-center rounded-3xl bg-card p-8 text-center shadow-card ring-1 ring-border">
          {/* Platzhalter: hier den echten TikTok-QR-Code einsetzen */}
          <div className="grid size-48 place-items-center rounded-2xl border-2 border-dashed border-brand/40 bg-sky p-4 text-sm font-medium text-brand">
            TikTok-QR-Code folgt
          </div>
          <h3 className="mt-6 text-xl font-bold text-navy">Folgen Sie uns auf TikTok</h3>
          <p className="mt-2 text-muted-foreground">Einblicke, Vorher-Nachher & Tipps</p>
          <Button asChild variant="brand" className="mt-6 h-12 px-6">
            <a href={SITE.tiktokHref} target="_blank" rel="noopener noreferrer">
              Zu TikTok
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="hero-shine bg-navy-gradient text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal className="min-w-0">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">Kontakt</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Rufen Sie an oder schreiben Sie uns – wir freuen uns auf Sie!
          </h2>
          <div className="gold-rule mt-5 w-24" />

          <div className="mt-10 space-y-8">
            <a href={SITE.phoneHref} className="group block">
              <span className="flex items-center gap-2 text-sm uppercase tracking-widest text-navy-foreground/70">
                <Phone className="size-4 text-gold" aria-hidden="true" /> Telefon & WhatsApp
              </span>
              <span className="mt-2 block font-display text-4xl font-extrabold transition-colors group-hover:text-gold sm:text-5xl xl:text-6xl">
                {SITE.phoneDisplay}
              </span>
            </a>
            <a href={SITE.emailHref} className="group block">
              <span className="flex items-center gap-2 text-sm uppercase tracking-widest text-navy-foreground/70">
                <Mail className="size-4 text-gold" aria-hidden="true" /> E-Mail
              </span>
              <span className="mt-2 block break-words font-display text-2xl font-extrabold transition-colors group-hover:text-gold sm:text-3xl xl:text-4xl">
                {SITE.email.split("@")[0]}
                <wbr />@{SITE.email.split("@")[1]}
              </span>
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="whatsapp" size="xl">
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                Jetzt per WhatsApp schreiben
              </a>
            </Button>
          </div>
          <p className="mt-8 text-navy-foreground/75">
            Wir erstellen Ihnen ein unverbindliches Angebot & schließen auf Wunsch jetzt schon
            Vorverträge!
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl bg-card p-6 text-card-foreground shadow-card sm:p-8">
            <h3 className="text-2xl font-bold text-navy">Unverbindliches Angebot anfordern</h3>
            <p className="mb-6 mt-2 text-muted-foreground">
              Füllen Sie das Formular aus – wir melden uns zeitnah bei Ihnen.
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
