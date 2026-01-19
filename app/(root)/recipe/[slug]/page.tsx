import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getRecipe, getOptimizedImageUrl, getImageUrl, client } from '@/lib/sanity'
import { Clock, Users, ChefHat } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

// Generate static params for all recipes
export async function generateStaticParams() {
  try {
    const recipes = await client.fetch<{ slug: { current: string } }[]>(
      `*[_type == "recipe"]{ slug }`
    )
    return recipes.map((recipe) => ({
      slug: recipe.slug.current,
    }))
  } catch (error) {
    console.warn('Failed to fetch recipes for static generation:', error)
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  try {
    const recipe = await getRecipe(slug)

    if (!recipe) {
      return {
        title: 'Recipe Not Found',
      }
    }

    const imageUrl = getImageUrl(recipe.mainImage)

    return {
      title: `${recipe.title} | Nabila Catering`,
      description: recipe.description,
      openGraph: {
        title: recipe.title,
        description: recipe.description,
        type: 'article',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: recipe.mainImage.alt || recipe.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: recipe.title,
        description: recipe.description,
        images: [imageUrl],
      },
    }
  } catch (error) {
    console.warn('Failed to generate metadata:', error)
    return {
      title: 'Recipe | Nabila Catering',
    }
  }
}

export const revalidate = 3600 // Revalidate every hour
export const dynamic = 'force-dynamic' // Use dynamic rendering as fallback

export default async function RecipePage({ params }: Props) {
  const { slug } = await params
  const recipe = await getRecipe(slug)

  if (!recipe) {
    notFound()
  }

  // Generate JSON-LD structured data for Recipe
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: getImageUrl(recipe.mainImage),
    author: {
      '@type': 'Organization',
      name: 'Nabila Catering',
    },
    datePublished: recipe.publishedAt || recipe._createdAt,
    prepTime: `PT${recipe.prepTime}M`,
    cookTime: `PT${recipe.cookTime}M`,
    totalTime: `PT${recipe.prepTime + recipe.cookTime}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeIngredient: recipe.ingredients.map(
      (ing) => `${ing.quantity}${ing.unit ? ' ' + ing.unit : ''} ${ing.name}`
    ),
    recipeInstructions: recipe.instructions
      .sort((a, b) => a.step - b.step)
      .map((inst) => ({
        '@type': 'HowToStep',
        text: inst.instruction,
        position: inst.step,
      })),
    ...(recipe.nutritionalInfo && {
      nutrition: {
        '@type': 'NutritionInformation',
        ...(recipe.nutritionalInfo.calories && {
          calories: `${recipe.nutritionalInfo.calories} calories`,
        }),
        ...(recipe.nutritionalInfo.protein && {
          proteinContent: `${recipe.nutritionalInfo.protein}g`,
        }),
        ...(recipe.nutritionalInfo.carbohydrates && {
          carbohydrateContent: `${recipe.nutritionalInfo.carbohydrates}g`,
        }),
        ...(recipe.nutritionalInfo.fat && {
          fatContent: `${recipe.nutritionalInfo.fat}g`,
        }),
        ...(recipe.nutritionalInfo.fiber && {
          fiberContent: `${recipe.nutritionalInfo.fiber}g`,
        }),
        ...(recipe.nutritionalInfo.sugar && {
          sugarContent: `${recipe.nutritionalInfo.sugar}g`,
        }),
      },
    }),
    ...(recipe.categories &&
      recipe.categories.length > 0 && {
        recipeCategory: recipe.categories.map((cat) => cat.title),
      }),
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
              {recipe.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>
            
            {/* Recipe Meta */}
            <div className="flex flex-wrap gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-[#F95454]" />
                <span>Prep: {recipe.prepTime} min</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#F95454]" />
                <span>Cook: {recipe.cookTime} min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#F95454]" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>

            {/* Categories */}
            {recipe.categories && recipe.categories.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {recipe.categories.map((category) => (
                  <span
                    key={category._id}
                    className="px-3 py-1 bg-[#F95454] text-white text-sm rounded-full"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Main Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8">
            <Image
              src={getOptimizedImageUrl(recipe.mainImage, 1200, 800)}
              alt={recipe.mainImage.alt || recipe.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Nutritional Information */}
          {recipe.nutritionalInfo && Object.keys(recipe.nutritionalInfo).length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Nutritional Information
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {recipe.nutritionalInfo.calories && (
                  <div>
                    <span className="text-gray-600">Calories:</span>
                    <span className="ml-2 font-semibold">{recipe.nutritionalInfo.calories}</span>
                  </div>
                )}
                {recipe.nutritionalInfo.protein && (
                  <div>
                    <span className="text-gray-600">Protein:</span>
                    <span className="ml-2 font-semibold">{recipe.nutritionalInfo.protein}g</span>
                  </div>
                )}
                {recipe.nutritionalInfo.carbohydrates && (
                  <div>
                    <span className="text-gray-600">Carbs:</span>
                    <span className="ml-2 font-semibold">{recipe.nutritionalInfo.carbohydrates}g</span>
                  </div>
                )}
                {recipe.nutritionalInfo.fat && (
                  <div>
                    <span className="text-gray-600">Fat:</span>
                    <span className="ml-2 font-semibold">{recipe.nutritionalInfo.fat}g</span>
                  </div>
                )}
                {recipe.nutritionalInfo.fiber && (
                  <div>
                    <span className="text-gray-600">Fiber:</span>
                    <span className="ml-2 font-semibold">{recipe.nutritionalInfo.fiber}g</span>
                  </div>
                )}
                {recipe.nutritionalInfo.sugar && (
                  <div>
                    <span className="text-gray-600">Sugar:</span>
                    <span className="ml-2 font-semibold">{recipe.nutritionalInfo.sugar}g</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Ingredients */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ingredients
            </h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#F95454] rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">
                    {ingredient.quantity}
                    {ingredient.unit && ` ${ingredient.unit}`} {ingredient.name}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Instructions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Instructions
            </h2>
            <ol className="space-y-4">
              {recipe.instructions
                .sort((a, b) => a.step - b.step)
                .map((instruction) => (
                  <li key={instruction.step} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#F95454] text-white rounded-full flex items-center justify-center font-semibold">
                      {instruction.step}
                    </span>
                    <p className="text-gray-700 pt-1">{instruction.instruction}</p>
                  </li>
                ))}
            </ol>
          </section>
        </div>
      </article>
    </>
  )
}
