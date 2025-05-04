
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, LineChart, DollarSign, Globe } from "lucide-react";

export const GlobeAnimation = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Optional: Add any additional initialization here
  }, []);
  
  return (
    <div className="relative h-[400px] w-full">
      {/* Main Globe Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Orbital rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute rounded-full border border-cyanase-primary/20"
              style={{
                width: `${180 + i * 60}px`,
                height: `${180 + i * 60}px`,
                borderWidth: '1px',
              }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 30 + i * 10, 
                repeat: Infinity, 
                ease: "linear",
              }}
            />
          ))}
          
          {/* Grid-based globe */}
          <motion.div
            ref={globeRef}
            className="relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {/* 3D sphere created with CSS */}
            <div className="relative w-40 h-40">
              {/* Horizontal lines */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={`h-line-${i}`} 
                  className="absolute top-1/2 left-0 w-full h-[1px] bg-cyanase-primary/20"
                  style={{ 
                    transform: `translateY(-50%) rotateX(${i * 22.5}deg)`,
                    transformStyle: 'preserve-3d',
                  }} 
                />
              ))}
              
              {/* Vertical lines */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={`v-line-${i}`} 
                  className="absolute top-0 left-1/2 w-[1px] h-full bg-cyanase-primary/20"
                  style={{ 
                    transform: `translateX(-50%) rotateY(${i * 30}deg)`,
                    transformStyle: 'preserve-3d',
                  }} 
                />
              ))}
              
              {/* Globe icon in the center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="h-20 w-20 text-cyanase-primary/50" strokeWidth={1} />
              </div>
              
              {/* "Continent" markers */}
              {[...Array(5)].map((_, i) => {
                const angle = (i * 72) * (Math.PI / 180);
                const radius = 70;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={`continent-${i}`}
                    className="absolute w-4 h-4 rounded-full bg-cyanase-secondary"
                    style={{
                      left: `calc(50% + ${x * 0.5}px)`,
                      top: `calc(50% + ${y * 0.5}px)`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
          
          {/* Data points orbiting around the globe */}
          {[...Array(5)].map((_, i) => {
            const angle = (i * 72 + 45) * (Math.PI / 180);
            const radius = 110;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            // Data points with different icons
            const icons = [
              <TrendingUp key="trend" className="h-4 w-4 text-green-500" />,
              <BarChart3 key="bar" className="h-4 w-4 text-cyanase-primary" />,
              <LineChart key="line" className="h-4 w-4 text-blue-500" />,
              <DollarSign key="dollar" className="h-4 w-4 text-yellow-500" />,
              <BarChart3 key="bar2" className="h-4 w-4 text-cyanase-primary" />
            ];
            
            return (
              <motion.div
                key={`orbit-point-${i}`}
                className="absolute rounded-full bg-white shadow-lg p-2"
                style={{
                  left: `calc(50% - 12px)`,
                  top: `calc(50% - 12px)`,
                }}
                animate={{
                  x: Array.from({ length: 60 }, (_, j) => 
                    Math.cos((j / 60) * Math.PI * 2 + (i * 72 + 45) * (Math.PI / 180)) * radius
                  ),
                  y: Array.from({ length: 60 }, (_, j) => 
                    Math.sin((j / 60) * Math.PI * 2 + (i * 72 + 45) * (Math.PI / 180)) * radius
                  ),
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  x: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse", 
                    delay: i * 0.3
                  }
                }}
              >
                {icons[i]}
              </motion.div>
            );
          })}
        </div>
      </div>
      
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
            <span className="font-medium text-sm">Treasury Bonds 12%</span>
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
            <span className="font-medium text-sm">Unit trusts</span>
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
    </div>
  );
};
