"use client";
import React, { createContext, useContext, useState } from "react";

interface TabContextType {
  ActiveId: number;
  setActiveId: React.Dispatch<React.SetStateAction<number>>;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
}

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [ActiveId, setActiveId] = useState<number>(0);

  const value = {
    ActiveId,
    setActiveId,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}
