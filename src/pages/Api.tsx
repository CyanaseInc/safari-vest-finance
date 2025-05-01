
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Code, FileCode, ListChecks, Webhook, Check, ShieldCheck, BarChart3 } from "lucide-react"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cyanase API</h1>
          <h2 className="text-2xl text-gray-700 mb-8">Powering Embedded Investing Across Africa</h2>
          
          <div className="mb-12">
            <p className="text-lg text-gray-600">
              The Cyanase API allows any fintech, e-commerce platform, or social network to embed investing 
              and savings features into their own app or platform — without building financial infrastructure 
              from scratch or dealing with regulatory complexity.
            </p>
          </div>

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
          
          {/* How It Works Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
              <span className="text-[#252859]">⚙️</span> How It Works
            </h2>
            
            <div className="space-y-10">
              {/* Authentication */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-[#252859] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3">1</span>
                  Authentication
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>Partners get secure API keys to authenticate and access services.</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>OAuth2 or token-based authentication ensures secure access to customer and transaction endpoints.</p>
                  </li>
                </ul>
              </div>
              
              {/* Account Creation & KYC */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-[#252859] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3">2</span>
                  Account Creation & KYC
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>Create investment accounts for users via a single API call.</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>Built-in eKYC support: the API supports uploading documents or using mobile money KYC for identity verification.</p>
                  </li>
                </ul>
              </div>
              
              {/* Deposits & Withdrawals */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-[#252859] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3">3</span>
                  Deposits & Withdrawals
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>API endpoints allow users to deposit into their investment wallet using mobile money (MTN, Airtel, etc.).</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>Withdrawals can be initiated through the API, routed back to mobile money accounts.</p>
                  </li>
                </ul>
              </div>
              
              {/* Investment Products */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-[#252859] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3">4</span>
                  Investment Products
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>Access a range of unit trust products, fixed income products, or savings goals via API.</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>Developers can offer these products natively in their own apps by pulling product metadata and pricing.</p>
                  </li>
                </ul>
              </div>
              
              {/* Transactions & Returns */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-[#252859] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3">5</span>
                  Transactions & Returns
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>Track transactions (deposits, returns, redemptions) for each user account.</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>Pull real-time balances, historical returns, and interest earned per product.</p>
                  </li>
                </ul>
              </div>
              
              {/* Group Investing Support */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-[#252859] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3">6</span>
                  Group Investing Support
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>The API supports creation of groups, contribution tracking, goal management, and loan workflows.</p>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>Ideal for social saving platforms or fintechs with SACCO-like features.</p>
                  </li>
                </ul>
              </div>
              
              {/* Webhooks */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-[#252859] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3">7</span>
                  Webhooks
                </h3>
                <ul className="space-y-3 pl-10">
                  <li className="flex gap-2">
                    <Check className="text-[#252859] flex-shrink-0 mt-1" size={18} />
                    <p>Integrate webhooks to get notified in real time when:</p>
                    <ul className="space-y-2 mt-2">
                      <li>- A deposit is successful</li>
                      <li>- A withdrawal is initiated</li>
                      <li>- KYC is approved or declined</li>
                      <li>- A group hits a milestone</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Regulatory & Compliance Section */}
          <div className="mt-16 bg-[#252859]/5 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <span>🏦</span> Regulatory & Compliance Built In
            </h2>
            <p className="text-lg mb-6">Cyanase handles:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-[#252859] mt-1 flex-shrink-0" />
                <span>Fund custody with licensed fund managers</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-[#252859] mt-1 flex-shrink-0" />
                <span>Anti-Money Laundering (AML) rules</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-[#252859] mt-1 flex-shrink-0" />
                <span>Reporting for tax and compliance</span>
              </li>
            </ul>
            <p className="text-gray-700">
              This means platforms using the API don't need to register as investment firms — Cyanase handles the backend risk and regulation.
            </p>
          </div>
          
          {/* Example Use Cases */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
              <span>🔗</span> Example Use Cases
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <div className="bg-[#252859]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="text-[#252859]" />
                  </div>
                  <h3 className="font-semibold mb-3">Mobile Wallet Integration</h3>
                  <p className="text-gray-600">
                    A mobile wallet wants to offer an "Invest" button → uses Cyanase API to let users invest directly.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <div className="bg-[#252859]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="text-[#252859]" />
                  </div>
                  <h3 className="font-semibold mb-3">E-commerce Savings</h3>
                  <p className="text-gray-600">
                    An e-commerce site wants to give users a "Save for Later" wallet → backed by Cyanase interest-earning products.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <div className="bg-[#252859]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="text-[#252859]" />
                  </div>
                  <h3 className="font-semibold mb-3">Social Savings Groups</h3>
                  <p className="text-gray-600">
                    A social platform wants to let users form saving groups → connects to Cyanase group endpoints and payment rails.
                  </p>
                </CardContent>
              </Card>
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
