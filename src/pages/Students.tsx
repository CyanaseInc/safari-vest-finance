import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/Navigation"
import { BookOpen, GraduationCap, PiggyBank, Target } from "lucide-react"
import { Footer } from "@/components/Footer"

const Students = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Student Investment Program</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Start Your Investment Journey</h2>
              <p className="text-gray-600 mb-6">
                Learn financial literacy while building your wealth through our tailored investment options for students.
                Start with as little as $1 and grow your portfolio over time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <GraduationCap className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Educational Resources</h3>
                    <p className="text-gray-600">Access free financial education materials and workshops</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PiggyBank className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Low Minimum Investment</h3>
                    <p className="text-gray-600">Start investing with as little as $1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Goal-Based Saving</h3>
                    <p className="text-gray-600">Set and track your financial goals</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Ready to Start?</h3>
              <p className="text-gray-600 mb-6">Join thousands of students already investing in their future.</p>
              <Button className="w-full bg-purple-700 hover:bg-purple-800">
                Open Student Account <BookOpen className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Students
