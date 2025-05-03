
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ListChecks } from "lucide-react";

export const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="absolute -top-10 -left-10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="text-cyanase-secondary opacity-30 text-9xl font-bold"
        >
          {"{"}
        </motion.div>
      </div>
      
      <div className="absolute -bottom-10 -right-10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="text-cyanase-secondary opacity-30 text-9xl font-bold"
        >
          {"}"}
        </motion.div>
      </div>
      
      <h1 className="text-4xl font-bold text-cyanase-primary mb-4 relative">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative inline-block"
        >
          Cyanase API
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-cyanase-secondary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </motion.span>
      </h1>
      
      <motion.h2 
        className="text-2xl text-cyanase-primary/80 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Powering Embedded Investing Across Africa
      </motion.h2>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <p className="text-lg text-gray-600">
          The Cyanase API allows any fintech, e-commerce platform, or social network to embed investing 
          and savings features into their own app or platform — without building financial infrastructure 
          from scratch or dealing with regulatory complexity.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <Button className="bg-cyanase-primary hover:bg-cyanase-primary-dark text-white px-8 py-6 rounded-md shadow-lg group relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-cyanase-secondary opacity-0 group-hover:opacity-20"
            animate={{ 
              x: ['-100%', '100%'], 
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <span className="mr-2">Get API Access</span>
          <ListChecks className="inline-block" />
        </Button>
      </motion.div>
    </motion.div>
  );
};
