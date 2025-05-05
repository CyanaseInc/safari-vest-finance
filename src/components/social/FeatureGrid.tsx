
import React from 'react';
import { motion } from 'framer-motion';
import { PiggyBank, TrendingUp, Users2, BookOpen } from "lucide-react";

export const FeatureGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {/* Feature 4: Group Wallet & Earnings */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="bg-cyanase-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <PiggyBank className="text-cyanase-secondary" size={24} />
        </div>
        <h3 className="text-lg font-bold mb-3">Group Wallet & Earnings</h3>
        <p className="text-gray-600 mb-4">Deposited money is stored in a unit trust (a regulated investment fund), earning interest for the group.</p>
        <p className="text-gray-600">Admins can view group earnings, set targets (e.g., buy land, start a business), and track progress.</p>
      </motion.div>
      
      {/* Feature 5: Loans Inside Groups */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-cyanase-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <TrendingUp className="text-cyanase-secondary" size={24} />
        </div>
        <h3 className="text-lg font-bold mb-3">Loans Inside Groups</h3>
        <p className="text-gray-600 mb-4">Members can apply for loans from the group savings.</p>
        <p className="text-gray-600">Loan approvals are based on group rules, and repayments are shared transparently.</p>
      </motion.div>
      
      {/* Feature 6: Gamified Financial Inclusion */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-cyanase-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Users2 className="text-cyanase-secondary" size={24} />
        </div>
        <h3 className="text-lg font-bold mb-3">Gamified Financial Inclusion</h3>
        <p className="text-gray-600 mb-4">Groups that save more or stay consistent are rewarded with re-grants or bonuses (e.g., save UGX 2M, get 500k more).</p>
        <p className="text-gray-600">This motivates saving behavior, especially in low-literacy environments.</p>
      </motion.div>
      
      {/* Feature 7: Education & Support */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-cyanase-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <BookOpen className="text-cyanase-secondary" size={24} />
        </div>
        <h3 className="text-lg font-bold mb-3">Education & Support</h3>
        <p className="text-gray-600 mb-4">Through WhatsApp channels, influencers, and in-app tips, Cyanase educates users on financial literacy.</p>
        <p className="text-gray-600">Customer support is tailored for village-level understanding, ensuring no one is left out.</p>
      </motion.div>
    </div>
  );
};
