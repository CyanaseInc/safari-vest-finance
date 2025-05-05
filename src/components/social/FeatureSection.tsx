
import React from 'react';
import { motion } from 'framer-motion';
import { Users2, MessageCircle, Wallet, Check } from "lucide-react";

export const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Social Savings App Works</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Bringing the traditional village savings model to the digital era, with added security,
          transparency, and growth opportunities.
        </p>
      </div>
      
      {/* Feature 1: Group-Centric Design */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-cyanase-secondary/10 p-4 rounded-lg flex items-center gap-4 mb-6 w-max">
            <div className="bg-cyanase-secondary text-white p-2 rounded-lg">
              <Users2 size={24} />
            </div>
            <h3 className="text-xl font-semibold text-cyanase-secondary-dark">Group-Centric Design</h3>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Like WhatsApp for Finance</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Check className="text-green-500 mt-1 flex-shrink-0" />
              <p>Users create savings or investment groups (e.g., church groups, SACCOs, village groups)</p>
            </div>
            <div className="flex gap-3">
              <Check className="text-green-500 mt-1 flex-shrink-0" />
              <p>Each group has an admin who manages members, contributions, and financial goals</p>
            </div>
            <div className="flex gap-3">
              <Check className="text-green-500 mt-1 flex-shrink-0" />
              <p>Members can join a group via a shared link or invitation</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/group-management.jpg" 
            alt="Group Management" 
            className="rounded-lg shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/600x400/F7A92D/ffffff?text=Group+Management";
            }}
          />
        </motion.div>
      </div>
      
      {/* Feature 2: In-App Communication */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/in-app-communication.jpg" 
            alt="In-App Communication" 
            className="rounded-lg shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/600x400/F7A92D/ffffff?text=In-App+Communication";
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-cyanase-secondary/10 p-4 rounded-lg flex items-center gap-4 mb-6 w-max">
            <div className="bg-cyanase-secondary text-white p-2 rounded-lg">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold text-cyanase-secondary-dark">In-App Communication</h3>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Social Finance Experience</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Check className="text-green-500 mt-1 flex-shrink-0" />
              <p>Members interact, set group goals, and discuss financial plans together</p>
            </div>
            <div className="flex gap-3">
              <Check className="text-green-500 mt-1 flex-shrink-0" />
              <p>The app feels social — with conversations and peer motivation around saving and investing</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Feature 3: Mobile Money Integration */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-cyanase-secondary/10 p-4 rounded-lg flex items-center gap-4 mb-6 w-max">
            <div className="bg-cyanase-secondary text-white p-2 rounded-lg">
              <Wallet size={24} />
            </div>
            <h3 className="text-xl font-semibold text-cyanase-secondary-dark">Mobile Money Integration</h3>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Seamless African Transactions</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Check className="text-green-500 mt-1 flex-shrink-0" />
              <p>Members deposit money directly into the group using MTN, Airtel, or other mobile money platforms</p>
            </div>
            <div className="flex gap-3">
              <Check className="text-green-500 mt-1 flex-shrink-0" />
              <p>Transactions are seamless and familiar for users in Africa</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/mobile-money.jpg" 
            alt="Mobile Money Integration" 
            className="rounded-lg shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/600x400/F7A92D/ffffff?text=Mobile+Money";
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
