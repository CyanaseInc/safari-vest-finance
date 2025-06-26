import React, { useState, useEffect } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogAction, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useDisclaimer } from "@/contexts/DisclaimerContext";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Info, X } from "lucide-react";

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

  const handleClose = () => {
    setIsOpen(false);
    setHasSeenDisclaimer(true);
  };

  return (
    <AnimatePresence>
      {isOpen && !hasSeenDisclaimer && (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent className="max-w-lg border-0 shadow-2xl bg-white rounded-2xl p-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Close disclaimer"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              {/* Header with gradient background */}
              <div className="bg-gradient-to-r from-[#252859] to-[#353A80] px-6 pt-6 pb-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 pt-1">
                    <AlertDialogTitle className="text-lg font-semibold text-white leading-tight mb-1">
                      Important Disclosure
                    </AlertDialogTitle>
                    <p className="text-white/80 text-sm">
                      Please read this important information about our services
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                <AlertDialogDescription className="text-gray-700 text-sm leading-relaxed space-y-3">
                  <p>
                    <strong>Cyanase is a financial technology platform.</strong> We are not a bank, investment company, or licensed financial advisor.
                  </p>
                  
                  <p>
                    Investment services are provided through our partnerships with licensed and regulated fund managers. All investments carry risk, and past performance does not guarantee future results.
                  </p>
                  
                  <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                    <strong>Risk Warning:</strong> The value of investments can go down as well as up, and you may get back less than you invested. Please ensure you understand the risks before investing.
                  </p>
                </AlertDialogDescription>

                {/* Action buttons */}
                <div className="flex gap-3 mt-6">
                  <AlertDialogAction 
                    onClick={handleDismiss} 
                    className="flex-1 bg-[#252859] hover:bg-[#252859]/90 text-white font-medium py-2.5 rounded-lg transition-colors duration-200"
                  >
                    I understand
                  </AlertDialogAction>
                  <button
                    onClick={handleClose}
                    className="px-4 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                  >
                    Learn more
                  </button>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-[#252859] via-[rgb(247,169,45)] to-[#252859]" />
            </motion.div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </AnimatePresence>
  );
};