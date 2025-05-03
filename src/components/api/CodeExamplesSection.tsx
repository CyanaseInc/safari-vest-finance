
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type TabType = 'authentication' | 'investments' | 'users';

interface CodeExampleTabProps {
  activeTab: TabType;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
}

const CodeExampleTabs: React.FC<CodeExampleTabProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-6 border-b">
      <div className="flex space-x-4">
        <button 
          onClick={() => setActiveTab('authentication')}
          className={`py-2 px-4 font-medium ${activeTab === 'authentication' ? 'border-b-2 border-cyanase-secondary text-cyanase-primary' : 'text-gray-500'}`}
        >
          Authentication
        </button>
        <button 
          onClick={() => setActiveTab('investments')}
          className={`py-2 px-4 font-medium ${activeTab === 'investments' ? 'border-b-2 border-cyanase-secondary text-cyanase-primary' : 'text-gray-500'}`}
        >
          Investments
        </button>
        <button 
          onClick={() => setActiveTab('users')}
          className={`py-2 px-4 font-medium ${activeTab === 'users' ? 'border-b-2 border-cyanase-secondary text-cyanase-primary' : 'text-gray-500'}`}
        >
          Users
        </button>
      </div>
    </div>
  );
};

interface CodeContentProps {
  activeTab: TabType;
}

const CodeContent: React.FC<CodeContentProps> = ({ activeTab }) => {
  const codeExamples = {
    authentication: `// Authentication Example
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
});`,

    investments: `// Creating an Investment
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
});`,

    users: `// Create a new user
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
});`
  };

  return (
    <Card className="overflow-hidden animate-fade-in border border-gray-200">
      <CardContent className="p-0">
        <AnimatePresence mode="wait">
          {activeTab === 'authentication' && (
            <motion.div
              key="auth"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <pre className="p-6 bg-gray-900 text-white overflow-x-auto rounded-lg">
                <code>
                  {codeExamples.authentication}
                </code>
              </pre>
            </motion.div>
          )}

          {activeTab === 'investments' && (
            <motion.div
              key="investments"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <pre className="p-6 bg-gray-900 text-white overflow-x-auto rounded-lg">
                <code>
                  {codeExamples.investments}
                </code>
              </pre>
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div
              key="users"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <pre className="p-6 bg-gray-900 text-white overflow-x-auto rounded-lg">
                <code>
                  {codeExamples.users}
                </code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export const CodeExamplesSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('authentication');

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-cyanase-primary mb-4">API Code Examples</h2>
      <p className="text-gray-600 mb-8">
        Our API is designed to be developer-friendly. Here are some code snippets to help you get started.
      </p>
      
      <CodeExampleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <CodeContent activeTab={activeTab} />
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          This is a preview of our API. For full documentation, please refer to our 
          <a href="#" className="text-cyanase-primary hover:underline ml-1">Developer Portal</a>.
        </p>
      </div>
    </div>
  );
};
