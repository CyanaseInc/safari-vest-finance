
import React from "react";
import { motion } from "framer-motion";
import { Webhook, Lock, Database, Cpu } from "lucide-react";

export const ApiCodeBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative"
    >
      {/* API Code Block Animation */}
      <div className="bg-cyanase-primary rounded-xl p-6 shadow-2xl relative overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-xs text-white/70 ml-4">api-request.js</div>
        </div>
        
        {/* Terminal content */}
        <div className="font-mono text-sm">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-green-400"
          >
            // Initialize Cyanase API client
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-cyanase-secondary"
          >
            const cyanase = new CyanaseAPI{`({`}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="pl-6 text-white/90"
          >
            apiKey: &apos;<span className="text-cyanase-secondary">YOUR_API_KEY</span>&apos;,
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="pl-6 text-white/90"
          >
            environment: &apos;<span className="text-cyanase-secondary">production</span>&apos;
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="text-cyanase-secondary"
          >
            {`});`}
          </motion.div>
          
          <div className="mt-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="text-green-400"
            >
              // Create an investment for a user
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              className="text-white"
            >
              async function createInvestment() {`{`}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="pl-6 text-white/90"
            >
              try {`{`}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="pl-12 text-white/90"
            >
              const response = await cyanase.investments.<span className="text-cyanase-secondary">create</span>{`({`}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.6 }}
              className="pl-16 text-white/90"
            >
              userId: &apos;<span className="text-green-400">user_123456</span>&apos;,
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }}
              className="pl-16 text-white/90"
            >
              amount: <span className="text-cyanase-secondary">5000</span>,
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.0 }}
              className="pl-16 text-white/90"
            >
              currency: &apos;<span className="text-cyanase-secondary">UGX</span>&apos;,
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.2 }}
              className="pl-16 text-white/90"
            >
              type: &apos;<span className="text-cyanase-secondary">fixed_income</span>&apos;
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.4 }}
              className="pl-12 text-white/90"
            >
              {`});`}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.6 }}
              className="pl-12 text-white/90"
            >
              console.log(response);
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.8 }}
              className="pl-6 text-white/90"
            >
              {`} catch (error) {`}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4.0 }}
              className="pl-12 text-white/90"
            >
              console.error(error);
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4.2 }}
              className="pl-6 text-white/90"
            >
              {`}`}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4.4 }}
              className="text-white"
            >
              {`}`}
            </motion.div>
          </div>
        </div>

        {/* Animated cursor */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="h-5 w-2 bg-white inline-block absolute bottom-10 left-[216px]"
        />
        
        {/* Animated glowing effect */}
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            boxShadow: [
              'inset 0 0 30px rgba(247, 169, 45, 0)',
              'inset 0 0 30px rgba(247, 169, 45, 0.3)',
              'inset 0 0 30px rgba(247, 169, 45, 0)'
            ] 
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Floating icons */}
        <motion.div
          className="absolute -top-5 -right-5 bg-white rounded-full p-2 shadow-lg"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Webhook size={20} className="text-cyanase-primary" />
        </motion.div>
        
        <motion.div
          className="absolute -bottom-3 -left-3 bg-white rounded-full p-2 shadow-lg"
          animate={{ 
            y: [0, 8, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <Lock size={18} className="text-cyanase-primary" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 -left-4 bg-white rounded-full p-2 shadow-lg"
          animate={{ 
            x: [0, -5, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        >
          <Database size={16} className="text-cyanase-secondary" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 -right-4 bg-white rounded-full p-2 shadow-lg"
          animate={{ 
            x: [0, 5, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
        >
          <Cpu size={16} className="text-cyanase-secondary" />
        </motion.div>
      </div>
      
      {/* Response animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 5 }}
        className="bg-white border border-gray-200 rounded-md p-4 mt-4 shadow-lg"
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-500">Response</p>
          <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
            200 OK
          </div>
        </div>
        <pre className="text-xs bg-gray-50 p-2 rounded overflow-auto">
          {JSON.stringify({
            "status": "success",
            "data": {
              "id": "inv_2789634",
              "userId": "user_123456",
              "amount": 5000,
              "currency": "UGX",
              "type": "fixed_income",
              "status": "active",
              "createdAt": "2025-05-03T12:00:00Z",
              "expectedReturn": "13.5%"
            }
          }, null, 2)}
        </pre>
      </motion.div>
    </motion.div>
  );
};
