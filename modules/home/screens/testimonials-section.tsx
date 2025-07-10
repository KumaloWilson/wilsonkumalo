"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise helped us increase our online sales by 300%. The project was completed on time and within budget.",
      project: "E-Commerce Platform",
      results: "300% increase in sales",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupHub",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with John was a game-changer for our startup. He built a scalable task management platform that now serves over 2,000 users daily. His code quality and architectural decisions were spot-on.",
      project: "Task Management SaaS",
      results: "2K+ daily active users",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "DataCorp",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "John's expertise in AI and data visualization helped us create an analytics dashboard that processes over 1M data points daily. His ability to translate complex requirements into elegant solutions is remarkable.",
      project: "AI Analytics Dashboard",
      results: "1M+ data points processed",
    },
    {
      name: "David Thompson",
      role: "Founder",
      company: "FinanceBank",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Security and performance were critical for our banking app. John delivered a solution that handles 100K+ users with 99.99% uptime. His understanding of financial regulations and security best practices was invaluable.",
      project: "Mobile Banking App",
      results: "99.99% uptime achieved",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-[#D6EFD8] to-[#80AF81] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.1' fillRule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
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
            What Clients Say
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#508D4E] text-center mb-16 max-w-3xl mx-auto"
          >
            Don't just take my word for it. Here's what my clients have to say about working with me and the results
            we've achieved together.
          </motion.p>

          {/* Main Testimonial */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <Card className="bg-white/95 backdrop-blur-sm border-white/50 shadow-2xl max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Client Info */}
                  <div className="text-center md:text-left">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative inline-block mb-4"
                    >
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#80AF81] rounded-full flex items-center justify-center">
                        <Quote size={16} className="text-white" />
                      </div>
                    </motion.div>

                    <motion.div
                      key={`info-${currentTestimonial}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h3 className="font-bold text-[#1A5319] text-lg">{testimonials[currentTestimonial].name}</h3>
                      <p className="text-[#508D4E] mb-2">{testimonials[currentTestimonial].role}</p>
                      <p className="text-[#508D4E] font-medium mb-3">{testimonials[currentTestimonial].company}</p>

                      {/* Rating */}
                      <div className="flex justify-center md:justify-start space-x-1 mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Project Badge */}
                      <Badge className="bg-[#D6EFD8] text-[#1A5319]">{testimonials[currentTestimonial].project}</Badge>
                    </motion.div>
                  </div>

                  {/* Testimonial Text */}
                  <div className="md:col-span-2">
                    <motion.blockquote
                      key={`text-${currentTestimonial}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-[#508D4E] text-lg leading-relaxed mb-6 italic"
                    >
                      "{testimonials[currentTestimonial].text}"
                    </motion.blockquote>

                    {/* Results */}
                    <motion.div
                      key={`results-${currentTestimonial}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-[#D6EFD8]/50 rounded-lg p-4"
                    >
                      <p className="text-sm text-[#508D4E] mb-1">Key Result:</p>
                      <p className="font-bold text-[#1A5319] text-lg">{testimonials[currentTestimonial].results}</p>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center space-x-4 mb-12"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-[#1A5319] text-[#1A5319] hover:bg-[#1A5319] hover:text-white bg-white"
            >
              <ChevronLeft size={16} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-[#1A5319]" : "bg-[#80AF81]"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-[#1A5319] text-[#1A5319] hover:bg-[#1A5319] hover:text-white bg-white"
            >
              <ChevronRight size={16} />
            </Button>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-[#1A5319] mb-8">Trusted by Amazing Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {["TechCorp", "StartupHub", "DataCorp", "FinanceBank"].map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="bg-white/80 rounded-lg p-4 shadow-lg"
                >
                  <div className="text-[#1A5319] font-bold text-lg">{company}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
