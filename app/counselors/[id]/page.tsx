import Link from "next/link"
import { MapPin, Calendar, MessageSquare, Star, Phone, Mail, Video, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StudentAvatar from "@/components/student-avatar"

export default function CounselorDetailsPage({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const counselor = {
    id: params.id,
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
    detailedBio:
      "Dr. Johnson began her career in education as a research scientist before transitioning to academic advising. Her unique background allows her to understand both the technical aspects of STEM programs and the admissions process from an insider's perspective. She has published numerous articles on graduate education and frequently speaks at international education conferences.",
    expertise: [
      "Graduate School Applications",
      "STEM Program Selection",
      "Scholarship Guidance",
      "International Student Advising",
      "Career Planning",
      "Research Opportunities",
      "PhD Application Strategy",
      "Fellowship Applications",
    ],
    education: [
      {
        degree: "PhD in Education",
        institution: "Harvard University",
        year: "2010",
      },
      {
        degree: "MS in Computer Science",
        institution: "MIT",
        year: "2005",
      },
      {
        degree: "BS in Mathematics",
        institution: "Stanford University",
        year: "2003",
      },
    ],
    certifications: [
      "Certified Educational Planner (CEP)",
      "International Association for College Admission Counseling (IACAC) Member",
      "National Association for College Admission Counseling (NACAC) Member",
    ],
    consultationTypes: [
      {
        type: "Initial Consultation",
        duration: "60 minutes",
        price: "$150",
        description: "Comprehensive assessment of your academic goals and program options",
      },
      {
        type: "Application Review",
        duration: "45 minutes",
        price: "$120",
        description: "Detailed review of your application materials and improvement suggestions",
      },
      {
        type: "Interview Preparation",
        duration: "30 minutes",
        price: "$80",
        description: "Mock interviews and personalized coaching for admission interviews",
      },
      {
        type: "Follow-up Session",
        duration: "30 minutes",
        price: "$75",
        description: "Ongoing support and guidance throughout your application process",
      },
    ],
    successStories: [
      {
        student: "Alex Chen",
        program: "PhD in Computer Science at MIT",
        story:
          "Dr. Johnson helped me identify the perfect research fit and craft a compelling research statement. Her insights into the MIT culture were invaluable.",
      },
      {
        student: "Maria Rodriguez",
        program: "MS in Bioengineering at Stanford",
        story:
          "With Dr. Johnson's guidance, I secured a full scholarship and found my ideal advisor. Her expertise in STEM applications made all the difference.",
      },
      {
        student: "David Kim",
        program: "PhD in Physics at Caltech",
        story:
          "Dr. Johnson's strategic approach to applications helped me get accepted to my top choice program with funding. Her mentorship was exceptional.",
      },
    ],
    testimonials: [
      {
        name: "Jennifer Liu",
        rating: 5,
        comment:
          "Dr. Johnson's expertise and personalized approach made my graduate school application process so much smoother. She helped me identify programs I never would have considered on my own.",
        program: "MS in Data Science",
        date: "October 2023",
      },
      {
        name: "Michael Brown",
        rating: 5,
        comment:
          "Exceptional guidance throughout the entire process. Dr. Johnson's insights into scholarship opportunities saved me thousands of dollars.",
        program: "PhD in Engineering",
        date: "September 2023",
      },
      {
        name: "Sofia Garcia",
        rating: 5,
        comment:
          "As an international student, I was overwhelmed by the application process. Dr. Johnson provided clear guidance and helped me navigate every step successfully.",
        program: "MS in Chemistry",
        date: "August 2023",
      },
    ],
    availability_calendar: [
      { date: "2024-01-15", time: "10:00 AM", available: true },
      { date: "2024-01-15", time: "2:00 PM", available: false },
      { date: "2024-01-16", time: "9:00 AM", available: true },
      { date: "2024-01-16", time: "11:00 AM", available: true },
      { date: "2024-01-17", time: "1:00 PM", available: true },
    ],
    faqs: [
      {
        question: "How far in advance should I schedule a consultation?",
        answer:
          "I recommend scheduling at least 2-3 weeks in advance, especially during peak application seasons (September-December). However, I do reserve some slots for urgent consultations.",
      },
      {
        question: "Do you provide written feedback after consultations?",
        answer:
          "Yes, I provide detailed written summaries after each consultation, including action items and recommended next steps. You'll receive this within 24 hours of our meeting.",
      },
      {
        question: "Can you help with scholarship applications?",
        answer:
          "I have extensive experience with scholarship applications and can help you identify opportunities, craft compelling essays, and prepare for scholarship interviews.",
      },
      {
        question: "Do you offer package deals for multiple sessions?",
        answer:
          "Yes, I offer discounted packages for students who need ongoing support throughout their application process. Contact me for custom package pricing.",
      },
    ],
  }

  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Link href="/counselors" className="text-sm text-gray-500 hover:text-orange-500">
            Counselors
          </Link>
          <span className="text-sm text-gray-500">/</span>
          <span className="text-sm text-gray-500">{counselor.name}</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="mb-8 flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full md:mb-0 md:mr-6">
              <StudentAvatar id={Number.parseInt(params.id)} />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{counselor.name}</h1>
              <p className="text-xl text-gray-600 mb-2">{counselor.title}</p>
              <div className="flex items-center justify-center gap-1 mb-4 md:justify-start">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{counselor.rating}</span>
                <span className="text-gray-500">({counselor.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {counselor.languages.map((language, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-100">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Tabs defaultValue="about" className="mb-8">
            <TabsList className="mb-6 grid w-full grid-cols-5 bg-transparent">
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="expertise"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Expertise
              </TabsTrigger>
              <TabsTrigger
                value="services"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Services
              </TabsTrigger>
              <TabsTrigger
                value="testimonials"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Testimonials
              </TabsTrigger>
              <TabsTrigger value="faq" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500">
                FAQ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-0">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">About Dr. Johnson</h2>
                    <p className="text-gray-700 mb-4">{counselor.bio}</p>
                    <p className="text-gray-700">{counselor.detailedBio}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    <div className="space-y-4">
                      {counselor.education.map((edu, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-orange-500 mt-1" />
                          <div>
                            <h3 className="font-semibold">{edu.degree}</h3>
                            <p className="text-gray-600">{edu.institution}</p>
                            <p className="text-sm text-gray-500">{edu.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
                    <ul className="space-y-2">
                      {counselor.certifications.map((cert, index) => (
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
                            className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5"
                          >
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
                    <div className="space-y-6">
                      {counselor.successStories.map((story, index) => (
                        <div key={index} className="border-l-4 border-orange-500 pl-4">
                          <h3 className="font-semibold mb-1">{story.student}</h3>
                          <p className="text-orange-500 text-sm mb-2">{story.program}</p>
                          <p className="text-gray-700 italic">"{story.story}"</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="expertise" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Areas of Expertise</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {counselor.expertise.map((area, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                        <Award className="h-5 w-5 text-orange-500" />
                        <span className="font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="mt-0">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Consultation Services</h2>
                {counselor.consultationTypes.map((service, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{service.type}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-orange-500">{service.price}</p>
                          <p className="text-sm text-gray-500">{service.duration}</p>
                        </div>
                      </div>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Book This Service</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="testimonials" className="mt-0">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Client Testimonials</h2>
                {counselor.testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.program}</p>
                        </div>
                        <p className="text-sm text-gray-500">{testimonial.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {counselor.faqs.map((faq, index) => (
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
              <h3 className="text-lg font-semibold mb-4">Counselor Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{counselor.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-gray-600">{counselor.availability}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-gray-600">{counselor.experience}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Specialization</p>
                    <p className="text-gray-600">{counselor.specialization}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Book a Consultation</h3>
              <div className="space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <Video className="mr-2 h-4 w-4" />
                  Video Consultation
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Phone Consultation
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Consultation
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Total Students Helped:</span>
                  <span className="font-medium">2,500+</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate:</span>
                  <span className="font-medium">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Rating:</span>
                  <span className="font-medium">{counselor.rating}/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Related Counselors</h3>
              <div className="space-y-4">
                <Link href="/counselors/2" className="block hover:text-orange-500">
                  <h4 className="font-medium">Michael Chen</h4>
                  <p className="text-sm text-gray-600">International Student Advisor</p>
                </Link>
                <Link href="/counselors/3" className="block hover:text-orange-500">
                  <h4 className="font-medium">Dr. Emily Rodriguez</h4>
                  <p className="text-sm text-gray-600">Medical School Specialist</p>
                </Link>
                <Link href="/counselors/4" className="block hover:text-orange-500">
                  <h4 className="font-medium">James Wilson</h4>
                  <p className="text-sm text-gray-600">Arts & Humanities Advisor</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
