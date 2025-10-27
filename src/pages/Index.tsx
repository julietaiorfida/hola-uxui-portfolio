import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import GeometricDivider from "@/components/GeometricDivider";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <GeometricDivider variant="circle" position="right" />
      <About />
      <GeometricDivider variant="rectangle" position="left" />
      <Projects />
      <GeometricDivider variant="mixed" position="center" />
      <Experience />
      <GeometricDivider variant="square" position="right" />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">© 2024 Maria Julieta Iorfida - Diseñado con ❤️</p>
      </footer>
    </div>
  );
};

export default Index;
