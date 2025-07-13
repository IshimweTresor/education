import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DisciplineGrid from "@/components/discipline-grid"
import FeaturedPrograms from "@/components/featured-programs"
import PopularDestinations from "@/components/popular-destinations"
import HeroImage from "@/components/hero-image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-50 to-orange-100">
          <div className="h-full w-full">
            <HeroImage />
          </div>
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center mx-auto">
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find Your Perfect Study Program
          </h1>
          <p className="mb-8 text-lg sm:text-xl">
            Discover thousands of bachelor's degrees from top universities worldwide
          </p>

          <div className="w-full max-w-3xl rounded-lg bg-white/10 p-2 backdrop-blur-md">
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="What do you want to study?"
                  className="h-12 border-0 bg-white text-gray-900"
                />
              </div>
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Where do you want to study?"
                  className="h-12 border-0 bg-white text-gray-900"
                />
              </div>
              <Button className="h-12 px-6 bg-orange-500 hover:bg-orange-600">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Discipline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">Browse by Discipline</h2>
          <DisciplineGrid />
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">Featured Programs</h2>
          <FeaturedPrograms />
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
            Popular Study Destinations
          </h2>
          <PopularDestinations />
        </div>
      </section>

      {/* Student Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">Student Resources</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-lg border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
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
                  className="lucide lucide-award"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 5.44 21.44l2.12-7.07-5.44-4.19h6.7L12 4.05l2.18 6.13h6.7l-5.44 4.19 2.12 7.07z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Scholarships</h3>
              <p className="text-gray-600 mb-4">
                Find financial support for your education with thousands of scholarship opportunities
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/scholarships">Explore Scholarships</Link>
              </Button>
            </div>
            <div className="rounded-lg border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
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
                  className="lucide lucide-certificate"
                >
                  <circle cx="12" cy="15" r="8" />
                  <path d="M12 3v4" />
                  <path d="M9 7h6" />
                  <path d="M12 15v.01" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Short Courses</h3>
              <p className="text-gray-600 mb-4">
                Enhance your skills with professional short courses and certificate programs
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/short-courses">Browse Courses</Link>
              </Button>
            </div>
            <div className="rounded-lg border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
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
                  className="lucide lucide-message-square"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Enrollment Counselors</h3>
              <p className="text-gray-600 mb-4">
                Get personalized guidance from expert advisors throughout your educational journey
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/counselors">Meet Counselors</Link>
              </Button>
            </div>
            <div className="rounded-lg border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
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
                  className="lucide lucide-calculator"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                  <line x1="8" x2="16" y1="6" y2="6" />
                  <line x1="16" x2="16" y1="14" y2="18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Cost Calculator</h3>
              <p className="text-gray-600 mb-4">
                Estimate the total cost of your education and plan your finances accordingly
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/tools/cost-calculator">Calculate Costs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">Why Choose StudyPortal</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
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
                  className="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Find the Right Program</h3>
              <p className="text-gray-600">
                Search through thousands of accredited programs from universities worldwide
              </p>
            </div>
            <div className="rounded-lg border p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
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
                  className="lucide lucide-compare"
                >
                  <circle cx="18" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                  <path d="M11 18H8a2 2 0 0 1-2-2V9" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Compare Options</h3>
              <p className="text-gray-600">Easily compare programs, tuition fees, and admission requirements</p>
            </div>
            <div className="rounded-lg border p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
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
                  className="lucide lucide-graduation-cap"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Application Guidance</h3>
              <p className="text-gray-600">Get expert advice on applications, scholarships, and visa requirements</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
