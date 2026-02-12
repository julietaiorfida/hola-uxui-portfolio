import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "ABOUT ME" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="default"
        size="icon"
        className="fixed top-6 right-6 z-50 md:hidden rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Desktop Navigation - Horizontal Header */}
      <nav className="hidden md:flex fixed top-6 right-6 z-40 flex-row gap-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            size="sm"
            className={`rounded-full px-4 py-2 text-xs font-bold shadow-lg hover:scale-105 transition-all hover:shadow-primary/50 ${
              isScrolled ? 'opacity-30 hover:opacity-100' : 'opacity-100'
            }`}
          >
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex items-center justify-center">
          <nav className="flex flex-col gap-4 items-center">
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-primary/50"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
