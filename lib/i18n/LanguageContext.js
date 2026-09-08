"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LANGUAGE_KEY = "kkd_language";

const LanguageContext = createContext({
  language: "hi",
  setLanguage: () => {},
  t: (key) => key,
  ready: false,
});

function getByPath(obj, path) {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("hi");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_KEY);
    if (saved === "en" || saved === "hi") {
      setLanguageState(saved);
    }
    setReady(true);
  }, []);

  function setLanguage(lang) {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(LANGUAGE_KEY, lang);
    } catch (err) {
      console.error("Language save nahi ho payi:", err);
    }
  }

  function t(key) {
    const value = getByPath(translations[language], key);
    if (value === undefined) {
      // Fallback so a missing translation never crashes the page.
      return getByPath(translations.hi, key) ?? key;
    }
    return value;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, ready }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
