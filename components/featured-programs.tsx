import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProgramImage from "@/components/program-image"

const featuredPrograms = [
  {
    id: 1,
    title: "Computer Science",
    university: "Massachusetts Institute of Technology",
    location: "Cambridge, United States",
    duration: "4 years",
    tuition: "$53,790 per year",
    type: "computer",
    badge: "Top Ranked",
  },
  {
    id: 2,
    title: "Business Administration",
    university: "London School of Economics",
    location: "London, United Kingdom",
    duration: "3 years",
    tuition: "£22,430 per year",
    type: "business",
    badge: "Popular",
  },
  {
    id: 3,
    title: "Mechanical Engineering",
    university: "ETH Zurich",
    location: "Zurich, Switzerland",
    duration: "3 years",
    tuition: "CHF 1,460 per year",
    type: "engineering",
    badge: "Scholarship Available",
  },
  {
    id: 4,
    title: "Medicine",
    university: "University of Toronto",
    location: "Toronto, Canada",
    duration: "4 years",
    tuition: "CAD 23,090 per year",
    type: "science",
    badge: "High Demand",
  },
]

export default function FeaturedPrograms() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {featuredPrograms.map((program) => (
        <Card key={program.id} className="overflow-hidden">
          <div className="relative h-40 w-full">
            <ProgramImage id={program.id} type={program.type as any} />
            {program.badge && <Badge className="absolute right-2 top-2 bg-orange-500">{program.badge}</Badge>}
          </div>
          <CardContent className="p-4">
            <h3 className="mb-1 font-semibold">{program.title}</h3>
            <p className="text-sm text-gray-700">{program.university}</p>
            <p className="mb-2 text-xs text-gray-500">{program.location}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-gray-100 px-2 py-1">{program.duration}</span>
              <span className="rounded-full bg-gray-100 px-2 py-1">{program.tuition}</span>
            </div>
          </CardContent>
          <CardFooter className="border-t p-4 pt-3">
            <Link
              href={`/programs/${program.id}`}
              className="text-sm font-medium text-orange-500 hover:text-orange-600"
            >
              View Program Details
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
