import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPost, getOptimizedImageUrl, getImageUrl, client } from '@/lib/sanity'
import { Calendar, User } from 'lucide-react'
import PortableText from '@/components/portable-text'

type Props = {
  params: Promise<{ slug: string }>
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"]{ slug }`
  )

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const imageUrl = getImageUrl(post.mainImage)

  return {
    title: `${post.title} | Nabila Catering Blog`,
    description: post.excerpt,
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt || post._createdAt,
      authors: post.author ? [post.author] : undefined,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage.alt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  // Generate JSON-LD structured data for Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: getImageUrl(post.mainImage),
    datePublished: post.publishedAt || post._createdAt,
    dateModified: post._updatedAt,
    author: {
      '@type': post.author ? 'Person' : 'Organization',
      name: post.author || 'Nabila Catering',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nabila Catering',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nabilacatering.web.id/favicon.ico',
      },
    },
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#F95454]" />
                  <span>{post.author}</span>
                </div>
              )}
              {post.publishedAt && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#F95454]" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              )}
            </div>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="px-3 py-1 bg-[#F95454] text-white text-sm rounded-full"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Main Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8">
            <Image
              src={getOptimizedImageUrl(post.mainImage, 1200, 800)}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Article Body */}
          {post.body && (
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.body} />
            </div>
          )}
        </div>
      </article>
    </>
  )
}
