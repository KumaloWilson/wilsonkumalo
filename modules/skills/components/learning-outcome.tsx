import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Badge } from "lucide-react";
import { useRef } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
   
  }
};

const timelineItemVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
    y: 20
  }),
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    
  })
};

// Your component
export function LearningJourney() {
  // Separate refs for each section
  const journeyRef = useRef(null);
  const timelineRef = useRef(null);
  
  // Separate useInView hooks
  const isJourneyInView = useInView(journeyRef, { 
    once: true, 
    margin: "-100px" 
  });
  const isTimelineInView = useInView(timelineRef, { 
    once: true, 
    margin: "-100px" 
  });

  

  const milestones = [
    {
      year: "2022",
      title: "Started Mobile & Frontend Development",
      description:
        "Began building mobile apps using Flutter and explored UI frameworks like Tailwind CSS, laying a strong foundation in cross-platform UI development.",
    },
    {
      year: "2022",
      title: "Backend & API Mastery",
      description:
        "Gained hands-on experience with Node.js and Express.js. Designed scalable RESTful APIs and integrated databases like PostgreSQL and Firebase.",
    },
    {
      year: "2023",
      title: "Cloud & DevOps Expansion",
      description:
        "Worked with Vercel, Firebase Hosting, Docker, and GitHub Actions. Deployed full-stack applications and automated development workflows.",
    },
    {
      year: "2023",
      title: "Advanced Frontend Engineering",
      description:
        "Built production-grade apps using React, Next.js, and TypeScript. Focused on performance optimization, accessibility, and clean architecture.",
    },
    {
      year: "2023",
      title: "Backend Architecture & Realtime Systems",
      description:
        "Integrated FastAPI, Supabase Edge Functions, Redis, and Spring Boot. Explored GraphQL and microservices for scalable backend systems.",
    },
    {
      year: "2024",
      title: "Leadership & Mentoring",
      description:
        "Started mentoring junior developers and interns. Shared best practices, conducted code reviews, and led knowledge-sharing sessions.",
    },
    {
      year: "2025",
      title: "Engineering Excellence & Open Source",
      description:
        "Refined toolchains (VS Code, Git, Postman, Figma) and contributed to open source projects. Continued exploring cloud-native and AI-enhanced full-stack development.",
    },
  ];

  return (
    <>
      {/* First Learning Journey Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isJourneyInView ? "visible" : "hidden"}
        className="mb-20" 
        ref={journeyRef}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-[#1A5319] text-center mb-12"
        >
          My Learning Journey
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#80AF81]" />
          {milestones.map((milestone, index) => (
            <motion.div
              key={`journey-${index}`}
              variants={itemVariants}
              className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1A5319] rounded-full border-4 border-white shadow-lg" />
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg">
                  <CardContent className="p-6">
                    <Badge className="bg-[#1A5319] text-white mb-3">{milestone.year}</Badge>
                    <h3 className="font-bold text-[#1A5319] mb-2">{milestone.title}</h3>
                    <p className="text-[#508D4E] text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Second Learning Path Timeline */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isTimelineInView ? "visible" : "hidden"}
        className="mb-20" 
        ref={timelineRef}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-[#1A5319] text-center mb-12"
        >
          My Learning Journey
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#80AF81]" />
          {milestones.map((milestone, index) => (
            <motion.div
              key={`timeline-${index}`}
              custom={index}
              variants={timelineItemVariants}
              initial="hidden"
              animate={isTimelineInView ? "visible" : "hidden"}
              className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1A5319] rounded-full border-4 border-white shadow-lg" />
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <Card className="bg-white/80 backdrop-blur-sm border-[#80AF81] shadow-lg">
                  <CardContent className="p-6">
                    <Badge className="bg-[#1A5319] text-white mb-3">{milestone.year}</Badge>
                    <h3 className="font-bold text-[#1A5319] mb-2">{milestone.title}</h3>
                    <p className="text-[#508D4E] text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

