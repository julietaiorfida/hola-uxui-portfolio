import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useReveal } from "@/hooks/useReveal";

const Projects = () => {
  const { t } = useLanguage();
  const titleRef = useReveal({ variant: 'up' });
  const gridRef = useReveal({ variant: 'up', stagger: true, staggerDelay: 100, delay: 150 });

  const projects = [
    {
      titleKey: "projects.p1.title",
      descKey: "projects.p1.desc",
      catKey: "projects.p1.cat",
      color: "bg-[hsl(340,85%,65%)]",
      href: "https://www.behance.net/gallery/231373469/Branding-de-vinos",
    },
    {
      titleKey: "projects.p2.title",
      descKey: "projects.p2.desc",
      catKey: "projects.p2.cat",
      color: "bg-[hsl(65,85%,60%)]",
      // TODO: agregar link Behance de Havanna
      href: "",
    },
    {
      titleKey: "projects.p3.title",
      descKey: "projects.p3.desc",
      catKey: "projects.p3.cat",
      color: "bg-[hsl(270,70%,60%)]",
      href: "https://www.behance.net/gallery/232999069/Diseno-de-feed",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-[hsl(var(--section-white))] border-t border-border/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef}>
          <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center md:text-left">
            {t("projects.title")}
          </h2>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-reveal-item
              className={`${project.color} text-white rounded-3xl p-8 shadow-2xl hover:shadow-xl transition-all hover:scale-105 flex flex-col`}
            >
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-white mb-4">
                {t(project.catKey)}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">{t(project.titleKey)}</h3>
              <p className="text-white/90 mb-6 flex-1">{t(project.descKey)}</p>
              {project.href ? (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                  <Button className="w-full rounded-full font-semibold bg-white text-black hover:bg-white/90 btn-interactive">
                    {t("projects.viewProject")} <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              ) : (
                <Button className="w-full rounded-full font-semibold bg-white text-black hover:bg-white/90 mt-auto btn-interactive" disabled>
                  {t("projects.viewProject")} <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
