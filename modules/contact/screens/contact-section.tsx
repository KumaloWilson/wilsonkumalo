"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageCircle,
  Clock,
  Globe,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ContactSection() {
  // Load TidyCal script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "kumalowilson900@gmail.com",
      href: "mailto:kumalowilson900@gmail.com",
      description: "Best for detailed project discussions",
      responseTime: "Within 4 hours",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+263 77 191 0924",
      href: "tel:+263771910924",
      description: "For urgent inquiries and consultations",
      responseTime: "Available 9 AM - 6 PM GMT",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+263 77 191 0924",
      href: "https://wa.me/263771910924",
      description: "Quick questions and updates",
      responseTime: "Usually within 1 hour",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/wilson-kumalo-733550243/",
      color: "bg-blue-600",
      followers: "1K+",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/KumaloWilson",
      color: "bg-gray-800",
      followers: "20+",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/KumaloWilson",
      color: "bg-blue-400",
      followers: "10+",
    },
  ]

  const availability = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM GMTT", available: true },
    { day: "Saturday", hours: "Closed", available: false },
    { day: "Sunday", hours: "Closed", available: false },
  ]

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

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-[#1A5319] text-center mb-8">
            Let's Work Together
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-[#508D4E] text-center mb-16 max-w-4xl mx-auto">
            Ready to bring your ideas to life? I'm here to help you create exceptional digital experiences. Whether you
            have a specific project in mind or just want to explore possibilities, let's start a conversation.
          </motion.p>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl font-bold text-[#1A5319] text-center mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a key={index} href={method.href} whileHover={{ scale: 1.05, y: -5 }} className="block group">
                  <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg group-hover:shadow-xl transition-all h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#D6EFD8] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#80AF81] transition-colors">
                        <method.icon size={24} className="text-[#1A5319] group-hover:text-white" />
                      </div>
                      <h3 className="font-bold text-[#1A5319] mb-2">{method.label}</h3>
                      <p className="text-[#508D4E] font-medium mb-2">{method.value}</p>
                      <p className="text-sm text-[#508D4E] mb-3">{method.description}</p>
                      <Badge variant="secondary" className="bg-[#D6EFD8] text-[#1A5319]">
                        {method.responseTime}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* TidyCal Booking Widget - Full Width */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-[#1A5319] mb-6 text-center flex items-center justify-center">
                  <Calendar className="mr-3" />
                  Schedule a Consultation
                </h2>
                <p className="text-xl text-[#508D4E] mb-8 text-center max-w-4xl mx-auto">
                  Book a free consultation call to discuss your project requirements, timeline, and how we can work together.
                </p>
                <div 
                  className="tidycal-embed" 
                  data-path="kumalowilson900"
                  style={{ minHeight: '700px' }}
                ></div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information Grid - Below TidyCal */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Personal Info */}
              <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="John Doe"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A5319]">Wilson Kumalo</h3>
                      <p className="text-[#508D4E]">Full Stack Web and Mobile Developer</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin size={14} className="text-[#508D4E]" />
                        <span className="text-sm text-[#508D4E]">Bulawayo, ZW</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Globe size={16} className="text-[#508D4E]" />
                      <span className="text-[#508D4E]">Available for remote work worldwide</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock size={16} className="text-[#508D4E]" />
                      <span className="text-[#508D4E]">Typically responds within 4 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Schedule */}
              <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-[#1A5319] mb-6 flex items-center">
                    <Calendar className="mr-2" />
                    Availability
                  </h3>
                  <div className="space-y-3">
                    {availability.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span className="text-[#508D4E] font-medium">{schedule.day}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-[#508D4E]">{schedule.hours}</span>
                          <div
                            className={`w-3 h-3 rounded-full ${schedule.available ? "bg-green-500" : "bg-red-500"}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-[#D6EFD8]/50 rounded-lg">
                    <p className="text-sm text-[#508D4E]">
                      <strong>Note:</strong> For urgent matters outside business hours, feel free to call or send a
                      WhatsApp message. I'll respond as soon as possible.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-[#1A5319] mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-[#D6EFD8] hover:border-[#80AF81] transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center`}>
                            <social.icon size={20} className="text-white" />
                          </div>
                          <div>
                            <span className="font-medium text-[#1A5319] group-hover:text-[#508D4E]">{social.name}</span>
                            <p className="text-sm text-[#508D4E]">{social.followers} followers</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-[#D6EFD8] text-[#1A5319]">
                          Follow
                        </Badge>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Why Work With Me */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">Why Work With Me?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Proven Track Record",
                  description: "50+ successful projects delivered on time and within budget",
                  icon: "🏆",
                  stats: "50+ Projects",
                },
                {
                  title: "Technical Expertise",
                  description: "Deep knowledge across the full development stack",
                  icon: "⚡",
                  stats: "3+ Years Experience",
                },
                {
                  title: "Clear Communication",
                  description: "Regular updates and transparent project management",
                  icon: "💬",
                  stats: "24/7 Support",
                },
                {
                  title: "Quality Focused",
                  description: "Clean, maintainable code with comprehensive testing",
                  icon: "✨",
                  stats: "99% Client Satisfaction",
                },
                {
                  title: "Future-Proof Solutions",
                  description: "Built with scalability and modern best practices",
                  icon: "🚀",
                  stats: "Latest Technologies",
                },
                {
                  title: "Ongoing Support",
                  description: "Post-launch maintenance and feature development",
                  icon: "🛠️",
                  stats: "Long-term Partnership",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg group-hover:shadow-xl transition-all h-full">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-4">{benefit.icon}</div>
                      <h3 className="font-bold text-[#1A5319] mb-3">{benefit.title}</h3>
                      <p className="text-[#508D4E] mb-4 leading-relaxed">{benefit.description}</p>
                      <Badge className="bg-[#D6EFD8] text-[#1A5319]">{benefit.stats}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-[#1A5319] text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer:
                    "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. I'll provide a detailed timeline during our initial consultation.",
                },
                {
                  question: "Do you work with international clients?",
                  answer:
                    "I work with clients worldwide and am comfortable with different time zones. I use modern collaboration tools to ensure smooth communication regardless of location.",
                },
                {
                  question: "What's included in your development process?",
                  answer:
                    "My process includes discovery, planning, design, development, testing, deployment, and post-launch support. I provide regular updates and involve you in key decisions throughout.",
                },
                {
                  question: "Do you provide ongoing maintenance?",
                  answer:
                    "Yes, I offer various maintenance packages including bug fixes, security updates, feature additions, and performance optimization. We can discuss the best option for your needs.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-sm border-[#80AF81] shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#1A5319] mb-3">{faq.question}</h3>
                    <p className="text-[#508D4E] leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-[#1A5319] to-[#508D4E] text-white shadow-2xl">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                  Don't let your great ideas remain just ideas. Let's turn them into reality together. I'm here to guide
                  you through every step of the development process.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href={"https://tidycal.com/kumalowilson900"}>
                    <Button size="lg" variant="secondary" className="bg-white text-[#1A5319] hover:bg-gray-100 px-8 py-4">
                    <Calendar className="mr-2" />
                    Schedule a Call
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