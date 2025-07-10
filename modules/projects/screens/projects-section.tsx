"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that provides detailed weather information with beautiful visualizations and location-based forecasts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#1A5319] text-center mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-xl overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#1A5319]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" className="bg-white text-[#1A5319] hover:bg-[#D6EFD8]">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-[#1A5319] bg-transparent"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#1A5319] mb-3">{project.title}</h3>
                    <p className="text-[#508D4E] mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#D6EFD8] text-[#1A5319] text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
