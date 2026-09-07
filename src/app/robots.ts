// Bang Wira - github.com/sepatusendal
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/atmint-gk",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
