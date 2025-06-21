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
    title: "OTP Generation and Verification",
    description: "This project implements a complete OTP generation and verification system. It features a user-friendly interface to enter a phone number, a button to send a random 4-digit OTP, and a verification system that confirms the correct OTP and redirects to a success page.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "security interface",
    liveDemoUrl: "#", // Placeholder
    githubUrl: "#",   // Placeholder
    tags: ["Java", "Spring Boot", "Security", "Frontend"],
  },
  {
    title: "Password Generator",
    description: "A secure password generator application that allows users to create strong passwords based on a desired strength (8-20 characters) using a slider. Key features include copying the password to the clipboard and an option to save generated passwords for future reference.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "password tool",
    liveDemoUrl: "#", // Placeholder
    githubUrl: "#",   // Placeholder
    tags: ["JavaScript", "React", "Security", "Utility"],
  },
  {
    title: "URL Shortener",
    description: "This project provides a simple and efficient way to shorten long URLs. It features a user-friendly interface to enter a long URL, a button to generate a shortened URL, and a system to redirect users from the short URL to the original long URL.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "url link",
    liveDemoUrl: "#",
    githubUrl: "#",
    tags: ["Java", "Spring Boot", "Backend", "URL"],
  },
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
            <Card key={project.title} className="card-interactive overflow-hidden flex flex-col">
              {project.imageUrl && (
                 <div className="relative w-full h-56 sm:h-64">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
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
