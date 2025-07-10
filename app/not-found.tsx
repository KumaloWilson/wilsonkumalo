"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found | Wilson Kumalo",
  description: "The page you are looking for could not be found. Return to Wilson Kumalo's portfolio homepage.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D6EFD8] to-[#80AF81] px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-8xl font-bold text-[#1A5319] mb-4">404</div>
        <h1 className="text-2xl font-bold text-[#1A5319] mb-4">Page Not Found</h1>
        <p className="text-[#508D4E] mb-8">Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-[#1A5319] hover:bg-[#508D4E] text-white">
              <Home className="mr-2" size={16} />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-[#1A5319] text-[#1A5319] hover:bg-[#1A5319] hover:text-white"
          >
            <ArrowLeft className="mr-2" size={16} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}
