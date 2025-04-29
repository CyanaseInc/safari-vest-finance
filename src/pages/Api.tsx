
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Code, FileCode, ListChecks, Webhook } from "lucide-react"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const Api = () => {
  const [activeTab, setActiveTab] = useState<'authentication' | 'investments' | 'users'>('authentication');
  
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
                  <Code className="text-[#252859] mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">RESTful API</h3>
                    <p className="text-gray-600">Simple and intuitive API endpoints</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileCode className="text-[#252859] mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Documentation</h3>
                    <p className="text-gray-600">Detailed API documentation and examples</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Webhook className="text-[#252859] mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Webhooks</h3>
                    <p className="text-gray-600">Real-time event notifications</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#252859]/5 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-[#252859] mb-4">Start Integration</h3>
              <p className="text-gray-600 mb-6">Get your API keys and start building today.</p>
              <Button className="w-full bg-[#252859] hover:bg-[#252859]/80">
                Access API <ListChecks className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* API Code Examples Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">API Code Examples</h2>
            <p className="text-gray-600 mb-8">
              Our API is designed to be developer-friendly. Here are some code snippets to help you get started.
            </p>
            
            <div className="mb-6 border-b">
              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveTab('authentication')}
                  className={`py-2 px-4 font-medium ${activeTab === 'authentication' ? 'border-b-2 border-[#252859] text-[#252859]' : 'text-gray-500'}`}
                >
                  Authentication
                </button>
                <button 
                  onClick={() => setActiveTab('investments')}
                  className={`py-2 px-4 font-medium ${activeTab === 'investments' ? 'border-b-2 border-[#252859] text-[#252859]' : 'text-gray-500'}`}
                >
                  Investments
                </button>
                <button 
                  onClick={() => setActiveTab('users')}
                  className={`py-2 px-4 font-medium ${activeTab === 'users' ? 'border-b-2 border-[#252859] text-[#252859]' : 'text-gray-500'}`}
                >
                  Users
                </button>
              </div>
            </div>
            
            <Card className="overflow-hidden animate-fade-in">
              <CardContent className="p-0">
                {activeTab === 'authentication' && (
                  <pre className="p-6 bg-gray-900 text-white overflow-x-auto rounded-lg">
                    <code>
{`// Authentication Example
const authenticate = async () => {
  const response = await fetch('https://api.cyanase.com/v1/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: 'YOUR_CLIENT_ID',
      client_secret: 'YOUR_CLIENT_SECRET',
    }),
  });

  const data = await response.json();
  // Store token securely
  localStorage.setItem('apiToken', data.access_token);
  return data.access_token;
}

// Usage
authenticate().then(token => {
  console.log('Authenticated with token:', token);
});`}
                    </code>
                  </pre>
                )}

                {activeTab === 'investments' && (
                  <pre className="p-6 bg-gray-900 text-white overflow-x-auto rounded-lg">
                    <code>
{`// Creating an Investment
const createInvestment = async (token, investmentData) => {
  const response = await fetch('https://api.cyanase.com/v1/investments', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${token}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(investmentData),
  });

  return await response.json();
}

// Example usage
const investmentData = {
  amount: 1000,
  currency: 'USD',
  investment_type: 'fixed_income',
  tenure: 12, // months
  expected_return_rate: 8.5,
  user_id: 'user-123',
};

createInvestment(token, investmentData).then(result => {
  console.log('Investment created:', result);
});`}
                    </code>
                  </pre>
                )}

                {activeTab === 'users' && (
                  <pre className="p-6 bg-gray-900 text-white overflow-x-auto rounded-lg">
                    <code>
{`// Create a new user
const createUser = async (token, userData) => {
  const response = await fetch('https://api.cyanase.com/v1/users', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${token}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  return await response.json();
}

// Get user's investments
const getUserInvestments = async (token, userId) => {
  const response = await fetch(\`https://api.cyanase.com/v1/users/\${userId}/investments\`, {
    headers: {
      'Authorization': \`Bearer \${token}\`,
    },
  });

  return await response.json();
}

// Example usage
const userData = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '+256701234567',
  country: 'Uganda',
};

createUser(token, userData).then(user => {
  console.log('User created:', user);
  return getUserInvestments(token, user.id);
}).then(investments => {
  console.log('User investments:', investments);
});`}
                    </code>
                  </pre>
                )}
              </CardContent>
            </Card>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                This is a preview of our API. For full documentation, please refer to our 
                <a href="#" className="text-[#252859] hover:underline ml-1">Developer Portal</a>.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Api
