import { ContactSection } from "@/modules/contact/screens/contact-section"
import { JsonLd } from "@/components/json-ld"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Wilson Kumalo - Let's Work Together",
  description:
    "Get in touch with Wilson Kumalo for your next web development project. Available for freelance work, consultations, and collaborations. Contact via email, phone, or project inquiry form.",
  openGraph: {
    title: "Contact Wilson Kumalo - Let's Work Together",
    description: "Get in touch with Wilson Kumalo for your next web development project.",
    url: "https://wilsonkumalo.vercel.app/contact",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Wilson Kumalo",
      },
    ],
  },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Wilson Kumalo",
  description: "Get in touch with Wilson Kumalo for web development projects",
  url: "https://wilsonkumalo.vercel.app/contact",
  mainEntity: {
    "@type": "Person",
    name: "Wilson Kumalo",
    email: "kumalowilson900@gmail.com", // Replace with actual email
    telephone: "+263-77-191-0924", // Replace with actual phone
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bulawayo",
      addressRegion: "BYO",
      addressCountry: "ZW",
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <div className="min-h-screen bg-gradient-to-br from-[#D6EFD8] to-[#80AF81] pt-20">
        <ContactSection />
      </div>
    </>
  )
}
