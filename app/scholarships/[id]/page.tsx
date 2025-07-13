import Link from "next/link"
import { Calendar, DollarSign, GraduationCap, Globe, Award, Clock, Users, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ScholarshipDetailsPage({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const scholarship = {
    id: params.id,
    title: "Global Excellence Scholarship",
    organization: "International Education Foundation",
    amount: "$25,000",
    deadline: "December 15, 2023",
    eligibility: "International students with outstanding academic achievements",
    level: "Undergraduate, Graduate",
    countries: "All countries",
    fields: "All fields of study",
    description:
      "The Global Excellence Scholarship recognizes exceptional academic achievement and leadership potential in international students. Recipients will receive financial support to pursue their studies at partner universities worldwide. This prestigious scholarship aims to foster global understanding and academic excellence by supporting the brightest minds from around the world.",
    detailedDescription:
      "Established in 2010, the Global Excellence Scholarship has supported over 5,000 students from 120 countries in pursuing their educational dreams. The scholarship not only provides financial assistance but also includes mentorship opportunities, networking events, and career development workshops. Recipients become part of a global alumni network that spans various industries and sectors.",
    requirements: [
      "Minimum GPA of 3.7 or equivalent",
      "Demonstrated leadership experience",
      "Two letters of recommendation",
      "Personal statement (500-750 words)",
      "Academic transcripts",
      "Proof of English proficiency (if applicable)",
      "Financial need documentation",
    ],
    benefits: [
      "$25,000 annual scholarship",
      "Mentorship program",
      "Access to exclusive networking events",
      "Career development workshops",
      "Alumni network access",
      "Research opportunities",
      "Conference attendance support",
    ],
    applicationProcess: [
      {
        step: 1,
        title: "Online Application",
        description: "Complete the online application form with personal and academic information",
        deadline: "November 1, 2023",
      },
      {
        step: 2,
        title: "Document Submission",
        description: "Upload all required documents including transcripts and recommendation letters",
        deadline: "November 15, 2023",
      },
      {
        step: 3,
        title: "Essay Submission",
        description: "Submit your personal statement and any additional essays",
        deadline: "December 1, 2023",
      },
      {
        step: 4,
        title: "Interview",
        description: "Selected candidates will be invited for a virtual interview",
        deadline: "December 15, 2023",
      },
      {
        step: 5,
        title: "Final Decision",
        description: "Scholarship recipients will be notified",
        deadline: "January 15, 2024",
      },
    ],
    selectionCriteria: [
      {
        criteria: "Academic Excellence",
        weight: "40%",
        description: "GPA, academic achievements, and academic potential",
      },
      {
        criteria: "Leadership Experience",
        weight: "25%",
        description: "Demonstrated leadership in academic, professional, or community settings",
      },
      {
        criteria: "Personal Statement",
        weight: "20%",
        description: "Quality of writing, clarity of goals, and alignment with scholarship values",
      },
      {
        criteria: "Recommendations",
        weight: "10%",
        description: "Quality and content of recommendation letters",
      },
      {
        criteria: "Financial Need",
        weight: "5%",
        description: "Demonstrated financial need for educational support",
      },
    ],
    renewalCriteria: [
      "Maintain minimum GPA of 3.5",
      "Complete annual progress report",
      "Participate in scholarship program activities",
      "Demonstrate continued leadership involvement",
    ],
    contactInfo: {
      email: "scholarships@ief.org",
      phone: "+1 (555) 123-4567",
      website: "www.ief.org/scholarships",
      address: "123 Education Avenue, New York, NY 10001",
    },
    testimonials: [
      {
        name: "Maria Rodriguez",
        country: "Spain",
        program: "Master's in International Business",
        quote:
          "The Global Excellence Scholarship not only provided financial support but also opened doors to incredible networking opportunities. The mentorship program connected me with industry leaders who guided my career path.",
      },
      {
        name: "Chen Wei",
        country: "China",
        program: "PhD in Computer Science",
        quote:
          "This scholarship allowed me to focus entirely on my research without financial worries. The additional benefits like conference support helped me present my work internationally.",
      },
    ],
    faqs: [
      {
        question: "Can I apply if I'm already enrolled in a program?",
        answer:
          "Yes, current students are eligible to apply as long as they meet all other eligibility criteria and have at least one year remaining in their program.",
      },
      {
        question: "Is the scholarship renewable?",
        answer:
          "Yes, the scholarship is renewable for up to 4 years for undergraduate students and 2 years for graduate students, subject to meeting renewal criteria.",
      },
      {
        question: "Can I use this scholarship at any university?",
        answer:
          "The scholarship can be used at any of our 500+ partner universities worldwide. A list of partner institutions is available on our website.",
      },
      {
        question: "What happens if I change my field of study?",
        answer:
          "You must notify us immediately of any program changes. The scholarship committee will review the change and determine if it aligns with scholarship objectives.",
      },
    ],
  }

  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Link href="/scholarships" className="text-sm text-gray-500 hover:text-orange-500">
            Scholarships
          </Link>
          <span className="text-sm text-gray-500">/</span>
          <span className="text-sm text-gray-500">{scholarship.title}</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">{scholarship.title}</h1>
        <p className="text-gray-600">{scholarship.organization}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-6 grid w-full grid-cols-5 bg-transparent">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="requirements"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Requirements
              </TabsTrigger>
              <TabsTrigger
                value="application"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Application
              </TabsTrigger>
              <TabsTrigger
                value="selection"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Selection
              </TabsTrigger>
              <TabsTrigger value="faq" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500">
                FAQ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">About This Scholarship</h2>
                    <p className="text-gray-700 mb-4">{scholarship.description}</p>
                    <p className="text-gray-700">{scholarship.detailedDescription}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                    <ul className="space-y-2">
                      {scholarship.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Award className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Student Testimonials</h2>
                    <div className="space-y-6">
                      {scholarship.testimonials.map((testimonial, index) => (
                        <div key={index} className="border-l-4 border-orange-500 pl-4">
                          <p className="italic text-gray-700 mb-3">"{testimonial.quote}"</p>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.country}</p>
                            <p className="text-sm text-gray-500">{testimonial.program}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="requirements" className="mt-0">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Eligibility Requirements</h2>
                    <ul className="space-y-3">
                      {scholarship.requirements.map((requirement, index) => (
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
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Renewal Criteria</h2>
                    <p className="text-gray-600 mb-4">
                      To maintain your scholarship for subsequent years, you must meet the following criteria:
                    </p>
                    <ul className="space-y-2">
                      {scholarship.renewalCriteria.map((criteria, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Clock className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                          <span>{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="application" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
                  <div className="space-y-6">
                    {scholarship.applicationProcess.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{step.title}</h3>
                          <p className="text-gray-600 mb-2">{step.description}</p>
                          <p className="text-sm text-orange-500 font-medium">Deadline: {step.deadline}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Ready to Apply?</h3>
                    <p className="text-gray-600 mb-4">
                      Start your application today. Make sure to review all requirements before submitting.
                    </p>
                    <Button className="bg-orange-500 hover:bg-orange-600">Start Application</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="selection" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Selection Criteria</h2>
                  <p className="text-gray-600 mb-6">
                    Applications are evaluated based on the following criteria and weightings:
                  </p>
                  <div className="space-y-4">
                    {scholarship.selectionCriteria.map((criteria, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{criteria.criteria}</h3>
                          <Badge className="bg-orange-500">{criteria.weight}</Badge>
                        </div>
                        <p className="text-gray-600">{criteria.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {scholarship.faqs.map((faq, index) => (
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
              <h3 className="text-lg font-semibold mb-4">Scholarship Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Amount</p>
                    <p className="text-gray-600">{scholarship.amount}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Deadline</p>
                    <p className="text-gray-600">{scholarship.deadline}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Level</p>
                    <p className="text-gray-600">{scholarship.level}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Eligibility</p>
                    <p className="text-gray-600">{scholarship.eligibility}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                <Button variant="outline" className="w-full">
                  Save to Wishlist
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-orange-500" />
                  <span>{scholarship.contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-orange-500" />
                  <span>{scholarship.contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-orange-500" />
                  <span>{scholarship.contactInfo.website}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Related Scholarships</h3>
              <div className="space-y-4">
                <Link href="/scholarships/2" className="block hover:text-orange-500">
                  <h4 className="font-medium">STEM Innovation Scholarship</h4>
                  <p className="text-sm text-gray-600">$15,000 per year</p>
                </Link>
                <Link href="/scholarships/3" className="block hover:text-orange-500">
                  <h4 className="font-medium">Future Leaders Scholarship</h4>
                  <p className="text-sm text-gray-600">$10,000 per year</p>
                </Link>
                <Link href="/scholarships/4" className="block hover:text-orange-500">
                  <h4 className="font-medium">Arts and Humanities Grant</h4>
                  <p className="text-sm text-gray-600">$8,000</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
