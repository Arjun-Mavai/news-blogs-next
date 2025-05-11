"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Clock, Eye } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { supabase } from '@/lib/supabase-client'
 
interface ArticleCardProps {
  article: {
    id: number
    title: string
    slug: string
    description: string
    content: string
    read_time: number
    views: number
    likes: number
    images: string[]
    created_at: string
    categories: {
      id: number
      name: string
      slug: string
    }
  }
}

export function ArticleCard({ article }: any) {
  const [likes, setLikes] = React.useState(article.likes)
  const [isLiked, setIsLiked] = React.useState(false)
  
  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
    
    // Update like in Supabase
    // const { error } = await supabase.rpc('toggle_article_like', { article_id: article.id })
    
    // if (error) {
    //   console.error('Error updating like:', error)
    //   // Revert UI state if failed
    //   setIsLiked(isLiked)
    //   setLikes(likes)
    // }
  }
  
  const imageUrl = article.images && article.images.length > 0 
    ? article.images[0] 
    : 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  
  return (
    <Link href={`/article/${article.slug}`} passHref>
      <Card className="h-full overflow-hidden cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px]">
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority
          />
          {article.cat_slug && (
            <Badge className="absolute top-4 right-4 z-10">
              {article.cat_slug}
            </Badge>
          )}
        </div>
        <CardHeader className="p-4 pb-2">
          <CardTitle className="line-clamp-2">{article.title}</CardTitle>
          <CardDescription className="line-clamp-2 mt-2">
            {article.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{article.read_time} min read</span>
            </div>
            <div className="flex items-center">
              <Eye className="mr-1 h-4 w-4" />
              <span>{article.views} views</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <span className="text-sm text-muted-foreground">
            {new Date(article.created_at).toLocaleDateString('en-US', {
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <button 
            onClick={handleLike}
            className="flex items-center space-x-1 text-sm"
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <Heart className={cn(
              "h-4 w-4 transition-colors", 
              isLiked ? "fill-destructive text-destructive" : "text-muted-foreground"
            )} />
            <span>{likes}</span>
          </button>
        </CardFooter>
      </Card>
    </Link>
  )
}