import { useLanguage } from "@/i18n/useLanguage";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      aria-pressed={lang === "en"}
      className="flex items-center rounded-full border-2 border-primary/30 bg-background/80 backdrop-blur-sm shadow-md overflow-hidden transition-all duration-200 hover:shadow-primary/20 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <span
        className={`px-3 py-1.5 text-xs font-bold transition-colors duration-200 ${
          lang === "es"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground"
        }`}
      >
        ES
      </span>
      <span
        className={`px-3 py-1.5 text-xs font-bold transition-colors duration-200 ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground"
        }`}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
