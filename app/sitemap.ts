import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nabilacatering.web.id";

  // Fetch all recipe slugs
  const recipes = await client.fetch<{ slug: { current: string }; _updatedAt: string }[]>(
    `*[_type == "recipe"]{ slug, _updatedAt }`
  );

  // Fetch all post slugs
  const posts = await client.fetch<{ slug: { current: string }; _updatedAt: string }[]>(
    `*[_type == "post"]{ slug, _updatedAt }`
  );

  // Create sitemap entries
  const recipeUrls = recipes.map((recipe) => ({
    url: `${baseUrl}/recipe/${recipe.slug.current}`,
    lastModified: new Date(recipe._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/recipe`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...recipeUrls,
    ...postUrls,
  ];
}
