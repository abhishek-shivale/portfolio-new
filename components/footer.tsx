"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/abhishekshivale",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/abhishekshivale",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/abhishekshivale",
    label: "Twitter",
  },
];

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Abhishek Shivale. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}