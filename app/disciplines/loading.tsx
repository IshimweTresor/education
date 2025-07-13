import { Skeleton } from "@/components/ui/skeleton"

export default function DisciplinesLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Skeleton className="mx-auto mb-4 h-12 w-96 bg-white/20" />
            <Skeleton className="mx-auto mb-8 h-6 w-80 bg-white/20" />
            <Skeleton className="mx-auto h-10 w-64 bg-white/20" />
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-lg bg-white p-6 shadow">
                <div className="flex items-center">
                  <Skeleton className="mr-4 h-8 w-8" />
                  <div>
                    <Skeleton className="mb-2 h-6 w-16" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Grid Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <Skeleton className="mx-auto mb-4 h-8 w-64" />
            <Skeleton className="mx-auto h-4 w-96" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="rounded-lg bg-white p-6 text-center">
                <Skeleton className="mx-auto mb-4 h-16 w-16 rounded-full" />
                <Skeleton className="mx-auto mb-2 h-4 w-24" />
                <Skeleton className="mx-auto h-3 w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
