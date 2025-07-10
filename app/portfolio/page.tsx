import { PortfolioSection } from "@/modules/portfolio/screens/portfolio-section"
import { JsonLd } from "@/components/json-ld"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio - Wilson Kumalo's Web Development Projects",
  description:
    "Explore Wilson Kumalo's portfolio of web applications, mobile apps, and digital solutions. See projects built with React, Next.js, Node.js, and modern technologies.",
  openGraph: {
    title: "Portfolio - Wilson Kumalo's Web Development Projects",
    description: "Explore Wilson Kumalo's portfolio of innovative web applications and digital solutions.",
    url: "https://wilsonkumalo.vercel.app/portfolio",
    images: [
      {
        url: "/images/portfolio-og.jpg",
        width: 1200,
        height: 630,
        alt: "Wilson Kumalo Portfolio Projects",
      },
    ],
  },
}

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Wilson Kumalo's Portfolio",
  description: "A collection of web development projects and digital solutions",
  url: "https://wilsonkumalo.vercel.app/portfolio",
  author: {
    "@type": "Person",
    name: "Wilson Kumalo",
  },
  workExample: [
    {
      "@type": "SoftwareApplication",
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features",
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
      programmingLanguage: ["JavaScript", "TypeScript", "React", "Next.js"],
    },
    {
      "@type": "SoftwareApplication",
      name: "Task Management SaaS",
      description: "Collaborative project management tool with real-time updates",
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
      programmingLanguage: ["React", "Node.js", "MongoDB"],
    },
  ],
}

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <div className="min-h-screen bg-gradient-to-br from-[#D6EFD8] to-[#80AF81] pt-20">
        <PortfolioSection />
      </div>
    </>
  )
}
