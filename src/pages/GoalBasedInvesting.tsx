
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  TrendingUp, 
  Trophy, 
  RefreshCw, 
  CheckCircle, 
  BarChart, 
  Users,
  ArrowRight
} from "lucide-react"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress" 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const GoalBasedInvesting = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Goal-Based Investing</h1>
              <p className="text-lg text-gray-600 mb-8">
                Set your financial targets and achieve them with our automated investment tools.
                Perfect for individuals or groups saving for land, education, or business ventures.
              </p>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                Start Investing Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Land Purchase Fund</h3>
                    <p className="text-gray-500 text-sm">Target: 15,000,000 UGX</p>
                  </div>
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                    75% Complete
                  </span>
                </div>
                
                <Progress value={75} className="h-2 mb-6 bg-gray-100">
                  <span className="bg-purple-600 h-full rounded-full" />
                </Progress>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Contributed</p>
                    <p className="font-medium">11,250,000 UGX</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Earnings</p>
                    <p className="font-medium text-green-600">+675,000 UGX</p>
                  </div>
                </div>
                
                <div className="text-center p-3 rounded-lg bg-purple-50 text-purple-700 text-sm">
                  <span className="font-medium">Target Date: December 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What is Goal-Based Investing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              Investment Simplified
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Goal-Based Investing on Cyanase
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cyanase lets individuals or groups set specific financial goals — like buying land, 
              paying school fees, or starting a business — and automatically invest toward those goals over time.
            </p>
          </motion.div>
          
          {/* How It Works Tabs */}
          <Tabs defaultValue="individual" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="individual">Individual Goals</TabsTrigger>
              <TabsTrigger value="group">Group Goals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Target,
                    title: "Create Your Goal",
                    description: "Define your target amount, deadline, and contribution frequency.",
                  },
                  {
                    icon: RefreshCw,
                    title: "Automated Savings",
                    description: "Set up recurring deposits via mobile money or bank transfers.",
                  },
                  {
                    icon: Trophy,
                    title: "Track & Achieve",
                    description: "Monitor your progress and watch your investments grow over time.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow transition-shadow"
                  >
                    <div className="bg-purple-100 h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="text-purple-700 h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="group">
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Users className="mr-2 h-5 w-5 text-purple-700" />
                        Social Investing
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Create shared goals with your group and track contributions together.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 mt-1 h-4 w-4 flex-shrink-0" />
                          <span>Admin controls for group goals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 mt-1 h-4 w-4 flex-shrink-0" />
                          <span>Equal or custom contribution plans</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 mt-1 h-4 w-4 flex-shrink-0" />
                          <span>Transparent tracking for all members</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-purple-900 mb-4">How Group Goals Work</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="bg-purple-100 p-2 rounded-full mr-3">
                            <Users className="text-purple-600 h-4 w-4" />
                          </div>
                          <h4 className="font-medium">Group Creation</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Admins create shared goals through WhatLike app integration with Cyanase.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="bg-purple-100 p-2 rounded-full mr-3">
                            <RefreshCw className="text-purple-600 h-4 w-4" />
                          </div>
                          <h4 className="font-medium">Collective Saving</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          All members contribute regularly toward the shared goal.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="bg-purple-100 p-2 rounded-full mr-3">
                            <BarChart className="text-purple-600 h-4 w-4" />
                          </div>
                          <h4 className="font-medium">Progress Tracking</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Cyanase handles tracking, investing, and progress reporting.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="bg-purple-100 p-2 rounded-full mr-3">
                            <CheckCircle className="text-purple-600 h-4 w-4" />
                          </div>
                          <h4 className="font-medium">Goal Achievement</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Admins can lock withdrawals until the goal is reached or deadline arrives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* How It Works Detail Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">How Goal-Based Investing Works</h2>
            <p className="text-lg text-gray-600 mt-3">A detailed walkthrough of the process</p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <Target className="text-purple-600 h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium">1. Create a Goal</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 mb-3">
                    A user (or group admin) creates a goal in the Cyanase app with inputs including:
                  </p>
                  <ul className="list-disc ml-5 space-y-1 text-gray-600">
                    <li>Goal name (e.g., "Land Fund")</li>
                    <li>Target amount (e.g., UGX 5,000,000)</li>
                    <li>Deadline (e.g., December 2025)</li>
                    <li>Contribution frequency (e.g., weekly, monthly)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <RefreshCw className="text-purple-600 h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium">2. Automated Contributions</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Users can set up recurring deposits via MTN Mobile Money, Airtel Money, or bank.
                    Each deposit is automatically allocated toward their goal and invested in interest-earning 
                    products (e.g., unit trusts).
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <BarChart className="text-purple-600 h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium">3. Earnings & Progress</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Cyanase tracks amount contributed, interest earned, and total progress (%) toward the goal.
                    Users receive real-time updates through the app or partner platforms via the Cyanase API.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <TrendingUp className="text-purple-600 h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium">4. Flexible Adjustments</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Users can pause, increase, or reduce contributions at any time.
                    Goals can be edited or deleted, and funds can be reallocated to new goals.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <CheckCircle className="text-purple-600 h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium">5. Withdrawal Upon Completion</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Once the goal is fully funded or the deadline is reached, users can withdraw to mobile money or bank,
                    or leave funds invested for future use.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Benefits of Goal-Based Investing</h2>
            <p className="text-lg text-gray-600 mt-2">Why thousands of users are achieving their goals with Cyanase</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Financial Discipline",
                description: "Encourages consistent savings habits and long-term financial planning."
              },
              {
                icon: TrendingUp,
                title: "Increased Returns",
                description: "Boosts your savings through automated investing in interest-earning products."
              },
              {
                icon: Users,
                title: "Accessible to Everyone",
                description: "Simple, flexible, and accessible even for users with zero financial literacy."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-6 rounded-xl"
              >
                <div className="bg-white h-16 w-16 rounded-full shadow-sm flex items-center justify-center mb-6">
                  <benefit.icon className="text-purple-700 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">Start Your Financial Journey Today</h2>
              <p className="text-purple-100 text-lg">
                Cyanase combines social savings, mobile money, and regulated investing to make goal-based 
                financial planning available to anyone — even in remote villages.
              </p>
            </div>
            <div>
              <Button className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg h-auto">
                Create Your First Goal <Trophy className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default GoalBasedInvesting
