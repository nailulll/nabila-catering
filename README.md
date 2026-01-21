# Nabila Catering Website

A high-performance CMS website for a Catering Company built with Next.js 14, Sanity.io v4, TypeScript, and Tailwind CSS. Features recipe management, blog articles, and comprehensive SEO optimization.

## ✨ Features

- 🍳 **Recipe Management** - Full-featured recipe system with ingredients, instructions, and nutritional info
- 📝 **Blog Articles** - Rich text content management for tips and insights
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 🚀 **Performance Optimized** - ISR, image optimization, and lazy loading
- 🔍 **SEO Ready** - JSON-LD structured data, dynamic sitemaps, and metadata
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Fast Loading** - Optimized with Next.js 14 App Router
- 🖼️ **Image CDN** - Sanity.io CDN for fast image delivery

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **CMS:** Sanity.io v4
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics & Google Analytics

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Sanity.io account (free tier available)

## 🚀 Getting Started

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
   
   Copy `.env.example` to `.env.local` and fill in your Sanity credentials:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2026-01-19
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   - Main site: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📚 Documentation

For detailed setup and usage instructions, see [CMS_SETUP.md](./CMS_SETUP.md).

## 🏗️ Project Structure

```
nabila-catering/
├── app/                    # Next.js App Router
│   ├── (root)/            # Main site pages
│   │   ├── blog/          # Blog pages
│   │   └── recipe/        # Recipe pages
│   └── (sanity)/          # Sanity Studio
├── components/            # React components
├── lib/                   # Utilities & helpers
│   ├── sanity.ts         # Sanity client
│   ├── types.ts          # TypeScript types
│   └── queries.ts        # GROQ queries
├── sanity/               # Sanity configuration
│   ├── schemaTypes/      # Content schemas
│   └── lib/              # Sanity utilities
└── public/               # Static assets
```

## 📄 Available Routes

- `/` - Homepage
- `/recipe` - All recipes
- `/recipe/[slug]` - Individual recipe
- `/blog` - All blog posts
- `/blog/[slug]` - Individual blog post
- `/studio` - Sanity CMS (admin only)
- `/sitemap.xml` - Dynamic sitemap
- `/robots.txt` - Robots configuration

## 🎯 SEO & Performance

### SEO Features
- ✅ Dynamic metadata with `generateMetadata`
- ✅ JSON-LD Schema.org Recipe structured data
- ✅ JSON-LD Schema.org Article structured data
- ✅ OpenGraph images for social sharing
- ✅ Dynamic sitemap generation
- ✅ Optimized robots.txt

### Performance Features
- ✅ ISR (Incremental Static Regeneration)
- ✅ Image optimization via Sanity CDN
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Static page generation

### Expected Lighthouse Scores
- **Performance:** 90-100
- **SEO:** 100
- **Accessibility:** 90-100
- **Best Practices:** 90-100

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Management

Access the Sanity Studio at `/studio` to:
- Create and edit recipes
- Write blog posts
- Manage categories
- Upload and organize images

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

Vercel will automatically:
- Build your Next.js application
- Deploy to a global CDN
- Set up automatic deployments for new commits

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is part of Nabila Catering's digital infrastructure.
