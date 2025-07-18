import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/modules/navigation/components/navigation"
import { FloatingElements } from "@/components/floating-elements"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://wilsonkumalo.vercel.app"), // Replace with your actual domain
  title: {
    default: "Wilson Kumalo - Full Stack Web & Mobile App Developer",
    template: "%s | Wilson Kumalo - Full Stack Web & Mobile App Developer",
  },
  description:
    "Wilson Kumalo is a passionate full-stack developer with 5+ years of experience creating exceptional digital experiences. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Wilson Kumalo",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Designer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Software Engineer",
    "Mobile App Developer",
    "Flutter Developer",
    "Web Applications",
    "Mobile Applications",
    "Web Design",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Wilson Kumalo", url: "https://wilsonkumalo.vercel.app" }],
  creator: "Wilson Kumalo",
  publisher: "Wilson Kumalo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wilsonkumalo.vercel.app",
    siteName: "Wilson Kumalo - Full Stack Developer",
    title: "Wilson Kumalo - Full Stack Web & Mobile App Developer",
    description:
      "Passionate full-stack developer with 5+ years of experience creating exceptional digital experiences. Specializing in React, Next.js, Node.js, and modern web technologies.",
    images: [
      {
        url: "/logo/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Wilson Kumalo - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilson Kumalo - Full Stack Web & Mobile App Developer",
    description: "Passionate full-stack developer creating exceptional digital experiences with modern technologies.",
    creator: "@KumaloWilson",
    images: ["/logo/icon.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "JaDQXUSonG-R0nxX3nY86RPUE99iXNz9D6u_C8xTw7U",
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: "https://wilsonkumalo.vercel.app",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1A5319" />
        <meta name="google-site-verification" content="JaDQXUSonG-R0nxX3nY86RPUE99iXNz9D6u_C8xTw7U" />
        <meta name="msapplication-TileColor" content="#1A5319" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <FloatingElements />
          <Navigation />
          <main className="min-h-screen relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
