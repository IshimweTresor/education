import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, TrendingUp, Users, DollarSign, Clock, Award, MapPin, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock data for disciplines
const disciplineData = {
  "computer-science": {
    name: "Computer Science & IT",
    description: "Explore the world of computing, software development, and information technology",
    overview:
      "Computer Science is a rapidly evolving field that combines mathematical rigor with creative problem-solving. Students learn programming, algorithms, data structures, and system design while exploring cutting-edge areas like artificial intelligence, cybersecurity, and cloud computing.",
    careerProspects: [
      "Software Developer",
      "Data Scientist",
      "Cybersecurity Analyst",
      "AI/ML Engineer",
      "Cloud Architect",
      "Product Manager",
    ],
    averageSalary: "$95,000 - $150,000",
    jobGrowth: "22% (Much faster than average)",
    skills: [
      "Programming Languages",
      "Problem Solving",
      "Mathematical Thinking",
      "System Design",
      "Database Management",
      "Version Control",
    ],
    topPrograms: [
      {
        id: 1,
        name: "Bachelor of Computer Science",
        university: "MIT",
        duration: "4 years",
        rating: 4.9,
        location: "Cambridge, MA",
      },
      {
        id: 2,
        name: "Master of Software Engineering",
        university: "Stanford University",
        duration: "2 years",
        rating: 4.8,
        location: "Stanford, CA",
      },
      {
        id: 3,
        name: "PhD in Artificial Intelligence",
        university: "Carnegie Mellon",
        duration: "5 years",
        rating: 4.9,
        location: "Pittsburgh, PA",
      },
    ],
    relatedFields: ["Data Science", "Cybersecurity", "Software Engineering", "AI/ML"],
  },
  "business-management": {
    name: "Business & Management",
    description: "Master the art of leadership, strategy, and organizational excellence",
    overview:
      "Business and Management programs prepare students to lead organizations, make strategic decisions, and drive innovation. The curriculum covers finance, marketing, operations, human resources, and entrepreneurship, providing a comprehensive foundation for business success.",
    careerProspects: [
      "Business Analyst",
      "Management Consultant",
      "Project Manager",
      "Marketing Manager",
      "Financial Analyst",
      "Operations Manager",
    ],
    averageSalary: "$75,000 - $120,000",
    jobGrowth: "8% (As fast as average)",
    skills: [
      "Leadership",
      "Strategic Thinking",
      "Communication",
      "Financial Analysis",
      "Project Management",
      "Team Building",
    ],
    topPrograms: [
      {
        id: 1,
        name: "MBA",
        university: "Harvard Business School",
        duration: "2 years",
        rating: 4.9,
        location: "Boston, MA",
      },
      {
        id: 2,
        name: "Bachelor of Business Administration",
        university: "Wharton School",
        duration: "4 years",
        rating: 4.8,
        location: "Philadelphia, PA",
      },
      {
        id: 3,
        name: "Master in Management",
        university: "London Business School",
        duration: "1 year",
        rating: 4.7,
        location: "London, UK",
      },
    ],
    relatedFields: ["Finance", "Marketing", "Entrepreneurship", "International Business"],
  },
  "engineering-technology": {
    name: "Engineering & Technology",
    description: "Design, build, and innovate solutions for tomorrow's challenges",
    overview:
      "Engineering combines scientific principles with practical application to solve real-world problems. Students learn to design, analyze, and optimize systems across various specializations including mechanical, electrical, civil, and chemical engineering.",
    careerProspects: [
      "Mechanical Engineer",
      "Electrical Engineer",
      "Civil Engineer",
      "Software Engineer",
      "Aerospace Engineer",
      "Biomedical Engineer",
    ],
    averageSalary: "$80,000 - $130,000",
    jobGrowth: "6% (As fast as average)",
    skills: [
      "Mathematical Analysis",
      "Problem Solving",
      "Technical Design",
      "Project Management",
      "CAD Software",
      "Systems Thinking",
    ],
    topPrograms: [
      {
        id: 1,
        name: "Bachelor of Mechanical Engineering",
        university: "MIT",
        duration: "4 years",
        rating: 4.9,
        location: "Cambridge, MA",
      },
      {
        id: 2,
        name: "Master of Electrical Engineering",
        university: "Stanford University",
        duration: "2 years",
        rating: 4.8,
        location: "Stanford, CA",
      },
      {
        id: 3,
        name: "PhD in Aerospace Engineering",
        university: "Caltech",
        duration: "5 years",
        rating: 4.9,
        location: "Pasadena, CA",
      },
    ],
    relatedFields: ["Applied Physics", "Computer Science", "Materials Science", "Robotics"],
  },
}

