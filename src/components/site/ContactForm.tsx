import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/contact-schema";
import { submitContactRequest } from "@/lib/contact.functions";
import { SERVICE_OPTIONS } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "message" | "consent", string>>;

const fieldClass = "h-12 rounded-xl bg-background text-base";

export function ContactForm() {
  const submit = useServerFn(submitContactRequest);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      service: String(fd.get("service") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
    };
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await submit({ data: parsed.data });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle2 className="size-14 text-whatsapp" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-navy">Vielen Dank für Ihre Anfrage!</h3>
        <p className="max-w-sm text-muted-foreground">
          Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.
        </p>
        <Button variant="brand" className="h-11 px-6" onClick={() => setStatus("idle")}>
          Weitere Anfrage senden
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name *" id="name" error={errors.name}>
          <Input id="name" name="name" autoComplete="name" className={fieldClass} aria-invalid={!!errors.name} />
        </Field>
        <Field label="Telefon" id="phone" error={errors.phone}>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} aria-invalid={!!errors.phone} />
        </Field>
      </div>
      <Field label="E-Mail *" id="email" error={errors.email}>
        <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass} aria-invalid={!!errors.email} />
      </Field>
      <Field label="Gewünschte Leistung *" id="service" error={errors.service}>
        <select
          id="service"
          name="service"
          defaultValue=""
          aria-invalid={!!errors.service}
          className="h-12 w-full rounded-xl border border-input bg-background px-3 text-base text-foreground shadow-sm focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="" disabled>
            Bitte auswählen …
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Ihre Nachricht" id="message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Objekt, Größe, gewünschter Zeitraum …"
          className="rounded-xl bg-background text-base"
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 size-5 shrink-0 accent-brand"
            aria-invalid={!!errors.consent}
          />
          <span>
            Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert
            werden. Weitere Informationen in der{" "}
            <Link to="/datenschutz" className="font-medium text-brand underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            . *
          </span>
        </label>
        {errors.consent && <p className="mt-1.5 text-sm text-destructive">{errors.consent}</p>}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-destructive/10 p-3 text-sm text-destructive">
          Leider ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
        </p>
      )}

      <Button type="submit" variant="brand" size="xl" disabled={status === "sending"} className="w-full">
        {status === "sending" ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}
        Angebot anfordern
      </Button>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="font-semibold text-navy">
        {label}
      </Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
