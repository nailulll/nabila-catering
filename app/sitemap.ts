import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nabilacatering.web.id";

  let recipeUrls: MetadataRoute.Sitemap = [];
  let postUrls: MetadataRoute.Sitemap = [];

  try {
    // Fetch all recipe slugs
    const recipes = await client.fetch<{ slug: { current: string }; _updatedAt: string }[]>(
      `*[_type == "recipe"]{ slug, _updatedAt }`
    );

    recipeUrls = recipes.map((recipe) => ({
      url: `${baseUrl}/recipe/${recipe.slug.current}`,
      lastModified: new Date(recipe._updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.warn('Failed to fetch recipes for sitemap:', error);
  }

  try {
    // Fetch all post slugs
    const posts = await client.fetch<{ slug: { current: string }; _updatedAt: string }[]>(
      `*[_type == "post"]{ slug, _updatedAt }`
    );

    postUrls = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.warn('Failed to fetch posts for sitemap:', error);
  }

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
