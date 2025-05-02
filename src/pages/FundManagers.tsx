
import React from "react"
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
  ChevronDown
} from "lucide-react"
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"

const FundManagers = () => {
  const sectors = [
    {
      id: "fintech",
      icon: <Banknote className="h-10 w-10 text-purple-500" />,
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Gradient Background */}
      <div className="pt-24 pb-12 bg-gradient-to-b from-purple-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Partner Sectors
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cyanase partners with multiple sectors to enable investing and financial inclusion in Africa, 
              especially in underserved and developing markets.
            </p>
          </div>

          {/* Floating Badge Cloud */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {sectors.map((sector) => (
              <Badge 
                key={sector.id} 
                variant="outline" 
                className="text-purple-700 bg-purple-50 border-purple-200 px-3 py-1.5 text-sm mb-2 hover:bg-purple-100 transition-colors"
              >
                {sector.emoji} {sector.name}
              </Badge>
            ))}
          </div>
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
  )
}

export default FundManagers
