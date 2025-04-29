
import React, { createContext, useContext, useState, useEffect } from "react";

interface DisclaimerContextType {
  hasSeenDisclaimer: boolean;
  setHasSeenDisclaimer: (seen: boolean) => void;
}

const DisclaimerContext = createContext<DisclaimerContextType | undefined>(undefined);

export const DisclaimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasSeenDisclaimer, setHasSeenDisclaimer] = useState<boolean>(() => {
    // Check localStorage to see if user has already seen the disclaimer
    const stored = localStorage.getItem("hasSeenDisclaimer");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    // Store in localStorage when changed
    localStorage.setItem("hasSeenDisclaimer", JSON.stringify(hasSeenDisclaimer));
  }, [hasSeenDisclaimer]);

  return (
    <DisclaimerContext.Provider value={{ hasSeenDisclaimer, setHasSeenDisclaimer }}>
      {children}
    </DisclaimerContext.Provider>
  );
};

export const useDisclaimer = (): DisclaimerContextType => {
  const context = useContext(DisclaimerContext);
  if (context === undefined) {
    throw new Error("useDisclaimer must be used within a DisclaimerProvider");
  }
  return context;
};
