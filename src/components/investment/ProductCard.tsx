
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
      <Card className="border border-gray-200 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-6">
          <motion.h3 
            className="font-semibold mb-3 text-cyanase-primary text-xl"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </motion.h3>
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-cyanase-secondary hover:bg-cyanase-primary text-cyanase-primary hover:text-white font-medium">
              {callToAction}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
