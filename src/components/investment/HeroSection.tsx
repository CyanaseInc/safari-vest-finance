
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden">
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyanase-primary mb-4"
          >
            Our Investment Products
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            We provide a wide range of investment products to help you diversify your portfolio
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-cyanase-primary hover:bg-cyanase-primary-dark text-white px-6 py-2 h-auto">
              Create investment account
            </Button>
            <Button variant="outline" className="border-cyanase-secondary text-cyanase-primary hover:bg-cyanase-secondary hover:text-cyanase-primary px-6 py-2 h-auto">
              Partner with us
            </Button>
          </motion.div>
        </div>

        {/* Animated coins/tokens */}
        {!isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute left-1/4 -bottom-6"
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
              className="absolute left-1/2 bottom-0 transform -translate-x-1/2"
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
              className="absolute right-1/4 -bottom-10"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-18 h-18 bg-cyanase-secondary/80 rounded-full flex items-center justify-center text-white font-bold shadow-lg p-5">
                  +20%
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};
