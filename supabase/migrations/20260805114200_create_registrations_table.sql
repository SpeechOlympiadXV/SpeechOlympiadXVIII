CREATE TABLE registrations (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text not null,
  registration_number text not null,
  name_on_certificate text not null,
  batch text not null,
  faculty text not null,
  department text not null,
  email text not null,
  phone text not null,
  previous_participation text not null,
  hear_about text not null,
  hear_about_other text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
