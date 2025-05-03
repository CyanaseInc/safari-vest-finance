
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Globe, TrendingUp, PiggyBank } from "lucide-react";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-cyanase-secondary"
          style={{ filter: "blur(80px)" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-cyanase-primary"
          style={{ filter: "blur(100px)" }}
        />
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
              className="relative h-[350px] w-full"
            >
              {/* Globe animation */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative">
                  <Globe className="h-32 w-32 text-cyanase-primary opacity-20" />
                  <motion.div 
                    className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/4"
                    animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="bg-cyanase-primary text-white rounded-full p-2 shadow-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5" />
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
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-16 h-16 bg-cyanase-secondary/90 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    +5%
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="absolute right-1/4 top-3/5"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-20 h-20 bg-cyanase-primary/90 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    +12%
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute right-1/4 bottom-0"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-14 h-14 bg-cyanase-secondary/80 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    <PiggyBank className="h-6 w-6" />
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <motion.path
                  d="M160 140 L240 180 L300 120"
                  stroke="rgba(37, 40, 89, 0.2)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <motion.path
                  d="M240 180 L320 220"
                  stroke="rgba(37, 40, 89, 0.2)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 2.2 }}
                />
              </svg>
              
              {/* World map dots */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-cyanase-primary"
                    style={{
                      height: Math.random() * 6 + 2,
                      width: Math.random() * 6 + 2,
                      top: `${Math.random() * 90 + 5}%`,
                      left: `${Math.random() * 90 + 5}%`
                    }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
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
