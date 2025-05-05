
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
} from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"
import { useIsMobile } from "@/hooks/use-mobile"
import { GlobeSectors } from "@/components/sectors/GlobeSectors"

const FundManagers = () => {
  const isMobile = useIsMobile();

  const sectors = [
    {
      id: "fintech",
      icon: <Banknote className="h-10 w-10 text-cyanase-primary" />,
      emoji: "🏦",
      name: "Fintechs",
      description: "Companies that integrate Cyanase's investment APIs to allow their users to invest directly from mobile wallets or payment apps.",
      examples: "Flutterwave, MTN Mobile Money, Airtel Money",
      value: "They embed investment services into their platforms without handling the regulatory burden."
    },
    {
      id: "ecommerce",
      icon: <Briefcase className="h-10 w-10 text-cyanase-secondary" />,
      emoji: "🛒",
      name: "E-commerce",
      description: "Online marketplaces and digital stores partner to offer investment options as part of their checkout or reward systems.",
      examples: "",
      value: "A customer earns cashback or loyalty points in the form of investments (e.g., unit trusts)."
    },
    {
      id: "social",
      icon: <Users className="h-10 w-10 text-cyanase-secondary" />,
      emoji: "📱",
      name: "Social Networks",
      description: "Social platforms and community-based apps integrate Cyanase to enable group investing.",
      examples: "",
      value: "Group admins create saving goals, and members contribute funds that earn returns via Cyanase."
    },
    {
      id: "healthcare",
      icon: <Hospital className="h-10 w-10 text-cyanase-secondary" />,
      emoji: "🏥",
      name: "SACCOs",
      description: "Healthcare professionals and SACCOs often lack access to low-risk investment tools. Cyanase provides tailored digital solutions.",
      examples: "",
      value: "A SACCO can invest collective funds into a unit trust via the Cyanase API and earn interest transparently."
    },
    {
      id: "education",
      icon: <GraduationCap className="h-10 w-10 text-cyanase-secondary" />,
      emoji: "🎓",
      name: "Educational Institutions",
      description: "Cyanase collaborates with financial literacy-focused NGOs, schools, or universities to promote investing habits among young people and women.",
      examples: "",
      value: "Cyanase offers demo accounts, subsidized investment access, and workshops for students and women's groups."
    },
    {
      id: "village",
      icon: <Building className="h-10 w-10 text-cyanase-secondary" />,
      emoji: "🏘️",
      name: "Village Saving Groups",
      description: "Village and rural savings groups use Cyanase's tools to digitize savings, track group funds, and invest together.",
      examples: "",
      value: "Members deposit into a collective group wallet that earns interest, and loans can be issued from pooled funds."
    },
    {
      id: "fundmanagers",
      icon: <ChartBar className="h-10 w-10 text-cyanase-secondary" />,
      emoji: "📊",
      name: "Fund Managers",
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
      <div className="pt-24 pb-12 bg-gradient-to-b from-cyanase-primary/5 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center gap-8">
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
                className="text-lg text-gray-600"
              >
                We collaborate with multiple sectors globally to deliver innovative financial solutions and expand investment opportunities across markets.
              </motion.p>

              {/* Enhanced floating badge cloud for mobile */}
              {isMobile && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-2 mt-6"
                >
                  {sectors.slice(0, 4).map((sector) => (
                    <motion.div key={sector.id} variants={itemVariants}>
                      <Badge
                        variant="outline"
                        className="text-cyanase-primary bg-cyanase-primary/5 border-cyanase-primary/20 px-3 py-1.5 text-sm mb-2 relative overflow-hidden group"
                      >
                        {/* Animation on hover */}
                        <motion.span
                          className="absolute inset-0 bg-cyanase-primary/0 group-hover:bg-cyanase-primary/10 transition-all duration-300"
                          whileHover={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        {sector.name}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            <div className={`${isMobile ? "order-1 mb-8" : "order-2"} relative h-[350px]`}>
              {/* New improved globe animation */}
              <GlobeSectors sectors={sectors} />
            </div>
          </div>

          {/* Enhanced floating badge cloud for desktop */}
          {!isMobile && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center gap-3 mt-12"
            >
              {sectors.map((sector) => (
                <motion.div key={sector.id} variants={itemVariants}>
                  <Badge
                    variant="outline"
                    className="text-cyanase-primary bg-cyanase-primary/5 border-cyanase-primary/20 px-3 py-1.5 text-sm mb-2 hover:bg-cyanase-primary/10 transition-colors cursor-default relative overflow-hidden group"
                  >
                    {/* Digital shimmer effect */}
                    <motion.span
                      className="absolute inset-0 bg-white/20 group-hover:opacity-100 opacity-0"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                    {sector.emoji} {sector.name}
                  </Badge>
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
            <Card key={sector.id} className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-cyanase-secondary/10 to-white">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 rounded-full bg-cyanase-secondary/10">
                  {sector.icon}
                </div>
                <CardTitle className="text-2xl">
                  {sector.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{sector.description}</p>
                {sector.examples && (
                  <div className="mb-2">
                    <span className="font-semibold text-cyanase-secondary">Examples:</span> {sector.examples}
                  </div>
                )}
                <div>
                  <span className="font-semibold text-cyanase-secondary">Use Case:</span> {sector.value}
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
                <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-white hover:bg-cyanase-secondary/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-cyanase-secondary/10">
                      {sector.icon}
                    </div>
                    <h3 className="text-xl font-medium">
                      {sector.emoji} {sector.name}
                    </h3>
                  </div>
                  <div className="text-cyanase-secondary">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t border-gray-200 bg-white">
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  {sector.examples && (
                    <div className="mb-2">
                      <span className="font-semibold text-cyanase-secondary">Examples:</span> {sector.examples}
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-cyanase-secondary">Use Case:</span> {sector.value}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Value Proposition Summary */}
        <div className="bg-cyanase-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-cyanase-primary mb-6 text-center">How Cyanase Brings Value</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Banknote className="h-6 w-6 text-cyanase-secondary mr-2" />
                <h3 className="font-semibold">Fintechs</h3>
              </div>
              <p className="text-gray-600">Embedded investing APIs for seamless integration</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Briefcase className="h-6 w-6 text-cyanase-secondary mr-2" />
                <h3 className="font-semibold">E-commerce</h3>
              </div>
              <p className="text-gray-600">Reward-based investing through purchases</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 text-cyanase-secondary mr-2" />
                <h3 className="font-semibold">Social networks</h3>
              </div>
              <p className="text-gray-600">Group savings and collaborative investment goals</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Hospital className="h-6 w-6 text-cyanase-secondary mr-2" />
                <h3 className="font-semibold">SACCOs & Healthcare</h3>
              </div>
              <p className="text-gray-600">Secure digital investment tools for cooperatives</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <GraduationCap className="h-6 w-6 text-cyanase-secondary mr-2" />
                <h3 className="font-semibold">Education & NGOs</h3>
              </div>
              <p className="text-gray-600">Financial literacy & inclusion programs</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Building className="h-6 w-6 text-cyanase-secondary mr-2" />
                <h3 className="font-semibold">Village groups</h3>
              </div>
              <p className="text-gray-600">Digitized community investing platforms</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-cyanase-primary mb-4">Become a Partner</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join our ecosystem and leverage Cyanase's investment infrastructure to bring financial inclusion to your customers.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-cyanase-secondary text-white hover:bg-cyanase-secondary-dark h-10 px-6 py-2 transition-colors"
          >
            Contact Our Partnership Team
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default FundManagers
