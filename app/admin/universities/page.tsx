"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Filter,
  MoreHorizontal,
  Building2,
  GraduationCap,
  Users,
  MapPin,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminUniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const universities = [
    {
      id: 1,
      name: "Massachusetts Institute of Technology",
      shortName: "MIT",
      location: "Cambridge, MA, USA",
      type: "Private",
      ranking: 1,
      programs: 45,
      students: 11520,
      status: "active",
      partnership: "premium",
      established: 1861,
    },
    {
      id: 2,
      name: "Harvard University",
      shortName: "Harvard",
      location: "Cambridge, MA, USA",
      type: "Private",
      ranking: 2,
      programs: 52,
      students: 23731,
      status: "active",
      partnership: "premium",
      established: 1636,
    },
    {
      id: 3,
      name: "Stanford University",
      shortName: "Stanford",
      location: "Stanford, CA, USA",
      type: "Private",
      ranking: 3,
      programs: 38,
      students: 17249,
      status: "active",
      partnership: "standard",
      established: 1885,
    },
    {
      id: 4,
      name: "University of Oxford",
      shortName: "Oxford",
      location: "Oxford, England, UK",
      type: "Public",
      ranking: 4,
      programs: 67,
      students: 24515,
      status: "active",
      partnership: "premium",
      established: 1096,
    },
    {
      id: 5,
      name: "California Institute of Technology",
      shortName: "Caltech",
      location: "Pasadena, CA, USA",
      type: "Private",
      ranking: 5,
      programs: 28,
      students: 2240,
      status: "pending",
      partnership: "standard",
      established: 1891,
    },
  ]

  const filteredUniversities = universities.filter(
    (university) =>
      university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "inactive":
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPartnershipBadge = (partnership: string) => {
    switch (partnership) {
      case "premium":
        return <Badge className="bg-purple-100 text-purple-800">Premium</Badge>
      case "standard":
        return <Badge className="bg-blue-100 text-blue-800">Standard</Badge>
      case "basic":
        return <Badge className="bg-gray-100 text-gray-800">Basic</Badge>
      default:
        return <Badge variant="secondary">{partnership}</Badge>
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Universities Management</h1>
          <p className="text-gray-600 mt-2">Manage partner universities and institutions</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New University
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Universities</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">456</p>
              </div>
              <Building2 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Partners</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">423</p>
              </div>
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="h-3 w-3 bg-green-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Programs</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">1,234</p>
              </div>
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">89,255</p>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>All Universities</CardTitle>
          <CardDescription>Manage partner universities and their details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search universities or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Universities Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>University</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Ranking</TableHead>
                  <TableHead>Programs</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Partnership</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUniversities.map((university) => (
                  <TableRow key={university.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{university.shortName}</div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">{university.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">{university.location}</span>
                      </div>
                    </TableCell>
                    <TableCell>{university.type}</TableCell>
                    <TableCell>#{university.ranking}</TableCell>
                    <TableCell>{university.programs}</TableCell>
                    <TableCell>{university.students.toLocaleString()}</TableCell>
                    <TableCell>{getPartnershipBadge(university.partnership)}</TableCell>
                    <TableCell>{getStatusBadge(university.status)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit University
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <GraduationCap className="mr-2 h-4 w-4" />
                            Manage Programs
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove Partnership
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredUniversities.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No universities found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
