import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
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
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center md:text-left">
          PROJECTS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${project.color} aspect-square p-8 flex flex-col justify-between`}>
                <div>
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-white mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white/90">
                    {project.description}
                  </p>
                </div>
                <Button
                  variant="secondary"
                  className="w-full rounded-full font-semibold group-hover:scale-105 transition-transform"
                >
                  Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
