
import React from "react";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface UseCaseProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const UseCase: React.FC<UseCaseProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px -15px rgba(37, 40, 89, 0.3)"
      }}
      className="w-full"
    >
      <Card className="border border-gray-200 h-full">
        <CardContent className="pt-6">
          {icon}
          <h3 className="font-semibold mb-3 text-cyanase-primary">{title}</h3>
          <p className="text-gray-600">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const UseCasesSection = () => {
  const useCases = [
    {
      title: "Mobile Wallet Integration",
      description: "A mobile wallet wants to offer an \"Invest\" button → uses Cyanase API to let users invest directly.",
      icon: <div className="bg-cyanase-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="text-cyanase-primary" />
            </div>,
    },
    {
      title: "E-commerce Savings",
      description: "An e-commerce site wants to give users a \"Save for Later\" wallet → backed by Cyanase interest-earning products.",
      icon: <div className="bg-cyanase-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="text-cyanase-secondary" />
            </div>,
    },
    {
      title: "Social Savings Groups",
      description: "A social platform wants to let users form saving groups → connects to Cyanase group endpoints and payment rails.",
      icon: <div className="bg-cyanase-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="text-cyanase-primary" />
            </div>,
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-cyanase-primary mb-8 flex items-center gap-2">
        <span>🔗</span> Example Use Cases
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <UseCase
            key={index}
            title={useCase.title}
            description={useCase.description}
            icon={useCase.icon}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};
