// @/components/sections/hero-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import Link from "next/link";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen py-20 text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-br from-background via-primary/5 to-secondary/10 animate-gradient-shift bg-400%" />
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
          <span className="block">GUGAN.V</span>
          <span className="block text-gradient mt-2">Full Stack Web Developer</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          A passionate Full Stack Web Developer specializing in building robust and scalable web applications. I transform ideas into dynamic digital experiences using modern technologies like React, Spring-boot, and cloud services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("projects")} 
            className="glow-primary shadow-lg w-full sm:w-auto"
            aria-label="Scroll to Projects section"
          >
            View My Work <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection("contact")} 
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary glow-effect w-full sm:w-auto"
            aria-label="Scroll to Contact section"
          >
            Get In Touch
          </Button>
        </div>
        <div className="flex justify-center space-x-6">
          <Link href="mailto:guganvs2@gmail.com" aria-label="Email GUGAN.V" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-125">
            <Mail size={28} />
          </Link>
          <Link href="tel:+916374145929" aria-label="Call GUGAN.V" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-125">
            <Phone size={28} />
          </Link>
          <Link href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" aria-label="GUGAN.V LinkedIn" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-125">
            <Linkedin size={28} />
          </Link>
          <Link href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer" aria-label="GUGAN.V GitHub" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-125">
            <Github size={28} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
      </div>
    </section>
  );
}
