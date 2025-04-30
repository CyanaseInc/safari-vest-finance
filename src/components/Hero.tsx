import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Network, ShieldCheck, CreditCard, Wallet, TrendingUp, DollarSign } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);
  const [imageCenter, setImageCenter] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  // Array of cards with different messages
  const cardMessages = [
    { icon: <ShieldCheck size={24} className="text-purple-700" />, title: "Secure Transactions", color: "bg-white" },
    { icon: <Wallet size={24} className="text-green-500" />, title: "Easy Savings", color: "bg-green-50" },
    { icon: <CreditCard size={24} className="text-blue-500" />, title: "Digital Payments", color: "bg-blue-50" },
    { icon: <TrendingUp size={24} className="text-orange-500" />, title: "Grow Your Money", color: "bg-orange-50" },
    { icon: <DollarSign size={24} className="text-purple-500" />, title: "Financial Freedom", color: "bg-purple-50" },
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
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
                  {/* Animated Mobile Banking App Image */}
                  <div className="relative w-full rounded-lg shadow-2xl overflow-hidden" style={{ height: "400px" }}>
                    {/* Floating elements */}
                    <motion.div 
                      className="absolute z-10 top-10 right-16 bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white"
                      animate={{ 
                        y: [0, -15, 0], 
                        rotate: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                        <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute z-10 bottom-20 left-10 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center text-white"
                      animate={{ 
                        y: [0, 15, 0], 
                        rotate: [0, -15, 0] 
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a3.833 3.833 0 001.719-.756c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.113-2.178a3.833 3.833 0 00-1.718-.756V8.334c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute z-10 top-24 left-16 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white"
                      animate={{ 
                        x: [0, 15, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.5
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" />
                      </svg>
                    </motion.div>
                    
                    {/* Main mobile app image */}
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                      alt="Mobile banking app" 
                      className="w-full h-full object-cover"
                      onLoad={() => setIsImageLoaded(true)}
                    />
                    
                    {/* Animated overlays */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-purple-700/30 to-transparent"
                      animate={{ opacity: [0.4, 0.2, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Animated progress bar */}
                    <motion.div 
                      className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    />
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
                  
                  {/* Static notification badge (at bottom left) */}
                  <motion.div 
                    className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg"
                    animate={{ 
                      y: [0, -5, 0],
                      boxShadow: [
                        "0 4px 6px -1px rgba(0,0,0,0.1)", 
                        "0 10px 15px -3px rgba(0,0,0,0.1)", 
                        "0 4px 6px -1px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-semibold">Secure Transactions</span>
                    </div>
                  </motion.div>
                  
                  {/* Purple icon at top right */}
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
  // Define final positions for each card from the center
  const positions = [
    { x: -150, y: -120 },   // Top left
    { x: 0, y: -150 },      // Top center
    { x: 150, y: -80 },     // Top right
    { x: -180, y: 0 },      // Middle left
    { x: 180, y: 80 },      // Middle right
  ];
  
  return positions[index % positions.length][axis];
}
