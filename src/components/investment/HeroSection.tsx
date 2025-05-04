
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Globe, TrendingUp, PiggyBank, ArrowUpRight, DollarSign } from "lucide-react";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-60 h-60 rounded-full bg-cyanase-secondary"
          style={{ filter: "blur(90px)" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-cyanase-primary"
          style={{ filter: "blur(120px)" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`text-left ${isMobile ? "order-2" : "order-1"}`}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyanase-primary mb-6"
            >
              Our Investment Products
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              We provide a wide range of investment products to help you diversify your portfolio and achieve your financial goals, locally and globally.
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
              className="relative h-[400px] w-full"
            >
              {/* Enhanced Globe animation */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  rotateY: 360,
                  transition: { 
                    duration: 25, 
                    repeat: Infinity, 
                    ease: "linear"
                  }
                }}
              >
                <div className="relative">
                  {/* Outer glow */}
                  <motion.div 
                    className="absolute -inset-6 rounded-full bg-cyanase-secondary/20"
                    animate={{ 
                      scale: [1, 1.2, 1], 
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{ filter: "blur(15px)" }}
                  />
                  
                  {/* Main globe */}
                  <div className="relative">
                    <Globe className="h-40 w-40 text-cyanase-primary" strokeWidth={1} />
                    
                    {/* Inner glowing core */}
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-cyanase-primary/10"
                      animate={{ 
                        scale: [0.6, 0.7, 0.6], 
                        opacity: [0.6, 0.8, 0.6] 
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      style={{ filter: "blur(5px)" }}
                    />
                    
                    {/* Latitude/longitude lines */}
                    <svg className="absolute inset-0" viewBox="0 0 100 100">
                      <motion.circle 
                        cx="50" cy="50" r="30" 
                        fill="none" 
                        stroke="rgba(37, 40, 89, 0.2)" 
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                      <motion.circle 
                        cx="50" cy="50" r="40" 
                        fill="none" 
                        stroke="rgba(37, 40, 89, 0.2)" 
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.3 }}
                      />
                      <motion.line 
                        x1="10" y1="50" x2="90" y2="50" 
                        stroke="rgba(37, 40, 89, 0.2)" 
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1.6 }}
                      />
                      <motion.line 
                        x1="50" y1="10" x2="50" y2="90" 
                        stroke="rgba(37, 40, 89, 0.2)" 
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1.9 }}
                      />
                    </svg>
                  </div>
                  
                  {/* Orbiting elements */}
                  <motion.div 
                    className="absolute -top-8 -right-6 transform translate-x-1/2 -translate-y-1/4"
                    animate={{ 
                      y: [0, -15, 0], 
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="bg-cyanase-secondary text-white rounded-full p-3 shadow-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-6 left-0 transform -translate-x-1/2"
                    animate={{ 
                      y: [0, 10, 0], 
                      x: [0, 5, 0, -5, 0],
                      scale: [1, 1.05, 1] 
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="bg-cyanase-primary text-white rounded-full p-3 shadow-lg flex items-center justify-center">
                      <DollarSign className="h-5 w-5" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Animated coins/tokens around the globe */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute left-1/4 top-1/4"
              >
                <motion.div
                  animate={{ 
                    y: [0, -25, 0],
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-20 h-20 bg-gradient-to-br from-cyanase-secondary to-cyanase-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl"
                    style={{ boxShadow: '0 10px 25px rgba(80, 102, 252, 0.3)' }}
                  >
                    +5%
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="absolute right-1/4 bottom-1/4"
              >
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -5, 0, 5, 0],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.7
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-gradient-to-tr from-cyanase-primary/90 to-cyanase-secondary/90 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl"
                    style={{ boxShadow: '0 10px 25px rgba(37, 40, 89, 0.3)' }}
                  >
                    +12%
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute right-10 top-1/3"
              >
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    x: [0, 8, 0, -8, 0],
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-16 h-16 bg-gradient-to-bl from-cyanase-secondary/90 to-cyanase-primary/80 rounded-full flex items-center justify-center text-white font-bold shadow-xl"
                    style={{ boxShadow: '0 10px 25px rgba(80, 102, 252, 0.3)' }}
                  >
                    <PiggyBank className="h-8 w-8" />
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Connection lines with animation */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <motion.path
                  d="M160 140 L240 180 L300 120"
                  stroke="rgba(37, 40, 89, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <motion.path
                  d="M240 180 L320 220"
                  stroke="rgba(37, 40, 89, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 2.2 }}
                />
                
                {/* Adding more connection lines */}
                <motion.path
                  d="M200 200 L260 260"
                  stroke="rgba(80, 102, 252, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 2.5 }}
                />
                
                <motion.path
                  d="M180 220 L280 280"
                  stroke="rgba(80, 102, 252, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 2.8 }}
                />
              </svg>
              
              {/* Animated particles */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-cyanase-primary"
                    style={{
                      height: Math.random() * 6 + 2,
                      width: Math.random() * 6 + 2,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.4 + 0.1
                    }}
                    animate={{ 
                      y: [0, -30, 0],
                      opacity: [0, 0.5, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      delay: Math.random() * 5
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
