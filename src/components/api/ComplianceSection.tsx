
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const ComplianceSection = () => {
  return (
    <motion.div 
      className="mt-16 bg-cyanase-primary/5 p-8 rounded-xl border border-cyanase-primary/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-2xl font-semibold text-cyanase-primary mb-6 flex items-center gap-2">
        <span>🏦</span> Regulatory & Compliance Built In
      </h2>
      <p className="text-lg mb-6">Cyanase handles:</p>
      <ul className="space-y-4 mb-6">
        <li className="flex items-start gap-3">
          <ShieldCheck className="text-cyanase-secondary mt-1 flex-shrink-0" />
          <span>Fund custody with licensed fund managers</span>
        </li>
        <li className="flex items-start gap-3">
          <ShieldCheck className="text-cyanase-secondary mt-1 flex-shrink-0" />
          <span>Anti-Money Laundering (AML) rules</span>
        </li>
        <li className="flex items-start gap-3">
          <ShieldCheck className="text-cyanase-secondary mt-1 flex-shrink-0" />
          <span>Reporting for tax and compliance</span>
        </li>
      </ul>
      <p className="text-gray-700">
        This means platforms using the API don't need to register as investment firms — Cyanase handles the backend risk and regulation.
      </p>
    </motion.div>
  );
};
