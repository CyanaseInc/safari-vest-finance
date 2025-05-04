
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface ReturnCardProps {
  percentage: string;
  title: string;
  description: string;
  delay?: number;
}

export const ReturnCard = ({ percentage, title, description, delay = 0 }: ReturnCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <Card className="border border-gray-200 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 h-full relative overflow-hidden rounded-xl">
        {/* Enhanced background animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyanase-secondary/10 to-transparent"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: delay * 0.5
          }}
        />
        
        {/* Animated corner accent */}
        <motion.div 
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyanase-secondary/20 to-transparent rounded-bl-[100px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        />
        
        <CardContent className="p-6 md:p-8 relative z-10">
          <motion.div 
            className="flex items-center mb-4"
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: delay + 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-cyanase-secondary/10 p-2 rounded-full mr-3"
              whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <TrendingUp className="h-4 w-4 text-cyanase-secondary" />
            </motion.div>
            <motion.div 
              className="text-3xl font-bold text-cyanase-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {percentage}
            </motion.div>
          </motion.div>
          
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          
          {/* Subtle bottom decoration */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyanase-secondary/30 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ delay: delay + 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};
