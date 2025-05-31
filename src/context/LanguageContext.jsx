import { createContext, useState, useContext, useEffect } from "react";
import { data } from "../data/data";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("lang","en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
  };

  const localizedData = data[language];

  const postLanguageData = async () => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/workintech",
        localizedData,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Dil verisi başarıyla gönderildi:", response.data);
    } catch (error) {
      console.error("Dil verisi gönderilirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    postLanguageData(); // sadece gönder
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data: localizedData}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);