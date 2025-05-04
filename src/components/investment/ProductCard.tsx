
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  callToAction: string;
  delay?: number;
}

export const ProductCard = ({ title, description, callToAction, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <Card className="border border-gray-200 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative">
        {/* Fintech circuit board background pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
          <pattern id={`circuit-${title.replace(/\s+/g, '-')}`} patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
            <line x1="10" y1="0" x2="10" y2="10" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0" y1="10" x2="10" y2="10" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="10" cy="10" r="1.5" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#circuit-${title.replace(/\s+/g, '-')})`} />
        </svg>
        
        {/* Animated line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-cyanase-primary/40"
          style={{ width: "0%" }}
          animate={{ 
            width: ["0%", "100%", "0%"]
          }}
          transition={{ 
            duration: 5, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
        
        <CardContent className="p-6 relative">
          <motion.h3 
            className="font-semibold mb-3 text-cyanase-primary text-xl relative inline-block"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-cyanase-secondary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: delay + 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h3>
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-cyanase-secondary hover:bg-cyanase-primary text-cyanase-primary hover:text-white font-medium relative overflow-hidden group">
              <motion.span 
                className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 pointer-events-none"
                animate={{ 
                  x: ["-100%", "100%"], 
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              />
              {callToAction}
            </Button>
          </motion.div>
          
          {/* Digital data points in corners */}
          <div className="absolute top-3 right-3 flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="w-1 h-1 rounded-full bg-cyanase-primary/40"
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
