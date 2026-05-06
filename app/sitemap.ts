import type { MetadataRoute } from "next";
import { cars } from "@/data/cars";
import { SITE_URL, locales } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homeUrls: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  }));

  const carUrls: MetadataRoute.Sitemap = cars.flatMap((car) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/cars/${car.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }))
  );

  return [...homeUrls, ...carUrls];
}
