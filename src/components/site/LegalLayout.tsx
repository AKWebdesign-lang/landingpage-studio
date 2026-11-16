import type { ReactNode } from "react";

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-sky-gradient">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="break-words text-3xl font-extrabold text-navy hyphens-auto sm:text-5xl">{title}</h1>
        <div className="gold-rule mt-5 w-24" />
        <div className="mt-10 space-y-8 rounded-3xl bg-card p-6 leading-relaxed shadow-card sm:p-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_p]:mt-2 [&_p]:text-foreground/85">
          {children}
        </div>
      </article>
    </div>
  );
}

/** Gut sichtbarer Platzhalter, den der Kunde später ersetzt. */
export function Ph({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-gold-soft/60 px-1.5 py-0.5 font-semibold text-navy">
      [{children}]
    </span>
  );
}

/** E-Mail-Adresse, die vor dem @ sauber umbricht statt mitten im Wort. */
export function EmailText({ email }: { email: string }) {
  const [local, domain] = email.split("@");
  return (
    <>
      {local}
      <wbr />@{domain}
    </>
  );
}
