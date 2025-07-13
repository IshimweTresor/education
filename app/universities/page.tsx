import Image from "next/image"
import Link from "next/link"
import { Search, Filter, MapPin, GraduationCap, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const universities = [
  {
    id: 1,
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, United States",
    ranking: "#1 in Computer Science",
    programs: 125,
    students: "11,000+",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: 2,
    name: "Stanford University",
    location: "Stanford, United States",
    ranking: "#2 in Computer Science",
    programs: 118,
    students: "16,000+",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: 3,
    name: "University of Oxford",
    location: "Oxford, United Kingdom",
    ranking: "#3 in Computer Science",
    programs: 98,
    students: "24,000+",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 4,
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    ranking: "#4 in Computer Science",
    programs: 87,
    students: "21,000+",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 5,
    name: "University of Cambridge",
    location: "Cambridge, United Kingdom",
    ranking: "#5 in Computer Science",
    programs: 92,
    students: "19,000+",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

export default function UniversitiesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Universities</h1>
        <p className="text-gray-600">Discover top universities from around the world</p>
      </div>

      {/* Search and filter bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input className="pl-9" placeholder="Search universities..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Countries</SelectItem>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="australia">Australia</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-rankings">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Ranking" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-rankings">All Rankings</SelectItem>
            <SelectItem value="top-10">Top 10</SelectItem>
            <SelectItem value="top-50">Top 50</SelectItem>
            <SelectItem value="top-100">Top 100</SelectItem>
            <SelectItem value="top-200">Top 200</SelectItem>
          </SelectContent>
        </Select>
        <Button className="gap-2 bg-orange-500 hover:bg-orange-600">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Featured universities */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Featured Universities</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {universities
            .filter((uni) => uni.featured)
            .map((university) => (
              <Card key={university.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 w-full md:h-auto md:w-2/5">
                    <Image
                      src={university.image || "/placeholder.svg"}
                      alt={university.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-2 top-2 bg-orange-500">Featured</Badge>
                  </div>
                  <CardContent className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="mb-1 text-xl font-semibold">
                        <Link href={`/universities/${university.id}`} className="hover:text-orange-500">
                          {university.name}
                        </Link>
                      </h3>
                      <div className="mb-4 flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        {university.location}
                      </div>
                      <div className="mb-4 grid grid-cols-2 gap-y-2 text-sm">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4 text-orange-500" />
                          <span>{university.ranking}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-orange-500" />
                          <span>{university.students} Students</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-orange-500" />
                          <span>{university.programs} Programs</span>
                        </div>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/universities/${university.id}`}>View University</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
        </div>
      </div>

      {/* All universities */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">All Universities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((university) => (
            <Card key={university.id} className="overflow-hidden">
              <div className="relative h-40 w-full">
                <Image
                  src={university.image || "/placeholder.svg"}
                  alt={university.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-1 text-lg font-semibold">
                  <Link href={`/universities/${university.id}`} className="hover:text-orange-500">
                    {university.name}
                  </Link>
                </h3>
                <div className="mb-4 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  {university.location}
                </div>
                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex items-center gap-1">
                    <GraduationCap className="h-4 w-4 text-orange-500" />
                    <span>{university.ranking}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-orange-500" />
                    <span>{university.programs} Programs</span>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/universities/${university.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center gap-1">
            <Button variant="outline" size="icon" disabled>
              <span className="sr-only">Previous page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button variant="outline" size="sm" className="bg-orange-500 text-white hover:bg-orange-600">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              4
            </Button>
            <Button variant="outline" size="sm">
              5
            </Button>
            <Button variant="outline" size="icon">
              <span className="sr-only">Next page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  )
}
