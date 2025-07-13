import Link from "next/link"
import {
  Leaf,
  FlaskRoundIcon as Flask,
  Palette,
  Briefcase,
  Code,
  BookOpen,
  Wrench,
  Globe,
  Umbrella,
  BookMarked,
} from "lucide-react"

const disciplines = [
  {
    name: "Agriculture & Forestry",
    icon: <Leaf className="h-8 w-8" />,
    slug: "agriculture-forestry",
    count: 328,
  },
  {
    name: "Applied Sciences & Professions",
    icon: <Flask className="h-8 w-8" />,
    slug: "applied-sciences",
    count: 452,
  },
  {
    name: "Arts, Design & Architecture",
    icon: <Palette className="h-8 w-8" />,
    slug: "arts-design",
    count: 567,
  },
  {
    name: "Business & Management",
    icon: <Briefcase className="h-8 w-8" />,
    slug: "business-management",
    count: 1245,
  },
  {
    name: "Computer Science & IT",
    icon: <Code className="h-8 w-8" />,
    slug: "computer-science",
    count: 876,
  },
  {
    name: "Education & Training",
    icon: <BookOpen className="h-8 w-8" />,
    slug: "education-training",
    count: 412,
  },
  {
    name: "Engineering & Technology",
    icon: <Wrench className="h-8 w-8" />,
    slug: "engineering-technology",
    count: 932,
  },
  {
    name: "Environmental Studies",
    icon: <Globe className="h-8 w-8" />,
    slug: "environmental-studies",
    count: 289,
  },
  {
    name: "Hospitality, Leisure & Sports",
    icon: <Umbrella className="h-8 w-8" />,
    slug: "hospitality-leisure",
    count: 356,
  },
  {
    name: "Humanities",
    icon: <BookMarked className="h-8 w-8" />,
    slug: "humanities",
    count: 678,
  },
]

export default function DisciplineGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {disciplines.map((discipline) => (
        <Link
          key={discipline.slug}
          href={`/disciplines/${discipline.slug}`}
          className="flex flex-col items-center rounded-lg bg-white p-6 text-center transition-all hover:shadow-md"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
            {discipline.icon}
          </div>
          <h3 className="mb-1 font-medium">{discipline.name}</h3>
          <p className="text-sm text-gray-500">{discipline.count} programs</p>
        </Link>
      ))}
    </div>
  )
}
