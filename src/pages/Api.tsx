import React, { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Code, FileCode, ListChecks, Webhook, Check, ShieldCheck, BarChart3, Lock, Database, Cpu } from "lucide-react"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

const Api = () => {
  const [activeTab, setActiveTab] = useState<'authentication' | 'investments' | 'users'>('authentication')
  const [animatedDots, setAnimatedDots] = useState<{ x: number; y: number; color: string; size: number }[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isInView, setIsInView] = useState(false)
  
  // Initialize animated dots
  useEffect(() => {
    const newDots = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 600, // Hero section approximate height
      color: Math.random() > 0.7 
        ? 'rgba(247, 169, 45, 0.6)' 
        : 'rgba(37, 40, 89, 0.4)',
      size: Math.random() * 6 + 2
    }));
    setAnimatedDots(newDots);
    setIsInView(true);
  }, []);
  
  // Handle mouse movement for interactive effects
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
  
  // Canvas animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInView) return;

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

    // Animation variables
    const connections: number[][] = [];
    let animationFrame: number;

    // Create connections between dots
    for (let i = 0; i < animatedDots.length; i++) {
      for (let j = i + 1; j < animatedDots.length; j++) {
        const dx = animatedDots[i].x - animatedDots[j].x;
        const dy = animatedDots[i].y - animatedDots[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          connections.push([i, j]);
        }
      }
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw dots
      const updatedDots = [...animatedDots];
      updatedDots.forEach((dot, index) => {
        // Move dots
        dot.y -= 0.2;
        
        // Reset position when out of view
        if (dot.y < -10) {
          dot.y = canvas.height + 10;
          dot.x = Math.random() * canvas.width;
        }
        
        // Apply slight horizontal drift
        dot.x += Math.sin(Date.now() * 0.001 + index) * 0.2;
        
        // Interactive effect - attract to mouse
        const dx = mousePosition.x - dot.x;
        const dy = mousePosition.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          dot.x += dx * 0.01;
          dot.y += dy * 0.01;
        }
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });
      
      // Draw connections
      connections.forEach(([i, j]) => {
        const dot1 = updatedDots[i];
        const dot2 = updatedDots[j];
        
        const dx = dot1.x - dot2.x;
        const dy = dot1.y - dot2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          // Calculate line opacity based on distance
          const opacity = 0.2 * (1 - distance / 150);
          
          const gradient = ctx.createLinearGradient(dot1.x, dot1.y, dot2.x, dot2.y);
          if (dot1.color.includes('247')) {
            gradient.addColorStop(0, `rgba(247, 169, 45, ${opacity})`);
            gradient.addColorStop(1, `rgba(37, 40, 89, ${opacity})`);
          } else {
            gradient.addColorStop(0, `rgba(37, 40, 89, ${opacity})`);
            gradient.addColorStop(1, `rgba(247, 169, 45, ${opacity})`);
          }
          
          ctx.beginPath();
          ctx.moveTo(dot1.x, dot1.y);
          ctx.lineTo(dot2.x, dot2.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
      
      setAnimatedDots(updatedDots);
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, animatedDots, mousePosition]);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <div className="relative overflow-hidden">
          {/* Background Canvas */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.7 }}
          />
          
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="text-cyanase-secondary opacity-30 text-9xl font-bold"
                  >
                    {"{"}
                  </motion.div>
                </div>
                
                <div className="absolute -bottom-10 -right-10">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    className="text-cyanase-secondary opacity-30 text-9xl font-bold"
                  >
                    {"}"}
                  </motion.div>
                </div>
                
                <h1 className="text-4xl font-bold text-cyanase-primary mb-4 relative">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative inline-block"
                  >
                    Cyanase API
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-cyanase-secondary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />
                  </motion.span>
                </h1>
                
                <motion.h2 
                  className="text-2xl text-cyanase-primary/80 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Powering Embedded Investing Across Africa
                </motion.h2>
                
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <p className="text-lg text-gray-600">
                    The Cyanase API allows any fintech, e-commerce platform, or social network to embed investing 
                    and savings features into their own app or platform — without building financial infrastructure 
                    from scratch or dealing with regulatory complexity.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <Button className="bg-cyanase-primary hover:bg-cyanase-primary-dark text-white px-8 py-6 rounded-md shadow-lg group relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-cyanase-secondary opacity-0 group-hover:opacity-20"
                      animate={{ 
                        x: ['-100%', '100%'], 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="mr-2">Get API Access</span>
                    <ListChecks className="inline-block" />
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                {/* API Code Block Animation */}
                <div className="bg-cyanase-primary rounded-xl p-6 shadow-2xl relative overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white/70 ml-4">api-request.js</div>
                  </div>
                  
                  {/* Terminal content */}
                  <div className="font-mono text-sm">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="text-green-400"
                    >
                      // Initialize Cyanase API client
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      className="text-cyanase-secondary"
                    >
                      const cyanase = new CyanaseAPI({
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="pl-6 text-white/90"
                    >
                      apiKey: '<span className="text-cyanase-secondary">YOUR_API_KEY</span>',
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                      className="pl-6 text-white/90"
                    >
                      environment: '<span className="text-cyanase-secondary">production</span>'
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.6 }}
                      className="text-cyanase-secondary"
                    >
                      });
                    </motion.div>
                    
                    <div className="mt-4">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        className="text-green-400"
                      >
                        // Create an investment for a user
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                        className="text-white"
                      >
                        async function createInvestment() {'{'}
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.2 }}
                        className="pl-6 text-white/90"
                      >
                        try {'{'}
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.4 }}
                        className="pl-12 text-white/90"
                      >
                        const response = await cyanase.investments.<span className="text-cyanase-secondary">create</span>({'{'}
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.6 }}
                        className="pl-16 text-white/90"
                      >
                        userId: '<span className="text-green-400">user_123456</span>',
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.8 }}
                        className="pl-16 text-white/90"
                      >
                        amount: <span className="text-cyanase-secondary">5000</span>,
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 3.0 }}
                        className="pl-16 text-white/90"
                      >
                        currency: '<span className="text-cyanase-secondary">UGX</span>',
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 3.2 }}
                        className="pl-16 text-white/90"
                      >
                        type: '<span className="text-cyanase-secondary">fixed_income</span>'
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 3.4 }}
                        className="pl-12 text-white/90"
                      >
                        {'});'}
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 3.6 }}
                        className="pl-12 text-white/90"
                      >
                        console.log(response);
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 3.8 }}
                        className="pl-6 text-white/90"
                      >
                        {'} catch (error) {'}
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 4.0 }}
                        className="pl-12 text-white/90"
                      >
                        console.error(error);
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 4.2 }}
                        className="pl-6 text-white/90"
                      >
                        {'}'}
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 4.4 }}
                        className="text-white"
                      >
                        {'}'}
                      </motion.div>
                    </div>
                  </div>

                  {/* Animated cursor */}
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="h-5 w-2 bg-white inline-block absolute bottom-10 left-[216px]"
                  />
                  
                  {/* Animated glowing effect */}
                  <motion.div 
                    className="absolute inset-0"
                    animate={{ 
                      boxShadow: [
                        'inset 0 0 30px rgba(247, 169, 45, 0)',
                        'inset 0 0 30px rgba(247, 169, 45, 0.3)',
                        'inset 0 0 30px rgba(247, 169, 45, 0)'
                      ] 
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Floating icons */}
                  <motion.div
                    className="absolute -top-5 -right-5 bg-white rounded-full p-2 shadow-lg"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Webhook size={20} className="text-cyanase-primary" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-3 -left-3 bg-white rounded-full p-2 shadow-lg"
                    animate={{ 
                      y: [0, 8, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    <Lock size={18} className="text-cyanase-primary" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/3 -left-4 bg-white rounded-full p-2 shadow-lg"
                    animate={{ 
                      x: [0, -5, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  >
                    <Database size={16} className="text-cyanase-secondary" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-1/4 -right-4 bg-white rounded-full p-2 shadow-lg"
                    animate={{ 
                      x: [0, 5, 0],
                      rotate: [0, -10, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
                  >
                    <Cpu size={16} className="text-cyanase-secondary" />
                  </motion.div>
                </div>
                
                {/* Response animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 5 }}
                  className="bg-white border border-gray-200 rounded-md p-4 mt-4 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-gray-500">Response</p>
                    <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      200 OK
                    </div>
                  </div>
                  <pre className="text-xs bg-gray-50 p-2 rounded overflow-auto">
                    {JSON.stringify({
                      "status": "success",
                      "data": {
                        "id": "inv_2789634",
                        "userId": "user_123456",
                        "amount": 5000,
                        "currency": "UGX",
                        "type": "fixed_income",
                        "status": "active",
                        "createdAt": "2025-05-03T12:00:00Z",
                        "expectedReturn": "13.5%"
                      }
                    }, null, 2)}
                  </pre>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Rest of the content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How It Works Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-cyanase-primary mb-8 flex items-center gap-2">
              <span className="text-cyanase-secondary">⚙️</span> How It Works
            </h2>
            
            <div className="space-y-10">
              {/* Authentication */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-cyanase-primary hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-cyanase-primary text-white w-7 h-7 rounded-full flex items-center justify-center mr-3">1</span>
                  Authentication
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-cyanase-secondary flex-shrink-0 mt-1" size={18} />
                    <p>Partners get secure API keys to authenticate and access services.</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-cyanase-secondary flex-shrink-0 mt-1" size={18} />
                    <p>OAuth2 or token-based authentication ensures secure access to customer and transaction endpoints.</p>
                  </li>
                </ul>
              </motion.div>
              
              {/* Account Creation & KYC */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-cyanase-secondary hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-cyanase-secondary text-cyanase-primary w-7 h-7 rounded-full flex items-center justify-center mr-3">2</span>
                  Account Creation & KYC
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-cyanase-primary flex-shrink-0 mt-1" size={18} />
                    <p>Create investment accounts for users via a single API call.</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-cyanase-primary flex-shrink-0 mt-1" size={18} />
                    <p>Built-in eKYC support: the API supports uploading documents or using mobile money KYC for identity verification.</p>
                  </li>
                </ul>
              </motion.div>
              
              {/* Continue with alternating colors for remaining sections */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-cyanase-primary hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-cyanase-primary text-white w-7 h-7 rounded-full flex items-center justify-center mr-3">3</span>
                  Deposits & Withdrawals
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-cyanase-secondary flex-shrink-0 mt-1" size={18} />
                    <p>API endpoints allow users to deposit into their investment wallet using mobile money (MTN, Airtel, etc.).</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-cyanase-secondary flex-shrink-0 mt-1" size={18} />
                    <p>Withdrawals can be initiated through the API, routed back to mobile money accounts.</p>
                  </li>
                </ul>
              </motion.div>
              
              {/* Investment Products */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-cyanase-secondary hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-cyanase-secondary text-cyanase-primary w-7 h-7 rounded-full flex items-center justify-center mr-3">4</span>
                  Investment Products
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-cyanase-primary flex-shrink-0 mt-1" size={18} />
                    <p>Access a range of unit trust products, fixed income products, or savings goals via API.</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-cyanase-primary flex-shrink-0 mt-1" size={18} />
                    <p>Developers can offer these products natively in their own apps by pulling product metadata and pricing.</p>
                  </li>
                </ul>
              </motion.div>
              
              {/* Transactions & Returns */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-cyanase-secondary hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-cyanase-secondary text-cyanase-primary w-7 h-7 rounded-full flex items-center justify-center mr-3">5</span>
                  Transactions & Returns
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-cyanase-secondary flex-shrink-0 mt-1" size={18} />
                    <p>Track transactions (deposits, returns, redemptions) for each user account.</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-cyanase-secondary flex-shrink-0 mt-1" size={18} />
                    <p>Pull real-time balances, historical returns, and interest earned per product.</p>
                  </li>
                </ul>
              </motion.div>
              
              {/* Group Investing Support */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-cyanase-secondary hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-cyanase-secondary text-cyanase-primary w-7 h-7 rounded-full flex items-center justify-center mr-3">6</span>
                  Group Investing Support
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-cyanase-primary flex-shrink-0 mt-1" size={18} />
                    <p>The API supports creation of groups, contribution tracking, goal management, and loan workflows.</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-cyanase-primary flex-shrink-0 mt-1" size={18} />
                    <p>Ideal for social saving platforms or fintechs with SACCO-like features.</p>
                  </li>
                </ul>
              </motion.div>
              
              {/* Webhooks */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-cyanase-secondary hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-cyanase-secondary text-cyanase-primary w-7 h-7 rounded-full flex items-center justify-center mr-3">7</span>
                  Webhooks
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-cyanase-secondary flex-shrink-0 mt-1" size={18} />
                    <p>Integrate webhooks to get notified in real time when:</p>
                    <ul className="space-y-2 mt-2">
                      <li>- A deposit is successful</li>
                      <li>- A withdrawal is initiated</li>
                      <li>- KYC is approved or declined</li>
                      <li>- A group hits a milestone</li>
                    </ul>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          
          {/* Regulatory & Compliance Section */}
          <motion.div 
            className="mt-16 bg-cyanase-primary/5 p-8 rounded-xl border border-cyanase-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-semibold text-cyanase-primary mb-6 flex items-center gap-2">
              <span>🏦</span> Regulatory & Compliance Built In
            </h2>
            <p className="text-lg mb-6">Cyanase handles:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-cyanase-secondary mt-1 flex-shrink-0" />
                <span>Fund custody with licensed fund managers</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-cyanase-secondary mt-1 flex-shrink-0" />
                <span>Anti-Money Laundering (AML) rules</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-cyanase-secondary mt-1 flex-shrink-0" />
                <span>Reporting for tax and compliance</span>
              </li>
            </ul>
            <p className="text-gray-700">
              This means platforms using the API don't need to register as investment firms — Cyanase handles the backend risk and regulation.
            </p>
          </motion.div>
          
          {/* Example Use Cases */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-cyanase-primary mb-8 flex items-center gap-2">
              <span>🔗</span> Example Use Cases
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(37, 40, 89, 0.3)"
                }}
              >
                <Card className="border border-gray-200 h-full">
                  <CardContent className="pt-6">
                    <div className="bg-cyanase-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="text-cyanase-primary" />
                    </div>
                    <h3 className="font-semibold mb-3 text-cyanase-primary">Mobile Wallet Integration</h3>
                    <p className="text-gray-600">
                      A mobile wallet wants to offer an "Invest" button → uses Cyanase API to let users invest directly.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(37, 40, 89, 0.3)"
                }}
              >
                <Card className="border border-gray-200 h-full">
                  <CardContent className="pt-6">
                    <div className="bg-cyanase-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="text-cyanase-secondary" />
                    </div>
                    <h3 className="font-semibold mb-3 text-cyanase-primary">E-commerce Savings</h3>
                    <p className="text-gray-600">
                      An e-commerce site wants to give users a "Save for Later" wallet → backed by Cyanase interest-earning products.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(37, 40, 89, 0.3)"
                }}
              >
                <Card className="border border-gray-200 h-full">
                  <CardContent className="pt-6">
                    <div className="bg-cyanase-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="text-cyanase-primary" />
                    </div>
                    <h3 className="font-semibold mb-3 text-cyanase-primary">Social Savings Groups</h3>
                    <p className="text-gray-600">
                      A social platform wants to let users form saving groups → connects to Cyanase group endpoints and payment rails.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* API Code Examples Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-cyanase-primary mb-4">API Code Examples</h2>
            <p className="text-gray-600 mb-8">
              Our API is designed to be developer-friendly. Here are some code snippets to help you get started.
            </p>
            
            <div className="mb-6 border-b">
              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveTab('authentication')}
                  className={`py-2 px-4 font-medium ${activeTab === 'authentication' ? 'border-b-2 border-cyanase-secondary text-cyanase-primary' : 'text-gray-500'}`}
                >
                  Authentication
                </button>
                <button 
                  onClick={() => setActiveTab('investments')}
                  className={`py-2 px-4 font-medium ${activeTab === 'investments' ? 'border-b-2 border-cyanase-secondary text-cyanase-primary' : 'text-gray-500'}`}
                >
                  Investments
                </button>
                <button 
                  onClick={() => setActiveTab('users')}
                  className={`py-2 px-4 font-medium ${activeTab === 'users' ? 'border-b-2 border-cyanase-secondary text-cyanase-primary' : 'text-gray-500'}`}
                >
                  Users
                </button>
              </div>
            </div>
            
            <Card className="overflow-hidden animate-fade-in border border-gray-200">
              <CardContent className="p-0">
                {/* ... keep existing code for the tab content but update syntax highlighting colors to match our theme ... */}
                <AnimatePresence mode="wait">
                  {activeTab === 'authentication' && (
                    <motion.div
                      key="auth"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <pre className="p-6 bg-gray-900 text-white overflow-x-auto rounded-lg">
                        <code>
                          {`// Authentication Example
const authenticate = async () => {
  const response = await fetch('https://api.cyanase.com/v1/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: 'YOUR_CLIENT_ID',
      client_secret: 'YOUR_CLIENT_SECRET',
    }),
  });

  const data = await response.json();
  // Store token securely
  localStorage.setItem('apiToken', data.access_token);
  return data.access_token;
}

// Usage
authenticate().then(token => {
  console.log('Authenticated with token:', token);
});`}
                        </code>
                      </pre>
                    </motion.div>
                  )}

                  {activeTab === 'investments' && (
                    <motion.div
                      key="investments"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <pre className="p-6 bg-gray-900 text-white overflow-x-auto rounded-lg">
                        <code>
                          {`// Creating an Investment
const createInvestment = async (token, investmentData) => {
  const response = await fetch('https://api.cyanase.com/v1/investments', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${token}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(investmentData),
  });

  return await response.json();
}

// Example usage
const investmentData = {
  amount: 1000,
  currency: 'USD',
  investment_type: 'fixed_income',
  tenure: 12, // months
  expected_return_rate: 8.5,
  user_id: 'user-123',
};

createInvestment(token, investmentData).then(result => {
  console.log('Investment created:', result);
});`}
                        </code>
                      </pre>
                    </motion.div>
                  )}

                  {activeTab === 'users' && (
                    <motion.div
                      key="users"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <pre className="p-6 bg-gray-900 text-white overflow-x-auto rounded-lg">
                        <code>
                          {`// Create a new user
const createUser = async (token, userData) => {
  const response = await fetch('https://api.cyanase.com/v1/users', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${token}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  return await response.json();
}

// Get user's investments
const getUserInvestments = async (token, userId) => {
  const response = await fetch(\`https://api.cyanase.com/v1/users/\${userId}/investments\`, {
    headers: {
      'Authorization': \`Bearer \${token}\`,
    },
  });

  return await response.json();
}

// Example usage
const userData = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '+256701234567',
  country: 'Uganda',
};

createUser(token, userData).then(user => {
  console.log('User created:', user);
  return getUserInvestments(token, user.id);
}).then(investments => {
  console.log('User investments:', investments);
});`}
                        </code>
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                This is a preview of our API. For full documentation, please refer to our 
                <a href="#" className="text-cyanase-primary hover:underline ml-1">Developer Portal</a>.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Api
