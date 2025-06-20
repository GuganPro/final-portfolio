import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { AiAnalyzerSection } from "@/components/sections/ai-analyzer-section";
import { AnimatedBackground } from "@/components/interactive/animated-background";
import { InteractiveOrb } from "@/components/interactive/interactive-orb";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <InteractiveOrb /> {/* This is a client component, will be hydrated on client */}
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AiAnalyzerSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
