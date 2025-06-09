
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InvestmentProducts from "./pages/InvestmentProducts";
import FundManagers from "./pages/FundManagers";
import Api from "./pages/Api";
import SocialApp from "./pages/SocialApp";
import GoalBasedInvesting from "./pages/GoalBasedInvesting";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import JoinGroup from "./pages/JoinGroup";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import { DisclaimerProvider } from "./contexts/DisclaimerContext";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DisclaimerProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/investment-products" element={<InvestmentProducts />} />
              <Route path="/fund-managers" element={<FundManagers />} />
              <Route path="/sectors" element={<FundManagers />} /> {/* Added alias route */}
              <Route path="/api" element={<Api />} />
              <Route path="/social-app" element={<SocialApp />} />
              <Route path="/goal-based-investing" element={<GoalBasedInvesting />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join-group" element={<JoinGroup />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </DisclaimerProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
