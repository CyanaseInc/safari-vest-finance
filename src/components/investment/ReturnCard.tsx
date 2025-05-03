
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
      <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
        <CardContent className="p-6">
          <div className="text-2xl font-bold text-cyanase-secondary mb-2">{percentage}</div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
