"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Filter, Star, Calendar, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [isInView, setIsInView] = useState(true) // Placeholder, replace with actual inView logic if needed

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with advanced features including real-time inventory management, multi-vendor support, and AI-powered recommendations.",
      longDescription:
        "Built with Next.js 14, this platform handles over 10,000 products and serves 5,000+ daily active users. Features include advanced search, payment processing, order tracking, and admin analytics dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "AWS"],
      category: "web",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/johndoe/ecommerce",
      featured: true,
      stats: {
        users: "5K+",
        performance: "98%",
        uptime: "99.9%",
      },
      timeline: "3 months",
      client: "TechCorp Inc.",
      year: "2024",
    },
    {
      id: 2,
      title: "Task Management SaaS",
      description:
        "A collaborative project management tool with real-time updates, advanced reporting, and team collaboration features.",
      longDescription:
        "Enterprise-grade task management platform serving 50+ companies. Includes Kanban boards, Gantt charts, time tracking, team chat, and comprehensive reporting dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Docker", "AWS"],
      category: "web",
      liveUrl: "https://taskmaster-pro.com",
      githubUrl: "https://github.com/johndoe/taskmaster",
      featured: true,
      stats: {
        users: "2K+",
        performance: "95%",
        uptime: "99.8%",
      },
      timeline: "4 months",
      client: "StartupHub",
      year: "2023",
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description:
        "Advanced analytics platform with machine learning insights, predictive modeling, and interactive data visualizations.",
      longDescription:
        "Custom analytics solution processing 1M+ data points daily. Features AI-driven insights, custom report generation, real-time monitoring, and predictive analytics.",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "TensorFlow", "D3.js"],
      category: "web",
      liveUrl: "https://analytics-pro.com",
      githubUrl: "https://github.com/johndoe/analytics",
      featured: true,
      stats: {
        users: "500+",
        performance: "97%",
        uptime: "99.9%",
      },
      timeline: "5 months",
      client: "DataCorp",
      year: "2023",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management.",
      longDescription:
        "Full-featured banking app with advanced security, supporting 100K+ users. Includes account management, transfers, bill payments, investment tracking, and financial insights.",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Plaid API", "AWS"],
      category: "mobile",
      liveUrl: "https://apps.apple.com/banking-app",
      githubUrl: "https://github.com/johndoe/banking-app",
      featured: true,
      stats: {
        users: "100K+",
        performance: "99%",
        uptime: "99.99%",
      },
      timeline: "6 months",
      client: "FinanceBank",
      year: "2024",
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare platform for patient management, appointment scheduling, and medical records.",
      longDescription:
        "HIPAA-compliant healthcare system serving 20+ clinics. Features patient portals, appointment scheduling, electronic health records, billing integration, and telemedicine capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "AWS", "Docker"],
      category: "web",
      liveUrl: "https://healthsystem-pro.com",
      githubUrl: "https://github.com/johndoe/healthcare",
      featured: false,
      stats: {
        users: "10K+",
        performance: "96%",
        uptime: "99.7%",
      },
      timeline: "8 months",
      client: "MedGroup",
      year: "2022",
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "Modern real estate marketplace with advanced search, virtual tours, and property management tools.",
      longDescription:
        "Full-stack real estate platform with 50K+ property listings. Features include advanced filtering, virtual tours, mortgage calculators, agent profiles, and CRM integration.",
      image: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Stripe", "Vercel"],
      category: "web",
      liveUrl: "https://realestate-hub.com",
      githubUrl: "https://github.com/johndoe/realestate",
      featured: false,
      stats: {
        users: "25K+",
        performance: "94%",
        uptime: "99.5%",
      },
      timeline: "4 months",
      client: "PropertyCorp",
      year: "2023",
    },
  ]

  const filters = [
    { key: "all", label: "All Projects", count: projects.length },
    { key: "web", label: "Web Apps", count: projects.filter((p) => p.category === "web").length },
    { key: "mobile", label: "Mobile Apps", count: projects.filter((p) => p.category === "mobile").length },
    { key: "featured", label: "Featured", count: projects.filter((p) => p.featured).length },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : activeFilter === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.category === activeFilter)

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

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-[#1A5319] text-center mb-8">
            My Portfolio
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-[#508D4E] text-center mb-16 max-w-4xl mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, and enterprise solutions. Each project
            represents a unique challenge solved with modern technologies and best practices.
          </motion.p>

          {/* Portfolio Stats */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Projects Completed", value: "50+", icon: TrendingUp },
                { label: "Happy Clients", value: "30+", icon: Users },
                { label: "Years Experience", value: "5+", icon: Calendar },
                { label: "Technologies Used", value: "25+", icon: Star },
              ].map((stat, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-sm border-[#80AF81] shadow-lg text-center">
                  <CardContent className="p-6">
                    <stat.icon size={32} className="mx-auto mb-3 text-[#1A5319]" />
                    <div className="text-2xl font-bold text-[#1A5319] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#508D4E]">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                {filters.map((filter) => (
                  <TabsTrigger
                    key={filter.key}
                    value={filter.key}
                    className="flex items-center space-x-2 data-[state=active]:bg-[#1A5319] data-[state=active]:text-white"
                  >
                    <Filter size={16} />
                    <span>{filter.label}</span>
                    <Badge variant="secondary" className="ml-1 bg-[#D6EFD8] text-[#1A5319]">
                      {filter.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="space-y-16" layout>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <Card className="overflow-hidden shadow-2xl">
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A5319]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-[#80AF81] text-white flex items-center space-x-1">
                            <Star size={12} />
                            <span>Featured</span>
                          </Badge>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge variant="outline" className="border-[#1A5319] text-[#1A5319]">
                        {project.year}
                      </Badge>
                      <Badge variant="secondary" className="bg-[#D6EFD8] text-[#1A5319]">
                        {project.client}
                      </Badge>
                    </div>
                    <h2 className="text-3xl font-bold text-[#1A5319] mb-4">{project.title}</h2>
                    <p className="text-[#508D4E] leading-relaxed mb-4">{project.longDescription}</p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-[#D6EFD8]/50 rounded-lg">
                      <div className="font-bold text-[#1A5319]">{project.stats.users}</div>
                      <div className="text-xs text-[#508D4E]">Users</div>
                    </div>
                    <div className="text-center p-3 bg-[#D6EFD8]/50 rounded-lg">
                      <div className="font-bold text-[#1A5319]">{project.stats.performance}</div>
                      <div className="text-xs text-[#508D4E]">Performance</div>
                    </div>
                    <div className="text-center p-3 bg-[#D6EFD8]/50 rounded-lg">
                      <div className="font-bold text-[#1A5319]">{project.stats.uptime}</div>
                      <div className="text-xs text-[#508D4E]">Uptime</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-semibold text-[#1A5319] mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-[#80AF81] text-white hover:bg-[#508D4E]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Button className="bg-[#1A5319] hover:bg-[#508D4E] text-white">
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#1A5319] text-[#1A5319] hover:bg-[#1A5319] hover:text-white bg-transparent"
                    >
                      <Github size={16} className="mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Development Process */}
          <motion.div variants={itemVariants} className="mt-20 mb-20">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">My Development Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your needs, goals, and target audience",
                  icon: "🔍",
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "Creating wireframes, architecture, and project timeline",
                  icon: "📋",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building your application with regular updates and feedback",
                  icon: "⚡",
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Deployment, testing, and ongoing support",
                  icon: "🚀",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <Card className="bg-white/60 backdrop-blur-sm border-[#80AF81] shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="text-4xl mb-4">{process.icon}</div>
                      <div className="text-3xl font-bold text-[#80AF81] mb-2">{process.step}</div>
                      <h3 className="text-xl font-bold text-[#1A5319] mb-4">{process.title}</h3>
                      <p className="text-[#508D4E] leading-relaxed">{process.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-20">
            <Card className="bg-gradient-to-r from-[#1A5319] to-[#508D4E] text-white shadow-2xl">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                  I'm passionate about creating exceptional digital experiences. Whether you need a web application,
                  mobile app, or enterprise solution, let's discuss how we can bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-[#1A5319] hover:bg-gray-100 px-8 py-4"
                    >
                      Start a Project
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-[#1A5319] px-8 py-4 bg-transparent"
                    >
                      Learn More About Me
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
