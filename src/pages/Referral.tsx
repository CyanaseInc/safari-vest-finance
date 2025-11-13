import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Gift, Smartphone, Apple, Download } from "lucide-react";
import { motion } from "framer-motion";

const Referral = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(checkMobile);

    // Auto-redirect to app store if not on mobile
    if (!checkMobile) {
      setTimeout(() => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.cyanase.app';
      }, 3000);
    }

    // Try to open the app if on mobile
    if (checkMobile) {
      const isAndroid = /Android/i.test(navigator.userAgent);
      if (isAndroid) {
        window.location.href = 'intent://refer/#Intent;scheme=https;package=com.cyanase.app;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.cyanase.app;end';
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Join Cyanase – Get $10!</title>
        <meta name="description" content="Use this referral code for rewards!" />
        <meta property="og:title" content="Join Cyanase – Get $10!" />
        <meta property="og:description" content="Use this referral code for rewards!" />
        <meta property="og:type" content="website" />
        <link rel="alternate" href="intent://refer/#Intent;scheme=https;package=com.cyanase.app;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.cyanase.app;end" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-block mb-4"
              >
                <div className="bg-secondary rounded-full p-6 shadow-lg">
                  <Gift className="w-12 h-12 text-secondary-foreground" />
                </div>
              </motion.div>
              
              <h1 className="text-4xl font-bold text-primary-foreground mb-2">
                Welcome to Cyanase!
              </h1>
              <p className="text-primary-foreground/90 text-lg">
                Get $10 when you join using this referral code
              </p>
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
                  <Smartphone className="w-5 h-5 text-secondary" />
                  <span className="text-foreground font-medium">
                    {isMobile ? "Opening app..." : "Redirecting to app store..."}
                  </span>
                </div>

                {!isMobile && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-muted-foreground text-sm"
                  >
                    You'll be redirected in a few seconds
                  </motion.p>
                )}
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-center text-foreground mb-6 font-medium">
                  Don't have the app yet? Download now:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-foreground hover:bg-foreground/90 text-background"
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.cyanase.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Google Play
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full"
                  >
                    <a
                      href="https://apps.apple.com/app/cyanase"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Apple className="w-5 h-5" />
                      App Store
                    </a>
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="bg-muted/50 rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-foreground text-center mb-4">
                  Why Join Cyanase?
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Start investing with as little as $1",
                    "Access diverse investment products",
                    "Track your portfolio in real-time",
                    "Get $10 bonus with referral code"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-6"
          >
            <p className="text-muted-foreground text-sm">
              By downloading and using Cyanase, you agree to our{" "}
              <a href="/terms-and-conditions" className="text-primary hover:underline">
                Terms & Conditions
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Referral;
