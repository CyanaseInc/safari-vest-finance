
import React from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { 
  Building, 
  Banknote,
  Briefcase, 
  Users,
  Hospital,
  GraduationCap,
  ChartBar
} from "lucide-react"

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
      <div className="pt-16 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-purple-50 to-white py-12 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner Sectors</h1>
              <p className="text-lg text-gray-600 mb-8">
                Cyanase partners with multiple sectors to enable investing and financial inclusion in Africa, especially in underserved and developing markets.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {sectors.map((sector) => (
                  <Badge key={sector.id} variant="outline" className="text-purple-700 bg-purple-50 border-purple-200 px-3 py-1">
                    {sector.emoji} {sector.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Interactive Tabs Section */}
          <Tabs defaultValue="visual" className="w-full mb-16">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="visual">Visual Overview</TabsTrigger>
              <TabsTrigger value="detail">Detailed View</TabsTrigger>
              <TabsTrigger value="table">Summary Table</TabsTrigger>
            </TabsList>

            {/* Visual Cards View */}
            <TabsContent value="visual" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector) => (
                  <Card key={sector.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="bg-purple-50 flex flex-row items-center gap-4">
                      {sector.icon}
                      <div>
                        <CardTitle>{sector.emoji} {sector.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600 mb-4">{sector.description}</p>
                      <div>
                        <h4 className="font-semibold text-purple-700">Use Case:</h4>
                        <p className="text-gray-700">{sector.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Detailed Accordion View */}
            <TabsContent value="detail">
              <div className="space-y-6">
                {sectors.map((sector) => (
                  <div key={sector.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="flex items-center gap-4 bg-purple-50 p-6">
                      {sector.icon}
                      <h3 className="text-xl font-bold">{sector.emoji} {sector.name}</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <p className="text-gray-700">{sector.description}</p>
                      
                      {sector.examples && (
                        <div>
                          <h4 className="text-purple-700 font-medium">Examples:</h4>
                          <p className="text-gray-600">{sector.examples}</p>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="text-purple-700 font-medium">Value Proposition:</h4>
                        <p className="text-gray-600">{sector.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Summary Table View */}
            <TabsContent value="table">
              <Card>
                <CardHeader>
                  <CardTitle>Sector Value Proposition Summary</CardTitle>
                  <CardDescription>
                    How Cyanase brings value to different sectors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Sector</TableHead>
                        <TableHead>Cyanase Value Proposition</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Fintechs</TableCell>
                        <TableCell>Embedded investing APIs</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">E-commerce</TableCell>
                        <TableCell>Reward-based investing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Social networks</TableCell>
                        <TableCell>Group savings and goals</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">SACCOs & Healthcare</TableCell>
                        <TableCell>Secure digital investment tools</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Education & NGOs</TableCell>
                        <TableCell>Financial literacy & inclusion</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Village groups</TableCell>
                        <TableCell>Digitized community investing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Fund managers</TableCell>
                        <TableCell>Access to new retail markets</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Call to Action */}
          <div className="bg-purple-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Become a Partner</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our ecosystem and leverage Cyanase's investment infrastructure to bring financial inclusion to your customers.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-purple-700 text-white hover:bg-purple-800 h-10 px-6 py-2"
            >
              Contact Our Partnership Team
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FundManagers
