// @/components/sections/projects-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description: "This very portfolio website, designed to showcase my skills and projects. Built with Next.js, Tailwind CSS, and ShadCN UI, it features a modern and interactive design, smooth animations, and an AI-powered resume analyzer.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "developer portfolio",
    liveDemoUrl: "#",
    githubUrl: "#",
    tags: ["Next.js", "React", "Tailwind CSS", "ShadCN UI", "Genkit"],
  },
  {
    title: "Certificate Showcase Website",
    description: "A dedicated website to host and display my professional certifications, providing verifiable proof of my qualifications. Built to be clean, fast, and easily navigable.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "certificate document",
    liveDemoUrl: "https://certificategugan.netlify.app/",
    githubUrl: "#",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
  },
  {
    title: "URL Shortener",
    description: "This project provides a simple and efficient way to shorten long URLs. It features a user-friendly interface to input a URL, a button to generate a shortened link, and a copy-to-clipboard functionality. The backend is built with Spring Boot, ensuring robustness and scalability.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "link shortening tool",
    liveDemoUrl: "#", // Placeholder
    githubUrl: "#",   // Placeholder
    tags: ["Java", "Spring Boot", "Web App", "Utility"],
  },
  {
    title: "OTP Generation and Verification",
    description: "This project implements a complete OTP generation and verification system. It features a user-friendly interface to enter a phone number, a button to send a random 4-digit OTP, and a verification system that confirms the correct OTP and redirects to a success page.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "security interface",
    liveDemoUrl: "https://otpgugan.netlify.app/",
    githubUrl: "#",   // Placeholder
    tags: ["Java", "Spring Boot", "Security", "Frontend"],
  },
  {
    title: "Password Generator",
    description: "A secure password generator application that allows users to create strong passwords based on a desired strength (8-20 characters) using a slider. Key features include copying the password to the clipboard and an option to save generated passwords for future reference.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "password tool",
    liveDemoUrl: "https://passwordgugan.netlify.app/",
    githubUrl: "#",   // Placeholder
    tags: ["JavaScript", "React", "Security", "Utility"],
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          A glimpse into my passion for building practical and innovative web solutions. Each project reflects my commitment to quality and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <Card key={project.title} className="card-interactive overflow-hidden flex flex-col group">
              {project.imageUrl && (
                 <div className="relative w-full h-56 sm:h-64">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={project.imageHint}
                    />
                 </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-card-foreground">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground leading-relaxed">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                {project.liveDemoUrl && (
                  <Button asChild variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 hover:text-primary glow-effect">
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild className="w-full sm:w-auto glow-primary">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      View on GitHub <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
