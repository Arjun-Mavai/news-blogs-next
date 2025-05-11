"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Database } from "../../database.types"
 
interface CategoryFilterProps {
  categories: Database["public"]["Tables"]["categories"]["Row"][]
}

export function CategoryFilter({ categories }: any) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category")
  console.log("catego" , categories)
  const handleCategoryChange = (categorySlug: string | null) => {
    const params = new URLSearchParams(searchParams)
    if (categorySlug) {
      params.set("category", categorySlug)
    } else {
      params.delete("category")
    }
    router.push(`/?${params.toString()}`)
  }

  const currentCategoryName = currentCategory 
    ? categories.find((c:any) => c.cat_slug === currentCategory)?.name 
    : "All Categories"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1">
          {currentCategory ? currentCategory : "All Categories"}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem
          onClick={() => handleCategoryChange(null)}
          className={!currentCategory ? "font-medium" : ""}
        >
          All Categories
        </DropdownMenuItem>
        {categories.map((category :any) => (
          <DropdownMenuItem
          
            key={category.id}
            onClick={() => handleCategoryChange(category.cat_slug)}
            className={currentCategory === category.cat_slug ? "font-medium" : ""}
          >
            {category.cat_slug}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}