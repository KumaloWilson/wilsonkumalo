"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, MessageCircle, Calendar, Star, CheckCircle, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "Free initial consultation",
    "Transparent pricing",
    "Regular progress updates",
    "Post-launch support",
    "Money-back guarantee",
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-[#1A5319] to-[#508D4E] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
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
          className="text-center text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Rocket size={64} className="mx-auto mb-4" />
          </motion.div>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Ready to Launch Your Project?
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90"
          >
            Let's turn your ideas into reality. I'm here to help you create exceptional digital experiences that drive
            results and exceed expectations.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-5 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <CheckCircle size={16} className="text-green-300" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#1A5319] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold"
                >
                  <MessageCircle className="mr-2" />
                  Start Your Project
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1A5319] px-8 py-4 rounded-full font-semibold bg-transparent"
              >
                <Calendar className="mr-2" />
                Schedule a Call
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Star, label: "5-Star Reviews", value: "50+" },
              { icon: Zap, label: "Projects Delivered", value: "100%" },
              { icon: CheckCircle, label: "Client Satisfaction", value: "98%" },
              { icon: ArrowRight, label: "On-Time Delivery", value: "100%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon size={32} className="mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
