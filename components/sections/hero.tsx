"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Particles from "../ui/particles";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 py-16 flex flex-col items-center text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I&apos;m Abhishek Shivale
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-lg text-muted-foreground mb-12"
        >
          I build exceptional digital experiences that combine beautiful design
          with powerful functionality. Passionate about creating innovative
          solutions that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" asChild>
            <Link href="#contact">
              <Send className="mr-2 h-4 w-4" /> Get in Touch
            </Link>
          </Button>
          <Button size="lg" variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </motion.div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={80}
        color={color}
        refresh
      />
    </section>
  );
}
