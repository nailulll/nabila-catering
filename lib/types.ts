// TypeScript interfaces for Sanity schemas

export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Ingredient {
  name: string
  quantity: string
  unit?: string
}

export interface Instruction {
  step: number
  instruction: string
}

export interface NutritionalInfo {
  calories?: number
  protein?: number
  carbohydrates?: number
  fat?: number
  fiber?: number
  sugar?: number
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  alt?: string
}

export interface Recipe {
  _id: string
  _type: 'recipe'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
  }
  mainImage: SanityImage
  description: string
  prepTime: number
  cookTime: number
  servings: number
  ingredients: Ingredient[]
  instructions: Instruction[]
  nutritionalInfo?: NutritionalInfo
  categories?: Category[]
  publishedAt?: string
}

export interface PortableTextBlock {
  _type: 'block'
  _key: string
  children: Array<{
    _type: 'span'
    _key: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _type: string
    _key: string
    [key: string]: any
  }>
  style?: string
}

export interface Post {
  _id: string
  _type: 'post'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
  }
  author?: string
  mainImage: SanityImage
  excerpt: string
  body?: Array<PortableTextBlock | SanityImage>
  categories?: Category[]
  publishedAt?: string
}
