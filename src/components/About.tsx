import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-secondary shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-accent/30">
                <User className="w-32 h-32 text-primary/30" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary shadow-xl animate-float"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-6xl md:text-7xl font-black text-primary mb-8">
              ABOUT ME
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Diseñadora UX/UI apasionada por crear experiencias digitales que conectan con las personas. 
                Mi enfoque combina creatividad, investigación de usuarios y diseño centrado en el usuario.
              </p>
              <p>
                Me especializo en transformar ideas complejas en interfaces intuitivas y atractivas, 
                siempre buscando el equilibrio perfecto entre estética y funcionalidad.
              </p>
              <p>
                Trabajo con herramientas como Figma, Adobe Creative Suite, y tengo experiencia en 
                design systems, prototipado y user research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
