import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-gray-800 pb-8 sm:flex-row">
          <Logo variant="white" />
          <div className="flex gap-4">
            <Link href="#" className="hover:text-orange-400">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-orange-400">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-orange-400">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-orange-400">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-orange-400">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">About StudyPortal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-orange-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-orange-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-orange-400">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">For Students</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="hover:text-orange-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="hover:text-orange-400">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/student-reviews" className="hover:text-orange-400">
                  Student Reviews
                </Link>
              </li>
              <li>
                <Link href="/study-guides" className="hover:text-orange-400">
                  Study Guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">For Universities</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/advertise" className="hover:text-orange-400">
                  Advertise with Us
                </Link>
              </li>
              <li>
                <Link href="/university-dashboard" className="hover:text-orange-400">
                  University Dashboard
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="hover:text-orange-400">
                  Student Recruitment
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="hover:text-orange-400">
                  Analytics & Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Connect with Us</h3>
            <div className="mb-4 flex gap-4">
              <p className="text-sm">
                Join thousands of students who receive our weekly newsletter with university recommendations,
                application tips, and scholarship opportunities.
              </p>
            </div>
            <h4 className="mb-2 text-sm font-semibold text-white">Subscribe to our newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border-gray-700 bg-gray-800 px-3 py-2 text-sm focus:border-orange-500 focus:ring-orange-500"
              />
              <button className="rounded-r-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} StudyPortal. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-orange-400">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-orange-400">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-orange-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
