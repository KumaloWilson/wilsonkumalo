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
  const [isInView, setIsInView] = useState(true) 

  const projects = [
    {
      "id": 1,
      "title": "FlySpotter Pro",
      "description": "An AI-powered mobile app for real-time fly species identification, tracking, and educational discovery.",
      "longDescription": "FlySpotter Pro revolutionizes fly identification using TensorFlow Lite-powered machine learning for instant, accurate results. Built with Flutter and Firebase, it offers offline capability, cross-platform support, user management, discovery tracking with Google Maps integration, and a rich educational guide. Designed for entomologists, researchers, pest control professionals, and nature enthusiasts.",
      "image": "/flyspotter_pro_cover.svg",
      "gallery": [
        "/flyspotter_pro_screen1.svg",
        "/flyspotter_pro_screen2.svg",
        "/flyspotter_pro_screen3.svg"
      ],
      "technologies": ["Flutter", "Firebase", "TensorFlow Lite", "Google Maps API", "GetX", "Dart"],
      "category": "mobile",
      "liveUrl": "",
      "githubUrl": "https://github.com/KumaloWilson/fly_spotter",
      "featured": true,
      "metrics": {
        "metric1": "90% model accuracy on test dataset",
        "metric2": "Offline support enabled",
        "metric3": "Tested on Android & iOS platforms",
        "metric4": "Prototype demoed to 50 users"
      },
      "timeline": "5 months (prototype)",
      "client": "Open Source Community",
      "year": "2025"
    },

    {
      "id": 2,
      "title": "CUT Portal WhatsApp Bot",
      "description": "A scalable WhatsApp chatbot that provides university students with access to their portal information through WhatsApp.",
      "longDescription": "CUT Portal WhatsApp Bot enables students to navigate their portal features — including profiles, course details, grades, and announcements — via WhatsApp. Built with a clean architecture approach, the system separates concerns into models, services, controllers, and routes. Designed for scalability and real-time support using the WhatsApp Business API.",
      "image": "/cut_portal_bot_cover.svg",
      "gallery": [
        "/cut_portal_bot_screen1.svg",
        "/cut_portal_bot_screen2.svg",
        "/cut_portal_bot_screen3.svg"
      ],
      "technologies": ["Node.js", "WhatsApp Business API", "Express.js"],
      "category": "backend",
      "liveUrl": "",
      "githubUrl": "https://github.com/your-username/cut-portal-whatbot",
      "featured": false,
      "metrics": {
        "metric1": "Clean architecture with separated concerns",
        "metric2": "Supports menu-based navigation",
        "metric3": "Built for integration with WhatsApp Business API",
        "metric4": "Prototype for student services automation"
      },
      "timeline": "2 months (prototype)",
      "client": "CUT Student Community",
      "year": "2025"
    },
    {
      "id": 3,
      "title": "Smart Driver Companion",
      "description": "An AI-enhanced Flutter app for intelligent driver behavior monitoring, community alerts, navigation, and service location.",
      "longDescription": "Smart Driver Companion is a comprehensive Flutter application that integrates AI-driven driver behavior monitoring, real-time community road alerts, turn-by-turn navigation, and a service locator for drivers. Featuring GetX for state management and a clean MVC architecture, the app leverages Firebase, Google Maps APIs, and a custom Python-based behavior scoring API to deliver an engaging, safety-focused driving experience.",
      "image": "/smart_driver_companion_cover.svg",
      "gallery": [
        "/smart_driver_companion_screen1.svg",
        "/smart_driver_companion_screen2.svg",
        "/smart_driver_companion_screen3.svg"
      ],
      "technologies": ["Flutter", "Firebase", "Google Maps API", "GetX", "Python Flask", "Dart"],
      "category": "mobile",
      "liveUrl": "",
      "githubUrl": "https://github.com/kumalowilson/smart-driver-companion",
      "featured": true,
      "metrics": {
        "metric1": "AI-powered real-time driver behavior scoring",
        "metric2": "Community-driven road alert system",
        "metric3": "Google Maps integration with voice guidance",
        "metric4": "Service locator with live proximity search"
      },
      "timeline": "6 months (prototype & MVP)",
      "client": "Open Source Project",
      "year": "2025"
    },
    {
      "id": 4,
      "title": "ZINWA Water Meter System",
      "description": "A prepaid water meter management solution for ZINWA with account management, token purchases, and real-time monitoring.",
      "longDescription": "The ZINWA Water Meter System is a comprehensive platform combining an Express.js backend API with a Flutter mobile app. It empowers customers to manage their water accounts, purchase prepaid tokens, monitor usage, and receive alerts. The backend handles authentication, payments via Paynow, real-time meter reading, analytics, and administrative functions, while the mobile app offers an intuitive user experience with offline support, biometric login, and multi-language support.",
      "image": "/zinwa_water_meter_system_cover.svg",
      "gallery": [
        "/zinwa_water_meter_system_screen1.svg",
        "/zinwa_water_meter_system_screen2.svg",
        "/zinwa_water_meter_system_screen3.svg"
      ],
      "technologies": ["Express.js", "TypeScript", "PostgreSQL", "Redis", "Flutter", "GetX", "Dart", "Docker", "Paynow API"],
      "category": "fullstack",
      "liveUrl": "",
      "githubUrl": "https://github.com/kumalowilson/zinwa_water_meters",
      "featured": true,
      "metrics": {
        "metric1": "Supports prepaid water token generation and purchase",
        "metric2": "Integrated with Paynow Zimbabwe for payments",
        "metric3": "JWT-based multi-role authentication system",
        "metric4": "Deployed with Docker for scalable production environments"
      },
      "timeline": "7 months (MVP & Deployment)",
      "client": "Zimbabwe National Water Authority (ZINWA)",
      "year": "2025"
    },
    {
      "id": 5,
      "title": "LearnSmart AI-Powered Learning Platform",
      "description": "An AI-powered smart learning system for Chinhoyi Technology students with admin, lecturer, and backend modules.",
      "longDescription": "LearnSmart is a full-stack monorepo education platform with AI-powered features for personalized learning and management. The system features separate Next.js frontends for administrators and lecturers, powered by Redux, Radix UI, Tailwind, and more. The backend is built with Node.js, Express, and Sequelize ORM, featuring robust security, OpenAI integration, JWT-based authentication, Supabase for storage, and Paynow for payment processing. Designed for scalability, the platform supports role-based access, learning management, AI integration for enhanced learning experiences, and a modern, maintainable UI/UX.",
      "image": "/learnsmart_cover.svg",
      "gallery": [
        "/learnsmart_admin_dashboard.svg",
        "/learnsmart_lecturer_portal.svg",
        "/learnsmart_backend_api_doc.svg"
      ],
      "technologies": ["Next.js", "React", "Redux Toolkit", "Radix UI", "Tailwind CSS", "Node.js", "Express.js", "TypeScript", "Sequelize", "PostgreSQL", "OpenAI API", "Supabase", "Swagger"],
      "category": "fullstack",
      "liveUrl": "",
      "githubUrl": "https://github.com/KumaloWilson/learnsmart",
      "featured": true,
      "metrics": {
        "metric1": "AI-powered learning assistant with OpenAI API integration",
        "metric2": "Separate role-based portals for admin and lecturers",
        "metric3": "Payment processing via Paynow for premium content",
        "metric4": "Monorepo architecture with shared components and scalable deployment"
      },
      "timeline": "6 months (Prototype & Deployment)",
      "client": "Chinhoyi University of Technology Students",
      "year": "2025"
    },
    {
      "id": 6,
      "title": "Energy Monitor System",
      "description": "A web and mobile platform for real-time monitoring, analysis, and optimization of energy consumption.",
      "longDescription": "Energy Monitor is a multi-platform energy tracking solution aimed at promoting sustainability and efficient energy use. The system includes a Flask-based web application for visualizing energy usage trends and analytics, and a Flutter-based mobile application for monitoring on the go. It provides real-time tracking, historical analysis, device-level monitoring, alerts, and intelligent recommendations. The backend supports secure authentication, RESTful APIs, and integration with smart devices. Built with scalability in mind, Energy Monitor empowers homeowners, facility managers, and organizations to make data-driven decisions on energy consumption.",
      "image": "/energy_monitor_cover.svg",
      "gallery": [
        "/energy_monitor_dashboard.svg",
        "/energy_monitor_device_tracking.svg",
        "/energy_monitor_mobile_app.svg"
      ],
      "technologies": ["Flask", "SQLAlchemy", "Python", "Flutter", "Firebase", "Dart", "Chart.js", "REST API", "JWT Auth"],
      "category": "fullstack",
      "liveUrl": "",
      "githubUrl": "https://github.com/yourusername/energy-monitor",
      "featured": false,
      "metrics": {
        "metric1": "Real-time energy usage tracking and analysis",
        "metric2": "Interactive dashboards with device-level insights",
        "metric3": "Flutter mobile app with Firebase integration",
        "metric4": "Alerts and AI-driven energy-saving recommendations"
      },
      "timeline": "4 months (Web & Mobile MVP)",
      "client": "Energy-conscious homeowners & building managers",
      "year": "2025"
    },

    {
  "id": 7,
  "title": "University Student Portal Web Analytics System",
  "description": "A real-time web analytics platform for monitoring student portal activity using a browser extension, React dashboard, and Express backend with Supabase.",
  "longDescription": "This system provides comprehensive real-time and historical analytics for a university student portal. It tracks active users, clicks, session durations, and navigation flows through a browser extension that streams events via WebSockets. The React dashboard visualizes these insights with charts and heatmaps. The backend, powered by Express and Supabase (PostgreSQL), manages data storage, authentication, and real-time communication. The architecture is optimized for scalability and secure data handling, offering role-based access to administrators and authorized personnel.",
  "image": "/university_analytics_dashboard.svg",
  "gallery": [
    "/analytics_heatmap.svg",
    "/analytics_realtime_users.svg",
    "/analytics_extension_ui.svg"
  ],
  "technologies": [
    "React.js",
    "Socket.io",
    "Tailwind CSS",
    "Zustand",
    "Express.js",
    "Supabase",
    "PostgreSQL",
    "Redis",
    "Prisma ORM",
    "Zod",
    "JWT",
    "Manifest V3"
  ],
  "category": "fullstack",
  "liveUrl": "",
  "githubUrl": "https://github.com/KumaloWilson/cut_portal_web_analytics",
  "featured": false,
  "metrics": {
    "metric1": "Real-time user activity tracking with WebSockets",
    "metric2": "Historical data visualization with interactive charts",
    "metric3": "Role-based secure access for administrators",
    "metric4": "Browser extension for seamless event streaming"
  },
  "timeline": "3 months",
  "client": "Chinhoyi University of Technology",
  "year": "2025"
},

{
  "id": 8,
  "title": "tflite Flutter Plugin",
  "description": "A Flutter plugin providing access to TensorFlow Lite API for image classification, object detection (SSD, YOLO), Pix2Pix, Deeplab, and PoseNet on iOS and Android.",
  "longDescription": "The tflite Flutter plugin allows Flutter apps to perform on-device ML inference using TensorFlow Lite models. It supports a variety of vision tasks such as image classification, object detection using SSD MobileNet and Tiny YOLOv2, image-to-image translation with Pix2Pix, semantic segmentation with Deeplab, and human pose estimation via PoseNet. The plugin is compatible with iOS and Android and includes support for GPU acceleration and real-time camera streams.",
  "image": "/tflite_flutter_logo.svg",
  "gallery": [
    "/ssd_object_detection_demo.png",
    "/yolo_detection_demo.png",
    "/posenet_pose_estimation.png"
  ],
  "technologies": [
    "Flutter",
    "Dart",
    "TensorFlow Lite",
    "iOS",
    "Android",
    "GPU Delegate",
    "Camera Plugin"
  ],
  "category": "mobile",
  "liveUrl": "",
  "githubUrl": "https://github.com/shaqian/flutter_tflite",
  "featured": false,
  "metrics": {
    "metric1": "Supports multiple TFLite model types: classification, detection, segmentation, pose estimation",
    "metric2": "Runs efficiently on both iOS and Android devices",
    "metric3": "Enables real-time inference with camera streams",
    "metric4": "Offers GPU delegate support for enhanced performance"
  },
  "timeline": "Ongoing maintenance and updates",
  "client": "Open source community",
  "year": "2023"
},

{
  "id": 9,
  "title": "GeoFlutterFire3",
  "description": "An advanced Flutter library for performing realtime geoqueries with Firestore, allowing developers to query and listen to documents within a geographic area.",
  "longDescription": "GeoFlutterFire3 is a Flutter library that simplifies storing and querying geospatial data in Firebase Firestore. It enables real-time geolocation querying with automatic updates, making it suitable for location-based apps such as delivery tracking, ride-hailing, and social platforms. The library extends Firestore functionality without altering existing schemas or security rules and provides efficient querying with geohash-based lookups. Inspired by GeoFireX, it offers both reactive streams and single subscriptions with improved memory safety.",
  "image": "/geoflutterfire_logo.svg",
  "gallery": [
    "/geoflutterfire_example_query.png",
    "/geoflutterfire_map_demo.gif"
  ],
  "technologies": [
    "Flutter",
    "Dart",
    "Firebase Firestore",
    "GeoHashing",
    "Stream API",
    "Firestore Realtime Updates"
  ],
  "category": "mobile",
  "liveUrl": "",
  "githubUrl": "https://github.com/KumaloWilson/GeoFlutterFire3",
  "featured": false,
  "metrics": {
    "metric1": "Supports realtime geo queries with Firestore",
    "metric2": "Memory-safe streaming with single subscription control",
    "metric3": "Supports nested geolocation fields in documents",
    "metric4": "Inspired by GeoFireX and enhanced for production use"
  },
  "timeline": "Active maintenance as of 2025",
  "client": "Open Source Community",
  "year": "2025"
},

{
  "id": 10,
  "title": "Lucid Eye — AI Assistance App for the Blind",
  "description": "A Flutter-based mobile application designed to assist visually impaired users with object detection, text recognition, navigation, chatbot interaction, and emergency SOS services.",
  "longDescription": "Lucid Eye is an AI-powered mobile assistant aimed at helping visually impaired users interact with their surroundings. Initially built as a university project, the app evolved into a multi-functional tool offering AI-based object detection, text recognition, currency detection, maps navigation, chatbot communication, and an SOS feature. It provides real-time assistance, leveraging machine learning and external APIs to create a meaningful impact for the blind community.",
  "image": "/lucid_eye_logo.svg",
  "gallery": [
    "/lucid_eye_navigation_demo.png",
    "/lucid_eye_object_detection.png"
  ],
  "technologies": [
    "Flutter",
    "Google ML Kit",
    "Flutter TTS",
    "Flutter Map",
    "Node.js (for maps)",
    "Flask (for chatbot)",
    "Camera & Object Detection",
    "WebSockets"
  ],
  "category": "mobile",
  "liveUrl": "",
  "githubUrl": "",
  "featured": true,
  "metrics": {
    "metric1": "4 Core Features: Object Detection, Navigation, Chatbot, SOS",
    "metric2": "AI-powered real-time assistance for the visually impaired",
    "metric3": "Developed by a team of 6 engineers as a collaborative project",
    "metric4": "Multi-API integration with maps and chatbot AI services"
  },
  "timeline": "Initial release as a university project, actively maintained",
  "client": "Community-focused Open Access",
  "year": "2025"
},

{
  "id": 11,
  "title": "LocalGenAI — Offline AI Assistant",
  "description": "An offline AI assistant app that allows users to download and interact with various language models directly on their devices, with a strong focus on privacy and mobile optimization.",
  "longDescription": "LocalGenAI is a privacy-first AI assistant enabling users to chat with multiple AI language models without requiring an internet connection. Built with Flutter and leveraging mobile-optimized AI models (via ONNX, TensorFlow Lite, Core ML), it offers a fully offline experience. Users can download models, switch between them, and enjoy seamless interaction on both Android and iOS. The app ensures all data remains on-device, making it ideal for users concerned about privacy.",
  "image": "/localgenai_logo.svg",
  "gallery": [
    "/localgenai_dashboard.png",
    "/localgenai_model_selection.png"
  ],
  "technologies": [
    "Flutter",
    "GetX",
    "PyTorch",
    "TensorFlow Lite",
    "ONNX",
    "SQLite",
    "Core ML",
    "Model Optimization"
  ],
  "category": "mobile",
  "liveUrl": "",
  "githubUrl": "",
  "featured": true,
  "metrics": {
    "metric1": "100% Offline AI Interaction",
    "metric2": "Support for multiple AI models with dynamic switching",
    "metric3": "Optimized for privacy and device performance",
    "metric4": "Built-in model management with local metadata handling"
  },
  "timeline": "Released in 2025, active development for expanded model support",
  "client": "Personal Project",
  "year": "2025"
},


{
  "id": 12,
  "title": "SmallMedLM — Fine-tuned Medical Language Model",
  "description": "A lightweight language model fine-tuned on disease and symptom datasets for offline inference in healthcare-related applications.",
  "longDescription": "SmallMedLM is a fine-tuned version of DistilGPT-2 trained on a curated dataset of diseases and symptoms. Designed for lightweight inference on edge devices, it helps map medical terms like diseases to their common symptoms. The training involved tokenizing the dataset, preparing a custom PyTorch DataLoader, and running multi-epoch fine-tuning with validation. The model can generate symptom lists given disease names and is optimized for low-latency offline deployment in healthcare support tools.",
  "image": "/smallmedlm_banner.png",
  "gallery": [
    "/smallmedlm_training_curve.png",
    "/smallmedlm_sample_output.png"
  ],
  "technologies": [
    "PyTorch",
    "Transformers (Hugging Face)",
    "Datasets",
    "Pandas",
    "GPT-2 Fine-tuning",
    "Jupyter Notebook"
  ],
  "category": "ai-ml",
  "liveUrl": "",
  "githubUrl": "",
  "featured": false,
  "metrics": {
    "metric1": "10 training epochs with real-time validation tracking",
    "metric2": "DistilGPT-2 fine-tuned on 400 disease-symptom pairs",
    "metric3": "Offline symptom prediction with autoregressive generation",
    "metric4": "Deployment-ready PyTorch model for edge devices"
  },
  "timeline": "Prototype trained in July 2025",
  "client": "Internal Research / Experimental",
  "year": "2025"
},

{
  "id": 13,
  "title": "St Joseph's Mission Hospital Website",
  "description": "A responsive informational website for St Joseph's Mission Hospital built with React, TypeScript, and TailwindCSS.",
  "longDescription": "A clean, fast, and mobile-friendly website designed for St Joseph's Mission Hospital. Built using React with TypeScript and powered by Vite for optimal development and build speed. The site provides essential information about hospital services, departments, contact details, and general health awareness content.",
  "image": "/stjosephs_banner.png",
  "gallery": [
    "/stjosephs_homepage.png",
    "/stjosephs_about.png",
    "/stjosephs_departments.png"
  ],
  "technologies": [
    "React",
    "TypeScript",
    "Vite",
    "TailwindCSS",
    "React Router",
    "React Spring",
    "React Icons"
  ],
  "category": "web",
  "liveUrl": "",
  "githubUrl": "",
  "featured": false,
  "metrics": {
    "metric1": "Single-page application with smooth navigation",
    "metric2": "Optimized with Vite and TypeScript for scalability",
    "metric3": "Built-in routing with React Router v6",
    "metric4": "Interactive animations powered by React Spring"
  },
  "timeline": "Initial version developed in July 2025",
  "client": "St Joseph's Mission Hospital",
  "year": "2025"
}




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
                      <div className="font-bold text-[#1A5319]">{project.metrics.metric1}</div>
                      <div className="text-xs text-[#508D4E]">Users</div>
                    </div>
                    <div className="text-center p-3 bg-[#D6EFD8]/50 rounded-lg">
                      <div className="font-bold text-[#1A5319]">{project.metrics.metric2}</div>
                      <div className="text-xs text-[#508D4E]">Performance</div>
                    </div>
                    <div className="text-center p-3 bg-[#D6EFD8]/50 rounded-lg">
                      <div className="font-bold text-[#1A5319]">{project.metrics.metric3}</div>
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
