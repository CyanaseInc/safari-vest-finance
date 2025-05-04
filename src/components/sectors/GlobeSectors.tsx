
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
      {/* Professional and organized global sectors visualization */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-full w-full flex items-center justify-center"
      >
        {/* Core globe element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-cyanase-primary flex items-center justify-center">
          <Globe className="h-24 w-24 text-cyanase-primary" strokeWidth={0.8} />
        </div>
        
        {/* Rotating orbit lines */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute top-1/2 left-1/2 w-full h-[1px] -translate-x-1/2 -translate-y-1/2 bg-cyanase-primary/20"></div>
          <div className="absolute top-1/2 left-1/2 w-full h-[1px] -translate-x-1/2 -translate-y-1/2 bg-cyanase-primary/20" style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}></div>
          <div className="absolute top-1/2 left-1/2 w-full h-[1px] -translate-x-1/2 -translate-y-1/2 bg-cyanase-primary/20" style={{ transform: "translate(-50%, -50%) rotate(90deg)" }}></div>
          <div className="absolute top-1/2 left-1/2 w-full h-[1px] -translate-x-1/2 -translate-y-1/2 bg-cyanase-primary/20" style={{ transform: "translate(-50%, -50%) rotate(135deg)" }}></div>
        </motion.div>
        
        {/* Circular orbit for sectors */}
        {sectors.slice(0, 7).map((sector, index) => {
          const angle = (index * (360 / 7)) * (Math.PI / 180);
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <React.Fragment key={sector.id}>
              {/* Sector icon with animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                }}
                transition={{ 
                  duration: 0.5, 
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
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md relative border border-cyanase-primary/20"
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
                    initial={{ opacity: 0, y: -5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {sector.name}
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Connection lines to center */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[1px] bg-cyanase-primary/20"
                initial={{ opacity: 0, rotate: angle * (180 / Math.PI) }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                style={{ 
                  height: radius,
                  transformOrigin: "bottom",
                  transform: `rotate(${angle * (180 / Math.PI)}deg)`
                }}
              />
              
              {/* Data packet animation */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-cyanase-primary"
                animate={{
                  x: [0, x],
                  y: [0, y],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: index * 0.5,
                  delay: index * 0.2
                }}
              />
            </React.Fragment>
          );
        })}
        
        {/* Equatorial ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full border border-cyanase-primary/30 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotateX: 80, rotateY: [0, 360] }}
          transition={{ rotateY: { duration: 20, repeat: Infinity, ease: "linear" } }}
          style={{ transformStyle: "preserve-3d" }}
        />
        
        {/* Meridian rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full border border-cyanase-primary/30 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotateX: [0, 360], rotateY: 80 }}
          transition={{ rotateX: { duration: 25, repeat: Infinity, ease: "linear" } }}
          style={{ transformStyle: "preserve-3d" }}
        />
      </motion.div>
    </div>
  );
};
