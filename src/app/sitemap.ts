// Bang Wira - github.com/sepatusendal
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getEventSlugs, getProgramSlugs, getStorySlugs } from "@/sanity/lib/fetchers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Sequential, not Promise.all: concurrent client.fetch() calls hang under
  // Next 16 + Turbopack dev (see note in sanity/lib/fetchers.ts).
  const programSlugs = await getProgramSlugs();
  const eventSlugs = await getEventSlugs();
  const storySlugs = await getStorySlugs();

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
    lastModified: new Date(),
  }));

  const programRoutes = programSlugs.map((slug) => ({
    url: `${siteConfig.url}/programs/${slug}`,
    lastModified: new Date(),
  }));

  const eventRoutes = eventSlugs.map((slug) => ({
    url: `${siteConfig.url}/events/${slug}`,
    lastModified: new Date(),
  }));

  const storyRoutes = storySlugs.map((slug) => ({
    url: `${siteConfig.url}/stories/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...programRoutes, ...eventRoutes, ...storyRoutes];
}
