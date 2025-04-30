
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Network, ShieldCheck, CreditCard, Wallet, TrendingUp, DollarSign, PiggyBank, LineChart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);
  const [imageCenter, setImageCenter] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  // Array of cards with different messages (increased to 8)
  const cardMessages = [
    { icon: <ShieldCheck size={24} className="text-purple-700" />, title: "Secure Transactions", color: "bg-white" },
    { icon: <Wallet size={24} className="text-green-500" />, title: "Easy Savings", color: "bg-green-50" },
    { icon: <CreditCard size={24} className="text-blue-500" />, title: "Digital Payments", color: "bg-blue-50" },
    { icon: <TrendingUp size={24} className="text-orange-500" />, title: "Grow Your Money", color: "bg-orange-50" },
    { icon: <DollarSign size={24} className="text-purple-500" />, title: "Financial Freedom", color: "bg-purple-50" },
    { icon: <PiggyBank size={24} className="text-red-500" />, title: "Smart Investing", color: "bg-red-50" },
    { icon: <LineChart size={24} className="text-indigo-500" />, title: "Wealth Analytics", color: "bg-indigo-50" },
    { icon: <Network size={24} className="text-yellow-500" />, title: "Group Savings", color: "bg-yellow-50" },
  ];

  // Calculate the center of the image for card animations
  useEffect(() => {
    const updateImageCenter = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setImageCenter({
          x: rect.width / 2,
          y: rect.height / 2,
        });
      }
    };

    updateImageCenter();
    window.addEventListener('resize', updateImageCenter);
    return () => window.removeEventListener('resize', updateImageCenter);
  }, [isImageLoaded]);

  // Rotate through the cards
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCardIndex(prevIndex => (prevIndex + 1) % cardMessages.length);
    }, 2500); // Changed to 2.5 seconds to cycle through all 8 cards in reasonable time

    return () => clearInterval(interval);
  }, [cardMessages.length]);

  // Canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas responsive
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation settings
    const particleCount = 100;
    const connectionDistance = 100;
    const particles: { x: number; y: number; vx: number; vy: number; color: string }[] = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        color: i % 5 === 0 ? '#9b87f5' : '#D6BCFA'
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(155, 135, 245, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="sm:text-center lg:text-left"
                >
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Digitizing Village</span>
                    <span className="block text-purple-700">Savings Groups</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Empowering African communities with modern financial tools. Save, invest, and grow together through mobile technology.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-md shadow"
                    >
                      <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-3 sm:mt-0 sm:ml-3"
                    >
                      <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-purple-700 border-purple-700 hover:bg-purple-50 md:py-4 md:text-lg md:px-10">
                        Learn More <Network className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:w-1/2 mt-12 lg:mt-0 relative"
              >
                <div className="relative" ref={imageRef}>
                  {/* Mobile Phone App Mockup */}
                  <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
                    {/* Phone frame */}
                    <div className="relative rounded-[3rem] overflow-hidden border-8 border-black bg-black shadow-2xl" style={{ height: "550px" }}>
                      {/* Phone status bar */}
                      <div className="absolute top-0 left-0 w-full bg-black text-white z-10 flex justify-between items-center px-6 py-2 text-xs">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 5h8m-8 5h8" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.926 2c.644 0 1.167.522 1.167 1.167v17.666c0 .645-.523 1.167-1.167 1.167h-7.002C13.281 22 13 21.719 13 21.075V2.925c0-.644.281-.925.924-.925h7.002z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Phone content */}
                      <div className="relative w-full h-full pt-8 bg-gradient-to-b from-purple-800 to-purple-600">
                        {/* App header */}
                        <div className="flex justify-between items-center px-5 py-2 text-white">
                          <div>
                            <h3 className="font-bold text-lg">Hello, Sarah</h3>
                            <p className="text-xs opacity-80">Welcome back</p>
                          </div>
                          <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                            <span className="text-purple-700 font-bold text-sm">S</span>
                          </div>
                        </div>
                        
                        {/* Main balance card */}
                        <motion.div 
                          className="mx-4 my-4 bg-white rounded-xl p-4 shadow-lg"
                          animate={{ y: [2, -2, 2] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <p className="text-xs text-gray-500">Total Balance</p>
                          <h2 className="text-2xl font-bold">$2,748.00</h2>
                          <div className="flex items-center mt-1 text-green-500 text-xs">
                            <TrendingUp size={14} />
                            <span className="ml-1">+15% this month</span>
                          </div>
                          
                          <div className="flex justify-between mt-4">
                            <motion.button 
                              whileTap={{ scale: 0.95 }}
                              className="bg-purple-100 rounded-lg px-3 py-2 text-purple-700 text-xs font-medium flex items-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                              Add Money
                            </motion.button>
                            <motion.button 
                              whileTap={{ scale: 0.95 }}
                              className="bg-purple-100 rounded-lg px-3 py-2 text-purple-700 text-xs font-medium flex items-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                              </svg>
                              More
                            </motion.button>
                          </div>
                        </motion.div>
                        
                        {/* Quick actions */}
                        <div className="mx-4 my-4 bg-white/10 backdrop-blur-md rounded-xl p-4">
                          <p className="text-xs text-white mb-3">Quick Actions</p>
                          <div className="flex justify-between">
                            <motion.div 
                              whileHover={{ y: -5 }}
                              className="flex flex-col items-center"
                            >
                              <div className="bg-white/20 rounded-full h-10 w-10 flex items-center justify-center mb-1">
                                <CreditCard size={18} className="text-white" />
                              </div>
                              <span className="text-white text-xs">Send</span>
                            </motion.div>
                            <motion.div 
                              whileHover={{ y: -5 }}
                              className="flex flex-col items-center"
                            >
                              <div className="bg-white/20 rounded-full h-10 w-10 flex items-center justify-center mb-1">
                                <Wallet size={18} className="text-white" />
                              </div>
                              <span className="text-white text-xs">Request</span>
                            </motion.div>
                            <motion.div 
                              whileHover={{ y: -5 }}
                              className="flex flex-col items-center"
                            >
                              <div className="bg-white/20 rounded-full h-10 w-10 flex items-center justify-center mb-1">
                                <PiggyBank size={18} className="text-white" />
                              </div>
                              <span className="text-white text-xs">Save</span>
                            </motion.div>
                            <motion.div 
                              whileHover={{ y: -5 }}
                              className="flex flex-col items-center"
                            >
                              <div className="bg-white/20 rounded-full h-10 w-10 flex items-center justify-center mb-1">
                                <LineChart size={18} className="text-white" />
                              </div>
                              <span className="text-white text-xs">Invest</span>
                            </motion.div>
                          </div>
                        </div>
                        
                        {/* Recent Transactions */}
                        <div className="mx-4 mt-4 bg-white rounded-t-xl p-4">
                          <div className="flex justify-between items-center mb-4">
                            <p className="font-medium">Recent Transactions</p>
                            <span className="text-purple-700 text-xs">View All</span>
                          </div>
                          <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <div className="flex items-center">
                              <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                                <CreditCard size={16} className="text-blue-500" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">Amazon</p>
                                <p className="text-xs text-gray-500">May 30</p>
                              </div>
                            </div>
                            <span className="text-sm">-$28.90</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center">
                              <div className="bg-green-100 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                                <DollarSign size={16} className="text-green-500" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">Salary</p>
                                <p className="text-xs text-gray-500">May 28</p>
                              </div>
                            </div>
                            <span className="text-sm text-green-500">+$1,200.00</span>
                          </div>
                        </div>
                      
                        {/* Bottom app bar with home indicator */}
                        <div className="absolute bottom-0 left-0 right-0">
                          <div className="flex justify-center">
                            <div className="bg-white h-1 w-1/3 rounded-full mb-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl"></div>
                  </div>
                  
                  {/* Animated notification cards */}
                  <AnimatePresence>
                    {cardMessages.map((card, index) => (
                      <motion.div 
                        key={index}
                        className="absolute"
                        style={{ 
                          left: `${imageCenter.x}px`,
                          top: `${imageCenter.y}px`
                        }}
                        initial={{ 
                          opacity: 0, 
                          scale: 0.5,
                          x: 0,
                          y: 0
                        }}
                        animate={{ 
                          opacity: visibleCardIndex === index ? 1 : 0,
                          scale: visibleCardIndex === index ? 1 : 0.5,
                          x: visibleCardIndex === index ? getCardFinalPosition(index, "x") : 0,
                          y: visibleCardIndex === index ? getCardFinalPosition(index, "y") : 0
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0.5,
                          x: 0,
                          y: 0
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <Card className={`shadow-lg ${card.color} border-0`}>
                          <CardContent className="p-3">
                            <div className="flex items-center space-x-2">
                              {card.icon}
                              <span className="text-sm font-semibold">{card.title}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {/* Network icon at top right */}
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-purple-100 p-3 rounded-full shadow-md"
                    whileHover={{ rotate: 360 }}
                    animate={{ 
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 5, repeat: Infinity },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <Network size={28} className="text-purple-700" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get final positions for card animations
function getCardFinalPosition(index: number, axis: "x" | "y") {
  // Define final positions for each card from the center (adapted for 8 cards)
  const positions = [
    { x: -150, y: -120 },   // Top left
    { x: -50, y: -170 },    // Top left-center
    { x: 50, y: -170 },     // Top right-center
    { x: 150, y: -120 },    // Top right
    { x: -180, y: 0 },      // Middle left
    { x: 180, y: 0 },       // Middle right
    { x: -120, y: 120 },    // Bottom left
    { x: 120, y: 120 },     // Bottom right
  ];
  
  return positions[index % positions.length][axis];
}
