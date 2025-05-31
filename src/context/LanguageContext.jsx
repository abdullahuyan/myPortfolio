import { createContext, useState, useContext } from "react";
import { data } from "../data/data";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
  };

  const localizedData = data[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data: localizedData}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);