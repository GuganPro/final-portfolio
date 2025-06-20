// @/components/sections/skills-section.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Code, Database, Cloud, GitMerge, TerminalSquare, BrainCircuit, Bot, Palette, Settings2, Workflow, Server, Tv2 } from "lucide-react";
import { JavaLogo } from "@/components/icons/java-logo";
import { SpringBootLogo } from "@/components/icons/spring-boot-logo";
import { ReactLogo } from "@/components/icons/react-logo";
import { TailwindCssLogo } from "@/components/icons/tailwind-css-logo";
import { AwsLogo } from "@/components/icons/aws-logo";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Core Java", icon: <JavaLogo className="h-8 w-8" /> },
      { name: "Spring Boot", icon: <SpringBootLogo className="h-8 w-8" /> },
      { name: "Microservices", icon: <Workflow className="h-8 w-8 text-blue-400" /> },
      { name: "Thymeleaf", icon: <Palette className="h-8 w-8 text-green-400" /> },
    ],
  },
  {
    title: "Frontend",
    icon: <Tv2 className="h-6 w-6 text-primary" />,
    skills: [
      { name: "HTML", icon: <Code className="h-8 w-8 text-orange-500" /> },
      { name: "CSS", icon: <Palette className="h-8 w-8 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <TailwindCssLogo className="h-8 w-8" /> },
      { name: "JavaScript", icon: <Code className="h-8 w-8 text-yellow-400" /> },
      { name: "ReactJS", icon: <ReactLogo className="h-8 w-8" /> },
      { name: "Redux", icon: <Settings2 className="h-8 w-8 text-purple-500" /> },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      { name: "MongoDB", icon: <Database className="h-8 w-8 text-green-500" /> },
      { name: "MySQL", icon: <Database className="h-8 w-8 text-blue-600" /> },
    ],
  },
  {
    title: "Integrations",
    icon: <Workflow className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Firebase", icon: <Cloud className="h-8 w-8 text-yellow-500" /> },
      { name: "JWT", icon: <TerminalSquare className="h-8 w-8 text-red-500" /> },
      { name: "Eureka Server", icon: <Server className="h-8 w-8 text-sky-500" /> },
      { name: "OpenFeign", icon: <GitMerge className="h-8 w-8 text-indigo-500" /> },
      { name: "Kafka", icon: <Workflow className="h-8 w-8 text-gray-500" /> },
      { name: "GCP", icon: <Cloud className="h-8 w-8 text-blue-400" /> },
    ],
  },
  {
    title: "Deployment &amp; DevOps",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: [
      { name: "AWS (EC2, RDS, etc.)", icon: <AwsLogo className="h-8 w-8" /> },
      { name: "Docker", icon: <TerminalSquare className="h-8 w-8 text-blue-500" /> },
      { name: "Kubernetes", icon: <Settings2 className="h-8 w-8 text-blue-700" /> },
    ],
  },
  {
    title: "Tools",
    icon: <TerminalSquare className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Git", icon: <GitMerge className="h-8 w-8 text-orange-600" /> },
      { name: "Visual Studio Code", icon: <Code className="h-8 w-8 text-blue-400" /> },
      { name: "Eclipse", icon: <Code className="h-8 w-8 text-purple-600" /> },
      { name: "Figma", icon: <Palette className="h-8 w-8 text-pink-500" /> },
    ],
  },
  {
    title: "AI Tools",
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Gemini", icon: <Bot className="h-8 w-8 text-teal-400" /> },
      { name: "Copilot", icon: <Bot className="h-8 w-8 text-gray-400" /> },
      { name: "Black Box", icon: <Bot className="h-8 w-8 text-neutral-500" /> },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          A versatile collection of tools and technologies I use to build innovative and efficient solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card border-border shadow-xl hover:shadow-primary/30 transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                {category.icon}
                <CardTitle className="text-2xl font-semibold text-card-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <TooltipProvider key={skill.name} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg aspect-square transition-all duration-200 hover:bg-muted/70 hover:scale-105 glow-effect cursor-pointer">
                            <div className="text-3xl mb-1 text-foreground">{skill.icon}</div>
                            <p className="text-xs text-center text-muted-foreground font-medium">{skill.name}</p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-popover text-popover-foreground border-border shadow-lg">
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
