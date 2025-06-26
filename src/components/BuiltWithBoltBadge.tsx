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
          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
            Built with Bolt
          </span>
        </div>
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </a>
    </motion.div>
  );
};