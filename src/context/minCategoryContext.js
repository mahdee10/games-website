import { createContext, useState, useContext, useEffect } from "react";

const MinCategoryContext = createContext(null);

const MinCategoryProvider = ({ children }) => {

  useEffect(() => {
    
  }, []);



  return (
    <MinCategoryContext.Provider value={{  }}>
      {children}
    </MinCategoryContext.Provider>
  );
};

const useTranslation = () => useContext(TranslationContext);

export { TranslationProvider, useTranslation };
