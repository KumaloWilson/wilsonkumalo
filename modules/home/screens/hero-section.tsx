"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#508D4E] to-[#1A5319] flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="John Doe Profile"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-[#1A5319] mb-6">
          John Doe
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#508D4E] mb-8 max-w-2xl mx-auto">
          Full Stack Developer & UI/UX Designer crafting digital experiences that matter
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-[#1A5319] hover:bg-[#508D4E] text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              View My Work
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-[#1A5319] text-[#1A5319] hover:bg-[#1A5319] hover:text-white px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
          >
            Download CV
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "/contact" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-[#80AF81] rounded-full flex items-center justify-center text-white hover:bg-[#508D4E] transition-colors duration-300"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="text-[#508D4E]"
        >
          <Link href="/about">
            <ArrowDown size={32} className="mx-auto cursor-pointer hover:text-[#1A5319] transition-colors" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
