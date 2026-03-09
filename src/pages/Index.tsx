import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">{t("footer.text")}</p>
      </footer>
    </div>
  );
};

export default Index;
