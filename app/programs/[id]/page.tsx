import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  Globe,
  GraduationCap,
  MapPin,
  DollarSign,
  BookOpen,
  Users,
  Award,
  Building,
} from "lucide-react"

export default function ProgramDetailsPage({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const program = {
    id: params.id,
    title: "Bachelor of Computer Science",
    university: "Massachusetts Institute of Technology",
    location: "Cambridge, United States",
    duration: "4 years",
    format: "Full-time",
    language: "English",
    tuition: "$53,790 per year",
    applicationDeadline: "December 15, 2023",
    startDate: "September 2024",
    description:
      "The Bachelor of Computer Science program at MIT provides students with a strong foundation in computer science principles and practices. Students will learn programming, algorithms, data structures, computer systems, and more. The program emphasizes hands-on learning and research opportunities.",
    highlights: [
      "World-class faculty with industry experience",
      "State-of-the-art computing facilities",
      "Opportunities for research and internships",
      "Strong industry connections",
      "Global alumni network",
    ],
    admissionRequirements: [
      "High school diploma or equivalent",
      "Strong academic record, particularly in mathematics and science",
      "SAT/ACT scores",
      "TOEFL/IELTS for international students",
      "Personal statement",
      "Letters of recommendation",
    ],
    curriculum: [
      {
        year: "Year 1",
        courses: [
          "Introduction to Computer Science",
          "Discrete Mathematics",
          "Calculus I & II",
          "Introduction to Algorithms",
          "Physics I",
          "Academic Writing",
        ],
      },
      {
        year: "Year 2",
        courses: [
          "Data Structures",
          "Computer Systems",
          "Linear Algebra",
          "Probability and Statistics",
          "Theory of Computation",
          "Software Engineering",
        ],
      },
      {
        year: "Year 3",
        courses: [
          "Artificial Intelligence",
          "Database Systems",
          "Computer Networks",
          "Operating Systems",
          "Human-Computer Interaction",
          "Electives",
        ],
      },
      {
        year: "Year 4",
        courses: [
          "Capstone Project",
          "Machine Learning",
          "Computer Security",
          "Ethics in Computing",
          "Advanced Electives",
        ],
      },
    ],
    careerProspects: [
      "Software Developer",
      "Data Scientist",
      "Systems Analyst",
      "Database Administrator",
      "Network Engineer",
      "AI/ML Engineer",
      "Cybersecurity Specialist",
    ],
    universityRanking: {
      world: "#1 in Computer Science",
      national: "#1 in the United States",
    },
    facilities: [
      "Computer Science Research Labs",
      "High-Performance Computing Center",
      "Innovation Hub",
      "Digital Library",
      "Student Collaboration Spaces",
    ],
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to $30,000 per year",
        eligibility: "Based on academic excellence",
      },
      {
        name: "Diversity in Computing Scholarship",
        amount: "Up to $25,000 per year",
        eligibility: "For underrepresented groups in computer science",
      },
      {
        name: "International Student Scholarship",
        amount: "Up to $20,000 per year",
        eligibility: "For outstanding international applicants",
      },
    ],
    testimonials: [
      {
        name: "Alex Johnson",
        quote:
          "The Computer Science program at MIT challenged me in ways I never expected. The professors are incredibly knowledgeable and supportive, and the opportunities for research are unparalleled.",
        graduation: "Class of 2022",
        currentRole: "Software Engineer at Google",
      },
      {
        name: "Sarah Chen",
        quote:
          "Studying Computer Science at MIT opened doors I didn't even know existed. The curriculum is rigorous but rewarding, and the network you build here is invaluable.",
        graduation: "Class of 2021",
        currentRole: "AI Researcher at OpenAI",
      },
    ],
  }

  return (
    <div className="container px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Link href="/programs" className="text-sm text-gray-500 hover:text-orange-500">
              Programs
            </Link>
            <span className="text-sm text-gray-500">/</span>
            <span className="text-sm text-gray-500">Computer Science</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold">{program.title}</h1>
          <div className="mt-1 flex items-center gap-2">
            <Link href="/universities/mit" className="font-medium text-orange-500 hover:underline">
              {program.university}
            </Link>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              {program.location}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline">Download Brochure</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">Apply Now</Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_350px]">
        <div>
          {/* Main content */}
          <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=600&width=1200" alt={program.title} fill className="object-cover" />
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-orange-500">Top Ranked</Badge>
            </div>
          </div>

          <Tabs defaultValue="overview">
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
                value="admission"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Admission
              </TabsTrigger>
              <TabsTrigger
                value="careers"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Careers
              </TabsTrigger>
              <TabsTrigger
                value="university"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                University
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 text-2xl font-semibold">Program Overview</h2>
                <p className="mb-6 text-gray-700">{program.description}</p>

                <h3 className="mb-3 text-xl font-semibold">Program Highlights</h3>
                <ul className="mb-6 grid gap-2 sm:grid-cols-2">
                  {program.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
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
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mb-3 text-xl font-semibold">Student Testimonials</h3>
                <div className="mb-6 grid gap-4 sm:grid-cols-2">
                  {program.testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <p className="mb-4 italic text-gray-700">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.graduation}</p>
                          <p className="text-sm text-gray-500">{testimonial.currentRole}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="mt-0">
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 text-2xl font-semibold">Program Curriculum</h2>
                <p className="mb-6 text-gray-700">
                  The curriculum is designed to provide a strong foundation in computer science principles and
                  practices, with opportunities for specialization in later years.
                </p>

                <div className="space-y-6">
                  {program.curriculum.map((year, index) => (
                    <div key={index}>
                      <h3 className="mb-3 text-xl font-semibold">{year.year}</h3>
                      <ul className="grid gap-2 rounded-lg bg-gray-50 p-4">
                        {year.courses.map((course, courseIndex) => (
                          <li key={courseIndex} className="flex items-start gap-2">
                            <BookOpen className="h-5 w-5 flex-shrink-0 text-orange-500" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="admission" className="mt-0">
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 text-2xl font-semibold">Admission Requirements</h2>
                <ul className="mb-6 space-y-2">
                  {program.admissionRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2">
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
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mb-3 text-xl font-semibold">Scholarships</h3>
                <div className="mb-6 space-y-4">
                  {program.scholarships.map((scholarship, index) => (
                    <div key={index} className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-1 font-semibold">{scholarship.name}</h4>
                      <p className="mb-1 text-orange-500">{scholarship.amount}</p>
                      <p className="text-sm text-gray-700">Eligibility: {scholarship.eligibility}</p>
                    </div>
                  ))}
                </div>

                <h3 className="mb-3 text-xl font-semibold">Application Process</h3>
                <ol className="mb-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-500">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Create an account</h4>
                      <p className="text-sm text-gray-700">Register on the university's application portal</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-500">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Complete the application form</h4>
                      <p className="text-sm text-gray-700">Fill in your personal and academic information</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-500">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Submit required documents</h4>
                      <p className="text-sm text-gray-700">
                        Upload transcripts, test scores, personal statement, and letters of recommendation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-500">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Pay application fee</h4>
                      <p className="text-sm text-gray-700">Submit the non-refundable application fee</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-500">
                      5
                    </div>
                    <div>
                      <h4 className="font-medium">Interview (if required)</h4>
                      <p className="text-sm text-gray-700">
                        Some applicants may be invited for an interview as part of the selection process
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="rounded-lg bg-orange-50 p-4">
                  <h4 className="mb-2 font-semibold">Ready to apply?</h4>
                  <p className="mb-4 text-gray-700">
                    Applications for the next intake are now open. Make sure to submit your application before the
                    deadline to be considered for admission and scholarships.
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="careers" className="mt-0">
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 text-2xl font-semibold">Career Prospects</h2>
                <p className="mb-6 text-gray-700">
                  Graduates of the Computer Science program at MIT are highly sought after by top employers in the
                  technology industry and beyond. Our alumni work in a variety of roles across different sectors.
                </p>

                <h3 className="mb-3 text-xl font-semibold">Common Career Paths</h3>
                <div className="mb-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {program.careerProspects.map((career, index) => (
                    <div key={index} className="rounded-lg bg-gray-50 p-4 text-center">
                      <GraduationCap className="mx-auto mb-2 h-8 w-8 text-orange-500" />
                      <p className="font-medium">{career}</p>
                    </div>
                  ))}
                </div>

                <h3 className="mb-3 text-xl font-semibold">Employment Statistics</h3>
                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-orange-50 p-4 text-center">
                    <p className="text-3xl font-bold text-orange-500">98%</p>
                    <p className="text-sm text-gray-700">Employment Rate</p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4 text-center">
                    <p className="text-3xl font-bold text-orange-500">$120K</p>
                    <p className="text-sm text-gray-700">Average Starting Salary</p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4 text-center">
                    <p className="text-3xl font-bold text-orange-500">500+</p>
                    <p className="text-sm text-gray-700">Partner Companies</p>
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-semibold">Top Employers</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                  {["Google", "Microsoft", "Apple", "Amazon", "Meta"].map((employer, index) => (
                    <div key={index} className="flex h-20 items-center justify-center rounded-lg border p-4">
                      <p className="font-medium">{employer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="university" className="mt-0">
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 text-2xl font-semibold">About the University</h2>
                <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                  <div className="relative h-40 w-full sm:h-auto sm:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="University Campus"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="mb-4 text-gray-700">
                      Massachusetts Institute of Technology (MIT) is a private research university in Cambridge,
                      Massachusetts. Founded in 1861, MIT has played a key role in the development of modern technology
                      and science, and is known for its innovation and academic strength.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-orange-500" />
                        <span className="text-sm">{program.universityRanking.world}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-orange-500" />
                        <span className="text-sm">{program.universityRanking.national}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-orange-500" />
                        <span className="text-sm">11,000+ Students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-orange-500" />
                        <span className="text-sm">130+ Countries Represented</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-semibold">Campus Facilities</h3>
                <ul className="mb-6 grid gap-2 sm:grid-cols-2">
                  {program.facilities.map((facility, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Building className="h-5 w-5 flex-shrink-0 text-orange-500" />
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold">Virtual Campus Tour</h4>
                  <p className="mb-4 text-sm text-gray-700">
                    Explore the MIT campus from anywhere in the world with our interactive virtual tour.
                  </p>
                  <Button variant="outline" className="w-full">
                    Take Virtual Tour
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Program Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 text-orange-500" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-gray-600">{program.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 flex-shrink-0 text-orange-500" />
                  <div>
                    <p className="font-medium">Format</p>
                    <p className="text-sm text-gray-600">{program.format}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 flex-shrink-0 text-orange-500" />
                  <div>
                    <p className="font-medium">Language</p>
                    <p className="text-sm text-gray-600">{program.language}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 flex-shrink-0 text-orange-500" />
                  <div>
                    <p className="font-medium">Tuition</p>
                    <p className="text-sm text-gray-600">{program.tuition}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 flex-shrink-0 text-orange-500" />
                  <div>
                    <p className="font-medium">Application Deadline</p>
                    <p className="text-sm text-gray-600">{program.applicationDeadline}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 flex-shrink-0 text-orange-500" />
                  <div>
                    <p className="font-medium">Start Date</p>
                    <p className="text-sm text-gray-600">{program.startDate}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                <Button variant="outline" className="w-full">
                  Request Information
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Have Questions?</h3>
              <p className="mb-4 text-sm text-gray-600">
                Our advisors are here to help you with any questions about this program.
              </p>
              <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2">
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
                    className="h-4 w-4 text-orange-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-sm">+1 (617) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
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
                    className="h-4 w-4 text-orange-500"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-sm">admissions@mit.edu</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Schedule a Call
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Similar Programs</h3>
              <div className="space-y-4">
                <Link href="/programs/2" className="flex gap-3 hover:text-orange-500">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Program thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Computer Engineering</h4>
                    <p className="text-sm text-gray-600">Stanford University</p>
                  </div>
                </Link>
                <Link href="/programs/3" className="flex gap-3 hover:text-orange-500">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Program thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Data Science</h4>
                    <p className="text-sm text-gray-600">Harvard University</p>
                  </div>
                </Link>
                <Link href="/programs/4" className="flex gap-3 hover:text-orange-500">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Program thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Artificial Intelligence</h4>
                    <p className="text-sm text-gray-600">Carnegie Mellon University</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
