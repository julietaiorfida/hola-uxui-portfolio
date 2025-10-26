import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Experience = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const experiences = [{
    role: "Diseñadora Digital y Community Manager",
    company: "Team Arq, Marchesini de Remax Urbana",
    period: "Marzo 2023 - Actualidad",
    description: "Desarrollo de identidad visual, creación de contenido gráfico, gestión de redes sociales y planificación de calendario de publicaciones"
  }, {
    role: "Profesora Particular de Inglés",
    company: "Freelance",
    period: "Marzo 2024 - Actualidad",
    description: "Diseño de clases personalizadas y desarrollo de materiales interactivos para distintos niveles"
  }];
  const skills = {
    keyStrengths: ["User Study & Analysis", "User Flow", "Task Analysis", "Journey Mapping", "Information Architecture", "Usability Testing", "Wireframing", "Prototyping", "Responsive Design"],
    tools: ["Illustrator", "Figma", "Canva", "Photoshop", "UX/UI", "Marketing Digital", "Branding"],
    softSkills: ["Problem Solving", "Empathy", "Critical Thinking", "Communication"]
  };
  return <section id="experience" className="min-h-screen py-20 px-6 bg-muted/20 relative overflow-hidden" ref={ref}>
      {/* Decorative stickers */}
      
      
      <div className={`max-w-7xl mx-auto ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
        <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center md:text-left">
          EXPERIENCE
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => <div key={index} className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {exp.role}
                </h3>
                <p className="text-lg text-primary font-semibold mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {exp.period}
                </p>
                <p className="text-foreground/80">
                  {exp.description}
                </p>
              </div>)}
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">Key Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {skills.keyStrengths.map((skill, i) => <span key={i} className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold text-sm">
                    {skill}
                  </span>)}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-accent mb-4">Tools & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => <span key={i} className="px-4 py-2 bg-accent text-accent-foreground rounded-full font-semibold">
                    {skill}
                  </span>)}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-secondary mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.softSkills.map((skill, i) => <span key={i} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-semibold">
                    {skill}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;