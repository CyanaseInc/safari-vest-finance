import React from 'react';
import { motion } from 'framer-motion';

export const BuiltWithBoltBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-8 right-4 z-50"
    >
      <a
        href="https://bolt.new/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Built with Bolt"
      >
        <img
          src="bolt.png"
          alt="Bolt"
          className="w-8 h-8"
        />
      </a>
    </motion.div>
  );
};