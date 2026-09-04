import type { MetadataRoute } from "next";

const siteUrl = "https://scalewithlakshya.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
    },
  ];
}