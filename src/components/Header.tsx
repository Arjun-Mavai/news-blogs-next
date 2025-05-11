import { MainNav } from "@/components/MainNav"
// import { ModeToggle } from "@/components/ModeToggle"
import { getCategories } from "@/lib/supabase-client"
 
export async function Header() {
  const categories = await getCategories()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MainNav categories={categories} />
        <div className="ml-auto flex items-center space-x-4">
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  )
}