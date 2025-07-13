"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function FeaturedProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  
  const featuredProjects = [

    {
      title: "MediGuideAI - Telemedicine Platform",
      description:
        "A smart telemedicine system offering patient triage, appointment booking, video consultations, X-Ray scanning and AI-based symptom checking. Designed to improve healthcare accessibility.",
      image: "/images/projects/mediguide.jpg",
      technologies: ["Next.js", "Flutter", "Dart", "ZEGO cloud", "Tensorflow", "Node.js", "FastAPI", "RAG", "Biomistral", "Pubmed-bert",  "firebase"],
      stats: { metric1: "Prototype", metric2: "95%" },
      featured: true,
      sourceCode: "https://github.com/KumaloWilson/MediGuide_Flutter.git"
    },

    {
    
      title: "CUTcoin - Digital Campus Currency",
      description:
        "CUTcoin is a comprehensive digital campus currency system designed for Chinhoyi University of Technology. The platform enables students to make cashless transactions across campus, merchants to accept digital payments, and administrators to oversee the entire ecosystem.",
      image: "/images/projects/cutcoin.jpg",
      technologies: ["Next.js", "TypeScript", "Paynow", "Express", "Dart", "Flutter", "Twilio", "PostgreSQL"],
      stats: { metric1: "University-wide", metric2: "98%" },
      featured: true,
      sourceCode: "https://github.com/KumaloWilson/cutco.git"
    },
    {
      title: "CUT Analytics - Real-time User Tracking",
      description:
        "This is a real-time web analytics system tailored for tracking user interactions on a CUT university student portal. The system consists of three core components: Browser Extension – Captures user activity and sends data securely. Frontend (React) – Displays real-time and historical analytics. Backend (Express + PostgreSQL/Supabase)",
      image: "/images/projects/cutanalytics.jpg",
      technologies: ["Next.js", "TypeScript", "Webpack", "Express",  "Socket.io", "PostgreSQL"],
      stats: { metric1: "University-wide", metric2: "96%" },
      featured: true,
      sourceCode: "https://github.com/KumaloWilson/cut_portal_web_analytics.git"
    },
    {
      title: "Lucid Eye - Blind Assistant App",
      description:
        "An AI-powered assistive mobile application for the visually impaired, offering real-time object recognition, voice feedback, and navigation assistance using Flutter and TensorFlow Lite.",
      image: "/images/projects/lucid-eye.jpg",
      technologies: ["Flutter", "TensorFlow Lite", "Python", "Firebase", "GetX"],
      stats: { metric1: "Prototype", metric2: "97%" },
      featured: true,
      sourceCode: "https://github.com/KumaloWilson/lucideye.git"
    },
    
  ]


  return (
    <section ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#80AF81] rounded-full opacity-40"
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#1A5319] text-center mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#508D4E] text-center mb-16 max-w-3xl mx-auto"
          >
            A showcase of my recent work that demonstrates my expertise in creating scalable, user-friendly applications
            across various industries.
          </motion.p>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden shadow-2xl border-[#80AF81]">
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A5319]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Overlay Buttons */}
                      <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-3">
                          <Button size="sm" className="bg-white text-[#1A5319] hover:bg-gray-100">
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

                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#80AF81] text-white flex items-center space-x-1">
                          <Star size={12} />
                          <span>Featured</span>
                        </Badge>
                      </div>
                    </div>
                  </Card>

                  {/* Floating Stats Card */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    className="absolute -bottom-6 -left-6"
                  >
                    <Card className="bg-white shadow-xl border-[#80AF81]">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="font-bold text-[#1A5319]">{project.stats.metric1}</div>
                            <div className="text-xs text-[#508D4E]">Users</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-[#1A5319]">{project.stats.metric2}</div>
                            <div className="text-xs text-[#508D4E]">Performance</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-[#1A5319] mb-4">{project.title}</h3>
                    <p className="text-[#508D4E] leading-relaxed text-lg mb-6">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-[#1A5319] mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + techIndex * 0.1 }}
                        >
                          <Badge className="bg-[#D6EFD8] text-[#1A5319] hover:bg-[#80AF81] hover:text-white transition-colors">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      
                      <Link href={project.sourceCode} target="_blank">
                        <Button className="bg-[#1A5319] hover:bg-[#508D4E] text-white">
                          <ExternalLink size={16} className="mr-2" />
                          View Project
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href={project.sourceCode} target="_blank">
                        <Button
                          variant="outline"
                          className="border-[#1A5319] text-[#1A5319] hover:bg-[#1A5319] hover:text-white bg-transparent"
                        >
                          <Github size={16} className="mr-2" />
                        Source Code
                      </Button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <Card className="bg-gradient-to-r from-[#1A5319] to-[#508D4E] text-white shadow-2xl">
              <CardContent className="p-8">
                <TrendingUp size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
                <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                  Explore my complete portfolio to see the full range of projects I've worked on, from small business
                  websites to enterprise applications.
                </p>
                <Link href="/portfolio">
                  <Button size="lg" variant="secondary" className="bg-white text-[#1A5319] hover:bg-gray-100">
                    View All Projects
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
