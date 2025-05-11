"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Database } from "../../database.types"
 
interface MainNavProps {
  categories: Database["public"]["Tables"]["categories"]["Row"][]
}

export function MainNav({ categories }: any) {
  const pathname = usePathname()
  console.log("checking categories" , categories)

  return (
    <div className="mr-4 flex items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Home className="h-5 w-5" />
        <span className="hidden font-bold sm:inline-block">
          BlogPlatform
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Latest
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={cn(
                "flex items-center gap-1 -ml-4 px-4",
                pathname?.startsWith("/category") ? "text-foreground" : "text-foreground/60"
              )}
            >
              Categories
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {categories.map((category:any) => (
              <DropdownMenuItem key={category.id} asChild>
                <Link
                  href={`/article/${category.slug}`}
                  className={cn(
                    "w-full",
                    pathname?.startsWith(`/article/${category.slug}`)
                      ? "font-medium"
                      : ""
                  )}
                >
                  {category.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  )
}