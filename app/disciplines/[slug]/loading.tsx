import { Skeleton } from "@/components/ui/skeleton"

export default function DisciplineLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Skeleton className="mb-4 h-12 w-96 bg-white/20" />
            <Skeleton className="mb-8 h-6 w-80 bg-white/20" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-32 bg-white/20" />
              <Skeleton className="h-12 w-32 bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-lg bg-white p-6 shadow">
                <div className="flex items-center">
                  <Skeleton className="mr-4 h-8 w-8" />
                  <div>
                    <Skeleton className="mb-2 h-4 w-20" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Skeleton className="mb-8 h-10 w-full" />
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow">
              <Skeleton className="mb-4 h-6 w-48" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="rounded-lg bg-white p-6 shadow">
                  <Skeleton className="mb-4 h-6 w-32" />
                  <div className="space-y-2">
                    {[...Array(4)].map((_, j) => (
                      <Skeleton key={j} className="h-4 w-full" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
