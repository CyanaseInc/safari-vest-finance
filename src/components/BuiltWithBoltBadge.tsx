import React from 'react';
import { motion } from 'framer-motion';

export const BuiltWithBoltBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <a
        href="https://bolt.new/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Built with Bolt"
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5   rounded-full flex items-center justify-center">
            <img src ="bolt.png" alt ="bolt"/>
          </div>
         
        </div>
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </a>
    </motion.div>
  );
};