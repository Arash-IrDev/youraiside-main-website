import type { MetadataRoute } from "next";

const SITE = "https://www.youraiside.com";

// One page today. Add an entry here for every new public route.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
