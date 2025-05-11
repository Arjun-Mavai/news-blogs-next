import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container flex h-[calc(100vh-200px)] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="mb-4 text-xl">Page Not Found</h2>
      <p className="mb-8 text-muted-foreground">
        The page you were looking for doesn't exist.
      </p>
      <Link 
        href="/"
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        Go Home
      </Link>
    </div>
  )
}