
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { LineChart, Target, TrendingUp, Trophy } from "lucide-react"

const GoalBasedInvesting = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Goal-Based Investing</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Achieve Your Financial Goals</h2>
              <p className="text-gray-600 mb-6">
                Set personal or group financial goals and track your progress. Our platform helps you
                stay focused and motivated to reach your investment targets.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Goal Setting</h3>
                    <p className="text-gray-600">Define clear financial objectives</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LineChart className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Progress Tracking</h3>
                    <p className="text-gray-600">Monitor your investment progress</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Performance Analysis</h3>
                    <p className="text-gray-600">Track your portfolio performance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Set Your Goals</h3>
              <p className="text-gray-600 mb-6">Start your goal-based investment journey today.</p>
              <Button className="w-full bg-purple-700 hover:bg-purple-800">
                Create Goals <Trophy className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoalBasedInvesting
