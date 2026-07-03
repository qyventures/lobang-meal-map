create type listing_status as enum ('approved', 'pending', 'rejected');

create table public.meal_listings (
  id uuid primary key default gen_random_uuid(),
  stall_name text not null,
  food_item text not null,
  price numeric(6,2) not null check (price > 0),
  area text not null,
  nearest_mrt text not null,
  address text not null,
  opening_hours text not null,
  tags text[] not null default '{}',
  value_note text not null,
  photo_url text not null,
  google_maps_url text not null,
  verified_date date,
  status listing_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.meal_listings enable row level security;

create policy "Approved listings are readable" on public.meal_listings for select using (status = 'approved');
create policy "Anyone can submit pending listings" on public.meal_listings for insert with check (status = 'pending');
