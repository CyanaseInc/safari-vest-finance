import React, { useState, useEffect } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogAction, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useDisclaimer } from "@/contexts/DisclaimerContext";
import { motion, AnimatePresence } from "framer-motion";

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
          <AlertDialogContent className="border-[#252859] border-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-[#252859]/20 to-[rgb(247,169,45)]/20 p-4 rounded-md mb-4">
                <AlertDialogTitle className="text-lg font-semibold text-center mb-2">
                  Important Disclaimer
                </AlertDialogTitle>
                <AlertDialogDescription className="text-center mb-4">
                  <p className="text-sm md:text-base">
                    Cyanase is a financial technology company, not a bank or an investment company. 
                    Investment services are provided by our partners, the licensed & regulated fund managers.
                  </p>
                </AlertDialogDescription>
              </div>
              <div className="flex justify-center">
                <AlertDialogAction onClick={handleDismiss} className="bg-[rgb(247,169,45)] hover:bg-[rgb(247,169,45)]/90">
                  I Understand
                </AlertDialogAction>
              </div>
            </motion.div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </AnimatePresence>
  );
};