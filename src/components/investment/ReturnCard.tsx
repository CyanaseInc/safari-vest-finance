
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <Card className="border border-gray-200 hover:shadow-md transition-all duration-300 h-full relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyanase-secondary/5 to-transparent"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 5, 
            ease: "easeInOut", 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        <CardContent className="p-6">
          <motion.div 
            className="text-2xl font-bold text-cyanase-secondary mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {percentage}
          </motion.div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
