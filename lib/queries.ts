// GROQ queries for fetching Sanity content

// Recipe Queries
export const RECIPE_QUERY = `*[_type == "recipe" && slug.current == $slug][0]{
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

export const RECIPES_QUERY = `*[_type == "recipe"] | order(publishedAt desc) {
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

export const RECIPES_PAGINATED_QUERY = `*[_type == "recipe"] | order(publishedAt desc) [$start...$end] {
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

export const RECIPE_SLUGS_QUERY = `*[_type == "recipe"]{ "slug": slug.current }`

// Post Queries
export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
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

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
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

export const POSTS_PAGINATED_QUERY = `*[_type == "post"] | order(publishedAt desc) [$start...$end] {
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

export const POST_SLUGS_QUERY = `*[_type == "post"]{ "slug": slug.current }`

// Featured content queries for homepage
export const FEATURED_RECIPES_QUERY = `*[_type == "recipe"] | order(publishedAt desc) [0...6] {
  _id,
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
  publishedAt
}`

export const LATEST_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) [0...3] {
  _id,
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
  publishedAt
}`
