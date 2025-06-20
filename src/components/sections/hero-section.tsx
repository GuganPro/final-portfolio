// @/components/sections/hero-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function HeroSection() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-br from-background via-primary/5 to-secondary/10 animate-gradient-shift bg-400%" />
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pt-10 lg:pt-0">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
            <span className="block">GUGAN.V</span>
            <span className="block text-gradient mt-2">Full Stack Web Developer</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
            A passionate Full Stack Web Developer specializing in building robust and scalable web applications. I transform ideas into dynamic digital experiences using modern technologies like React, Spring-boot, and cloud services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
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
          <div className="flex justify-center lg:justify-start space-x-6">
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
        <div className="w-full max-w-md lg:max-w-none lg:w-2/5 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <Image
            src="https://placehold.co/400x600.png"
            alt="Gugan.V Profile Picture Placeholder"
            width={400}
            height={600}
            className="rounded-lg shadow-2xl object-cover border-4 border-primary/30 glow-effect animate-float-vertical"
            data-ai-hint="developer portrait"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block">
        <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
      </div>
    </section>
  );
}
