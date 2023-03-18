import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isNewUser, setIsNewUser] = useState(true);
  return (
    <AppContext.Provider
      value={{ isNewUser, setIsNewUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };