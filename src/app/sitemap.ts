import type { MetadataRoute } from "next";
import { articles } from "@/lib/data";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://expressfoot.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleUrls = articles.map((a) => ({
    url: `${BASE}/article/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    ...articleUrls,
  ];
}
