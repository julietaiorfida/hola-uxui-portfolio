import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Redesign",
      description: "Rediseño completo de plataforma e-commerce con enfoque en conversión y UX",
      category: "UX/UI Design",
      color: "bg-primary",
    },
    {
      title: "Mobile Banking App",
      description: "Diseño de aplicación bancaria móvil con énfasis en seguridad y usabilidad",
      category: "Mobile Design",
      color: "bg-accent",
    },
    {
      title: "SaaS Dashboard",
      description: "Sistema de diseño y dashboard para plataforma SaaS B2B",
      category: "Product Design",
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
