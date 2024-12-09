"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionTitle } from "@/components/ui/section-title";
import { SkillCategory } from "@/components/ui/skill-category";
import {
  Code2,
  Database,
  Layout,
  Cloud,
  Wrench,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    icon: Code2,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "FastAPI", level: 75 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "Kubernetes", level: 70 },
    ],
  },
  {
    title: "Tools & Methods",
    icon: Wrench,
    skills: [
      { name: "Agile/Scrum", level: 90 },
      { name: "Jest/Testing", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "GitLab", level: 85 },
      { name: "Bitbucket", level: 85 },
    ],
  },
];

export function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <SectionTitle>Skills</SectionTitle>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCategory {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}