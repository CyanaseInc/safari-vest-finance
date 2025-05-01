
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { LineChart, Target, TrendingUp, Trophy, Clock, RefreshCw, CheckCircle, BarChart, Users } from "lucide-react"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const GoalBasedInvesting = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Goal-Based Investing</h1>
            <p className="text-lg text-gray-600 mb-8">
              Goal-based investing on Cyanase lets individuals or groups set specific financial goals — like buying land, 
              paying school fees, or starting a business — and automatically invest toward those goals over time.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="bg-purple-100 p-2 rounded-lg mr-3">
                  <Target className="text-purple-600 h-5 w-5" />
                </span>
                How It Works
              </h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Target className="text-purple-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">1. Create a Goal</h3>
                    <p className="text-gray-600">
                      A user (or group admin) creates a goal in the Cyanase app with inputs including:
                    </p>
                    <ul className="list-disc ml-5 mt-2 text-gray-600">
                      <li>Goal name (e.g., "Land Fund")</li>
                      <li>Target amount (e.g., UGX 5,000,000)</li>
                      <li>Deadline (e.g., December 2025)</li>
                      <li>Contribution frequency (e.g., weekly, monthly)</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-purple-100 p-2 rounded-full">
                    <RefreshCw className="text-purple-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">2. Automated Contributions</h3>
                    <p className="text-gray-600">
                      Users can set up recurring deposits via MTN Mobile Money, Airtel Money, or bank.
                      Each deposit is automatically allocated toward their goal and invested in interest-earning products (e.g., unit trusts).
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-purple-100 p-2 rounded-full">
                    <BarChart className="text-purple-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">3. Earnings & Progress</h3>
                    <p className="text-gray-600">
                      Cyanase tracks amount contributed, interest earned, and total progress (%) toward the goal.
                      Users receive real-time updates through the app or partner platforms via the Cyanase API.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="bg-purple-100 p-2 rounded-full">
                    <TrendingUp className="text-purple-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">4. Flexible Adjustments</h3>
                    <p className="text-gray-600">
                      Users can pause, increase, or reduce contributions at any time.
                      Goals can be edited or deleted, and funds can be reallocated to new goals.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="bg-purple-100 p-2 rounded-full">
                    <CheckCircle className="text-purple-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">5. Withdrawal Upon Completion</h3>
                    <p className="text-gray-600">
                      Once the goal is fully funded or the deadline is reached, users can withdraw to mobile money or bank,
                      or leave funds invested for future use.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div>
              <div className="bg-purple-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Group Goals (Social Investing)
                </h3>
                <p className="text-gray-600 mb-4">For groups (via the WhatLike app):</p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 h-4 w-4 flex-shrink-0" />
                    <p>Admins can create shared goals (e.g., "Group Land Purchase").</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 h-4 w-4 flex-shrink-0" />
                    <p>All group members contribute.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 h-4 w-4 flex-shrink-0" />
                    <p>Cyanase handles tracking, investing, and progress reporting.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 h-4 w-4 flex-shrink-0" />
                    <p>Admins can lock withdrawals until the goal is reached.</p>
                  </li>
                </ul>

                <div className="mt-6">
                  <h4 className="font-medium text-purple-900 mb-2 flex items-center">
                    <Trophy className="mr-2 h-4 w-4" />
                    Benefits
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1 h-4 w-4 flex-shrink-0" />
                      <p>Encourages discipline and financial planning</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1 h-4 w-4 flex-shrink-0" />
                      <p>Boosts returns through automated investing</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1 h-4 w-4 flex-shrink-0" />
                      <p>Simple, flexible, and accessible even for users with zero financial literacy</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Start Your Financial Journey</h3>
                    <p className="text-gray-600 mt-1">
                      Cyanase combines social savings, mobile money, and regulated investing to make goal-based 
                      financial planning available to anyone — even in remote villages.
                    </p>
                  </div>
                  <Button className="w-full bg-purple-700 hover:bg-purple-800 flex items-center justify-center">
                    Create Your First Goal <Trophy className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default GoalBasedInvesting
