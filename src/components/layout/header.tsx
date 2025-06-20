// @/components/layout/header.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, CodeXml } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveOrb } from "@/components/interactive/interactive-orb"; // Placeholder for 3D character

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "AI Analyzer", href: "#ai-analyzer", id: "ai-analyzer"},
  { label: "Contact", href: "#contact", id: "contact" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#hero" passHref className="flex items-center space-x-2" onClick={(e) => {e.preventDefault(); scrollToSection('hero');}}>
          <CodeXml className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl text-gradient">GuganVerse</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-foreground/80 hover:text-primary"
              aria-label={`Scroll to ${item.label} section`}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-card">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    onClick={() => {
                        scrollToSection(item.id);
                        // Consider closing the sheet after click if Sheet had an onOpenChange or similar prop
                      }}
                    className="justify-start text-lg text-foreground hover:text-primary"
                    aria-label={`Scroll to ${item.label} section`}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
