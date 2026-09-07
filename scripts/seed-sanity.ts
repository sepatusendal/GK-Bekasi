/**
 * One-time migration: pushes the hardcoded content from src/lib/data/*.ts
 * into Sanity as seed documents. Safe to re-run — every document uses a
 * stable, deterministic _id, so re-running this script updates the same
 * documents instead of duplicating them (createOrReplace).
 *
 * Usage:
 *   1. Create a Sanity API token with "Editor" permission:
 *      https://www.sanity.io/manage -> your project -> API -> Tokens
 *   2. Put it in .env.local as SANITY_API_WRITE_TOKEN=...
 *   3. npm run seed
 */
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { createClient } from "@sanity/client";

import { programs } from "../src/lib/data/programs";
import { events } from "../src/lib/data/events";
import { stories } from "../src/lib/data/stories";
import { galleryItems } from "../src/lib/data/gallery";
import { impactMetrics } from "../src/lib/data/impact";
import { leadership } from "../src/lib/data/leadership";

loadEnvLocal();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID (check .env.local)");
}
if (!token) {
  throw new Error(
    "Missing SANITY_API_WRITE_TOKEN. Create an Editor-permission token at " +
      "https://www.sanity.io/manage and add it to .env.local, then re-run `npm run seed`.",
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-01-01",
  useCdn: false,
});

function slugify(input: string) {
  return input;
}

function randomKey() {
  return Math.random().toString(36).slice(2, 10);
}

function toPortableText(paragraphs: string[]) {
  return paragraphs.map((text) => ({
    _type: "block" as const,
    _key: randomKey(),
    style: "normal" as const,
    markDefs: [],
    children: [{ _type: "span" as const, _key: randomKey(), text, marks: [] }],
  }));
}

interface SeedDoc {
  _id: string;
  _type: string;
  [key: string]: unknown;
}

async function main() {
  const docs: SeedDoc[] = [
    ...programs.map((p) => ({
      _id: `program-${slugify(p.slug)}`,
      _type: "program",
      title: p.title,
      slug: { _type: "slug", current: p.slug },
      category: p.category,
      description: p.description,
      content: toPortableText(p.content),
      coverColor: p.coverColor,
      location: p.location,
      date: p.date,
      featured: p.featured,
    })),
    ...events.map((e) => ({
      _id: `event-${slugify(e.slug)}`,
      _type: "event",
      title: e.title,
      slug: { _type: "slug", current: e.slug },
      category: e.category,
      coverColor: e.coverColor,
      description: e.description,
      about: toPortableText(e.about),
      agenda: e.agenda.map((a) => ({ ...a, _type: "agendaItem", _key: randomKey() })),
      date: e.date,
      day: e.day,
      month: e.month,
      time: e.time,
      location: e.location,
      capacity: e.capacity,
      registered: e.registered,
      status: e.status,
      registrationUrl: e.registrationUrl,
      organizer: e.organizer,
      featured: e.featured,
    })),
    ...stories.map((s) => ({
      _id: `story-${slugify(s.slug)}`,
      _type: "story",
      title: s.title,
      slug: { _type: "slug", current: s.slug },
      category: s.category,
      excerpt: s.excerpt,
      content: toPortableText(s.content),
      author: s.author,
      publishDate: s.publishDate,
      readingTime: s.readingTime,
      coverColor: s.coverColor,
      tags: s.tags,
      featured: s.featured,
    })),
    ...galleryItems.map((g) => ({
      _id: `galleryItem-${g.id}`,
      _type: "galleryItem",
      title: g.title,
      caption: g.caption,
      event: g.event,
      date: g.date,
      category: g.category,
      size: g.size,
      color: g.color,
      featured: g.featured,
      // NOTE: no `image` set — the original data had no real photos (CSS
      // color placeholders only). Upload real photos per item in the Studio
      // after seeding; the `image` field is required, so these documents
      // will show a validation warning in Studio until then.
    })),
    ...impactMetrics.map((m, index) => ({
      _id: `impactMetric-${slugify(m.label).toLowerCase().replace(/\s+/g, "-")}`,
      _type: "impactMetric",
      label: m.label,
      value: m.value,
      suffix: m.suffix,
      order: index,
    })),
    ...leadership.map((l, index) => ({
      _id: `leadershipMember-${slugify(l.name).toLowerCase().replace(/\s+/g, "-")}`,
      _type: "leadershipMember",
      name: l.name,
      role: l.role,
      bio: l.bio,
      initials: l.initials,
      color: l.color,
      order: index,
    })),
  ];

  console.log(`Seeding ${docs.length} documents into dataset "${dataset}"...`);

  const transaction = client.transaction();
  for (const doc of docs) {
    transaction.createOrReplace(doc);
  }
  const result = await transaction.commit();

  console.log(`Done. ${result.results.length} documents written.`);
  console.log(
    "Gallery items were seeded WITHOUT photos (originals were color placeholders) " +
      "— open the Studio at /studio and upload a real photo for each gallery item.",
  );
}

function loadEnvLocal() {
  const envPath = path.resolve(__dirname, "..", ".env.local");
  if (!existsSync(envPath)) return;

  const contents = readFileSync(envPath, "utf-8");
  for (const line of contents.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (key && !(key in process.env)) {
      process.env[key] = value;
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
