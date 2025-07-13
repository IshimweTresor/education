"use client"

import { useState } from "react"
import { Search, Plus, MoreVertical, Phone, Video, Info, Archive, Trash2, Star, Clock, CheckCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for conversations
const conversations = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Senior Career Counselor",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I've reviewed your LinkedIn profile. Let's discuss optimizing it for tech recruiters.",
    timestamp: "2 min ago",
    unread: 2,
    online: true,
    type: "career",
    verified: true,
    department: "Career Services",
  },
  {
    id: "2",
    name: "Tech Career Hub",
    role: "Professional Group",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "New internship opportunities at Google and Microsoft just posted!",
    timestamp: "15 min ago",
    unread: 5,
    online: false,
    type: "group",
    verified: true,
    members: 247,
  },
  {
    id: "3",
    name: "Dr. Michael Chen",
    role: "Industry Mentor",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "The AI startup scene is booming. Here are some companies you should consider.",
    timestamp: "1 hour ago",
    unread: 0,
    online: true,
    type: "mentor",
    verified: true,
    company: "Meta",
  },
  {
    id: "4",
    name: "Resume Review Team",
    role: "Professional Service",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Your resume has been reviewed. We have 3 key recommendations for improvement.",
    timestamp: "2 hours ago",
    unread: 1,
    online: true,
    type: "service",
    verified: true,
  },
  {
    id: "5",
    name: "CS Alumni Network",
    role: "Alumni Group",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Weekly networking event this Friday at 6 PM EST. Join us!",
    timestamp: "3 hours ago",
    unread: 0,
    online: false,
    type: "network",
    verified: true,
    members: 1205,
  },
  {
    id: "6",
    name: "Interview Prep Workshop",
    role: "Live Session",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Mock interview session starts in 30 minutes. Click to join.",
    timestamp: "4 hours ago",
    unread: 0,
    online: true,
    type: "workshop",
    verified: false,
    status: "live",
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch =
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === "all" || conv.type === activeTab
    return matchesSearch && matchesTab
  })

  const totalUnread = conversations.reduce((sum, conv) => sum + conv.unread, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-1">{totalUnread > 0 ? `${totalUnread} unread messages` : "All caught up!"}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Archive className="h-4 w-4 mr-2" />
            Archive
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Message
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversations Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-0">
              {/* Search */}
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-5 rounded-none border-b">
                  <TabsTrigger value="all" className="text-xs">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="career" className="text-xs">
                    Career
                  </TabsTrigger>
                  <TabsTrigger value="group" className="text-xs">
                    Groups
                  </TabsTrigger>
                  <TabsTrigger value="mentor" className="text-xs">
                    Mentors
                  </TabsTrigger>
                  <TabsTrigger value="workshop" className="text-xs">
                    Live
                  </TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab} className="mt-0">
                  {/* Conversations List */}
                  <div className="max-h-96 overflow-y-auto">
                    {filteredConversations.length > 0 ? (
                      filteredConversations.map((conversation) => (
                        <div
                          key={conversation.id}
                          className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                            selectedConversation === conversation.id ? "bg-orange-50 border-orange-200" : ""
                          }`}
                          onClick={() => setSelectedConversation(conversation.id)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="relative">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                                <AvatarFallback>
                                  {conversation.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              {conversation.online && (
                                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                                  {conversation.verified && <CheckCheck className="h-4 w-4 text-blue-500" />}
                                  {conversation.status === "live" && (
                                    <Badge variant="destructive" className="text-xs">
                                      LIVE
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                                  {conversation.members && (
                                    <span className="text-xs text-gray-400">({conversation.members})</span>
                                  )}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-1">{conversation.role}</p>
                              <p className="text-sm text-gray-700 truncate">{conversation.lastMessage}</p>
                              {conversation.unread > 0 && (
                                <Badge variant="destructive" className="mt-1 h-5 text-xs">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No conversations found</h3>
                        <p className="text-gray-600">Try adjusting your search or filters</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2">
          {selectedConversation ? (
            <ConversationView conversationId={selectedConversation} />
          ) : (
            <Card className="h-96">
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                  <p className="text-gray-600 mb-4">Choose a conversation from the sidebar to start messaging</p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Start New Conversation
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

function ConversationView({ conversationId }: { conversationId: string }) {
  const conversation = conversations.find((c) => c.id === conversationId)

  if (!conversation) return null

  return (
    <Card className="h-96">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                <AvatarFallback>{conversation.name.split(" ").map((n) => n[0])}</AvatarFallback>
              </Avatar>
              {conversation.online && (
                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h3 className="font-medium text-gray-900">{conversation.name}</h3>
                {conversation.verified && <CheckCheck className="h-4 w-4 text-blue-500" />}
              </div>
              <p className="text-sm text-gray-600">{conversation.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Info className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Star className="h-4 w-4 mr-2" />
                  Star Conversation
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Archive className="h-4 w-4 mr-2" />
                  Archive
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="text-center text-gray-500 mb-4">
            <Clock className="h-4 w-4 inline mr-1" />
            <span className="text-sm">Conversation started 3 days ago</span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  Hello! I'd like to help you with your university applications. What programs are you interested in?
                </p>
                <span className="text-xs text-gray-500 mt-1 block">2:30 PM</span>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-orange-500 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  Hi! I'm looking at Computer Science programs in the US, particularly at top universities like MIT and
                  Stanford.
                </p>
                <span className="text-xs text-orange-100 mt-1 block">2:32 PM</span>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm">{conversation.lastMessage}</p>
                <span className="text-xs text-gray-500 mt-1 block">2:35 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button>Send</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
