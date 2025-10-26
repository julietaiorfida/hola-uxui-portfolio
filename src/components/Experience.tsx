const Experience = () => {
  const experiences = [
    {
      role: "Senior UX/UI Designer",
      company: "Tech Company",
      period: "2023 - Presente",
      description: "Liderando proyectos de diseño y mentorando equipo junior",
    },
    {
      role: "UX/UI Designer",
      company: "Design Studio",
      period: "2021 - 2023",
      description: "Diseño de productos digitales para diversos clientes",
    },
    {
      role: "Junior Designer",
      company: "Startup",
      period: "2019 - 2021",
      description: "Colaboración en diseño de MVP y sistemas de diseño",
    },
  ];

  const skills = {
    design: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    research: ["User Research", "Usability Testing", "A/B Testing", "Analytics"],
    tools: ["Prototyping", "Wireframing", "Design Systems", "Responsive Design"],
  };

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center md:text-left">
          EXPERIENCE
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-primary">
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
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">Design Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-accent mb-4">Research</h3>
              <div className="flex flex-wrap gap-2">
                {skills.research.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-secondary mb-4">Methods</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
