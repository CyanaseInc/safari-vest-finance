
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
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <Card className="border border-gray-200 hover:shadow-md transition-all duration-300 h-full relative overflow-hidden">
        {/* Enhanced background effects */}
        <motion.div 
          className="absolute inset-0 bg-cyanase-primary/5 pointer-events-none"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        {/* Digital circuit pattern in the background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id={`circuit-${title.replace(/\s+/g, '-')}`} patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
            <line x1="10" y1="0" x2="10" y2="10" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0" y1="10" x2="10" y2="10" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="10" cy="10" r="1.5" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#circuit-${title.replace(/\s+/g, '-')})`} />
        </svg>
        
        <CardContent className="p-6 relative">
          <div className="flex items-center mb-2">
            <motion.div 
              className="text-2xl font-bold text-cyanase-secondary mr-2"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -3, 0]
              }}
              transition={{ 
                y: {
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                },
                scale: { type: "spring", stiffness: 300 }
              }}
            >
              {percentage}
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -2, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <TrendingUp size={16} className="text-green-500" />
            </motion.div>
          </div>
          
          <h3 className="font-semibold text-lg mb-2 relative">
            {title}
            {/* Animated underline */}
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-cyanase-primary/30"
              initial={{ width: "0%" }}
              whileInView={{ width: "40%" }}
              transition={{ duration: 0.8, delay: delay + 0.3 }}
              viewport={{ once: true }}
            />
          </h3>
          
          <p className="text-gray-600 text-sm">
            {description}
          </p>
          
          {/* Subtle animated dots in the corner */}
          <div className="absolute bottom-2 right-2 flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="w-1 h-1 rounded-full bg-cyanase-secondary/40"
                animate={{ 
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
