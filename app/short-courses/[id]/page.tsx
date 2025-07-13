import Link from "next/link"
import { Clock, Calendar, Award, Users, Globe, BookOpen, Play, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProgramImage from "@/components/program-image"

export default function ShortCourseDetailsPage({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const course = {
    id: params.id,
    title: "Data Science Fundamentals",
    provider: "MIT Professional Education",
    duration: "8 weeks",
    format: "Online, Self-paced",
    price: "$1,500",
    originalPrice: "$2,000",
    startDate: "Flexible start dates",
    certificate: "Professional Certificate",
    level: "Beginner to Intermediate",
    category: "Technology",
    rating: 4.8,
    reviews: 1247,
    enrolled: 15420,
    description:
      "Learn the fundamentals of data science, including data analysis, visualization, and machine learning. This course provides a solid foundation for those looking to enter the field of data science or enhance their analytical skills.",
    detailedDescription:
      "This comprehensive course covers all essential aspects of data science, from basic statistical concepts to advanced machine learning algorithms. You'll work with real-world datasets and learn to use industry-standard tools like Python, R, and SQL. The course is designed for professionals looking to transition into data science or enhance their current analytical capabilities.",
    skills: [
      "Python Programming",
      "Data Analysis",
      "Statistical Methods",
      "Data Visualization",
      "Machine Learning Basics",
      "SQL Database Queries",
      "Pandas and NumPy",
      "Matplotlib and Seaborn",
    ],
    prerequisites: [
      "Basic mathematics knowledge",
      "Familiarity with computers",
      "No prior programming experience required",
    ],
    curriculum: [
      {
        week: 1,
        title: "Introduction to Data Science",
        topics: [
          "What is Data Science?",
          "Data Science Workflow",
          "Setting up Python Environment",
          "Introduction to Jupyter Notebooks",
        ],
        duration: "6 hours",
      },
      {
        week: 2,
        title: "Python for Data Science",
        topics: ["Python Basics", "Data Types and Structures", "Control Flow", "Functions and Modules"],
        duration: "8 hours",
      },
      {
        week: 3,
        title: "Data Manipulation with Pandas",
        topics: ["Introduction to Pandas", "DataFrames and Series", "Data Cleaning", "Data Transformation"],
        duration: "10 hours",
      },
      {
        week: 4,
        title: "Data Visualization",
        topics: [
          "Matplotlib Basics",
          "Seaborn for Statistical Plots",
          "Interactive Visualizations",
          "Best Practices in Data Viz",
        ],
        duration: "8 hours",
      },
      {
        week: 5,
        title: "Statistical Analysis",
        topics: [
          "Descriptive Statistics",
          "Probability Distributions",
          "Hypothesis Testing",
          "Correlation and Regression",
        ],
        duration: "10 hours",
      },
      {
        week: 6,
        title: "Introduction to Machine Learning",
        topics: ["ML Concepts and Types", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
        duration: "12 hours",
      },
      {
        week: 7,
        title: "Practical Machine Learning",
        topics: ["Linear Regression", "Classification Algorithms", "Clustering", "Feature Engineering"],
        duration: "12 hours",
      },
      {
        week: 8,
        title: "Capstone Project",
        topics: [
          "Project Planning",
          "Data Collection and Cleaning",
          "Analysis and Modeling",
          "Presentation and Reporting",
        ],
        duration: "15 hours",
      },
    ],
    instructors: [
      {
        name: "Dr. Jennifer Smith",
        title: "Senior Data Scientist at Google",
        bio: "PhD in Statistics with 10+ years in data science",
        image: 1,
      },
      {
        name: "Prof. Michael Chen",
        title: "MIT Professor of Computer Science",
        bio: "Leading researcher in machine learning and AI",
        image: 2,
      },
    ],
    features: [
      "Self-paced learning",
      "Hands-on projects",
      "Real-world datasets",
      "Industry-standard tools",
      "Certificate of completion",
      "Lifetime access to materials",
      "Community forum access",
      "Career guidance",
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Marketing Analyst",
        rating: 5,
        comment:
          "This course completely changed my career trajectory. The practical approach and real-world projects gave me the confidence to transition into data science.",
      },
      {
        name: "David Kim",
        role: "Business Intelligence Developer",
        rating: 5,
        comment:
          "Excellent course structure and content. The instructors are knowledgeable and the projects are very relevant to industry needs.",
      },
      {
        name: "Maria Rodriguez",
        role: "Data Analyst",
        rating: 4,
        comment:
          "Great introduction to data science. The course covers all the fundamentals and provides a solid foundation for further learning.",
      },
    ],
    faqs: [
      {
        question: "Do I need prior programming experience?",
        answer:
          "No, this course is designed for beginners. We start with Python basics and gradually build up to more advanced concepts.",
      },
      {
        question: "How much time should I dedicate per week?",
        answer:
          "We recommend 8-12 hours per week, but since it's self-paced, you can adjust according to your schedule.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes, you'll receive a professional certificate from MIT Professional Education upon successful completion.",
      },
      {
        question: "Is there job placement assistance?",
        answer:
          "While we don't guarantee job placement, we provide career guidance, resume review, and access to our alumni network.",
      },
    ],
    type: "computer",
  }

  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Link href="/short-courses" className="text-sm text-gray-500 hover:text-orange-500">
            Short Courses
          </Link>
          <span className="text-sm text-gray-500">/</span>
          <span className="text-sm text-gray-500">{course.title}</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-600">{course.provider}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-lg">
            <ProgramImage id={Number.parseInt(params.id)} type={course.type as any} />
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-orange-500">{course.category}</Badge>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-6 grid w-full grid-cols-5 bg-transparent">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="curriculum"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Curriculum
              </TabsTrigger>
              <TabsTrigger
                value="instructors"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Instructors
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger value="faq" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500">
                FAQ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Course Description</h2>
                    <p className="text-gray-700 mb-4">{course.description}</p>
                    <p className="text-gray-700">{course.detailedDescription}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
                    <div className="grid gap-3 md:grid-cols-2">
                      {course.skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
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
                            className="h-5 w-5 flex-shrink-0 text-orange-500"
                          >
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
                    <ul className="space-y-2">
                      {course.prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                          <span>{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Course Features</h2>
                    <div className="grid gap-3 md:grid-cols-2">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Award className="h-5 w-5 flex-shrink-0 text-orange-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Course Curriculum</h2>
                  <div className="space-y-6">
                    {course.curriculum.map((week, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold">
                            Week {week.week}: {week.title}
                          </h3>
                          <Badge variant="outline" className="bg-gray-100">
                            {week.duration}
                          </Badge>
                        </div>
                        <ul className="space-y-1">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center gap-2 text-gray-600">
                              <Play className="h-4 w-4 text-orange-500" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="instructors" className="mt-0">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Meet Your Instructors</h2>
                {course.instructors.map((instructor, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative h-20 w-20 overflow-hidden rounded-full">
                          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                            <Users className="h-8 w-8 text-gray-400" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                          <p className="text-orange-500 font-medium mb-2">{instructor.title}</p>
                          <p className="text-gray-600">{instructor.bio}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-0">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500">{course.rating}</div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`h-5 w-5 ${
                            star <= Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        >
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">{course.reviews} reviews</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600">
                      Based on {course.reviews} reviews from students who completed this course
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {course.testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-1 mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`h-4 w-4 ${
                                star <= testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            >
                              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-3">"{testimonial.comment}"</p>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {course.faqs.map((faq, index) => (
                      <div key={index}>
                        <h3 className="font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">{course.price}</div>
                {course.originalPrice && (
                  <div className="text-lg text-gray-500 line-through">{course.originalPrice}</div>
                )}
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-gray-600">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-medium">Start Date</p>
                    <p className="text-gray-600">{course.startDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-medium">Certificate</p>
                    <p className="text-gray-600">{course.certificate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-medium">Format</p>
                    <p className="text-gray-600">{course.format}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Enroll Now</Button>
                <Button variant="outline" className="w-full">
                  Add to Wishlist
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Course Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Students Enrolled:</span>
                  <span className="font-medium">{course.enrolled.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Rating:</span>
                  <span className="font-medium">{course.rating}/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Reviews:</span>
                  <span className="font-medium">{course.reviews}</span>
                </div>
                <div className="flex justify-between">
                  <span>Level:</span>
                  <span className="font-medium">{course.level}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Download Resources</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Course Syllabus
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Sample Materials
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Prerequisites Guide
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Related Courses</h3>
              <div className="space-y-4">
                <Link href="/short-courses/2" className="block hover:text-orange-500">
                  <h4 className="font-medium">Advanced Machine Learning</h4>
                  <p className="text-sm text-gray-600">$2,200 • 12 weeks</p>
                </Link>
                <Link href="/short-courses/3" className="block hover:text-orange-500">
                  <h4 className="font-medium">Python for Data Analysis</h4>
                  <p className="text-sm text-gray-600">$800 • 6 weeks</p>
                </Link>
                <Link href="/short-courses/4" className="block hover:text-orange-500">
                  <h4 className="font-medium">SQL for Data Science</h4>
                  <p className="text-sm text-gray-600">$600 • 4 weeks</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
