"use client"

import Link from "next/link"

import { useState } from "react"
import { Calculator, DollarSign, GraduationCap, Home, Briefcase, BookOpen, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function CostCalculatorPage() {
  const [country, setCountry] = useState("usa")
  const [studyLevel, setStudyLevel] = useState("undergraduate")
  const [fieldOfStudy, setFieldOfStudy] = useState("business")
  const [duration, setDuration] = useState(4)
  const [tuition, setTuition] = useState(25000)
  const [accommodation, setAccommodation] = useState(12000)
  const [livingExpenses, setLivingExpenses] = useState(10000)
  const [scholarshipAmount, setScholarshipAmount] = useState(0)
  const [workStudy, setWorkStudy] = useState(0)
  const [loans, setLoans] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const calculateTotalCost = () => {
    const annualCost = tuition + accommodation + livingExpenses
    const totalCost = annualCost * duration
    const totalScholarship = scholarshipAmount * duration
    const totalWorkStudy = workStudy * duration
    const totalLoans = loans
    const outOfPocket = totalCost - totalScholarship - totalWorkStudy - totalLoans

    return {
      annualCost,
      totalCost,
      totalScholarship,
      totalWorkStudy,
      totalLoans,
      outOfPocket,
    }
  }

  const handleCalculate = () => {
    setShowResults(true)
  }

  const results = calculateTotalCost()

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Education Cost Calculator</h1>
        <p className="text-gray-600">Estimate the total cost of your education and plan your finances accordingly</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <Tabs defaultValue="basic" className="mb-8">
            <TabsList className="mb-6 grid w-full grid-cols-3 bg-transparent">
              <TabsTrigger
                value="basic"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Basic Information
              </TabsTrigger>
              <TabsTrigger
                value="costs"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Costs
              </TabsTrigger>
              <TabsTrigger
                value="funding"
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-500"
              >
                Funding Sources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="mt-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Study Information</CardTitle>
                  <CardDescription>
                    Enter details about your planned education to get an accurate cost estimate
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="country">Destination Country</Label>
                      <Select value={country} onValueChange={setCountry}>
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="germany">Germany</SelectItem>
                          <SelectItem value="france">France</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="level">Study Level</Label>
                      <Select value={studyLevel} onValueChange={setStudyLevel}>
                        <SelectTrigger id="level">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="certificate">Certificate/Diploma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="field">Field of Study</Label>
                      <Select value={fieldOfStudy} onValueChange={setFieldOfStudy}>
                        <SelectTrigger id="field">
                          <SelectValue placeholder="Select field" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Business & Management</SelectItem>
                          <SelectItem value="engineering">Engineering & Technology</SelectItem>
                          <SelectItem value="medicine">Medicine & Health Sciences</SelectItem>
                          <SelectItem value="arts">Arts & Humanities</SelectItem>
                          <SelectItem value="science">Natural Sciences</SelectItem>
                          <SelectItem value="social">Social Sciences</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="duration">Program Duration (Years)</Label>
                        <span className="text-sm text-gray-500">{duration} years</span>
                      </div>
                      <Slider
                        id="duration"
                        min={1}
                        max={6}
                        step={1}
                        value={[duration]}
                        onValueChange={(value) => setDuration(value[0])}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="costs" className="mt-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Education Costs</CardTitle>
                  <CardDescription>
                    Estimate your annual education expenses including tuition and living costs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="tuition" className="flex items-center gap-2">
                        Tuition Fees (Annual)
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                Average annual tuition for {studyLevel} {fieldOfStudy} programs in{" "}
                                {country.toUpperCase()} ranges from $
                                {country === "usa"
                                  ? "15,000-50,000"
                                  : country === "uk"
                                    ? "12,000-35,000"
                                    : country === "canada"
                                      ? "10,000-30,000"
                                      : country === "australia"
                                        ? "15,000-40,000"
                                        : country === "germany"
                                          ? "0-5,000"
                                          : "1,000-15,000"}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <span className="text-sm text-gray-500">${tuition.toLocaleString()}</span>
                    </div>
                    <Slider
                      id="tuition"
                      min={0}
                      max={60000}
                      step={1000}
                      value={[tuition]}
                      onValueChange={(value) => setTuition(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="accommodation" className="flex items-center gap-2">
                        Accommodation (Annual)
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                Average annual accommodation costs in {country.toUpperCase()} range from $
                                {country === "usa"
                                  ? "8,000-20,000"
                                  : country === "uk"
                                    ? "7,000-18,000"
                                    : country === "canada"
                                      ? "6,000-15,000"
                                      : country === "australia"
                                        ? "7,000-18,000"
                                        : country === "germany"
                                          ? "3,000-8,000"
                                          : "4,000-12,000"}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <span className="text-sm text-gray-500">${accommodation.toLocaleString()}</span>
                    </div>
                    <Slider
                      id="accommodation"
                      min={0}
                      max={30000}
                      step={500}
                      value={[accommodation]}
                      onValueChange={(value) => setAccommodation(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="living" className="flex items-center gap-2">
                        Living Expenses (Annual)
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                Average annual living expenses (food, transportation, books, etc.) in{" "}
                                {country.toUpperCase()} range from $
                                {country === "usa"
                                  ? "8,000-15,000"
                                  : country === "uk"
                                    ? "7,000-14,000"
                                    : country === "canada"
                                      ? "6,000-12,000"
                                      : country === "australia"
                                        ? "7,000-15,000"
                                        : country === "germany"
                                          ? "5,000-10,000"
                                          : "6,000-12,000"}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <span className="text-sm text-gray-500">${livingExpenses.toLocaleString()}</span>
                    </div>
                    <Slider
                      id="living"
                      min={0}
                      max={25000}
                      step={500}
                      value={[livingExpenses]}
                      onValueChange={(value) => setLivingExpenses(value[0])}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="funding" className="mt-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Funding Sources</CardTitle>
                  <CardDescription>
                    Enter information about scholarships, work-study, and loans to calculate your net costs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="scholarship">Scholarships & Grants (Annual)</Label>
                      <span className="text-sm text-gray-500">${scholarshipAmount.toLocaleString()}</span>
                    </div>
                    <Slider
                      id="scholarship"
                      min={0}
                      max={50000}
                      step={500}
                      value={[scholarshipAmount]}
                      onValueChange={(value) => setScholarshipAmount(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="work-study">Work-Study Income (Annual)</Label>
                      <span className="text-sm text-gray-500">${workStudy.toLocaleString()}</span>
                    </div>
                    <Slider
                      id="work-study"
                      min={0}
                      max={20000}
                      step={500}
                      value={[workStudy]}
                      onValueChange={(value) => setWorkStudy(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="loans">Student Loans (Total)</Label>
                      <span className="text-sm text-gray-500">${loans.toLocaleString()}</span>
                    </div>
                    <Slider
                      id="loans"
                      min={0}
                      max={200000}
                      step={1000}
                      value={[loans]}
                      onValueChange={(value) => setLoans(value[0])}
                    />
                  </div>

                  <div className="mt-6 flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I understand this is an estimate and actual costs may vary
                    </label>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-orange-500 hover:bg-orange-600" onClick={handleCalculate}>
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Total Cost
              </Button>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Cost Summary</CardTitle>
              <CardDescription>Estimated costs based on your selections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Annual Tuition</span>
                  <span className="font-medium">${tuition.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Annual Accommodation</span>
                  <span className="font-medium">${accommodation.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Annual Living Expenses</span>
                  <span className="font-medium">${livingExpenses.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between border-t pt-2">
                  <span className="font-medium">Annual Total</span>
                  <span className="font-medium">${results.annualCost.toLocaleString()}</span>
                </div>
              </div>

              {showResults && (
                <>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <h3 className="mb-3 font-semibold">Total Program Cost</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">Total Education Cost</span>
                        </div>
                        <span className="font-medium">${results.totalCost.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Total Scholarships</span>
                        </div>
                        <span className="font-medium text-green-600">
                          -${results.totalScholarship.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Total Work-Study</span>
                        </div>
                        <span className="font-medium text-green-600">-${results.totalWorkStudy.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Total Loans</span>
                        </div>
                        <span className="font-medium text-blue-600">-${results.totalLoans.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between border-t pt-2">
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-orange-500" />
                          <span className="font-medium">Out-of-Pocket Cost</span>
                        </div>
                        <span className="font-bold">${results.outOfPocket.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <p className="font-medium">Next Steps:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-xs font-medium text-orange-600">
                          1
                        </span>
                        <span>Explore scholarship opportunities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-xs font-medium text-orange-600">
                          2
                        </span>
                        <span>Speak with a financial aid counselor</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-xs font-medium text-orange-600">
                          3
                        </span>
                        <span>Research student loan options</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm">
                      Save Estimate
                    </Button>
                    <Button variant="outline" size="sm">
                      Print Summary
                    </Button>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      Speak to a Financial Advisor
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional resources */}
      <div className="mt-12 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Financial Planning Resources</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <h3 className="mb-2 text-lg font-semibold">Scholarship Database</h3>
              <p className="mb-4 text-sm text-gray-600">
                Search our comprehensive database of scholarships to find financial aid opportunities.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/scholarships">Explore Scholarships</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="mb-2 text-lg font-semibold">Student Loan Guide</h3>
              <p className="mb-4 text-sm text-gray-600">
                Learn about different types of student loans, interest rates, and repayment options.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/guides/student-loans">Read Guide</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="mb-2 text-lg font-semibold">Financial Aid Counseling</h3>
              <p className="mb-4 text-sm text-gray-600">
                Schedule a session with our financial aid experts for personalized advice.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/counselors">Book Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
