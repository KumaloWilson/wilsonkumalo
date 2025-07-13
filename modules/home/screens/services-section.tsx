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
      description: "I craft high-performance web apps using Next.js, React, Tailwind, and modern APIs. From dashboards to booking platforms, I build responsive, scalable, and intuitive UIs.",
      features: ["Full-Stack Solutions", "Modern UI/UX", "Responsive Design", "SEO Optimized"],
      color: "#1A5319",
      bgColor: "#D6EFD8",
      image: "/images/services/web-dev.jpg",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "I build beautiful cross-platform apps using Flutter with GetX architecture, Firebase integration, and powerful animations. Apps like ride-hailing and virtual assistants are my forte.",
      features: ["Cross-Platform (iOS/Android)", "Firebase Integration", "App Store/Play Store Ready", "Rich Animations"],
      color: "#1A5319",
      bgColor: "#D6EFD8",
      image: "/images/services/mobile-dev.jpg",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions using Node.js, Express, FastAPI, Flask, Laravel, Spring Boot and more. I also integrate cloud databases, APIs, and complex authentication systems.",
      features: ["RESTful & GraphQL APIs", "Database Design", "Authentication & RBAC", "Real-time Features (Sockets)"],
      color: "#1A5319",
      bgColor: "#D6EFD8",
      image: "/images/services/backend-dev.jpg",
    },
    {
      icon: Code,
      title: "Tech Consulting & Mentoring",
      description: "I help startups and teams make the right tech choices, audit codebases, and optimize performance. I also train junior devs and lead agile teams.",
      features: ["Architecture Planning", "Code Reviews", "Performance Tuning", "Mentorship & Training"],
      color: "#1A5319",
      bgColor: "#D6EFD8",
      image: "/images/services/consulting.jpg",
    },
  ]



  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      
    },
  }


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

                   <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full border-2 border-transparent hover:border-[#508D4E] transition-all duration-300">
                  {/* Image */}
                  <div className="h-48 bg-[#D6EFD8] relative overflow-hidden">
                    <div
                      className="w-full h-full bg-gray-200 flex items-center justify-center"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <service.icon size={48} className="text-[#508D4E] opacity-50" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-[#508D4E] rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1A5319] mb-2">{service.title}</h3>
                        <div className="w-12 h-1 bg-[#80AF81]"></div>
                      </div>
                    </div>

                  {/* Description */}
                  <p className="text-[#508D4E] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ x: -10, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle size={18} className="text-[#80AF81] flex-shrink-0" />
                        <span className="text-[#508D4E] font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  
                  </div>
                </div>
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


