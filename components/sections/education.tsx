"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionTitle } from "@/components/ui/section-title";
import { EducationCard } from "@/components/ui/education-card";

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "University of Technology",
    period: "2015 - 2017",
    description: "Specialized in Software Engineering and Data Structures. Graduated with distinction.",
    achievements: [
      "Published research paper on AI algorithms",
      "Led student development team",
      "Won Best Project Award",
    ],
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Institute of Engineering",
    period: "2012 - 2015",
    description: "Foundation in computer science with focus on programming and system design.",
    achievements: [
      "First Class with Distinction",
      "Technical Club President",
      "Multiple Hackathon Winner",
    ],
  },
];

export function EducationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20">
      <div className="container px-4">
        <SectionTitle>Education</SectionTitle>
        
        <div ref={ref} className="space-y-8 mt-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <EducationCard {...edu} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}