# GK Bekasi

Okay so picture this. You're scrolling GitHub at 2am for reasons only you
understand, you stumble onto a repo called GK Bekasi, and your brain
immediately goes "oh cool, church website number four thousand and twelve."

Wrong. Incorrect. Access denied. Try again.

GK stands for Garuda Keadilan, and it runs like a proper chain of command,
almost military but with better branding. GK Pusat sits at the top calling
the shots nationally. Under that you've got GK Wilayah, which covers a whole
region. Under that, GK Daerah, which handles things at the district level
and is where the actual boots-on-the-ground stuff happens. This particular
repo powers GK Daerah Kabupaten Bekasi, tucked under the GK Wilayah Jawa
Barat umbrella. Basically it's a youth movement organization doing programs,
events, and community impact work for anak muda di Kabupaten Bekasi. My old
project folder is just named "GK Website" because I was eighteen commits deep
and did not have the creative bandwidth left for a better name. We move on.

This thing was designed, built, occasionally rage quit on, and eventually
shipped by yours truly, Bang Wira. If it looks good, that was me. If
something's broken, that was also technically me, but let's not dwell.

## The stack, aka the ingredients list nobody reads until something explodes

- **Next.js 16**, App Router division, comfortably nesting inside `src/app`
  like it pays rent there
- A headless CMS handling the content, parked at a route name so
  intentionally weird that even I sometimes forget it exists. Security
  through obscurity is not a real security strategy according to every
  cybersecurity textbook ever written, and yet, here we are, thriving.
- **Tailwind v4 with shadcn** on top, because manually writing CSS from
  scratch in the year of our lord whatever-year-this-is is a form of
  self-harm I no longer participate in
- **React Hook Form plus Zod**, because a form that doesn't validate input
  is basically just a decorative rectangle pretending to have a personality
- A full lineup of pages: programs, events, stories, gallery, about,
  contact, join. Everything an actual organization needs on a website, zero
  filler, no "our journey" slideshow nobody asked for

## Getting it running on your machine, a tutorial for the brave

Step one, install the dependencies. This part is not negotiable and also
not exciting.

```bash
npm install
```

Step two, clone the env example into a real one so the app stops
threatening to crash the second you open it.

```bash
cp .env.example .env.local
```

Fill it in with, roughly:

- your CMS project id, sitting in your project dashboard, waiting patiently
- your CMS dataset, which ninety nine percent of the time is just `production`,
  do not overthink this, I promise it's fine
- a write token, for the seed script and anything that actually writes data
  instead of just politely reading it
- a revalidate secret, has to match the one on the webhook, protect this
  like it's the last slice of pizza at a group hangout
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, only matters once you're live,
  local dev genuinely could not care less

Step three, the moment of truth.

```bash
npm run dev
```

Pull up `http://localhost:3000`, and look at that, it's alive. Screenshot it,
send it to the group chat, tell everyone you're a developer now. You earned
this, kind of.

## Commands worth knowing

```bash
npm run build   # find out in real time whether your code respects you
npm run start   # runs the production build locally so you can flex privately
npm run lint    # eslint politely roasting every questionable decision you made
npm run seed    # dumps starter content into the CMS so it's not just an empty void
```

## Editing content without going anywhere near the code

There's an admin studio living quietly inside the app at that one weird
route I already said I'm not writing down. If you're on the team and you
actually need it, just ask, it's not that deep. Programs, events, stories,
gallery photos, leadership bios, all editable by a real person who has never
opened a terminal and never will, and honestly, good for them. That's the
entire point of having a CMS instead of hardcoding text into components like
some kind of feral raccoon with a keyboard.

## Where this thing actually lives

Deployed on Vercel and reachable at the real domain, gkbekasi.id, which
sounds a lot more official than it did as a random Vercel preview link.
Push to `master`, Vercel builds it, deploys it, and generally handles
business without me lifting another finger. No FTP. No dragging zip files
into a shared hosting panel while praying to whatever's listening. We are
so far past that era it's not even funny anymore, although honestly it's a
little funny.

## How the folders are organized, for anyone snooping around

```
src/
  app/          routes: programs, events, stories, gallery, about, contact, join
  components/   UI pieces, split by feature so it doesn't collapse into one
                cursed 4000 line file that only past me could ever explain
  lib/          data helpers, form logic, and assorted utilities that didn't
                have a better home and got adopted here instead
  sanity/       schema types and studio config, the actual brain of the CMS,
                tread carefully unless you enjoy debugging schema errors
                for fun, which, respectfully, nobody does
```

## Some things worth knowing before you judge the commit history

This repo got rebuilt from scratch at one point because GitHub's
contributor graph decided, completely unprompted, to hallucinate a
contributor that never made a single real commit. I checked everywhere,
git log, reflog, the GitHub API directly, all of it came back clean, and
the sidebar widget still stubbornly disagreed with reality. Rather than
argue with a caching bug that had already made up its mind, I deleted the
whole repo and started over. Sometimes diplomacy fails and you just have to
nuke it from orbit, it's the only way to be sure. Nothing important was
lost, just some history nobody was going to read anyway.

If something in the code looks weird, assume it's intentional and there's a
reason hiding in a commit message somewhere. If it looks straight up broken,
it's probably just broken, open an issue, or better yet, just message me
directly, GitHub issues are where good bug reports go to be ignored for
three weeks.

That's the whole tour. Clone it, run it, break it, fix it, repeat. Welcome
to the team, or welcome to just being curious, either way, glad you're here.

PS: if you scrolled all the way down here just to check if there's an
easter egg, congrats, this sentence is it.
