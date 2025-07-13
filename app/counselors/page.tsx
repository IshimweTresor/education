import { Search, Filter, MapPin, Calendar, MessageSquare, Star, Phone, Mail, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import StudentAvatar from "@/components/student-avatar"

const counselors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Senior Enrollment Counselor",
    specialization: "Graduate Programs, STEM Fields",
    experience: "12 years",
    languages: ["English", "Spanish"],
    location: "New York, United States",
    availability: "Mon-Fri, 9 AM - 5 PM EST",
    rating: 4.9,
    reviews: 124,
    bio: "Dr. Sarah Johnson has helped thousands of students navigate the complex graduate school application process, particularly in STEM fields. With a PhD in Education and previous experience as an admissions officer at MIT, she provides expert guidance on program selection, application strategy, and scholarship opportunities.",
    expertise: [
      "Graduate School Applications",
      "STEM Program Selection",
      "Scholarship Guidance",
      "International Student Advising",
      "Career Planning",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "International Student Advisor",
    specialization: "Undergraduate Programs, Business & Economics",
    experience: "8 years",
    languages: ["English", "Mandarin", "Cantonese"],
    location: "San Francisco, United States",
    availability: "Mon-Sat, 8 AM - 4 PM PST",
    rating: 4.8,
    reviews: 98,
    bio: "Michael Chen specializes in helping international students navigate the U.S. education system. With experience working at university international offices and a background in business education, Michael provides comprehensive support for program selection, visa applications, cultural adjustment, and career planning.",
    expertise: [
      "International Student Admissions",
      "Visa Application Support",
      "Business School Selection",
      "Cultural Transition Guidance",
      "Financial Aid for International Students",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Medical School Admissions Specialist",
    specialization: "Medical & Health Sciences Programs",
    experience: "15 years",
    languages: ["English", "Spanish"],
    location: "Chicago, United States",
    availability: "Tue-Sat, 10 AM - 6 PM CST",
    rating: 4.9,
    reviews: 156,
    bio: "Dr. Rodriguez is a former medical school admissions committee member with extensive experience guiding pre-med students through the competitive application process. She provides strategic advice on school selection, MCAT preparation, personal statement development, and interview coaching.",
    expertise: [
      "Medical School Applications",
      "MCAT Preparation Strategy",
      "Personal Statement Review",
      "Interview Preparation",
      "Pre-med Course Planning",
    ],
    featured: true,
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Arts & Humanities Advisor",
    specialization: "Liberal Arts, Fine Arts, Humanities",
    experience: "10 years",
    languages: ["English", "French"],
    location: "Boston, United States",
    availability: "Mon-Fri, 11 AM - 7 PM EST",
    rating: 4.7,
    reviews: 87,
    bio: "James Wilson specializes in advising students pursuing degrees in arts, humanities, and liberal arts. With a background in comparative literature and experience as an admissions counselor at liberal arts colleges, James helps students find programs that align with their creative and intellectual interests.",
    expertise: [
      "Liberal Arts College Selection",
      "Portfolio Development",
      "Creative Writing Programs",
      "Study Abroad Opportunities",
      "Interdisciplinary Programs",
    ],
    featured: false,
  },
  {
    id: 5,
    name: "Aisha Patel",
    title: "Engineering & Technology Specialist",
    specialization: "Engineering, Computer Science, Technology",
    experience: "9 years",
    languages: ["English", "Hindi", "Gujarati"],
    location: "Remote (Global)",
    availability: "Flexible hours, by appointment",
    rating: 4.8,
    reviews: 112,
    bio: "Aisha Patel combines her engineering background with extensive knowledge of technology programs worldwide to help students find the best fit for their educational goals. She specializes in guiding students through the application process for competitive engineering and computer science programs.",
    expertise: [
      "Engineering Program Selection",
      "Computer Science Specializations",
      "Technical University Applications",
      "Research Opportunity Guidance",
      "Women in STEM Support",
    ],
    featured: false,
  },
]

export default function CounselorsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Enrollment Counselors</h1>
        <p className="text-gray-600">
          Connect with expert advisors who can guide you through every step of your educational journey
        </p>
      </div>

      {/* Search and filter bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input className="pl-9" placeholder="Search counselors..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Specialization" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Specializations</SelectItem>
            <SelectItem value="undergraduate">Undergraduate</SelectItem>
            <SelectItem value="graduate">Graduate</SelectItem>
            <SelectItem value="medical">Medical & Health</SelectItem>
            <SelectItem value="business">Business & Economics</SelectItem>
            <SelectItem value="engineering">Engineering & Technology</SelectItem>
            <SelectItem value="arts">Arts & Humanities</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-languages">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-languages">All Languages</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="spanish">Spanish</SelectItem>
            <SelectItem value="mandarin">Mandarin</SelectItem>
            <SelectItem value="french">French</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
          </SelectContent>
        </Select>
        <Button className="gap-2 bg-orange-500 hover:bg-orange-600">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-6 grid w-full grid-cols-4 bg-transparent">
          <TabsTrigger value="all" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500">
            All Counselors
          </TabsTrigger>
          <TabsTrigger
            value="undergraduate"
            className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
          >
            Undergraduate
          </TabsTrigger>
          <TabsTrigger
            value="graduate"
            className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
          >
            Graduate
          </TabsTrigger>
          <TabsTrigger
            value="international"
            className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
          >
            International
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          {/* Featured counselors */}
          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-semibold">Featured Counselors</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {counselors
                .filter((counselor) => counselor.featured)
                .map((counselor) => (
                  <Card key={counselor.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="mb-4 flex flex-col items-center text-center">
                        <div className="relative mb-3 h-24 w-24 overflow-hidden rounded-full">
                          <StudentAvatar id={counselor.id} />
                        </div>
                        <h3 className="text-xl font-semibold">{counselor.name}</h3>
                        <p className="text-gray-600">{counselor.title}</p>
                        <div className="mt-1 flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{counselor.rating}</span>
                          <span className="text-gray-500">({counselor.reviews} reviews)</span>
                        </div>
                      </div>

                      <div className="mb-4 space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                          <span>{counselor.location}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                          <span>{counselor.availability}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="mb-2 font-medium">Specialization</h4>
                        <p className="text-sm text-gray-700">{counselor.specialization}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="mb-2 font-medium">Languages</h4>
                        <div className="flex flex-wrap gap-2">
                          {counselor.languages.map((language, index) => (
                            <Badge key={index} variant="outline" className="bg-gray-100">
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button asChild className="bg-orange-500 hover:bg-orange-600">
                          <Link href={`/counselors/${counselor.id}`}>View Profile</Link>
                        </Button>
                        <Button variant="outline">Schedule Consultation</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All counselors */}
          <h2 className="mb-6 text-2xl font-semibold">All Counselors</h2>
          <div className="space-y-4">
            {counselors
              .filter((counselor) => !counselor.featured)
              .map((counselor) => (
                <Card key={counselor.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row">
                      <div className="flex flex-col items-center text-center md:w-1/4">
                        <div className="relative mb-3 h-24 w-24 overflow-hidden rounded-full">
                          <StudentAvatar id={counselor.id} />
                        </div>
                        <h3 className="text-xl font-semibold">{counselor.name}</h3>
                        <p className="text-gray-600">{counselor.title}</p>
                        <div className="mt-1 flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{counselor.rating}</span>
                          <span className="text-gray-500">({counselor.reviews} reviews)</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="mb-4 text-gray-700">{counselor.bio}</p>

                        <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-3">
                          <div className="flex items-start gap-2">
                            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                            <div>
                              <p className="font-medium">Location</p>
                              <p className="text-gray-600">{counselor.location}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                            <div>
                              <p className="font-medium">Availability</p>
                              <p className="text-gray-600">{counselor.availability}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <MessageSquare className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                            <div>
                              <p className="font-medium">Languages</p>
                              <p className="text-gray-600">{counselor.languages.join(", ")}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="mb-2 font-medium">Areas of Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {counselor.expertise.slice(0, 3).map((area, index) => (
                              <Badge key={index} variant="outline" className="bg-gray-100">
                                {area}
                              </Badge>
                            ))}
                            {counselor.expertise.length > 3 && (
                              <Badge variant="outline" className="bg-gray-100">
                                +{counselor.expertise.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/counselors/${counselor.id}`}>View Profile</Link>
                          </Button>
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                            Schedule Consultation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        {/* Other tab contents would be similar but filtered by specialization */}
      </Tabs>

      {/* Consultation options */}
      <div className="mt-12 rounded-lg bg-orange-50 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Consultation Options</h2>
        <p className="mb-6 text-gray-700">
          Our enrollment counselors offer flexible consultation options to fit your schedule and preferences.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Video className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Video Consultation</h3>
              <p className="mb-4 text-sm text-gray-600">
                Meet face-to-face with your counselor via video call for personalized guidance and advice.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-orange-500">From $50 / 30 min</span>
                <Button variant="outline" size="sm">
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Phone className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Phone Consultation</h3>
              <p className="mb-4 text-sm text-gray-600">
                Speak directly with a counselor over the phone to discuss your educational goals and options.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-orange-500">From $40 / 30 min</span>
                <Button variant="outline" size="sm">
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Written Consultation</h3>
              <p className="mb-4 text-sm text-gray-600">
                Receive detailed written advice and recommendations based on your specific questions and needs.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-orange-500">From $30 / inquiry</span>
                <Button variant="outline" size="sm">
                  Submit Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-semibold">What Our Students Say</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <StudentAvatar id={10} />
                </div>
                <div>
                  <h4 className="font-medium">Alex Thompson</h4>
                  <p className="text-sm text-gray-500">Harvard University, Class of 2023</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "Working with Dr. Johnson was the best decision I made during my graduate school application process.
                Her insights into what admissions committees look for and her guidance on my personal statement were
                invaluable. I got accepted to my top choice program!"
              </p>
              <div className="mt-3 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <StudentAvatar id={11} />
                </div>
                <div>
                  <h4 className="font-medium">Mei Lin</h4>
                  <p className="text-sm text-gray-500">Stanford University, Class of 2024</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "As an international student, I was overwhelmed by the U.S. college application process. Michael Chen
                helped me navigate everything from selecting the right programs to preparing for interviews. His
                cultural insights and personalized approach made all the difference."
              </p>
              <div className="mt-3 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
