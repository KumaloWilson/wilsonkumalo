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
import { LearningJourney } from '../components/learning-outcome';

export function SkillsSection() {
  

 const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code,
    color: "bg-blue-500",
    skills: [
      { name: "Flutter", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", experience: "3 years" },
      { name: "React", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", experience: "2.5 years" },
      { name: "Next.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", experience: "2 years" },
      { name: "TypeScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", experience: "2.5 years" },
      { name: "Tailwind CSS", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", experience: "2.5 years" }
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    color: "bg-green-500",
    skills: [
      { name: "Node.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", experience: "3 years" },
      { name: "Express.js", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", experience: "3 years" },
      { name: "Python", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", experience: "2 years" },
      { name: "Flask", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", experience: "1.5 years" },
      { name: "FastAPI", level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", experience: "1 year" },
      { name: "Spring Boot", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", experience: "3 years" },
      { name: "GraphQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", experience: "1 year" },
      { name: "REST APIs", level: 92, icon: "https://img.icons8.com/external-outline-juicy-fish/40/000000/external-api-coding-and-development-outline-outline-juicy-fish.png", experience: "3 years" },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    color: "bg-purple-500",
    skills: [
      { name: "PostgreSQL", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", experience: "3 years" },
      { name: "MongoDB", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", experience: "2 years" },
      { name: "MySQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", experience: "3 years" },
      { name: "Firebase", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", experience: "3 years" },
      { name: "Supabase", level: 82, icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png", experience: "2 years" },
      { name: "Redis", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", experience: "3 years" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "bg-orange-500",
    skills: [
      { name: "Firebase Hosting", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", experience: "3 years" },
      { name: "Supabase Edge Functions", level: 82, icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png", experience: "2 years" },
      { name: "Docker", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", experience: "2 years" },
      { name: "AWS", level: 78, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", experience: "2 years" },
      { name: "Vercel", level: 90, icon: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/favicon.ico", experience: "2.5 years" },
      { name: "GitHub Actions", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", experience: "2 years" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    icon: Wrench,
    color: "bg-red-500",
    skills: [
      { name: "Git", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", experience: "3 years" },
      { name: "VS Code", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", experience: "3 years" },
      { name: "Postman", level: 90, icon: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png", experience: "3 years" },
      { name: "Figma", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", experience: "3 years" }
    ],
  },
];




  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
     
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
     
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

          {/* Certifications
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
          </motion.div> */}

          <LearningJourney/>
          

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
