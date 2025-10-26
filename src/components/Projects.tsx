import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Identidad Visual & Redes Sociales",
      description: "Desarrollo de identidad visual de marca en redes sociales, definiendo estilo, paleta y tipografía para coherencia y reconocimiento",
      category: "Branding & Social Media",
    },
    {
      title: "Contenido Digital Creativo",
      description: "Creación de contenido gráfico original (posteos, stories, reels) con Illustrator, Figma, Canva y Photoshop",
      category: "Content Creation",
    },
    {
      title: "Diseño UX/UI & Web",
      description: "Diseño de interfaces y experiencias digitales con enfoque en usabilidad y diseño centrado en el usuario",
      category: "UX/UI Design",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center md:text-left handwriting">
          mis proyectos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-2xl hover:shadow-primary/20 transition-all hover:scale-105 border-2 border-primary/10"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>
              <Button
                variant="default"
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
