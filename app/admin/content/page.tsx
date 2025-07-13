"use client"

import { useState } from "react"
import { Search, Plus, Filter, Eye, Edit, Trash2, FileText, ImageIcon, Video, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const contentData = {
  articles: [
    {
      id: 1,
      title: "Complete Guide to Studying in Canada",
      author: "Sarah Johnson",
      status: "published",
      views: 15420,
      publishDate: "2024-01-15",
      category: "Study Guides",
    },
    {
      id: 2,
      title: "Scholarship Application Tips",
      author: "Mike Chen",
      status: "draft",
      views: 0,
      publishDate: null,
      category: "Financial Aid",
    },
    {
      id: 3,
      title: "University Application Process",
      author: "Emma Wilson",
      status: "review",
      views: 8930,
      publishDate: "2024-01-10",
      category: "Applications",
    },
    {
      id: 4,
      title: "Student Visa Requirements",
      author: "David Brown",
      status: "published",
      views: 12350,
      publishDate: "2024-01-12",
      category: "Visa & Immigration",
    },
  ],
  resources: [
    {
      id: 1,
      name: "University Comparison Template",
      type: "document",
      size: "2.4 MB",
      downloads: 1250,
      uploadDate: "2024-01-10",
    },
    {
      id: 2,
      name: "Study Abroad Checklist",
      type: "document",
      size: "1.8 MB",
      downloads: 890,
      uploadDate: "2024-01-08",
    },
    {
      id: 3,
      name: "Campus Tour Video - MIT",
      type: "video",
      size: "45.2 MB",
      downloads: 2100,
      uploadDate: "2024-01-05",
    },
  ],
}

export default function AdminContentPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "review":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "image":
        return <ImageIcon className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Content Management</h1>
          <p className="text-gray-600">Manage articles, guides, and resources</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Content
        </Button>
      </div>

      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList>
          <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
          <TabsTrigger value="resources">Resources & Media</TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="review">Under Review</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Articles ({contentData.articles.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentData.articles.map((article) => (
                  <div
                    key={article.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{article.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span>By {article.author}</span>
                          <span>•</span>
                          <span>{article.views.toLocaleString()} views</span>
                          <span>•</span>
                          <span>{article.category}</span>
                          {article.publishDate && (
                            <>
                              <span>•</span>
                              <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(article.status)}>{article.status}</Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search resources..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Upload Resource
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Resources & Media ({contentData.resources.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentData.resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-green-100 rounded">{getTypeIcon(resource.type)}</div>
                      <div>
                        <h3 className="font-medium">{resource.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span>{resource.size}</span>
                          <span>•</span>
                          <span>{resource.downloads.toLocaleString()} downloads</span>
                          <span>•</span>
                          <span>Uploaded {new Date(resource.uploadDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
