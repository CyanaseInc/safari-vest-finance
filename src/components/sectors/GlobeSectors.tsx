
import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

interface SectorIcon {
  id: string;
  emoji: string;
  name: string;
}

interface GlobeSectorsProps {
  sectors: SectorIcon[];
}

export const GlobeSectors = ({ sectors }: GlobeSectorsProps) => {
  return (
    <div className="relative h-[350px] w-full">
      {/* Enhanced interactive globe with digital finance elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-full w-full flex items-center justify-center"
      >
        {/* Digital grid background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="url(#smallGrid)" />
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Main sphere */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-cyanase-primary/20 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full border border-cyanase-primary/30 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-cyanase-primary/40 flex items-center justify-center">
              <Globe className="h-16 w-16 text-cyanase-primary/30" strokeWidth={0.8} />
            </div>
          </div>
        </div>
        
        {/* Enhanced rotating globe structure */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative"
          style={{ 
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          {/* Globe 3D grid structure */}
          <div className="relative">
            {/* Horizontal circles */}
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={`h-circle-${i}`}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanase-primary/20"
                style={{
                  width: 80,
                  height: 20 + i * 12,
                  borderWidth: 1,
                  transform: `translate(-50%, -50%) rotateX(${90}deg)`,
                }}
              />
            ))}
            
            {/* Vertical circles */}
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={`v-circle-${i}`}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanase-primary/20"
                style={{
                  width: 80,
                  height: 80,
                  borderWidth: 1,
                  transform: `translate(-50%, -50%) rotateY(${i * 30}deg)`,
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Orbital rings with sectors */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-full h-full"
          style={{ transformOrigin: "center" }}
        >
          {/* Circular orbit with sectors */}
          {sectors.slice(0, 7).map((sector, index) => {
            const angle = (index * (360 / 7)) * (Math.PI / 180);
            const radius = 120;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <React.Fragment key={sector.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + (index * 0.1),
                    type: "spring",
                  }}
                  style={{ 
                    position: "absolute", 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 10
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative border border-cyanase-primary/20"
                  >
                    {/* Pulsing effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-cyanase-primary/10"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    
                    <div className="relative z-10 text-lg">{sector.emoji}</div>
                    
                    {/* Tooltip on hover */}
                    <motion.div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-2 py-1 rounded text-xs font-medium text-cyanase-primary shadow-md whitespace-nowrap"
                      initial={{ opacity: 0, y: -5, scale: 0.9 }}
                      whileHover={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {sector.name}
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Connection lines */}
                <svg 
                  className="absolute inset-0" 
                  style={{ overflow: "visible" }}
                >
                  <motion.line
                    x1="50%" 
                    y1="50%" 
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="rgba(37, 40, 89, 0.15)"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                  />
                  
                  {/* Data packet */}
                  <motion.circle 
                    cx="50%" 
                    cy="50%" 
                    r="3" 
                    fill="#8E9196"
                    animate={{ 
                      cx: [`50%`, `calc(50% + ${x}px)`],
                      cy: [`50%`, `calc(50% + ${y}px)`],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                </svg>
              </React.Fragment>
            );
          })}
        </motion.div>
        
        {/* Binary code particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`bit-${i}`}
            className="absolute text-cyanase-primary/10 text-xs font-mono"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
        
        {/* Central pulse animation */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanase-primary/10"
          animate={{ 
            scale: [1, 1.8, 1], 
            opacity: [0.7, 0.1, 0.7] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ width: 60, height: 60 }}
        />
      </motion.div>
    </div>
  );
};
