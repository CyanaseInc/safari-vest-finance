import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { MessageCircle, Share2, Users2, Wallet } from "lucide-react"
import { Footer } from "@/components/Footer"

const SocialApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Social Savings App</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community-Driven Savings</h2>
              <p className="text-gray-600 mb-6">
                Connect with your savings group through our mobile app. Set goals, track progress,
                and communicate with group members all in one place.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users2 className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Group Management</h3>
                    <p className="text-gray-600">Create and manage savings groups easily</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Group Chat</h3>
                    <p className="text-gray-600">Built-in messaging for group communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Wallet className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Payment Tracking</h3>
                    <p className="text-gray-600">Track contributions and distributions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Download The App</h3>
              <p className="text-gray-600 mb-6">Join your savings group on mobile.</p>
              <Button className="w-full bg-purple-700 hover:bg-purple-800">
                Get Started <Share2 className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default SocialApp
