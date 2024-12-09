"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionTitle } from "@/components/ui/section-title";
import { ContactForm } from "@/components/ui/contact-form";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "abhishek.shivale@example.com",
    href: "mailto:abhishek.shivale@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "San Francisco, CA",
    href: "#",
  },
];

export function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <SectionTitle>Get in Touch</SectionTitle>
        
        <div ref={ref} className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you'd like to connect!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="p-4">
                      <a
                        href={info.href}
                        className="flex items-center gap-4 hover:text-primary transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                        <div>
                          <h3 className="font-medium">{info.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {info.content}
                          </p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}