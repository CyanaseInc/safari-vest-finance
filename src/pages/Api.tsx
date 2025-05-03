import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Import refactored components
import { AnimatedBackground } from "@/components/api/AnimatedBackground";
import { HeroSection } from "@/components/api/HeroSection";
import { ApiCodeBlock } from "@/components/api/ApiCodeBlock";
import { HowItWorksSection } from "@/components/api/HowItWorksSection";
import { ComplianceSection } from "@/components/api/ComplianceSection";
import { UseCasesSection } from "@/components/api/UseCasesSection";
import { CodeExamplesSection } from "@/components/api/CodeExamplesSection";

type AnimatedDot = {
  x: number;
  y: number;
  color: string;
  size: number;
};

const Api = () => {
  const [animatedDots, setAnimatedDots] = useState<AnimatedDot[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  
  // Initialize animated dots
  useEffect(() => {
    const newDots = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 600, // Hero section approximate height
      color: Math.random() > 0.7 
        ? 'rgba(247, 169, 45, 0.6)' 
        : 'rgba(37, 40, 89, 0.4)',
      size: Math.random() * 6 + 2
    }));
    setAnimatedDots(newDots);
    setIsInView(true);
  }, []);
  
  // Handle mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <div className="relative overflow-hidden">
          {/* Background Canvas */}
          <AnimatedBackground 
            isInView={isInView}
            animatedDots={animatedDots}
            setAnimatedDots={setAnimatedDots}
            mousePosition={mousePosition}
          />
          
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <HeroSection />
              <ApiCodeBlock />
            </div>
          </div>
        </div>
        
        {/* Rest of the content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HowItWorksSection />
          <ComplianceSection />
          <UseCasesSection />
          <CodeExamplesSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Api;
