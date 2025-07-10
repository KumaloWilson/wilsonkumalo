import { AboutSection } from "@/modules/about/screens/about-section"
import { JsonLd } from "@/components/json-ld"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Wilson Kumalo - Full Stack Developer Journey",
  description:
    "Learn about Wilson Kumalo's journey as a full-stack developer, his philosophy, achievements, and the technologies he masters. Discover his 5+ years of experience in web development.",
  openGraph: {
    title: "About Wilson Kumalo - Full Stack Developer Journey",
    description: "Learn about Wilson Kumalo's journey as a full-stack developer, his philosophy, and achievements.",
    url: "https://wilsonkumalo.vercel.app/about",
    images: [
      {
        url: "/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Wilson Kumalo",
      },
    ],
  },
}

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Wilson Kumalo",
  description: "Learn about Wilson Kumalo's journey as a full-stack developer",
  url: "https://wilsonkumalo.vercel.app/about",
  mainEntity: {
    "@type": "Person",
    name: "Wilson Kumalo",
    jobTitle: "Full Stack Developer",
    yearsOfExperience: "5+",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "UI/UX Design"],
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <div className="min-h-screen bg-gradient-to-br from-[#D6EFD8] to-[#80AF81] pt-20">
        <AboutSection />
      </div>
    </>
  )
}
