"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe, Database, Cloud, Palette, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Vue.js",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"],
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      color: "bg-green-500",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable server-side solutions with Node.js, Python, and cloud databases",
      features: ["RESTful APIs", "Database Design", "Authentication", "Real-time Features"],
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud deployment, CI/CD pipelines, and infrastructure management",
      features: ["AWS/GCP Deployment", "Docker Containers", "CI/CD Pipelines", "Monitoring"],
      color: "bg-orange-500",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "bg-pink-500",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: Code,
      title: "Consulting",
      description: "Technical consulting, code reviews, and architecture planning",
      features: ["Code Audits", "Architecture Review", "Performance Optimization", "Team Training"],
      color: "bg-indigo-500",
      gradient: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-[#D6EFD8] to-[#80AF81] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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
            What I Do
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#508D4E] text-center mb-16 max-w-3xl mx-auto"
          >
            I offer comprehensive development services to help bring your digital vision to life, from initial concept
            to final deployment and beyond.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white/90 backdrop-blur-sm border-white/50 shadow-xl h-full overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header with Icon */}
                    <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
                      <div className="relative z-10">
                        <service.icon size={40} className="mb-4" />
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-[#508D4E] mb-6 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ x: -20, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + featureIndex * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle size={16} className="text-[#80AF81]" />
                            <span className="text-sm text-[#508D4E]">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-[#1A5319] font-medium cursor-pointer group-hover:text-[#508D4E] transition-colors"
                      >
                        <span className="mr-2">Learn More</span>
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-[#1A5319] mb-4">Ready to Start Your Project?</h3>
            <p className="text-[#508D4E] mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. I'm here to help you every step of
              the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-[#1A5319] hover:bg-[#508D4E] text-white px-8 py-3 rounded-full">
                  Get Started
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-[#1A5319] text-[#1A5319] hover:bg-[#1A5319] hover:text-white px-8 py-3 rounded-full bg-white"
                >
                  View My Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
