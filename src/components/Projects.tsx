import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Identidad Visual & Redes Sociales",
      description: "Desarrollo de identidad visual de marca en redes sociales, definiendo estilo, paleta y tipografía para coherencia y reconocimiento",
      category: "Branding & Social Media",
      color: "bg-primary",
    },
    {
      title: "Contenido Digital Creativo",
      description: "Creación de contenido gráfico original (posteos, stories, reels) con Illustrator, Figma, Canva y Photoshop",
      category: "Content Creation",
      color: "bg-accent",
    },
    {
      title: "Diseño UX/UI & Web",
      description: "Diseño de interfaces y experiencias digitales con enfoque en usabilidad y diseño centrado en el usuario",
      category: "UX/UI Design",
      color: "bg-secondary",
    },
    {
      title: "Marketing Digital",
      description: "Estrategias de contenido digital, planificación de campañas y gestión de presencia en redes sociales",
      category: "Marketing",
      color: "bg-[hsl(280,70%,60%)]",
    },
    {
      title: "Diseño de Interfaces Mobile",
      description: "Creación de experiencias móviles intuitivas, desde wireframes hasta prototipos interactivos de alta fidelidad",
      category: "Mobile Design",
      color: "bg-[hsl(45,85%,55%)]",
    },
    {
      title: "Branding & Logotipos",
      description: "Desarrollo de identidad de marca completa, incluyendo diseño de logotipos, paletas de color y guías de estilo",
      category: "Branding",
      color: "bg-[hsl(160,65%,50%)]",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative stickers */}
      <div className={`absolute top-10 left-10 text-6xl rotate-6 ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
        📱
      </div>
      <div className={`absolute bottom-10 right-10 text-5xl -rotate-12 ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
        ✏️
      </div>
      <div className={`max-w-7xl mx-auto ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
        <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center md:text-left">
          MIS PROYECTOS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.color} text-white rounded-3xl p-8 shadow-2xl hover:shadow-xl transition-all hover:scale-105`}
            >
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-white mb-4">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-white/90 mb-6">
                {project.description}
              </p>
              <Button
                variant="secondary"
                className="w-full rounded-full font-semibold"
              >
                Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
