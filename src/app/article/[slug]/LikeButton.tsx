"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { supabase } from "@/lib/supabase-client"
 
interface LikeButtonProps {
  article: {
    id: number
    likes: number
  }
}

export default function LikeButton({ article }: LikeButtonProps) {
  const [likes, setLikes] = useState(article.likes)
  const [isLiked, setIsLiked] = useState(false)
  
  const handleLike = async () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
    
    // // Update like in Supabase
    // const { error } = await supabase.rpc('toggle_article_like', { article_id: article.id })
    
    // if (error) {
    //   console.error('Error updating like:', error)
    //   // Revert UI state if failed
    //   setIsLiked(isLiked)
    //   setLikes(likes)
    // }
  }
  
  return (
    <button 
      onClick={handleLike}
      className="flex items-center gap-1"
      aria-label={isLiked ? "Unlike" : "Like"}
    >
      <Heart className={cn(
        "h-4 w-4 transition-colors", 
        isLiked ? "fill-destructive text-destructive" : ""
      )} />
      <span>{likes}</span>
    </button>
  )
}