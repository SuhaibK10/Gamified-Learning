# ⚡ JS Arena — Gamified JavaScript Practice

A full-stack gamified quiz app to practice JavaScript concepts, with Google OAuth, persistent progress tracking, notes, and an addictive XP/streak system.

**Stack:** Next.js 14 (App Router) + Supabase (Auth + PostgreSQL) + Tailwind CSS

---

## 🚀 Setup Guide (Step by Step)

### 1. Install Dependencies

```bash
npm install
```

### 2. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to initialize (~2 minutes)

### 3. Set Up the Database

1. In your Supabase dashboard, go to **SQL Editor**
2. Open the file `supabase/schema.sql` from this project
3. Copy-paste the entire contents into the SQL Editor
4. Click **Run** — this creates all tables, policies, and triggers

### 4. Enable Google OAuth

1. **Google Cloud Console:**
   - Go to [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
   - Create a new OAuth 2.0 Client ID (Web application)
   - Add authorized redirect URI: `https://YOUR-PROJECT-ID.supabase.co/auth/v1/callback`
   - Copy the **Client ID** and **Client Secret**

2. **Supabase Dashboard:**
   - Go to **Authentication → Providers → Google**
   - Enable Google
   - Paste the Client ID and Client Secret
   - Save

### 5. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in your Supabase URL and anon key:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Find these in: **Supabase Dashboard → Settings → API**

### 6. Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
js-arena/
├── app/
│   ├── layout.js           # Root layout with fonts
│   ├── page.js             # Home (server component, loads user data)
│   ├── globals.css          # Tailwind + global styles
│   ├── login/page.js       # Google OAuth login page
│   └── auth/callback/route.js  # OAuth callback handler
├── components/
│   └── Dashboard.js        # Main client component (game engine)
├── lib/
│   ├── supabase-browser.js # Supabase client (browser)
│   ├── supabase-server.js  # Supabase client (server)
│   └── questions.js        # 70+ questions across all JS topics
├── supabase/
│   └── schema.sql          # Database schema (run in SQL Editor)
├── middleware.js            # Auth middleware (protects routes)
├── tailwind.config.js
├── next.config.js
└── .env.local.example
```

---

## 🎮 Features

### Authentication
- Google OAuth via Supabase Auth
- Auto-creates user profile on first sign-in
- Session persists across browser restarts

### Game Mechanics
- **70+ questions** across 12 JS topics
- **3 difficulty tiers** — Easy, Medium, Hard
- **Combo multiplier** (x2 DOUBLE → x5 GODLIKE)
- **Streak tracking** with best streak record
- **Lives system** (5 hearts per session)
- **Timed mode** (15s per question + speed bonus XP)
- **XP & Leveling** (15 levels)

### Progress Tracking (All saved to Supabase)
- Total questions attempted & accuracy percentage
- Per-topic mastery bars
- Full attempt history with timestamps
- Best streak record

### Notes System
- Add notes/remarks after any question
- Notes are saved per-question in the database
- Browse all notes in Profile → Notes tab
- Notes persist across devices (synced via Supabase)

### Profile
- Google profile photo & display name
- Stats dashboard
- Notes browser
- Attempt history

---

## 🗄️ Database Schema

| Table | Purpose |
|-------|---------|
| `profiles` | User XP, streaks, stats (extends auth.users) |
| `topic_stats` | Per-topic correct/total counts |
| `attempts` | Every question attempt with timestamp |
| `notes` | User notes attached to specific questions |

All tables have **Row Level Security** — users can only access their own data.

---

## 🛡️ Security

- RLS on all tables (users see only their own data)
- Supabase Auth handles all session management
- No sensitive data in client-side code
- OAuth tokens managed by Supabase (never exposed)
