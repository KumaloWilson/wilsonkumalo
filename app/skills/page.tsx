import { SkillsSection } from "@/modules/skills/screens/skills-section"
import { JsonLd } from "@/components/json-ld"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills & Expertise - Wilson Kumalo's Technical Proficiencies",
  description:
    "Explore Wilson Kumalo's comprehensive skill set including React, Next.js, Node.js, Python, AWS, and more. View certifications and technical expertise across the full development stack.",
  openGraph: {
    title: "Skills & Expertise - Wilson Kumalo's Technical Proficiencies",
    description: "Explore Wilson Kumalo's comprehensive skill set and technical expertise.",
    url: "https://wilsonkumalo.vercel.app/skills",
    images: [
      {
        url: "/logo/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Wilson Kumalo Skills and Expertise",
      },
    ],
  },
}

const skillsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Wilson Kumalo's Technical Skills",
  description: "Comprehensive list of Wilson Kumalo's technical skills and expertise",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Frontend Development",
      description: "React, Flutter, Next.js, TypeScript, Tailwind CSS",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Backend Development",
      description: "Node.js, Python, Express.js, FastAPI",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Database Technologies",
      description: "PostgreSQL, MongoDB, Redis, MySQL",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Cloud & DevOps",
      description: "AWS, Docker, Kubernetes, CI/CD",
    },
  ],
}

export default function SkillsPage() {
  return (
    <>
      <JsonLd data={skillsSchema} />
      <div className="min-h-screen bg-gradient-to-br from-[#D6EFD8] to-[#80AF81] pt-20">
        <SkillsSection />
      </div>
    </>
  )
}
