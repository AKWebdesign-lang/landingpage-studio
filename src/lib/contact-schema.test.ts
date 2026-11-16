import { describe, expect, it } from "vitest";

import { contactSchema } from "./contact-schema";

const valid = {
  name: "Max Mustermann",
  phone: "+49 160 1234567",
  email: "max@example.de",
  service: "Winterdienst",
  message: "Bitte um Angebot",
  consent: true,
};

describe("contact form rules", () => {
  it("accepts a complete request", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a request without privacy consent", () => {
    expect(contactSchema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });

  it("rejects a request without a valid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "keine-mail" }).success).toBe(false);
  });

  it("rejects a service that is not offered", () => {
    expect(contactSchema.safeParse({ ...valid, service: "Autowäsche" }).success).toBe(false);
  });

  it("allows the phone number to be left empty", () => {
    expect(contactSchema.safeParse({ ...valid, phone: "" }).success).toBe(true);
  });
});
