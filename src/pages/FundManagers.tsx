
import React from "react"
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building, 
  Banknote,
  Briefcase, 
  Users,
  Hospital,
  GraduationCap,
  ChartBar,
  ChevronDown,
  Globe
} from "lucide-react"
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"
import { useIsMobile } from "@/hooks/use-mobile"

const FundManagers = () => {
  const isMobile = useIsMobile();
  
  const sectors = [
    {
      id: "fintech",
      icon: <Banknote className="h-10 w-10 text-cyanase-primary" />,
      emoji: "🏦",
      name: "Fintech Companies",
      description: "Companies that integrate Cyanase's investment APIs to allow their users to invest directly from mobile wallets or payment apps.",
      examples: "Flutterwave, MTN Mobile Money, Airtel Money",
      value: "They embed investment services into their platforms without handling the regulatory burden."
    },
    {
      id: "ecommerce",
      icon: <Briefcase className="h-10 w-10 text-purple-500" />,
      emoji: "🛒",
      name: "E-commerce Platforms",
      description: "Online marketplaces and digital stores partner to offer investment options as part of their checkout or reward systems.",
      examples: "",
      value: "A customer earns cashback or loyalty points in the form of investments (e.g., unit trusts)."
    },
    {
      id: "social",
      icon: <Users className="h-10 w-10 text-purple-500" />,
      emoji: "📱",
      name: "Social Networks and Communities",
      description: "Social platforms and community-based apps integrate Cyanase to enable group investing.",
      examples: "",
      value: "Group admins create saving goals, and members contribute funds that earn returns via Cyanase."
    },
    {
      id: "healthcare",
      icon: <Hospital className="h-10 w-10 text-purple-500" />,
      emoji: "🏥",
      name: "Healthcare Cooperatives and SACCOs",
      description: "Healthcare professionals and SACCOs often lack access to low-risk investment tools. Cyanase provides tailored digital solutions.",
      examples: "",
      value: "A SACCO can invest collective funds into a unit trust via the Cyanase API and earn interest transparently."
    },
    {
      id: "education",
      icon: <GraduationCap className="h-10 w-10 text-purple-500" />,
      emoji: "🎓",
      name: "Educational Institutions & NGOs",
      description: "Cyanase collaborates with financial literacy-focused NGOs, schools, or universities to promote investing habits among young people and women.",
      examples: "",
      value: "Cyanase offers demo accounts, subsidized investment access, and workshops for students and women's groups."
    },
    {
      id: "village",
      icon: <Building className="h-10 w-10 text-purple-500" />,
      emoji: "🏘️",
      name: "Village Saving Groups (VSLAs)",
      description: "Village and rural savings groups use Cyanase's tools to digitize savings, track group funds, and invest together.",
      examples: "",
      value: "Members deposit into a collective group wallet that earns interest, and loans can be issued from pooled funds."
    },
    {
      id: "fundmanagers",
      icon: <ChartBar className="h-10 w-10 text-purple-500" />,
      emoji: "📊",
      name: "Fund Managers & Investment Firms",
      description: "Professional asset managers use Cyanase's fund portal to onboard users, manage investment products, and track performance.",
      examples: "",
      value: "Cyanase gives them distribution access to low-income and unbanked populations."
    }
  ]

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Enhanced Hero Section with Advanced Globe Animation */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-cyanase-primary/5 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
            <div className={`${isMobile ? "order-2" : "order-1"} text-left`}>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold text-cyanase-primary mb-4"
              >
                Partner Sectors
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-gray-600 mb-6"
              >
                Cyanase partners with multiple sectors to enable investing and financial inclusion in Africa, 
                especially in underserved and developing markets.
              </motion.p>
              
              {/* Enhanced Badge Cloud for mobile view */}
              {isMobile && (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-2 mt-6"
                >
                  {sectors.slice(0, 4).map((sector) => (
                    <motion.div key={sector.id} variants={itemVariants}>
                      <motion.div
                        whileHover={{ y: -5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-cyanase-primary bg-cyanase-primary/5 border-cyanase-primary/20 px-3 py-1.5 text-sm mb-2"
                        >
                          {sector.emoji} {sector.name}
                        </Badge>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
            
            <div className={`${isMobile ? "order-1 mb-8" : "order-2"} relative h-[400px]`}>
              {/* Enhanced Interactive globe with connected sectors */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-full w-full flex items-center justify-center"
              >
                {/* Globe with glow effect */}
                <div className="relative">
                  <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="relative"
                  >
                    {/* Outer glow */}
                    <motion.div 
                      className="absolute -inset-8 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1], 
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      style={{ 
                        background: "radial-gradient(circle, rgba(80,102,252,0.3) 0%, rgba(37,40,89,0) 70%)",
                        filter: "blur(10px)" 
                      }}
                    />
                    
                    {/* Main globe with grid lines */}
                    <div className="relative">
                      <Globe className="h-40 w-40 text-cyanase-primary" strokeWidth={1} />
                      
                      {/* Grid lines for globe */}
                      <svg className="absolute inset-0" viewBox="0 0 100 100">
                        <motion.circle 
                          cx="50" cy="50" r="35" 
                          fill="none" 
                          stroke="rgba(80,102,252,0.2)" 
                          strokeWidth="0.5"
                          strokeDasharray="2,2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                        <motion.circle 
                          cx="50" cy="50" r="42" 
                          fill="none" 
                          stroke="rgba(80,102,252,0.15)" 
                          strokeWidth="0.5"
                          strokeDasharray="2,3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.7 }}
                        />
                        <motion.ellipse 
                          cx="50" cy="50" rx="35" ry="15" 
                          fill="none" 
                          stroke="rgba(80,102,252,0.2)" 
                          strokeWidth="0.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.9 }}
                        />
                        <motion.ellipse 
                          cx="50" cy="50" rx="15" ry="35" 
                          fill="none" 
                          stroke="rgba(80,102,252,0.2)" 
                          strokeWidth="0.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 1.1 }}
                        />
                      </svg>
                    </div>
                  </motion.div>
                  
                  {/* Inner pulse animation */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanase-primary/30"
                    initial={{ scale: 0.6, opacity: 0.7 }}
                    animate={{ 
                      scale: [0.6, 0.9, 0.6], 
                      opacity: [0.7, 0.2, 0.7] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    style={{ width: 70, height: 70, filter: 'blur(8px)' }}
                  />
                </div>
                
                {/* Enhanced orbiting sector icons */}
                {sectors.slice(0, 7).map((sector, index) => {
                  const angle = (index * (360 / 7)) * (Math.PI / 180);
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={sector.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: x,
                        y: y
                      }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.3 + (index * 0.15),
                        type: "spring",
                        stiffness: 100
                      }}
                      style={{ position: "absolute", left: "50%", top: "50%", marginLeft: "-25px", marginTop: "-25px" }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.25, boxShadow: "0 10px 25px rgba(80, 102, 252, 0.3)" }}
                        className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-white to-cyanase-primary/5 flex items-center justify-center shadow-md border border-cyanase-primary/10"
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="text-2xl"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [-5, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            delay: index * 0.5,
                            repeatType: "reverse"
                          }}
                        >
                          {sector.emoji}
                        </motion.div>
                      </motion.div>
                      
                      {/* Floating label on hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap px-2 py-1 bg-white rounded shadow-md text-xs text-cyanase-primary font-medium"
                      >
                        {sector.name}
                      </motion.div>
                    </motion.div>
                  );
                })}
                
                {/* Enhanced connection lines with animated dashes */}
                <svg className="absolute inset-0" style={{ zIndex: -1 }}>
                  {sectors.slice(0, 7).map((sector, index) => {
                    const angle = (index * (360 / 7)) * (Math.PI / 180);
                    const radius = 140;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.path
                        key={`line-${index}`}
                        d={`M0 0 L${x} ${y}`}
                        stroke="rgba(80, 102, 252, 0.2)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                        style={{ transform: "translate(50%, 50%)" }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 + (index * 0.1) }}
                      >
                        <animate 
                          attributeName="stroke-dashoffset" 
                          from="0" 
                          to="16" 
                          dur="3s" 
                          repeatCount="indefinite" 
                        />
                      </motion.path>
                    );
                  })}
                </svg>
                
                {/* Enhanced central pulse animation */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                  animate={{ 
                    scale: [1, 2, 1], 
                    opacity: [0.5, 0, 0.5] 
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ 
                    width: 60, 
                    height: 60, 
                    background: "radial-gradient(circle, rgba(80,102,252,0.4) 0%, rgba(80,102,252,0) 70%)" 
                  }}
                />
                
                {/* Floating particles around the globe */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full bg-cyanase-primary/60"
                    style={{
                      width: Math.random() * 4 + 2,
                      height: Math.random() * 4 + 2,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -40, 0],
                      x: [0, Math.random() * 30 - 15, 0],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      delay: Math.random() * 5
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Enhanced Floating Badge Cloud for desktop */}
          {!isMobile && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center gap-3 mt-12"
            >
              {sectors.map((sector) => (
                <motion.div key={sector.id} variants={itemVariants}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="transform-gpu"
                  >
                    <Badge 
                      variant="outline" 
                      className="text-cyanase-primary bg-cyanase-primary/5 border-cyanase-primary/20 px-3 py-1.5 text-sm mb-2 hover:bg-cyanase-primary/10 transition-colors cursor-default"
                    >
                      {sector.emoji} {sector.name}
                    </Badge>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Main Content - Visually Separated Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sector Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sectors.slice(0, 2).map((sector) => (
            <Card key={sector.id} className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 rounded-full bg-purple-100">
                  {sector.icon}
                </div>
                <CardTitle className="text-2xl">
                  {sector.emoji} {sector.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{sector.description}</p>
                {sector.examples && (
                  <div className="mb-2">
                    <span className="font-semibold text-purple-700">Examples:</span> {sector.examples}
                  </div>
                )}
                <div>
                  <span className="font-semibold text-purple-700">Use Case:</span> {sector.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expandable Sectors */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Partner Sectors</h2>
          
          <div className="space-y-4">
            {sectors.slice(2).map((sector) => (
              <Collapsible key={sector.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-white hover:bg-purple-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-purple-100">
                      {sector.icon}
                    </div>
                    <h3 className="text-xl font-medium">
                      {sector.emoji} {sector.name}
                    </h3>
                  </div>
                  <div className="text-purple-500">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t border-gray-200 bg-white">
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  {sector.examples && (
                    <div className="mb-2">
                      <span className="font-semibold text-purple-700">Examples:</span> {sector.examples}
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-purple-700">Use Case:</span> {sector.value}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Value Proposition Summary */}
        <div className="bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center">How Cyanase Brings Value</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Banknote className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="font-semibold">Fintechs</h3>
              </div>
              <p className="text-gray-600">Embedded investing APIs for seamless integration</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Briefcase className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="font-semibold">E-commerce</h3>
              </div>
              <p className="text-gray-600">Reward-based investing through purchases</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="font-semibold">Social networks</h3>
              </div>
              <p className="text-gray-600">Group savings and collaborative investment goals</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Hospital className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="font-semibold">SACCOs & Healthcare</h3>
              </div>
              <p className="text-gray-600">Secure digital investment tools for cooperatives</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <GraduationCap className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="font-semibold">Education & NGOs</h3>
              </div>
              <p className="text-gray-600">Financial literacy & inclusion programs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Building className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="font-semibold">Village groups</h3>
              </div>
              <p className="text-gray-600">Digitized community investing platforms</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Become a Partner</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join our ecosystem and leverage Cyanase's investment infrastructure to bring financial inclusion to your customers.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-purple-700 text-white hover:bg-purple-800 h-10 px-6 py-2 transition-colors"
          >
            Contact Our Partnership Team
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FundManagers;
