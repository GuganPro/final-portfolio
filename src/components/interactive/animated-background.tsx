// @/components/interactive/animated-background.tsx
"use client";

import { cn } from "@/lib/utils";

export function AnimatedBackground() {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 h-full w-full",
        "bg-gradient-to-br from-background via-primary/5 to-secondary/10", // Base gradient
        "animate-gradient-shift bg-400%" // Animation classes from tailwind.config.ts and globals.css
      )}
      aria-hidden="true"
    />
  );
}
