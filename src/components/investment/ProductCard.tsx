
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
      <Card className="border border-gray-200 h-full hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3 text-cyanase-primary text-xl">{title}</h3>
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          <Button className="bg-cyanase-secondary hover:bg-cyanase-primary text-cyanase-primary hover:text-white font-medium">
            {callToAction}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
