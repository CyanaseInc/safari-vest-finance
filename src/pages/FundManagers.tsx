import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { BadgeDollarSign, ChartLine, ListChecks, ShieldCheck } from "lucide-react"
import { Footer } from "@/components/Footer"

const FundManagers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Fund Manager Platform</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partner With Us</h2>
              <p className="text-gray-600 mb-6">
                Join our platform to manage investments while we provide the technology infrastructure.
                Focus on what you do best - growing wealth for your clients.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Licensed Platform</h3>
                    <p className="text-gray-600">Fully compliant with regulatory requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ChartLine className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Advanced Analytics</h3>
                    <p className="text-gray-600">Comprehensive portfolio management tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ListChecks className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Automated Reporting</h3>
                    <p className="text-gray-600">Streamlined client reporting and communication</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Become a Partner</h3>
              <p className="text-gray-600 mb-6">Get access to our growing network of investors.</p>
              <Button className="w-full bg-purple-700 hover:bg-purple-800">
                Partner With Us <BadgeDollarSign className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default FundManagers
