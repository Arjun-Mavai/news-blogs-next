import Image from "next/image"
import { notFound } from "next/navigation"
import { Clock, Eye, Heart } from "lucide-react"
 import { Badge } from "@/components/ui/badge"
import Ads from "@/components/Ads"
 import { getAllArticleSlugs, getArticleBySlug } from "@/lib/supabase-client"
import LikeButton from "./LikeButton"

export const revalidate = 3600 // Revalidate at most every hour

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  
  return slugs.map((slug) => ({
    slug: slug.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }
  
  return {
    title: article.title,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
   
  if (!article) {
    notFound()
  }
  
  // Increment view count (without awaiting to avoid delaying page load)
//   incrementArticleViews(article.id)
  
  const coverImage = article.images && article.images.length > 0 
    ? article.images[0] 
    : 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  
  return (
    <article className="container py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4">
          {article.categories && (
            <Badge className="mb-4">
              {article.categories.name}
            </Badge>
          )}
          <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            {article.title}
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            {article.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.read_time} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{article.views + 1} views</span>
            </div>
            <div className="flex items-center gap-1">
              <LikeButton article={article} />
            </div>
            <time dateTime={new Date(article.created_at as any).toISOString()}>
              {new Date(article.created_at as any).toLocaleDateString('en-US', {
                month: 'long', 
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
        </div>
        
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image 
            src={coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="my-6">
          <Ads />
        </div>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {/* Render article content */}
          {article.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        {article.images && article.images.length > 1 && (
          <div className="my-10">
            <h2 className="mb-4 text-2xl font-bold">Gallery</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {article.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image 
                    src={image}
                    alt={`${article.title} - image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="my-6">
          <Ads />
        </div>
      </div>
    </article>
  )
}