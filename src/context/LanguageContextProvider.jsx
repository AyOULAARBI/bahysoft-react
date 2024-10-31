
import React, { createContext, useContext, useState, useCallback } from "react";
import Cookies from "js-cookie";

const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState(Cookies.get("language") || "fr");

  const switchLanguage = useCallback((newLang) => {
    Cookies.set("language", newLang, { expires: 365 });
    setLanguage(newLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
export default LanguageContextProvider;
