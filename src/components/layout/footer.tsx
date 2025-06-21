// @/components/layout/footer.tsx
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8 bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
            <Link href="mailto:guganvs2@gmail.com" aria-label="Email GUGAN.V" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </Link>
            <Link href="tel:+916374145929" aria-label="Call GUGAN.V" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/gugan-gugan-99087a328" target="_blank" rel="noopener noreferrer" aria-label="GUGAN.V LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer" aria-label="GUGAN.V GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} GUGAN.V. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Built with Next.js & Tailwind CSS. Inspired by the Digital Frontier.
        </p>
      </div>
    </footer>
  );
}
