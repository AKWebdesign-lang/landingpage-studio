import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/integrations/supabase/types";
import { contactSchema } from "./contact-schema";

// Public endpoint: visitors may only insert (RLS allows INSERT, nothing else).
export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const client = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await client.from("contact_submissions").insert({
      name: data.name,
      phone: data.phone || null,
      email: data.email,
      service: data.service,
      message: data.message || null,
      consent: data.consent,
    });

    if (error) {
      console.error("contact insert failed", error);
      throw new Error("Ihre Anfrage konnte nicht gespeichert werden.");
    }
    return { ok: true as const };
  });
