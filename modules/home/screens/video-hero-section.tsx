"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

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
      videoUrl: "/videos/1.mov",
      posterUrl: "/images/home/hero.jpg",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Creating native and cross-platform mobile experiences",
      videoUrl: "/videos/2.mov",
      posterUrl: "/images/home/hero.jpg",
      category: "Mobile Development",
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
    }, 8000)

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
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
                <div
                  className="w-full h-full bg-gray-800 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${slide.posterUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </video>
            ) : (
              <div
                className="w-full h-full bg-gray-800 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${slide.posterUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            )}
          </div>
        ))}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            className="text-white space-y-8"
          >
            {/* Category Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-[#80AF81] text-white text-sm font-medium px-4 py-2 rounded-full">
                {videoSlides[currentSlide].category}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Wilson Kumalo
              </h1>
              <div className="w-20 h-1 bg-[#508D4E] mt-4"></div>
            </motion.div>

            {/* Dynamic Content */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#D6EFD8]">
                {videoSlides[currentSlide].title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                {videoSlides[currentSlide].description}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              
              <Link href="/portfolio">
                <button className="bg-[#1A5319] hover:bg-[#508D4E] text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300">
                View My Work
              </button>

              </Link>
              

              <Link href='https://drive.google.com/file/d/1yQZZbTiq2nTIk5DAQOhAvInbE7UI_Aff/view'>
                <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-medium transition-all duration-300">
                Download CV
              </button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/kumalowilson", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/wilson-kumalo-733550243/", label: "LinkedIn" },
                { icon: Mail, href: "/contact", label: "Contact" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-[#508D4E] hover:border-[#508D4E] transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile and Navigation */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
            className="flex flex-col items-center lg:items-end space-y-8"
          >
            {/* Profile Image */}
            <motion.div variants={itemVariants}>
              <div className="w-64 h-64 bg-[#508D4E] rounded-2xl flex items-center justify-center overflow-hidden border-4 border-white/20">
                <div
                  className="w-full h-full bg-gray-600 flex items-center justify-center text-white text-6xl font-bold"
                  style={{
                    backgroundImage: 'url(https://avatars.githubusercontent.com/u/121590986?v=4)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
              </div>
            </motion.div>

            {/* Slide Navigation */}
            <motion.div variants={itemVariants} className="flex flex-col items-center space-y-6">
              {/* Slide Counter */}
              <div className="text-white text-sm font-medium">
                {String(currentSlide + 1).padStart(2, '0')} / {String(videoSlides.length).padStart(2, '0')}
              </div>

              {/* Navigation Arrows */}
              <div className="flex space-x-4">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-12 h-12 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-12 h-12 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {videoSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 left-8 z-20 flex items-center space-x-4">
        <button
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="w-10 h-10 bg-black/50 border border-white/20 text-white hover:bg-black/70 rounded-lg flex items-center justify-center transition-all duration-300"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-white cursor-pointer transition-colors"
        >
          <span className="text-sm font-medium">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>

      {/* Loading Indicator */}
      {videosLoaded.length === 0 && (
        <div className="absolute top-8 right-8 z-20">
          <div className="flex items-center space-x-3 text-white bg-black/50 px-4 py-3 rounded-lg border border-white/20">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">Loading videos...</span>
          </div>
        </div>
      )}
    </section>
  )
}