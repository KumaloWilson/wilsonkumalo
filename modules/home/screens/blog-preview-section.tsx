"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from "lucide-react"
import Image from "next/image"

export function BlogPreviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      title: "Building Scalable React Applications in 2024",
      excerpt:
        "Learn the latest patterns and best practices for creating maintainable React applications that can grow with your business needs.",
      image: "/placeholder.svg?height=200&width=350",
      category: "React",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      trending: true,
    },
    {
      title: "The Future of Full-Stack Development",
      excerpt:
        "Exploring emerging technologies and frameworks that are shaping the future of web development and what developers should focus on.",
      image: "/placeholder.svg?height=200&width=350",
      category: "Web Development",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      trending: false,
    },
    {
      title: "Optimizing Database Performance at Scale",
      excerpt:
        "Practical strategies for improving database performance when dealing with millions of records and high-traffic applications.",
      image: "/placeholder.svg?height=200&width=350",
      category: "Database",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      trending: true,
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-[#D6EFD8] rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
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
            className="text-4xl md:text-5xl font-bold text-[#1A5319] text-center mb-6"
          >
            Latest Insights
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#508D4E] text-center mb-16 max-w-3xl mx-auto"
          >
            I love sharing knowledge and insights about web development, technology trends, and best practices. Here are
            some of my recent articles.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="bg-white border-[#80AF81] shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={350}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#1A5319] text-white">{post.category}</Badge>
                    </div>

                    {/* Trending Badge */}
                    {post.trending && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-500 text-white flex items-center space-x-1">
                          <TrendingUp size={12} />
                          <span>Trending</span>
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-[#508D4E] mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#1A5319] mb-3 group-hover:text-[#508D4E] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-[#508D4E] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-[#1A5319] font-medium group-hover:text-[#508D4E] transition-colors"
                    >
                      <span className="mr-2">Read More</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Blog CTA */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-[#1A5319] to-[#508D4E] text-white shadow-2xl max-w-4xl mx-auto">
              <CardContent className="p-8">
                <BookOpen size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Want to Read More?</h3>
                <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                  I regularly publish articles about web development, technology trends, and programming best practices.
                  Subscribe to stay updated with my latest insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-[#1A5319] hover:bg-gray-100">
                    <BookOpen className="mr-2" />
                    View All Articles
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#1A5319] bg-transparent"
                  >
                    Subscribe to Newsletter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
