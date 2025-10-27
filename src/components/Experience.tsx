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
  return <section id="experience" className="min-h-screen py-20 px-6 bg-muted/20 relative overflow-hidden" ref={ref}>
      {/* Decorative stickers */}
      
      
      <div className={`max-w-7xl mx-auto ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
        <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center md:text-left">
          EXPERIENCE
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
          {/* Left Column: Timeline and Skills */}
          <div className="space-y-12">
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

            {/* Key Strengths */}
            <div className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-6">Key Strengths</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">Atención al detalle y enfoque en la experiencia del usuario</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">Capacidad de aprendizaje constante y adaptación</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">Trabajo colaborativo en equipos interdisciplinarios</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">Gestión de proyectos y cumplimiento de plazos</p>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-6">Tools</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent/20 text-accent rounded-full font-semibold">Figma</span>
                <span className="px-4 py-2 bg-accent/20 text-accent rounded-full font-semibold">Illustrator</span>
                <span className="px-4 py-2 bg-accent/20 text-accent rounded-full font-semibold">Photoshop</span>
                <span className="px-4 py-2 bg-accent/20 text-accent rounded-full font-semibold">Canva</span>
                <span className="px-4 py-2 bg-accent/20 text-accent rounded-full font-semibold">Procreate</span>
                <span className="px-4 py-2 bg-accent/20 text-accent rounded-full font-semibold">InDesign</span>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-6">Skills</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">Diseño UX/UI</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">Branding y diseño de identidad visual</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">Marketing digital y gestión de redes sociales</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">Diseño web responsive</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">Creación de contenido visual</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-6">Educación</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-accent mb-1">Universidad Argentina de la Empresa</p>
                  <p className="text-foreground/80 mb-1">Licenciatura en Diseño de Multimedia e Interacción</p>
                  <p className="text-sm text-muted-foreground">Marzo 2024 - Diciembre 2028 (En curso)</p>
                </div>
                
                <div>
                  <p className="text-lg font-semibold text-accent mb-1">Colegio Marianista</p>
                  <p className="text-foreground/80 mb-1">Bachillerato en Ciencias Sociales y Humanidades</p>
                  <p className="text-sm text-muted-foreground">Marzo 2008 - Diciembre 2023</p>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-6">Certificaciones</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-accent mb-1">Fundamentos de la Inteligencia Artificial</p>
                  <p className="text-foreground/80 mb-1">IBM</p>
                  <p className="text-sm text-muted-foreground">Octubre 2025</p>
                </div>
                
                <div>
                  <p className="text-lg font-semibold text-accent mb-1">Primer Certificado en Inglés</p>
                  <p className="text-foreground/80 mb-1">Educación Internacional de Cambridge</p>
                  <p className="text-sm text-muted-foreground">Agosto 2023</p>
                </div>
              </div>
            </div>

            {/* Volunteering Card */}
            <div className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-6">Voluntariado</h3>
              
              <div>
                <p className="text-lg font-semibold text-accent mb-1">Fundación Misión Marianista</p>
                <p className="text-sm text-muted-foreground mb-3">Marzo 2022 - Actualidad</p>
                <p className="text-foreground/80">
                  Apoyo escolar en Colegio de Fátima, Villa Soldati. Acompañamiento académico 
                  en matemática, lengua e inglés, generando espacios de confianza y fomentando 
                  valores de compañerismo y empatía.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;