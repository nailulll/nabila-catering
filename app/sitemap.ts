import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nabilacatering.web.id",
      lastModified: new Date(),
    },
  ];
}
