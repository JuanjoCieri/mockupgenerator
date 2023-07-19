// @ts-nocheck

import React, { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [sharedData, setSharedData] = useState(null);

  return (
    <AppContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