// Add default data for other disciplines
const getDefaultDisciplineData = (slug: string, name: string) => ({
  name,
  description: `Explore exciting opportunities in ${name.toLowerCase()}`,
  overview: `${name} offers diverse career paths and opportunities for students passionate about this field. Our comprehensive programs prepare graduates for success in today's competitive job market.`,
  careerProspects: [
    "Research Specialist",
    "Industry Analyst",
    "Consultant",
    "Project Coordinator",
    "Program Manager",
    "Subject Matter Expert",
  ],
  averageSalary: "$60,000 - $100,000",
  jobGrowth: "5-10% (Average growth)",
  skills: [
    "Critical Thinking",
    "Research Skills",
    "Communication",
    "Analysis",
    "Problem Solving",
    "Project Management",
  ],
  topPrograms: [
    {
      id: 1,
      name: `Bachelor of ${name}`,
      university: "Top University",
      duration: "4 years",
      rating: 4.5,
      location: "Various Locations",
    },
    {
      id: 2,
      name: `Master of ${name}`,
      university: "Leading Institution",
      duration: "2 years",
      rating: 4.6,
      location: "Various Locations",
    },
  ],
  relatedFields: ["Interdisciplinary Studies", "Research", "Applied Sciences"],
})

const disciplineNames = {
  "agriculture-forestry": "Agriculture & Forestry",
  "applied-sciences": "Applied Sciences & Professions",
  "arts-design": "Arts, Design & Architecture",
  "education-training": "Education & Training",
  "environmental-studies": "Environmental Studies",
  "hospitality-leisure": "Hospitality, Leisure & Sports",
  humanities: "Humanities",
}

export default function DisciplinePage({ params }: { params: { slug: string } }) {
  const discipline =
    disciplineData[params.slug as keyof typeof disciplineData] ||
    getDefaultDisciplineData(
      params.slug,
      disciplineNames[params.slug as keyof typeof disciplineNames] || "Unknown Discipline",
    )

  if (!discipline) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{discipline.name}</h1>
            <p className="mb-8 text-xl opacity-90">{discipline.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                View Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardContent className="flex items-center p-6">
                <DollarSign className="mr-4 h-8 w-8 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Average Salary</p>
                  <p className="font-bold">{discipline.averageSalary}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <TrendingUp className="mr-4 h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Job Growth</p>
                  <p className="font-bold">{discipline.jobGrowth}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <BookOpen className="mr-4 h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Programs</p>
                  <p className="font-bold">500+ Available</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <Users className="mr-4 h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">Universities</p>
                  <p className="font-bold">200+ Worldwide</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="careers">Careers</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About {discipline.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{discipline.overview}</p>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose This Field?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Award className="mr-2 h-4 w-4 text-green-600" />
                        High demand in job market
                      </li>
                      <li className="flex items-center">
                        <TrendingUp className="mr-2 h-4 w-4 text-blue-600" />
                        Excellent growth prospects
                      </li>
                      <li className="flex items-center">
                        <DollarSign className="mr-2 h-4 w-4 text-green-600" />
                        Competitive salaries
                      </li>
                      <li className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-purple-600" />
                        Diverse career opportunities
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Related Fields</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {discipline.relatedFields.map((field) => (
                        <Badge key={field} variant="secondary">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="careers" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Career Opportunities</CardTitle>
                  <CardDescription>Explore the diverse career paths available in {discipline.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {discipline.careerProspects.map((career) => (
                      <div key={career} className="rounded-lg border p-4">
                        <h4 className="font-semibold">{career}</h4>
                        <p className="text-sm text-gray-600">Explore opportunities in {career.toLowerCase()}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="programs" className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Top Programs</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {discipline.topPrograms.map((program) => (
                    <Card key={program.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{program.name}</CardTitle>
                            <CardDescription>{program.university}</CardDescription>
                          </div>
                          <div className="flex items-center">
                            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{program.rating}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="mr-2 h-4 w-4" />
                            {program.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="mr-2 h-4 w-4" />
                            {program.location}
                          </div>
                        </div>
                        <Button className="mt-4 w-full" asChild>
                          <Link href={`/programs/${program.id}`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Essential Skills</CardTitle>
                  <CardDescription>Key skills you'll develop in {discipline.name} programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {discipline.skills.map((skill) => (
                      <div key={skill} className="rounded-lg border p-4">
                        <h4 className="font-semibold">{skill}</h4>
                        <p className="text-sm text-gray-600">Essential for success in this field</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-xl opacity-90">Explore programs and universities in {discipline.name}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Browse Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Talk to Counselor
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
