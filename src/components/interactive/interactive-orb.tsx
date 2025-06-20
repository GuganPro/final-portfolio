// @/components/interactive/interactive-orb.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function InteractiveOrb() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const orbRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay visibility to avoid SSR issues and ensure smooth appearance
    const timer = setTimeout(() => setIsVisible(true), 500);
    
    const handleMouseMove = (event: MouseEvent) => {
      if (orbRef.current) {
        const rect = orbRef.current.parentElement?.getBoundingClientRect();
        if (rect) {
           // Adjust position to be relative to the viewport and centered on cursor
          setPosition({ 
            x: event.clientX - rect.left - (orbRef.current.width.baseVal.value / 2), 
            y: event.clientY - rect.top - (orbRef.current.height.baseVal.value / 2)
          });
        } else {
           setPosition({ 
            x: event.clientX - (orbRef.current.width.baseVal.value / 2), 
            y: event.clientY - (orbRef.current.height.baseVal.value / 2)
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className={cn(
        "fixed top-0 left-0 w-32 h-32 pointer-events-none z-40 transition-opacity duration-500 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'transform 0.1s ease-out', // Smooth follow
      }}
      aria-hidden="true"
    >
      <svg 
        ref={orbRef}
        viewBox="0 0 100 100" 
        className="w-full h-full animate-float"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="orbGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
          </radialGradient>
           <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#orbGradient)" filter="url(#glow)" />
        <circle cx="50" cy="50" r="45" fill="transparent" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
      <p className="text-xs text-center text-muted-foreground absolute bottom-0 left-1/2 -translate-x-1/2">I'm your guide!</p>
    </div>
  );
}
