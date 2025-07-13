"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Users, Award, Coffee } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutPreviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+", color: "text-blue-600" },
    { icon: Users, label: "Happy Clients", value: "20+", color: "text-green-600" },
    { icon: Award, label: "Years Experience", value: "3+", color: "text-purple-600" },
    { icon: Coffee, label: "Cups of Coffee", value: "12", color: "text-amber-600" },
  ]

    const skills = [
    "Flutter",
    "GetX",
    "Firebase",
    "Supabase",
    "Google Maps API",
    "Node.js",
    "Express.js",
    "Sequelize",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Python",
    "FastAPI",
    "Flask",
    "TensorFlow",
    "scikit-learn",
    "PyTorch",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Docker",
    "DevOps",
    "AWS",
    "Azure",
    "GraphQL",
    "WooCommerce",
    "Mapbox",
    "Linux (Kali, Ubuntu)",
    "MySQL",
    "REST APIs",
    "Clean Architecture",
    "MVC Architecture",
    "Git & GitHub",
    "Agile & Scrum",
    "Responsive Web Design",
    "CI/CD Pipelines",
    "LLMs (Local & Cloud)",
    "Chatbot Development",
    "AI Integration",
    "Geospatial Data Handling"
  ]


  return (
    <section ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#D6EFD8] rounded-full opacity-60"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
            className="text-4xl md:text-5xl font-bold text-[#1A5319] text-center mb-16"
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Side */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <Image
                    src="/images/home/about.jpg"
                    alt="John Doe working"
                    width={400}
                    height={500}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A5319]/20 to-transparent" />
                </motion.div>

                {/* Floating Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -right-6"
                >
                  <Card className="bg-white shadow-xl border-[#80AF81]">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#D6EFD8] rounded-full flex items-center justify-center">
                          <Zap className="text-[#1A5319]" size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-[#1A5319]">Always Learning</p>
                          <p className="text-sm text-[#508D4E]">New Technologies</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-2xl font-bold text-[#1A5319] mb-4"
                >
                  Full Stack Web & Mobile App Developer
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-[#508D4E] leading-relaxed mb-6"
                >
                  I'm a dedicated full-stack developer with over 3 years of experience creating digital solutions that
                  combine beautiful design with robust functionality. My passion lies in transforming complex problems
                  into elegant, user-friendly applications.
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-[#508D4E] leading-relaxed mb-6"
                >
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </motion.p>
              </div>

              {/* Skills Tags */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h4 className="font-semibold text-[#1A5319] mb-3">Core Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    >
                      <Badge className="bg-[#D6EFD8] text-[#1A5319] hover:bg-[#80AF81] hover:text-white transition-colors">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Link href="/about">
                  <Button className="bg-[#1A5319] hover:bg-[#508D4E] text-white px-8 py-3 rounded-full">
                    Learn More About Me
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg text-center">
                  <CardContent className="p-6">
                    <stat.icon size={32} className={`mx-auto mb-3 ${stat.color}`} />
                    <div className="text-2xl font-bold text-[#1A5319] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#508D4E]">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
