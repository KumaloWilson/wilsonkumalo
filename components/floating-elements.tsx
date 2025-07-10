"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  isLogo: boolean
  type: string
  opacity?: number
  rotation?: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = theme === "dark"
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // After mounting, we can safely show the theme-dependent content
  useEffect(() => {
    setMounted(true)

    // Set canvas dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Draw circuit lines on canvas
  useEffect(() => {
    if (!mounted || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set line style
    ctx.strokeStyle = isDark ? "rgba(0, 255, 170, 0.1)" : "rgba(0, 180, 120, 0.1)"
    ctx.lineWidth = 1

    // Define point type and initialize array
    interface Point {
      x: number;
      y: number;
    }
    const points: Point[] = []
    const numPoints = 20

    // Create random points
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      })
    }

    // Connect points with lines
    for (let i = 0; i < numPoints; i++) {
      // Connect to 2-3 closest points
      const connections = Math.floor(Math.random() * 2) + 2

      // Find closest points
      const distances = points
        .map((p, index) => {
          if (index === i) return { index, distance: Number.POSITIVE_INFINITY }
          const dx = p.x - points[i].x
          const dy = p.y - points[i].y
          return { index, distance: Math.sqrt(dx * dx + dy * dy) }
        })
        .sort((a, b) => a.distance - b.distance)

      // Draw lines to closest points
      for (let j = 0; j < connections && j < numPoints - 1; j++) {
        const targetIndex = distances[j].index

        ctx.beginPath()
        ctx.moveTo(points[i].x, points[i].y)

        // Create a curved line with control points
        const midX = (points[i].x + points[targetIndex].x) / 2
        const midY = (points[i].y + points[targetIndex].y) / 2
        const offset = (Math.random() - 0.5) * 100

        ctx.quadraticCurveTo(midX + offset, midY + offset, points[targetIndex].x, points[targetIndex].y)

        ctx.stroke()

        // Add circuit node at connection points
        ctx.beginPath()
        ctx.arc(midX + offset, midY + offset, 3, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? "rgba(0, 255, 170, 0.2)" : "rgba(0, 180, 120, 0.2)"
        ctx.fill()
      }

      // Add circuit node at each point
      ctx.beginPath()
      ctx.arc(points[i].x, points[i].y, 4, 0, Math.PI * 2)
      ctx.fillStyle = isDark ? "rgba(0, 255, 170, 0.3)" : "rgba(0, 180, 120, 0.3)"
      ctx.fill()
    }
  }, [mounted, dimensions, isDark])

  useEffect(() => {
    // Generate random floating elements
    const newElements: FloatingElement[] = []
    const count = 25 // Regular floating elements
    const logoCount = 8 // Logo floating elements
    const techShapesCount = 20 // Tech-related shapes
    const binaryCount = 15 // Binary code elements

    // Regular elements
    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100, // Random x position (0-100%)
        y: Math.random() * 100, // Random y position (0-100%)
        size: Math.random() * 20 + 5, // Random size (5-25px)
        duration: Math.random() * 20 + 10, // Random animation duration (10-30s)
        delay: Math.random() * 5, // Random delay (0-5s)
        isLogo: false,
        type: "circle",
        opacity: Math.random() * 0.1 + 0.05, // Random opacity between 0.05 and 0.15
      })
    }

    // Logo elements
    for (let i = 0; i < logoCount; i++) {
      newElements.push({
        id: count + i,
        x: Math.random() * 100, // Random x position (0-100%)
        y: Math.random() * 100, // Random y position (0-100%)
        size: Math.random() * 30 + 40, // Random size (40-70px)
        duration: Math.random() * 30 + 20, // Random animation duration (20-50s)
        delay: Math.random() * 5, // Random delay (0-5s)
        isLogo: true,
        type: "logo",
        opacity: Math.random() * 0.1 + 0.05, // Random opacity between 0.05 and 0.15
      })
    }

    // Tech shapes (squares, rectangles, brackets)
    const techShapes = [
      "square",
      "rectangle",
      "bracket-left",
      "bracket-right",
      "curly-left",
      "curly-right",
      "slash",
      "backslash",
      "dot-grid",
      "circuit-node",
      "hexagon",
      "triangle",
    ]

    for (let i = 0; i < techShapesCount; i++) {
      const shapeType = techShapes[Math.floor(Math.random() * techShapes.length)]
      newElements.push({
        id: count + logoCount + i,
        x: Math.random() * 100, // Random x position (0-100%)
        y: Math.random() * 100, // Random y position (0-100%)
        size: Math.random() * 40 + 10, // Random size (10-50px)
        duration: Math.random() * 25 + 15, // Random animation duration (15-40s)
        delay: Math.random() * 5, // Random delay (0-5s)
        isLogo: false,
        type: shapeType,
        opacity: Math.random() * 0.15 + 0.05, // Random opacity between 0.05 and 0.2
        rotation: Math.random() * 360, // Random initial rotation
      })
    }

    // Binary code elements
    for (let i = 0; i < binaryCount; i++) {
      newElements.push({
        id: count + logoCount + techShapesCount + i,
        x: Math.random() * 100, // Random x position (0-100%)
        y: Math.random() * 100, // Random y position (0-100%)
        size: Math.random() * 10 + 10, // Random size (10-20px)
        duration: Math.random() * 25 + 15, // Random animation duration (15-40s)
        delay: Math.random() * 5, // Random delay (0-5s)
        isLogo: false,
        type: "binary",
        opacity: Math.random() * 0.15 + 0.05, // Random opacity between 0.05 and 0.2
      })
    }

    setElements(newElements)
  }, [])

  const renderTechShape = (element: FloatingElement) => {
    const baseClass = `absolute opacity-${Math.floor(element.opacity! * 100)}`
    const primaryColor = isDark ? "text-primary" : "text-primary"
    const borderColor = isDark ? "border-primary" : "border-primary"

    switch (element.type) {
      case "square":
        return (
          <div
            className={cn(baseClass, borderColor)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              border: "2px solid",
              transform: `rotate(${element.rotation}deg)`,
              opacity: element.opacity,
            }}
          />
        )
      case "rectangle":
        return (
          <div
            className={cn(baseClass, borderColor)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size * 1.5}px`,
              height: `${element.size}px`,
              border: "2px solid",
              transform: `rotate(${element.rotation}deg)`,
              opacity: element.opacity,
            }}
          />
        )
      case "bracket-left":
        return (
          <div
            className={cn(baseClass, "flex items-center justify-center", primaryColor)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              fontWeight: "bold",
              opacity: element.opacity,
            }}
          >
            [
          </div>
        )
      case "bracket-right":
        return (
          <div
            className={cn(baseClass, "flex items-center justify-center", primaryColor)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              fontWeight: "bold",
              opacity: element.opacity,
            }}
          >
            ]
          </div>
        )
      case "curly-left":
        return (
          <div
            className={cn(baseClass, "flex items-center justify-center", primaryColor)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              fontWeight: "bold",
              opacity: element.opacity,
            }}
          >
            {"{"}
          </div>
        )
      case "curly-right":
        return (
          <div
            className={cn(baseClass, "flex items-center justify-center", primaryColor)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              fontWeight: "bold",
              opacity: element.opacity,
            }}
          >
            {"}"}
          </div>
        )
      case "slash":
        return (
          <div
            className={cn(baseClass, "flex items-center justify-center", primaryColor)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              fontWeight: "bold",
              opacity: element.opacity,
            }}
          >
            /
          </div>
        )
      case "backslash":
        return (
          <div
            className={cn(baseClass, "flex items-center justify-center", primaryColor)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              fontWeight: "bold",
              opacity: element.opacity,
            }}
          >
            \
          </div>
        )
      case "dot-grid":
        return (
          <div
            className={cn(baseClass, primaryColor)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size * 1.5}px`,
              height: `${element.size * 1.5}px`,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: "2px",
              opacity: element.opacity,
            }}
          >
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={cn("rounded-full", isDark ? "bg-primary" : "bg-primary")}
                style={{ width: "3px", height: "3px" }}
              />
            ))}
          </div>
        )
      case "circuit-node":
        return (
          <div
            className={cn(baseClass)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              opacity: element.opacity,
            }}
          >
            <div
              className={cn("rounded-full", isDark ? "bg-primary" : "bg-primary")}
              style={{ width: "100%", height: "100%" }}
            />
            <div
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
                isDark ? "bg-background" : "bg-background",
              )}
              style={{ width: "60%", height: "60%" }}
            />
            <div
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
                isDark ? "bg-primary" : "bg-primary",
              )}
              style={{ width: "30%", height: "30%" }}
            />
          </div>
        )
      case "hexagon":
        return (
          <div
            className={cn(baseClass)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size * 0.866}px`, // Height of a hexagon is approximately 0.866 times its width
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              border: `2px solid ${isDark ? "hsl(var(--primary))" : "hsl(var(--primary))"}`,
              transform: `rotate(${element.rotation}deg)`,
              opacity: element.opacity,
            }}
          />
        )
      case "triangle":
        return (
          <div
            className={cn(baseClass)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size * 0.866}px`,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              border: `2px solid ${isDark ? "hsl(var(--primary))" : "hsl(var(--primary))"}`,
              transform: `rotate(${element.rotation}deg)`,
              opacity: element.opacity,
            }}
          />
        )
      case "binary":
        return (
          <div
            className={cn(baseClass, "binary-code", primaryColor)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size / 3}px`,
              opacity: element.opacity,
            }}
          >
            {generateBinaryString()}
          </div>
        )
      case "circle":
      default:
        return (
          <div
            className={cn(baseClass, "rounded-full", isDark ? "bg-primary" : "bg-primary")}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              opacity: element.opacity,
            }}
          />
        )
    }
  }

  const generateBinaryString = () => {
    let result = ""
    const length = Math.floor(Math.random() * 10) + 10 // Random length between 10 and 20
    for (let i = 0; i < length; i++) {
      result += Math.random() > 0.5 ? "1" : "0"
    }
    return result
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />
      {mounted &&
        elements.map((element) =>
          element.isLogo ? (
            <motion.div
              key={element.id}
              className="absolute"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                width: `${element.size}px`,
                height: `${element.size}px`,
                opacity: element.opacity,
              }}
              animate={{
                x: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                ],
                y: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                ],
                rotate: [0, 360],
              }}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/logo-icon.png"
                alt="Kay's Software Icon"
                width={element.size}
                height={element.size}
                className="h-auto w-auto"
              />
            </motion.div>
          ) : (
            <motion.div
              key={element.id}
              animate={{
                x: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                ],
                y: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                ],
                rotate: element.type !== "circle" ? [0, 90, 180, 270, 360] : undefined,
              }}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {renderTechShape(element)}
            </motion.div>
          ),
        )}
    </div>
  )
}
