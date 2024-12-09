"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Code,
  GraduationCap,
  Linkedin,
  Github,
  Mail,
  FileText,
  ExternalLink,
} from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MagicCard } from "@/components/ui/magic-card";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { ProjectCard } from "@/components/ui/project-card";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState("about");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  const navigationItems = [
    { id: "about", icon: FileText, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "projects", icon: Code, label: "Projects" },
    { id: "education", icon: GraduationCap, label: "Education" },
  ];

  const experiences = [
    {
      company: "Ecostart Ventures Inc.",
      position: "Software Trainee",
      duration: "May 2024 - Present",
      highlights: [
        "Developed full MERN stack application with AI integration",
        "Implemented Vector Search optimization with MongoDB",
        "Integrated AI features using LangChain",
        "Designed scalable database schema and frontend interfaces",
      ],
    },
  ];

  const projects = [
    {
      title: "TinyURL - URL Shortener",
      description:
        "Simplify your links, track their performance, and make your URLs work smarter with TinyLink's enterprise-grade link management platform.",
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1733728924/lebyw3rljz1rbvnljob5.png",
      technologies: ["Next.js", "Prisma", "Tailwind", "Typescript", "SQL"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/abhishek-shivale/tinyurl",
    },
    {
      title: "Free Email Validation",
      description:
        "Free email validation tool to quickly clean and verify your email lists. Improve deliverability and boost engagement with accurate email addresses.",
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1733728676/dntycujzgqtsshqb5lzd.png",
      technologies: ["Next.js", "Node", "Tailwind", "Typescript"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/abhishek-shivale/Email_Validator",
    },
    {
      title: "Next.js Starter Template",
      description:
        "A Next.js starter template to help you build scalable, modern web applications using popular libraries like NextAuth, Prisma, Tailwind, and Typescript.",
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1733729352/jl2sicznxfwblze4dqra.png",
      technologies: ["NextJS", "Prisma", "Tailwind", "Typescript", "NextAuth"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/abhishek-shivale/nextjs-starter",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with real-time inventory management and order processing.",
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1733729398/vstfmbt8rev0xywttu02.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/abhishek-shivale/Ecommerce-React",
    },
    {
      title: "React Anime App",
      description:
        "This is a React-based web application for exploring and discovering anime series.",
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1733727818/iajxmzqpticpn27yp3tt.png",
      technologies: ["React", "axios", "Tailwind", "anime-api"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/abhishek-shivale/React-app-anime.git",
    },
    {
      title: "Distraction Free YouTube",
      description:
        "This extension helps you focus on the videos you want to watch by hiding distractions like Shorts, recommendations, and comments.",
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1733727922/znw3bhdjrrxqoqn6nl8x.png",
      technologies: ["Javascript"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/abhishek-shivale/Distraction-Free_YouTube",
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="relative">
            <BackgroundBeams className="absolute inset-0 z-0" />
            <HeroHighlight className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 text-center"
              >
                <h1 className="text-4xl font-bold text-white">
                  <TextGenerateEffect
                    words="Abhishek Shivale"
                    className="text-white !text-3xl"
                  />
                </h1>
                <p className="text-xl text-neutral-400">
                  Passionate Full Stack Developer with expertise in{" "}
                  <Highlight>MERN Stack</Highlight> and{" "}
                  <Highlight>AI Integration</Highlight>
                </p>
                <div className="relative w-full max-w-md mx-auto h-10">
                  <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={200}
                    className="w-full h-full absolute z-0"
                    particleColor="#ffffff"
                  />
                  <div className="flex justify-center space-x-6 relative z-10 pt-4">
                    {[
                      {
                        Icon: Mail,
                        href: "mailto:abhishekshivale45@gmail.com",
                      },
                      {
                        Icon: Linkedin,
                        href: "https://linkedin.com/in/abhishek-shivale",
                      },
                      {
                        Icon: Github,
                        href: "https://github.com/abhishekshivale",
                      },
                    ].map(({ Icon, href }) => (
                      <a
                        key={href}
                        href={href}
                        className="text-white hover:text-neutral-300 transition-colors"
                      >
                        <Icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </HeroHighlight>
          </div>
        );

      case "experience":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white text-center mb-8">
              Professional Experience
            </h2>
            {experiences.map((exp, index) => (
              <CardContainer key={index} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {exp.company}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                  >
                    {exp.position} | {exp.duration}
                  </CardItem>
                  <CardItem
                    as="ul"
                    translateZ="70"
                    className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-300"
                  >
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-neutral-500">▶</span>
                        {highlight}
                      </li>
                    ))}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        );

      case "projects":
        return (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-extrabold text-center text-white mb-12">
              Projects
            </h2>
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
        );

      case "education":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white text-center mb-8">
              Education
            </h2>

            <Card className="bg-neutral-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Bachelor of Computer Application
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-neutral-400">Chandigarh University</p>
                <span className="text-neutral-300 font-medium">
                  Expected 2026
                </span>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className=" max-w-5xl">
        {/* Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-neutral-800 rounded-full p-2 flex space-x-2 border border-neutral-700">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-full transition-all
                  ${
                    activeSection === item.id
                      ? "bg-neutral-700 text-white"
                      : "text-neutral-400 hover:bg-neutral-700 hover:text-neutral-200"
                  }
                `}
              >
                <item.icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default PortfolioWebsite;
