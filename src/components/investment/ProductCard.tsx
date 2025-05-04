
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

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
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <Card className="border border-gray-200 h-full overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 rounded-xl relative">
        {/* Animated gradient overlay */}
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
            repeatType: "reverse" 
          }}
        />
        
        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <motion.div 
            className="absolute top-0 right-0 w-2 h-full bg-cyanase-secondary/30"
            initial={{ height: 0 }}
            whileInView={{ height: 40 }}
            transition={{ delay: delay + 0.3, duration: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="absolute top-0 right-0 h-2 w-full bg-cyanase-secondary/30"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            transition={{ delay: delay + 0.3, duration: 0.4 }}
            viewport={{ once: true }}
          />
        </div>
        
        <CardContent className="p-6 md:p-8">
          <motion.h3 
            className="font-semibold mb-3 text-cyanase-primary text-xl"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 mb-6"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {description}
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10"
          >
            <Button className="group bg-cyanase-secondary hover:bg-cyanase-primary text-cyanase-primary hover:text-white font-medium transition-all duration-300 px-5 py-2 h-auto">
              {callToAction}
              <motion.div
                initial={{ x: -5, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="inline-block ml-1 overflow-hidden"
              >
                <ArrowRight className="h-4 w-4 inline" />
              </motion.div>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
