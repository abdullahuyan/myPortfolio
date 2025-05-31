import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored === null) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }

      return JSON.parse(stored);
    } catch (error) {
      console.error("useLocalStorage JSON parse hatası:", error);
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setLocalStorage = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      setValue(valueToStore);
    } catch (error) {
      console.error("useLocalStorage set hatası:", error);
    }
  };

  return [value, setLocalStorage];
}
