import { useState } from "react";

const TakeWhatYouNeed = () => {
  const services = [
    "Diseño UX/UI",
    "Identidad Visual",
    "Contenido Digital",
    "Gestión de Redes",
    "Branding",
    "Diseño Web"
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-primary mb-12 text-center handwriting">
          toma lo que necesites
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer border-2 border-primary/20"
            >
              <p className="text-center font-bold text-foreground">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TakeWhatYouNeed;