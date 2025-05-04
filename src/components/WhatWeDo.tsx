import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom" // Add this import

export const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('what-we-do-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="bg-white py-16" id="what-we-do-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#252859] mb-6">What we do</h2>
            <p className="text-gray-600 text-lg mb-8">
              At Cyanase, we simplify access to global investment opportunities by bringing together a 
              variety of asset classes from different fund managers on a single platform. Our mobile app allows 
              individuals to easily start saving and investing—either independently or as part of a group. Meanwhile, 
              fintechs can seamlessly integrate our API to offer investment services 
              within their apps, without the burden of handling regulations and compliance
            </p>
            <Link to="contact">
              <Button className="bg-[rgb(247,169,45)] hover:bg-[#252859] text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-10 lg:mt-0 h-80 relative">
            {/* Decentralized Banking Illustration */}
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Central hub/platform */}
              <motion.div 
                className="absolute z-30 w-24 h-24 rounded-full flex items-center justify-center shadow-xl border-4 border-white"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img src="/logog.jpg" alt="Cyanase" className="h-12 w-12" />
              </motion.div>
              
              {/* Outer ring - connecting the ecosystem */}
              <motion.div 
                className="absolute w-64 h-64 rounded-full border-2 border-dashed border-[#9b87f5] opacity-70"
                initial={{ scale: 0, rotate: 0 }}
                animate={isVisible ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
              />
              
              {/* Individual Nodes - representing people/users */}
              {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                <motion.div
                  key={`person-${index}`}
                  className="absolute w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#f7a92d]"
                  initial={{ 
                    x: Math.cos(angle * Math.PI / 180) * 100 * 0.5, 
                    y: Math.sin(angle * Math.PI / 180) * 100 * 0.5,
                    opacity: 0 
                  }}
                  animate={isVisible ? { 
                    x: Math.cos(angle * Math.PI / 180) * 100,
                    y: Math.sin(angle * Math.PI / 180) * 100,
                    opacity: 1
                  } : {
                    x: Math.cos(angle * Math.PI / 180) * 100 * 0.5,
                    y: Math.sin(angle * Math.PI / 180) * 100 * 0.5,
                    opacity: 0
                  }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                >
                  {/* Person icon */}
                  <svg className="w-6 h-6 text-[#252859]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              ))}
              
              {/* Connection lines from central hub to people */}
              {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                <motion.div 
                  key={`line-${index}`}
                  className="absolute h-0.5 bg-gradient-to-r from-[#9b87f5] to-[#f7a92d] origin-left z-10"
                  style={{
                    width: '100px',
                    transformOrigin: 'left center',
                    transform: `rotate(${angle}deg)`
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isVisible ? { scaleX: 1, opacity: 0.7 } : { scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                />
              ))}
              
              {/* Financial symbols floating around */}
              {[30, 90, 150, 210, 270, 330].map((angle, index) => {
                const symbols = ['$', '€', '£', '¥', '₹', '₿'];
                return (
                  <motion.div
                    key={`symbol-${index}`}
                    className="absolute text-xl font-bold"
                    style={{ color: index % 2 === 0 ? '#9b87f5' : '#f7a92d' }}
                    initial={{ 
                      x: Math.cos(angle * Math.PI / 180) * 140, 
                      y: Math.sin(angle * Math.PI / 180) * 140,
                      opacity: 0,
                      scale: 0.5
                    }}
                    animate={isVisible ? 
                      { 
                        x: [
                          Math.cos(angle * Math.PI / 180) * 140,
                          Math.cos((angle + 15) * Math.PI / 180) * 135,
                          Math.cos(angle * Math.PI / 180) * 140
                        ], 
                        y: [
                          Math.sin(angle * Math.PI / 180) * 140,
                          Math.sin((angle + 15) * Math.PI / 180) * 135,
                          Math.sin(angle * Math.PI / 180) * 140
                        ],
                        opacity: 1,
                        scale: 1,
                      } : {
                        opacity: 0,
                        scale: 0.5
                      }
                    }
                    transition={{ 
                      duration: 4, 
                      delay: 1.2 + index * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {symbols[index % symbols.length]}
                  </motion.div>
                );
              })}
              
              {/* Secondary connections between people - community network */}
              {[0, 120, 240].map((angle, index) => {
                const nextAngle = (angle + 60) % 360;
                // Calculate the start and end points for the arc
                const startX = Math.cos(angle * Math.PI / 180) * 100;
                const startY = Math.sin(angle * Math.PI / 180) * 100;
                const endX = Math.cos(nextAngle * Math.PI / 180) * 100;
                const endY = Math.sin(nextAngle * Math.PI / 180) * 100;
                
                return (
                  <motion.svg 
                    key={`connection-${index}`} 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                    viewBox="-120 -120 240 240"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1.5 + index * 0.2 }}
                  >
                    <motion.path 
                      d={`M ${startX} ${startY} Q 0 30, ${endX} ${endY}`}
                      stroke="#f7a92d"
                      strokeWidth="1"
                      fill="transparent"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.5, delay: 1.8 + index * 0.2 }}
                    />
                  </motion.svg>
                );
              })}
              
              {/* Pulse effect at the center */}
              {[1, 2, 3].map(index => (
                <motion.div
                  key={`pulse-${index}`}
                  className="absolute rounded-full border border-[#9b87f5] opacity-60"
                  initial={{ width: 24, height: 24, opacity: 0.8 }}
                  animate={isVisible ? { 
                    width: ['24px', '150px'], 
                    height: ['24px', '150px'], 
                    opacity: [0.8, 0] 
                  } : { width: 24, height: 24, opacity: 0 }}
                  transition={{ 
                    duration: 2.5, 
                    delay: index * 0.8, 
                    repeat: Infinity,
                    ease: "easeOut" 
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}