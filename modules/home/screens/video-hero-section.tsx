"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

interface VideoSlide {
  id: number
  title: string
  description: string
  videoUrl: string
  posterUrl: string
  category: string
}

export function VideoHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>([])
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const videoSlides: VideoSlide[] = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies",
      videoUrl: "/placeholder.mp4", // Replace with actual video URLs
      posterUrl: "/placeholder.svg?height=1080&width=1920",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Creating native and cross-platform mobile experiences",
      videoUrl: "/placeholder.mp4", // Replace with actual video URLs
      posterUrl: "/placeholder.svg?height=1080&width=1920",
      category: "Mobile Development",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Crafting beautiful and intuitive user interfaces",
      videoUrl: "/placeholder.mp4", // Replace with actual video URLs
      posterUrl: "/placeholder.svg?height=1080&width=1920",
      category: "Design",
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Deploying and scaling applications in the cloud",
      videoUrl: "/placeholder.mp4", // Replace with actual video URLs
      posterUrl: "/placeholder.svg?height=1080&width=1920",
      category: "DevOps",
    },
  ]

  // Preload all videos
  useEffect(() => {
    const loadPromises = videoSlides.map((slide, index) => {
      return new Promise<boolean>((resolve) => {
        const video = document.createElement("video")
        video.src = slide.videoUrl
        video.preload = "metadata"
        video.muted = true
        video.loop = true

        video.addEventListener("loadeddata", () => {
          resolve(true)
        })

        video.addEventListener("error", () => {
          resolve(false)
        })

        // Fallback timeout
        setTimeout(() => resolve(false), 5000)
      })
    })

    Promise.all(loadPromises).then((results) => {
      setVideosLoaded(results)
    })
  }, [])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [videoSlides.length])

  // Handle video play/pause when slide changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide && isPlaying) {
          video.play().catch(console.error)
        } else {
          video.pause()
        }
      }
    })
  }, [currentSlide, isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videoSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videoSlides.length) % videoSlides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {videoSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {videosLoaded[index] ? (
              <video
                ref={(el) => { videoRefs.current[index] = el }}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                poster={slide.posterUrl}
              >
                <source src={slide.videoUrl} type="video/mp4" />
                {/* Fallback image if video fails */}
                <Image
                  src={slide.posterUrl || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </video>
            ) : (
              <Image
                src={slide.posterUrl || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            )}
          </div>
        ))}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-white">
          {/* Category Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge className="bg-[#80AF81]/90 text-white text-lg px-6 py-2 backdrop-blur-sm">
              {videoSlides[currentSlide].category}
            </Badge>
          </motion.div>

          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#508D4E] to-[#1A5319] flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Wilson Kumalo Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Wilson Kumalo
          </motion.h1>

          {/* Dynamic Content Based on Current Slide */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#D6EFD8] drop-shadow-lg">
              {videoSlides[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {videoSlides[currentSlide].description}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/portfolio">
              <Button
                size="lg"
                className="bg-[#1A5319]/90 hover:bg-[#508D4E]/90 text-white px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                View My Work
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 hover:text-white px-8 py-3 rounded-full transition-all duration-300 bg-white/5 backdrop-blur-sm"
            >
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "https://github.com/wilsonkumalo", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/wilsonkumalo", label: "LinkedIn" },
              { icon: Mail, href: "/contact", label: "Contact" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#508D4E]/80 transition-all duration-300 border border-white/20"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="text-white/80"
          >
            <Link href="/about" aria-label="Scroll to learn more about Wilson">
              <ArrowDown
                size={32}
                className="mx-auto cursor-pointer hover:text-white transition-colors drop-shadow-lg"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 left-8 z-20 flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </Button>

        <div className="text-white text-sm backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full border border-white/20">
          {currentSlide + 1} / {videoSlides.length}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 right-4 z-20 flex justify-between pointer-events-none">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 pointer-events-auto"
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          aria-label="Next slide"
          className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 pointer-events-auto"
        >
          <ChevronRight size={20} />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {videoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 ${
              index === currentSlide ? "bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Loading Indicator */}
      {videosLoaded.length === 0 && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center space-x-2 text-white bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">Loading videos...</span>
          </div>
        </div>
      )}
    </section>
  )
}
