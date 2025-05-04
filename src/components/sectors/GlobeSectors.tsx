
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Network, Circle } from "lucide-react";

interface SectorIcon {
  id: string;
  emoji: string;
  name: string;
  description?: string;
}

interface GlobeSectorsProps {
  sectors: SectorIcon[];
}

export const GlobeSectors = ({ sectors }: GlobeSectorsProps) => {
  // Track active sector for info card display
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [autoRotateSector, setAutoRotateSector] = useState<number>(0);

  // Auto-rotate through sectors to show info cards
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoRotateSector((prev) => (prev + 1) % sectors.length);
      setActiveSector(sectors[(autoRotateSector + 1) % sectors.length].id);

      // Reset after showing for a while
      setTimeout(() => {
        setActiveSector(null);
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, [sectors, autoRotateSector]);

  return (
    <div className="relative h-[350px] w-full">
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Core globe element */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-cyanase-primary flex items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Globe className="h-24 w-24 text-cyanase-primary" strokeWidth={0.8} />
        </motion.div>
        
        {/* Orbits */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main orbital path */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanase-primary/20"
            animate={{ rotateZ: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />

          {/* Secondary orbital path */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-52 h-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanase-primary/10"
            animate={{ rotateZ: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />

          {/* Digital data streams */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`data-stream-${i}`}
              className="absolute top-1/2 left-1/2 w-full h-[1px] -translate-x-1/2 -translate-y-1/2 opacity-40"
              style={{ 
                background: `linear-gradient(90deg, transparent 0%, rgba(155, 135, 245, ${Math.random() * 0.5 + 0.2}) ${50 + Math.random() * 20}%, transparent 100%)`,
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`
              }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-2 h-2 rounded-full bg-cyanase-primary"
                animate={{
                  left: ["0%", "100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Orbital sectors */}
        {sectors.map((sector, index) => {
          // Calculate angles for circular distribution
          const orbitRadius = 130;
          const angle = (index * (360 / sectors.length)) * (Math.PI / 180);
          
          // Calculate positions on the circle
          const x = Math.cos(angle) * orbitRadius;
          const y = Math.sin(angle) * orbitRadius;

          return (
            <React.Fragment key={sector.id}>
              {/* Sector node in orbit */}
              <motion.div
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: 1,
                  x: x,
                  y: y,
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: 0.1 * index
                }}
                style={{ 
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  zIndex: 20
                }}
                onClick={() => setActiveSector(activeSector === sector.id ? null : sector.id)}
                onMouseEnter={() => setActiveSector(sector.id)}
                onMouseLeave={() => 
                  // Only clear if it's not the auto-selected sector
                  sectors[autoRotateSector].id !== sector.id && setActiveSector(null)
                }
              >
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                >
                  {/* Sector icon with digital pulse effect */}
                  <motion.div 
                    className="relative w-10 h-10 rounded-full bg-white shadow-md border border-cyanase-primary/20 flex items-center justify-center"
                    animate={{ 
                      boxShadow: activeSector === sector.id 
                        ? ["0 0 0 0 rgba(155, 135, 245, 0)", "0 0 0 10px rgba(155, 135, 245, 0.2)", "0 0 0 0 rgba(155, 135, 245, 0)"]
                        : "none"
                    }}
                    transition={{ duration: 2, repeat: activeSector === sector.id ? Infinity : 0 }}
                  >
                    {/* Digital circle animation */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border border-cyanase-primary/20"
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0, 0.2]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    
                    {/* Main icon */}
                    <span className="text-lg">{sector.emoji}</span>
                  </motion.div>
                  
                  {/* Small label */}
                  <motion.div
                    className="mt-1 bg-white px-2 py-0.5 rounded-full shadow-sm text-xs font-medium text-cyanase-primary whitespace-nowrap"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    {sector.name}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Connection line to center */}
              <motion.div
                className="absolute top-1/2 left-1/2 h-[1px] -translate-x-[1px] -translate-y-[1px] origin-left bg-gradient-to-r from-cyanase-primary/70 to-cyanase-primary/10"
                style={{ 
                  width: orbitRadius,
                  transform: `translate(0, 0) rotate(${angle * (180/Math.PI)}deg)`,
                  zIndex: 5
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                {/* Data particle animation along connection line */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyanase-primary"
                  animate={{
                    left: ["0%", "100%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              {/* Digital binary markers */}
              {[0.3, 0.7].map((position, i) => (
                <motion.div
                  key={`binary-${sector.id}-${i}`}
                  className="absolute text-[8px] font-mono text-cyanase-primary/50 select-none"
                  style={{ 
                    left: `calc(50% + ${x * position}px)`, 
                    top: `calc(50% + ${y * position}px)`,
                    zIndex: 5
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 * index + (i * 0.2) }}
                >
                  {Math.random() > 0.5 ? "10" : "01"}
                </motion.div>
              ))}
            </React.Fragment>
          );
        })}

        {/* Info cards that fade in when sectors are activated */}
        <AnimatePresence>
          {activeSector && (
            <motion.div
              key={`card-${activeSector}`}
              className="absolute top-[65%] left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border border-cyanase-primary/20 max-w-xs z-30"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-start space-x-2">
                {/* Card icon */}
                <div className="bg-cyanase-primary/10 rounded-md p-1.5">
                  <span className="text-xl">
                    {sectors.find(s => s.id === activeSector)?.emoji}
                  </span>
                </div>
                
                {/* Card content */}
                <div>
                  <h4 className="font-medium text-sm text-cyanase-primary">
                    {sectors.find(s => s.id === activeSector)?.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {sectors.find(s => s.id === activeSector)?.description || 
                     "We partner with leading institutions in this sector to deliver innovative financial solutions."}
                  </p>
                </div>
              </div>
              
              {/* Digital line accent */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyanase-primary/80 via-cyanase-primary to-cyanase-primary/20"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Digital corner accent */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyanase-primary/30" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyanase-primary/30" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Digital numeric indicators */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`digit-${i}`}
            className="absolute font-mono text-[8px] text-cyanase-primary/40"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {Math.floor(Math.random() * 100)}
          </motion.div>
        ))}

        {/* Network node indicators */}
        {[...Array(3)].map((_, i) => {
          const angle = Math.random() * Math.PI * 2;
          const radius = 80 + Math.random() * 60;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={`node-${i}`}
              className="absolute rounded-full bg-cyanase-primary/30 flex items-center justify-center"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                width: '6px',
                height: '6px',
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 2
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-cyanase-primary/10"
                animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: i }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
