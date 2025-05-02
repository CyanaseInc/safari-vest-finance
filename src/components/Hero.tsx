
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Network, ShieldCheck, CreditCard, Wallet, TrendingUp, DollarSign, PiggyBank, LineChart, Star, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);
  const [imageCenter, setImageCenter] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowParticles, setGlowParticles] = useState<{x: number, y: number, size: number, color: string, speed: number}[]>([]);
  
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
  
  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initialize glow particles
  useEffect(() => {
    const particles = Array.from({ length: 15 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 40 + 20,
      color: [
        'rgba(155, 135, 245, 0.3)', // Purple
        'rgba(214, 188, 250, 0.3)', // Light Purple
        'rgba(94, 234, 212, 0.3)',  // Teal
        'rgba(253, 224, 71, 0.2)'   // Yellow
      ][Math.floor(Math.random() * 4)],
      speed: Math.random() * 0.2 + 0.1
    }));
    
    setGlowParticles(particles);
  }, []);

  // Move glow particles
  useEffect(() => {
    const moveParticles = () => {
      setGlowParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed,
        x: particle.x + Math.sin(particle.y * 0.05) * 0.5,
        // Reset particles when they go out of view
        ...(particle.y < -particle.size ? {
          y: window.innerHeight + particle.size,
          x: Math.random() * window.innerWidth
        } : {})
      })));
    };
    
    const interval = setInterval(moveParticles, 50);
    return () => clearInterval(interval);
  }, []);

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
    const particles: { x: number; y: number; vx: number; vy: number; color: string; size: number; brightness: number }[] = [];

    // Create particles with varying sizes and brightness
    for (let i = 0; i < particleCount; i++) {
      const isFeatured = i % 10 === 0;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        color: isFeatured ? '#9b87f5' : '#D6BCFA',
        size: isFeatured ? 3 : 2,
        brightness: Math.random() * 0.5 + 0.5
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw glow effect based on mouse position
      const gradientX = mousePosition.x || canvas.width / 2;
      const gradientY = mousePosition.y || canvas.height / 2;
      
      const radialGradient = ctx.createRadialGradient(
        gradientX, gradientY, 0,
        gradientX, gradientY, 300
      );
      
      radialGradient.addColorStop(0, 'rgba(155, 135, 245, 0.2)');
      radialGradient.addColorStop(0.5, 'rgba(155, 135, 245, 0.05)');
      radialGradient.addColorStop(1, 'rgba(155, 135, 245, 0)');
      
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply slight attraction to mouse
        const dx = (mousePosition.x || canvas.width/2) - particle.x;
        const dy = (mousePosition.y || canvas.height/2) - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          particle.vx += dx * 0.0001;
          particle.vy += dy * 0.0001;
        }
        
        // Limit velocity
        const maxSpeed = 0.5;
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Pulsating effect
        const pulseSize = particle.size + Math.sin(Date.now() * 0.005) * 0.5;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        
        // Add glow effect to some particles
        if (particle.size > 2) {
          const glow = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, pulseSize * 4
          );
          glow.addColorStop(0, particle.color);
          glow.addColorStop(1, 'rgba(155, 135, 245, 0)');
          ctx.fillStyle = glow;
          ctx.fillRect(particle.x - pulseSize * 4, particle.y - pulseSize * 4, pulseSize * 8, pulseSize * 8);
        }
        
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw connections with dynamic opacity based on distance
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Calculate line opacity based on distance
            const opacity = (1 - distance / connectionDistance) * p1.brightness * p2.brightness;
            
            // Draw gradient connection line
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(155, 135, 245, ${opacity})`);
            gradient.addColorStop(1, `rgba(214, 188, 250, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.min(opacity * 2, 1);
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
  }, [mousePosition]);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background glow particles */}
      {glowParticles.map((particle, index) => (
        <motion.div
          key={`glow-${index}`}
          className="absolute rounded-full pointer-events-none blur-2xl"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            zIndex: 0,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                className="lg:w-1/2 lg:pr-8"
                style={{ 
                  perspective: '1000px', 
                  transformStyle: 'preserve-3d'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `translateX(${(mousePosition.x - window.innerWidth/2) * -0.01}px) 
                               translateY(${(mousePosition.y - window.innerHeight/2) * -0.01}px)`
                  }}
                  className="sm:text-center lg:text-left"
                >
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <motion.span 
                      className="block"
                      animate={{ 
                        textShadow: ['0 0 0px rgba(155, 135, 245, 0)', '0 0 20px rgba(155, 135, 245, 0.5)', '0 0 0px rgba(155, 135, 245, 0)'] 
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Digitizing Village
                    </motion.span>
                    <motion.span 
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-500"
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      style={{ backgroundSize: '200% auto' }}
                    >
                      Savings Groups
                    </motion.span>
                  </h1>
                  
                  <motion.p 
                    className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    Empowering African communities with modern financial tools. Save, invest, and grow together through mobile technology.
                  </motion.p>
                  
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-md shadow"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 md:py-4 md:text-lg md:px-10 relative overflow-hidden group">
                        <motion.span 
                          className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-30"
                          animate={{ 
                            x: ['-100%', '100%'], 
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        Get Started 
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </motion.div>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-3 sm:mt-0 sm:ml-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-purple-700 border-purple-700 hover:bg-purple-50 md:py-4 md:text-lg md:px-10 group">
                        Learn More 
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="ml-2"
                        >
                          <Network className="h-5 w-5" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:w-1/2 mt-12 lg:mt-0 relative"
                style={{
                  transform: `translateX(${(mousePosition.x - window.innerWidth/2) * 0.02}px) 
                             translateY(${(mousePosition.y - window.innerHeight/2) * 0.02}px)`
                }}
              >
                <div className="relative" ref={imageRef}>
                  {/* Mobile Phone App Mockup */}
                  <motion.div 
                    className="relative mx-auto"
                    style={{ maxWidth: "280px" }}
                    animate={{ 
                      y: [0, -10, 0],
                      rotateY: (mousePosition.x - window.innerWidth/2) * 0.01,
                      rotateX: (mousePosition.y - window.innerHeight/2) * -0.01,
                    }}
                    transition={{ 
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      rotateX: { duration: 0.1, ease: "linear" },
                      rotateY: { duration: 0.1, ease: "linear" },
                    }}
                  >
                    {/* Phone frame */}
                    <div className="relative rounded-[3rem] overflow-hidden border-8 border-black bg-black shadow-2xl" style={{ height: "550px" }}>
                      {/* Add glowing effect around phone */}
                      <motion.div 
                        className="absolute -inset-1 rounded-[3.5rem] opacity-30 blur-md"
                        animate={{ 
                          boxShadow: [
                            '0 0 0px rgba(155, 135, 245, 0.5)', 
                            '0 0 20px rgba(155, 135, 245, 1)', 
                            '0 0 0px rgba(155, 135, 245, 0.5)'
                          ] 
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Phone status bar */}
                      <div className="absolute top-0 left-0 w-full bg-black text-white z-10 flex justify-between items-center px-6 py-2 text-xs">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 5h8m-8 5h8" />
                            </svg>
                          </motion.div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <motion.div
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.926 2c.644 0 1.167.522 1.167 1.167v17.666c0 .645-.523 1.167-1.167 1.167h-7.002C13.281 22 13 21.719 13 21.075V2.925c0-.644.281-.925.924-.925h7.002z" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Phone content */}
                      <div className="relative w-full h-full pt-8 bg-gradient-to-b from-purple-800 via-purple-700 to-indigo-600">
                        {/* Animated gradient background */}
                        <motion.div 
                          className="absolute inset-0 opacity-20"
                          animate={{ 
                            background: [
                              'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0) 70%)',
                              'radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0) 70%)'
                            ] 
                          }}
                          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        {/* App header */}
                        <div className="flex justify-between items-center px-5 py-2 text-white">
                          <div>
                            <h3 className="font-bold text-lg">Hello, Sarah</h3>
                            <p className="text-xs opacity-80">Welcome back</p>
                          </div>
                          <motion.div 
                            className="bg-white rounded-full h-8 w-8 flex items-center justify-center shadow-md"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="text-purple-700 font-bold text-sm">S</span>
                          </motion.div>
                        </div>
                        
                        {/* Main balance card */}
                        <motion.div 
                          className="mx-4 my-4 bg-white rounded-xl p-4 shadow-lg relative overflow-hidden"
                          animate={{ y: [2, -2, 2] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          whileHover={{ scale: 1.03 }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          {/* Card shimmer effect */}
                          <motion.div 
                            className="absolute inset-0 opacity-30"
                            animate={{ 
                              background: [
                                'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
                                'linear-gradient(90deg, transparent, transparent, transparent)'
                              ],
                              left: ['-100%', '100%']
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                          />
                          
                          <motion.p 
                            className="text-xs text-gray-500"
                            animate={{ x: [0, 2, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            Total Balance
                          </motion.p>
                          <h2 className="text-2xl font-bold flex items-center">
                            <motion.span
                              animate={{ 
                                scale: [1, 1.1, 1],
                                color: ['#1a202c', '#805ad5', '#1a202c']
                              }}
                              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                            >
                              $2,748.00
                            </motion.span>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                              className="ml-2 opacity-50"
                            >
                              <Sparkles size={14} />
                            </motion.div>
                          </h2>
                          <div className="flex items-center mt-1 text-green-500 text-xs">
                            <motion.div
                              animate={{ y: [0, -2, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <TrendingUp size={14} />
                            </motion.div>
                            <span className="ml-1">+15% this month</span>
                          </div>
                          
                          <div className="flex justify-between mt-4">
                            <motion.button 
                              whileHover={{ scale: 1.05, backgroundColor: '#EDE9FE' }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-purple-100 rounded-lg px-3 py-2 text-purple-700 text-xs font-medium flex items-center"
                            >
                              <motion.div
                                animate={{ rotate: [0, 180, 360] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="mr-1"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                              </motion.div>
                              Add Money
                            </motion.button>
                            <motion.button 
                              whileHover={{ scale: 1.05, backgroundColor: '#EDE9FE' }}
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
                        <div className="mx-4 my-4 backdrop-blur-md rounded-xl p-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-white/10">
                          <p className="text-xs text-white mb-3">Quick Actions</p>
                          <div className="flex justify-between">
                            {['Send', 'Request', 'Save', 'Invest'].map((action, index) => {
                              const icons = [
                                <CreditCard size={18} className="text-white" />,
                                <Wallet size={18} className="text-white" />,
                                <PiggyBank size={18} className="text-white" />,
                                <LineChart size={18} className="text-white" />
                              ];
                              
                              return (
                                <motion.div 
                                  key={action}
                                  whileHover={{ y: -5 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="flex flex-col items-center"
                                  initial={{ y: 50, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                                >
                                  <motion.div 
                                    className="bg-white/20 rounded-full h-10 w-10 flex items-center justify-center mb-1 relative overflow-hidden"
                                    whileHover={{ 
                                      boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                                      backgroundColor: 'rgba(255,255,255,0.3)'
                                    }}
                                  >
                                    {/* Sparkle effect on hover */}
                                    <motion.div 
                                      className="absolute inset-0 opacity-0 hover:opacity-100"
                                      animate={{ 
                                        background: [
                                          'radial-gradient(circle at top left, rgba(255,255,255,0.5) 0%, transparent 20%)',
                                          'radial-gradient(circle at bottom right, rgba(255,255,255,0.5) 0%, transparent 20%)'
                                        ],
                                        rotate: [0, 360] 
                                      }}
                                      transition={{ duration: 3, repeat: Infinity }}
                                    />
                                    
                                    {icons[index]}
                                  </motion.div>
                                  <motion.span 
                                    className="text-white text-xs"
                                    animate={{ 
                                      textShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 8px rgba(255,255,255,0.5)', '0 0 0px rgba(255,255,255,0)'] 
                                    }}
                                    transition={{ duration: 2, delay: index * 0.5, repeat: Infinity }}
                                  >
                                    {action}
                                  </motion.span>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                        
                        {/* Recent Transactions */}
                        <div className="mx-4 mt-4 bg-white rounded-t-xl p-4 relative overflow-hidden">
                          {/* Card shimmer effect */}
                          <motion.div 
                            className="absolute inset-0 opacity-10"
                            animate={{ 
                              background: [
                                'linear-gradient(135deg, transparent 0%, rgba(155, 135, 245, 0.6) 50%, transparent 100%)',
                                'linear-gradient(135deg, transparent 0%, transparent 50%, transparent 100%)'
                              ],
                              backgroundSize: ['200% 200%', '100% 100%'],
                              backgroundPosition: ['0% 0%', '100% 100%']
                            }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                          />
                        
                          <div className="flex justify-between items-center mb-4">
                            <motion.p 
                              className="font-medium"
                              animate={{ x: [0, 2, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              Recent Transactions
                            </motion.p>
                            <motion.span 
                              className="text-purple-700 text-xs"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              View All
                            </motion.span>
                          </div>
                          
                          {/* First transaction */}
                          <motion.div 
                            className="flex items-center justify-between py-2 border-b border-gray-100"
                            whileHover={{ backgroundColor: '#F9FAFB', x: 2 }}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <div className="flex items-center">
                              <motion.div 
                                className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-3"
                                whileHover={{ scale: 1.1, backgroundColor: '#DBEAFE' }}
                              >
                                <CreditCard size={16} className="text-blue-500" />
                              </motion.div>
                              <div>
                                <p className="text-sm font-medium">Amazon</p>
                                <p className="text-xs text-gray-500">May 30</p>
                              </div>
                            </div>
                            <motion.span 
                              className="text-sm"
                              animate={{ 
                                scale: [1, 1.05, 1],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              -$28.90
                            </motion.span>
                          </motion.div>
                          
                          {/* Second transaction */}
                          <motion.div 
                            className="flex items-center justify-between py-2"
                            whileHover={{ backgroundColor: '#F9FAFB', x: 2 }}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="flex items-center">
                              <motion.div 
                                className="bg-green-100 rounded-full h-8 w-8 flex items-center justify-center mr-3"
                                whileHover={{ scale: 1.1, backgroundColor: '#DCFCE7' }}
                              >
                                <DollarSign size={16} className="text-green-500" />
                              </motion.div>
                              <div>
                                <p className="text-sm font-medium">Salary</p>
                                <p className="text-xs text-gray-500">May 28</p>
                              </div>
                            </div>
                            <motion.span 
                              className="text-sm text-green-500"
                              animate={{ 
                                scale: [1, 1.05, 1],
                              }}
                              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                            >
                              +$1,200.00
                            </motion.span>
                          </motion.div>
                        </div>
                      
                        {/* Bottom app bar with home indicator */}
                        <div className="absolute bottom-0 left-0 right-0">
                          <div className="flex justify-center">
                            <motion.div 
                              className="bg-white h-1 w-1/3 rounded-full mb-1"
                              animate={{ 
                                opacity: [0.5, 1, 0.5],
                                width: ['30%', '33%', '30%']
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl" />
                  </motion.div>
                  
                  {/* Animated notification cards */}
                  <AnimatePresence>
                    {cardMessages.map((card, index) => (
                      <motion.div 
                        key={index}
                        className="absolute"
                        style={{ 
                          left: `${imageCenter.x}px`,
                          top: `${imageCenter.y}px`,
                          zIndex: visibleCardIndex === index ? 30 : 20,
                          perspective: '1000px'
                        }}
                        initial={{ 
                          opacity: 0, 
                          scale: 0.5,
                          x: 0,
                          y: 0,
                          rotateY: 45,
                          rotateX: -15
                        }}
                        animate={{ 
                          opacity: visibleCardIndex === index ? 1 : 0,
                          scale: visibleCardIndex === index ? 1 : 0.5,
                          x: visibleCardIndex === index ? getCardFinalPosition(index, "x") : 0,
                          y: visibleCardIndex === index ? getCardFinalPosition(index, "y") : 0,
                          rotateY: visibleCardIndex === index ? 0 : 45,
                          rotateX: visibleCardIndex === index ? 0 : -15,
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0.5,
                          x: 0,
                          y: 0,
                          rotateY: -45,
                          rotateX: 15
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, y: -5 }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ y: { duration: 2, repeat: Infinity, repeatType: "reverse" } }}
                        >
                          <Card className={`shadow-lg ${card.color} border-0 overflow-hidden`}>
                            {/* Add subtle gradient overlay */}
                            <motion.div 
                              className="absolute inset-0 opacity-20"
                              animate={{ 
                                background: [
                                  'linear-gradient(45deg, transparent, rgba(155, 135, 245, 0.3))',
                                  'linear-gradient(45deg, rgba(155, 135, 245, 0.3), transparent)'
                                ]
                              }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                            />
                            
                            <CardContent className="p-3">
                              <div className="flex items-center space-x-2">
                                <motion.div
                                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                                  transition={{ duration: 5, repeat: Infinity }}
                                >
                                  {card.icon}
                                </motion.div>
                                <motion.span 
                                  className="text-sm font-semibold"
                                  animate={{ 
                                    textShadow: ['0 0 0px rgba(0,0,0,0)', '0 0 5px rgba(155, 135, 245, 0.5)', '0 0 0px rgba(0,0,0,0)'] 
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  {card.title}
                                </motion.span>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {/* Network icon at top right with particles */}
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-full shadow-lg"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(155, 135, 245, 0.5)' }}
                    animate={{ 
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 5, repeat: Infinity },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    {/* Orbiting particles */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute w-2 h-2 rounded-full bg-purple-400"
                        animate={{
                          x: Math.cos(((angle + 360 * 10) / 180) * Math.PI) * 25,
                          y: Math.sin(((angle + 360 * 10) / 180) * Math.PI) * 25
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5
                        }}
                      />
                    ))}
                    
                    <Network size={28} className="text-purple-700 z-10 relative" />
                    
                    {/* Glowing effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-full"
                      animate={{ 
                        boxShadow: [
                          '0 0 0px rgba(155, 135, 245, 0.3)', 
                          '0 0 15px rgba(155, 135, 245, 0.8)', 
                          '0 0 0px rgba(155, 135, 245, 0.3)'
                        ] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Stars */}
                  {[...Array(5)].map((_, i) => {
                    const randomX = Math.random() * 300 - 150;
                    const randomY = Math.random() * 300 - 150;
                    const delay = Math.random() * 2;
                    const duration = 1 + Math.random() * 2;
                    
                    return (
                      <motion.div
                        key={`star-${i}`}
                        className="absolute text-yellow-400"
                        style={{
                          left: `calc(50% + ${randomX}px)`,
                          top: `calc(50% + ${randomY}px)`,
                          zIndex: 5
                        }}
                        animate={{ 
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          rotate: [0, 180]
                        }}
                        transition={{ 
                          duration,
                          delay, 
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      >
                        <Star size={Math.random() * 10 + 5} fill="currentColor" />
                      </motion.div>
                    );
                  })}
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
