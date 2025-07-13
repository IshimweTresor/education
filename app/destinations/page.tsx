import Image from "next/image"
import Link from "next/link"
import { Search, Filter, GraduationCap, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const destinations = [
  {
    id: 1,
    name: "United States",
    universities: 450,
    programs: 4250,
    cities: ["New York", "Boston", "San Francisco", "Chicago", "Los Angeles"],
    description:
      "The United States offers world-class education with prestigious universities like Harvard, MIT, and Stanford. Students benefit from cutting-edge research facilities, diverse campus cultures, and strong industry connections.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "United Kingdom",
    universities: 130,
    programs: 3120,
    cities: ["London", "Oxford", "Cambridge", "Edinburgh", "Manchester"],
    description:
      "The UK is home to some of the world's oldest and most prestigious universities. With a rich academic tradition, diverse student population, and high-quality education, it's a top destination for international students.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Australia",
    universities: 43,
    programs: 1890,
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    description:
      "Australia offers a relaxed lifestyle combined with high-quality education. With innovative teaching methods, multicultural environment, and beautiful landscapes, it's an attractive destination for international students.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    name: "Canada",
    universities: 96,
    programs: 1650,
    cities: ["Toronto", "Vancouver", "Montreal", "Ottawa", "Quebec City"],
    description:
      "Canada is known for its welcoming attitude towards international students, high-quality education, and affordable tuition fees. It also offers post-graduation work permits and pathways to permanent residency.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    name: "Germany",
    universities: 110,
    programs: 1420,
    cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Heidelberg"],
    description:
      "Germany offers tuition-free education at public universities for all students, including internationals. With strong engineering and technical programs, it's an excellent destination for career-focused students.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    name: "Netherlands",
    universities: 55,
    programs: 980,
    cities: ["Amsterdam", "Rotterdam", "Utrecht", "Leiden", "Groningen"],
    description:
      "The Netherlands offers many English-taught programs, innovative teaching methods, and a high quality of life. Dutch universities are known for their practical approach and strong connections to industry.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function DestinationsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Study Destinations</h1>
        <p className="text-gray-600">Explore popular countries for international education</p>
      </div>

      {/* Search and filter bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input className="pl-9" placeholder="Search destinations..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="north-america">North America</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="oceania">Oceania</SelectItem>
          </SelectContent>
        </Select>
        <Button className="gap-2 bg-orange-500 hover:bg-orange-600">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Destinations */}
      <div className="grid gap-8 md:grid-cols-2">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="text-2xl font-bold">{destination.name}</h2>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="mb-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4 text-orange-500" />
                  <span className="text-sm">{destination.universities} Universities</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4 text-orange-500" />
                  <span className="text-sm">{destination.programs} Programs</span>
                </div>
              </div>
              <p className="mb-4 text-gray-700">{destination.description}</p>
              <div className="mb-4">
                <h3 className="mb-2 font-medium">Popular Cities</h3>
                <div className="flex flex-wrap gap-2">
                  {destination.cities.map((city, index) => (
                    <div key={index} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                      {city}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button asChild variant="outline" className="flex-1">
                  <Link href={`/destinations/${destination.id}`}>Explore</Link>
                </Button>
                <Button asChild className="flex-1 bg-orange-500 hover:bg-orange-600">
                  <Link href={`/programs?destination=${destination.id}`}>View Programs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Study Abroad Guide */}
      <div className="mt-12 rounded-lg bg-orange-50 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Study Abroad Guide</h2>
        <p className="mb-6 text-gray-700">
          Planning to study abroad can be overwhelming. Our comprehensive guides cover everything you need to know about
          studying in different countries, from visa requirements to cost of living.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <h3 className="mb-2 font-semibold">Visa Requirements</h3>
              <p className="mb-3 text-sm text-gray-600">
                Learn about student visa requirements, application processes, and documentation needed for different
                countries.
              </p>
              <Link href="/guides/visa-requirements" className="text-sm font-medium text-orange-500 hover:underline">
                Read More →
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="mb-2 font-semibold">Cost of Living</h3>
              <p className="mb-3 text-sm text-gray-600">
                Compare living expenses, accommodation costs, and budgeting tips for popular study destinations.
              </p>
              <Link href="/guides/cost-of-living" className="text-sm font-medium text-orange-500 hover:underline">
                Read More →
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="mb-2 font-semibold">Scholarships</h3>
              <p className="mb-3 text-sm text-gray-600">
                Discover scholarships, grants, and financial aid options available for international students.
              </p>
              <Link href="/guides/scholarships" className="text-sm font-medium text-orange-500 hover:underline">
                Read More →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
