import { ExternalLink, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [hoveredFolder, setHoveredFolder] = useState<number | null>(null);

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
        <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center md:text-left handwriting">
          mis proyectos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredFolder(index)}
              onMouseLeave={() => setHoveredFolder(null)}
            >
              {/* Folder Base */}
              <div className={`relative ${project.color} rounded-t-3xl rounded-b-[2rem] p-8 pt-16 shadow-2xl
                              transition-all duration-500 ${hoveredFolder === index ? 'transform -translate-y-4' : ''}`}>
                
                {/* Folder Tab */}
                <div className={`absolute -top-8 left-8 ${project.color} w-32 h-12 rounded-t-2xl shadow-lg
                               flex items-center justify-center gap-2`}>
                  <FolderOpen className="w-6 h-6 text-white" />
                  <span className="text-sm font-bold text-white">{index + 1}</span>
                </div>

                {/* Content popping out */}
                <div className={`absolute -top-2 left-0 right-0 transition-all duration-500 
                               ${hoveredFolder === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 mx-4 animate-folder-pop">
                    <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Folder content */}
                <div className="mt-8">
                  <p className="text-white/90 mb-6">
                    {project.description}
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full rounded-full font-semibold group-hover:scale-105 transition-transform"
                  >
                    Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
