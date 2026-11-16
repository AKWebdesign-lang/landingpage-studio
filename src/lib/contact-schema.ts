import { z } from "zod";

import { SERVICE_OPTIONS } from "./site";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen an.").max(120),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[0-9+()\/\s-]*$/, "Bitte geben Sie eine gültige Telefonnummer an.")
    .optional()
    .or(z.literal("")),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.").max(255),
  service: z.enum(SERVICE_OPTIONS, {
    errorMap: () => ({ message: "Bitte wählen Sie eine Leistung aus." }),
  }),
  message: z.string().trim().max(3000).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Bitte stimmen Sie der Datenschutzerklärung zu." }),
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;
