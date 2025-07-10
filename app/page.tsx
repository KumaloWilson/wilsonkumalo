import { VideoHeroSection } from "@/modules/home/screens/video-hero-section"
import { AboutPreviewSection } from "@/modules/home/screens/about-preview-section"
import { ServicesSection } from "@/modules/home/screens/services-section"
import { FeaturedProjectsSection } from "@/modules/home/screens/featured-projects-section"
import { TestimonialsSection } from "@/modules/home/screens/testimonials-section"
import { BlogPreviewSection } from "@/modules/home/screens/blog-preview-section"
import { CTASection } from "@/modules/home/screens/cta-section"
import { JsonLd } from "@/components/json-ld"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wilson Kumalo - Full Stack Developer & UI/UX Designer",
  description:
    "Welcome to Wilson Kumalo's portfolio. Discover innovative web applications, mobile apps, and digital solutions crafted with modern technologies like React, Next.js, and Node.js.",
  openGraph: {
    title: "Wilson Kumalo - Full Stack Developer & UI/UX Designer",
    description:
      "Welcome to Wilson Kumalo's portfolio. Discover innovative web applications, mobile apps, and digital solutions.",
    url: "https://wilsonkumalo.vercel.app",
    images: [
      {
        url: "/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Wilson Kumalo Portfolio Homepage",
      },
    ],
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wilson Kumalo",
  jobTitle: "Full Stack Developer",
  description: "Passionate full-stack developer with 5+ years of experience creating exceptional digital experiences",
  url: "https://wilsonkumalo.vercel.app",
  image: "https://wilsonkumalo.vercel.app/images/wilson-kumalo-profile.jpg",
  sameAs: [
    "https://linkedin.com/in/wilsonkumalo",
    "https://github.com/wilsonkumalo",
    "https://twitter.com/wilsonkumalo",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Full Stack Development",
    "UI/UX Design",
    "Web Development",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Your University", // Replace with actual education
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance Developer",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Wilson Kumalo Portfolio",
  url: "https://wilsonkumalo.vercel.app",
  description: "Portfolio website of Wilson Kumalo, a full-stack developer specializing in modern web technologies",
  author: {
    "@type": "Person",
    name: "Wilson Kumalo",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://wilsonkumalo.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <div className="min-h-screen">
        <VideoHeroSection />
        <AboutPreviewSection />
        <ServicesSection />
        <FeaturedProjectsSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <CTASection />
      </div>
    </>
  )
}
