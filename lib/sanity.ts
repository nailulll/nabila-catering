// Sanity client utilities and helper functions
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { Recipe, Post } from './types'

export { client, urlFor }

// Helper function to get optimized image URL
export function getImageUrl(source: SanityImageSource) {
  return urlFor(source).url()
}

// Helper function to get image with specific dimensions
export function getOptimizedImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number
) {
  let builder = urlFor(source).auto('format').quality(90)
  
  if (width) {
    builder = builder.width(width)
  }
  
  if (height) {
    builder = builder.height(height)
  }
  
  return builder.url()
}

// Helper function to generate blur placeholder
export async function getImageBlurData(source: SanityImageSource) {
  const url = urlFor(source).width(20).quality(20).blur(50).url()
  return url
}

// Fetch single recipe
export async function getRecipe(slug: string): Promise<Recipe | null> {
  const query = `*[_type == "recipe" && slug.current == $slug][0]{
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },
      hotspot,
      alt
    },
    description,
    prepTime,
    cookTime,
    servings,
    ingredients,
    instructions,
    nutritionalInfo,
    categories[]->{
      _id,
      title,
      slug
    },
    publishedAt
  }`
  
  return await client.fetch(query, { slug })
}

// Fetch all recipes
export async function getRecipes(): Promise<Recipe[]> {
  const query = `*[_type == "recipe"] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },
      hotspot,
      alt
    },
    description,
    prepTime,
    cookTime,
    servings,
    categories[]->{
      _id,
      title,
      slug
    },
    publishedAt
  }`
  
  return await client.fetch(query)
}

// Fetch single post
export async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    author,
    mainImage{
      asset->{
        _id,
        url
      },
      hotspot,
      alt
    },
    excerpt,
    body[]{
      ...,
      _type == "image" => {
        asset->{
          _id,
          url
        },
        hotspot,
        alt,
        caption
      }
    },
    categories[]->{
      _id,
      title,
      slug
    },
    publishedAt
  }`
  
  return await client.fetch(query, { slug })
}

// Fetch all posts
export async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    author,
    mainImage{
      asset->{
        _id,
        url
      },
      hotspot,
      alt
    },
    excerpt,
    categories[]->{
      _id,
      title,
      slug
    },
    publishedAt
  }`
  
  return await client.fetch(query)
}
