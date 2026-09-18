import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://kodbuster.github.io/KodBuster_ru/",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }];
}
