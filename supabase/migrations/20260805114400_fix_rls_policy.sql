-- Drop the previous policy if it exists to avoid conflicts
DROP POLICY IF EXISTS "Allow public inserts" ON registrations;

-- Explicitly allow the 'anon' and 'authenticated' roles (or just 'public') to insert rows.
-- In Supabase, the anonymous role is 'anon'
CREATE POLICY "Allow public inserts" 
ON registrations 
FOR INSERT 
TO public
WITH CHECK (true);
