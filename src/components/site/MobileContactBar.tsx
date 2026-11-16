import { Mail, MessageCircle, Phone } from "lucide-react";

import { SITE } from "@/lib/site";

export function MobileContactBar() {
  return (
    <nav
      aria-label="Schnellkontakt"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-border bg-background/95 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-card backdrop-blur md:hidden"
    >
      <a
        href={SITE.phoneHref}
        className="flex flex-col items-center gap-1 rounded-2xl bg-navy py-2.5 text-xs font-semibold text-navy-foreground"
      >
        <Phone className="size-5" aria-hidden="true" />
        Anrufen
      </a>
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 rounded-2xl bg-whatsapp py-2.5 text-xs font-semibold text-whatsapp-foreground"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp
      </a>
      <a
        href={SITE.emailHref}
        className="flex flex-col items-center gap-1 rounded-2xl bg-brand py-2.5 text-xs font-semibold text-primary-foreground"
      >
        <Mail className="size-5" aria-hidden="true" />
        E-Mail
      </a>
    </nav>
  );
}
