import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, Users, BookOpen } from "lucide-react"
import DisciplineGrid from "@/components/discipline-grid"

export default function DisciplinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Browse by Discipline</h1>
            <p className="mb-8 text-xl opacity-90">
              Explore academic fields and discover programs that match your interests and career goals
            </p>
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search disciplines..." className="pl-10 text-gray-900" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="flex items-center p-6">
                <BookOpen className="mr-4 h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-gray-600">Academic Disciplines</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <TrendingUp className="mr-4 h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">5,000+</p>
                  <p className="text-gray-600">Study Programs</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <Users className="mr-4 h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-gray-600">Universities</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disciplines Grid */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">Choose Your Field of Study</h2>
            <p className="text-gray-600">
              Click on any discipline to explore programs, universities, and career opportunities
            </p>
          </div>
          <Suspense fallback={<div>Loading disciplines...</div>}>
            <DisciplineGrid />
          </Suspense>
        </div>
      </section>

      {/* Popular Combinations */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold">Popular Discipline Combinations</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Business + Technology</CardTitle>
                <CardDescription>Combine business acumen with technical skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MBA</Badge>
                  <Badge variant="secondary">Computer Science</Badge>
                  <Badge variant="secondary">Data Analytics</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Engineering + Design</CardTitle>
                <CardDescription>Merge technical expertise with creative thinking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Mechanical Engineering</Badge>
                  <Badge variant="secondary">Industrial Design</Badge>
                  <Badge variant="secondary">Architecture</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Science + Healthcare</CardTitle>
                <CardDescription>Apply scientific knowledge to improve human health</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Biomedical Science</Badge>
                  <Badge variant="secondary">Public Health</Badge>
                  <Badge variant="secondary">Nursing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
