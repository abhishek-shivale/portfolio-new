"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className=" px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold"
        >
          AS
        </motion.div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#experience">Experience</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}