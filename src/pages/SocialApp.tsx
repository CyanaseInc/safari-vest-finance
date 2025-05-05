import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/social/HeroSection";
import { FeatureSection } from "@/components/social/FeatureSection";
import { FeatureGrid } from "@/components/social/FeatureGrid";
import { CTASection } from "@/components/social/CTASection";

const SocialApp = () => {
  // Define primary and secondary colors from our theme - keep these for reference
  const primaryColor = "#F7A92D";
  const secondaryColor = "#FCBF3D";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Sections */}
        <FeatureSection />
        
        {/* Additional Features in a Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FeatureGrid />
        </div>
        
        {/* CTA Section */}
        <CTASection />

        <Footer />
      </div>
    </div>
  );
};

export default SocialApp;
