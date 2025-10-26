import { User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import usersFirstHeart from "@/assets/sticker-users-first-heart.png";
import designApp from "@/assets/sticker-design-app.png";
const About = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="about" className="min-h-screen py-20 px-6 bg-muted/20 relative overflow-hidden" ref={ref}>
      {/* Decorative stickers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src={usersFirstHeart} 
          alt="Users First sticker" 
          className={`absolute top-20 right-10 w-28 md:w-36 rotate-12 ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}
          style={{animationDelay: '0.3s'}}
        />
        <img 
          src={designApp} 
          alt="Design App sticker" 
          className={`absolute bottom-32 right-20 w-32 md:w-40 -rotate-6 ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}
          style={{animationDelay: '0.5s'}}
        />
      </div>
      
      <div className={`max-w-7xl mx-auto ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
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
                Estudiante de Diseño de Multimedia e Interacción con experiencia en creación de contenido digital, 
                diseño visual y gestión de redes sociales. Me apasiona conectar el diseño con la experiencia del 
                usuario, creando piezas funcionales, creativas y alineadas a las tendencias actuales.
              </p>
              <p>
                Trabajo con herramientas como Illustrator, Figma, Canva y Photoshop, y tengo conocimientos en UX/UI, 
                branding, marketing digital y diseño web. Aprecio recibir feedback crítico y capacidad para aprender 
                de forma constante.
              </p>
              <p>
                Busco oportunidades para desarrollarme en equipos interdisciplinarios, donde pueda aportar diseño 
                con propósito e impacto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;