import { Search, Filter, Clock, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import ProgramImage from "@/components/program-image"

const shortCourses = [
  {
    id: 1,
    title: "Data Science Fundamentals",
    provider: "MIT Professional Education",
    duration: "8 weeks",
    format: "Online, Self-paced",
    price: "$1,500",
    startDate: "Flexible start dates",
    certificate: "Professional Certificate",
    level: "Beginner to Intermediate",
    category: "Technology",
    description:
      "Learn the fundamentals of data science, including data analysis, visualization, and machine learning. This course provides a solid foundation for those looking to enter the field of data science or enhance their analytical skills.",
    skills: [
      "Python Programming",
      "Data Analysis",
      "Statistical Methods",
      "Data Visualization",
      "Machine Learning Basics",
    ],
    featured: true,
    type: "computer",
  },
  {
    id: 2,
    title: "Digital Marketing Essentials",
    provider: "Harvard Business School Online",
    duration: "6 weeks",
    format: "Online, Instructor-led",
    price: "$1,750",
    startDate: "January 15, 2024",
    certificate: "Certificate of Completion",
    level: "Beginner",
    category: "Business",
    description:
      "Master the essential concepts and tools of digital marketing, including social media, content marketing, SEO, and analytics. Develop a comprehensive digital marketing strategy for your business or career.",
    skills: ["Social Media Marketing", "Content Strategy", "SEO", "Digital Analytics", "Campaign Management"],
    featured: true,
    type: "business",
  },
  {
    id: 3,
    title: "UX Design Bootcamp",
    provider: "Interaction Design Foundation",
    duration: "12 weeks",
    format: "Online, Instructor-led",
    price: "$2,200",
    startDate: "February 1, 2024",
    certificate: "Professional Certificate",
    level: "Beginner to Advanced",
    category: "Design",
    description:
      "Immerse yourself in the world of user experience design through this intensive bootcamp. Learn design thinking, user research, wireframing, prototyping, and usability testing to create exceptional digital experiences.",
    skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Thinking"],
    featured: true,
    type: "arts",
  },
  {
    id: 4,
    title: "Project Management Professional (PMP) Exam Prep",
    provider: "Project Management Institute",
    duration: "10 weeks",
    format: "Online, Self-paced",
    price: "$1,200",
    startDate: "Flexible start dates",
    certificate: "Certificate of Completion",
    level: "Intermediate to Advanced",
    category: "Business",
    description:
      "Prepare for the PMP certification exam with comprehensive coverage of the PMBOK Guide. This course includes practice exams, case studies, and personalized feedback to ensure you're ready for certification.",
    skills: [
      "Project Planning",
      "Risk Management",
      "Stakeholder Management",
      "Project Execution",
      "Project Monitoring",
    ],
    featured: false,
    type: "business",
  },
  {
    id: 5,
    title: "Artificial Intelligence: Principles and Techniques",
    provider: "Stanford Online",
    duration: "10 weeks",
    format: "Online, Instructor-led",
    price: "$2,000",
    startDate: "March 5, 2024",
    certificate: "Professional Certificate",
    level: "Intermediate to Advanced",
    category: "Technology",
    description:
      "Explore the principles and techniques of artificial intelligence, including machine learning, neural networks, and natural language processing. Apply AI concepts to solve real-world problems.",
    skills: ["Machine Learning", "Neural Networks", "Natural Language Processing", "Computer Vision", "AI Ethics"],
    featured: false,
    type: "computer",
  },
]

export default function ShortCoursesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Short Courses & Certificates</h1>
        <p className="text-gray-600">
          Enhance your skills and boost your career with professional short courses and certificate programs
        </p>
      </div>

      {/* Search and filter bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input className="pl-9" placeholder="Search courses..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="health">Health & Medicine</SelectItem>
            <SelectItem value="language">Languages</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-duration">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-duration">Any Duration</SelectItem>
            <SelectItem value="short">Less than 4 weeks</SelectItem>
            <SelectItem value="medium">4-8 weeks</SelectItem>
            <SelectItem value="long">More than 8 weeks</SelectItem>
          </SelectContent>
        </Select>
        <Button className="gap-2 bg-orange-500 hover:bg-orange-600">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-6 grid w-full grid-cols-5 bg-transparent">
          <TabsTrigger value="all" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500">
            All Courses
          </TabsTrigger>
          <TabsTrigger
            value="technology"
            className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
          >
            Technology
          </TabsTrigger>
          <TabsTrigger
            value="business"
            className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
          >
            Business
          </TabsTrigger>
          <TabsTrigger value="design" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500">
            Design
          </TabsTrigger>
          <TabsTrigger value="other" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500">
            Other
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          {/* Featured courses */}
          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-semibold">Featured Courses</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {shortCourses
                .filter((course) => course.featured)
                .map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="relative h-40 w-full">
                      <ProgramImage id={course.id} type={course.type as any} />
                      <Badge className="absolute right-2 top-2 bg-orange-500">Featured</Badge>
                    </div>
                    <CardContent className="p-5">
                      <div className="mb-2 flex items-center justify-between">
                        <Badge variant="outline" className="bg-gray-100">
                          {course.category}
                        </Badge>
                        <span className="text-sm font-medium text-orange-500">{course.price}</span>
                      </div>
                      <h3 className="mb-1 text-lg font-semibold">
                        <Link href={`/short-courses/${course.id}`} className="hover:text-orange-500">
                          {course.title}
                        </Link>
                      </h3>
                      <p className="mb-3 text-sm text-gray-600">{course.provider}</p>
                      <div className="mb-3 space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>{course.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-gray-400" />
                          <span>{course.certificate}</span>
                        </div>
                      </div>
                      <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                        <Link href={`/short-courses/${course.id}`}>View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All courses */}
          <h2 className="mb-6 text-2xl font-semibold">All Courses</h2>
          <div className="space-y-4">
            {shortCourses
              .filter((course) => !course.featured)
              .map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 w-full md:h-auto md:w-1/4">
                      <ProgramImage id={course.id} type={course.type as any} />
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <Badge variant="outline" className="mb-2 bg-gray-100">
                            {course.category}
                          </Badge>
                          <h3 className="text-xl font-semibold">
                            <Link href={`/short-courses/${course.id}`} className="hover:text-orange-500">
                              {course.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600">{course.provider}</p>
                        </div>
                        <span className="text-lg font-medium text-orange-500">{course.price}</span>
                      </div>

                      <p className="mb-4 text-gray-700">{course.description}</p>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {course.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                            {skill}
                          </span>
                        ))}
                        {course.skills.length > 3 && (
                          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                            +{course.skills.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-3">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-orange-500" />
                          <span>{course.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-orange-500" />
                          <span>{course.certificate}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/short-courses/${course.id}`}>View Details</Link>
                        </Button>
                        <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                          Enroll Now
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>

        {/* Other tab contents would be similar but filtered by category */}
      </Tabs>

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
  )
}
