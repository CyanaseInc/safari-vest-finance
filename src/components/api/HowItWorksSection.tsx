
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface WorkflowStepProps {
  number: number;
  title: string;
  items: string[];
  delay: number;
  isPrimary?: boolean;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ number, title, items, delay, isPrimary = true }) => {
  const borderColor = isPrimary ? "border-cyanase-primary" : "border-cyanase-secondary";
  const bgColor = isPrimary ? "bg-cyanase-primary" : "bg-cyanase-secondary";
  const textColor = isPrimary ? "text-cyanase-secondary" : "text-cyanase-primary";
  
  return (
    <motion.div 
      className={`bg-gray-50 p-6 rounded-xl border-l-4 ${borderColor} hover:shadow-md transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <span className={`${bgColor} ${isPrimary ? "text-white" : "text-cyanase-primary"} w-7 h-7 rounded-full flex items-center justify-center mr-3`}>
          {number}
        </span>
        {title}
      </h3>
      <ul className="space-y-3 pl-10">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2">
            <Check className={`${textColor} flex-shrink-0 mt-1`} size={18} />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Authentication",
      items: [
        "Partners get secure API keys to authenticate and access services.",
        "OAuth2 or token-based authentication ensures secure access to customer and transaction endpoints."
      ],
      isPrimary: true
    },
    {
      number: 2,
      title: "Account Creation & KYC",
      items: [
        "Create investment accounts for users via a single API call.",
        "Built-in eKYC support: the API supports uploading documents or using mobile money KYC for identity verification."
      ],
      isPrimary: false
    },
    {
      number: 3,
      title: "Deposits & Withdrawals",
      items: [
        "API endpoints allow users to deposit into their investment wallet using mobile money (MTN, Airtel, etc.).",
        "Withdrawals can be initiated through the API, routed back to mobile money accounts."
      ],
      isPrimary: true
    },
    {
      number: 4,
      title: "Investment Products",
      items: [
        "Access a range of unit trust products, fixed income products, or savings goals via API.",
        "Developers can offer these products natively in their own apps by pulling product metadata and pricing."
      ],
      isPrimary: false
    },
    {
      number: 5,
      title: "Transactions & Returns",
      items: [
        "Track transactions (deposits, returns, redemptions) for each user account.",
        "Pull real-time balances, historical returns, and interest earned per product."
      ],
      isPrimary: false
    },
    {
      number: 6,
      title: "Group Investing Support",
      items: [
        "The API supports creation of groups, contribution tracking, goal management, and loan workflows.",
        "Ideal for social saving platforms or fintechs with SACCO-like features."
      ],
      isPrimary: false
    },
    {
      number: 7,
      title: "Webhooks",
      items: [
        "Integrate webhooks to get notified in real time when: A deposit is successful, a withdrawal is initiated, KYC is approved or declined, a group hits a milestone."
      ],
      isPrimary: false
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-cyanase-primary mb-8 flex items-center gap-2">
        <span className="text-cyanase-secondary">⚙️</span> How It Works
      </h2>
      
      <div className="space-y-10">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            number={step.number}
            title={step.title}
            items={step.items}
            delay={index * 0.1}
            isPrimary={step.isPrimary}
          />
        ))}
      </div>
    </div>
  );
};
