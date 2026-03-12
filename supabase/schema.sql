-- ════════════════════════════════════════════════════
-- JS Arena — Database Schema
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor)
-- ════════════════════════════════════════════════════

-- 1. User profiles (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text,
  avatar_url text,
  avatar_emoji text default '🧑‍💻',
  xp integer default 0,
  best_streak integer default 0,
  total_answered integer default 0,
  total_correct integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. Topic mastery stats
create table public.topic_stats (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  topic text not null,
  correct integer default 0,
  total integer default 0,
  updated_at timestamptz default now(),
  unique(user_id, topic)
);

-- 3. Question attempt history
create table public.attempts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  question text not null,
  topic text not null,
  difficulty integer not null,
  correct boolean not null,
  created_at timestamptz default now()
);

-- 4. User notes per question
create table public.notes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  question text not null,
  content text not null,
  created_at timestamptz default now()
);

-- ═══ ROW LEVEL SECURITY ═══

alter table public.profiles enable row level security;
alter table public.topic_stats enable row level security;
alter table public.attempts enable row level security;
alter table public.notes enable row level security;

-- Users can only read/write their own data
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can manage own topic_stats" on public.topic_stats
  for all using (auth.uid() = user_id);

create policy "Users can manage own attempts" on public.attempts
  for all using (auth.uid() = user_id);

create policy "Users can manage own notes" on public.notes
  for all using (auth.uid() = user_id);

-- ═══ AUTO-CREATE PROFILE ON SIGNUP ═══

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', 'Player'),
    coalesce(new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data->>'picture', '')
  );
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ═══ INDEXES ═══

create index idx_attempts_user on public.attempts(user_id, created_at desc);
create index idx_notes_user on public.notes(user_id);
create index idx_topic_stats_user on public.topic_stats(user_id);
