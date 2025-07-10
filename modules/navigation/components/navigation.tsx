"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.8 // Assuming hero is 80vh

      setScrolled(scrollPosition > 50)
      setIsAtTop(scrollPosition < heroHeight)
    }

    handleScroll() // Check initial position
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  // Determine background based on page and scroll position
  const getNavBackground = () => {
    if (isHomePage && isAtTop) {
      return "bg-transparent" // Fully transparent on home hero
    } else if (scrolled) {
      return "bg-[#1A5319]/95 backdrop-blur-md shadow-lg"
    } else {
      return "bg-[#1A5319]/90 backdrop-blur-sm"
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavBackground()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="text-2xl font-bold text-white drop-shadow-lg">
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 drop-shadow-lg ${
                      pathname === item.href ? "text-[#D6EFD8] font-semibold" : "text-white hover:text-[#D6EFD8]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white drop-shadow-lg" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0 }} className="md:hidden overflow-hidden">
          <div className="py-4 space-y-4 bg-[#1A5319]/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ x: 10 }}>
                <Link
                  href={item.href}
                  className={`block px-4 transition-colors duration-200 ${
                    pathname === item.href ? "text-[#D6EFD8] font-semibold" : "text-white hover:text-[#D6EFD8]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="pt-4 px-4 border-t border-white/20">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
