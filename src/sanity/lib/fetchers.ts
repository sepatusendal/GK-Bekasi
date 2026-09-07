import { client } from "./client";
import {
  EVENT_BY_SLUG_QUERY,
  EVENT_SLUGS_QUERY,
  EVENTS_QUERY,
  FEATURED_PROGRAMS_QUERY,
  FEATURED_STORIES_QUERY,
  GALLERY_QUERY,
  IMPACT_METRICS_QUERY,
  LEADERSHIP_QUERY,
  PROGRAM_BY_SLUG_QUERY,
  PROGRAM_SLUGS_QUERY,
  PROGRAMS_QUERY,
  STORIES_QUERY,
  STORY_BY_SLUG_QUERY,
  STORY_SLUGS_QUERY,
  UPCOMING_EVENTS_QUERY,
} from "./queries";
import type {
  SanityEvent,
  SanityGalleryItem,
  SanityImpactMetric,
  SanityLeadershipMember,
  SanityProgram,
  SanityStory,
} from "./types";

// Time-based revalidation happens at the route segment level (each page/
// component sets `export const revalidate = 60`), not per-fetch — passing
// Next's `next: { revalidate }` fetch option directly into the Sanity client
// causes concurrent calls (Promise.all, sibling Server Components) to hang
// under Next 16 + Turbopack dev, so this stays a plain client.fetch().
function fetch<T>(query: string, params: Record<string, unknown> = {}) {
  return client.fetch<T>(query, params);
}

export function getPrograms() {
  return fetch<SanityProgram[]>(PROGRAMS_QUERY);
}

export function getFeaturedPrograms() {
  return fetch<SanityProgram[]>(FEATURED_PROGRAMS_QUERY);
}

export function getProgramSlugs() {
  return fetch<string[]>(PROGRAM_SLUGS_QUERY);
}

export function getProgramBySlug(slug: string) {
  return fetch<SanityProgram | null>(PROGRAM_BY_SLUG_QUERY, { slug });
}

export function getEvents() {
  return fetch<SanityEvent[]>(EVENTS_QUERY);
}

export function getUpcomingEvents() {
  return fetch<SanityEvent[]>(UPCOMING_EVENTS_QUERY);
}

export function getEventSlugs() {
  return fetch<string[]>(EVENT_SLUGS_QUERY);
}

export function getEventBySlug(slug: string) {
  return fetch<SanityEvent | null>(EVENT_BY_SLUG_QUERY, { slug });
}

export function getStories() {
  return fetch<SanityStory[]>(STORIES_QUERY);
}

export function getFeaturedStories() {
  return fetch<SanityStory[]>(FEATURED_STORIES_QUERY);
}

export function getStorySlugs() {
  return fetch<string[]>(STORY_SLUGS_QUERY);
}

export function getStoryBySlug(slug: string) {
  return fetch<SanityStory | null>(STORY_BY_SLUG_QUERY, { slug });
}

export function getGalleryItems() {
  return fetch<SanityGalleryItem[]>(GALLERY_QUERY);
}

export function getImpactMetrics() {
  return fetch<SanityImpactMetric[]>(IMPACT_METRICS_QUERY);
}

export function getLeadership() {
  return fetch<SanityLeadershipMember[]>(LEADERSHIP_QUERY);
}
