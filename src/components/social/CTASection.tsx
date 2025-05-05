
import React from 'react';
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <div className="bg-cyanase-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Saving Together?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of communities across Africa who are saving, investing,
          and growing their money together through the power of group finance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-cyanase-secondary-dark hover:bg-gray-100 font-medium">
            Download App <Share2 className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-cyanase-secondary-dark">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};
