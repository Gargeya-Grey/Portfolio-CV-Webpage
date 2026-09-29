import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // This CV has one indexable page; sections are fragment links, not pages.
  return [{ url: SITE.origin }];
}
