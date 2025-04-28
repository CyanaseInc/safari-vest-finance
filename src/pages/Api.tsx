
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Code, FileCode, ListChecks, Webhook } from "lucide-react"

const Api = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">API Integration</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Integrate Investment Services</h2>
              <p className="text-gray-600 mb-6">
                Easily integrate investment functionality into your platform with our comprehensive API.
                Handle complex financial operations without dealing with regulatory requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Code className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">RESTful API</h3>
                    <p className="text-gray-600">Simple and intuitive API endpoints</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileCode className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Documentation</h3>
                    <p className="text-gray-600">Detailed API documentation and examples</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Webhook className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Webhooks</h3>
                    <p className="text-gray-600">Real-time event notifications</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Start Integration</h3>
              <p className="text-gray-600 mb-6">Get your API keys and start building today.</p>
              <Button className="w-full bg-purple-700 hover:bg-purple-800">
                Access API <ListChecks className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Api
