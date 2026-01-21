import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPosts, getOptimizedImageUrl } from "@/lib/sanity";
import { Post } from "@/lib/types";
import { Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Nabila Catering",
  description:
    "Baca artikel terbaru, tips, dan wawasan kami seputar makanan, memasak, dan katering.",
  openGraph: {
    title: "Blog | Nabila Catering",
    description:
      "Baca artikel terbaru, tips, dan wawasan kami seputar makanan, memasak, dan katering.",
    type: "website",
  },
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  let posts: Post[] = [];

  try {
    posts = await getPosts();
  } catch (error) {
    console.warn("Failed to fetch posts:", error);
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Kami</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan tips, wawasan, dan cerita seputar dunia makanan dan
            katering.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Belum ada artikel. Cek kembali nanti!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={getOptimizedImageUrl(post.mainImage, 800, 600)}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#F95454] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {post.author && (
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    )}
                    {post.publishedAt && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "id-ID",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                  {post.categories && post.categories.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <span
                          key={category._id}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
