"use client";
import React, { createContext, useContext, useState } from "react";

interface SuccessCardContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const SuccessCardContext = createContext<SuccessCardContextType | undefined>(
  undefined
);

export function useSuccessCardContext() {
  const context = useContext(SuccessCardContext);
  if (!context) {
    throw new Error(
      "useSuccessCardContext must be used within a SuccessCardProvider"
    );
  }
  return context;
}

export function SuccessCardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const value = {
    isOpen,
    open,
    close,
  };

  return (
    <SuccessCardContext.Provider value={value}>
      {children}
    </SuccessCardContext.Provider>
  );
}
