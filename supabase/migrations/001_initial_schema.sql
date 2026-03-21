-- Miranda Portfolio — initial schema
-- Run this in the Supabase SQL Editor (supabase.com > your project > SQL Editor)

create table pages (
  id         uuid primary key default gen_random_uuid(),
  slug       text unique not null,
  title      text not null,
  published  boolean not null default false,
  created_at timestamptz not null default now()
);

create table sections (
  id       uuid primary key default gen_random_uuid(),
  page_id  uuid not null references pages(id) on delete cascade,
  "order"  integer not null,
  type     text not null,
  content  jsonb not null default '{}'
);

create index sections_page_id_order_idx on sections (page_id, "order");

create table site_config (
  id      integer primary key default 1 check (id = 1),
  fonts   jsonb not null default '{}',
  colors  jsonb not null default '{}',
  spacing text not null default 'normal'
);

-- Seed the single site_config row with defaults
insert into site_config (id, fonts, colors, spacing)
values (1, '{}', '{}', 'normal');
