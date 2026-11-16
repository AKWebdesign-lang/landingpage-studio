CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT NOT NULL,
  service TEXT,
  message TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact request"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  consent = true
  AND char_length(name) BETWEEN 1 AND 120
  AND char_length(email) BETWEEN 3 AND 255
  AND (phone IS NULL OR char_length(phone) <= 40)
  AND (service IS NULL OR char_length(service) <= 120)
  AND (message IS NULL OR char_length(message) <= 3000)
);