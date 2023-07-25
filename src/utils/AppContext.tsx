import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppContextType {
  sharedData: any;
  setSharedData: React.Dispatch<React.SetStateAction<any>>; 
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser utilizado dentro de AppProvider");
  }
  return context;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [sharedData, setSharedData] = useState<any>(null);

  return (
    <AppContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
