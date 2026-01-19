# Nabila Catering CMS - Setup & Usage Guide

This document provides a comprehensive guide to setting up and using the Nabila Catering CMS built with Next.js 14, Sanity.io v4, TypeScript, and Tailwind CSS.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Sanity Configuration](#sanity-configuration)
4. [Content Management](#content-management)
5. [Deployment](#deployment)
6. [Performance & SEO](#performance--seo)
7. [Architecture Overview](#architecture-overview)

## Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- A Sanity.io account (free tier available at [sanity.io](https://www.sanity.io))
- Vercel account (optional, for deployment)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nabila-catering
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables:**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your Sanity project credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2026-01-19
   ```

## Sanity Configuration

### Creating a Sanity Project

1. **Sign up for Sanity:**
   - Go to [sanity.io](https://www.sanity.io) and create an account
   - Create a new project

2. **Get your Project ID:**
   - Navigate to your project settings
   - Copy the Project ID and Dataset name (usually "production")
   - Add these to your `.env.local` file

3. **Access Sanity Studio:**
   - Start your development server: `npm run dev`
   - Navigate to `http://localhost:3000/studio`
   - Sign in with your Sanity credentials

### Content Schemas

The CMS includes three main content types:

#### 1. **Category**
Used to organize recipes and posts into categories.

**Fields:**
- Title (required)
- Slug (required, auto-generated)
- Description (optional)

#### 2. **Recipe**
The main content type for food recipes with rich structured data.

**Fields:**
- Title (required)
- Slug (required, auto-generated from title)
- Main Image (required, with hotspot support)
- Description/Intro (required)
- Preparation Time in minutes (required)
- Cooking Time in minutes (required)
- Servings (required)
- Ingredients (required, array of objects):
  - Ingredient Name
  - Quantity
  - Unit
- Instructions (required, array of step objects):
  - Step Number
  - Instruction Text
- Nutritional Information (optional):
  - Calories
  - Protein (g)
  - Carbohydrates (g)
  - Fat (g)
  - Fiber (g)
  - Sugar (g)
- Categories (optional, references to Category)
- Published At (auto-set to current date/time)

#### 3. **Post**
For blog articles, tips, and general content.

**Fields:**
- Title (required)
- Slug (required, auto-generated from title)
- Author (optional)
- Main Image (required, with hotspot support)
- Excerpt (required)
- Body (optional, rich text with images)
- Categories (optional, references to Category)
- Published At (auto-set to current date/time)

## Content Management

### Creating a Recipe

1. Go to `http://localhost:3000/studio`
2. Click on "Recipe" in the sidebar
3. Click "Create new Recipe"
4. Fill in all required fields:
   - Add a compelling title
   - Upload a high-quality main image
   - Write a brief description
   - Set preparation and cooking times
   - Add ingredients one by one
   - Add step-by-step instructions
   - Optionally add nutritional information
   - Assign categories
5. Click "Publish" to make it live

### Creating a Blog Post

1. Go to `http://localhost:3000/studio`
2. Click on "Post" in the sidebar
3. Click "Create new Post"
4. Fill in the required fields:
   - Add a title
   - Upload a featured image
   - Write an engaging excerpt
   - Use the rich text editor for the body
   - Add images within the content
   - Assign categories
5. Click "Publish"

### Creating Categories

1. Go to `http://localhost:3000/studio`
2. Click on "Category" in the sidebar
3. Click "Create new Category"
4. Add a title (e.g., "Indonesian Cuisine", "Desserts", "Quick Meals")
5. Add a description (optional)
6. Click "Publish"

## Deployment

### Deploying to Vercel

1. **Push your code to GitHub**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Configure environment variables:
     - Add `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - Add `NEXT_PUBLIC_SANITY_DATASET`
     - Add `NEXT_PUBLIC_SANITY_API_VERSION`

3. **Deploy:**
   - Vercel will automatically build and deploy your site
   - Your site will be available at `https://your-project.vercel.app`

4. **Set up webhooks (optional):**
   - In Sanity Studio, go to "API" → "Webhooks"
   - Add a webhook pointing to your Vercel deployment
   - This will trigger rebuilds when content is updated

## Performance & SEO

### Performance Features

✅ **Image Optimization:**
- All images are served through Sanity's CDN
- Automatic format conversion (WebP)
- Responsive images with `next/image`
- Lazy loading for below-the-fold images

✅ **Caching Strategy:**
- ISR (Incremental Static Regeneration) with 1-hour revalidation
- Static page generation for recipes and posts
- Dynamic sitemap generation

✅ **Code Splitting:**
- Automatic code splitting by Next.js
- Optimized bundle sizes

### SEO Features

✅ **Metadata:**
- Dynamic page titles and descriptions
- OpenGraph images for social sharing
- Twitter Card support

✅ **Structured Data:**
- JSON-LD Schema.org Recipe markup for recipe pages
- JSON-LD Schema.org Article markup for blog posts
- Enables rich snippets in Google search results

✅ **Sitemap:**
- Dynamic sitemap generation at `/sitemap.xml`
- Automatically includes all published recipes and posts
- Proper priority and change frequency settings

✅ **Robots.txt:**
- Properly configured robots.txt
- Allows search engine crawling

### Expected Lighthouse Scores

When deployed with real Sanity data:
- **Performance:** 90-100
- **SEO:** 100
- **Accessibility:** 90-100
- **Best Practices:** 90-100

## Architecture Overview

### Tech Stack

- **Framework:** Next.js 14 (App Router)
- **CMS:** Sanity.io v4
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

### Project Structure

```
nabila-catering/
├── app/
│   ├── (root)/              # Main site routes
│   │   ├── blog/            # Blog listing and detail pages
│   │   ├── recipe/          # Recipe listing and detail pages
│   │   └── page.tsx         # Homepage
│   ├── (sanity)/            # Sanity Studio route
│   │   └── studio/
│   ├── layout.tsx           # Root layout
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt configuration
├── components/
│   ├── portable-text.tsx    # Rich text renderer
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── sanity.ts            # Sanity client & helpers
│   ├── types.ts             # TypeScript interfaces
│   ├── queries.ts           # GROQ queries
│   └── utils.ts             # Utility functions
├── sanity/
│   ├── env.ts               # Sanity environment config
│   ├── lib/
│   │   ├── client.ts        # Sanity client instance
│   │   └── image.ts         # Image URL builder
│   └── schemaTypes/
│       ├── category.ts      # Category schema
│       ├── recipe.ts        # Recipe schema
│       ├── post.ts          # Post schema
│       └── index.ts         # Schema exports
├── .env.example             # Environment variables template
├── .env.local               # Your local environment (not in git)
├── next.config.mjs          # Next.js configuration
├── sanity.config.ts         # Sanity Studio configuration
└── tailwind.config.ts       # Tailwind CSS configuration
```

### Data Flow

1. **Content Creation:**
   - Content editors create/edit content in Sanity Studio
   - Content is stored in Sanity's cloud database

2. **Data Fetching:**
   - Next.js pages fetch data using GROQ queries
   - Data is fetched at build time (SSG) or request time (ISR)

3. **Rendering:**
   - Pages are pre-rendered with SEO metadata
   - Images are optimized via Sanity CDN
   - JSON-LD structured data is embedded

4. **Deployment:**
   - Static pages are generated and deployed to Vercel
   - Pages revalidate every hour (ISR)
   - New content becomes visible within 1 hour

### Key Routes

- `/` - Homepage (existing)
- `/recipe` - All recipes listing
- `/recipe/[slug]` - Individual recipe with Schema.org markup
- `/blog` - All blog posts listing
- `/blog/[slug]` - Individual blog post
- `/studio` - Sanity Studio CMS interface
- `/sitemap.xml` - Dynamic sitemap
- `/robots.txt` - Robots configuration

## Troubleshooting

### Build Errors

**Issue:** Missing environment variables
```
Error: Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID
```

**Solution:** Ensure `.env.local` exists with correct Sanity credentials.

### Image Loading Issues

**Issue:** Images not loading or showing broken image icon

**Solution:** 
1. Verify images are uploaded in Sanity Studio
2. Check that `next.config.mjs` has `cdn.sanity.io` in `remotePatterns`
3. Ensure image assets have been published

### Empty Content

**Issue:** No recipes or posts showing on pages

**Solution:**
1. Create content in Sanity Studio
2. Click "Publish" on each document
3. Wait for ISR revalidation (up to 1 hour) or rebuild the site

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Schema.org Recipe](https://schema.org/Recipe)
- [Vercel Documentation](https://vercel.com/docs)

## License

This project is part of Nabila Catering's digital infrastructure.
