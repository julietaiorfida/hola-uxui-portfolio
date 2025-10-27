import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <SectionDivider variant="wave1" className="fill-secondary/30 -mt-1" />
      <About />
      <SectionDivider variant="wave2" className="fill-background -mt-1" flipX />
      <Projects />
      <SectionDivider variant="wave3" className="fill-primary/10 -mt-1" />
      <Experience />
      <SectionDivider variant="wave4" className="fill-background -mt-1" flipX />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">© 2024 Maria Julieta Iorfida - Diseñado con ❤️</p>
      </footer>
    </div>
  );
};

export default Index;
