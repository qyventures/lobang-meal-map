# Lobang Meal Map

A mobile-first community-powered Singapore cheap eats directory. Tagline: **Find affordable meals near you.** Secondary tagline: **Under $3.50, $5, $8 and $10.**

## Features

- Search cheap meals by stall, dish, address, area, or MRT.
- Filter by price bands: under S$3.50, S$5, S$8, and S$10.
- Filter by area/MRT and food type: cai fan, chicken rice, noodles, prata, nasi lemak, vegetarian, halal, and other.
- Listing cards include stall name, item, price, area, nearest MRT, address, opening hours, tags, value note, photo URL, Google Maps link, and verified date.
- Submit-a-cheap-meal form designed for pending submissions.
- Simple admin review page for approve/reject/edit flows.
- Fallback seed data so the app runs without Supabase.
- Supabase-ready client helper and SQL schema.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run lint
npm run build
```

## Supabase setup

1. Create a Supabase project.
2. Run `database/supabase.sql` in the Supabase SQL editor.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Extend the server actions/API routes to persist submissions and admin moderation. Until then, seed data keeps first run dependency-free.

## Deployment

### Vercel

Import the GitHub repo, keep the default Next.js settings, and add Supabase environment variables when ready.

### VPS

```bash
npm install
npm run build
npm run start
```

Use a process manager such as PM2 or systemd behind a reverse proxy like Nginx.

## Codex environment note

During MVP creation, `npm install` was attempted but the environment returned `403 Forbidden` when fetching `@supabase/supabase-js` from the npm registry. Because dependencies could not be installed, `npm run lint` and `npm run build` could not find the local `next` binary in this environment. The project files are still committed and should install normally in a standard Node.js environment with npm registry access.
