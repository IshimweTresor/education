import Link from "next/link"
import UniversityImage from "@/components/university-image"

const destinations = [
  {
    id: 1,
    name: "United States",
    programCount: 4250,
    slug: "united-states",
  },
  {
    id: 2,
    name: "United Kingdom",
    programCount: 3120,
    slug: "united-kingdom",
  },
  {
    id: 3,
    name: "Australia",
    programCount: 1890,
    slug: "australia",
  },
  {
    id: 4,
    name: "Canada",
    programCount: 1650,
    slug: "canada",
  },
  {
    id: 5,
    name: "Germany",
    programCount: 1420,
    slug: "germany",
  },
  {
    id: 6,
    name: "Netherlands",
    programCount: 980,
    slug: "netherlands",
  },
]

export default function PopularDestinations() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <Link
          key={destination.id}
          href={`/destinations/${destination.slug}`}
          className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md"
        >
          <div className="relative h-48 w-full">
            <div className="h-full w-full">
              <UniversityImage id={destination.id} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">{destination.name}</h3>
              <p className="text-sm">{destination.programCount} programs</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
