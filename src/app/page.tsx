import { Suspense } from "react"
 import { ArticleCard } from "@/components/ArticleCard"
import Ads from "@/components/Ads"
import { getArticles, getCategories } from "@/lib/supabase-client"
import { CategoryFilter } from "@/components/CategoryFilter"

export const revalidate = 3600 // Revalidate at most every hour

export default async function Home({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const categorySlug = (await searchParams)?.category as string | undefined

  // const articles = await getArticles()
  const [articles, categories] = await Promise.all([
    getArticles(categorySlug),
    getCategories()
  ])

  return (
    <div className="container py-10">
     <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Latest Articles</h1>
        <CategoryFilter categories={categories} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<p>Loading articles...</p>}>
          {articles?.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Suspense>
      </div>
      
      <div className="mt-12">
        <Ads />
      </div>
    </div>
  )
}