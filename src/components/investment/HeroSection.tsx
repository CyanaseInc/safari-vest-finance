
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Globe, TrendingUp, PiggyBank, BarChart3, DollarSign, LineChart } from "lucide-react";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      {/* Enhanced animated background elements */}
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
              className="relative h-[400px] w-full"
            >
              {/* Enhanced globe animation */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="relative"
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Glowing effect behind the globe */}
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 40px 10px rgba(37, 40, 89, 0.2)', 
                        '0 0 60px 20px rgba(37, 40, 89, 0.3)', 
                        '0 0 40px 10px rgba(37, 40, 89, 0.2)'
                      ] 
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ filter: "blur(4px)" }}
                  />
                  
                  {/* Base globe */}
                  <Globe className="h-40 w-40 text-cyanase-primary opacity-30" strokeWidth={1} />
                  
                  {/* Orbiting dots representing global markets */}
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 30) * (Math.PI / 180);
                      const size = Math.random() * 6 + 3;
                      const distance = 70 + (Math.random() * 20);
                      const x = Math.cos(angle) * distance;
                      const y = Math.sin(angle) * distance;
                      
                      return (
                        <motion.div
                          key={`orbit-dot-${i}`}
                          className="absolute bg-cyanase-secondary rounded-full"
                          style={{
                            width: size, 
                            height: size,
                            left: `calc(50% + ${x}px)`, 
                            top: `calc(50% + ${y}px)`,
                          }}
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{ 
                            duration: 2 + Math.random() * 3, 
                            repeat: Infinity,
                            delay: Math.random() * 2
                          }}
                        />
                      );
                    })}
                  </motion.div>
                  
                  {/* Hemisphere grid overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-cyanase-primary/20"
                    style={{ borderWidth: '0.5px' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Financial indicators floating around the globe */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute left-1/4 top-1/6"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-lg">
                    <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
                    <span className="font-medium text-sm">Global Stocks +8.2%</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute right-1/4 top-2/3"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-lg">
                    <BarChart3 className="h-6 w-6 text-cyanase-primary mr-2" />
                    <span className="font-medium text-sm">Treasury Bonds 5%</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute right-1/6 top-1/3"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-lg">
                    <LineChart className="h-6 w-6 text-blue-500 mr-2" />
                    <span className="font-medium text-sm">Tech ETFs +12%</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute left-1/6 bottom-1/4"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-lg">
                    <DollarSign className="h-6 w-6 text-yellow-500 mr-2" />
                    <span className="font-medium text-sm">Forex Markets</span>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Digital data streams */}
              {[...Array(5)].map((_, i) => {
                const startX = Math.random() * 100;
                const startY = Math.random() * 100;
                const endX = Math.random() * 100;
                const endY = Math.random() * 100;
                
                return (
                  <motion.div 
                    key={`data-stream-${i}`}
                    className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
                  >
                    <svg className="absolute inset-0 w-full h-full">
                      <motion.path
                        d={`M${startX},${startY} Q${(startX+endX)/2 + (Math.random()*40-20)},${(startY+endY)/2 + (Math.random()*40-20)} ${endX},${endY}`}
                        stroke="rgba(37, 40, 89, 0.2)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: [0, 1, 1, 1, 0],
                          opacity: [0, 0.8, 0.8, 0.8, 0],
                        }}
                        transition={{ 
                          duration: 4 + Math.random() * 3, 
                          repeat: Infinity, 
                          repeatDelay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                      />
                    </svg>
                  </motion.div>
                );
              })}
              
              {/* Binary code particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`binary-${i}`}
                  className="absolute text-xs font-mono text-cyanase-primary/20 pointer-events-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.7, 0],
                    y: [0, -20]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 5
                  }}
                >
                  {Math.random() > 0.5 ? "1" : "0"}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
