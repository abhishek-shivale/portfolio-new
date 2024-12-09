"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExperienceCard } from "@/components/ui/experience-card";
import { SectionTitle } from "@/components/ui/section-title";

const experiences = [
  {
    title: "Full Time Software Trainee",
    company: "Ecostart Ventures Inc.",
    period: "May 2024 - Present",
    description: [
      "Developed a full MERN stack application with integrated AI features, handling end-to-end development including both backend and frontend.",
      "Implemented Vactor Search with MongoDB, optimizing search results.",
      "Integrated AI using LangChain to enhance application functionality, enabling dynamic interaction and improved performance.",
      "Designed and structured the entire database schema, ensuring scalability and efficiency in handling large datasets.",
      "Managed the frontend design using Figma, creating user-friendly interfaces, ensuring responsive design, and implementing complex React components for dynamic, interactive user experiences.",
    ],
    technologies: [
      "React",
      "Node.js",
      "JavaScript",
      "Mongodb",
      "Langchain",
      "VPS",
    ],
  },
];

export function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      className="py-20 h-screen flex flex-col justify-center items-center"
    >
      <SectionTitle>Experience</SectionTitle>

      <div ref={ref} className=" flex flex-col gap-8 mt-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceCard {...experience} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
