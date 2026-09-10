# GK Bekasi Website 🏛️

Yo. This is the official website for GK Bekasi, built with Next.js because apparently
we're too fancy for plain HTML now. Content lives in Sanity CMS so nobody has to touch
code just to change a photo or fix a typo in an event description — you're welcome, future me.

## What's Actually In Here

- **Next.js 16** — App Router, doing its App Router things in `src/app`
- **Sanity CMS** — the content brain, studio lives at `/atmint-gk` (yes that route name is
  intentionally weird, don't @ me)
- **Tailwind v4 + shadcn** — for making things look decent without losing a week to CSS
- **React Hook Form + Zod** — for forms that actually validate instead of vibing
- Pages for programs, events, stories, gallery, about, contact, join — basically the whole
  church-website starter pack, but not a template, actually built

## Getting This Thing Running Locally

1. Clone it, `cd` into it, do the usual:

```bash
npm install
```

2. Copy the env example and fill in your own Sanity project deets:

```bash
cp .env.example .env.local
```

You'll need:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — from your Sanity project dashboard
- `NEXT_PUBLIC_SANITY_DATASET` — usually just `production`, don't overthink it
- `SANITY_API_WRITE_TOKEN` — for the seed script and write operations
- `SANITY_REVALIDATE_SECRET` — matches whatever's set on the Sanity webhook, keep it secret keep it safe
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Google Search Console token, only needed for prod

3. Fire it up:

```bash
npm run dev
```

Go to [http://localhost:3000](http://localhost:3000) and admire your work.

## Other Useful Commands

```bash
npm run build   # ship it (or at least try to)
npm run start   # run the production build locally
npm run lint    # find out how many mistakes you made
npm run seed    # seed Sanity with starter data, uses scripts/seed-sanity.ts
```

## Content Editing (a.k.a. Sanity Studio)

Run the dev server, then hit `/atmint-gk` — that's the embedded Sanity Studio where
non-devs can edit programs, events, stories, gallery, and leadership info without
touching a single line of TypeScript. Bless.

## Deployment

Lives on Vercel: [gk-bekasi.vercel.app](https://gk-bekasi.vercel.app). Push to `master`,
Vercel does its magic, done. No manual FTP nonsense here, this ain't 2009.

## A Word on Structure

```
src/
  app/          # routes — programs, events, stories, gallery, about, contact, join
  components/   # UI pieces, organized by feature so it doesn't turn into spaghetti
  lib/          # data helpers, form logic, misc utilities
  sanity/       # schema types + studio config
```

That's it. Don't overthink it, just build.
