import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { programs } from "@/lib/data/programs";
import { events } from "@/lib/data/events";
import { stories } from "@/lib/data/stories";

export default function sitemap(): MetadataRoute.Sitemap {
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

  const programRoutes = programs.map((p) => ({
    url: `${siteConfig.url}/programs/${p.slug}`,
    lastModified: new Date(),
  }));

  const eventRoutes = events.map((e) => ({
    url: `${siteConfig.url}/events/${e.slug}`,
    lastModified: new Date(),
  }));

  const storyRoutes = stories.map((s) => ({
    url: `${siteConfig.url}/stories/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...programRoutes, ...eventRoutes, ...storyRoutes];
}
