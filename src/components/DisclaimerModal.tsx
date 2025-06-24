import React, { useState, useEffect } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogAction, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useDisclaimer } from "@/contexts/DisclaimerContext";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Info } from "lucide-react";

export const DisclaimerModal = () => {
  const { hasSeenDisclaimer, setHasSeenDisclaimer } = useDisclaimer();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show disclaimer after scrolling down 1000px
      const scrollPosition = window.scrollY;
      if (scrollPosition > 1000 && !hasSeenDisclaimer && !hasScrolledEnough) {
        setHasScrolledEnough(true);
        setTimeout(() => {
          setIsOpen(true);
        }, 500); // Small delay for better UX
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasSeenDisclaimer, hasScrolledEnough]);

  const handleDismiss = () => {
    setIsOpen(false);
    setHasSeenDisclaimer(true);
  };

  return (
    <AnimatePresence>
      {isOpen && !hasSeenDisclaimer && (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent className="max-w-md border-0 shadow-2xl bg-white rounded-2xl p-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Header with icon */}
              <div className="flex items-center gap-3 p-6 pb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <Info className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <AlertDialogTitle className="text-lg font-semibold text-gray-900 leading-tight">
                    Important Notice
                  </AlertDialogTitle>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <AlertDialogDescription className="text-gray-600 text-sm leading-relaxed mb-6">
                  Cyanase is a financial technology platform. Investment services are provided by our licensed and regulated fund manager partners. 
                  <span className="block mt-2 text-xs text-gray-500">
                    Not a bank or investment company.
                  </span>
                </AlertDialogDescription>

                {/* Action button */}
                <AlertDialogAction 
                  onClick={handleDismiss} 
                  className="w-full bg-[#252859] hover:bg-[#252859]/90 text-white font-medium py-2.5 rounded-lg transition-colors duration-200"
                >
                  Got it
                </AlertDialogAction>
              </div>

              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#252859] to-[rgb(247,169,45)]" />
            </motion.div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </AnimatePresence>
  );
};