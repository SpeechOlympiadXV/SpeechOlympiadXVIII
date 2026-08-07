-- Enable RLS on the table
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert data
CREATE POLICY "Allow public inserts" 
ON registrations 
FOR INSERT 
WITH CHECK (true);
