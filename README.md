# GK Bekasi

So here's the deal. This is the website for GK Bekasi, short for Garuda Keadilan
Kabupaten Bekasi, which is definitely NOT a church even though the folder name
in a bunch of my old notes says "GK Website" and confused literally everyone
including past me at 2am. It's a community movement thing. People, programs,
impact, stories, the whole deal. Built by Bang Wira, deployed by Bang Wira,
occasionally cursed at by Bang Wira.

Anyway. Next.js. Because at some point I decided plain HTML and a CSS file
called `style-final-FINAL-v2.css` was not gonna cut it anymore and I needed
something with more moving parts to be sad about at 1am.

## The stack, if you're into that sort of thing

- **Next.js 16**, App Router flavor, living its best life inside `src/app`
- A headless CMS running the content, tucked away at a route name that is
  intentionally weird so randos poking around don't stumble into the admin
  panel by accident. Security through obscurity, and no I'm not putting the
  actual path in a public README, what do you take me for.
- **Tailwind v4 plus shadcn** so things look put together without me manually
  fighting flexbox for six hours like it's 2016
- **React Hook Form and Zod** because forms that don't validate anything are
  basically just decorative boxes and nobody needs that
- Full set of pages: programs, events, stories, gallery, about, contact, join.
  Basically everything an organization website needs and none of the bloat
  it doesn't.

## Running this on your machine

First, get the dependencies in. Standard stuff.

```bash
npm install
```

Then copy the env example so you actually have a `.env.local` to work with,
because the CMS will yell at you otherwise and honestly it's not wrong to.

```bash
cp .env.example .env.local
```

Fill it in with these:

- your CMS project id, grab it off your project dashboard
- your CMS dataset, almost always just `production`, don't overthink this one
- a write token, needed for the seed script and anything that writes data
  instead of just reading it
- a revalidate secret, has to match whatever's set on the webhook, guard
  this like it owes you money
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, only matters in production, local
  dev doesn't care

Then just run it.

```bash
npm run dev
```

Pop open `http://localhost:3000` and there it is. Look at that. You built a
website. Call your mom.

## Commands you'll actually use

```bash
npm run build   # the moment of truth, will it even build
npm run start   # runs the production build so you can pretend you're deployed
npm run lint    # eslint gently reminding you that you are, in fact, human
npm run seed    # dumps starter content into the CMS, see scripts/ for the script
```

## Editing content without touching code

There's a studio living right inside the app at that weird route I'm not
writing down here. Programs, events, stories, gallery photos, leadership
bios, all editable by a real human being who does not know what TypeScript
is and honestly does not need to. This is the whole point of having a CMS
instead of hardcoding everything like some kind of animal. Ask me for the
path if you actually need it, I'm not putting it in a file the entire
internet can read.

## Where it lives

Deployed on Vercel, sitting pretty at
[gk-bekasi.vercel.app](https://gk-bekasi.vercel.app). Push to `master` and
Vercel just handles it, no FTP, no dragging files into a server through
FileZilla at 3am praying nothing breaks. We've evolved as a species.

## How the folders are laid out

```
src/
  app/          routes: programs, events, stories, gallery, about, contact, join
  components/   UI stuff, split up by feature so it doesn't turn into one
                giant unreadable file that only makes sense to past me
  lib/          data helpers, form logic, random utilities that didn't have
                anywhere better to live
  sanity/       schema types and studio config, the CMS brains, don't poke
                around in here unless you know what you're doing
```

## A few honest notes

This repo got rebuilt from scratch at one point because GitHub's contributor
graph decided to hallucinate a contributor that never actually made a single
commit, and rather than fight a caching bug I just nuked the whole repo and
started clean. Sometimes the fastest fix is violence. If you're reading this
and wondering why the commit history looks suspiciously short for a site
with this many features, that's why. Nothing was lost, just history.

If something looks weird in the code, it's probably intentional and there's
a reason buried in a commit message somewhere. If it looks broken, it's
probably just broken, open an issue or hit me up.

That's the whole tour. Go build something.
