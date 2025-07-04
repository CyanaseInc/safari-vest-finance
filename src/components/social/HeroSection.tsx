
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Share2, MessageCircle, Users2, Wallet, PiggyBank, BookOpen, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  // State for animated illustration
  const [isIllustrationVisible, setIsIllustrationVisible] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIllustrationVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (animationRef.current) {
      observer.observe(animationRef.current);
    }
    
    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Community-Powered Finance</h1>
            <p className="text-xl mb-8 text-gray-700">
              Digitizing village savings groups for the mobile generation. Save, invest, 
              and grow together through technology designed for African communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-cyanase-secondary hover:bg-cyanase-secondary-dark text-white font-medium">
                Download App <Share2 className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-cyanase-secondary text-cyanase-secondary hover:bg-cyanase-secondary/10">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          {/* Creative Social Finance Ecosystem Illustration */}
          <motion.div 
            ref={animationRef}
            className="relative h-[400px] md:h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Central community circle */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyanase-secondary to-cyanase-secondary-dark rounded-full flex items-center justify-center shadow-lg z-30 border-4 border-white"
              initial={{ scale: 0 }}
              animate={isIllustrationVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Users2 size={40} className="text-white" />
            </motion.div>
            
            {/* Orbit paths */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-cyanase-secondary opacity-50"
              initial={{ scale: 0, rotate: 0 }}
              animate={isIllustrationVisible ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed border-cyanase-secondary opacity-30"
              initial={{ scale: 0, rotate: 0 }}
              animate={isIllustrationVisible ? { scale: 1, rotate: -360 } : { scale: 0, rotate: 0 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Community nodes - 5 community groups */}
            {[0, 72, 144, 216, 288].map((angle, index) => (
              <motion.div
                key={`community-${index}`}
                className="absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-cyanase-secondary z-20"
                initial={{ 
                  x: Math.cos(angle * Math.PI / 180) * 120 * 0.5 + 160, 
                  y: Math.sin(angle * Math.PI / 180) * 120 * 0.5 + 200,
                  opacity: 0 
                }}
                animate={isIllustrationVisible ? { 
                  x: Math.cos(angle * Math.PI / 180) * 120 + 160,
                  y: Math.sin(angle * Math.PI / 180) * 120 + 200,
                  opacity: 1
                } : {
                  x: Math.cos(angle * Math.PI / 180) * 120 * 0.5 + 160,
                  y: Math.sin(angle * Math.PI / 180) * 120 * 0.5 + 200,
                  opacity: 0
                }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <motion.div 
                  className="flex items-center justify-center flex-col"
                  whileHover={{ scale: 1.1 }}
                >
                  {index === 0 && <Wallet size={20} className="text-cyanase-secondary mb-1" />}
                  {index === 1 && <PiggyBank size={20} className="text-cyanase-secondary mb-1" />}
                  {index === 2 && <MessageCircle size={20} className="text-cyanase-secondary mb-1" />}
                  {index === 3 && <BookOpen size={20} className="text-cyanase-secondary mb-1" />}
                  {index === 4 && <TrendingUp size={20} className="text-cyanase-secondary mb-1" />}
                  
                  <span className="text-xs font-semibold text-gray-700 hidden md:block">
                    {index === 0 && "Savings"}
                    {index === 1 && "Groups"}
                    {index === 2 && "Chat"}
                    {index === 3 && "Learn"}
                    {index === 4 && "Invest"}
                  </span>
                </motion.div>
              </motion.div>
            ))}
            
            {/* Connection lines from central hub to communities */}
            {[0, 72, 144, 216, 288].map((angle, index) => (
              <motion.div 
                key={`line-${index}`}
                className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-cyanase-secondary to-cyanase-secondary-light origin-left"
                style={{
                  width: '120px',
                  transform: `rotate(${angle}deg)`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isIllustrationVisible ? { scaleX: 1, opacity: 0.7 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              />
            ))}
            
            {/* User nodes - representing people in each community */}
            {[30, 102, 174, 246, 318].map((angle, index) => {
              // Calculate the main community position
              const communityX = Math.cos(((angle - 30) * Math.PI) / 180) * 120 + 160;
              const communityY = Math.sin(((angle - 30) * Math.PI) / 180) * 120 + 200;
              
              return (
                <motion.div
                  key={`users-${index}`}
                  className="absolute w-20 h-20"
                  style={{
                    top: communityY - 10,  // Offset to position near community node
                    left: communityX - 10, // Offset to position near community node
                  }}
                >
                  {/* Create 3 user dots in a mini-cluster around each community */}
                  {[0, 1, 2].map((userIndex) => {
                    const userOffset = [
                      { x: 30, y: -20 },
                      { x: 40, y: 10 },
                      { x: 20, y: 30 }
                    ][userIndex];
                    
                    return (
                      <motion.div
                        key={`user-${index}-${userIndex}`}
                        className="absolute w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200"
                        style={{
                          top: userOffset.y,
                          left: userOffset.x
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isIllustrationVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.15 + userIndex * 0.1 }}
                      >
                        <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    );
                  })}
                  
                  {/* Show currency/money transfer between users and community */}
                  <motion.div
                    className="absolute top-[15px] left-[25px] text-xs font-bold"
                    style={{ color: '#F7A92D' }}
                    initial={{ opacity: 0, y: 0 }}
                    animate={isIllustrationVisible ? 
                      { opacity: [0, 1, 1, 0], y: [-5, -10, -15, -20] } : 
                      { opacity: 0, y: 0 }
                    }
                    transition={{
                      duration: 2,
                      delay: 1.5 + index * 0.5,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {['$', '€', '£', '¥', '₵'][index % 5]}
                  </motion.div>
                </motion.div>
              );
            })}
            
            {/* Transaction animations */}
            {[0, 1, 2, 3, 4].map((index) => (
              <React.Fragment key={`transaction-${index}`}>
                {/* Money flowing in */}
                <motion.div
                  className="absolute top-1/2 left-1/2 flex items-center justify-center font-bold text-sm bg-green-500 text-white w-6 h-6 rounded-full shadow-md z-10"
                  initial={{ 
                    x: Math.cos((index * 72 + 30) * Math.PI / 180) * 160 - 12, 
                    y: Math.sin((index * 72 + 30) * Math.PI / 180) * 160 - 12,
                    opacity: 0
                  }}
                  animate={isIllustrationVisible ? { 
                    x: [
                      Math.cos((index * 72 + 30) * Math.PI / 180) * 160 - 12,
                      Math.cos((index * 72 + 15) * Math.PI / 180) * 100 - 12,
                      Math.cos(index * 72 * Math.PI / 180) * 40 - 12,
                      0 - 12
                    ],
                    y: [
                      Math.sin((index * 72 + 30) * Math.PI / 180) * 160 - 12,
                      Math.sin((index * 72 + 15) * Math.PI / 180) * 100 - 12,
                      Math.sin(index * 72 * Math.PI / 180) * 40 - 12,
                      0 - 12
                    ],
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.8]
                  } : {
                    opacity: 0
                  }}
                  transition={{
                    duration: 2,
                    delay: 3 + index * 2,
                    repeat: Infinity,
                    repeatDelay: 8
                  }}
                >
                  <ArrowDown size={14} />
                </motion.div>
                
                {/* Money flowing out (loans/dividends) */}
                <motion.div
                  className="absolute top-1/2 left-1/2 flex items-center justify-center font-bold text-sm bg-blue-500 text-white w-6 h-6 rounded-full shadow-md z-10"
                  initial={{ 
                    x: 0 - 12, 
                    y: 0 - 12,
                    opacity: 0
                  }}
                  animate={isIllustrationVisible ? { 
                    x: [
                      0 - 12,
                      Math.cos(index * 72 * Math.PI / 180) * 40 - 12,
                      Math.cos((index * 72 + 15) * Math.PI / 180) * 100 - 12,
                      Math.cos((index * 72 + 30) * Math.PI / 180) * 160 - 12
                    ],
                    y: [
                      0 - 12,
                      Math.sin(index * 72 * Math.PI / 180) * 40 - 12,
                      Math.sin((index * 72 + 15) * Math.PI / 180) * 100 - 12,
                      Math.sin((index * 72 + 30) * Math.PI / 180) * 160 - 12
                    ],
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.8]
                  } : {
                    opacity: 0
                  }}
                  transition={{
                    duration: 2,
                    delay: 5 + index * 2,
                    repeat: Infinity,
                    repeatDelay: 8
                  }}
                >
                  <ArrowUp size={14} />
                </motion.div>
              </React.Fragment>
            ))}
            
            {/* Growth pulses at center */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={`pulse-${index}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyanase-secondary"
                initial={{ width: 32, height: 32, opacity: 0.8 }}
                animate={isIllustrationVisible ? { 
                  width: ['32px', '170px'], 
                  height: ['32px', '170px'], 
                  opacity: [0.8, 0] 
                } : { 
                  opacity: 0 
                }}
                transition={{ 
                  duration: 3, 
                  delay: index * 1, 
                  repeat: Infinity,
                  ease: "easeOut" 
                }}
              />
            ))}
            
            {/* Floating financial benefit labels */}
            {[
              { text: "Earn Together", delay: 2.0, x: -100, y: -100 },
              { text: "Group Savings", delay: 2.5, x: 80, y: -120 },
              { text: "Transparent", delay: 3.0, x: 120, y: 30 },
              { text: "Low Barrier", delay: 3.5, x: -120, y: 30 },
              { text: "Community Wealth", delay: 4.0, x: 0, y: 120 }
            ].map((item, index) => (
              <motion.div
                key={`label-${index}`}
                className="absolute text-xs md:text-sm px-2 py-1 bg-white/80 backdrop-blur-sm rounded-md shadow-sm border border-cyanase-secondary/20 font-medium text-cyanase-secondary-dark"
                style={{
                  top: `calc(50% + ${item.y}px)`,
                  left: `calc(50% + ${item.x}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, y: 5 }}
                animate={isIllustrationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                transition={{ 
                  duration: 0.5,
                  delay: item.delay,
                }}
              >
                {item.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
