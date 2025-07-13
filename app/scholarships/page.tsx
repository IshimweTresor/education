import { Search, Filter, DollarSign, Calendar, GraduationCap, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

const scholarships = [
  {
    id: 1,
    title: "Global Excellence Scholarship",
    organization: "International Education Foundation",
    amount: "$25,000",
    deadline: "December 15, 2023",
    eligibility: "International students with outstanding academic achievements",
    level: "Undergraduate, Graduate",
    countries: "All countries",
    fields: "All fields of study",
    description:
      "The Global Excellence Scholarship recognizes exceptional academic achievement and leadership potential in international students. Recipients will receive financial support to pursue their studies at partner universities worldwide.",
    requirements: [
      "Minimum GPA of 3.7 or equivalent",
      "Demonstrated leadership experience",
      "Two letters of recommendation",
      "Personal statement",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "STEM Innovation Scholarship",
    organization: "Tech Future Foundation",
    amount: "$15,000 per year",
    deadline: "January 30, 2024",
    eligibility: "Students pursuing degrees in STEM fields",
    level: "Undergraduate",
    countries: "United States, Canada, United Kingdom",
    fields: "Science, Technology, Engineering, Mathematics",
    description:
      "The STEM Innovation Scholarship supports talented students pursuing careers in science, technology, engineering, and mathematics. The scholarship aims to foster innovation and address the growing demand for skilled professionals in STEM fields.",
    requirements: [
      "Minimum GPA of 3.5 or equivalent",
      "Research or project experience in STEM",
      "One letter of recommendation",
      "Essay on how you plan to contribute to innovation in your field",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Future Leaders Scholarship",
    organization: "Global Leadership Institute",
    amount: "$10,000 per year",
    deadline: "February 28, 2024",
    eligibility: "Students with leadership potential and community involvement",
    level: "Undergraduate, Graduate",
    countries: "All countries",
    fields: "Business, Public Policy, International Relations",
    description:
      "The Future Leaders Scholarship identifies and supports students who demonstrate exceptional leadership potential and a commitment to making a positive impact in their communities and beyond.",
    requirements: [
      "Proven leadership experience",
      "Community service involvement",
      "Two letters of recommendation",
      "Essay on your leadership philosophy and goals",
    ],
    featured: true,
  },
  {
    id: 4,
    title: "Arts and Humanities Grant",
    organization: "Cultural Heritage Foundation",
    amount: "$8,000",
    deadline: "March 15, 2024",
    eligibility: "Students in arts, humanities, and cultural studies",
    level: "Undergraduate, Graduate",
    countries: "All countries",
    fields: "Arts, Humanities, Cultural Studies",
    description:
      "The Arts and Humanities Grant supports students pursuing degrees in fields that preserve and advance cultural heritage, artistic expression, and humanistic inquiry.",
    requirements: ["Portfolio or writing sample", "Statement of purpose", "One letter of recommendation"],
    featured: false,
  },
  {
    id: 5,
    title: "Women in Engineering Scholarship",
    organization: "Women Engineers Association",
    amount: "$12,000",
    deadline: "April 1, 2024",
    eligibility: "Female students pursuing engineering degrees",
    level: "Undergraduate",
    countries: "All countries",
    fields: "All engineering disciplines",
    description:
      "The Women in Engineering Scholarship aims to increase gender diversity in engineering fields by supporting female students pursuing engineering degrees.",
    requirements: ["Minimum GPA of 3.3 or equivalent", "Personal statement", "One letter of recommendation"],
    featured: false,
  },
]

export default function ScholarshipsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Scholarships</h1>
        <p className="text-gray-600">
          Find financial support for your education from thousands of scholarships worldwide
        </p>
      </div>

      {/* Search and filter bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input className="pl-9" placeholder="Search scholarships..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Study Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="undergraduate">Undergraduate</SelectItem>
            <SelectItem value="graduate">Graduate</SelectItem>
            <SelectItem value="phd">PhD</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-fields">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Field of Study" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-fields">All Fields</SelectItem>
            <SelectItem value="business">Business & Management</SelectItem>
            <SelectItem value="engineering">Engineering & Technology</SelectItem>
            <SelectItem value="medicine">Medicine & Health</SelectItem>
            <SelectItem value="arts">Arts & Humanities</SelectItem>
            <SelectItem value="science">Natural Sciences</SelectItem>
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
            <h3 className="mb-2 text-sm font-medium">Scholarship Amount</h3>
            <div className="px-2">
              <Slider defaultValue={[10000]} max={30000} step={1000} />
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>$0</span>
                <span>$30,000+</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium">Eligibility</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="international" />
                <label htmlFor="international" className="text-sm">
                  International Students
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="merit" />
                <label htmlFor="merit" className="text-sm">
                  Merit-Based
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="need" />
                <label htmlFor="need" className="text-sm">
                  Need-Based
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="minority" />
                <label htmlFor="minority" className="text-sm">
                  Minority Groups
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="women" />
                <label htmlFor="women" className="text-sm">
                  Women
                </label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium">Destination Country</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="usa" />
                <label htmlFor="usa" className="text-sm">
                  United States
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="uk" />
                <label htmlFor="uk" className="text-sm">
                  United Kingdom
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="canada" />
                <label htmlFor="canada" className="text-sm">
                  Canada
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="australia" />
                <label htmlFor="australia" className="text-sm">
                  Australia
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="europe" />
                <label htmlFor="europe" className="text-sm">
                  Europe
                </label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium">Application Deadline</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="1month" />
                <label htmlFor="1month" className="text-sm">
                  Within 1 Month
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="3months" />
                <label htmlFor="3months" className="text-sm">
                  Within 3 Months
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="6months" />
                <label htmlFor="6months" className="text-sm">
                  Within 6 Months
                </label>
              </div>
            </div>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </div>

        {/* Scholarships list */}
        <div className="space-y-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-gray-600">
              <strong>2,543</strong> scholarships found
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select defaultValue="deadline">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deadline">Application Deadline</SelectItem>
                  <SelectItem value="amount-high">Amount: High to Low</SelectItem>
                  <SelectItem value="amount-low">Amount: Low to High</SelectItem>
                  <SelectItem value="relevance">Relevance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Featured scholarships */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Featured Scholarships</h2>
            <div className="space-y-4">
              {scholarships
                .filter((scholarship) => scholarship.featured)
                .map((scholarship) => (
                  <Card key={scholarship.id} className="overflow-hidden border-l-4 border-l-orange-500">
                    <CardContent className="p-6">
                      <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <div>
                          <h3 className="text-xl font-semibold">
                            <Link href={`/scholarships/${scholarship.id}`} className="hover:text-orange-500">
                              {scholarship.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600">{scholarship.organization}</p>
                        </div>
                        <Badge className="bg-orange-500">Featured</Badge>
                      </div>

                      <p className="mb-4 text-gray-700">{scholarship.description}</p>

                      <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-4">
                        <div className="flex items-start gap-2">
                          <DollarSign className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                          <div>
                            <p className="font-medium">Amount</p>
                            <p className="text-gray-600">{scholarship.amount}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                          <div>
                            <p className="font-medium">Deadline</p>
                            <p className="text-gray-600">{scholarship.deadline}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                          <div>
                            <p className="font-medium">Level</p>
                            <p className="text-gray-600">{scholarship.level}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Globe className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                          <div>
                            <p className="font-medium">Eligibility</p>
                            <p className="text-gray-600 line-clamp-2">{scholarship.eligibility}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/scholarships/${scholarship.id}`}>View Details</Link>
                        </Button>
                        <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All scholarships */}
          <h2 className="mb-4 text-xl font-semibold">All Scholarships</h2>
          <div className="space-y-4">
            {scholarships
              .filter((scholarship) => !scholarship.featured)
              .map((scholarship) => (
                <Card key={scholarship.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-xl font-semibold">
                          <Link href={`/scholarships/${scholarship.id}`} className="hover:text-orange-500">
                            {scholarship.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600">{scholarship.organization}</p>
                      </div>
                    </div>

                    <p className="mb-4 text-gray-700">{scholarship.description}</p>

                    <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-4">
                      <div className="flex items-start gap-2">
                        <DollarSign className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                        <div>
                          <p className="font-medium">Amount</p>
                          <p className="text-gray-600">{scholarship.amount}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                        <div>
                          <p className="font-medium">Deadline</p>
                          <p className="text-gray-600">{scholarship.deadline}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                        <div>
                          <p className="font-medium">Level</p>
                          <p className="text-gray-600">{scholarship.level}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                        <div>
                          <p className="font-medium">Eligibility</p>
                          <p className="text-gray-600 line-clamp-2">{scholarship.eligibility}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/scholarships/${scholarship.id}`}>View Details</Link>
                      </Button>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Apply Now
                      </Button>
                    </div>
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

      {/* Scholarship resources */}
      <div className="mt-12 rounded-lg bg-orange-50 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Scholarship Resources</h2>
        <p className="mb-6 text-gray-700">
          Maximize your chances of securing financial aid with our comprehensive scholarship resources.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Award className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="mb-2 font-semibold">Scholarship Application Guide</h3>
              <p className="mb-3 text-sm text-gray-600">
                Learn how to craft compelling scholarship applications that stand out to selection committees.
              </p>
              <Link
                href="/guides/scholarship-applications"
                className="text-sm font-medium text-orange-500 hover:underline"
              >
                Read Guide →
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <DollarSign className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="mb-2 font-semibold">Financial Aid Calculator</h3>
              <p className="mb-3 text-sm text-gray-600">
                Estimate your financial aid eligibility and understand the total cost of your education.
              </p>
              <Link
                href="/tools/financial-aid-calculator"
                className="text-sm font-medium text-orange-500 hover:underline"
              >
                Use Calculator →
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Calendar className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="mb-2 font-semibold">Scholarship Deadline Tracker</h3>
              <p className="mb-3 text-sm text-gray-600">
                Never miss an application deadline with our customizable scholarship deadline tracker.
              </p>
              <Link href="/tools/deadline-tracker" className="text-sm font-medium text-orange-500 hover:underline">
                Start Tracking →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
