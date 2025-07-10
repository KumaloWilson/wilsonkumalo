"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Award, Users, Coffee, Code, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const achievements = [
    { icon: Award, title: "Certified Full Stack Developer", year: "2023" },
    { icon: Code, title: "AWS Solutions Architect", year: "2022" },
    { icon: Users, title: "Team Lead Experience", year: "2021" },
    { icon: Heart, title: "Open Source Contributor", year: "2020" },
  ]

  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading development of enterprise-scale applications, mentoring junior developers, and architecting scalable solutions.",
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description:
        "Developed and maintained multiple client projects, implemented CI/CD pipelines, and improved application performance by 40%.",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "Creative Agency",
      description:
        "Created responsive web applications, collaborated with design teams, and delivered pixel-perfect implementations.",
    },
    {
      year: "2019",
      title: "Junior Developer",
      company: "StartUp Hub",
      description:
        "Started my professional journey, learned modern development practices, and contributed to various projects.",
    },
  ]

  const personalStats = [
    { icon: Coffee, label: "Cups of Coffee", value: "2,847", color: "text-amber-600" },
    { icon: Code, label: "Lines of Code", value: "150K+", color: "text-blue-600" },
    { icon: Users, label: "Happy Clients", value: "45+", color: "text-green-600" },
    { icon: Calendar, label: "Years Experience", value: "5+", color: "text-purple-600" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#1A5319] text-center mb-16"
          >
            About Me
          </motion.h1>

          {/* Hero Section with Image */}
          <motion.div variants={itemVariants} className="mb-20">
            <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="John Doe working"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A5319]/20 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-[#1A5319] mb-6">Hello, I'm John Doe</h2>
                    <p className="text-[#508D4E] leading-relaxed mb-6">
                      I'm a passionate full-stack developer with over 5 years of experience creating digital solutions
                      that combine beautiful design with robust functionality. My journey began with a curiosity about
                      how things work on the web, and it has evolved into a deep love for crafting exceptional user
                      experiences.
                    </p>
                    <p className="text-[#508D4E] leading-relaxed mb-8">
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                      projects, or sharing knowledge with the developer community. I believe in continuous learning and
                      staying ahead of the curve in this ever-evolving field.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Problem Solver", "Team Player", "Innovation Driven", "Detail Oriented"].map((trait) => (
                        <Badge key={trait} variant="secondary" className="bg-[#D6EFD8] text-[#1A5319]">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* My Philosophy */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">My Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "User-Centric Design",
                  description: "Every decision I make is guided by the end user's needs and experience.",
                  icon: "🎯",
                },
                {
                  title: "Clean Code",
                  description: "I believe in writing code that is not just functional, but maintainable and scalable.",
                  icon: "✨",
                },
                {
                  title: "Continuous Learning",
                  description:
                    "Technology evolves rapidly, and I'm committed to staying at the forefront of innovation.",
                  icon: "📚",
                },
              ].map((philosophy, index) => (
                <motion.div key={index} whileHover={{ y: -10, scale: 1.02 }} className="text-center">
                  <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="text-4xl mb-4">{philosophy.icon}</div>
                      <h3 className="text-xl font-bold text-[#1A5319] mb-4">{philosophy.title}</h3>
                      <p className="text-[#508D4E] leading-relaxed">{philosophy.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Stats */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {personalStats.map((stat, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} className="text-center">
                  <Card className="bg-white/60 backdrop-blur-sm border-[#80AF81] shadow-lg">
                    <CardContent className="p-6">
                      <stat.icon size={32} className={`mx-auto mb-4 ${stat.color}`} />
                      <div className="text-2xl font-bold text-[#1A5319] mb-2">{stat.value}</div>
                      <div className="text-sm text-[#508D4E]">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Timeline */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">My Journey</h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#80AF81]" />
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#1A5319] rounded-full border-4 border-white shadow-lg" />
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-[#1A5319] text-white">{item.year}</Badge>
                        </div>
                        <h3 className="text-lg font-bold text-[#1A5319] mb-1">{item.title}</h3>
                        <p className="text-[#508D4E] font-medium mb-3">{item.company}</p>
                        <p className="text-sm text-[#508D4E] leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">Achievements & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div key={index} whileHover={{ scale: 1.02 }} className="group">
                  <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg group-hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#D6EFD8] rounded-full flex items-center justify-center">
                          <achievement.icon size={24} className="text-[#1A5319]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A5319]">{achievement.title}</h3>
                          <p className="text-[#508D4E] text-sm">{achievement.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Preview */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">Core Competencies</h2>
            <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { skill: "Frontend Development", level: 95 },
                    { skill: "Backend Development", level: 88 },
                    { skill: "Database Design", level: 85 },
                    { skill: "DevOps & Deployment", level: 80 },
                  ].map((item, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-[#1A5319]">{item.skill}</span>
                        <span className="text-[#508D4E]">{item.level}%</span>
                      </div>
                      <Progress value={item.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Interests */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">Beyond Coding</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Photography",
                  description: "Capturing moments and exploring creative perspectives through the lens.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Open Source",
                  description: "Contributing to the community and collaborating on meaningful projects.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Mentoring",
                  description: "Helping aspiring developers grow and achieve their career goals.",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((interest, index) => (
                <motion.div key={index} whileHover={{ y: -10 }} className="group">
                  <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={interest.image || "/placeholder.svg"}
                        alt={interest.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-[#1A5319] mb-3">{interest.title}</h3>
                      <p className="text-[#508D4E] text-sm leading-relaxed">{interest.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">Fun Facts About Me</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { fact: "I've written over 150,000 lines of code", emoji: "💻" },
                { fact: "I speak 3 programming languages fluently", emoji: "🗣️" },
                { fact: "I've mentored 25+ junior developers", emoji: "👨‍🏫" },
                { fact: "I contribute to 10+ open source projects", emoji: "🌟" },
              ].map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05, rotate: 2 }} className="text-center">
                  <Card className="bg-gradient-to-br from-[#D6EFD8] to-[#80AF81] border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-3">{item.emoji}</div>
                      <p className="text-[#1A5319] font-medium">{item.fact}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-[#1A5319] to-[#508D4E] text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Let's Create Something Amazing Together</h2>
                <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                  I'm always excited to take on new challenges and collaborate on innovative projects. Whether you have
                  a specific project in mind or just want to explore possibilities, I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/portfolio">
                    <Button variant="secondary" size="lg" className="bg-white text-[#1A5319] hover:bg-gray-100">
                      View My Work
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-[#1A5319] bg-transparent"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
