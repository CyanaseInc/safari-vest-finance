
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { GlobeAnimation } from "./GlobeAnimation";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-cyanase-secondary"
          style={{ filter: "blur(80px)" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-cyanase-primary"
          style={{ filter: "blur(100px)" }}
        />
        
        {/* Grid lines background effect */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`text-left ${isMobile ? "order-2" : "order-1"}`}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyanase-primary mb-6"
            >
              Global Investment Products
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Access diverse investment opportunities across the globe through our sophisticated platform. From local treasuries to international equities, we've made investing borderless.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-cyanase-primary hover:bg-cyanase-primary-dark text-white px-6 py-2 h-auto">
                Create investment account
              </Button>
              <Button variant="outline" className="border-cyanase-secondary text-cyanase-primary hover:bg-cyanase-secondary hover:text-cyanase-primary px-6 py-2 h-auto">
                Partner with us
              </Button>
            </motion.div>
          </div>
          
          <div className={`${isMobile ? "order-1 mb-8" : "order-2"}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <GlobeAnimation />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
