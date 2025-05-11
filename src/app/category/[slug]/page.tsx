import { notFound } from "next/navigation"
 import { ArticleCard } from "@/components/ArticleCard"
import Ads from "@/components/Ads"
import { supabase } from "@/lib/supabase-client";

export const revalidate = 3600 // Revalidate at most every hour

async function getCategoryBySlug(slug: string) {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Error fetching category:', error);
    return null;
  }
  
  return data;
}

async function getArticlesByCategory(categoryId: number) {
  const { data, error } = await supabase
    .from('articles')
    .select(`
      *,
      categories:category_id(id, name, slug)
    `)
    .eq('category_id', categoryId)
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching articles by category:', error);
    return [];
  }
  
  return data || [];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = await getCategoryBySlug(params.slug)
  
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }
  
  return {
    title: `${category.name} - Blog Platform`,
    description: `Browse all articles in the ${category.name} category`,
  }
}


export default async function CategoryPage({ params }: { params: { slug: string } }) {
     
  const category = await getCategoryBySlug(params.slug)
  
  if (!category) {
    notFound()
  }
  
  const articles = await getArticlesByCategory(category.id as any)
  
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{category.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Browse all articles in the {category.name} category
        </p>
      </div>
      
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <p className="text-lg font-medium">No articles found</p>
          <p className="mt-1 text-sm text-muted-foreground">
            There are no articles in this category yet.
          </p>
        </div>
      )}
      
      <div className="mt-12">
        <Ads />
      </div>
    </div>
  )
}