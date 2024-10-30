// import React, { createContext, useContext, useState, useCallback } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Cookies from "js-cookie";

// const languages = {
//     languages: ["fr", "ar"],
//     default: "fr"
// };

// export const LanguageContext = createContext(null);

// export default function LanguageContextProvider({ children, initLang }) {
//   const [language, setLanguageState] = useState(initLang);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const setLanguage = useCallback((lang) => {
//     if (languages.languages.includes(lang) && lang !== language) {
//       setLanguageState(lang);
//       Cookies.set("language", lang, { path: "/", expires: 365 });
//       const newPathname = '/' + location.pathname.split('/').slice(2).join('/');
//       navigate(`/${lang}${newPathname}`);
//     }
//   }, [language, location, navigate]);

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export const useLanguage = () => useContext(LanguageContext);

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
