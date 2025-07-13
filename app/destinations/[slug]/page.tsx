import Link from "next/link"
import { MapPin, GraduationCap, Building, DollarSign, Clock, Users, Globe, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UniversityImage from "@/components/university-image"

export default function DestinationPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or API
  const destinations = {
    "united-states": {
      name: "United States",
      description:
        "The United States offers world-class education with prestigious universities like Harvard, MIT, and Stanford. Students benefit from cutting-edge research facilities, diverse campus cultures, and strong industry connections.",
      capital: "Washington, D.C.",
      language: "English",
      currency: "USD ($)",
      timeZone: "UTC-5 to UTC-10",
      climate: "Varies by region",
      population: "331 million",
      universities: 450,
      programs: 4250,
      averageTuition: "$25,000 - $55,000",
      livingCost: "$15,000 - $25,000",
      workRights: "20 hours/week during studies, full-time during breaks",
      postStudyWork: "Optional Practical Training (OPT) - up to 3 years for STEM",
      cities: [
        {
          name: "New York",
          description: "The financial capital with world-renowned universities",
          universities: 85,
          livingCost: "$20,000 - $30,000",
        },
        {
          name: "Boston",
          description: "Academic hub with Harvard and MIT",
          universities: 65,
          livingCost: "$18,000 - $28,000",
        },
        {
          name: "San Francisco",
          description: "Tech capital with innovation-focused programs",
          universities: 45,
          livingCost: "$22,000 - $35,000",
        },
        {
          name: "Chicago",
          description: "Diverse city with strong business programs",
          universities: 55,
          livingCost: "$16,000 - $24,000",
        },
      ],
      topUniversities: [
        "Harvard University",
        "Massachusetts Institute of Technology",
        "Stanford University",
        "California Institute of Technology",
        "University of Chicago",
      ],
      popularFields: [
        "Business Administration",
        "Computer Science",
        "Engineering",
        "Medicine",
        "Law",
        "Arts & Humanities",
      ],
      visaInfo: {
        type: "F-1 Student Visa",
        processingTime: "2-4 weeks",
        requirements: [
          "Form I-20 from university",
          "SEVIS fee payment",
          "Valid passport",
          "Financial documentation",
          "Academic transcripts",
        ],
      },
      scholarships: [
        {
          name: "Fulbright Program",
          amount: "Full funding",
          description: "Prestigious scholarship for international students",
        },
        {
          name: "Merit-based University Scholarships",
          amount: "$5,000 - $30,000",
          description: "Offered by individual universities",
        },
      ],
    },
    "united-kingdom": {
      name: "United Kingdom",
      description:
        "The UK is home to some of the world's oldest and most prestigious universities. With a rich academic tradition, diverse student population, and high-quality education, it's a top destination for international students.",
      capital: "London",
      language: "English",
      currency: "GBP (£)",
      timeZone: "UTC+0 (GMT)",
      climate: "Temperate maritime",
      population: "67 million",
      universities: 130,
      programs: 3120,
      averageTuition: "£12,000 - £35,000",
      livingCost: "£12,000 - £18,000",
      workRights: "20 hours/week during studies",
      postStudyWork: "Graduate Route - 2 years (3 years for PhD)",
      cities: [
        {
          name: "London",
          description: "Global city with world-class universities",
          universities: 45,
          livingCost: "£15,000 - £20,000",
        },
        {
          name: "Oxford",
          description: "Historic university city",
          universities: 2,
          livingCost: "£12,000 - £16,000",
        },
        {
          name: "Cambridge",
          description: "Renowned for academic excellence",
          universities: 2,
          livingCost: "£12,000 - £16,000",
        },
        {
          name: "Edinburgh",
          description: "Beautiful Scottish capital",
          universities: 8,
          livingCost: "£10,000 - £14,000",
        },
      ],
      topUniversities: [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London",
        "London School of Economics",
        "University College London",
      ],
      popularFields: [
        "Business & Management",
        "Engineering",
        "Medicine",
        "Arts & Humanities",
        "Social Sciences",
        "Law",
      ],
      visaInfo: {
        type: "Student Visa (Tier 4)",
        processingTime: "3-6 weeks",
        requirements: [
          "CAS from university",
          "Valid passport",
          "Financial documentation",
          "English language proficiency",
          "Academic qualifications",
        ],
      },
      scholarships: [
        {
          name: "Chevening Scholarships",
          amount: "Full funding",
          description: "UK government scholarship for outstanding students",
        },
        {
          name: "Commonwealth Scholarships",
          amount: "Full funding",
          description: "For students from Commonwealth countries",
        },
      ],
    },
    australia: {
      name: "Australia",
      description:
        "Australia offers a relaxed lifestyle combined with high-quality education. With innovative teaching methods, multicultural environment, and beautiful landscapes, it's an attractive destination for international students.",
      capital: "Canberra",
      language: "English",
      currency: "AUD ($)",
      timeZone: "UTC+8 to UTC+11",
      climate: "Varies by region",
      population: "25 million",
      universities: 43,
      programs: 1890,
      averageTuition: "AUD $20,000 - $45,000",
      livingCost: "AUD $15,000 - $25,000",
      workRights: "20 hours/week during studies, full-time during breaks",
      postStudyWork: "Temporary Graduate Visa - 2-4 years",
      cities: [
        {
          name: "Sydney",
          description: "Vibrant harbor city with top universities",
          universities: 12,
          livingCost: "AUD $18,000 - $28,000",
        },
        {
          name: "Melbourne",
          description: "Cultural capital with excellent education",
          universities: 10,
          livingCost: "AUD $16,000 - $24,000",
        },
        {
          name: "Brisbane",
          description: "Sunny city with growing education sector",
          universities: 8,
          livingCost: "AUD $14,000 - $20,000",
        },
        {
          name: "Perth",
          description: "Western Australia's education hub",
          universities: 6,
          livingCost: "AUD $14,000 - $20,000",
        },
      ],
      topUniversities: [
        "University of Melbourne",
        "Australian National University",
        "University of Sydney",
        "University of Queensland",
        "Monash University",
      ],
      popularFields: [
        "Engineering",
        "Business",
        "Medicine & Health Sciences",
        "Information Technology",
        "Environmental Sciences",
        "Education",
      ],
      visaInfo: {
        type: "Student Visa (Subclass 500)",
        processingTime: "4-6 weeks",
        requirements: [
          "CoE from university",
          "Valid passport",
          "Financial documentation",
          "English language proficiency",
          "Health insurance (OSHC)",
        ],
      },
      scholarships: [
        {
          name: "Australia Awards",
          amount: "Full funding",
          description: "Government scholarship for developing countries",
        },
        {
          name: "University-specific scholarships",
          amount: "AUD $5,000 - $20,000",
          description: "Merit-based scholarships from universities",
        },
      ],
    },
    canada: {
      name: "Canada",
      description:
        "Canada is known for its welcoming attitude towards international students, high-quality education, and affordable tuition fees. It also offers post-graduation work permits and pathways to permanent residency.",
      capital: "Ottawa",
      language: "English, French",
      currency: "CAD ($)",
      timeZone: "UTC-3.5 to UTC-8",
      climate: "Varies by region",
      population: "38 million",
      universities: 96,
      programs: 1650,
      averageTuition: "CAD $15,000 - $35,000",
      livingCost: "CAD $12,000 - $20,000",
      workRights: "20 hours/week during studies, full-time during breaks",
      postStudyWork: "Post-Graduation Work Permit - up to 3 years",
      cities: [
        {
          name: "Toronto",
          description: "Multicultural metropolis with top universities",
          universities: 15,
          livingCost: "CAD $15,000 - $22,000",
        },
        {
          name: "Vancouver",
          description: "Beautiful coastal city with excellent education",
          universities: 12,
          livingCost: "CAD $14,000 - $20,000",
        },
        {
          name: "Montreal",
          description: "Bilingual city with rich culture",
          universities: 10,
          livingCost: "CAD $12,000 - $18,000",
        },
        {
          name: "Ottawa",
          description: "Capital city with government connections",
          universities: 8,
          livingCost: "CAD $13,000 - $19,000",
        },
      ],
      topUniversities: [
        "University of Toronto",
        "McGill University",
        "University of British Columbia",
        "University of Alberta",
        "McMaster University",
      ],
      popularFields: [
        "Engineering",
        "Business",
        "Computer Science",
        "Medicine",
        "Natural Resources",
        "Arts & Humanities",
      ],
      visaInfo: {
        type: "Study Permit",
        processingTime: "4-12 weeks",
        requirements: [
          "Letter of acceptance",
          "Valid passport",
          "Financial documentation",
          "Medical exam (if required)",
          "Police certificate (if required)",
        ],
      },
      scholarships: [
        {
          name: "Vanier Canada Graduate Scholarships",
          amount: "CAD $50,000",
          description: "For doctoral students",
        },
        {
          name: "Provincial scholarships",
          amount: "CAD $5,000 - $25,000",
          description: "Offered by provincial governments",
        },
      ],
    },
    germany: {
      name: "Germany",
      description:
        "Germany offers tuition-free education at public universities for all students, including internationals. With strong engineering and technical programs, it's an excellent destination for career-focused students.",
      capital: "Berlin",
      language: "German",
      currency: "EUR (€)",
      timeZone: "UTC+1",
      climate: "Temperate continental",
      population: "83 million",
      universities: 110,
      programs: 1420,
      averageTuition: "€0 - €3,000 (public), €15,000 - €35,000 (private)",
      livingCost: "€8,000 - €12,000",
      workRights: "120 full days or 240 half days per year",
      postStudyWork: "18 months to find employment",
      cities: [
        {
          name: "Berlin",
          description: "Capital city with vibrant student life",
          universities: 20,
          livingCost: "€8,000 - €11,000",
        },
        {
          name: "Munich",
          description: "Economic powerhouse with top universities",
          universities: 15,
          livingCost: "€10,000 - €14,000",
        },
        {
          name: "Hamburg",
          description: "Media and business hub",
          universities: 12,
          livingCost: "€9,000 - €12,000",
        },
        {
          name: "Frankfurt",
          description: "Financial center of Europe",
          universities: 8,
          livingCost: "€9,000 - €13,000",
        },
      ],
      topUniversities: [
        "Technical University of Munich",
        "Ludwig Maximilian University",
        "Heidelberg University",
        "Humboldt University Berlin",
        "RWTH Aachen University",
      ],
      popularFields: [
        "Engineering",
        "Natural Sciences",
        "Business",
        "Computer Science",
        "Medicine",
        "Arts & Humanities",
      ],
      visaInfo: {
        type: "National Visa (Type D)",
        processingTime: "6-12 weeks",
        requirements: [
          "University admission letter",
          "Valid passport",
          "Financial documentation",
          "Health insurance",
          "Academic certificates",
        ],
      },
      scholarships: [
        {
          name: "DAAD Scholarships",
          amount: "€850 - €1,200/month",
          description: "German Academic Exchange Service scholarships",
        },
        {
          name: "Deutschlandstipendium",
          amount: "€300/month",
          description: "Merit-based scholarship for all students",
        },
      ],
    },
    netherlands: {
      name: "Netherlands",
      description:
        "The Netherlands offers many English-taught programs, innovative teaching methods, and a high quality of life. Dutch universities are known for their practical approach and strong connections to industry.",
      capital: "Amsterdam",
      language: "Dutch, English",
      currency: "EUR (€)",
      timeZone: "UTC+1",
      climate: "Temperate maritime",
      population: "17 million",
      universities: 55,
      programs: 980,
      averageTuition: "€2,000 - €15,000 (EU), €8,000 - €20,000 (non-EU)",
      livingCost: "€8,000 - €12,000",
      workRights: "16 hours/week during studies",
      postStudyWork: "Orientation Year - 1 year",
      cities: [
        {
          name: "Amsterdam",
          description: "Capital city with international atmosphere",
          universities: 8,
          livingCost: "€10,000 - €14,000",
        },
        {
          name: "Rotterdam",
          description: "Modern port city with business focus",
          universities: 6,
          livingCost: "€8,000 - €11,000",
        },
        {
          name: "Utrecht",
          description: "Central location with excellent universities",
          universities: 5,
          livingCost: "€8,500 - €12,000",
        },
        {
          name: "Leiden",
          description: "Historic university town",
          universities: 2,
          livingCost: "€8,000 - €11,000",
        },
      ],
      topUniversities: [
        "University of Amsterdam",
        "Delft University of Technology",
        "Leiden University",
        "Utrecht University",
        "Erasmus University Rotterdam",
      ],
      popularFields: [
        "Business",
        "Engineering",
        "Social Sciences",
        "Arts & Design",
        "Environmental Sciences",
        "International Relations",
      ],
      visaInfo: {
        type: "Student Visa/Residence Permit",
        processingTime: "2-8 weeks",
        requirements: [
          "University admission",
          "Valid passport",
          "Financial documentation",
          "Health insurance",
          "Academic transcripts",
        ],
      },
      scholarships: [
        {
          name: "Holland Scholarship",
          amount: "€5,000",
          description: "For non-EU international students",
        },
        {
          name: "University scholarships",
          amount: "€3,000 - €15,000",
          description: "Merit-based scholarships from universities",
        },
      ],
    },
  }

  const destination = destinations[params.slug as keyof typeof destinations]

  if (!destination) {
    return <div>Destination not found</div>
  }

  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Link href="/destinations" className="text-sm text-gray-500 hover:text-orange-500">
            Destinations
          </Link>
          <span className="text-sm text-gray-500">/</span>
          <span className="text-sm text-gray-500">{destination.name}</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Study in {destination.name}</h1>
        <p className="text-gray-600">{destination.description}</p>
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
                value="universities"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Universities
              </TabsTrigger>
              <TabsTrigger
                value="cities"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Cities
              </TabsTrigger>
              <TabsTrigger
                value="visa"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Visa & Immigration
              </TabsTrigger>
              <TabsTrigger
                value="scholarships"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Scholarships
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Country Information</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Capital</p>
                          <p className="text-gray-600">{destination.capital}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Language</p>
                          <p className="text-gray-600">{destination.language}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Currency</p>
                          <p className="text-gray-600">{destination.currency}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Time Zone</p>
                          <p className="text-gray-600">{destination.timeZone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Population</p>
                          <p className="text-gray-600">{destination.population}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Plane className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Climate</p>
                          <p className="text-gray-600">{destination.climate}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Education System</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <Building className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Universities</p>
                          <p className="text-gray-600">{destination.universities} institutions</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Programs</p>
                          <p className="text-gray-600">{destination.programs} programs available</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Average Tuition</p>
                          <p className="text-gray-600">{destination.averageTuition}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Living Cost</p>
                          <p className="text-gray-600">{destination.livingCost}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Work Rights & Post-Study Options</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Work During Studies</h3>
                        <p className="text-gray-600">{destination.workRights}</p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Post-Study Work</h3>
                        <p className="text-gray-600">{destination.postStudyWork}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Popular Fields of Study</h2>
                    <div className="flex flex-wrap gap-2">
                      {destination.popularFields.map((field, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="universities" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Top Universities</h2>
                  <div className="space-y-4">
                    {destination.topUniversities.map((university, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                        <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                          <UniversityImage id={index + 1} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{university}</h3>
                          <p className="text-sm text-gray-600">
                            Ranked among the top universities in {destination.name}
                          </p>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/universities/${index + 1}`}>View Details</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                      <Link href={`/universities?country=${params.slug}`}>View All Universities</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cities" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2">
                {destination.cities.map((city, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{city.name}</h3>
                      <p className="text-gray-600 mb-4">{city.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Universities:</span>
                          <span className="font-medium">{city.universities}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Living Cost:</span>
                          <span className="font-medium">{city.livingCost}</span>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full mt-4">
                        <Link href={`/programs?city=${city.name.toLowerCase()}`}>View Programs</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="visa" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Visa Information</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Visa Type</h3>
                      <p className="text-gray-600">{destination.visaInfo.type}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Processing Time</h3>
                      <p className="text-gray-600">{destination.visaInfo.processingTime}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Requirements</h3>
                      <ul className="space-y-2">
                        {destination.visaInfo.requirements.map((requirement, index) => (
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scholarships" className="mt-0">
              <div className="space-y-6">
                {destination.scholarships.map((scholarship, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{scholarship.name}</h3>
                      <p className="text-orange-500 font-medium mb-2">{scholarship.amount}</p>
                      <p className="text-gray-600 mb-4">{scholarship.description}</p>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                <div className="text-center">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600">
                    <Link href="/scholarships">View All Scholarships</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Universities:</span>
                  <span className="font-medium">{destination.universities}</span>
                </div>
                <div className="flex justify-between">
                  <span>Programs:</span>
                  <span className="font-medium">{destination.programs}</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-medium">{destination.language}</span>
                </div>
                <div className="flex justify-between">
                  <span>Currency:</span>
                  <span className="font-medium">{destination.currency}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our advisors can help you with program selection, applications, and visa guidance.
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/counselors">Speak to an Advisor</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/tools/cost-calculator">Calculate Costs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
              <div className="space-y-3">
                <Link
                  href={`/programs?country=${params.slug}`}
                  className="block text-sm text-orange-500 hover:underline"
                >
                  Browse Programs in {destination.name} →
                </Link>
                <Link
                  href={`/universities?country=${params.slug}`}
                  className="block text-sm text-orange-500 hover:underline"
                >
                  View Universities →
                </Link>
                <Link href="/advice" className="block text-sm text-orange-500 hover:underline">
                  Study Abroad Guide →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
