"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  ArrowLeft,
  Phone,
  Video,
  Info,
  MoreVertical,
  Send,
  Paperclip,
  Smile,
  Search,
  Star,
  Archive,
  Trash2,
  CheckCheck,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

// Mock conversation data
const conversationData = {
  "1": {
    id: "1",
    name: "Sarah Johnson",
    role: "Education Counselor",
    avatar: "/placeholder.svg?height=40&width=40",
    online: true,
    verified: true,
    messages: [
      {
        id: "1",
        sender: "counselor",
        content:
          "Hello! I'm Sarah, your assigned education counselor. I'm here to help you navigate your university application process.",
        timestamp: "10:00 AM",
        status: "read",
      },
      {
        id: "2",
        sender: "user",
        content:
          "Hi Sarah! Thank you for reaching out. I'm really excited to start this journey. I'm particularly interested in Computer Science programs.",
        timestamp: "10:05 AM",
        status: "read",
      },
      {
        id: "3",
        sender: "counselor",
        content:
          "That's fantastic! Computer Science is a great field with excellent career prospects. What specific areas within CS interest you most? AI, software development, cybersecurity?",
        timestamp: "10:07 AM",
        status: "read",
      },
      {
        id: "4",
        sender: "user",
        content:
          "I'm really passionate about AI and machine learning. I've been working on some personal projects and I'd love to pursue research in this area.",
        timestamp: "10:10 AM",
        status: "read",
      },
      {
        id: "5",
        sender: "counselor",
        content:
          "Excellent choice! AI/ML is one of the most exciting and rapidly growing fields. Based on your interests, I'd recommend looking at programs like MIT, Stanford, Carnegie Mellon, and UC Berkeley.",
        timestamp: "10:15 AM",
        status: "read",
      },
      {
        id: "6",
        sender: "counselor",
        content:
          "I've reviewed your academic background and it looks very strong. Your GPA and test scores put you in a competitive position for these top programs.",
        timestamp: "10:16 AM",
        status: "read",
      },
      {
        id: "7",
        sender: "user",
        content:
          "That's encouraging to hear! What would you say are the most important factors for getting into these programs?",
        timestamp: "10:20 AM",
        status: "read",
      },
      {
        id: "8",
        sender: "counselor",
        content:
          "Great question! For top CS programs, they typically look for:\n\n1. Strong academic performance (which you have ✓)\n2. Research experience or significant projects\n3. Strong letters of recommendation\n4. A compelling personal statement\n5. Relevant work/internship experience",
        timestamp: "10:25 AM",
        status: "read",
      },
      {
        id: "9",
        sender: "user",
        content:
          "I have some research experience from my undergraduate program and I've completed internships at two tech companies. Should I highlight these in my applications?",
        timestamp: "10:30 AM",
        status: "read",
      },
      {
        id: "10",
        sender: "counselor",
        content:
          "Absolutely! That research experience and industry exposure are exactly what admissions committees want to see. Let's schedule a call this week to discuss your application strategy in detail.",
        timestamp: "2 min ago",
        status: "delivered",
      },
    ],
  },
}

export default function ChatPage({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const conversation = conversationData[params.id as keyof typeof conversationData]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [conversation?.messages])

  if (!conversation) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Conversation not found</h1>
          <Link href="/messages">
            <Button>Back to Messages</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/messages">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
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
          <div>
            <div className="flex items-center gap-1">
              <h1 className="font-semibold text-gray-900">{conversation.name}</h1>
              {conversation.verified && <CheckCheck className="h-4 w-4 text-blue-500" />}
            </div>
            <p className="text-sm text-gray-600">
              {conversation.online ? "Online" : "Last seen 2 hours ago"} • {conversation.role}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Info className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
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
                Delete Conversation
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Date Separator */}
          <div className="text-center">
            <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-500 border">Today</span>
          </div>

          {/* Messages */}
          {conversation.messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex gap-2 max-w-xs md:max-w-md lg:max-w-lg ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                {msg.sender === "counselor" && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                    <AvatarFallback>
                      {conversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-2xl px-4 py-2 ${
                    msg.sender === "user" ? "bg-orange-500 text-white" : "bg-white text-gray-900 border"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  <div
                    className={`flex items-center gap-1 mt-1 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span className={`text-xs ${msg.sender === "user" ? "text-orange-100" : "text-gray-500"}`}>
                      {msg.timestamp}
                    </span>
                    {msg.sender === "user" && (
                      <div className="text-orange-100">
                        {msg.status === "sent" && <Check className="h-3 w-3" />}
                        {msg.status === "delivered" && <CheckCheck className="h-3 w-3" />}
                        {msg.status === "read" && <CheckCheck className="h-3 w-3 text-blue-200" />}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-2 max-w-xs">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                  <AvatarFallback>
                    {conversation.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="bg-white rounded-2xl px-4 py-2 border">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-2">
            <Button variant="ghost" size="icon" className="mb-2">
              <Paperclip className="h-5 w-5" />
            </Button>
            <div className="flex-1 relative">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pr-12 min-h-[44px] resize-none"
              />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                <Smile className="h-5 w-5" />
              </Button>
            </div>
            <Button onClick={handleSendMessage} disabled={!message.trim()} className="mb-2">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Press Enter to send, Shift + Enter for new line</p>
        </div>
      </div>
    </div>
  )
}
