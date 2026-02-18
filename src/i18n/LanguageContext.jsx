import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") return "pt";
    const saved = localStorage.getItem("lang") || "pt";
    return translations[saved] ? saved : "pt";
  });

  const setLanguage = (next) => {
    const safeNext = translations[next] ? next : "pt";
    setLanguageState(safeNext);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", safeNext);
    }
  };

  const t = useMemo(() => translations[language] || translations.pt, [language]);
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
