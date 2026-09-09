// Bang Wira - github.com/sepatusendal
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  getEventSitemapEntries,
  getProgramSitemapEntries,
  getStorySitemapEntries,
} from "@/sanity/lib/fetchers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Sequential, not Promise.all: concurrent client.fetch() calls hang under
  // Next 16 + Turbopack dev (see note in sanity/lib/fetchers.ts).
  const programs = await getProgramSitemapEntries();
  const events = await getEventSitemapEntries();
  const stories = await getStorySitemapEntries();

  const latestUpdate = [...programs, ...events, ...stories].reduce(
    (latest, item) => {
      const updatedAt = new Date(item.updatedAt);
      return updatedAt > latest ? updatedAt : latest;
    },
    new Date(0),
  );

  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/events",
    "/stories",
    "/gallery",
    "/join",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: latestUpdate > new Date(0) ? latestUpdate : new Date(),
  }));

  const programRoutes = programs.map(({ slug, updatedAt }) => ({
    url: `${siteConfig.url}/programs/${slug}`,
    lastModified: new Date(updatedAt),
  }));

  const eventRoutes = events.map(({ slug, updatedAt }) => ({
    url: `${siteConfig.url}/events/${slug}`,
    lastModified: new Date(updatedAt),
  }));

  const storyRoutes = stories.map(({ slug, updatedAt }) => ({
    url: `${siteConfig.url}/stories/${slug}`,
    lastModified: new Date(updatedAt),
  }));

  return [...staticRoutes, ...programRoutes, ...eventRoutes, ...storyRoutes];
}
