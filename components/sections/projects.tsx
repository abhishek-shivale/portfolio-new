"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionTitle } from "@/components/ui/section-title";

const projects = [
  {
    title: "TinyURL - URL Shortener",
    description: "Simplify your links, track their performance, and make your URLs work smarter with TinyLink's enterprise-grade link management platform.",
    image: "https://res.cloudinary.com/dygubvmg6/image/upload/v1733728924/lebyw3rljz1rbvnljob5.png",
    technologies: ["Next.js", "Prisma", "Tailwind", "Typescript", "SQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/abhishek-shivale/tinyurl",
  },
  {
    title: "Free Email Validation",
    description: "Free email validation tool to quickly clean and verify your email lists. Improve deliverability and boost engagement with accurate email addresses.",
    image: "https://res.cloudinary.com/dygubvmg6/image/upload/v1733728676/dntycujzgqtsshqb5lzd.png",
    technologies: ["Next.js", "Node"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/abhishek-shivale/Email_Validator",
  },
  {
    title: "Next.js Starter Template",
    description: "A Next.js starter template to help you build scalable, modern web applications. This template includes popular libraries like NextAuth, Prisma, Tailwind, and Typescript.",
    image: "https://res.cloudinary.com/dygubvmg6/image/upload/v1733729352/jl2scznxfwblze4dqra.png",
    technologies: ["NextJS", "Prisma", "Tailwind", "Typescript", "NextAuth"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/abhishek-shivale/nextjs-starter",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management and order processing.",
    image: "https://res.cloudinary.com/dygubvmg6/image/upload/v1733729398/vstfmbt8rev0xywttu02.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/abhishek-shivale/Ecommerce-React",
  },
  {
    title: "React Anime App",
    description: "This is a React-based web application for exploring and discovering anime series.",
    image: "https://res.cloudinary.com/dygubvmg6/image/upload/v1733727818/iajxmzqpticpn27yp3tt.png",
    technologies: ["React"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/abhishek-shivale/React-app-anime.git",
  },
  {
    title: "Distraction Free YouTube",
    description: "This extension helps you focus on the videos you want to watch by hiding distractions like Shorts, recommendations, and comments.",
    image: "https://res.cloudinary.com/dygubvmg6/image/upload/v1733727922/znw3bhdjrrxqoqn6nl8x.png",
    technologies: ["Javascript"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/abhishek-shivale/Distraction-Free_YouTube",
  }
];

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 h-screen">
      <div className="container px-4">
        <SectionTitle>Featured Projects</SectionTitle>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
