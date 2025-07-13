import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Browse Programs</h1>
        <p className="text-gray-600">Find the perfect bachelor's program from thousands of options worldwide</p>
      </div>

      {/* Search and filter bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input className="pl-9" placeholder="Search programs..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Discipline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Disciplines</SelectItem>
            <SelectItem value="business">Business & Management</SelectItem>
            <SelectItem value="computer-science">Computer Science & IT</SelectItem>
            <SelectItem value="engineering">Engineering & Technology</SelectItem>
            <SelectItem value="arts">Arts & Humanities</SelectItem>
            <SelectItem value="science">Natural Sciences</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-locations">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-locations">All Locations</SelectItem>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="australia">Australia</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
          </SelectContent>
        </Select>
        <Button className="gap-2 bg-orange-500 hover:bg-orange-600">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        {/* Filters sidebar */}
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="mb-4 font-semibold">Filters</h2>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium">Program Type</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="bachelor" />
                <label htmlFor="bachelor" className="text-sm">
                  Bachelor's Degree
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="associate" />
                <label htmlFor="associate" className="text-sm">
                  Associate's Degree
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="certificate" />
                <label htmlFor="certificate" className="text-sm">
                  Certificate
                </label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium">Study Format</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="full-time" />
                <label htmlFor="full-time" className="text-sm">
                  Full-time
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="part-time" />
                <label htmlFor="part-time" className="text-sm">
                  Part-time
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="online" />
                <label htmlFor="online" className="text-sm">
                  Online
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="blended" />
                <label htmlFor="blended" className="text-sm">
                  Blended
                </label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium">Tuition Fee (per year)</h3>
            <div className="px-2">
              <Slider defaultValue={[30000]} max={50000} step={1000} />
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>$0</span>
                <span>$50,000+</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium">Language</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="english" />
                <label htmlFor="english" className="text-sm">
                  English
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="spanish" />
                <label htmlFor="spanish" className="text-sm">
                  Spanish
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="french" />
                <label htmlFor="french" className="text-sm">
                  French
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="german" />
                <label htmlFor="german" className="text-sm">
                  German
                </label>
              </div>
            </div>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </div>

        {/* Programs list */}
        <div className="space-y-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-gray-600">
              <strong>1,245</strong> programs found
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="tuition-low">Tuition: Low to High</SelectItem>
                  <SelectItem value="tuition-high">Tuition: High to Low</SelectItem>
                  <SelectItem value="ranking">University Ranking</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Program cards */}
          {[1, 2, 3, 4, 5].map((program) => (
            <Card key={program} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-48 w-full md:h-auto md:w-1/3 lg:w-1/4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Program Image"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-6">
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold">
                      <Link href={`/programs/${program}`} className="hover:text-orange-500">
                        Bachelor of{" "}
                        {program === 1
                          ? "Computer Science"
                          : program === 2
                            ? "Business Administration"
                            : program === 3
                              ? "Engineering"
                              : program === 4
                                ? "Arts"
                                : "Science"}
                      </Link>
                    </h3>
                    <Badge className="bg-orange-500">
                      {program === 1
                        ? "Top Ranked"
                        : program === 2
                          ? "Popular"
                          : program === 3
                            ? "Scholarship Available"
                            : program === 4
                              ? "High Demand"
                              : "New"}
                    </Badge>
                  </div>
                  <p className="mb-1 font-medium">
                    {program === 1
                      ? "Massachusetts Institute of Technology"
                      : program === 2
                        ? "London School of Economics"
                        : program === 3
                          ? "ETH Zurich"
                          : program === 4
                            ? "University of Toronto"
                            : "University of Melbourne"}
                  </p>
                  <p className="mb-4 text-sm text-gray-500">
                    {program === 1
                      ? "Cambridge, United States"
                      : program === 2
                        ? "London, United Kingdom"
                        : program === 3
                          ? "Zurich, Switzerland"
                          : program === 4
                            ? "Toronto, Canada"
                            : "Melbourne, Australia"}
                  </p>
                  <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-3">
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <p>{program === 3 ? "3" : "4"} years</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Format:</span>
                      <p>Full-time</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Language:</span>
                      <p>English</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Tuition:</span>
                      <p>
                        {program === 1
                          ? "$53,790 per year"
                          : program === 2
                            ? "£22,430 per year"
                            : program === 3
                              ? "CHF 1,460 per year"
                              : program === 4
                                ? "CAD 23,090 per year"
                                : "AUD 42,000 per year"}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Application:</span>
                      <p>{program === 1 || program === 3 ? "Open" : "Closing Soon"}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/programs/${program}`}>View Details</Link>
                    </Button>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      Save to Wishlist
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}

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
    </div>
  )
}
