"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, MessageSquare, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Logo from "@/components/logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mock data for notification badges
  const wishlistCount = 5
  const messageCount = 3

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Logo />

        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/programs" className="text-gray-700 hover:text-orange-500">
            Programs
          </Link>
          <Link href="/universities" className="text-gray-700 hover:text-orange-500">
            Universities
          </Link>
          <Link href="/destinations" className="text-gray-700 hover:text-orange-500">
            Destinations
          </Link>
          <Link href="/scholarships" className="text-gray-700 hover:text-orange-500">
            Scholarships
          </Link>
          <Link href="/short-courses" className="text-gray-700 hover:text-orange-500">
            Short Courses
          </Link>
          <Link href="/advice" className="text-gray-700 hover:text-orange-500">
            Study Advice
          </Link>
        </nav>

        {/* User actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="icon" aria-label="Wishlist" asChild className="relative">
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                >
                  {wishlistCount}
                </Badge>
              )}
            </Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Messages" asChild className="relative">
            <Link href="/messages">
              <MessageSquare className="h-5 w-5" />
              {messageCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                >
                  {messageCount}
                </Badge>
              )}
            </Link>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/auth/login">
              <User className="h-4 w-4" />
              Sign In
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 bg-white p-4 shadow-md md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="/programs"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/universities"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Universities
              </Link>
              <Link
                href="/destinations"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/scholarships"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Scholarships
              </Link>
              <Link
                href="/short-courses"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Short Courses
              </Link>
              <Link href="/advice" className="text-gray-700 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
                Study Advice
              </Link>
              <Link
                href="/counselors"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Counselors
              </Link>
              <Link
                href="/tools/cost-calculator"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Cost Calculator
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t">
                <Button variant="ghost" size="sm" className="gap-2 relative" asChild>
                  <Link href="/wishlist" onClick={() => setIsMenuOpen(false)}>
                    <Heart className="h-4 w-4" />
                    Wishlist
                    {wishlistCount > 0 && (
                      <Badge variant="destructive" className="ml-1 h-4 w-4 rounded-full p-0 text-xs">
                        {wishlistCount}
                      </Badge>
                    )}
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 relative" asChild>
                  <Link href="/messages" onClick={() => setIsMenuOpen(false)}>
                    <MessageSquare className="h-4 w-4" />
                    Messages
                    {messageCount > 0 && (
                      <Badge variant="destructive" className="ml-1 h-4 w-4 rounded-full p-0 text-xs">
                        {messageCount}
                      </Badge>
                    )}
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                    <User className="h-4 w-4" />
                    Sign In
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
