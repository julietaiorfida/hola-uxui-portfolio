import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TakeWhatYouNeed from "@/components/TakeWhatYouNeed";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <TakeWhatYouNeed />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">© 2024 Maria Julieta Iorfida - Diseñado con ❤️</p>
      </footer>
    </div>
  );
};

export default Index;
