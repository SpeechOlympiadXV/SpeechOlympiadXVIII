-- Harden the public registration endpoint.
--
-- Context: the anon key ships in the client bundle (by design), so anyone can
-- POST straight to PostgREST and bypass the client-side Zod validation. The
-- previous policy was `WITH CHECK (true)`, which accepted anything, and the
-- table had no uniqueness, so the same person could register repeatedly.
--
-- Reads were already safe: RLS is on and no SELECT policy exists.

-- 1. Stop duplicate registrations ------------------------------------------
-- Deduplicate any rows that already exist before adding the constraints,
-- keeping the earliest submission for each email / university ID.
DELETE FROM registrations a
USING registrations b
WHERE a.ctid > b.ctid
  AND lower(a.email) = lower(b.email);

DELETE FROM registrations a
USING registrations b
WHERE a.ctid > b.ctid
  AND lower(a.registration_number) = lower(b.registration_number);

CREATE UNIQUE INDEX IF NOT EXISTS registrations_email_lower_key
  ON registrations (lower(email));

CREATE UNIQUE INDEX IF NOT EXISTS registrations_regno_lower_key
  ON registrations (lower(registration_number));

-- 2. Enforce server-side what the form enforces client-side ----------------
DROP POLICY IF EXISTS "Allow public inserts" ON registrations;

CREATE POLICY "Allow public inserts"
ON registrations
FOR INSERT
TO public
WITH CHECK (
  length(trim(first_name))           BETWEEN 1 AND 100
  AND length(trim(last_name))        BETWEEN 1 AND 100
  AND length(trim(registration_number)) BETWEEN 1 AND 50
  AND length(trim(name_on_certificate)) BETWEEN 1 AND 200
  AND length(trim(department))       BETWEEN 1 AND 150
  AND email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  AND length(email)                  <= 255
  AND phone ~ '^[0-9+()[:space:]-]{7,20}$'
  AND batch                          IN ('22', '23', '24', '25')
  AND faculty                        IN (
        'Engineering', 'Information Technology', 'Business',
        'Architecture', 'Medicine', 'Graduate Studies'
      )
  AND previous_participation         IN ('yes', 'no')
  AND hear_about                     IN (
        'Gavel Club of UOM', 'Social Media', 'Friend', 'Other'
      )
  AND length(coalesce(hear_about_other, '')) <= 500
);

-- 3. Remaining gap ----------------------------------------------------------
-- This still allows unlimited *valid* submissions from a script. Add a captcha
-- (Cloudflare Turnstile pairs well with the existing Cloudflare setup) or move
-- the insert behind a rate-limited Edge Function before opening registrations.
