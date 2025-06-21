// @/components/sections/experience-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, CalendarDays, ExternalLink, GraduationCap, MapPin } from "lucide-react";

interface TimelineItem {
  type: "certification" | "education";
  icon: React.ReactNode;
  title: string;
  institution?: string;
  date?: string;
  description: string;
  link?: { text: string; url: string };
}

const journeyItems: TimelineItem[] = [
  {
    type: "certification",
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Certified Full-Stack Web Developer",
    description: "Gained a strong foundation through a blended learning approach, including comprehensive courses from LinkedIn Learning, CSC, and YouTube. Proficient in both front-end and back-end principles, including HTML, CSS, JavaScript, React, and Node.js.",
    link: { text: "View Certificates", url: "https://certificategugan.netlify.app/" },
  },
  {
    type: "education",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "Master of Arts (M.A.) in Economics",
    institution: "Government Arts College (Autonomous), Kumbakonam",
    date: "2023 - 2025",
    description: "Deepened understanding of economic theories, quantitative analysis, and policy implications. Developed strong analytical and research skills.",
  },
  {
    type: "education",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "Bachelor of Arts (B.A.) in Economics",
    institution: "Government Arts College (Autonomous), Kumbakonam",
    date: "2020 - 2023",
    description: "Established a solid foundation in microeconomics, macroeconomics, econometrics, and development economics.",
  },
];

export function ExperienceSection() {
  return (
    <section id="journey" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Tracing my path in education and professional development, showcasing key milestones and achievements.
        </p>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-border/50 transform -translate-x-1/2 rounded-full" aria-hidden="true"></div>
          
          {journeyItems.map((item, index) => (
            <div key={index} className="mb-12 flex items-start">
              {/* Icon and connection for mobile */}
              <div className="sm:hidden flex flex-col items-center mr-4 pt-1">
                <div className="z-10 p-2 bg-card rounded-full shadow-md border border-primary/50">
                  {item.icon}
                </div>
              </div>

              {/* Icon for desktop (centered on the line) */}
              <div className="hidden sm:flex absolute left-1/2 top-1 -translate-x-1/2 -translate-y-0 items-center justify-center">
                 <div className="z-10 p-3 bg-card rounded-full shadow-md border border-primary/50">
                  {item.icon}
                </div>
              </div>
              
              <Card className={`w-full sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'sm:ml-auto' : 'sm:mr-auto'} card-interactive`}>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-card-foreground">{item.title}</CardTitle>
                  {item.institution && (
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin size={14} className="mr-1.5" /> {item.institution}
                    </div>
                  )}
                  {item.date && (
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <CalendarDays size={14} className="mr-1.5" /> {item.date}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  {item.link && (
                    <Button asChild variant="link" className="mt-4 px-0 text-primary hover:text-accent">
                      <a href={item.link.url} target="_blank" rel="noopener noreferrer">
                        {item.link.text} <ExternalLink className="ml-1.5 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
