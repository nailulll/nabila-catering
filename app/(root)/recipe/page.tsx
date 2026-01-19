import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getRecipes, getOptimizedImageUrl } from '@/lib/sanity'
import { Recipe } from '@/lib/types'
import { Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recipes | Nabila Catering',
  description: 'Discover delicious recipes from Nabila Catering. Browse our collection of carefully crafted dishes.',
  openGraph: {
    title: 'Recipes | Nabila Catering',
    description: 'Discover delicious recipes from Nabila Catering. Browse our collection of carefully crafted dishes.',
    type: 'website',
  },
}

export const revalidate = 3600 // Revalidate every hour
export const dynamic = 'force-dynamic' // Use dynamic rendering as fallback

export default async function RecipesPage() {
  let recipes: Recipe[] = []
  
  try {
    recipes = await getRecipes()
  } catch (error) {
    console.warn('Failed to fetch recipes:', error)
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Recipes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of delicious recipes, from traditional favorites to innovative creations.
          </p>
        </div>

        {recipes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No recipes available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Link
                key={recipe._id}
                href={`/recipe/${recipe.slug.current}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={getOptimizedImageUrl(recipe.mainImage, 800, 600)}
                    alt={recipe.mainImage.alt || recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#F95454] transition-colors">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {recipe.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.prepTime + recipe.cookTime} mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>
                  {recipe.categories && recipe.categories.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {recipe.categories.map((category) => (
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
  )
}
