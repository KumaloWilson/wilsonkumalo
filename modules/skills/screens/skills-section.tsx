"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Cloud, Wrench, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export function SkillsSection() {
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: Code,
      color: "bg-blue-500",
      skills: [
        { name: "React", level: 95, icon: "/placeholder.svg?height=40&width=40", experience: "4 years" },
        { name: "TypeScript", level: 90, icon: "/placeholder.svg?height=40&width=40", experience: "3 years" },
        { name: "Next.js", level: 88, icon: "/placeholder.svg?height=40&width=40", experience: "2 years" },
        { name: "Vue.js", level: 85, icon: "/placeholder.svg?height=40&width=40", experience: "2 years" },
        { name: "Tailwind CSS", level: 92, icon: "/placeholder.svg?height=40&width=40", experience: "3 years" },
        { name: "SASS/SCSS", level: 88, icon: "/placeholder.svg?height=40&width=40", experience: "4 years" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: Server,
      color: "bg-green-500",
      skills: [
        { name: "Node.js", level: 85, icon: "/placeholder.svg?height=40&width=40", experience: "4 years" },
        { name: "Python", level: 80, icon: "/placeholder.svg?height=40&width=40", experience: "3 years" },
        { name: "Express.js", level: 83, icon: "/placeholder.svg?height=40&width=40", experience: "3 years" },
        { name: "FastAPI", level: 78, icon: "/placeholder.svg?height=40&width=40", experience: "2 years" },
        { name: "GraphQL", level: 75, icon: "/placeholder.svg?height=40&width=40", experience: "2 years" },
        { name: "REST APIs", level: 90, icon: "/placeholder.svg?height=40&width=40", experience: "4 years" },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: Database,
      color: "bg-purple-500",
      skills: [
        { name: "PostgreSQL", level: 82, icon: "/placeholder.svg?height=40&width=40", experience: "3 years" },
        { name: "MongoDB", level: 78, icon: "/placeholder.svg?height=40&width=40", experience: "3 years" },
        { name: "Redis", level: 75, icon: "/placeholder.svg?height=40&width=40", experience: "2 years" },
        { name: "MySQL", level: 80, icon: "/placeholder.svg?height=40&width=40", experience: "4 years" },
        { name: "Supabase", level: 85, icon: "/placeholder.svg?height=40&width=40", experience: "1 year" },
        { name: "Firebase", level: 82, icon: "/placeholder.svg?height=40&width=40", experience: "2 years" },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "bg-orange-500",
      skills: [
        { name: "AWS", level: 75, icon: "/placeholder.svg?height=40&width=40", experience: "2 years" },
        { name: "Docker", level: 78, icon: "/placeholder.svg?height=40&width=40", experience: "2 years" },
        { name: "Vercel", level: 90, icon: "/placeholder.svg?height=40&width=40", experience: "3 years" },
        { name: "Netlify", level: 85, icon: "/placeholder.svg?height=40&width=40", experience: "3 years" },
        { name: "GitHub Actions", level: 80, icon: "/placeholder.svg?height=40&width=40", experience: "2 years" },
        { name: "Kubernetes", level: 65, icon: "/placeholder.svg?height=40&width=40", experience: "1 year" },
      ],
    },
    {
      id: "tools",
      name: "Tools & Others",
      icon: Wrench,
      color: "bg-red-500",
      skills: [
        { name: "Git", level: 90, icon: "/placeholder.svg?height=40&width=40", experience: "5 years" },
        { name: "VS Code", level: 95, icon: "/placeholder.svg?height=40&width=40", experience: "5 years" },
        { name: "Figma", level: 80, icon: "/placeholder.svg?height=40&width=40", experience: "3 years" },
        { name: "Postman", level: 85, icon: "/placeholder.svg?height=40&width=40", experience: "4 years" },
        { name: "Jest", level: 78, icon: "/placeholder.svg?height=40&width=40", experience: "2 years" },
        { name: "Webpack", level: 75, icon: "/placeholder.svg?height=40&width=40", experience: "3 years" },
      ],
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/placeholder.svg?height=80&width=80",
      credentialId: "AWS-SAA-2023-001",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      image: "/placeholder.svg?height=80&width=80",
      credentialId: "GCP-PD-2022-001",
    },
    {
      name: "Meta Frontend Developer Certificate",
      issuer: "Meta",
      date: "2021",
      image: "/placeholder.svg?height=80&width=80",
      credentialId: "META-FE-2021-001",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const { ref, inView: isInView } = useInView({ threshold: 0.2 })

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-[#1A5319] text-center mb-8">
            Skills & Expertise
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-[#508D4E] text-center mb-16 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and certifications that enable me to deliver
            high-quality solutions across the full development stack.
          </motion.p>

          {/* Skills Tabs */}
          <motion.div variants={itemVariants} className="mb-20">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center space-x-2 data-[state=active]:bg-[#1A5319] data-[state=active]:text-white"
                  >
                    <category.icon size={16} />
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-3 mb-8">
                        <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center`}>
                          <category.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-[#1A5319]">{category.name} Skills</h2>
                          <p className="text-[#508D4E]">Technologies and tools I work with</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                          >
                            <Card className="bg-white/60 backdrop-blur-sm border-[#D6EFD8] group-hover:shadow-lg transition-shadow">
                              <CardContent className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                  <Image
                                    src={skill.icon || "/placeholder.svg"}
                                    alt={skill.name}
                                    width={40}
                                    height={40}
                                    className="rounded"
                                  />
                                  <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                      <h3 className="font-semibold text-[#1A5319]">{skill.name}</h3>
                                      <Badge variant="secondary" className="bg-[#D6EFD8] text-[#1A5319]">
                                        {skill.experience}
                                      </Badge>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                      <span className="text-sm text-[#508D4E]">Proficiency</span>
                                      <span className="text-sm font-medium text-[#1A5319]">{skill.level}%</span>
                                    </div>
                                    <Progress value={skill.level} className="h-2" />
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">Certifications & Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} className="group">
                  <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg group-hover:shadow-xl transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#D6EFD8] flex items-center justify-center">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>
                      <h3 className="font-bold text-[#1A5319] mb-2">{cert.name}</h3>
                      <p className="text-[#508D4E] mb-2">{cert.issuer}</p>
                      <Badge className="bg-[#1A5319] text-white mb-3">{cert.date}</Badge>
                      <p className="text-xs text-[#508D4E]">ID: {cert.credentialId}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Journey */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">Continuous Learning</h2>
            <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A5319] mb-4 flex items-center">
                      <Zap className="mr-2" />
                      Currently Learning
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Machine Learning with Python",
                        "Advanced React Patterns",
                        "Microservices Architecture",
                        "Web3 Development",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#80AF81] rounded-full" />
                          <span className="text-[#508D4E]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A5319] mb-4 flex items-center">
                      <Shield className="mr-2" />
                      Next Goals
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Kubernetes Administrator Certification",
                        "Advanced AWS Certifications",
                        "Mobile App Development",
                        "AI/ML Specialization",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#508D4E] rounded-full" />
                          <span className="text-[#508D4E]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning Path Timeline */}
          <motion.div variants={itemVariants} className="mb-20" ref={ref}>
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">My Learning Journey</h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#80AF81]" />
              {[
                { year: "2019", title: "Started Web Development", description: "Began with HTML, CSS, and JavaScript" },
                {
                  year: "2020",
                  title: "Mastered React",
                  description: "Deep dive into React ecosystem and modern patterns",
                },
                {
                  year: "2021",
                  title: "Full-Stack Development",
                  description: "Added Node.js, databases, and cloud services",
                },
                {
                  year: "2022",
                  title: "Advanced Architecture",
                  description: "Microservices, DevOps, and system design",
                },
                {
                  year: "2023",
                  title: "AI & Machine Learning",
                  description: "Exploring AI integration in web applications",
                },
                {
                  year: "2024",
                  title: "Leadership & Mentoring",
                  description: "Leading teams and mentoring developers",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1A5319] rounded-full border-4 border-white shadow-lg" />
                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg">
                      <CardContent className="p-6">
                        <Badge className="bg-[#1A5319] text-white mb-3">{milestone.year}</Badge>
                        <h3 className="font-bold text-[#1A5319] mb-2">{milestone.title}</h3>
                        <p className="text-[#508D4E] text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-[#1A5319] to-[#508D4E] text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
                <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                  With this diverse skill set and continuous learning mindset, I'm ready to tackle your next project.
                  Let's discuss how my expertise can help bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/portfolio">
                    <Button variant="secondary" size="lg" className="bg-white text-[#1A5319] hover:bg-gray-100">
                      View My Projects
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-[#1A5319] bg-transparent"
                    >
                      Start a Conversation
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
