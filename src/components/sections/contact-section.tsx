// @/components/sections/contact-section.tsx
"use client";

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { WhatsappLogo } from "../icons/whatsapp-logo";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Have a project in mind, a question, or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-background/50 p-8 rounded-lg shadow-xl border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send me a message</h3>
            <ContactForm />
          </div>
          <div className="space-y-8 md:pt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <Mail size={22} className="mr-3 text-primary" />
                  <a href="mailto:guganvs2@gmail.com" className="hover:text-primary transition-colors">guganvs2@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <Phone size={22} className="mr-3 text-primary" />
                  <a href="tel:+916374145929" className="hover:text-primary transition-colors">+91 6374145929</a>
                </li>
                <li className="flex items-center">
                  <MapPin size={22} className="mr-3 text-primary" />
                  <span>Tamil Nadu, India (Open to remote)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Find me on</h3>
              <div className="flex space-x-6">
                <Link href="https://www.linkedin.com/in/gugan-gugan-99087a328" target="_blank" rel="noopener noreferrer" aria-label="GUGAN.V LinkedIn" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                  <Linkedin size={32} />
                </Link>
                <Link href="https://github.com/GuganPro" target="_blank" rel="noopener noreferrer" aria-label="GUGAN.V GitHub" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                  <Github size={32} />
                </Link>
                <Link href="https://wa.me/916374145929" target="_blank" rel="noopener noreferrer" aria-label="GUGAN.V WhatsApp" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                  <WhatsappLogo className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
