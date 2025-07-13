import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, Clock, User, BookOpen, Download, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import StudentAvatar from "@/components/student-avatar"

const featuredArticles = [
  {
    id: 1,
    title: "How to Write a Successful Personal Statement",
    excerpt:
      "Learn the key elements of a compelling personal statement that will make your application stand out to admissions committees.",
    category: "Application Tips",
    author: "Dr. Emma Wilson",
    date: "May 2, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 2,
    title: "Choosing the Right University: 10 Factors to Consider",
    excerpt:
      "Beyond rankings and reputation, discover the important factors that should influence your university selection process.",
    category: "Decision Making",
    author: "Prof. James Chen",
    date: "April 15, 2023",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 3,
    title: "Scholarship Application Strategies That Work",
    excerpt:
      "Increase your chances of securing financial aid with these proven scholarship application strategies and tips.",
    category: "Scholarships",
    author: "Maria Rodriguez",
    date: "March 28, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
]

const recentArticles = [
  {
    id: 4,
    title: "Preparing for University Interviews: A Complete Guide",
    excerpt: "Master the art of university interviews with our comprehensive preparation guide.",
    category: "Application Tips",
    author: "Dr. Sarah Johnson",
    date: "May 10, 2023",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Student Accommodation: On-Campus vs. Off-Campus Living",
    excerpt: "Weigh the pros and cons of different accommodation options to make the best choice for your needs.",
    category: "Student Life",
    author: "Michael Brown",
    date: "May 8, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Balancing Studies and Part-Time Work: Time Management Tips",
    excerpt: "Learn effective strategies to balance your academic responsibilities with part-time employment.",
    category: "Student Life",
    author: "Jennifer Lee",
    date: "May 5, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "Overcoming Culture Shock: Guide for International Students",
    excerpt: "Practical advice for international students adjusting to a new country and academic environment.",
    category: "International Students",
    author: "Carlos Mendez",
    date: "May 3, 2023",
    readTime: "11 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Developing Critical Thinking Skills for Academic Success",
    excerpt: "Enhance your academic performance by strengthening your critical thinking abilities.",
    category: "Study Skills",
    author: "Prof. David Wilson",
    date: "April 30, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 9,
    title: "Networking in College: Building Professional Relationships",
    excerpt:
      "Learn how to build a professional network during your college years that will benefit your future career.",
    category: "Career Planning",
    author: "Alexandra Kim",
    date: "April 28, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categories = [
  { name: "Application Tips", count: 24, icon: <BookOpen className="h-5 w-5" /> },
  { name: "Study Skills", count: 18, icon: <BookOpen className="h-5 w-5" /> },
  { name: "Student Life", count: 32, icon: <User className="h-5 w-5" /> },
  { name: "Career Planning", count: 15, icon: <User className="h-5 w-5" /> },
  { name: "Scholarships", count: 21, icon: <Download className="h-5 w-5" /> },
  { name: "International Students", count: 19, icon: <User className="h-5 w-5" /> },
  { name: "Decision Making", count: 12, icon: <ThumbsUp className="h-5 w-5" /> },
]

const expertQuestions = [
  {
    id: 1,
    question: "How important are extracurricular activities in college applications?",
    answer:
      "Extracurricular activities demonstrate your interests, commitment, and leadership skills. While academics are the foundation of your application, meaningful involvement in activities can set you apart from other applicants with similar academic profiles. Quality of involvement is more important than quantity—colleges prefer to see sustained commitment and leadership in a few activities rather than superficial participation in many.",
    expert: "Dr. Lisa Thompson",
    role: "Former Admissions Officer, Harvard University",
  },
  {
    id: 2,
    question: "Should I take a gap year before starting university?",
    answer:
      "A gap year can be valuable if you have a structured plan for how to use that time. Meaningful gap year experiences—such as internships, volunteer work, language immersion, or cultural exchange—can help you gain maturity, clarity about your interests, and skills that will benefit you in college. However, it's important to research how your target universities view gap years and whether you need to apply before or during your gap year.",
    expert: "Mark Johnson",
    role: "Education Counselor",
  },
  {
    id: 3,
    question: "How can I finance my education if I don't qualify for scholarships?",
    answer:
      "Beyond scholarships, consider government loans, work-study programs, part-time employment, and payment plans offered by universities. Some employers offer tuition assistance programs, and there are also private loans available. Additionally, look into lesser-known grants and scholarships with specific eligibility criteria that might match your profile. Remember to complete the FAFSA (in the US) or equivalent financial aid applications in your country to determine what aid you qualify for.",
    expert: "Sophia Garcia",
    role: "Financial Aid Specialist",
  },
]

const resources = [
  {
    title: "Ultimate Application Checklist",
    description: "A comprehensive checklist to ensure you don't miss any application requirements.",
    type: "PDF",
    downloads: 15243,
  },
  {
    title: "Personal Statement Template",
    description: "A structured template to help you craft a compelling personal statement.",
    type: "DOCX",
    downloads: 12876,
  },
  {
    title: "Scholarship Database Spreadsheet",
    description: "Track and organize scholarship opportunities with this ready-to-use spreadsheet.",
    type: "XLSX",
    downloads: 9542,
  },
  {
    title: "Interview Preparation Guide",
    description: "Common interview questions and strategies for impressive responses.",
    type: "PDF",
    downloads: 8721,
  },
]

export default function StudyAdvicePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Study Advice</h1>
        <p className="text-gray-600">Expert guidance to help you navigate your educational journey</p>
      </div>

      {/* Search bar */}
      <div className="mb-8 flex rounded-lg border bg-white p-4 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input className="pl-9" placeholder="Search for advice articles..." />
        </div>
        <Button className="ml-2 bg-orange-500 hover:bg-orange-600">Search</Button>
      </div>

      {/* Featured articles */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Featured Articles</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                <div className="absolute left-3 top-3">
                  <Badge className="bg-orange-500">{article.category}</Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="mb-2 text-xl font-semibold">
                  <Link href={`/advice/articles/${article.id}`} className="hover:text-orange-500">
                    {article.title}
                  </Link>
                </h3>
                <p className="mb-4 text-gray-600">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-gray-50 px-5 py-3">
                <Link
                  href={`/advice/articles/${article.id}`}
                  className="text-sm font-medium text-orange-500 hover:text-orange-600"
                >
                  Read Article →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Main content with tabs */}
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6 grid w-full grid-cols-7 bg-transparent">
              <TabsTrigger value="all" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500">
                All
              </TabsTrigger>
              <TabsTrigger
                value="application"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Application
              </TabsTrigger>
              <TabsTrigger
                value="study"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Study Skills
              </TabsTrigger>
              <TabsTrigger
                value="life"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Student Life
              </TabsTrigger>
              <TabsTrigger
                value="career"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Career
              </TabsTrigger>
              <TabsTrigger
                value="scholarships"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Scholarships
              </TabsTrigger>
              <TabsTrigger
                value="international"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                International
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recentArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden">
                    <div className="relative h-40 w-full">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute left-3 top-3">
                        <Badge className="bg-orange-500">{article.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-2 font-semibold">
                        <Link href={`/advice/articles/${article.id}`} className="hover:text-orange-500">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="mb-3 text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline">Load More Articles</Button>
              </div>
            </TabsContent>

            {/* Other tab contents would be similar but filtered by category */}
            <TabsContent value="application" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recentArticles
                  .filter((article) => article.category === "Application Tips")
                  .map((article) => (
                    <Card key={article.id} className="overflow-hidden">
                      <div className="relative h-40 w-full">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute left-3 top-3">
                          <Badge className="bg-orange-500">{article.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="mb-2 font-semibold">
                          <Link href={`/advice/articles/${article.id}`} className="hover:text-orange-500">
                            {article.title}
                          </Link>
                        </h3>
                        <p className="mb-3 text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{article.date}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {recentArticles.filter((article) => article.category === "Application Tips").length === 0 && (
                <div className="mt-8 text-center text-gray-500">No articles found in this category.</div>
              )}
            </TabsContent>

            {/* Similar structure for other tabs */}
          </Tabs>

          {/* Expert Q&A section */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">Expert Q&A</h2>
            <div className="space-y-6">
              {expertQuestions.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold">{item.question}</h3>
                    <p className="mb-4 text-gray-700">{item.answer}</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-orange-100">
                        <User className="h-10 w-10 p-2 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-medium">{item.expert}</p>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline">View More Questions</Button>
            </div>
          </section>

          {/* Success Stories */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold">Student Success Stories</h2>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <StudentAvatar id={1} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold">From Community College to Ivy League</h3>
                  <p className="text-gray-500">By Jason Martinez, Transfer Student</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                "I never thought I'd be able to transfer from my local community college to an Ivy League university.
                The guidance I received from StudyPortal's advisors and resources was invaluable. They helped me
                navigate the complex transfer application process, craft a compelling personal statement, and prepare
                for interviews. Now I'm studying Computer Science at Cornell University, and I couldn't be happier with
                my educational journey."
              </p>
              <Link href="/advice/success-stories/1" className="font-medium text-orange-500 hover:text-orange-600">
                Read Full Story →
              </Link>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Categories */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/advice/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center justify-between hover:text-orange-500"
                  >
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <span>{category.name}</span>
                    </div>
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Downloadable Resources</h3>
            <ul className="space-y-4">
              {resources.map((resource, index) => (
                <li key={index} className="rounded-lg bg-gray-50 p-3">
                  <div className="mb-2 flex items-start justify-between">
                    <h4 className="font-medium">{resource.title}</h4>
                    <Badge variant="outline" className="ml-2 bg-gray-100">
                      {resource.type}
                    </Badge>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.downloads.toLocaleString()} downloads</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Get Weekly Advice</h3>
            <p className="mb-4 text-sm text-gray-600">
              Subscribe to our newsletter for the latest advice, tips, and resources.
            </p>
            <div className="space-y-3">
              <Input placeholder="Your email address" />
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Subscribe</Button>
            </div>
          </div>

          {/* Need personalized advice */}
          <div className="rounded-lg bg-orange-50 p-6">
            <h3 className="mb-2 text-lg font-semibold">Need Personalized Advice?</h3>
            <p className="mb-4 text-sm text-gray-700">
              Connect with our education advisors for personalized guidance tailored to your needs.
            </p>
            <Button className="w-full">Book a Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
