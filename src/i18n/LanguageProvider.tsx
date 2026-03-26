import { useCallback, useState, type ReactNode } from "react";
import { LanguageContext } from "./language-context";
import { translations, type Lang } from "./translations";

function getDefaultLang(): Lang {
  if (typeof window === "undefined") return "es";

  const stored = window.localStorage.getItem("lang");
  if (stored === "es" || stored === "en") return stored;

  const browserLang = window.navigator.language || "";
  return browserLang.startsWith("en") ? "en" : "es";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getDefaultLang);

  const setLang = useCallback((nextLang: Lang) => {
    setLangState(nextLang);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", nextLang);
    }
  }, []);

  const t = useCallback((key: string) => translations[lang][key] ?? key, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
